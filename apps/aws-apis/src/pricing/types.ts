type DescribeServicesRequest = {
  ServiceCode?: {} | undefined
  FormatVersion?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeServicesResponse = {
  Services?: {} | undefined
  FormatVersion?: {} | undefined
  NextToken?: {} | undefined
}
type GetAttributeValuesRequest = {
  ServiceCode: {}
  AttributeName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetAttributeValuesResponse = { AttributeValues?: {} | undefined; NextToken?: {} | undefined }
type GetPriceListFileUrlRequest = { PriceListArn: {}; FileFormat: {} }
type GetPriceListFileUrlResponse = { Url?: {} | undefined }
type GetProductsRequest = {
  ServiceCode: {}
  Filters?: {} | undefined
  FormatVersion?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetProductsResponse = {
  FormatVersion?: {} | undefined
  PriceList?: {} | undefined
  NextToken?: {} | undefined
}
type ListPriceListsRequest = {
  ServiceCode: {}
  EffectiveDate: {}
  RegionCode?: {} | undefined
  CurrencyCode: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPriceListsResponse = { PriceLists?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSPriceListService.DescribeServices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSPriceListService.DescribeServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServicesRequest }
        output: DescribeServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSPriceListService.GetAttributeValues': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSPriceListService.GetAttributeValues'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAttributeValuesRequest }
        output: GetAttributeValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSPriceListService.GetPriceListFileUrl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPriceListFileUrlRequest }
        output: GetPriceListFileUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSPriceListService.GetProducts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSPriceListService.GetProducts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetProductsRequest }
        output: GetProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSPriceListService.ListPriceLists': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSPriceListService.ListPriceLists'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPriceListsRequest }
        output: ListPriceListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
