type AssociateServiceQuotaTemplateRequest = { [x: string]: unknown }
type AssociateServiceQuotaTemplateResponse = { [x: string]: unknown }
type DeleteServiceQuotaIncreaseRequestFromTemplateRequest = {
  ServiceCode: {}
  QuotaCode: {}
  AwsRegion: {}
}
type DeleteServiceQuotaIncreaseRequestFromTemplateResponse = { [x: string]: unknown }
type DisassociateServiceQuotaTemplateRequest = { [x: string]: unknown }
type DisassociateServiceQuotaTemplateResponse = { [x: string]: unknown }
type GetAWSDefaultServiceQuotaRequest = { ServiceCode: {}; QuotaCode: {} }
type GetAWSDefaultServiceQuotaResponse = {
  Quota?:
    | {
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaArn?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        Value?: {} | undefined
        Unit?: {} | undefined
        Adjustable?: {} | undefined
        GlobalQuota?: {} | undefined
        UsageMetric?:
          | {
              MetricNamespace?: {} | undefined
              MetricName?: {} | undefined
              MetricDimensions?: {} | undefined
              MetricStatisticRecommendation?: {} | undefined
            }
          | undefined
        Period?: { PeriodValue?: {} | undefined; PeriodUnit?: {} | undefined } | undefined
        ErrorReason?: { ErrorCode?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
      }
    | undefined
}
type GetAssociationForServiceQuotaTemplateRequest = { [x: string]: unknown }
type GetAssociationForServiceQuotaTemplateResponse = {
  ServiceQuotaTemplateAssociationStatus?: {} | undefined
}
type GetRequestedServiceQuotaChangeRequest = { RequestId: {} }
type GetRequestedServiceQuotaChangeResponse = {
  RequestedQuota?:
    | {
        Id?: {} | undefined
        CaseId?: {} | undefined
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        DesiredValue?: {} | undefined
        Status?: {} | undefined
        Created?: {} | undefined
        LastUpdated?: {} | undefined
        Requester?: {} | undefined
        QuotaArn?: {} | undefined
        GlobalQuota?: {} | undefined
        Unit?: {} | undefined
      }
    | undefined
}
type GetServiceQuotaRequest = { ServiceCode: {}; QuotaCode: {} }
type GetServiceQuotaResponse = {
  Quota?:
    | {
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaArn?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        Value?: {} | undefined
        Unit?: {} | undefined
        Adjustable?: {} | undefined
        GlobalQuota?: {} | undefined
        UsageMetric?:
          | {
              MetricNamespace?: {} | undefined
              MetricName?: {} | undefined
              MetricDimensions?: {} | undefined
              MetricStatisticRecommendation?: {} | undefined
            }
          | undefined
        Period?: { PeriodValue?: {} | undefined; PeriodUnit?: {} | undefined } | undefined
        ErrorReason?: { ErrorCode?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
      }
    | undefined
}
type GetServiceQuotaIncreaseRequestFromTemplateRequest = {
  ServiceCode: {}
  QuotaCode: {}
  AwsRegion: {}
}
type GetServiceQuotaIncreaseRequestFromTemplateResponse = {
  ServiceQuotaIncreaseRequestInTemplate?:
    | {
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        DesiredValue?: {} | undefined
        AwsRegion?: {} | undefined
        Unit?: {} | undefined
        GlobalQuota?: {} | undefined
      }
    | undefined
}
type ListAWSDefaultServiceQuotasRequest = {
  ServiceCode: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAWSDefaultServiceQuotasResponse = { NextToken?: {} | undefined; Quotas?: {} | undefined }
type ListRequestedServiceQuotaChangeHistoryRequest = {
  ServiceCode?: {} | undefined
  Status?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListRequestedServiceQuotaChangeHistoryResponse = {
  NextToken?: {} | undefined
  RequestedQuotas?: {} | undefined
}
type ListRequestedServiceQuotaChangeHistoryByQuotaRequest = {
  ServiceCode: {}
  QuotaCode: {}
  Status?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListRequestedServiceQuotaChangeHistoryByQuotaResponse = {
  NextToken?: {} | undefined
  RequestedQuotas?: {} | undefined
}
type ListServiceQuotaIncreaseRequestsInTemplateRequest = {
  ServiceCode?: {} | undefined
  AwsRegion?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListServiceQuotaIncreaseRequestsInTemplateResponse = {
  ServiceQuotaIncreaseRequestInTemplateList?: {} | undefined
  NextToken?: {} | undefined
}
type ListServiceQuotasRequest = {
  ServiceCode: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListServiceQuotasResponse = { NextToken?: {} | undefined; Quotas?: {} | undefined }
type ListServicesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListServicesResponse = { NextToken?: {} | undefined; Services?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type PutServiceQuotaIncreaseRequestIntoTemplateRequest = {
  QuotaCode: {}
  ServiceCode: {}
  AwsRegion: {}
  DesiredValue: {}
}
type PutServiceQuotaIncreaseRequestIntoTemplateResponse = {
  ServiceQuotaIncreaseRequestInTemplate?:
    | {
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        DesiredValue?: {} | undefined
        AwsRegion?: {} | undefined
        Unit?: {} | undefined
        GlobalQuota?: {} | undefined
      }
    | undefined
}
type RequestServiceQuotaIncreaseRequest = { ServiceCode: {}; QuotaCode: {}; DesiredValue: {} }
type RequestServiceQuotaIncreaseResponse = {
  RequestedQuota?:
    | {
        Id?: {} | undefined
        CaseId?: {} | undefined
        ServiceCode?: {} | undefined
        ServiceName?: {} | undefined
        QuotaCode?: {} | undefined
        QuotaName?: {} | undefined
        DesiredValue?: {} | undefined
        Status?: {} | undefined
        Created?: {} | undefined
        LastUpdated?: {} | undefined
        Requester?: {} | undefined
        QuotaArn?: {} | undefined
        GlobalQuota?: {} | undefined
        Unit?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.AssociateServiceQuotaTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateServiceQuotaTemplateRequest }
        output: AssociateServiceQuotaTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceQuotaIncreaseRequestFromTemplateRequest }
        output: DeleteServiceQuotaIncreaseRequestFromTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateServiceQuotaTemplateRequest }
        output: DisassociateServiceQuotaTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.GetAWSDefaultServiceQuota'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAWSDefaultServiceQuotaRequest }
        output: GetAWSDefaultServiceQuotaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAssociationForServiceQuotaTemplateRequest }
        output: GetAssociationForServiceQuotaTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.GetRequestedServiceQuotaChange'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRequestedServiceQuotaChangeRequest }
        output: GetRequestedServiceQuotaChangeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.GetServiceQuota'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceQuotaRequest }
        output: GetServiceQuotaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceQuotaIncreaseRequestFromTemplateRequest }
        output: GetServiceQuotaIncreaseRequestFromTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAWSDefaultServiceQuotasRequest }
        output: ListAWSDefaultServiceQuotasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRequestedServiceQuotaChangeHistoryRequest }
        output: ListRequestedServiceQuotaChangeHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRequestedServiceQuotaChangeHistoryByQuotaRequest }
        output: ListRequestedServiceQuotaChangeHistoryByQuotaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceQuotaIncreaseRequestsInTemplateRequest }
        output: ListServiceQuotaIncreaseRequestsInTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListServiceQuotas'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceQuotasRequest }
        output: ListServiceQuotasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicesRequest }
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutServiceQuotaIncreaseRequestIntoTemplateRequest }
        output: PutServiceQuotaIncreaseRequestIntoTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.RequestServiceQuotaIncrease'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RequestServiceQuotaIncreaseRequest }
        output: RequestServiceQuotaIncreaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ServiceQuotasV20190624.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ServiceQuotasV20190624.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
