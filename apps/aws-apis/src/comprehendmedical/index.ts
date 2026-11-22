import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobHandler,
  XAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobHandler,
  XAmzTargetComprehendMedical20181030DescribePHIDetectionJobHandler,
  XAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobHandler,
  XAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobHandler,
  XAmzTargetComprehendMedical20181030DetectEntitiesHandler,
  XAmzTargetComprehendMedical20181030DetectEntitiesV2Handler,
  XAmzTargetComprehendMedical20181030DetectPHIHandler,
  XAmzTargetComprehendMedical20181030InferICD10CMHandler,
  XAmzTargetComprehendMedical20181030InferRxNormHandler,
  XAmzTargetComprehendMedical20181030InferSNOMEDCTHandler,
  XAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsHandler,
  XAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsHandler,
  XAmzTargetComprehendMedical20181030ListPHIDetectionJobsHandler,
  XAmzTargetComprehendMedical20181030ListRxNormInferenceJobsHandler,
  XAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsHandler,
  XAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobHandler,
  XAmzTargetComprehendMedical20181030StartICD10CMInferenceJobHandler,
  XAmzTargetComprehendMedical20181030StartPHIDetectionJobHandler,
  XAmzTargetComprehendMedical20181030StartRxNormInferenceJobHandler,
  XAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobHandler,
  XAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobHandler,
  XAmzTargetComprehendMedical20181030StopICD10CMInferenceJobHandler,
  XAmzTargetComprehendMedical20181030StopPHIDetectionJobHandler,
  XAmzTargetComprehendMedical20181030StopRxNormInferenceJobHandler,
  XAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobHandler)
  .route('/', XAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030DescribePHIDetectionJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030DetectEntitiesHandler)
  .route('/', XAmzTargetComprehendMedical20181030DetectEntitiesV2Handler)
  .route('/', XAmzTargetComprehendMedical20181030DetectPHIHandler)
  .route('/', XAmzTargetComprehendMedical20181030InferICD10CMHandler)
  .route('/', XAmzTargetComprehendMedical20181030InferRxNormHandler)
  .route('/', XAmzTargetComprehendMedical20181030InferSNOMEDCTHandler)
  .route('/', XAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsHandler)
  .route('/', XAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsHandler)
  .route('/', XAmzTargetComprehendMedical20181030ListPHIDetectionJobsHandler)
  .route('/', XAmzTargetComprehendMedical20181030ListRxNormInferenceJobsHandler)
  .route('/', XAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsHandler)
  .route('/', XAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StartICD10CMInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StartPHIDetectionJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StartRxNormInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StopICD10CMInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StopPHIDetectionJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StopRxNormInferenceJobHandler)
  .route('/', XAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobHandler)

export default app
