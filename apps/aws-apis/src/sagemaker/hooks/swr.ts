import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetSageMakerAddAssociationKey() {
  return [
    '#X-Amz-Target=SageMaker.AddAssociation',
    '/#X-Amz-Target=SageMaker.AddAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerAddAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerAddAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.AddAssociation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerAddTagsKey() {
  return ['#X-Amz-Target=SageMaker.AddTags', '/#X-Amz-Target=SageMaker.AddTags', 'POST'] as const
}

export function usePostXAmzTargetSageMakerAddTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerAddTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.AddTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerAssociateTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.AssociateTrialComponent',
    '/#X-Amz-Target=SageMaker.AssociateTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerAssociateTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerAssociateTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.AssociateTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerBatchDescribeModelPackageKey() {
  return [
    '#X-Amz-Target=SageMaker.BatchDescribeModelPackage',
    '/#X-Amz-Target=SageMaker.BatchDescribeModelPackage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerBatchDescribeModelPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerBatchDescribeModelPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.BatchDescribeModelPackage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateActionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAction',
    '/#X-Amz-Target=SageMaker.CreateAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateAlgorithmKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAlgorithm',
    '/#X-Amz-Target=SageMaker.CreateAlgorithm',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateAlgorithm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateAlgorithmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateAlgorithm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateAppKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateApp',
    '/#X-Amz-Target=SageMaker.CreateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateApp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateAppImageConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAppImageConfig',
    '/#X-Amz-Target=SageMaker.CreateAppImageConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateAppImageConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateAppImageConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateAppImageConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateArtifactKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateArtifact',
    '/#X-Amz-Target=SageMaker.CreateArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateArtifact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateArtifact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateAutoMLJob',
    '/#X-Amz-Target=SageMaker.CreateAutoMLJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateAutoMLJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateAutoMLJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateAutoMLJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateAutoMLJobV2Key() {
  return [
    '#X-Amz-Target=SageMaker.CreateAutoMLJobV2',
    '/#X-Amz-Target=SageMaker.CreateAutoMLJobV2',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateAutoMLJobV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateAutoMLJobV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateAutoMLJobV2'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateCodeRepositoryKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateCodeRepository',
    '/#X-Amz-Target=SageMaker.CreateCodeRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateCodeRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateCodeRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateCodeRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateCompilationJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateCompilationJob',
    '/#X-Amz-Target=SageMaker.CreateCompilationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateCompilationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateCompilationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateCompilationJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateContextKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateContext',
    '/#X-Amz-Target=SageMaker.CreateContext',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateContext'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateDataQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateDataQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateDeviceFleetKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDeviceFleet',
    '/#X-Amz-Target=SageMaker.CreateDeviceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateDeviceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateDeviceFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateDeviceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateDomainKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateDomain',
    '/#X-Amz-Target=SageMaker.CreateDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateEdgeDeploymentPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateEdgeDeploymentPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateEdgeDeploymentStageKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateEdgeDeploymentStage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateEdgeDeploymentStageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateEdgePackagingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.CreateEdgePackagingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateEdgePackagingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateEdgePackagingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateEdgePackagingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateEndpointKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEndpoint',
    '/#X-Amz-Target=SageMaker.CreateEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateEndpointConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateEndpointConfig',
    '/#X-Amz-Target=SageMaker.CreateEndpointConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateEndpointConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateEndpointConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateEndpointConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateExperiment',
    '/#X-Amz-Target=SageMaker.CreateExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateExperiment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateFeatureGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateFeatureGroup',
    '/#X-Amz-Target=SageMaker.CreateFeatureGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateFeatureGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateFeatureGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateFeatureGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateFlowDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateFlowDefinition',
    '/#X-Amz-Target=SageMaker.CreateFlowDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateFlowDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateFlowDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateFlowDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateHubKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHub',
    '/#X-Amz-Target=SageMaker.CreateHub',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateHub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateHubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateHub'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateHumanTaskUiKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHumanTaskUi',
    '/#X-Amz-Target=SageMaker.CreateHumanTaskUi',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateHumanTaskUi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateHumanTaskUiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateHumanTaskUi'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateHyperParameterTuningJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateHyperParameterTuningJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateHyperParameterTuningJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateImageKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateImage',
    '/#X-Amz-Target=SageMaker.CreateImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateImage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateImageVersionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateImageVersion',
    '/#X-Amz-Target=SageMaker.CreateImageVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateImageVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateImageVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateImageVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateInferenceExperiment',
    '/#X-Amz-Target=SageMaker.CreateInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateInferenceRecommendationsJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateInferenceRecommendationsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateLabelingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateLabelingJob',
    '/#X-Amz-Target=SageMaker.CreateLabelingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateLabelingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateLabelingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateLabelingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModel',
    '/#X-Amz-Target=SageMaker.CreateModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateModel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelBiasJobDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelBiasJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelCardKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelCard',
    '/#X-Amz-Target=SageMaker.CreateModelCard',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateModelCard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelCardExportJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelCardExportJob',
    '/#X-Amz-Target=SageMaker.CreateModelCardExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelCardExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelCardExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelCardExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelExplainabilityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelPackageKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelPackage',
    '/#X-Amz-Target=SageMaker.CreateModelPackage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelPackage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelPackageGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelPackageGroup',
    '/#X-Amz-Target=SageMaker.CreateModelPackageGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelPackageGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelPackageGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelPackageGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateModelQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateModelQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.CreateMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateNotebookInstance',
    '/#X-Amz-Target=SageMaker.CreateNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreatePipelineKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePipeline',
    '/#X-Amz-Target=SageMaker.CreatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreatePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreatePipeline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreatePresignedDomainUrlKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePresignedDomainUrl',
    '/#X-Amz-Target=SageMaker.CreatePresignedDomainUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreatePresignedDomainUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreatePresignedDomainUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlKey() {
  return [
    '#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl',
    '/#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateProcessingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateProcessingJob',
    '/#X-Amz-Target=SageMaker.CreateProcessingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateProcessingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateProcessingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateProcessingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateProjectKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateProject',
    '/#X-Amz-Target=SageMaker.CreateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateProject'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateSpaceKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateSpace',
    '/#X-Amz-Target=SageMaker.CreateSpace',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateSpace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateStudioLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateStudioLifecycleConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateStudioLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateTrainingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrainingJob',
    '/#X-Amz-Target=SageMaker.CreateTrainingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateTrainingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateTrainingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateTrainingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateTransformJobKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTransformJob',
    '/#X-Amz-Target=SageMaker.CreateTransformJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateTransformJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateTransformJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateTransformJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateTrialKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrial',
    '/#X-Amz-Target=SageMaker.CreateTrial',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateTrial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateTrialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.CreateTrial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateTrialComponent',
    '/#X-Amz-Target=SageMaker.CreateTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateUserProfileKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateUserProfile',
    '/#X-Amz-Target=SageMaker.CreateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateUserProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.CreateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateWorkforceKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateWorkforce',
    '/#X-Amz-Target=SageMaker.CreateWorkforce',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateWorkforce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateWorkforceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkforce'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerCreateWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.CreateWorkteam',
    '/#X-Amz-Target=SageMaker.CreateWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerCreateWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerCreateWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkteam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteActionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAction',
    '/#X-Amz-Target=SageMaker.DeleteAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteAlgorithmKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAlgorithm',
    '/#X-Amz-Target=SageMaker.DeleteAlgorithm',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteAlgorithm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteAlgorithmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteAlgorithm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteAppKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteApp',
    '/#X-Amz-Target=SageMaker.DeleteApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteApp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteAppImageConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAppImageConfig',
    '/#X-Amz-Target=SageMaker.DeleteAppImageConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteAppImageConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteAppImageConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteAppImageConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteArtifactKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteArtifact',
    '/#X-Amz-Target=SageMaker.DeleteArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteArtifact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteArtifact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteAssociationKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteAssociation',
    '/#X-Amz-Target=SageMaker.DeleteAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteAssociation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteCodeRepositoryKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteCodeRepository',
    '/#X-Amz-Target=SageMaker.DeleteCodeRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteCodeRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteCodeRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteCodeRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteContextKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteContext',
    '/#X-Amz-Target=SageMaker.DeleteContext',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteContext'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteDataQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteDataQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteDeviceFleetKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDeviceFleet',
    '/#X-Amz-Target=SageMaker.DeleteDeviceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteDeviceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteDeviceFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteDeviceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteDomainKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteDomain',
    '/#X-Amz-Target=SageMaker.DeleteDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteEdgeDeploymentPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteEdgeDeploymentPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteEdgeDeploymentStage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteEdgeDeploymentStageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteEndpointKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEndpoint',
    '/#X-Amz-Target=SageMaker.DeleteEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteEndpointConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteEndpointConfig',
    '/#X-Amz-Target=SageMaker.DeleteEndpointConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteEndpointConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteEndpointConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteEndpointConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteExperiment',
    '/#X-Amz-Target=SageMaker.DeleteExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteExperiment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteFeatureGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteFeatureGroup',
    '/#X-Amz-Target=SageMaker.DeleteFeatureGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteFeatureGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteFeatureGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteFeatureGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteFlowDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteFlowDefinition',
    '/#X-Amz-Target=SageMaker.DeleteFlowDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteFlowDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteFlowDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteFlowDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteHubKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHub',
    '/#X-Amz-Target=SageMaker.DeleteHub',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteHub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteHubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteHub'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteHubContentKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHubContent',
    '/#X-Amz-Target=SageMaker.DeleteHubContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteHubContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteHubContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteHubContent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteHumanTaskUiKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteHumanTaskUi',
    '/#X-Amz-Target=SageMaker.DeleteHumanTaskUi',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteHumanTaskUi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteHumanTaskUiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteHumanTaskUi'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteImageKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteImage',
    '/#X-Amz-Target=SageMaker.DeleteImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteImage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteImageVersionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteImageVersion',
    '/#X-Amz-Target=SageMaker.DeleteImageVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteImageVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteImageVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteImageVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteInferenceExperiment',
    '/#X-Amz-Target=SageMaker.DeleteInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModel',
    '/#X-Amz-Target=SageMaker.DeleteModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteModel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelBiasJobDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelBiasJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelCardKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelCard',
    '/#X-Amz-Target=SageMaker.DeleteModelCard',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteModelCard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelPackageKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackage',
    '/#X-Amz-Target=SageMaker.DeleteModelPackage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelPackage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackageGroup',
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelPackageGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelPackageGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelPackageGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelPackageGroupPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelPackageGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteModelQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteModelQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.DeleteMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteNotebookInstance',
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeletePipelineKey() {
  return [
    '#X-Amz-Target=SageMaker.DeletePipeline',
    '/#X-Amz-Target=SageMaker.DeletePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeletePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeletePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeletePipeline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteProjectKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteProject',
    '/#X-Amz-Target=SageMaker.DeleteProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteProject'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteSpaceKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteSpace',
    '/#X-Amz-Target=SageMaker.DeleteSpace',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteSpace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteStudioLifecycleConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteStudioLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteTagsKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTags',
    '/#X-Amz-Target=SageMaker.DeleteTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteTrialKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTrial',
    '/#X-Amz-Target=SageMaker.DeleteTrial',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteTrial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteTrialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DeleteTrial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteTrialComponent',
    '/#X-Amz-Target=SageMaker.DeleteTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteUserProfileKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteUserProfile',
    '/#X-Amz-Target=SageMaker.DeleteUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteUserProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeleteUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteWorkforceKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteWorkforce',
    '/#X-Amz-Target=SageMaker.DeleteWorkforce',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteWorkforce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteWorkforceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkforce'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeleteWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.DeleteWorkteam',
    '/#X-Amz-Target=SageMaker.DeleteWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeleteWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeleteWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkteam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDeregisterDevicesKey() {
  return [
    '#X-Amz-Target=SageMaker.DeregisterDevices',
    '/#X-Amz-Target=SageMaker.DeregisterDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDeregisterDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDeregisterDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DeregisterDevices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeActionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAction',
    '/#X-Amz-Target=SageMaker.DescribeAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeAlgorithmKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAlgorithm',
    '/#X-Amz-Target=SageMaker.DescribeAlgorithm',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeAlgorithm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeAlgorithmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeAlgorithm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeAppKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeApp',
    '/#X-Amz-Target=SageMaker.DescribeApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeApp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeAppImageConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAppImageConfig',
    '/#X-Amz-Target=SageMaker.DescribeAppImageConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeAppImageConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeAppImageConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeAppImageConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeArtifactKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeArtifact',
    '/#X-Amz-Target=SageMaker.DescribeArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeArtifact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeArtifact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAutoMLJob',
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeAutoMLJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeAutoMLJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeAutoMLJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeAutoMLJobV2Key() {
  return [
    '#X-Amz-Target=SageMaker.DescribeAutoMLJobV2',
    '/#X-Amz-Target=SageMaker.DescribeAutoMLJobV2',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeAutoMLJobV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeAutoMLJobV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeCodeRepositoryKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeCodeRepository',
    '/#X-Amz-Target=SageMaker.DescribeCodeRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeCodeRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeCodeRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeCodeRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeCompilationJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeCompilationJob',
    '/#X-Amz-Target=SageMaker.DescribeCompilationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeCompilationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeCompilationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeCompilationJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeContextKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeContext',
    '/#X-Amz-Target=SageMaker.DescribeContext',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeContext'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeDataQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeDataQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeDeviceKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDevice',
    '/#X-Amz-Target=SageMaker.DescribeDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeDevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeDeviceFleetKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDeviceFleet',
    '/#X-Amz-Target=SageMaker.DescribeDeviceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeDeviceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeDeviceFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeDeviceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeDomainKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeDomain',
    '/#X-Amz-Target=SageMaker.DescribeDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan',
    '/#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeEdgeDeploymentPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeEdgeDeploymentPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeEdgePackagingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.DescribeEdgePackagingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeEdgePackagingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeEdgePackagingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeEndpointKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEndpoint',
    '/#X-Amz-Target=SageMaker.DescribeEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeEndpointConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeEndpointConfig',
    '/#X-Amz-Target=SageMaker.DescribeEndpointConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeEndpointConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeEndpointConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeEndpointConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeExperiment',
    '/#X-Amz-Target=SageMaker.DescribeExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeFeatureGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFeatureGroup',
    '/#X-Amz-Target=SageMaker.DescribeFeatureGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeFeatureGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeFeatureGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeFeatureGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeFeatureMetadataKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFeatureMetadata',
    '/#X-Amz-Target=SageMaker.DescribeFeatureMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeFeatureMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeFeatureMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeFeatureMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeFlowDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeFlowDefinition',
    '/#X-Amz-Target=SageMaker.DescribeFlowDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeFlowDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeFlowDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeFlowDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeHubKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHub',
    '/#X-Amz-Target=SageMaker.DescribeHub',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeHub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeHubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeHub'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeHubContentKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHubContent',
    '/#X-Amz-Target=SageMaker.DescribeHubContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeHubContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeHubContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeHubContent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeHumanTaskUiKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHumanTaskUi',
    '/#X-Amz-Target=SageMaker.DescribeHumanTaskUi',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeHumanTaskUi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeHumanTaskUiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeHumanTaskUi'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeHyperParameterTuningJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeHyperParameterTuningJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeImageKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeImage',
    '/#X-Amz-Target=SageMaker.DescribeImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeImage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeImageVersionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeImageVersion',
    '/#X-Amz-Target=SageMaker.DescribeImageVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeImageVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeImageVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeImageVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeInferenceExperiment',
    '/#X-Amz-Target=SageMaker.DescribeInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeInferenceRecommendationsJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeInferenceRecommendationsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeLabelingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeLabelingJob',
    '/#X-Amz-Target=SageMaker.DescribeLabelingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeLabelingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeLabelingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeLabelingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeLineageGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeLineageGroup',
    '/#X-Amz-Target=SageMaker.DescribeLineageGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeLineageGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeLineageGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeLineageGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModel',
    '/#X-Amz-Target=SageMaker.DescribeModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeModel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelBiasJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelBiasJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelCardKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelCard',
    '/#X-Amz-Target=SageMaker.DescribeModelCard',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelCard'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelCardExportJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelCardExportJob',
    '/#X-Amz-Target=SageMaker.DescribeModelCardExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelCardExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelCardExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelCardExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelPackageKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelPackage',
    '/#X-Amz-Target=SageMaker.DescribeModelPackage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelPackage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelPackageGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelPackageGroup',
    '/#X-Amz-Target=SageMaker.DescribeModelPackageGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelPackageGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelPackageGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelPackageGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition',
    '/#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeModelQualityJobDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeModelQualityJobDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.DescribeMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeNotebookInstance',
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribePipelineKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipeline',
    '/#X-Amz-Target=SageMaker.DescribePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribePipeline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution',
    '/#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribePipelineDefinitionForExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribePipelineDefinitionForExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribePipelineExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribePipelineExecution',
    '/#X-Amz-Target=SageMaker.DescribePipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribePipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribePipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribePipelineExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeProcessingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeProcessingJob',
    '/#X-Amz-Target=SageMaker.DescribeProcessingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeProcessingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeProcessingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeProcessingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeProjectKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeProject',
    '/#X-Amz-Target=SageMaker.DescribeProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeProject'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeSpaceKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeSpace',
    '/#X-Amz-Target=SageMaker.DescribeSpace',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeSpace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig',
    '/#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeStudioLifecycleConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeStudioLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeSubscribedWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam',
    '/#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeSubscribedWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeSubscribedWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeTrainingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrainingJob',
    '/#X-Amz-Target=SageMaker.DescribeTrainingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeTrainingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeTrainingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeTrainingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeTransformJobKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTransformJob',
    '/#X-Amz-Target=SageMaker.DescribeTransformJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeTransformJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeTransformJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeTransformJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeTrialKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrial',
    '/#X-Amz-Target=SageMaker.DescribeTrial',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeTrial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeTrialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.DescribeTrial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeTrialComponent',
    '/#X-Amz-Target=SageMaker.DescribeTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeUserProfileKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeUserProfile',
    '/#X-Amz-Target=SageMaker.DescribeUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeUserProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeWorkforceKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeWorkforce',
    '/#X-Amz-Target=SageMaker.DescribeWorkforce',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeWorkforce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeWorkforceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DescribeWorkforce'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDescribeWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.DescribeWorkteam',
    '/#X-Amz-Target=SageMaker.DescribeWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDescribeWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDescribeWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.DescribeWorkteam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioKey() {
  return [
    '#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio',
    '/#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerDisassociateTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.DisassociateTrialComponent',
    '/#X-Amz-Target=SageMaker.DisassociateTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerDisassociateTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerDisassociateTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.DisassociateTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioKey() {
  return [
    '#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio',
    '/#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerGetDeviceFleetReportKey() {
  return [
    '#X-Amz-Target=SageMaker.GetDeviceFleetReport',
    '/#X-Amz-Target=SageMaker.GetDeviceFleetReport',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerGetDeviceFleetReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerGetDeviceFleetReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.GetDeviceFleetReport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerGetLineageGroupPolicyKey() {
  return [
    '#X-Amz-Target=SageMaker.GetLineageGroupPolicy',
    '/#X-Amz-Target=SageMaker.GetLineageGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerGetLineageGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerGetLineageGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.GetLineageGroupPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerGetModelPackageGroupPolicyKey() {
  return [
    '#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerGetModelPackageGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerGetModelPackageGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusKey() {
  return [
    '#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus',
    '/#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerGetSearchSuggestionsKey() {
  return [
    '#X-Amz-Target=SageMaker.GetSearchSuggestions',
    '/#X-Amz-Target=SageMaker.GetSearchSuggestions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerGetSearchSuggestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerGetSearchSuggestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.GetSearchSuggestions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerImportHubContentKey() {
  return [
    '#X-Amz-Target=SageMaker.ImportHubContent',
    '/#X-Amz-Target=SageMaker.ImportHubContent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerImportHubContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerImportHubContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ImportHubContent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListActionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListActions',
    '/#X-Amz-Target=SageMaker.ListActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAlgorithmsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAlgorithms',
    '/#X-Amz-Target=SageMaker.ListAlgorithms',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListAlgorithms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAlgorithmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListAlgorithms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAliasesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAliases',
    '/#X-Amz-Target=SageMaker.ListAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListAliases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAppImageConfigsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAppImageConfigs',
    '/#X-Amz-Target=SageMaker.ListAppImageConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListAppImageConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAppImageConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListAppImageConfigs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAppsKey() {
  return ['#X-Amz-Target=SageMaker.ListApps', '/#X-Amz-Target=SageMaker.ListApps', 'POST'] as const
}

export function usePostXAmzTargetSageMakerListApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListApps'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListArtifactsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListArtifacts',
    '/#X-Amz-Target=SageMaker.ListArtifacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListArtifacts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAssociationsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAssociations',
    '/#X-Amz-Target=SageMaker.ListAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListAssociations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListAutoMLJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListAutoMLJobs',
    '/#X-Amz-Target=SageMaker.ListAutoMLJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListAutoMLJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListAutoMLJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListAutoMLJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListCandidatesForAutoMLJobKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob',
    '/#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListCandidatesForAutoMLJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListCandidatesForAutoMLJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListCodeRepositoriesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCodeRepositories',
    '/#X-Amz-Target=SageMaker.ListCodeRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListCodeRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListCodeRepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListCodeRepositories'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListCompilationJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListCompilationJobs',
    '/#X-Amz-Target=SageMaker.ListCompilationJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListCompilationJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListCompilationJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListCompilationJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListContextsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListContexts',
    '/#X-Amz-Target=SageMaker.ListContexts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListContexts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListContextsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListContexts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListDataQualityJobDefinitionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListDataQualityJobDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListDataQualityJobDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListDeviceFleetsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDeviceFleets',
    '/#X-Amz-Target=SageMaker.ListDeviceFleets',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListDeviceFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListDeviceFleetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListDeviceFleets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListDevicesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDevices',
    '/#X-Amz-Target=SageMaker.ListDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListDevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListDomainsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListDomains',
    '/#X-Amz-Target=SageMaker.ListDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListDomains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListEdgeDeploymentPlansKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans',
    '/#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListEdgeDeploymentPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListEdgeDeploymentPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListEdgePackagingJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEdgePackagingJobs',
    '/#X-Amz-Target=SageMaker.ListEdgePackagingJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListEdgePackagingJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListEdgePackagingJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListEdgePackagingJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListEndpointConfigsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEndpointConfigs',
    '/#X-Amz-Target=SageMaker.ListEndpointConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListEndpointConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListEndpointConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListEndpointConfigs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListEndpointsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListEndpoints',
    '/#X-Amz-Target=SageMaker.ListEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListEndpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListExperimentsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListExperiments',
    '/#X-Amz-Target=SageMaker.ListExperiments',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListExperiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListExperiments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListFeatureGroupsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListFeatureGroups',
    '/#X-Amz-Target=SageMaker.ListFeatureGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListFeatureGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListFeatureGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListFeatureGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListFlowDefinitionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListFlowDefinitions',
    '/#X-Amz-Target=SageMaker.ListFlowDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListFlowDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListFlowDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListFlowDefinitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListHubContentVersionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHubContentVersions',
    '/#X-Amz-Target=SageMaker.ListHubContentVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListHubContentVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListHubContentVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListHubContentVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListHubContentsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHubContents',
    '/#X-Amz-Target=SageMaker.ListHubContents',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListHubContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListHubContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListHubContents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListHubsKey() {
  return ['#X-Amz-Target=SageMaker.ListHubs', '/#X-Amz-Target=SageMaker.ListHubs', 'POST'] as const
}

export function usePostXAmzTargetSageMakerListHubs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListHubsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListHubs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListHumanTaskUisKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHumanTaskUis',
    '/#X-Amz-Target=SageMaker.ListHumanTaskUis',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListHumanTaskUis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListHumanTaskUisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListHumanTaskUis'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListHyperParameterTuningJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs',
    '/#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListHyperParameterTuningJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListHyperParameterTuningJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListImageVersionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListImageVersions',
    '/#X-Amz-Target=SageMaker.ListImageVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListImageVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListImageVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListImageVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListImagesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListImages',
    '/#X-Amz-Target=SageMaker.ListImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListImages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListInferenceExperimentsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceExperiments',
    '/#X-Amz-Target=SageMaker.ListInferenceExperiments',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListInferenceExperiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListInferenceExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListInferenceExperiments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps',
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListInferenceRecommendationsJobSteps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListInferenceRecommendationsJobStepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListInferenceRecommendationsJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs',
    '/#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListInferenceRecommendationsJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListInferenceRecommendationsJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListLabelingJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLabelingJobs',
    '/#X-Amz-Target=SageMaker.ListLabelingJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListLabelingJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListLabelingJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListLabelingJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListLabelingJobsForWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam',
    '/#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListLabelingJobsForWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListLabelingJobsForWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListLineageGroupsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListLineageGroups',
    '/#X-Amz-Target=SageMaker.ListLineageGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListLineageGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListLineageGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListLineageGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelBiasJobDefinitionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelBiasJobDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelBiasJobDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelCardExportJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCardExportJobs',
    '/#X-Amz-Target=SageMaker.ListModelCardExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelCardExportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelCardExportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelCardExportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelCardVersionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCardVersions',
    '/#X-Amz-Target=SageMaker.ListModelCardVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelCardVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelCardVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelCardVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelCardsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelCards',
    '/#X-Amz-Target=SageMaker.ListModelCards',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListModelCards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelExplainabilityJobDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelExplainabilityJobDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelMetadataKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelMetadata',
    '/#X-Amz-Target=SageMaker.ListModelMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelPackageGroupsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelPackageGroups',
    '/#X-Amz-Target=SageMaker.ListModelPackageGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelPackageGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelPackageGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelPackageGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelPackagesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelPackages',
    '/#X-Amz-Target=SageMaker.ListModelPackages',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelPackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelPackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelPackages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelQualityJobDefinitionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions',
    '/#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModelQualityJobDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelQualityJobDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListModelsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListModels',
    '/#X-Amz-Target=SageMaker.ListModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListModels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListMonitoringAlertHistoryKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringAlertHistory',
    '/#X-Amz-Target=SageMaker.ListMonitoringAlertHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListMonitoringAlertHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListMonitoringAlertHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListMonitoringAlertsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringAlerts',
    '/#X-Amz-Target=SageMaker.ListMonitoringAlerts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListMonitoringAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListMonitoringAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListMonitoringAlerts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListMonitoringExecutionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringExecutions',
    '/#X-Amz-Target=SageMaker.ListMonitoringExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListMonitoringExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListMonitoringExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListMonitoringExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListMonitoringSchedulesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListMonitoringSchedules',
    '/#X-Amz-Target=SageMaker.ListMonitoringSchedules',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListMonitoringSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListMonitoringSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListMonitoringSchedules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs',
    '/#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListNotebookInstancesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListNotebookInstances',
    '/#X-Amz-Target=SageMaker.ListNotebookInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListNotebookInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListNotebookInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListNotebookInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListPipelineExecutionStepsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineExecutionSteps',
    '/#X-Amz-Target=SageMaker.ListPipelineExecutionSteps',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListPipelineExecutionSteps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListPipelineExecutionStepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListPipelineExecutionsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineExecutions',
    '/#X-Amz-Target=SageMaker.ListPipelineExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListPipelineExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListPipelineExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListPipelineExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListPipelineParametersForExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelineParametersForExecution',
    '/#X-Amz-Target=SageMaker.ListPipelineParametersForExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListPipelineParametersForExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListPipelineParametersForExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListPipelinesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListPipelines',
    '/#X-Amz-Target=SageMaker.ListPipelines',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListPipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListPipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListPipelines'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListProcessingJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListProcessingJobs',
    '/#X-Amz-Target=SageMaker.ListProcessingJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListProcessingJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListProcessingJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListProcessingJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListProjectsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListProjects',
    '/#X-Amz-Target=SageMaker.ListProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListProjects'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListSpacesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListSpaces',
    '/#X-Amz-Target=SageMaker.ListSpaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListSpaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListSpacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListSpaces'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListStageDevicesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListStageDevices',
    '/#X-Amz-Target=SageMaker.ListStageDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListStageDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListStageDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListStageDevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListStudioLifecycleConfigsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs',
    '/#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListStudioLifecycleConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListStudioLifecycleConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListSubscribedWorkteamsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListSubscribedWorkteams',
    '/#X-Amz-Target=SageMaker.ListSubscribedWorkteams',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListSubscribedWorkteams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListSubscribedWorkteamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListSubscribedWorkteams'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTagsKey() {
  return ['#X-Amz-Target=SageMaker.ListTags', '/#X-Amz-Target=SageMaker.ListTags', 'POST'] as const
}

export function usePostXAmzTargetSageMakerListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTrainingJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrainingJobs',
    '/#X-Amz-Target=SageMaker.ListTrainingJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListTrainingJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListTrainingJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListTrainingJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTransformJobsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTransformJobs',
    '/#X-Amz-Target=SageMaker.ListTransformJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListTransformJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListTransformJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListTransformJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTrialComponentsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrialComponents',
    '/#X-Amz-Target=SageMaker.ListTrialComponents',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListTrialComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListTrialComponentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.ListTrialComponents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListTrialsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListTrials',
    '/#X-Amz-Target=SageMaker.ListTrials',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListTrials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListTrialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListTrials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListUserProfilesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListUserProfiles',
    '/#X-Amz-Target=SageMaker.ListUserProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListUserProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListUserProfiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListWorkforcesKey() {
  return [
    '#X-Amz-Target=SageMaker.ListWorkforces',
    '/#X-Amz-Target=SageMaker.ListWorkforces',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListWorkforces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListWorkforcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.ListWorkforces'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerListWorkteamsKey() {
  return [
    '#X-Amz-Target=SageMaker.ListWorkteams',
    '/#X-Amz-Target=SageMaker.ListWorkteams',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerListWorkteams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerListWorkteamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.ListWorkteams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerPutModelPackageGroupPolicyKey() {
  return [
    '#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy',
    '/#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerPutModelPackageGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerPutModelPackageGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerQueryLineageKey() {
  return [
    '#X-Amz-Target=SageMaker.QueryLineage',
    '/#X-Amz-Target=SageMaker.QueryLineage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerQueryLineage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerQueryLineageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.QueryLineage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerRegisterDevicesKey() {
  return [
    '#X-Amz-Target=SageMaker.RegisterDevices',
    '/#X-Amz-Target=SageMaker.RegisterDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerRegisterDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerRegisterDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.RegisterDevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerRenderUiTemplateKey() {
  return [
    '#X-Amz-Target=SageMaker.RenderUiTemplate',
    '/#X-Amz-Target=SageMaker.RenderUiTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerRenderUiTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerRenderUiTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.RenderUiTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerRetryPipelineExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.RetryPipelineExecution',
    '/#X-Amz-Target=SageMaker.RetryPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerRetryPipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerRetryPipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.RetryPipelineExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerSearchKey() {
  return ['#X-Amz-Target=SageMaker.Search', '/#X-Amz-Target=SageMaker.Search', 'POST'] as const
}

export function usePostXAmzTargetSageMakerSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.Search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureKey() {
  return [
    '#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure',
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerSendPipelineExecutionStepFailure<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerSendPipelineExecutionStepFailureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessKey() {
  return [
    '#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess',
    '/#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerSendPipelineExecutionStepSuccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerSendPipelineExecutionStepSuccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStartEdgeDeploymentStageKey() {
  return [
    '#X-Amz-Target=SageMaker.StartEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.StartEdgeDeploymentStage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStartEdgeDeploymentStage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStartEdgeDeploymentStageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStartInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.StartInferenceExperiment',
    '/#X-Amz-Target=SageMaker.StartInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStartInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStartInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StartInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStartMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.StartMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.StartMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStartMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStartMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StartMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStartNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.StartNotebookInstance',
    '/#X-Amz-Target=SageMaker.StartNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStartNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStartNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StartNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStartPipelineExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.StartPipelineExecution',
    '/#X-Amz-Target=SageMaker.StartPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStartPipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStartPipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StartPipelineExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopAutoMLJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopAutoMLJob',
    '/#X-Amz-Target=SageMaker.StopAutoMLJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopAutoMLJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopAutoMLJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.StopAutoMLJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopCompilationJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopCompilationJob',
    '/#X-Amz-Target=SageMaker.StopCompilationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopCompilationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopCompilationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopCompilationJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopEdgeDeploymentStageKey() {
  return [
    '#X-Amz-Target=SageMaker.StopEdgeDeploymentStage',
    '/#X-Amz-Target=SageMaker.StopEdgeDeploymentStage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopEdgeDeploymentStage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopEdgeDeploymentStageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopEdgePackagingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopEdgePackagingJob',
    '/#X-Amz-Target=SageMaker.StopEdgePackagingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopEdgePackagingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopEdgePackagingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopEdgePackagingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopHyperParameterTuningJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopHyperParameterTuningJob',
    '/#X-Amz-Target=SageMaker.StopHyperParameterTuningJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopHyperParameterTuningJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopHyperParameterTuningJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.StopInferenceExperiment',
    '/#X-Amz-Target=SageMaker.StopInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopInferenceRecommendationsJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob',
    '/#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopInferenceRecommendationsJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopInferenceRecommendationsJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopLabelingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopLabelingJob',
    '/#X-Amz-Target=SageMaker.StopLabelingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopLabelingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopLabelingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.StopLabelingJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.StopMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.StopMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.StopNotebookInstance',
    '/#X-Amz-Target=SageMaker.StopNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopPipelineExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.StopPipelineExecution',
    '/#X-Amz-Target=SageMaker.StopPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopPipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopPipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopPipelineExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopProcessingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopProcessingJob',
    '/#X-Amz-Target=SageMaker.StopProcessingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopProcessingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopProcessingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.StopProcessingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopTrainingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopTrainingJob',
    '/#X-Amz-Target=SageMaker.StopTrainingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopTrainingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopTrainingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.StopTrainingJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerStopTransformJobKey() {
  return [
    '#X-Amz-Target=SageMaker.StopTransformJob',
    '/#X-Amz-Target=SageMaker.StopTransformJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerStopTransformJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerStopTransformJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.StopTransformJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateActionKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateAction',
    '/#X-Amz-Target=SageMaker.UpdateAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateAppImageConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateAppImageConfig',
    '/#X-Amz-Target=SageMaker.UpdateAppImageConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateAppImageConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateAppImageConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateAppImageConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateArtifactKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateArtifact',
    '/#X-Amz-Target=SageMaker.UpdateArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateArtifact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateArtifact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateCodeRepositoryKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateCodeRepository',
    '/#X-Amz-Target=SageMaker.UpdateCodeRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateCodeRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateCodeRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateCodeRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateContextKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateContext',
    '/#X-Amz-Target=SageMaker.UpdateContext',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateContext'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateDeviceFleetKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDeviceFleet',
    '/#X-Amz-Target=SageMaker.UpdateDeviceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateDeviceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateDeviceFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateDeviceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateDevicesKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDevices',
    '/#X-Amz-Target=SageMaker.UpdateDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateDevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateDomainKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateDomain',
    '/#X-Amz-Target=SageMaker.UpdateDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateEndpointKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateEndpoint',
    '/#X-Amz-Target=SageMaker.UpdateEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities',
    '/#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateExperiment',
    '/#X-Amz-Target=SageMaker.UpdateExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateExperiment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateFeatureGroupKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateFeatureGroup',
    '/#X-Amz-Target=SageMaker.UpdateFeatureGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateFeatureGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateFeatureGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateFeatureGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateFeatureMetadataKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateFeatureMetadata',
    '/#X-Amz-Target=SageMaker.UpdateFeatureMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateFeatureMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateFeatureMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateFeatureMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateHubKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateHub',
    '/#X-Amz-Target=SageMaker.UpdateHub',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateHub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateHubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateHub'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateImageKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateImage',
    '/#X-Amz-Target=SageMaker.UpdateImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateImage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateImageVersionKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateImageVersion',
    '/#X-Amz-Target=SageMaker.UpdateImageVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateImageVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateImageVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateImageVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateInferenceExperimentKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateInferenceExperiment',
    '/#X-Amz-Target=SageMaker.UpdateInferenceExperiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateInferenceExperiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateInferenceExperimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateInferenceExperiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateModelCardKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateModelCard',
    '/#X-Amz-Target=SageMaker.UpdateModelCard',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateModelCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateModelCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateModelCard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateModelPackageKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateModelPackage',
    '/#X-Amz-Target=SageMaker.UpdateModelPackage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateModelPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateModelPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateModelPackage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateMonitoringAlertKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateMonitoringAlert',
    '/#X-Amz-Target=SageMaker.UpdateMonitoringAlert',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateMonitoringAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateMonitoringAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateMonitoringAlert'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateMonitoringScheduleKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateMonitoringSchedule',
    '/#X-Amz-Target=SageMaker.UpdateMonitoringSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateMonitoringSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateMonitoringScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateNotebookInstance',
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateNotebookInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateNotebookInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateNotebookInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig',
    '/#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdatePipelineKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdatePipeline',
    '/#X-Amz-Target=SageMaker.UpdatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdatePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdatePipeline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdatePipelineExecutionKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdatePipelineExecution',
    '/#X-Amz-Target=SageMaker.UpdatePipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdatePipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdatePipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdatePipelineExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateProjectKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateProject',
    '/#X-Amz-Target=SageMaker.UpdateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateProject'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateSpaceKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateSpace',
    '/#X-Amz-Target=SageMaker.UpdateSpace',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateSpace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateTrainingJobKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrainingJob',
    '/#X-Amz-Target=SageMaker.UpdateTrainingJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateTrainingJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateTrainingJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateTrainingJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateTrialKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrial',
    '/#X-Amz-Target=SageMaker.UpdateTrial',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateTrial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateTrialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SageMaker.UpdateTrial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateTrialComponentKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateTrialComponent',
    '/#X-Amz-Target=SageMaker.UpdateTrialComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateTrialComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateTrialComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateTrialComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateUserProfileKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateUserProfile',
    '/#X-Amz-Target=SageMaker.UpdateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateUserProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SageMaker.UpdateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateWorkforceKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateWorkforce',
    '/#X-Amz-Target=SageMaker.UpdateWorkforce',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateWorkforce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateWorkforceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkforce'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSageMakerUpdateWorkteamKey() {
  return [
    '#X-Amz-Target=SageMaker.UpdateWorkteam',
    '/#X-Amz-Target=SageMaker.UpdateWorkteam',
    'POST',
  ] as const
}

export function usePostXAmzTargetSageMakerUpdateWorkteam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSageMakerUpdateWorkteamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkteam'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
