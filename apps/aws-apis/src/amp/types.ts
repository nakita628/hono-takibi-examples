type CreateAlertManagerDefinitionResponse = {
  status: { statusCode: {}; statusReason?: {} | undefined }
}
type DescribeAlertManagerDefinitionResponse = {
  alertManagerDefinition: {
    createdAt: {}
    data: {}
    modifiedAt: {}
    status: { statusCode: {}; statusReason?: {} | undefined }
  }
}
type PutAlertManagerDefinitionResponse = {
  status: { statusCode: {}; statusReason?: {} | undefined }
}
type CreateLoggingConfigurationResponse = {
  status: { statusCode: {}; statusReason?: {} | undefined }
}
type DescribeLoggingConfigurationResponse = {
  loggingConfiguration: {
    createdAt: {}
    logGroupArn: {}
    modifiedAt: {}
    status: { statusCode: {}; statusReason?: {} | undefined }
    workspace: {}
  }
}
type UpdateLoggingConfigurationResponse = {
  status: { statusCode: {}; statusReason?: {} | undefined }
}
type TagValue = string
type CreateRuleGroupsNamespaceResponse = {
  arn: {}
  name: {}
  status: { statusCode: {}; statusReason?: {} | undefined }
  tags?: {} | undefined
}
type ListRuleGroupsNamespacesResponse = { nextToken?: {} | undefined; ruleGroupsNamespaces: {} }
type CreateWorkspaceResponse = {
  arn: {}
  status: { statusCode: {} }
  tags?: {} | undefined
  workspaceId: {}
}
type ListWorkspacesResponse = { nextToken?: {} | undefined; workspaces: {} }
type DescribeRuleGroupsNamespaceResponse = {
  ruleGroupsNamespace: {
    arn: {}
    createdAt: {}
    data: {}
    modifiedAt: {}
    name: {}
    status: { statusCode: {}; statusReason?: {} | undefined }
    tags?: {} | undefined
  }
}
type PutRuleGroupsNamespaceResponse = {
  arn: {}
  name: {}
  status: { statusCode: {}; statusReason?: {} | undefined }
  tags?: {} | undefined
}
type DescribeWorkspaceResponse = {
  workspace: {
    alias?: {} | undefined
    arn: {}
    createdAt: {}
    prometheusEndpoint?: {} | undefined
    status: { statusCode: {} }
    tags?: {} | undefined
    workspaceId: {}
  }
}
type TagMap = { [x: string]: TagValue }
type ListTagsForResourceResponse = { tags?: TagMap | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/workspaces/:workspaceId/alertmanager/definition': {
      $post: {
        input: { param: { workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined; data: string } }
        output: CreateAlertManagerDefinitionResponse
        outputFormat: 'json'
        status: 202
      }
      $delete: {
        input: { param: { workspaceId: string } } & {
          query: { clientToken?: string | undefined }
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
        }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { workspaceId: string } } & {
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
        output: DescribeAlertManagerDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined; data: string } }
        output: PutAlertManagerDefinitionResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/workspaces/:workspaceId/logging': {
      $post: {
        input: { param: { workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined; logGroupArn: string } }
        output: CreateLoggingConfigurationResponse
        outputFormat: 'json'
        status: 202
      }
      $delete: {
        input: { param: { workspaceId: string } } & {
          query: { clientToken?: string | undefined }
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
        }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { workspaceId: string } } & {
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
        output: DescribeLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined; logGroupArn: string } }
        output: UpdateLoggingConfigurationResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/workspaces/:workspaceId/rulegroupsnamespaces': {
      $post: {
        input: { param: { workspaceId: string } } & {
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
            clientToken?: string | undefined
            data: string
            name: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateRuleGroupsNamespaceResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { workspaceId: string } } & {
          query: {
            maxResults?: number | undefined
            name?: string | undefined
            nextToken?: string | undefined
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
        }
        output: ListRuleGroupsNamespacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces': {
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
            alias?: string | undefined
            clientToken?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateWorkspaceResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: {
          query: {
            alias?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        }
        output: ListWorkspacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId/rulegroupsnamespaces/:name': {
      $delete: {
        input: { param: { name: string; workspaceId: string } } & {
          query: { clientToken?: string | undefined }
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
        }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { name: string; workspaceId: string } } & {
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
        output: DescribeRuleGroupsNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string; workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined; data: string } }
        output: PutRuleGroupsNamespaceResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/workspaces/:workspaceId': {
      $delete: {
        input: { param: { workspaceId: string } } & {
          query: { clientToken?: string | undefined }
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
        }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { workspaceId: string } } & {
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
        output: DescribeWorkspaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId/alias': {
      $post: {
        input: { param: { workspaceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { alias?: string | undefined; clientToken?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
