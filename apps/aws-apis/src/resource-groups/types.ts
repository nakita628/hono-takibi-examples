type TagValue = string
type GroupConfigurationItem = { Type: {}; Parameters?: {} | undefined }
type CreateGroupOutput = {
  Group?: { GroupArn: {}; Name: {}; Description?: {} | undefined } | undefined
  ResourceQuery?: { Type: {}; Query: {} } | undefined
  Tags?: {} | undefined
  GroupConfiguration?:
    | {
        Configuration?: {} | undefined
        ProposedConfiguration?: {} | undefined
        Status?: {} | undefined
        FailureReason?: {} | undefined
      }
    | undefined
}
type DeleteGroupOutput = {
  Group?: { GroupArn: {}; Name: {}; Description?: {} | undefined } | undefined
}
type GetAccountSettingsOutput = {
  AccountSettings?:
    | {
        GroupLifecycleEventsDesiredStatus?: {} | undefined
        GroupLifecycleEventsStatus?: {} | undefined
        GroupLifecycleEventsStatusMessage?: {} | undefined
      }
    | undefined
}
type GetGroupOutput = {
  Group?: { GroupArn: {}; Name: {}; Description?: {} | undefined } | undefined
}
type GetGroupConfigurationOutput = {
  GroupConfiguration?:
    | {
        Configuration?: {} | undefined
        ProposedConfiguration?: {} | undefined
        Status?: {} | undefined
        FailureReason?: {} | undefined
      }
    | undefined
}
type GetGroupQueryOutput = {
  GroupQuery?: { GroupName: {}; ResourceQuery: { Type: {}; Query: {} } } | undefined
}
type GetTagsOutput = { Arn?: {} | undefined; Tags?: {} | undefined }
type TagOutput = { Arn?: {} | undefined; Tags?: {} | undefined }
type TagKey = string
type UntagOutput = { Arn?: {} | undefined; Keys?: {} | undefined }
type ResourceArn = string
type GroupResourcesOutput = {
  Succeeded?: {} | undefined
  Failed?: {} | undefined
  Pending?: {} | undefined
}
type ResourceFilter = { Name: {}; Values: {} }
type ListGroupResourcesOutput = {
  Resources?: {} | undefined
  ResourceIdentifiers?: {} | undefined
  NextToken?: {} | undefined
  QueryErrors?: {} | undefined
}
type GroupFilter = { Name: {}; Values: {} }
type ListGroupsOutput = {
  GroupIdentifiers?: {} | undefined
  Groups?: {} | undefined
  NextToken?: {} | undefined
}
type PutGroupConfigurationOutput = { [x: string]: unknown }
type SearchResourcesOutput = {
  ResourceIdentifiers?: {} | undefined
  NextToken?: {} | undefined
  QueryErrors?: {} | undefined
}
type UngroupResourcesOutput = {
  Succeeded?: {} | undefined
  Failed?: {} | undefined
  Pending?: {} | undefined
}
type UpdateAccountSettingsOutput = {
  AccountSettings?:
    | {
        GroupLifecycleEventsDesiredStatus?: {} | undefined
        GroupLifecycleEventsStatus?: {} | undefined
        GroupLifecycleEventsStatusMessage?: {} | undefined
      }
    | undefined
}
type UpdateGroupOutput = {
  Group?: { GroupArn: {}; Name: {}; Description?: {} | undefined } | undefined
}
type UpdateGroupQueryOutput = {
  GroupQuery?: { GroupName: {}; ResourceQuery: { Type: {}; Query: {} } } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/groups': {
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
            Name: string
            Description?: string | undefined
            ResourceQuery?: { Type?: {} | undefined; Query?: {} | undefined } | undefined
            Tags?: { [x: string]: TagValue } | undefined
            Configuration?: GroupConfigurationItem[] | undefined
          }
        }
        output: CreateGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delete-group': {
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
        } & { json: { GroupName?: string | undefined; Group?: string | undefined } }
        output: DeleteGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get-account-settings': {
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
        }
        output: GetAccountSettingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get-group': {
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
        } & { json: { GroupName?: string | undefined; Group?: string | undefined } }
        output: GetGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get-group-configuration': {
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
        } & { json: { Group?: string | undefined } }
        output: GetGroupConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get-group-query': {
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
        } & { json: { GroupName?: string | undefined; Group?: string | undefined } }
        output: GetGroupQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/:Arn/tags': {
      $get: {
        input: { param: { Arn: string } } & {
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
        output: GetTagsOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { Arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { Arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Keys: TagKey[] } }
        output: UntagOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/group-resources': {
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
        } & { json: { Group: string; ResourceArns: ResourceArn[] } }
        output: GroupResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-group-resources': {
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
            GroupName?: string | undefined
            Group?: string | undefined
            Filters?: ResourceFilter[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListGroupResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups-list': {
      $post: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Filters?: GroupFilter[] | undefined } }
        output: ListGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/put-group-configuration': {
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
          json: { Group?: string | undefined; Configuration?: GroupConfigurationItem[] | undefined }
        }
        output: PutGroupConfigurationOutput
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/resources/search': {
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
            ResourceQuery: { Type?: {} | undefined; Query?: {} | undefined }
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: SearchResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ungroup-resources': {
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
        } & { json: { Group: string; ResourceArns: ResourceArn[] } }
        output: UngroupResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-account-settings': {
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
        } & { json: { GroupLifecycleEventsDesiredStatus?: 'ACTIVE' | 'INACTIVE' | undefined } }
        output: UpdateAccountSettingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-group': {
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
            GroupName?: string | undefined
            Group?: string | undefined
            Description?: string | undefined
          }
        }
        output: UpdateGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-group-query': {
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
            GroupName?: string | undefined
            Group?: string | undefined
            ResourceQuery: { Type?: {} | undefined; Query?: {} | undefined }
          }
        }
        output: UpdateGroupQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
