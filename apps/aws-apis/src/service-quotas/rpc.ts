import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate'
    ].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuota(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChange(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624GetServiceQuota(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota'
    ].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListServiceQuotas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListServices'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncrease(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetServiceQuotasV20190624UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ServiceQuotasV20190624.UntagResource'].$post(args, options),
  )
}
