type CreateConnectionInput = {
  ProviderType?: {} | undefined
  ConnectionName: {}
  Tags?: {} | undefined
  HostArn?: {} | undefined
}
type CreateConnectionOutput = { ConnectionArn: {}; Tags?: {} | undefined }
type Tag = { Key: {}; Value: {} }
type TagList = Tag[]
type CreateHostInput = {
  Name: {}
  ProviderType: {}
  ProviderEndpoint: {}
  VpcConfiguration?:
    | { VpcId: {}; SubnetIds: {}; SecurityGroupIds: {}; TlsCertificate?: {} | undefined }
    | undefined
  Tags?: TagList | undefined
}
type CreateHostOutput = { HostArn?: {} | undefined; Tags?: TagList | undefined }
type DeleteConnectionInput = { ConnectionArn: {} }
type DeleteConnectionOutput = { [x: string]: unknown }
type DeleteHostInput = { HostArn: {} }
type DeleteHostOutput = { [x: string]: unknown }
type GetConnectionInput = { ConnectionArn: {} }
type GetConnectionOutput = {
  Connection?:
    | {
        ConnectionName?: {} | undefined
        ConnectionArn?: {} | undefined
        ProviderType?: {} | undefined
        OwnerAccountId?: {} | undefined
        ConnectionStatus?: {} | undefined
        HostArn?: {} | undefined
      }
    | undefined
}
type GetHostInput = { HostArn: {} }
type GetHostOutput = {
  Name?: {} | undefined
  Status?: {} | undefined
  ProviderType?: {} | undefined
  ProviderEndpoint?: {} | undefined
  VpcConfiguration?:
    | { VpcId: {}; SubnetIds: {}; SecurityGroupIds: {}; TlsCertificate?: {} | undefined }
    | undefined
}
type ListConnectionsInput = {
  ProviderTypeFilter?: {} | undefined
  HostArnFilter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListConnectionsOutput = { Connections?: {} | undefined; NextToken?: {} | undefined }
type ListHostsInput = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListHostsOutput = { Hosts?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceInput = { ResourceArn: {} }
type ListTagsForResourceOutput = { Tags?: {} | undefined }
type TagResourceInput = { ResourceArn: {}; Tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { ResourceArn: {}; TagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateHostInput = {
  HostArn: {}
  ProviderEndpoint?: {} | undefined
  VpcConfiguration?:
    | { VpcId: {}; SubnetIds: {}; SecurityGroupIds: {}; TlsCertificate?: {} | undefined }
    | undefined
}
type UpdateHostOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectionInput }
        output: CreateConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHostInput }
        output: CreateHostOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectionInput }
        output: DeleteConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHostInput }
        output: DeleteHostOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConnectionInput }
        output: GetConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetHostInput }
        output: GetHostOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConnectionsInput }
        output: ListConnectionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHostsInput }
        output: ListHostsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateHostInput }
        output: UpdateHostOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
