type CancelChangeSetResponse = { ChangeSetId?: {} | undefined; ChangeSetArn?: {} | undefined }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DescribeChangeSetResponse = {
  ChangeSetId?: {} | undefined
  ChangeSetArn?: {} | undefined
  ChangeSetName?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Status?: {} | undefined
  FailureCode?: {} | undefined
  FailureDescription?: {} | undefined
  ChangeSet?: {} | undefined
}
type DescribeEntityResponse = {
  EntityType?: {} | undefined
  EntityIdentifier?: {} | undefined
  EntityArn?: {} | undefined
  LastModifiedDate?: {} | undefined
  Details?: {} | undefined
}
type GetResourcePolicyResponse = { Policy?: {} | undefined }
type Filter = { Name?: {} | undefined; ValueList?: {} | undefined }
type ListChangeSetsResponse = { ChangeSetSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListEntitiesResponse = { EntitySummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { ResourceArn?: {} | undefined; Tags?: {} | undefined }
type PutResourcePolicyResponse = { [x: string]: unknown }
type Change = {
  ChangeType: {}
  Entity: { Type: {}; Identifier?: {} | undefined }
  EntityTags?: {} | undefined
  Details: {}
  ChangeName?: {} | undefined
}
type Tag = { Key: {}; Value: {} }
type StartChangeSetResponse = { ChangeSetId?: {} | undefined; ChangeSetArn?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/CancelChangeSet#catalog&changeSetId': {
      $patch: {
        input: { query: { catalog: string; changeSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteResourcePolicy#resourceArn': {
      $delete: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeChangeSet#catalog&changeSetId': {
      $get: {
        input: { query: { catalog: string; changeSetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DescribeEntity#catalog&entityId': {
      $get: {
        input: { query: { catalog: string; entityId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeEntityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetResourcePolicy#resourceArn': {
      $get: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListChangeSets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Catalog: string
            FilterList?: Filter[] | undefined
            Sort?: { SortBy?: {} | undefined; SortOrder?: {} | undefined } | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListChangeSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListEntities': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Catalog: string
            EntityType: string
            FilterList?: Filter[] | undefined
            Sort?: { SortBy?: {} | undefined; SortOrder?: {} | undefined } | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            OwnershipType?: 'SELF' | 'SHARED' | undefined
          }
        }
        output: ListEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string } }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string; Policy: string } }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StartChangeSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Catalog: string
            ChangeSet: Change[]
            ChangeSetName?: string | undefined
            ClientRequestToken?: string | undefined
            ChangeSetTags?: Tag[] | undefined
          }
        }
        output: StartChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string; Tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
