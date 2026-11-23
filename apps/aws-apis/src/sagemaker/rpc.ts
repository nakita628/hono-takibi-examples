import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSageMakerAddAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.AddAssociation'].$post(args, options))
}

export async function postXAmzTargetSageMakerAddTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.AddTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.AddTags'].$post(args, options))
}

export async function postXAmzTargetSageMakerAssociateTrialComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.AssociateTrialComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.AssociateTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerBatchDescribeModelPackage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.BatchDescribeModelPackage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.BatchDescribeModelPackage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateAction(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateAction'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateAlgorithm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAlgorithm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateAlgorithm'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateApp'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateAppImageConfig(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAppImageConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateAppImageConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateArtifact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateArtifact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateArtifact'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateAutoMLJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateAutoMLJob'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateAutoMLJobV2(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateAutoMLJobV2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateAutoMLJobV2'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateCodeRepository(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCodeRepository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateCodeRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateCompilationJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateCompilationJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateCompilationJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateContext(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateContext']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateContext'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateDataQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateDataQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateDeviceFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDeviceFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateDeviceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateDomain'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateEdgeDeploymentPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentPlan'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateEdgeDeploymentStage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateEdgeDeploymentStage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateEdgePackagingJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateEdgePackagingJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateEdgePackagingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateEndpoint'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateEndpointConfig(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateEndpointConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateEndpointConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateExperiment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateExperiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateFeatureGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFeatureGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateFeatureGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateFlowDefinition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateFlowDefinition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateFlowDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateHub(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateHub'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateHumanTaskUi(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateHumanTaskUi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateHumanTaskUi'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateHyperParameterTuningJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateImage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateImage'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateImageVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateImageVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateImageVersion'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateInferenceRecommendationsJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateInferenceRecommendationsJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateLabelingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateLabelingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateLabelingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateModel'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateModelBiasJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelBiasJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModelCard(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelCard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateModelCard'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateModelCardExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateModelCardExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelCardExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModelExplainabilityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelExplainabilityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModelPackage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateModelPackage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelPackage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModelPackageGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateModelPackageGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelPackageGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateModelQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateModelQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateNotebookInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreatePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreatePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreatePipeline'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreatePresignedDomainUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreatePresignedDomainUrl'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreatePresignedNotebookInstanceUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateProcessingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProcessingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateProcessingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateProject(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateProject'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateSpace(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateSpace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateSpace'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateStudioLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateStudioLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateTrainingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrainingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateTrainingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateTransformJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTransformJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateTransformJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateTrial(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateTrial'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateTrialComponent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateTrialComponent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateUserProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateUserProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.CreateUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerCreateWorkforce(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkforce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkforce'].$post(args, options))
}

export async function postXAmzTargetSageMakerCreateWorkteam(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.CreateWorkteam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.CreateWorkteam'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteAction(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteAction'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteAlgorithm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAlgorithm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteAlgorithm'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteApp'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteAppImageConfig(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAppImageConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteAppImageConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteArtifact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteArtifact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteArtifact'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteCodeRepository(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteCodeRepository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteCodeRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteContext(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteContext']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteContext'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteDataQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteDataQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteDeviceFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDeviceFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteDeviceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteDomain'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteEdgeDeploymentPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentPlan'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteEdgeDeploymentStage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteEdgeDeploymentStage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteEndpoint'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteEndpointConfig(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteEndpointConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteEndpointConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteExperiment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteExperiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteFeatureGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFeatureGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteFeatureGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteFlowDefinition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteFlowDefinition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteFlowDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteHub(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteHub'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteHubContent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHubContent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteHubContent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteHumanTaskUi(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteHumanTaskUi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteHumanTaskUi'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteImage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteImage'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteImageVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteImageVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteImageVersion'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteModel'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteModelBiasJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelBiasJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModelCard(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelCard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteModelCard'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteModelExplainabilityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelExplainabilityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModelPackage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelPackage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModelPackageGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelPackageGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModelPackageGroupPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelPackageGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteModelQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteModelQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteNotebookInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeletePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeletePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeletePipeline'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteProject(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteProject'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteSpace(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteSpace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteSpace'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteStudioLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteStudioLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteTags'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteTrial(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteTrial'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteTrialComponent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteTrialComponent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteUserProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteUserProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeleteUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDeleteWorkforce(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkforce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkforce'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeleteWorkteam(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeleteWorkteam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DeleteWorkteam'].$post(args, options))
}

export async function postXAmzTargetSageMakerDeregisterDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DeregisterDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DeregisterDevices'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeAction(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeAction'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeAlgorithm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAlgorithm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeAlgorithm'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeApp'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeAppImageConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeAppImageConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeAppImageConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeArtifact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeArtifact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeArtifact'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeAutoMLJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeAutoMLJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeAutoMLJobV2(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeAutoMLJobV2'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeCodeRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeCodeRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeCodeRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeCompilationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeCompilationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeCompilationJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeContext(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeContext']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeContext'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeDataQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeDataQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeDevice(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeDevice'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeDeviceFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDeviceFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeDeviceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeDomain'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeEdgeDeploymentPlan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeEdgeDeploymentPlan'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeEdgePackagingJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeEdgePackagingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeEndpointConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeEndpointConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeEndpointConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeExperiment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeExperiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeFeatureGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeFeatureGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeFeatureMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeFeatureMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeFeatureMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeFlowDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeFlowDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeFlowDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeHub(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeHub'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeHubContent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHubContent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeHubContent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeHumanTaskUi(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeHumanTaskUi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeHumanTaskUi'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeHyperParameterTuningJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeImage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeImage'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeImageVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeImageVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeImageVersion'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeInferenceRecommendationsJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeInferenceRecommendationsJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeLabelingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLabelingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeLabelingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeLineageGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeLineageGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeLineageGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeModel'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeModelBiasJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelBiasJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelCard(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelCard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelCard'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelCardExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeModelCardExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelCardExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelExplainabilityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelExplainabilityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelPackage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelPackage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelPackageGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeModelPackageGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelPackageGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeModelQualityJobDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeModelQualityJobDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeNotebookInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribePipelineDefinitionForExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribePipelineDefinitionForExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribePipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribePipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribePipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeProcessingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProcessingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeProcessingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeProject(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeProject'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeSpace(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeSpace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeSpace'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeStudioLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeStudioLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeSubscribedWorkteam(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeTrainingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrainingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeTrainingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeTransformJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTransformJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeTransformJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeTrial(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeTrial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.DescribeTrial'].$post(args, options))
}

export async function postXAmzTargetSageMakerDescribeTrialComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DescribeTrialComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeUserProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeUserProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeWorkforce(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkforce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeWorkforce'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDescribeWorkteam(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.DescribeWorkteam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DescribeWorkteam'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolio(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DisableSagemakerServicecatalogPortfolio'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerDisassociateTrialComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.DisassociateTrialComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.DisassociateTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolio(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.EnableSagemakerServicecatalogPortfolio'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerGetDeviceFleetReport(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetDeviceFleetReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.GetDeviceFleetReport'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerGetLineageGroupPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetLineageGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.GetLineageGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerGetModelPackageGroupPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.GetModelPackageGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.GetSagemakerServicecatalogPortfolioStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSageMakerGetSearchSuggestions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.GetSearchSuggestions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.GetSearchSuggestions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerImportHubContent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ImportHubContent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ImportHubContent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListActions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListActions'].$post(args, options))
}

export async function postXAmzTargetSageMakerListAlgorithms(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAlgorithms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListAlgorithms'].$post(args, options))
}

export async function postXAmzTargetSageMakerListAliases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListAliases'].$post(args, options))
}

export async function postXAmzTargetSageMakerListAppImageConfigs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAppImageConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListAppImageConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListApps(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListApps'].$post(args, options))
}

export async function postXAmzTargetSageMakerListArtifacts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListArtifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListArtifacts'].$post(args, options))
}

export async function postXAmzTargetSageMakerListAssociations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAssociations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListAutoMLJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListAutoMLJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListAutoMLJobs'].$post(args, options))
}

export async function postXAmzTargetSageMakerListCandidatesForAutoMLJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListCodeRepositories(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCodeRepositories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListCodeRepositories'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListCompilationJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListCompilationJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListCompilationJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListContexts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListContexts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListContexts'].$post(args, options))
}

export async function postXAmzTargetSageMakerListDataQualityJobDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListDataQualityJobDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListDeviceFleets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDeviceFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListDeviceFleets'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListDevices'].$post(args, options))
}

export async function postXAmzTargetSageMakerListDomains(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListDomains'].$post(args, options))
}

export async function postXAmzTargetSageMakerListEdgeDeploymentPlans(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListEdgeDeploymentPlans'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListEdgePackagingJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEdgePackagingJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListEdgePackagingJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListEndpointConfigs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpointConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListEndpointConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListEndpoints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListEndpoints'].$post(args, options))
}

export async function postXAmzTargetSageMakerListExperiments(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListExperiments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListExperiments'].$post(args, options))
}

export async function postXAmzTargetSageMakerListFeatureGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFeatureGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListFeatureGroups'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListFlowDefinitions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListFlowDefinitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListFlowDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListHubContentVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListHubContentVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListHubContentVersions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListHubContents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubContents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListHubContents'].$post(args, options))
}

export async function postXAmzTargetSageMakerListHubs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHubs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListHubs'].$post(args, options))
}

export async function postXAmzTargetSageMakerListHumanTaskUis(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListHumanTaskUis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListHumanTaskUis'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListHyperParameterTuningJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListImageVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImageVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListImageVersions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListImages(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListImages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListImages'].$post(args, options))
}

export async function postXAmzTargetSageMakerListInferenceExperiments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListInferenceExperiments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListInferenceExperiments'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListInferenceRecommendationsJobSteps(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobSteps'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListInferenceRecommendationsJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListInferenceRecommendationsJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListLabelingJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListLabelingJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListLabelingJobsForWorkteam(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListLineageGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListLineageGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListLineageGroups'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelBiasJobDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelBiasJobDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelCardExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListModelCardExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelCardExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelCardVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCardVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelCardVersions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelCards(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListModelCards'].$post(args, options))
}

export async function postXAmzTargetSageMakerListModelExplainabilityJobDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelExplainabilityJobDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelPackageGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListModelPackageGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelPackageGroups'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelPackages(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModelPackages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelPackages'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModelQualityJobDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListModelQualityJobDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListModels(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListModels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListModels'].$post(args, options))
}

export async function postXAmzTargetSageMakerListMonitoringAlertHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListMonitoringAlertHistory'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListMonitoringAlerts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListMonitoringAlerts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListMonitoringAlerts'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListMonitoringExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListMonitoringExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListMonitoringSchedules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListMonitoringSchedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListMonitoringSchedules'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListNotebookInstanceLifecycleConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListNotebookInstances(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListNotebookInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListNotebookInstances'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListPipelineExecutionSteps(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListPipelineExecutionSteps'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListPipelineExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListPipelineExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListPipelineExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListPipelineParametersForExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListPipelineParametersForExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListPipelines(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListPipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListPipelines'].$post(args, options))
}

export async function postXAmzTargetSageMakerListProcessingJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProcessingJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListProcessingJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListProjects(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListProjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListProjects'].$post(args, options))
}

export async function postXAmzTargetSageMakerListSpaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListSpaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListSpaces'].$post(args, options))
}

export async function postXAmzTargetSageMakerListStageDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListStageDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListStageDevices'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListStudioLifecycleConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListStudioLifecycleConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListSubscribedWorkteams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListSubscribedWorkteams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListSubscribedWorkteams'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListTags'].$post(args, options))
}

export async function postXAmzTargetSageMakerListTrainingJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListTrainingJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSageMakerListTransformJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTransformJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListTransformJobs'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListTrialComponents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrialComponents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListTrialComponents'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListTrials(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListTrials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListTrials'].$post(args, options))
}

export async function postXAmzTargetSageMakerListUserProfiles(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListUserProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.ListUserProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerListWorkforces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkforces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListWorkforces'].$post(args, options))
}

export async function postXAmzTargetSageMakerListWorkteams(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.ListWorkteams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.ListWorkteams'].$post(args, options))
}

export async function postXAmzTargetSageMakerPutModelPackageGroupPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.PutModelPackageGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerQueryLineage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.QueryLineage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.QueryLineage'].$post(args, options))
}

export async function postXAmzTargetSageMakerRegisterDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RegisterDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.RegisterDevices'].$post(args, options))
}

export async function postXAmzTargetSageMakerRenderUiTemplate(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.RenderUiTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.RenderUiTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerRetryPipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.RetryPipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.RetryPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerSearch(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.Search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.Search'].$post(args, options))
}

export async function postXAmzTargetSageMakerSendPipelineExecutionStepFailure(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepFailure'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerSendPipelineExecutionStepSuccess(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.SendPipelineExecutionStepSuccess'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStartEdgeDeploymentStage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StartEdgeDeploymentStage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStartInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StartInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StartInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStartMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StartMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StartMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStartNotebookInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StartNotebookInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StartNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStartPipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StartPipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StartPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopAutoMLJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopAutoMLJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.StopAutoMLJob'].$post(args, options))
}

export async function postXAmzTargetSageMakerStopCompilationJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopCompilationJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopCompilationJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopEdgeDeploymentStage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopEdgeDeploymentStage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopEdgePackagingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopEdgePackagingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopEdgePackagingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopHyperParameterTuningJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopHyperParameterTuningJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StopInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopInferenceRecommendationsJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopInferenceRecommendationsJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopLabelingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopLabelingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.StopLabelingJob'].$post(args, options))
}

export async function postXAmzTargetSageMakerStopMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.StopMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopNotebookInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopNotebookInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopPipelineExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopPipelineExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopProcessingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopProcessingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopProcessingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerStopTrainingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTrainingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.StopTrainingJob'].$post(args, options))
}

export async function postXAmzTargetSageMakerStopTransformJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.StopTransformJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.StopTransformJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateAction(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateAction'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateAppImageConfig(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateAppImageConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateAppImageConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateArtifact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateArtifact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateArtifact'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateCodeRepository(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateCodeRepository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateCodeRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateContext(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateContext']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateContext'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateDeviceFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDeviceFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateDeviceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateDevices'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateDomain'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateEndpoint'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateEndpointWeightsAndCapacities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateExperiment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateExperiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateFeatureGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateFeatureGroup'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateFeatureMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateFeatureMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateFeatureMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateHub(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateHub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateHub'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateImage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateImage'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateImageVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateImageVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateImageVersion'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateInferenceExperiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdateInferenceExperiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateInferenceExperiment'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateModelCard(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelCard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateModelCard'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateModelPackage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateModelPackage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateModelPackage'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateMonitoringAlert(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringAlert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateMonitoringAlert'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateMonitoringSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateMonitoringSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateNotebookInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateNotebookInstance'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdatePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdatePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdatePipeline'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdatePipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SageMaker.UpdatePipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdatePipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateProject(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateProject'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateSpace(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateSpace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateSpace'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateTrainingJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrainingJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateTrainingJob'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateTrial(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateTrial'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateTrialComponent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateTrialComponent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateTrialComponent'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateUserProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateUserProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SageMaker.UpdateUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetSageMakerUpdateWorkforce(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkforce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkforce'].$post(args, options))
}

export async function postXAmzTargetSageMakerUpdateWorkteam(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SageMaker.UpdateWorkteam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SageMaker.UpdateWorkteam'].$post(args, options))
}
