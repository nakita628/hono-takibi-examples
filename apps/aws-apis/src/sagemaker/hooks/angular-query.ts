import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSageMakerAddAssociationKey() {
  return ['#X-Amz-Target=SageMaker.AddAssociation'] as const
}

export function getXAmzTargetSageMakerAddTagsKey() {
  return ['#X-Amz-Target=SageMaker.AddTags'] as const
}

export function getXAmzTargetSageMakerAssociateTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.AssociateTrialComponent'] as const
}

export function getXAmzTargetSageMakerBatchDescribeModelPackageKey() {
  return ['#X-Amz-Target=SageMaker.BatchDescribeModelPackage'] as const
}

export function getXAmzTargetSageMakerCreateActionKey() {
  return ['#X-Amz-Target=SageMaker.CreateAction'] as const
}

export function getXAmzTargetSageMakerCreateAlgorithmKey() {
  return ['#X-Amz-Target=SageMaker.CreateAlgorithm'] as const
}

export function getXAmzTargetSageMakerCreateAppKey() {
  return ['#X-Amz-Target=SageMaker.CreateApp'] as const
}

export function getXAmzTargetSageMakerCreateAppImageConfigKey() {
  return ['#X-Amz-Target=SageMaker.CreateAppImageConfig'] as const
}

export function getXAmzTargetSageMakerCreateArtifactKey() {
  return ['#X-Amz-Target=SageMaker.CreateArtifact'] as const
}

export function getXAmzTargetSageMakerCreateAutoMLJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateAutoMLJob'] as const
}

export function getXAmzTargetSageMakerCreateAutoMLJobV2Key() {
  return ['#X-Amz-Target=SageMaker.CreateAutoMLJobV2'] as const
}

export function getXAmzTargetSageMakerCreateCodeRepositoryKey() {
  return ['#X-Amz-Target=SageMaker.CreateCodeRepository'] as const
}

export function getXAmzTargetSageMakerCreateCompilationJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateCompilationJob'] as const
}

export function getXAmzTargetSageMakerCreateContextKey() {
  return ['#X-Amz-Target=SageMaker.CreateContext'] as const
}

export function getXAmzTargetSageMakerCreateDataQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerCreateDeviceFleetKey() {
  return ['#X-Amz-Target=SageMaker.CreateDeviceFleet'] as const
}

export function getXAmzTargetSageMakerCreateDomainKey() {
  return ['#X-Amz-Target=SageMaker.CreateDomain'] as const
}

export function getXAmzTargetSageMakerCreateEdgeDeploymentPlanKey() {
  return ['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan'] as const
}

export function getXAmzTargetSageMakerCreateEdgeDeploymentStageKey() {
  return ['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage'] as const
}

export function getXAmzTargetSageMakerCreateEdgePackagingJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateEdgePackagingJob'] as const
}

export function getXAmzTargetSageMakerCreateEndpointKey() {
  return ['#X-Amz-Target=SageMaker.CreateEndpoint'] as const
}

export function getXAmzTargetSageMakerCreateEndpointConfigKey() {
  return ['#X-Amz-Target=SageMaker.CreateEndpointConfig'] as const
}

export function getXAmzTargetSageMakerCreateExperimentKey() {
  return ['#X-Amz-Target=SageMaker.CreateExperiment'] as const
}

export function getXAmzTargetSageMakerCreateFeatureGroupKey() {
  return ['#X-Amz-Target=SageMaker.CreateFeatureGroup'] as const
}

export function getXAmzTargetSageMakerCreateFlowDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.CreateFlowDefinition'] as const
}

export function getXAmzTargetSageMakerCreateHubKey() {
  return ['#X-Amz-Target=SageMaker.CreateHub'] as const
}

export function getXAmzTargetSageMakerCreateHumanTaskUiKey() {
  return ['#X-Amz-Target=SageMaker.CreateHumanTaskUi'] as const
}

export function getXAmzTargetSageMakerCreateHyperParameterTuningJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob'] as const
}

export function getXAmzTargetSageMakerCreateImageKey() {
  return ['#X-Amz-Target=SageMaker.CreateImage'] as const
}

export function getXAmzTargetSageMakerCreateImageVersionKey() {
  return ['#X-Amz-Target=SageMaker.CreateImageVersion'] as const
}

export function getXAmzTargetSageMakerCreateInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.CreateInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerCreateInferenceRecommendationsJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob'] as const
}

export function getXAmzTargetSageMakerCreateLabelingJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateLabelingJob'] as const
}

export function getXAmzTargetSageMakerCreateModelKey() {
  return ['#X-Amz-Target=SageMaker.CreateModel'] as const
}

export function getXAmzTargetSageMakerCreateModelBiasJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition'] as const
}

export function getXAmzTargetSageMakerCreateModelCardKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelCard'] as const
}

export function getXAmzTargetSageMakerCreateModelCardExportJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelCardExportJob'] as const
}

export function getXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition'] as const
}

export function getXAmzTargetSageMakerCreateModelPackageKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelPackage'] as const
}

export function getXAmzTargetSageMakerCreateModelPackageGroupKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelPackageGroup'] as const
}

export function getXAmzTargetSageMakerCreateModelQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerCreateMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.CreateMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerCreateNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.CreateNotebookInstance'] as const
}

export function getXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerCreatePipelineKey() {
  return ['#X-Amz-Target=SageMaker.CreatePipeline'] as const
}

export function getXAmzTargetSageMakerCreatePresignedDomainUrlKey() {
  return ['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl'] as const
}

export function getXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlKey() {
  return ['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl'] as const
}

export function getXAmzTargetSageMakerCreateProcessingJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateProcessingJob'] as const
}

export function getXAmzTargetSageMakerCreateProjectKey() {
  return ['#X-Amz-Target=SageMaker.CreateProject'] as const
}

export function getXAmzTargetSageMakerCreateSpaceKey() {
  return ['#X-Amz-Target=SageMaker.CreateSpace'] as const
}

export function getXAmzTargetSageMakerCreateStudioLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerCreateTrainingJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateTrainingJob'] as const
}

export function getXAmzTargetSageMakerCreateTransformJobKey() {
  return ['#X-Amz-Target=SageMaker.CreateTransformJob'] as const
}

export function getXAmzTargetSageMakerCreateTrialKey() {
  return ['#X-Amz-Target=SageMaker.CreateTrial'] as const
}

export function getXAmzTargetSageMakerCreateTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.CreateTrialComponent'] as const
}

export function getXAmzTargetSageMakerCreateUserProfileKey() {
  return ['#X-Amz-Target=SageMaker.CreateUserProfile'] as const
}

export function getXAmzTargetSageMakerCreateWorkforceKey() {
  return ['#X-Amz-Target=SageMaker.CreateWorkforce'] as const
}

export function getXAmzTargetSageMakerCreateWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.CreateWorkteam'] as const
}

export function getXAmzTargetSageMakerDeleteActionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteAction'] as const
}

export function getXAmzTargetSageMakerDeleteAlgorithmKey() {
  return ['#X-Amz-Target=SageMaker.DeleteAlgorithm'] as const
}

export function getXAmzTargetSageMakerDeleteAppKey() {
  return ['#X-Amz-Target=SageMaker.DeleteApp'] as const
}

export function getXAmzTargetSageMakerDeleteAppImageConfigKey() {
  return ['#X-Amz-Target=SageMaker.DeleteAppImageConfig'] as const
}

export function getXAmzTargetSageMakerDeleteArtifactKey() {
  return ['#X-Amz-Target=SageMaker.DeleteArtifact'] as const
}

export function getXAmzTargetSageMakerDeleteAssociationKey() {
  return ['#X-Amz-Target=SageMaker.DeleteAssociation'] as const
}

export function getXAmzTargetSageMakerDeleteCodeRepositoryKey() {
  return ['#X-Amz-Target=SageMaker.DeleteCodeRepository'] as const
}

export function getXAmzTargetSageMakerDeleteContextKey() {
  return ['#X-Amz-Target=SageMaker.DeleteContext'] as const
}

export function getXAmzTargetSageMakerDeleteDataQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDeleteDeviceFleetKey() {
  return ['#X-Amz-Target=SageMaker.DeleteDeviceFleet'] as const
}

export function getXAmzTargetSageMakerDeleteDomainKey() {
  return ['#X-Amz-Target=SageMaker.DeleteDomain'] as const
}

export function getXAmzTargetSageMakerDeleteEdgeDeploymentPlanKey() {
  return ['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan'] as const
}

export function getXAmzTargetSageMakerDeleteEdgeDeploymentStageKey() {
  return ['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage'] as const
}

export function getXAmzTargetSageMakerDeleteEndpointKey() {
  return ['#X-Amz-Target=SageMaker.DeleteEndpoint'] as const
}

export function getXAmzTargetSageMakerDeleteEndpointConfigKey() {
  return ['#X-Amz-Target=SageMaker.DeleteEndpointConfig'] as const
}

export function getXAmzTargetSageMakerDeleteExperimentKey() {
  return ['#X-Amz-Target=SageMaker.DeleteExperiment'] as const
}

export function getXAmzTargetSageMakerDeleteFeatureGroupKey() {
  return ['#X-Amz-Target=SageMaker.DeleteFeatureGroup'] as const
}

export function getXAmzTargetSageMakerDeleteFlowDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteFlowDefinition'] as const
}

export function getXAmzTargetSageMakerDeleteHubKey() {
  return ['#X-Amz-Target=SageMaker.DeleteHub'] as const
}

export function getXAmzTargetSageMakerDeleteHubContentKey() {
  return ['#X-Amz-Target=SageMaker.DeleteHubContent'] as const
}

export function getXAmzTargetSageMakerDeleteHumanTaskUiKey() {
  return ['#X-Amz-Target=SageMaker.DeleteHumanTaskUi'] as const
}

export function getXAmzTargetSageMakerDeleteImageKey() {
  return ['#X-Amz-Target=SageMaker.DeleteImage'] as const
}

export function getXAmzTargetSageMakerDeleteImageVersionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteImageVersion'] as const
}

export function getXAmzTargetSageMakerDeleteInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.DeleteInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerDeleteModelKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModel'] as const
}

export function getXAmzTargetSageMakerDeleteModelBiasJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition'] as const
}

export function getXAmzTargetSageMakerDeleteModelCardKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelCard'] as const
}

export function getXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDeleteModelPackageKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelPackage'] as const
}

export function getXAmzTargetSageMakerDeleteModelPackageGroupKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelPackageGroup'] as const
}

export function getXAmzTargetSageMakerDeleteModelPackageGroupPolicyKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy'] as const
}

export function getXAmzTargetSageMakerDeleteModelQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDeleteMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerDeleteNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.DeleteNotebookInstance'] as const
}

export function getXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerDeletePipelineKey() {
  return ['#X-Amz-Target=SageMaker.DeletePipeline'] as const
}

export function getXAmzTargetSageMakerDeleteProjectKey() {
  return ['#X-Amz-Target=SageMaker.DeleteProject'] as const
}

export function getXAmzTargetSageMakerDeleteSpaceKey() {
  return ['#X-Amz-Target=SageMaker.DeleteSpace'] as const
}

export function getXAmzTargetSageMakerDeleteStudioLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerDeleteTagsKey() {
  return ['#X-Amz-Target=SageMaker.DeleteTags'] as const
}

export function getXAmzTargetSageMakerDeleteTrialKey() {
  return ['#X-Amz-Target=SageMaker.DeleteTrial'] as const
}

export function getXAmzTargetSageMakerDeleteTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.DeleteTrialComponent'] as const
}

export function getXAmzTargetSageMakerDeleteUserProfileKey() {
  return ['#X-Amz-Target=SageMaker.DeleteUserProfile'] as const
}

export function getXAmzTargetSageMakerDeleteWorkforceKey() {
  return ['#X-Amz-Target=SageMaker.DeleteWorkforce'] as const
}

export function getXAmzTargetSageMakerDeleteWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.DeleteWorkteam'] as const
}

export function getXAmzTargetSageMakerDeregisterDevicesKey() {
  return ['#X-Amz-Target=SageMaker.DeregisterDevices'] as const
}

export function getXAmzTargetSageMakerDescribeActionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeAction'] as const
}

export function getXAmzTargetSageMakerDescribeAlgorithmKey() {
  return ['#X-Amz-Target=SageMaker.DescribeAlgorithm'] as const
}

export function getXAmzTargetSageMakerDescribeAppKey() {
  return ['#X-Amz-Target=SageMaker.DescribeApp'] as const
}

export function getXAmzTargetSageMakerDescribeAppImageConfigKey() {
  return ['#X-Amz-Target=SageMaker.DescribeAppImageConfig'] as const
}

export function getXAmzTargetSageMakerDescribeArtifactKey() {
  return ['#X-Amz-Target=SageMaker.DescribeArtifact'] as const
}

export function getXAmzTargetSageMakerDescribeAutoMLJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeAutoMLJob'] as const
}

export function getXAmzTargetSageMakerDescribeAutoMLJobV2Key() {
  return ['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2'] as const
}

export function getXAmzTargetSageMakerDescribeCodeRepositoryKey() {
  return ['#X-Amz-Target=SageMaker.DescribeCodeRepository'] as const
}

export function getXAmzTargetSageMakerDescribeCompilationJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeCompilationJob'] as const
}

export function getXAmzTargetSageMakerDescribeContextKey() {
  return ['#X-Amz-Target=SageMaker.DescribeContext'] as const
}

export function getXAmzTargetSageMakerDescribeDataQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDescribeDeviceKey() {
  return ['#X-Amz-Target=SageMaker.DescribeDevice'] as const
}

export function getXAmzTargetSageMakerDescribeDeviceFleetKey() {
  return ['#X-Amz-Target=SageMaker.DescribeDeviceFleet'] as const
}

export function getXAmzTargetSageMakerDescribeDomainKey() {
  return ['#X-Amz-Target=SageMaker.DescribeDomain'] as const
}

export function getXAmzTargetSageMakerDescribeEdgeDeploymentPlanKey() {
  return ['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan'] as const
}

export function getXAmzTargetSageMakerDescribeEdgePackagingJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob'] as const
}

export function getXAmzTargetSageMakerDescribeEndpointKey() {
  return ['#X-Amz-Target=SageMaker.DescribeEndpoint'] as const
}

export function getXAmzTargetSageMakerDescribeEndpointConfigKey() {
  return ['#X-Amz-Target=SageMaker.DescribeEndpointConfig'] as const
}

export function getXAmzTargetSageMakerDescribeExperimentKey() {
  return ['#X-Amz-Target=SageMaker.DescribeExperiment'] as const
}

export function getXAmzTargetSageMakerDescribeFeatureGroupKey() {
  return ['#X-Amz-Target=SageMaker.DescribeFeatureGroup'] as const
}

export function getXAmzTargetSageMakerDescribeFeatureMetadataKey() {
  return ['#X-Amz-Target=SageMaker.DescribeFeatureMetadata'] as const
}

export function getXAmzTargetSageMakerDescribeFlowDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeFlowDefinition'] as const
}

export function getXAmzTargetSageMakerDescribeHubKey() {
  return ['#X-Amz-Target=SageMaker.DescribeHub'] as const
}

export function getXAmzTargetSageMakerDescribeHubContentKey() {
  return ['#X-Amz-Target=SageMaker.DescribeHubContent'] as const
}

export function getXAmzTargetSageMakerDescribeHumanTaskUiKey() {
  return ['#X-Amz-Target=SageMaker.DescribeHumanTaskUi'] as const
}

export function getXAmzTargetSageMakerDescribeHyperParameterTuningJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob'] as const
}

export function getXAmzTargetSageMakerDescribeImageKey() {
  return ['#X-Amz-Target=SageMaker.DescribeImage'] as const
}

export function getXAmzTargetSageMakerDescribeImageVersionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeImageVersion'] as const
}

export function getXAmzTargetSageMakerDescribeInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.DescribeInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerDescribeInferenceRecommendationsJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob'] as const
}

export function getXAmzTargetSageMakerDescribeLabelingJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeLabelingJob'] as const
}

export function getXAmzTargetSageMakerDescribeLineageGroupKey() {
  return ['#X-Amz-Target=SageMaker.DescribeLineageGroup'] as const
}

export function getXAmzTargetSageMakerDescribeModelKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModel'] as const
}

export function getXAmzTargetSageMakerDescribeModelBiasJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition'] as const
}

export function getXAmzTargetSageMakerDescribeModelCardKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelCard'] as const
}

export function getXAmzTargetSageMakerDescribeModelCardExportJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelCardExportJob'] as const
}

export function getXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDescribeModelPackageKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelPackage'] as const
}

export function getXAmzTargetSageMakerDescribeModelPackageGroupKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelPackageGroup'] as const
}

export function getXAmzTargetSageMakerDescribeModelQualityJobDefinitionKey() {
  return ['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition'] as const
}

export function getXAmzTargetSageMakerDescribeMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerDescribeNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.DescribeNotebookInstance'] as const
}

export function getXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerDescribePipelineKey() {
  return ['#X-Amz-Target=SageMaker.DescribePipeline'] as const
}

export function getXAmzTargetSageMakerDescribePipelineDefinitionForExecutionKey() {
  return ['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution'] as const
}

export function getXAmzTargetSageMakerDescribePipelineExecutionKey() {
  return ['#X-Amz-Target=SageMaker.DescribePipelineExecution'] as const
}

export function getXAmzTargetSageMakerDescribeProcessingJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeProcessingJob'] as const
}

export function getXAmzTargetSageMakerDescribeProjectKey() {
  return ['#X-Amz-Target=SageMaker.DescribeProject'] as const
}

export function getXAmzTargetSageMakerDescribeSpaceKey() {
  return ['#X-Amz-Target=SageMaker.DescribeSpace'] as const
}

export function getXAmzTargetSageMakerDescribeStudioLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerDescribeSubscribedWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam'] as const
}

export function getXAmzTargetSageMakerDescribeTrainingJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeTrainingJob'] as const
}

export function getXAmzTargetSageMakerDescribeTransformJobKey() {
  return ['#X-Amz-Target=SageMaker.DescribeTransformJob'] as const
}

export function getXAmzTargetSageMakerDescribeTrialKey() {
  return ['#X-Amz-Target=SageMaker.DescribeTrial'] as const
}

export function getXAmzTargetSageMakerDescribeTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.DescribeTrialComponent'] as const
}

export function getXAmzTargetSageMakerDescribeUserProfileKey() {
  return ['#X-Amz-Target=SageMaker.DescribeUserProfile'] as const
}

export function getXAmzTargetSageMakerDescribeWorkforceKey() {
  return ['#X-Amz-Target=SageMaker.DescribeWorkforce'] as const
}

export function getXAmzTargetSageMakerDescribeWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.DescribeWorkteam'] as const
}

export function getXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioKey() {
  return ['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio'] as const
}

export function getXAmzTargetSageMakerDisassociateTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.DisassociateTrialComponent'] as const
}

export function getXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioKey() {
  return ['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio'] as const
}

export function getXAmzTargetSageMakerGetDeviceFleetReportKey() {
  return ['#X-Amz-Target=SageMaker.GetDeviceFleetReport'] as const
}

export function getXAmzTargetSageMakerGetLineageGroupPolicyKey() {
  return ['#X-Amz-Target=SageMaker.GetLineageGroupPolicy'] as const
}

export function getXAmzTargetSageMakerGetModelPackageGroupPolicyKey() {
  return ['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy'] as const
}

export function getXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusKey() {
  return ['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus'] as const
}

export function getXAmzTargetSageMakerGetSearchSuggestionsKey() {
  return ['#X-Amz-Target=SageMaker.GetSearchSuggestions'] as const
}

export function getXAmzTargetSageMakerImportHubContentKey() {
  return ['#X-Amz-Target=SageMaker.ImportHubContent'] as const
}

export function getXAmzTargetSageMakerListActionsKey() {
  return ['#X-Amz-Target=SageMaker.ListActions'] as const
}

export function getXAmzTargetSageMakerListAlgorithmsKey() {
  return ['#X-Amz-Target=SageMaker.ListAlgorithms'] as const
}

export function getXAmzTargetSageMakerListAliasesKey() {
  return ['#X-Amz-Target=SageMaker.ListAliases'] as const
}

export function getXAmzTargetSageMakerListAppImageConfigsKey() {
  return ['#X-Amz-Target=SageMaker.ListAppImageConfigs'] as const
}

export function getXAmzTargetSageMakerListAppsKey() {
  return ['#X-Amz-Target=SageMaker.ListApps'] as const
}

export function getXAmzTargetSageMakerListArtifactsKey() {
  return ['#X-Amz-Target=SageMaker.ListArtifacts'] as const
}

export function getXAmzTargetSageMakerListAssociationsKey() {
  return ['#X-Amz-Target=SageMaker.ListAssociations'] as const
}

export function getXAmzTargetSageMakerListAutoMLJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListAutoMLJobs'] as const
}

export function getXAmzTargetSageMakerListCandidatesForAutoMLJobKey() {
  return ['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob'] as const
}

export function getXAmzTargetSageMakerListCodeRepositoriesKey() {
  return ['#X-Amz-Target=SageMaker.ListCodeRepositories'] as const
}

export function getXAmzTargetSageMakerListCompilationJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListCompilationJobs'] as const
}

export function getXAmzTargetSageMakerListContextsKey() {
  return ['#X-Amz-Target=SageMaker.ListContexts'] as const
}

export function getXAmzTargetSageMakerListDataQualityJobDefinitionsKey() {
  return ['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions'] as const
}

export function getXAmzTargetSageMakerListDeviceFleetsKey() {
  return ['#X-Amz-Target=SageMaker.ListDeviceFleets'] as const
}

export function getXAmzTargetSageMakerListDevicesKey() {
  return ['#X-Amz-Target=SageMaker.ListDevices'] as const
}

export function getXAmzTargetSageMakerListDomainsKey() {
  return ['#X-Amz-Target=SageMaker.ListDomains'] as const
}

export function getXAmzTargetSageMakerListEdgeDeploymentPlansKey() {
  return ['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans'] as const
}

export function getXAmzTargetSageMakerListEdgePackagingJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListEdgePackagingJobs'] as const
}

export function getXAmzTargetSageMakerListEndpointConfigsKey() {
  return ['#X-Amz-Target=SageMaker.ListEndpointConfigs'] as const
}

export function getXAmzTargetSageMakerListEndpointsKey() {
  return ['#X-Amz-Target=SageMaker.ListEndpoints'] as const
}

export function getXAmzTargetSageMakerListExperimentsKey() {
  return ['#X-Amz-Target=SageMaker.ListExperiments'] as const
}

export function getXAmzTargetSageMakerListFeatureGroupsKey() {
  return ['#X-Amz-Target=SageMaker.ListFeatureGroups'] as const
}

export function getXAmzTargetSageMakerListFlowDefinitionsKey() {
  return ['#X-Amz-Target=SageMaker.ListFlowDefinitions'] as const
}

export function getXAmzTargetSageMakerListHubContentVersionsKey() {
  return ['#X-Amz-Target=SageMaker.ListHubContentVersions'] as const
}

export function getXAmzTargetSageMakerListHubContentsKey() {
  return ['#X-Amz-Target=SageMaker.ListHubContents'] as const
}

export function getXAmzTargetSageMakerListHubsKey() {
  return ['#X-Amz-Target=SageMaker.ListHubs'] as const
}

export function getXAmzTargetSageMakerListHumanTaskUisKey() {
  return ['#X-Amz-Target=SageMaker.ListHumanTaskUis'] as const
}

export function getXAmzTargetSageMakerListHyperParameterTuningJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs'] as const
}

export function getXAmzTargetSageMakerListImageVersionsKey() {
  return ['#X-Amz-Target=SageMaker.ListImageVersions'] as const
}

export function getXAmzTargetSageMakerListImagesKey() {
  return ['#X-Amz-Target=SageMaker.ListImages'] as const
}

export function getXAmzTargetSageMakerListInferenceExperimentsKey() {
  return ['#X-Amz-Target=SageMaker.ListInferenceExperiments'] as const
}

export function getXAmzTargetSageMakerListInferenceRecommendationsJobStepsKey() {
  return ['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps'] as const
}

export function getXAmzTargetSageMakerListInferenceRecommendationsJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs'] as const
}

export function getXAmzTargetSageMakerListLabelingJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListLabelingJobs'] as const
}

export function getXAmzTargetSageMakerListLabelingJobsForWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam'] as const
}

export function getXAmzTargetSageMakerListLineageGroupsKey() {
  return ['#X-Amz-Target=SageMaker.ListLineageGroups'] as const
}

export function getXAmzTargetSageMakerListModelBiasJobDefinitionsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions'] as const
}

export function getXAmzTargetSageMakerListModelCardExportJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelCardExportJobs'] as const
}

export function getXAmzTargetSageMakerListModelCardVersionsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelCardVersions'] as const
}

export function getXAmzTargetSageMakerListModelCardsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelCards'] as const
}

export function getXAmzTargetSageMakerListModelExplainabilityJobDefinitionsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions'] as const
}

export function getXAmzTargetSageMakerListModelMetadataKey() {
  return ['#X-Amz-Target=SageMaker.ListModelMetadata'] as const
}

export function getXAmzTargetSageMakerListModelPackageGroupsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelPackageGroups'] as const
}

export function getXAmzTargetSageMakerListModelPackagesKey() {
  return ['#X-Amz-Target=SageMaker.ListModelPackages'] as const
}

export function getXAmzTargetSageMakerListModelQualityJobDefinitionsKey() {
  return ['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions'] as const
}

export function getXAmzTargetSageMakerListModelsKey() {
  return ['#X-Amz-Target=SageMaker.ListModels'] as const
}

export function getXAmzTargetSageMakerListMonitoringAlertHistoryKey() {
  return ['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory'] as const
}

export function getXAmzTargetSageMakerListMonitoringAlertsKey() {
  return ['#X-Amz-Target=SageMaker.ListMonitoringAlerts'] as const
}

export function getXAmzTargetSageMakerListMonitoringExecutionsKey() {
  return ['#X-Amz-Target=SageMaker.ListMonitoringExecutions'] as const
}

export function getXAmzTargetSageMakerListMonitoringSchedulesKey() {
  return ['#X-Amz-Target=SageMaker.ListMonitoringSchedules'] as const
}

export function getXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsKey() {
  return ['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs'] as const
}

export function getXAmzTargetSageMakerListNotebookInstancesKey() {
  return ['#X-Amz-Target=SageMaker.ListNotebookInstances'] as const
}

export function getXAmzTargetSageMakerListPipelineExecutionStepsKey() {
  return ['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps'] as const
}

export function getXAmzTargetSageMakerListPipelineExecutionsKey() {
  return ['#X-Amz-Target=SageMaker.ListPipelineExecutions'] as const
}

export function getXAmzTargetSageMakerListPipelineParametersForExecutionKey() {
  return ['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution'] as const
}

export function getXAmzTargetSageMakerListPipelinesKey() {
  return ['#X-Amz-Target=SageMaker.ListPipelines'] as const
}

export function getXAmzTargetSageMakerListProcessingJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListProcessingJobs'] as const
}

export function getXAmzTargetSageMakerListProjectsKey() {
  return ['#X-Amz-Target=SageMaker.ListProjects'] as const
}

export function getXAmzTargetSageMakerListSpacesKey() {
  return ['#X-Amz-Target=SageMaker.ListSpaces'] as const
}

export function getXAmzTargetSageMakerListStageDevicesKey() {
  return ['#X-Amz-Target=SageMaker.ListStageDevices'] as const
}

export function getXAmzTargetSageMakerListStudioLifecycleConfigsKey() {
  return ['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs'] as const
}

export function getXAmzTargetSageMakerListSubscribedWorkteamsKey() {
  return ['#X-Amz-Target=SageMaker.ListSubscribedWorkteams'] as const
}

export function getXAmzTargetSageMakerListTagsKey() {
  return ['#X-Amz-Target=SageMaker.ListTags'] as const
}

export function getXAmzTargetSageMakerListTrainingJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListTrainingJobs'] as const
}

export function getXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobKey() {
  return ['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob'] as const
}

export function getXAmzTargetSageMakerListTransformJobsKey() {
  return ['#X-Amz-Target=SageMaker.ListTransformJobs'] as const
}

export function getXAmzTargetSageMakerListTrialComponentsKey() {
  return ['#X-Amz-Target=SageMaker.ListTrialComponents'] as const
}

export function getXAmzTargetSageMakerListTrialsKey() {
  return ['#X-Amz-Target=SageMaker.ListTrials'] as const
}

export function getXAmzTargetSageMakerListUserProfilesKey() {
  return ['#X-Amz-Target=SageMaker.ListUserProfiles'] as const
}

export function getXAmzTargetSageMakerListWorkforcesKey() {
  return ['#X-Amz-Target=SageMaker.ListWorkforces'] as const
}

export function getXAmzTargetSageMakerListWorkteamsKey() {
  return ['#X-Amz-Target=SageMaker.ListWorkteams'] as const
}

export function getXAmzTargetSageMakerPutModelPackageGroupPolicyKey() {
  return ['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy'] as const
}

export function getXAmzTargetSageMakerQueryLineageKey() {
  return ['#X-Amz-Target=SageMaker.QueryLineage'] as const
}

export function getXAmzTargetSageMakerRegisterDevicesKey() {
  return ['#X-Amz-Target=SageMaker.RegisterDevices'] as const
}

export function getXAmzTargetSageMakerRenderUiTemplateKey() {
  return ['#X-Amz-Target=SageMaker.RenderUiTemplate'] as const
}

export function getXAmzTargetSageMakerRetryPipelineExecutionKey() {
  return ['#X-Amz-Target=SageMaker.RetryPipelineExecution'] as const
}

export function getXAmzTargetSageMakerSearchKey() {
  return ['#X-Amz-Target=SageMaker.Search'] as const
}

export function getXAmzTargetSageMakerSendPipelineExecutionStepFailureKey() {
  return ['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure'] as const
}

export function getXAmzTargetSageMakerSendPipelineExecutionStepSuccessKey() {
  return ['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess'] as const
}

export function getXAmzTargetSageMakerStartEdgeDeploymentStageKey() {
  return ['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage'] as const
}

export function getXAmzTargetSageMakerStartInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.StartInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerStartMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.StartMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerStartNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.StartNotebookInstance'] as const
}

export function getXAmzTargetSageMakerStartPipelineExecutionKey() {
  return ['#X-Amz-Target=SageMaker.StartPipelineExecution'] as const
}

export function getXAmzTargetSageMakerStopAutoMLJobKey() {
  return ['#X-Amz-Target=SageMaker.StopAutoMLJob'] as const
}

export function getXAmzTargetSageMakerStopCompilationJobKey() {
  return ['#X-Amz-Target=SageMaker.StopCompilationJob'] as const
}

export function getXAmzTargetSageMakerStopEdgeDeploymentStageKey() {
  return ['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage'] as const
}

export function getXAmzTargetSageMakerStopEdgePackagingJobKey() {
  return ['#X-Amz-Target=SageMaker.StopEdgePackagingJob'] as const
}

export function getXAmzTargetSageMakerStopHyperParameterTuningJobKey() {
  return ['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob'] as const
}

export function getXAmzTargetSageMakerStopInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.StopInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerStopInferenceRecommendationsJobKey() {
  return ['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob'] as const
}

export function getXAmzTargetSageMakerStopLabelingJobKey() {
  return ['#X-Amz-Target=SageMaker.StopLabelingJob'] as const
}

export function getXAmzTargetSageMakerStopMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.StopMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerStopNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.StopNotebookInstance'] as const
}

export function getXAmzTargetSageMakerStopPipelineExecutionKey() {
  return ['#X-Amz-Target=SageMaker.StopPipelineExecution'] as const
}

export function getXAmzTargetSageMakerStopProcessingJobKey() {
  return ['#X-Amz-Target=SageMaker.StopProcessingJob'] as const
}

export function getXAmzTargetSageMakerStopTrainingJobKey() {
  return ['#X-Amz-Target=SageMaker.StopTrainingJob'] as const
}

export function getXAmzTargetSageMakerStopTransformJobKey() {
  return ['#X-Amz-Target=SageMaker.StopTransformJob'] as const
}

export function getXAmzTargetSageMakerUpdateActionKey() {
  return ['#X-Amz-Target=SageMaker.UpdateAction'] as const
}

export function getXAmzTargetSageMakerUpdateAppImageConfigKey() {
  return ['#X-Amz-Target=SageMaker.UpdateAppImageConfig'] as const
}

export function getXAmzTargetSageMakerUpdateArtifactKey() {
  return ['#X-Amz-Target=SageMaker.UpdateArtifact'] as const
}

export function getXAmzTargetSageMakerUpdateCodeRepositoryKey() {
  return ['#X-Amz-Target=SageMaker.UpdateCodeRepository'] as const
}

export function getXAmzTargetSageMakerUpdateContextKey() {
  return ['#X-Amz-Target=SageMaker.UpdateContext'] as const
}

export function getXAmzTargetSageMakerUpdateDeviceFleetKey() {
  return ['#X-Amz-Target=SageMaker.UpdateDeviceFleet'] as const
}

export function getXAmzTargetSageMakerUpdateDevicesKey() {
  return ['#X-Amz-Target=SageMaker.UpdateDevices'] as const
}

export function getXAmzTargetSageMakerUpdateDomainKey() {
  return ['#X-Amz-Target=SageMaker.UpdateDomain'] as const
}

export function getXAmzTargetSageMakerUpdateEndpointKey() {
  return ['#X-Amz-Target=SageMaker.UpdateEndpoint'] as const
}

export function getXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesKey() {
  return ['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities'] as const
}

export function getXAmzTargetSageMakerUpdateExperimentKey() {
  return ['#X-Amz-Target=SageMaker.UpdateExperiment'] as const
}

export function getXAmzTargetSageMakerUpdateFeatureGroupKey() {
  return ['#X-Amz-Target=SageMaker.UpdateFeatureGroup'] as const
}

export function getXAmzTargetSageMakerUpdateFeatureMetadataKey() {
  return ['#X-Amz-Target=SageMaker.UpdateFeatureMetadata'] as const
}

export function getXAmzTargetSageMakerUpdateHubKey() {
  return ['#X-Amz-Target=SageMaker.UpdateHub'] as const
}

export function getXAmzTargetSageMakerUpdateImageKey() {
  return ['#X-Amz-Target=SageMaker.UpdateImage'] as const
}

export function getXAmzTargetSageMakerUpdateImageVersionKey() {
  return ['#X-Amz-Target=SageMaker.UpdateImageVersion'] as const
}

export function getXAmzTargetSageMakerUpdateInferenceExperimentKey() {
  return ['#X-Amz-Target=SageMaker.UpdateInferenceExperiment'] as const
}

export function getXAmzTargetSageMakerUpdateModelCardKey() {
  return ['#X-Amz-Target=SageMaker.UpdateModelCard'] as const
}

export function getXAmzTargetSageMakerUpdateModelPackageKey() {
  return ['#X-Amz-Target=SageMaker.UpdateModelPackage'] as const
}

export function getXAmzTargetSageMakerUpdateMonitoringAlertKey() {
  return ['#X-Amz-Target=SageMaker.UpdateMonitoringAlert'] as const
}

export function getXAmzTargetSageMakerUpdateMonitoringScheduleKey() {
  return ['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule'] as const
}

export function getXAmzTargetSageMakerUpdateNotebookInstanceKey() {
  return ['#X-Amz-Target=SageMaker.UpdateNotebookInstance'] as const
}

export function getXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigKey() {
  return ['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig'] as const
}

export function getXAmzTargetSageMakerUpdatePipelineKey() {
  return ['#X-Amz-Target=SageMaker.UpdatePipeline'] as const
}

export function getXAmzTargetSageMakerUpdatePipelineExecutionKey() {
  return ['#X-Amz-Target=SageMaker.UpdatePipelineExecution'] as const
}

export function getXAmzTargetSageMakerUpdateProjectKey() {
  return ['#X-Amz-Target=SageMaker.UpdateProject'] as const
}

export function getXAmzTargetSageMakerUpdateSpaceKey() {
  return ['#X-Amz-Target=SageMaker.UpdateSpace'] as const
}

export function getXAmzTargetSageMakerUpdateTrainingJobKey() {
  return ['#X-Amz-Target=SageMaker.UpdateTrainingJob'] as const
}

export function getXAmzTargetSageMakerUpdateTrialKey() {
  return ['#X-Amz-Target=SageMaker.UpdateTrial'] as const
}

export function getXAmzTargetSageMakerUpdateTrialComponentKey() {
  return ['#X-Amz-Target=SageMaker.UpdateTrialComponent'] as const
}

export function getXAmzTargetSageMakerUpdateUserProfileKey() {
  return ['#X-Amz-Target=SageMaker.UpdateUserProfile'] as const
}

export function getXAmzTargetSageMakerUpdateWorkforceKey() {
  return ['#X-Amz-Target=SageMaker.UpdateWorkforce'] as const
}

export function getXAmzTargetSageMakerUpdateWorkteamKey() {
  return ['#X-Amz-Target=SageMaker.UpdateWorkteam'] as const
}

export function getPostXAmzTargetSageMakerAddAssociationMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.AddAssociation',
    '/#X-Amz-Target=SageMaker.AddAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerAddAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerAddAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.AddAssociation'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerAddAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerAddAssociationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerAddTagsMutationKey() {
  return ['#X-Amz-Target=SageMaker.AddTags', '/#X-Amz-Target=SageMaker.AddTags', 'POST'] as const
}

export function getPostXAmzTargetSageMakerAddTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerAddTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.AddTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerAddTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerAddTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerAssociateTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.AssociateTrialComponent',
    '/#X-Amz-Target=SageMaker.AssociateTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerAssociateTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerAssociateTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.AssociateTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerAssociateTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerAssociateTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerBatchDescribeModelPackageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.BatchDescribeModelPackage',
    '/#X-Amz-Target=SageMaker.BatchDescribeModelPackage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerBatchDescribeModelPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerBatchDescribeModelPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.BatchDescribeModelPackage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerBatchDescribeModelPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerBatchDescribeModelPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateActionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAction',
    '/#X-Amz-Target=SageMaker.CreateAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateAction'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateAlgorithmMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAlgorithm',
    '/#X-Amz-Target=SageMaker.CreateAlgorithm',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateAlgorithm'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateAlgorithm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateAlgorithmMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateAppMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateApp',
    '/#X-Amz-Target=SageMaker.CreateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateApp'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateAppMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateAppImageConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAppImageConfig',
    '/#X-Amz-Target=SageMaker.CreateAppImageConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateAppImageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateAppImageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateAppImageConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateAppImageConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateAppImageConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateArtifactMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateArtifact',
    '/#X-Amz-Target=SageMaker.CreateArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateArtifact'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAutoMLJob',
    '/#X-Amz-Target=SageMaker.CreateAutoMLJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateAutoMLJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateAutoMLJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateAutoMLJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateAutoMLJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobV2MutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAutoMLJobV2',
    '/#X-Amz-Target=SageMaker.CreateAutoMLJobV2',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateAutoMLJobV2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateAutoMLJobV2'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateAutoMLJobV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateAutoMLJobV2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateCodeRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateCodeRepository',
    '/#X-Amz-Target=SageMaker.CreateCodeRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateCodeRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateCodeRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateCodeRepository'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateCodeRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateCodeRepositoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateCompilationJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateCompilationJob',
    '/#X-Amz-Target=SageMaker.CreateCompilationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateCompilationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateCompilationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateCompilationJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateCompilationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateCompilationJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateContextMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateContext',
    '/#X-Amz-Target=SageMaker.CreateContext',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateContext'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateContextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateDataQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateDeviceFleetMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDeviceFleet',
    '/#X-Amz-Target=SageMaker.CreateDeviceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateDeviceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateDeviceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateDeviceFleet'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateDeviceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateDeviceFleetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateDomainMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDomain',
    '/#X-Amz-Target=SageMaker.CreateDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateDomain'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateEdgeDeploymentPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentStageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentStageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateEdgeDeploymentStageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateEdgeDeploymentStage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateEdgeDeploymentStageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateEdgePackagingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.CreateEdgePackagingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateEdgePackagingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateEdgePackagingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateEdgePackagingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateEdgePackagingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateEdgePackagingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateEndpointMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEndpoint',
    '/#X-Amz-Target=SageMaker.CreateEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateEndpointConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEndpointConfig',
    '/#X-Amz-Target=SageMaker.CreateEndpointConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateEndpointConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateEndpointConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateEndpointConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateEndpointConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateEndpointConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateExperiment',
    '/#X-Amz-Target=SageMaker.CreateExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateExperiment'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateFeatureGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateFeatureGroup',
    '/#X-Amz-Target=SageMaker.CreateFeatureGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateFeatureGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateFeatureGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateFeatureGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateFeatureGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateFeatureGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateFlowDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateFlowDefinition',
    '/#X-Amz-Target=SageMaker.CreateFlowDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateFlowDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateFlowDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateFlowDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateFlowDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateFlowDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateHubMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHub',
    '/#X-Amz-Target=SageMaker.CreateHub',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateHubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateHubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateHub'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateHub<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateHubMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateHumanTaskUiMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHumanTaskUi',
    '/#X-Amz-Target=SageMaker.CreateHumanTaskUi',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateHumanTaskUiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateHumanTaskUiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateHumanTaskUi'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateHumanTaskUi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateHumanTaskUiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateHyperParameterTuningJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateHyperParameterTuningJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateHyperParameterTuningJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateHyperParameterTuningJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateHyperParameterTuningJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateImageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateImage',
    '/#X-Amz-Target=SageMaker.CreateImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateImage'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateImageVersionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateImageVersion',
    '/#X-Amz-Target=SageMaker.CreateImageVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateImageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateImageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateImageVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateImageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateImageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateInferenceExperiment',
    '/#X-Amz-Target=SageMaker.CreateInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateInferenceRecommendationsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateLabelingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateLabelingJob',
    '/#X-Amz-Target=SageMaker.CreateLabelingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateLabelingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateLabelingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateLabelingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateLabelingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateLabelingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModel',
    '/#X-Amz-Target=SageMaker.CreateModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateModel'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelBiasJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelCardMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelCard',
    '/#X-Amz-Target=SageMaker.CreateModelCard',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateModelCard'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelCardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelCardExportJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelCardExportJob',
    '/#X-Amz-Target=SageMaker.CreateModelCardExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelCardExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelCardExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelCardExportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelCardExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelCardExportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelPackageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelPackage',
    '/#X-Amz-Target=SageMaker.CreateModelPackage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelPackage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelPackageGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelPackageGroup',
    '/#X-Amz-Target=SageMaker.CreateModelPackageGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelPackageGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelPackageGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelPackageGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelPackageGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateModelPackageGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateModelQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.CreateMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateNotebookInstance',
    '/#X-Amz-Target=SageMaker.CreateNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreatePipelineMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePipeline',
    '/#X-Amz-Target=SageMaker.CreatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreatePipeline'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreatePipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreatePipelineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreatePresignedDomainUrlMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePresignedDomainUrl',
    '/#X-Amz-Target=SageMaker.CreatePresignedDomainUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreatePresignedDomainUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreatePresignedDomainUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreatePresignedDomainUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreatePresignedDomainUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl',
    '/#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateProcessingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateProcessingJob',
    '/#X-Amz-Target=SageMaker.CreateProcessingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateProcessingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateProcessingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateProcessingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateProcessingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateProcessingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateProjectMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateProject',
    '/#X-Amz-Target=SageMaker.CreateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateProject'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateSpaceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateSpace',
    '/#X-Amz-Target=SageMaker.CreateSpace',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateSpace'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateSpaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateStudioLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateStudioLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateStudioLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateStudioLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateStudioLifecycleConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateTrainingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrainingJob',
    '/#X-Amz-Target=SageMaker.CreateTrainingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateTrainingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateTrainingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateTrainingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateTrainingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateTrainingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateTransformJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTransformJob',
    '/#X-Amz-Target=SageMaker.CreateTransformJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateTransformJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateTransformJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateTransformJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateTransformJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateTransformJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateTrialMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrial',
    '/#X-Amz-Target=SageMaker.CreateTrial',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateTrial'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateTrial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateTrialMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrialComponent',
    '/#X-Amz-Target=SageMaker.CreateTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.CreateTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateUserProfile',
    '/#X-Amz-Target=SageMaker.CreateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateUserProfile'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateUserProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateUserProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateWorkforceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateWorkforce',
    '/#X-Amz-Target=SageMaker.CreateWorkforce',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateWorkforceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateWorkforceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkforce'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateWorkforce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateWorkforceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerCreateWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateWorkteam',
    '/#X-Amz-Target=SageMaker.CreateWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerCreateWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerCreateWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkteam'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerCreateWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerCreateWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteActionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAction',
    '/#X-Amz-Target=SageMaker.DeleteAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteAction'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteAlgorithmMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAlgorithm',
    '/#X-Amz-Target=SageMaker.DeleteAlgorithm',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteAlgorithm'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteAlgorithm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteAlgorithmMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteAppMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteApp',
    '/#X-Amz-Target=SageMaker.DeleteApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteApp'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteAppMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteAppImageConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAppImageConfig',
    '/#X-Amz-Target=SageMaker.DeleteAppImageConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteAppImageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteAppImageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteAppImageConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteAppImageConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteAppImageConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteArtifactMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteArtifact',
    '/#X-Amz-Target=SageMaker.DeleteArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteArtifact'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteAssociationMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAssociation',
    '/#X-Amz-Target=SageMaker.DeleteAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteAssociation'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteAssociationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteCodeRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteCodeRepository',
    '/#X-Amz-Target=SageMaker.DeleteCodeRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteCodeRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteCodeRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteCodeRepository'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteCodeRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteCodeRepositoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteContextMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteContext',
    '/#X-Amz-Target=SageMaker.DeleteContext',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteContext'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteContextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteDataQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteDeviceFleetMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDeviceFleet',
    '/#X-Amz-Target=SageMaker.DeleteDeviceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteDeviceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteDeviceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteDeviceFleet'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteDeviceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteDeviceFleetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteDomainMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDomain',
    '/#X-Amz-Target=SageMaker.DeleteDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteDomain'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteEdgeDeploymentPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteEdgeDeploymentStage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteEndpointMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEndpoint',
    '/#X-Amz-Target=SageMaker.DeleteEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteEndpointConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEndpointConfig',
    '/#X-Amz-Target=SageMaker.DeleteEndpointConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteEndpointConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteEndpointConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteEndpointConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteEndpointConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteEndpointConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteExperiment',
    '/#X-Amz-Target=SageMaker.DeleteExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteExperiment'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteFeatureGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteFeatureGroup',
    '/#X-Amz-Target=SageMaker.DeleteFeatureGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteFeatureGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteFeatureGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteFeatureGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteFeatureGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteFeatureGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteFlowDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteFlowDefinition',
    '/#X-Amz-Target=SageMaker.DeleteFlowDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteFlowDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteFlowDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteFlowDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteFlowDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteFlowDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteHubMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHub',
    '/#X-Amz-Target=SageMaker.DeleteHub',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteHubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteHubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteHub'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteHub<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteHubMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteHubContentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHubContent',
    '/#X-Amz-Target=SageMaker.DeleteHubContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteHubContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteHubContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteHubContent'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteHubContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteHubContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteHumanTaskUiMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHumanTaskUi',
    '/#X-Amz-Target=SageMaker.DeleteHumanTaskUi',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteHumanTaskUiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteHumanTaskUiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteHumanTaskUi'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteHumanTaskUi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteHumanTaskUiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteImageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteImage',
    '/#X-Amz-Target=SageMaker.DeleteImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteImage'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteImageVersionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteImageVersion',
    '/#X-Amz-Target=SageMaker.DeleteImageVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteImageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteImageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteImageVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteImageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteImageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteInferenceExperiment',
    '/#X-Amz-Target=SageMaker.DeleteInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModel',
    '/#X-Amz-Target=SageMaker.DeleteModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteModel'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelBiasJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelCardMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelCard',
    '/#X-Amz-Target=SageMaker.DeleteModelCard',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteModelCard'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelCardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelPackageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackage',
    '/#X-Amz-Target=SageMaker.DeleteModelPackage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelPackage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackageGroup',
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelPackageGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelPackageGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelPackageGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelPackageGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelPackageGroupPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteModelQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.DeleteMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteNotebookInstance',
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeletePipelineMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeletePipeline',
    '/#X-Amz-Target=SageMaker.DeletePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeletePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeletePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeletePipeline'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeletePipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeletePipelineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteProjectMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteProject',
    '/#X-Amz-Target=SageMaker.DeleteProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteProject'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteSpaceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteSpace',
    '/#X-Amz-Target=SageMaker.DeleteSpace',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteSpace'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteSpaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteStudioLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteTagsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTags',
    '/#X-Amz-Target=SageMaker.DeleteTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteTrialMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTrial',
    '/#X-Amz-Target=SageMaker.DeleteTrial',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteTrial'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteTrial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteTrialMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTrialComponent',
    '/#X-Amz-Target=SageMaker.DeleteTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DeleteTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteUserProfileMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteUserProfile',
    '/#X-Amz-Target=SageMaker.DeleteUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteUserProfile'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteUserProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteUserProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteWorkforceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteWorkforce',
    '/#X-Amz-Target=SageMaker.DeleteWorkforce',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteWorkforceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteWorkforceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkforce'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteWorkforce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteWorkforceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeleteWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteWorkteam',
    '/#X-Amz-Target=SageMaker.DeleteWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeleteWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeleteWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkteam'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeleteWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeleteWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDeregisterDevicesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeregisterDevices',
    '/#X-Amz-Target=SageMaker.DeregisterDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDeregisterDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDeregisterDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DeregisterDevices'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDeregisterDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDeregisterDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeActionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAction',
    '/#X-Amz-Target=SageMaker.DescribeAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeAction'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeAlgorithmMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAlgorithm',
    '/#X-Amz-Target=SageMaker.DescribeAlgorithm',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeAlgorithm'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeAlgorithm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeAlgorithmMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeAppMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeApp',
    '/#X-Amz-Target=SageMaker.DescribeApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeApp'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeAppMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeAppImageConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAppImageConfig',
    '/#X-Amz-Target=SageMaker.DescribeAppImageConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeAppImageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeAppImageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeAppImageConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeAppImageConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeAppImageConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeArtifactMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeArtifact',
    '/#X-Amz-Target=SageMaker.DescribeArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeArtifact'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAutoMLJob',
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeAutoMLJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeAutoMLJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeAutoMLJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeAutoMLJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobV2MutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAutoMLJobV2',
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJobV2',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeAutoMLJobV2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeAutoMLJobV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeAutoMLJobV2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeCodeRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeCodeRepository',
    '/#X-Amz-Target=SageMaker.DescribeCodeRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeCodeRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeCodeRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeCodeRepository'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeCodeRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeCodeRepositoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeCompilationJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeCompilationJob',
    '/#X-Amz-Target=SageMaker.DescribeCompilationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeCompilationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeCompilationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeCompilationJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeCompilationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeCompilationJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeContextMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeContext',
    '/#X-Amz-Target=SageMaker.DescribeContext',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeContext'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeContextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeDataQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeDeviceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDevice',
    '/#X-Amz-Target=SageMaker.DescribeDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeDevice'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeDeviceFleetMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDeviceFleet',
    '/#X-Amz-Target=SageMaker.DescribeDeviceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeDeviceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeDeviceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeDeviceFleet'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeDeviceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeDeviceFleetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeDomainMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDomain',
    '/#X-Amz-Target=SageMaker.DescribeDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeDomain'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeEdgeDeploymentPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeEdgePackagingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.DescribeEdgePackagingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeEdgePackagingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeEdgePackagingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeEdgePackagingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeEdgePackagingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeEndpointMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEndpoint',
    '/#X-Amz-Target=SageMaker.DescribeEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeEndpointConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEndpointConfig',
    '/#X-Amz-Target=SageMaker.DescribeEndpointConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeEndpointConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeEndpointConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeEndpointConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeEndpointConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeEndpointConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeExperiment',
    '/#X-Amz-Target=SageMaker.DescribeExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeFeatureGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFeatureGroup',
    '/#X-Amz-Target=SageMaker.DescribeFeatureGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeFeatureGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeFeatureGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeFeatureGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeFeatureGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeFeatureGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeFeatureMetadataMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFeatureMetadata',
    '/#X-Amz-Target=SageMaker.DescribeFeatureMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeFeatureMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeFeatureMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeFeatureMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeFeatureMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeFeatureMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeFlowDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFlowDefinition',
    '/#X-Amz-Target=SageMaker.DescribeFlowDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeFlowDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeFlowDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeFlowDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeFlowDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeFlowDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeHubMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHub',
    '/#X-Amz-Target=SageMaker.DescribeHub',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeHubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeHubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeHub'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeHub<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeHubMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeHubContentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHubContent',
    '/#X-Amz-Target=SageMaker.DescribeHubContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeHubContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeHubContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeHubContent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeHubContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeHubContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeHumanTaskUiMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHumanTaskUi',
    '/#X-Amz-Target=SageMaker.DescribeHumanTaskUi',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeHumanTaskUiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeHumanTaskUiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeHumanTaskUi'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeHumanTaskUi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeHumanTaskUiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeHyperParameterTuningJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeImageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeImage',
    '/#X-Amz-Target=SageMaker.DescribeImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeImage'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeImageVersionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeImageVersion',
    '/#X-Amz-Target=SageMaker.DescribeImageVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeImageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeImageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeImageVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeImageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeImageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeInferenceExperiment',
    '/#X-Amz-Target=SageMaker.DescribeInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeInferenceRecommendationsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeLabelingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeLabelingJob',
    '/#X-Amz-Target=SageMaker.DescribeLabelingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeLabelingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeLabelingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeLabelingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeLabelingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeLabelingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeLineageGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeLineageGroup',
    '/#X-Amz-Target=SageMaker.DescribeLineageGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeLineageGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeLineageGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeLineageGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeLineageGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeLineageGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModel',
    '/#X-Amz-Target=SageMaker.DescribeModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeModel'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeModelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelBiasJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelCardMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelCard',
    '/#X-Amz-Target=SageMaker.DescribeModelCard',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeModelCard'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeModelCardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelCardExportJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelCardExportJob',
    '/#X-Amz-Target=SageMaker.DescribeModelCardExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelCardExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelCardExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelCardExportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelCardExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeModelCardExportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelPackageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelPackage',
    '/#X-Amz-Target=SageMaker.DescribeModelPackage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelPackage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeModelPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelPackageGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelPackageGroup',
    '/#X-Amz-Target=SageMaker.DescribeModelPackageGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelPackageGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelPackageGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelPackageGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelPackageGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeModelPackageGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeModelQualityJobDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.DescribeMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeNotebookInstance',
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribePipelineMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipeline',
    '/#X-Amz-Target=SageMaker.DescribePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribePipeline'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribePipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribePipelineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution',
    '/#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribePipelineDefinitionForExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribePipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipelineExecution',
    '/#X-Amz-Target=SageMaker.DescribePipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribePipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribePipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribePipelineExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribePipelineExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribePipelineExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeProcessingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeProcessingJob',
    '/#X-Amz-Target=SageMaker.DescribeProcessingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeProcessingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeProcessingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeProcessingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeProcessingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeProcessingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeProjectMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeProject',
    '/#X-Amz-Target=SageMaker.DescribeProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeProject'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeSpaceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeSpace',
    '/#X-Amz-Target=SageMaker.DescribeSpace',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeSpace'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeSpaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeStudioLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeSubscribedWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam',
    '/#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeSubscribedWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeSubscribedWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeSubscribedWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeSubscribedWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeTrainingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrainingJob',
    '/#X-Amz-Target=SageMaker.DescribeTrainingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeTrainingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeTrainingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeTrainingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeTrainingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeTrainingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeTransformJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTransformJob',
    '/#X-Amz-Target=SageMaker.DescribeTransformJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeTransformJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeTransformJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeTransformJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeTransformJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeTransformJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeTrialMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrial',
    '/#X-Amz-Target=SageMaker.DescribeTrial',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeTrial'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeTrial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeTrialMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrialComponent',
    '/#X-Amz-Target=SageMaker.DescribeTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeUserProfileMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeUserProfile',
    '/#X-Amz-Target=SageMaker.DescribeUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DescribeUserProfile'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeUserProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeUserProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeWorkforceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeWorkforce',
    '/#X-Amz-Target=SageMaker.DescribeWorkforce',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeWorkforceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeWorkforceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeWorkforce'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeWorkforce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeWorkforceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDescribeWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeWorkteam',
    '/#X-Amz-Target=SageMaker.DescribeWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDescribeWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDescribeWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.DescribeWorkteam'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerDescribeWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDescribeWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio',
    '/#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerDisassociateTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.DisassociateTrialComponent',
    '/#X-Amz-Target=SageMaker.DisassociateTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerDisassociateTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerDisassociateTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.DisassociateTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerDisassociateTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerDisassociateTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio',
    '/#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerGetDeviceFleetReportMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.GetDeviceFleetReport',
    '/#X-Amz-Target=SageMaker.GetDeviceFleetReport',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerGetDeviceFleetReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerGetDeviceFleetReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.GetDeviceFleetReport'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerGetDeviceFleetReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerGetDeviceFleetReportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerGetLineageGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.GetLineageGroupPolicy',
    '/#X-Amz-Target=SageMaker.GetLineageGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerGetLineageGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerGetLineageGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.GetLineageGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerGetLineageGroupPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerGetLineageGroupPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerGetModelPackageGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerGetModelPackageGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerGetModelPackageGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerGetModelPackageGroupPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerGetModelPackageGroupPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus',
    '/#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerGetSearchSuggestionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.GetSearchSuggestions',
    '/#X-Amz-Target=SageMaker.GetSearchSuggestions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerGetSearchSuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerGetSearchSuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.GetSearchSuggestions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerGetSearchSuggestions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerGetSearchSuggestionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerImportHubContentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ImportHubContent',
    '/#X-Amz-Target=SageMaker.ImportHubContent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerImportHubContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerImportHubContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ImportHubContent'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerImportHubContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerImportHubContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListActionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListActions',
    '/#X-Amz-Target=SageMaker.ListActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListActions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListActionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAlgorithmsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAlgorithms',
    '/#X-Amz-Target=SageMaker.ListAlgorithms',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListAlgorithmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAlgorithmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListAlgorithms'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListAlgorithms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAlgorithmsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAliasesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAliases',
    '/#X-Amz-Target=SageMaker.ListAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListAliases'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAppImageConfigsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAppImageConfigs',
    '/#X-Amz-Target=SageMaker.ListAppImageConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListAppImageConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAppImageConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListAppImageConfigs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListAppImageConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAppImageConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAppsMutationKey() {
  return ['#X-Amz-Target=SageMaker.ListApps', '/#X-Amz-Target=SageMaker.ListApps', 'POST'] as const
}

export function getPostXAmzTargetSageMakerListAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListApps'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListApps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAppsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListArtifactsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListArtifacts',
    '/#X-Amz-Target=SageMaker.ListArtifacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListArtifacts'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListArtifacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListArtifactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAssociationsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAssociations',
    '/#X-Amz-Target=SageMaker.ListAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListAssociations'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListAutoMLJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAutoMLJobs',
    '/#X-Amz-Target=SageMaker.ListAutoMLJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListAutoMLJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListAutoMLJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListAutoMLJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListAutoMLJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListAutoMLJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListCandidatesForAutoMLJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob',
    '/#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListCandidatesForAutoMLJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListCandidatesForAutoMLJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListCandidatesForAutoMLJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListCandidatesForAutoMLJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListCodeRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCodeRepositories',
    '/#X-Amz-Target=SageMaker.ListCodeRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListCodeRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListCodeRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListCodeRepositories'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListCodeRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListCodeRepositoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListCompilationJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCompilationJobs',
    '/#X-Amz-Target=SageMaker.ListCompilationJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListCompilationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListCompilationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListCompilationJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListCompilationJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListCompilationJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListContextsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListContexts',
    '/#X-Amz-Target=SageMaker.ListContexts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListContextsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListContextsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListContexts'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListContexts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListContextsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListDataQualityJobDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListDataQualityJobDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListDataQualityJobDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListDataQualityJobDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListDataQualityJobDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListDeviceFleetsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDeviceFleets',
    '/#X-Amz-Target=SageMaker.ListDeviceFleets',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListDeviceFleetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListDeviceFleetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListDeviceFleets'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListDeviceFleets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListDeviceFleetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListDevicesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDevices',
    '/#X-Amz-Target=SageMaker.ListDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListDevices'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListDomainsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDomains',
    '/#X-Amz-Target=SageMaker.ListDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListDomains'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListEdgeDeploymentPlansMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans',
    '/#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListEdgeDeploymentPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListEdgeDeploymentPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListEdgeDeploymentPlans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListEdgeDeploymentPlansMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListEdgePackagingJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEdgePackagingJobs',
    '/#X-Amz-Target=SageMaker.ListEdgePackagingJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListEdgePackagingJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListEdgePackagingJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListEdgePackagingJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListEdgePackagingJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListEdgePackagingJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListEndpointConfigsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEndpointConfigs',
    '/#X-Amz-Target=SageMaker.ListEndpointConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListEndpointConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListEndpointConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListEndpointConfigs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListEndpointConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListEndpointConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListEndpointsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEndpoints',
    '/#X-Amz-Target=SageMaker.ListEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListEndpoints'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListExperimentsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListExperiments',
    '/#X-Amz-Target=SageMaker.ListExperiments',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListExperimentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListExperiments'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListExperiments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListExperimentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListFeatureGroupsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListFeatureGroups',
    '/#X-Amz-Target=SageMaker.ListFeatureGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListFeatureGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListFeatureGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListFeatureGroups'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListFeatureGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListFeatureGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListFlowDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListFlowDefinitions',
    '/#X-Amz-Target=SageMaker.ListFlowDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListFlowDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListFlowDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListFlowDefinitions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListFlowDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListFlowDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListHubContentVersionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHubContentVersions',
    '/#X-Amz-Target=SageMaker.ListHubContentVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListHubContentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListHubContentVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListHubContentVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListHubContentVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListHubContentVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListHubContentsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHubContents',
    '/#X-Amz-Target=SageMaker.ListHubContents',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListHubContentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListHubContentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListHubContents'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListHubContents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListHubContentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListHubsMutationKey() {
  return ['#X-Amz-Target=SageMaker.ListHubs', '/#X-Amz-Target=SageMaker.ListHubs', 'POST'] as const
}

export function getPostXAmzTargetSageMakerListHubsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListHubsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListHubs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListHubs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListHubsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListHumanTaskUisMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHumanTaskUis',
    '/#X-Amz-Target=SageMaker.ListHumanTaskUis',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListHumanTaskUisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListHumanTaskUisMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListHumanTaskUis'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListHumanTaskUis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListHumanTaskUisMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListHyperParameterTuningJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs',
    '/#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListHyperParameterTuningJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListHyperParameterTuningJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListHyperParameterTuningJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListHyperParameterTuningJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListImageVersionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListImageVersions',
    '/#X-Amz-Target=SageMaker.ListImageVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListImageVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListImageVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListImageVersions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListImageVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListImageVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListImagesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListImages',
    '/#X-Amz-Target=SageMaker.ListImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListImages'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListImagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListInferenceExperimentsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceExperiments',
    '/#X-Amz-Target=SageMaker.ListInferenceExperiments',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListInferenceExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListInferenceExperimentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListInferenceExperiments'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListInferenceExperiments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListInferenceExperimentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps',
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListInferenceRecommendationsJobSteps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs',
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListInferenceRecommendationsJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListInferenceRecommendationsJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListInferenceRecommendationsJobsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListLabelingJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLabelingJobs',
    '/#X-Amz-Target=SageMaker.ListLabelingJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListLabelingJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListLabelingJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListLabelingJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListLabelingJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListLabelingJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListLabelingJobsForWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam',
    '/#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListLabelingJobsForWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListLabelingJobsForWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListLabelingJobsForWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListLabelingJobsForWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListLineageGroupsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLineageGroups',
    '/#X-Amz-Target=SageMaker.ListLineageGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListLineageGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListLineageGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListLineageGroups'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListLineageGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListLineageGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelBiasJobDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelBiasJobDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelBiasJobDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelBiasJobDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelBiasJobDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelCardExportJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCardExportJobs',
    '/#X-Amz-Target=SageMaker.ListModelCardExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelCardExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelCardExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelCardExportJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelCardExportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelCardExportJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelCardVersionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCardVersions',
    '/#X-Amz-Target=SageMaker.ListModelCardVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelCardVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelCardVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelCardVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelCardVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelCardVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelCardsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCards',
    '/#X-Amz-Target=SageMaker.ListModelCards',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListModelCards'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelCardsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelExplainabilityJobDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelMetadataMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelMetadata',
    '/#X-Amz-Target=SageMaker.ListModelMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListModelMetadata'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelPackageGroupsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelPackageGroups',
    '/#X-Amz-Target=SageMaker.ListModelPackageGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelPackageGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelPackageGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelPackageGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelPackageGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelPackageGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelPackagesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelPackages',
    '/#X-Amz-Target=SageMaker.ListModelPackages',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelPackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelPackagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListModelPackages'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelPackages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelPackagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelQualityJobDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelQualityJobDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelQualityJobDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListModelQualityJobDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListModelQualityJobDefinitionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListModelsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModels',
    '/#X-Amz-Target=SageMaker.ListModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListModels'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListModels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListModelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListMonitoringAlertHistoryMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringAlertHistory',
    '/#X-Amz-Target=SageMaker.ListMonitoringAlertHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListMonitoringAlertHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListMonitoringAlertHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListMonitoringAlertHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListMonitoringAlertHistoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListMonitoringAlertsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringAlerts',
    '/#X-Amz-Target=SageMaker.ListMonitoringAlerts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListMonitoringAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListMonitoringAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListMonitoringAlerts'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListMonitoringAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListMonitoringAlertsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListMonitoringExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringExecutions',
    '/#X-Amz-Target=SageMaker.ListMonitoringExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListMonitoringExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListMonitoringExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListMonitoringExecutions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListMonitoringExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListMonitoringExecutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListMonitoringSchedulesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringSchedules',
    '/#X-Amz-Target=SageMaker.ListMonitoringSchedules',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListMonitoringSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListMonitoringSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListMonitoringSchedules'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListMonitoringSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListMonitoringSchedulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs',
    '/#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListNotebookInstancesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListNotebookInstances',
    '/#X-Amz-Target=SageMaker.ListNotebookInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListNotebookInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListNotebookInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListNotebookInstances'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListNotebookInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListNotebookInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListPipelineExecutionStepsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineExecutionSteps',
    '/#X-Amz-Target=SageMaker.ListPipelineExecutionSteps',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListPipelineExecutionStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListPipelineExecutionStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListPipelineExecutionSteps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListPipelineExecutionStepsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListPipelineExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineExecutions',
    '/#X-Amz-Target=SageMaker.ListPipelineExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListPipelineExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListPipelineExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListPipelineExecutions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListPipelineExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListPipelineExecutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListPipelineParametersForExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineParametersForExecution',
    '/#X-Amz-Target=SageMaker.ListPipelineParametersForExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListPipelineParametersForExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListPipelineParametersForExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListPipelineParametersForExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListPipelineParametersForExecutionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListPipelinesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelines',
    '/#X-Amz-Target=SageMaker.ListPipelines',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListPipelinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListPipelines'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListPipelines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListPipelinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListProcessingJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListProcessingJobs',
    '/#X-Amz-Target=SageMaker.ListProcessingJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListProcessingJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListProcessingJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListProcessingJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListProcessingJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListProcessingJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListProjectsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListProjects',
    '/#X-Amz-Target=SageMaker.ListProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListProjects'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListProjectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListSpacesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListSpaces',
    '/#X-Amz-Target=SageMaker.ListSpaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListSpacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListSpacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListSpaces'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListSpaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListSpacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListStageDevicesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListStageDevices',
    '/#X-Amz-Target=SageMaker.ListStageDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListStageDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListStageDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListStageDevices'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListStageDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListStageDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListStudioLifecycleConfigsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs',
    '/#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListStudioLifecycleConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListStudioLifecycleConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListStudioLifecycleConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListStudioLifecycleConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListSubscribedWorkteamsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListSubscribedWorkteams',
    '/#X-Amz-Target=SageMaker.ListSubscribedWorkteams',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListSubscribedWorkteamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListSubscribedWorkteamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListSubscribedWorkteams'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListSubscribedWorkteams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListSubscribedWorkteamsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTagsMutationKey() {
  return ['#X-Amz-Target=SageMaker.ListTags', '/#X-Amz-Target=SageMaker.ListTags', 'POST'] as const
}

export function getPostXAmzTargetSageMakerListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTrainingJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrainingJobs',
    '/#X-Amz-Target=SageMaker.ListTrainingJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListTrainingJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTrainingJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListTrainingJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListTrainingJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListTrainingJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTransformJobsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTransformJobs',
    '/#X-Amz-Target=SageMaker.ListTransformJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListTransformJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTransformJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListTransformJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListTransformJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListTransformJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTrialComponentsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrialComponents',
    '/#X-Amz-Target=SageMaker.ListTrialComponents',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListTrialComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTrialComponentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.ListTrialComponents'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerListTrialComponents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListTrialComponentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListTrialsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrials',
    '/#X-Amz-Target=SageMaker.ListTrials',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListTrialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListTrialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListTrials'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListTrials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListTrialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListUserProfilesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListUserProfiles',
    '/#X-Amz-Target=SageMaker.ListUserProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListUserProfiles'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListUserProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListUserProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListWorkforcesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListWorkforces',
    '/#X-Amz-Target=SageMaker.ListWorkforces',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListWorkforcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListWorkforcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListWorkforces'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListWorkforces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListWorkforcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerListWorkteamsMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.ListWorkteams',
    '/#X-Amz-Target=SageMaker.ListWorkteams',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerListWorkteamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerListWorkteamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.ListWorkteams'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerListWorkteams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerListWorkteamsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerPutModelPackageGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerPutModelPackageGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerPutModelPackageGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerPutModelPackageGroupPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerPutModelPackageGroupPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerQueryLineageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.QueryLineage',
    '/#X-Amz-Target=SageMaker.QueryLineage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerQueryLineageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerQueryLineageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.QueryLineage'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerQueryLineage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerQueryLineageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerRegisterDevicesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.RegisterDevices',
    '/#X-Amz-Target=SageMaker.RegisterDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerRegisterDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerRegisterDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.RegisterDevices'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerRegisterDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerRegisterDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerRenderUiTemplateMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.RenderUiTemplate',
    '/#X-Amz-Target=SageMaker.RenderUiTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerRenderUiTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerRenderUiTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.RenderUiTemplate'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerRenderUiTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerRenderUiTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerRetryPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.RetryPipelineExecution',
    '/#X-Amz-Target=SageMaker.RetryPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerRetryPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerRetryPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.RetryPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerRetryPipelineExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerRetryPipelineExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerSearchMutationKey() {
  return ['#X-Amz-Target=SageMaker.Search', '/#X-Amz-Target=SageMaker.Search', 'POST'] as const
}

export function getPostXAmzTargetSageMakerSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.Search'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure',
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerSendPipelineExecutionStepFailure<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess',
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerSendPipelineExecutionStepSuccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStartEdgeDeploymentStageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StartEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.StartEdgeDeploymentStage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStartEdgeDeploymentStageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStartEdgeDeploymentStageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStartEdgeDeploymentStage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStartEdgeDeploymentStageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStartInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StartInferenceExperiment',
    '/#X-Amz-Target=SageMaker.StartInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStartInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStartInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StartInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStartInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStartInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStartMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StartMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.StartMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStartMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStartMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StartMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStartMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStartMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStartNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StartNotebookInstance',
    '/#X-Amz-Target=SageMaker.StartNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStartNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStartNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StartNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStartNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStartNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStartPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StartPipelineExecution',
    '/#X-Amz-Target=SageMaker.StartPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStartPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStartPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StartPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStartPipelineExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStartPipelineExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopAutoMLJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopAutoMLJob',
    '/#X-Amz-Target=SageMaker.StopAutoMLJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopAutoMLJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopAutoMLJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.StopAutoMLJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerStopAutoMLJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopAutoMLJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopCompilationJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopCompilationJob',
    '/#X-Amz-Target=SageMaker.StopCompilationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopCompilationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopCompilationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopCompilationJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopCompilationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopCompilationJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopEdgeDeploymentStageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.StopEdgeDeploymentStage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopEdgeDeploymentStageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopEdgeDeploymentStageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopEdgeDeploymentStage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopEdgeDeploymentStageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopEdgePackagingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.StopEdgePackagingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopEdgePackagingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopEdgePackagingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopEdgePackagingJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopEdgePackagingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopEdgePackagingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopHyperParameterTuningJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.StopHyperParameterTuningJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopHyperParameterTuningJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopHyperParameterTuningJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopHyperParameterTuningJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopHyperParameterTuningJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopInferenceExperiment',
    '/#X-Amz-Target=SageMaker.StopInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopInferenceRecommendationsJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopInferenceRecommendationsJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopInferenceRecommendationsJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopInferenceRecommendationsJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerStopInferenceRecommendationsJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopLabelingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopLabelingJob',
    '/#X-Amz-Target=SageMaker.StopLabelingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopLabelingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopLabelingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.StopLabelingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerStopLabelingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopLabelingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.StopMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopNotebookInstance',
    '/#X-Amz-Target=SageMaker.StopNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopPipelineExecution',
    '/#X-Amz-Target=SageMaker.StopPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.StopPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerStopPipelineExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopPipelineExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopProcessingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopProcessingJob',
    '/#X-Amz-Target=SageMaker.StopProcessingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopProcessingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopProcessingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.StopProcessingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerStopProcessingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopProcessingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopTrainingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopTrainingJob',
    '/#X-Amz-Target=SageMaker.StopTrainingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopTrainingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopTrainingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.StopTrainingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerStopTrainingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopTrainingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerStopTransformJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.StopTransformJob',
    '/#X-Amz-Target=SageMaker.StopTransformJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerStopTransformJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerStopTransformJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.StopTransformJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerStopTransformJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerStopTransformJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateActionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateAction',
    '/#X-Amz-Target=SageMaker.UpdateAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateAction'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateAppImageConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateAppImageConfig',
    '/#X-Amz-Target=SageMaker.UpdateAppImageConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateAppImageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateAppImageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateAppImageConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateAppImageConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateAppImageConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateArtifactMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateArtifact',
    '/#X-Amz-Target=SageMaker.UpdateArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateArtifact'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateCodeRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateCodeRepository',
    '/#X-Amz-Target=SageMaker.UpdateCodeRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateCodeRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateCodeRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateCodeRepository'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateCodeRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateCodeRepositoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateContextMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateContext',
    '/#X-Amz-Target=SageMaker.UpdateContext',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateContext'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateContextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateDeviceFleetMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDeviceFleet',
    '/#X-Amz-Target=SageMaker.UpdateDeviceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateDeviceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateDeviceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateDeviceFleet'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateDeviceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateDeviceFleetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateDevicesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDevices',
    '/#X-Amz-Target=SageMaker.UpdateDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateDevices'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateDomainMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDomain',
    '/#X-Amz-Target=SageMaker.UpdateDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateDomain'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateEndpointMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateEndpoint',
    '/#X-Amz-Target=SageMaker.UpdateEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities',
    '/#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateExperiment',
    '/#X-Amz-Target=SageMaker.UpdateExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateExperiment'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateFeatureGroupMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateFeatureGroup',
    '/#X-Amz-Target=SageMaker.UpdateFeatureGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateFeatureGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateFeatureGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateFeatureGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateFeatureGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateFeatureGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateFeatureMetadataMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateFeatureMetadata',
    '/#X-Amz-Target=SageMaker.UpdateFeatureMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateFeatureMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateFeatureMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateFeatureMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateFeatureMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateFeatureMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateHubMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateHub',
    '/#X-Amz-Target=SageMaker.UpdateHub',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateHubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateHubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateHub'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateHub<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateHubMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateImageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateImage',
    '/#X-Amz-Target=SageMaker.UpdateImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateImage'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateImageVersionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateImageVersion',
    '/#X-Amz-Target=SageMaker.UpdateImageVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateImageVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateImageVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateImageVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateImageVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateImageVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateInferenceExperimentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateInferenceExperiment',
    '/#X-Amz-Target=SageMaker.UpdateInferenceExperiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateInferenceExperimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateInferenceExperimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateInferenceExperiment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateInferenceExperiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateInferenceExperimentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateModelCardMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateModelCard',
    '/#X-Amz-Target=SageMaker.UpdateModelCard',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateModelCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateModelCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateModelCard'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateModelCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateModelCardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateModelPackageMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateModelPackage',
    '/#X-Amz-Target=SageMaker.UpdateModelPackage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateModelPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateModelPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateModelPackage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateModelPackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateModelPackageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateMonitoringAlertMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateMonitoringAlert',
    '/#X-Amz-Target=SageMaker.UpdateMonitoringAlert',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateMonitoringAlertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateMonitoringAlertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateMonitoringAlert'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateMonitoringAlert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateMonitoringAlertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateMonitoringScheduleMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.UpdateMonitoringSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateMonitoringScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateMonitoringScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateMonitoringSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateMonitoringScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateNotebookInstance',
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateNotebookInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateNotebookInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateNotebookInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateNotebookInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdatePipelineMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdatePipeline',
    '/#X-Amz-Target=SageMaker.UpdatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdatePipeline'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdatePipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdatePipelineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdatePipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdatePipelineExecution',
    '/#X-Amz-Target=SageMaker.UpdatePipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdatePipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdatePipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdatePipelineExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdatePipelineExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdatePipelineExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateProjectMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateProject',
    '/#X-Amz-Target=SageMaker.UpdateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateProject'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateSpaceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateSpace',
    '/#X-Amz-Target=SageMaker.UpdateSpace',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateSpace'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateSpaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateTrainingJobMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrainingJob',
    '/#X-Amz-Target=SageMaker.UpdateTrainingJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateTrainingJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateTrainingJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateTrainingJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateTrainingJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateTrainingJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateTrialMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrial',
    '/#X-Amz-Target=SageMaker.UpdateTrial',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateTrial'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateTrial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateTrialMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateTrialComponentMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrialComponent',
    '/#X-Amz-Target=SageMaker.UpdateTrialComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateTrialComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateTrialComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SageMaker.UpdateTrialComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateTrialComponent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateTrialComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateUserProfile',
    '/#X-Amz-Target=SageMaker.UpdateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateUserProfile'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateUserProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateUserProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateWorkforceMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateWorkforce',
    '/#X-Amz-Target=SageMaker.UpdateWorkforce',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateWorkforceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateWorkforceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkforce'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateWorkforce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateWorkforceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetSageMakerUpdateWorkteamMutationKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateWorkteam',
    '/#X-Amz-Target=SageMaker.UpdateWorkteam',
    'POST',
  ] as const
}

export function getPostXAmzTargetSageMakerUpdateWorkteamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSageMakerUpdateWorkteamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkteam'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetSageMakerUpdateWorkteam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetSageMakerUpdateWorkteamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
