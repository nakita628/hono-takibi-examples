import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetEC2WindowsBarleyServiceCreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceCreateComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceCreateLogPattern(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDeleteApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDeleteComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDeleteLogPattern(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
    ].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeLogPattern(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeObservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeProblem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListApplications'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListComponents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListComponents'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListConfigurationHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListLogPatternSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListLogPatterns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListProblems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListProblems'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceUpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceUpdateComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent'].$post(args, options),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetEC2WindowsBarleyServiceUpdateLogPattern(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern'].$post(args, options),
  )
}
