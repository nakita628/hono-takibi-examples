import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSPriceListServiceDescribeServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPriceListService.DescribeServices'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPriceListServiceGetAttributeValues(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPriceListService.GetAttributeValues'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPriceListServiceGetPriceListFileUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPriceListServiceGetProducts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPriceListService.GetProducts'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPriceListServiceListPriceLists(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPriceListService.ListPriceLists'].$post(args, options),
  )
}
