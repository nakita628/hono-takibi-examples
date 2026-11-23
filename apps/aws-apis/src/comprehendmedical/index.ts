import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobHandler,
  xAmzTargetComprehendMedical20181030DescribeIcd10CmInferenceJobHandler,
  xAmzTargetComprehendMedical20181030DescribePhiDetectionJobHandler,
  xAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobHandler,
  xAmzTargetComprehendMedical20181030DescribeSnomedctInferenceJobHandler,
  xAmzTargetComprehendMedical20181030DetectEntitiesHandler,
  xAmzTargetComprehendMedical20181030DetectEntitiesV2Handler,
  xAmzTargetComprehendMedical20181030DetectPhiHandler,
  xAmzTargetComprehendMedical20181030InferIcd10CmHandler,
  xAmzTargetComprehendMedical20181030InferRxNormHandler,
  xAmzTargetComprehendMedical20181030InferSnomedctHandler,
  xAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsHandler,
  xAmzTargetComprehendMedical20181030ListIcd10CmInferenceJobsHandler,
  xAmzTargetComprehendMedical20181030ListPhiDetectionJobsHandler,
  xAmzTargetComprehendMedical20181030ListRxNormInferenceJobsHandler,
  xAmzTargetComprehendMedical20181030ListSnomedctInferenceJobsHandler,
  xAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobHandler,
  xAmzTargetComprehendMedical20181030StartIcd10CmInferenceJobHandler,
  xAmzTargetComprehendMedical20181030StartPhiDetectionJobHandler,
  xAmzTargetComprehendMedical20181030StartRxNormInferenceJobHandler,
  xAmzTargetComprehendMedical20181030StartSnomedctInferenceJobHandler,
  xAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobHandler,
  xAmzTargetComprehendMedical20181030StopIcd10CmInferenceJobHandler,
  xAmzTargetComprehendMedical20181030StopPhiDetectionJobHandler,
  xAmzTargetComprehendMedical20181030StopRxNormInferenceJobHandler,
  xAmzTargetComprehendMedical20181030StopSnomedctInferenceJobHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobHandler)
  .route('/', xAmzTargetComprehendMedical20181030DescribeIcd10CmInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030DescribePhiDetectionJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030DescribeSnomedctInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030DetectEntitiesHandler)
  .route('/', xAmzTargetComprehendMedical20181030DetectEntitiesV2Handler)
  .route('/', xAmzTargetComprehendMedical20181030DetectPhiHandler)
  .route('/', xAmzTargetComprehendMedical20181030InferIcd10CmHandler)
  .route('/', xAmzTargetComprehendMedical20181030InferRxNormHandler)
  .route('/', xAmzTargetComprehendMedical20181030InferSnomedctHandler)
  .route('/', xAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsHandler)
  .route('/', xAmzTargetComprehendMedical20181030ListIcd10CmInferenceJobsHandler)
  .route('/', xAmzTargetComprehendMedical20181030ListPhiDetectionJobsHandler)
  .route('/', xAmzTargetComprehendMedical20181030ListRxNormInferenceJobsHandler)
  .route('/', xAmzTargetComprehendMedical20181030ListSnomedctInferenceJobsHandler)
  .route('/', xAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StartIcd10CmInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StartPhiDetectionJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StartRxNormInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StartSnomedctInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StopIcd10CmInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StopPhiDetectionJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StopRxNormInferenceJobHandler)
  .route('/', xAmzTargetComprehendMedical20181030StopSnomedctInferenceJobHandler)

export default app
