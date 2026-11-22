import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition'].$post(
      args,
      options,
    ),
  )
}
