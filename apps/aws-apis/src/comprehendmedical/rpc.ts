import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2Job(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030DescribePHIDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030DetectEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030DetectEntitiesV2(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030DetectPHI(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030InferICD10CM(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030InferRxNorm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030InferSNOMEDCT(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2Jobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030ListPHIDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030ListRxNormInferenceJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2Job(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030StartICD10CMInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030StartPHIDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030StartRxNormInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2Job(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehendMedical20181030StopICD10CMInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030StopPHIDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030StopRxNormInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'].$post(
      args,
      options,
    ),
  )
}
