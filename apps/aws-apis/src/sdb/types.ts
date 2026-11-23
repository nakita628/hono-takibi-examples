type DeletableAttributeList = { Name: {}; Value?: {} | undefined }[]
type BatchDeleteAttributesRequest = { DomainName: {}; Items: {} }
type Float = number
type NoSuchDomain = { BoxUsage?: Float | undefined }
type NumberSubmittedAttributesExceeded = { BoxUsage?: Float | undefined }
type BatchPutAttributesRequest = { DomainName: {}; Items: {} }
type MissingParameter = { BoxUsage?: Float | undefined }
type NumberDomainsExceeded = { BoxUsage?: Float | undefined }
type CreateDomainRequest = { DomainName: {} }
type AttributeDoesNotExist = { BoxUsage?: Float | undefined }
type DeleteAttributesRequest = {
  DomainName: {}
  ItemName: {}
  Attributes?: {} | undefined
  Expected?: { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined } | undefined
}
type DeleteDomainRequest = { DomainName: {} }
type DomainMetadataResult = {
  ItemCount?: {} | undefined
  ItemNamesSizeBytes?: {} | undefined
  AttributeNameCount?: {} | undefined
  AttributeNamesSizeBytes?: {} | undefined
  AttributeValueCount?: {} | undefined
  AttributeValuesSizeBytes?: {} | undefined
  Timestamp?: {} | undefined
}
type DomainMetadataRequest = { DomainName: {} }
type GetAttributesResult = { Attributes?: {} | undefined }
type GetAttributesRequest = {
  DomainName: {}
  ItemName: {}
  AttributeNames?: {} | undefined
  ConsistentRead?: {} | undefined
}
type ListDomainsResult = { DomainNames?: {} | undefined; NextToken?: {} | undefined }
type InvalidNextToken = { BoxUsage?: Float | undefined }
type ListDomainsRequest = { MaxNumberOfDomains?: {} | undefined; NextToken?: {} | undefined }
type NumberItemAttributesExceeded = { BoxUsage?: Float | undefined }
type PutAttributesRequest = {
  DomainName: {}
  ItemName: {}
  Attributes: {}
  Expected?: { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined } | undefined
}
type SelectResult = { Items?: {} | undefined; NextToken?: {} | undefined }
type TooManyRequestedAttributes = { BoxUsage?: Float | undefined }
type RequestTimeout = { BoxUsage?: Float | undefined }
type SelectRequest = {
  SelectExpression: {}
  NextToken?: {} | undefined
  ConsistentRead?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=BatchDeleteAttributes': {
      $get: {
        input: {
          query: {
            DomainName: string
            Items: { Name: {}; Attributes?: DeletableAttributeList | undefined }[]
            Action: 'BatchDeleteAttributes'
            Version: '2009-04-15'
            AWSAccessKeyId: string
            SignatureMethod: string
            SignatureVersion: string
            Timestamp: string
            Signature: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            Action: 'BatchDeleteAttributes'
            Version: '2009-04-15'
            AWSAccessKeyId: string
            SignatureMethod: string
            SignatureVersion: string
            Timestamp: string
            Signature: string
          }
        } & { json: BatchDeleteAttributesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=BatchPutAttributes': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Items: { Name: {}; Attributes: {} }[]
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Items: { Name: {}; Attributes: {} }[]
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                DomainName: string
                Items: { Name: {}; Attributes: {} }[]
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NumberSubmittedAttributesExceeded
            outputFormat: 'text'
            status: 409
          }
      $post:
        | {
            input: {
              query: {
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: BatchPutAttributesRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: BatchPutAttributesRequest }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Action: 'BatchPutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: BatchPutAttributesRequest }
            output: NumberSubmittedAttributesExceeded
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/#Action=CreateDomain': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingParameter
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NumberDomainsExceeded
            outputFormat: 'text'
            status: 409
          }
      $post:
        | {
            input: {
              query: {
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateDomainRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateDomainRequest }
            output: MissingParameter
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Action: 'CreateDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateDomainRequest }
            output: NumberDomainsExceeded
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/#Action=DeleteAttributes': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes?: { Name: {}; Value?: {} | undefined }[] | undefined
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes?: { Name: {}; Value?: {} | undefined }[] | undefined
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes?: { Name: {}; Value?: {} | undefined }[] | undefined
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: AttributeDoesNotExist
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: {
              query: {
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DeleteAttributesRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DeleteAttributesRequest }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Action: 'DeleteAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DeleteAttributesRequest }
            output: AttributeDoesNotExist
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/#Action=DeleteDomain': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DeleteDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DeleteDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingParameter
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                Action: 'DeleteDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DeleteDomainRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'DeleteDomain'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DeleteDomainRequest }
            output: MissingParameter
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/#Action=DomainMetadata': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DomainMetadata'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: DomainMetadataResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                Action: 'DomainMetadata'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                Action: 'DomainMetadata'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DomainMetadataRequest }
            output: DomainMetadataResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'DomainMetadata'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: DomainMetadataRequest }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/#Action=GetAttributes': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                AttributeNames?: {}[] | undefined
                ConsistentRead?: boolean | undefined
                Action: 'GetAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: GetAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                AttributeNames?: {}[] | undefined
                ConsistentRead?: boolean | undefined
                Action: 'GetAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                Action: 'GetAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetAttributesRequest }
            output: GetAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'GetAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetAttributesRequest }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/#Action=ListDomains': {
      $get:
        | {
            input: {
              query: {
                MaxNumberOfDomains?: number | undefined
                NextToken?: string | undefined
                Action: 'ListDomains'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ListDomainsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxNumberOfDomains?: number | undefined
                NextToken?: string | undefined
                Action: 'ListDomains'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidNextToken
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                MaxNumberOfDomains?: string | undefined
                NextToken?: string | undefined
                Action: 'ListDomains'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListDomainsRequest }
            output: ListDomainsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxNumberOfDomains?: string | undefined
                NextToken?: string | undefined
                Action: 'ListDomains'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListDomainsRequest }
            output: InvalidNextToken
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/#Action=PutAttributes': {
      $get:
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes: { Name: {}; Value: {}; Replace?: {} | undefined }[]
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes: { Name: {}; Value: {}; Replace?: {} | undefined }[]
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes: { Name: {}; Value: {}; Replace?: {} | undefined }[]
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: AttributeDoesNotExist
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                DomainName: string
                ItemName: string
                Attributes: { Name: {}; Value: {}; Replace?: {} | undefined }[]
                Expected?:
                  | { Name?: {} | undefined; Value?: {} | undefined; Exists?: {} | undefined }
                  | undefined
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NumberItemAttributesExceeded
            outputFormat: 'text'
            status: 409
          }
      $post:
        | {
            input: {
              query: {
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: PutAttributesRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: PutAttributesRequest }
            output: NoSuchDomain
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: PutAttributesRequest }
            output: AttributeDoesNotExist
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                Action: 'PutAttributes'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: PutAttributesRequest }
            output: NumberItemAttributesExceeded
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/#Action=Select': {
      $get:
        | {
            input: {
              query: {
                SelectExpression: string
                NextToken?: string | undefined
                ConsistentRead?: boolean | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: SelectResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SelectExpression: string
                NextToken?: string | undefined
                ConsistentRead?: boolean | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: TooManyRequestedAttributes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                SelectExpression: string
                NextToken?: string | undefined
                ConsistentRead?: boolean | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: RequestTimeout
            outputFormat: 'text'
            status: 408
          }
      $post:
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: SelectRequest }
            output: SelectResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: SelectRequest }
            output: TooManyRequestedAttributes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                NextToken?: string | undefined
                Action: 'Select'
                Version: '2009-04-15'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: SelectRequest }
            output: RequestTimeout
            outputFormat: 'text'
            status: 408
          }
    }
  },
  '/'
>
export default routes
