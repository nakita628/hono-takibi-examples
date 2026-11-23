type String = string
type User = {
  ConsoleAccess?: {} | undefined
  Groups?: {} | undefined
  Password: {}
  Username: {}
  ReplicationUser?: {} | undefined
}
type CreateBrokerResponse = { BrokerArn?: {} | undefined; BrokerId?: {} | undefined }
type ListBrokersResponse = { BrokerSummaries?: {} | undefined; NextToken?: {} | undefined }
type CreateConfigurationResponse = {
  Arn?: {} | undefined
  AuthenticationStrategy?: {} | undefined
  Created?: {} | undefined
  Id?: {} | undefined
  LatestRevision?: { Created: {}; Description?: {} | undefined; Revision: {} } | undefined
  Name?: {} | undefined
}
type ListConfigurationsResponse = {
  Configurations?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsResponse = { Tags?: {} | undefined }
type CreateUserResponse = { [x: string]: unknown }
type DeleteUserResponse = { [x: string]: unknown }
type DescribeUserResponse = {
  BrokerId?: {} | undefined
  ConsoleAccess?: {} | undefined
  Groups?: {} | undefined
  Pending?:
    | { ConsoleAccess?: {} | undefined; Groups?: {} | undefined; PendingChange: {} }
    | undefined
  Username?: {} | undefined
  ReplicationUser?: {} | undefined
}
type UpdateUserResponse = { [x: string]: unknown }
type DeleteBrokerResponse = { BrokerId?: {} | undefined }
type DescribeBrokerResponse = {
  ActionsRequired?: {} | undefined
  AuthenticationStrategy?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  BrokerArn?: {} | undefined
  BrokerId?: {} | undefined
  BrokerInstances?: {} | undefined
  BrokerName?: {} | undefined
  BrokerState?: {} | undefined
  Configurations?:
    | {
        Current?: { Id: {}; Revision?: {} | undefined } | undefined
        History?: {} | undefined
        Pending?: { Id: {}; Revision?: {} | undefined } | undefined
      }
    | undefined
  Created?: {} | undefined
  DeploymentMode?: {} | undefined
  EncryptionOptions?: { KmsKeyId?: {} | undefined; UseAwsOwnedKey: {} } | undefined
  EngineType?: {} | undefined
  EngineVersion?: {} | undefined
  HostInstanceType?: {} | undefined
  LdapServerMetadata?:
    | {
        Hosts: {}
        RoleBase: {}
        RoleName?: {} | undefined
        RoleSearchMatching: {}
        RoleSearchSubtree?: {} | undefined
        ServiceAccountUsername: {}
        UserBase: {}
        UserRoleName?: {} | undefined
        UserSearchMatching: {}
        UserSearchSubtree?: {} | undefined
      }
    | undefined
  Logs?:
    | {
        Audit?: {} | undefined
        AuditLogGroup?: {} | undefined
        General: {}
        GeneralLogGroup: {}
        Pending?: { Audit?: {} | undefined; General?: {} | undefined } | undefined
      }
    | undefined
  MaintenanceWindowStartTime?:
    | { DayOfWeek: {}; TimeOfDay: {}; TimeZone?: {} | undefined }
    | undefined
  PendingAuthenticationStrategy?: {} | undefined
  PendingEngineVersion?: {} | undefined
  PendingHostInstanceType?: {} | undefined
  PendingLdapServerMetadata?:
    | {
        Hosts: {}
        RoleBase: {}
        RoleName?: {} | undefined
        RoleSearchMatching: {}
        RoleSearchSubtree?: {} | undefined
        ServiceAccountUsername: {}
        UserBase: {}
        UserRoleName?: {} | undefined
        UserSearchMatching: {}
        UserSearchSubtree?: {} | undefined
      }
    | undefined
  PendingSecurityGroups?: {} | undefined
  PubliclyAccessible?: {} | undefined
  SecurityGroups?: {} | undefined
  StorageType?: {} | undefined
  SubnetIds?: {} | undefined
  Tags?: {} | undefined
  Users?: {} | undefined
  DataReplicationMetadata?:
    | {
        DataReplicationCounterpart?: { BrokerId: {}; Region: {} } | undefined
        DataReplicationRole: {}
      }
    | undefined
  DataReplicationMode?: {} | undefined
  PendingDataReplicationMetadata?:
    | {
        DataReplicationCounterpart?: { BrokerId: {}; Region: {} } | undefined
        DataReplicationRole: {}
      }
    | undefined
  PendingDataReplicationMode?: {} | undefined
}
type UpdateBrokerResponse = {
  AuthenticationStrategy?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  BrokerId?: {} | undefined
  Configuration?: { Id: {}; Revision?: {} | undefined } | undefined
  EngineVersion?: {} | undefined
  HostInstanceType?: {} | undefined
  LdapServerMetadata?:
    | {
        Hosts: {}
        RoleBase: {}
        RoleName?: {} | undefined
        RoleSearchMatching: {}
        RoleSearchSubtree?: {} | undefined
        ServiceAccountUsername: {}
        UserBase: {}
        UserRoleName?: {} | undefined
        UserSearchMatching: {}
        UserSearchSubtree?: {} | undefined
      }
    | undefined
  Logs?: { Audit?: {} | undefined; General?: {} | undefined } | undefined
  MaintenanceWindowStartTime?:
    | { DayOfWeek: {}; TimeOfDay: {}; TimeZone?: {} | undefined }
    | undefined
  SecurityGroups?: {} | undefined
  DataReplicationMetadata?:
    | {
        DataReplicationCounterpart?: { BrokerId: {}; Region: {} } | undefined
        DataReplicationRole: {}
      }
    | undefined
  DataReplicationMode?: {} | undefined
  PendingDataReplicationMetadata?:
    | {
        DataReplicationCounterpart?: { BrokerId: {}; Region: {} } | undefined
        DataReplicationRole: {}
      }
    | undefined
  PendingDataReplicationMode?: {} | undefined
}
type DescribeBrokerEngineTypesResponse = {
  BrokerEngineTypes?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeBrokerInstanceOptionsResponse = {
  BrokerInstanceOptions?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConfigurationResponse = {
  Arn?: {} | undefined
  AuthenticationStrategy?: {} | undefined
  Created?: {} | undefined
  Description?: {} | undefined
  EngineType?: {} | undefined
  EngineVersion?: {} | undefined
  Id?: {} | undefined
  LatestRevision?: { Created: {}; Description?: {} | undefined; Revision: {} } | undefined
  Name?: {} | undefined
  Tags?: {} | undefined
}
type UpdateConfigurationResponse = {
  Arn?: {} | undefined
  Created?: {} | undefined
  Id?: {} | undefined
  LatestRevision?: { Created: {}; Description?: {} | undefined; Revision: {} } | undefined
  Name?: {} | undefined
  Warnings?: {} | undefined
}
type DescribeConfigurationRevisionResponse = {
  ConfigurationId?: {} | undefined
  Created?: {} | undefined
  Data?: {} | undefined
  Description?: {} | undefined
}
type ListConfigurationRevisionsResponse = {
  ConfigurationId?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Revisions?: {} | undefined
}
type ListUsersResponse = {
  BrokerId?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Users?: {} | undefined
}
type PromoteResponse = { BrokerId?: {} | undefined }
type RebootBrokerResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/brokers': {
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
            authenticationStrategy?: 'SIMPLE' | 'LDAP' | undefined
            autoMinorVersionUpgrade: boolean
            brokerName: string
            configuration?: { Id?: {} | undefined; Revision?: {} | undefined } | undefined
            creatorRequestId?: string | undefined
            deploymentMode: 'SINGLE_INSTANCE' | 'ACTIVE_STANDBY_MULTI_AZ' | 'CLUSTER_MULTI_AZ'
            encryptionOptions?:
              | { KmsKeyId?: {} | undefined; UseAwsOwnedKey?: {} | undefined }
              | undefined
            engineType: 'ACTIVEMQ' | 'RABBITMQ'
            engineVersion: string
            hostInstanceType: string
            ldapServerMetadata?:
              | {
                  Hosts?: {} | undefined
                  RoleBase?: {} | undefined
                  RoleName?: {} | undefined
                  RoleSearchMatching?: {} | undefined
                  RoleSearchSubtree?: {} | undefined
                  ServiceAccountPassword?: {} | undefined
                  ServiceAccountUsername?: {} | undefined
                  UserBase?: {} | undefined
                  UserRoleName?: {} | undefined
                  UserSearchMatching?: {} | undefined
                  UserSearchSubtree?: {} | undefined
                }
              | undefined
            logs?: { Audit?: {} | undefined; General?: {} | undefined } | undefined
            maintenanceWindowStartTime?:
              | {
                  DayOfWeek?: {} | undefined
                  TimeOfDay?: {} | undefined
                  TimeZone?: {} | undefined
                }
              | undefined
            publiclyAccessible: boolean
            securityGroups?: String[] | undefined
            storageType?: 'EBS' | 'EFS' | undefined
            subnetIds?: String[] | undefined
            tags?: { [x: string]: String } | undefined
            users: User[]
            dataReplicationMode?: 'NONE' | 'CRDR' | undefined
            dataReplicationPrimaryBrokerArn?: string | undefined
          }
        }
        output: CreateBrokerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        }
        output: ListBrokersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/configurations': {
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
            authenticationStrategy?: 'SIMPLE' | 'LDAP' | undefined
            engineType: 'ACTIVEMQ' | 'RABBITMQ'
            engineVersion: string
            name: string
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/:resource-arn': {
      $post: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags?: { [x: string]: String } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { 'resource-arn': string } } & {
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
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/brokers/:broker-id/users/:username': {
      $post: {
        input: { param: { 'broker-id': string; username: string } } & {
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
            consoleAccess?: boolean | undefined
            groups?: String[] | undefined
            password: string
            replicationUser?: boolean | undefined
          }
        }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { 'broker-id': string; username: string } } & {
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
        output: DeleteUserResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'broker-id': string; username: string } } & {
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
        output: DescribeUserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'broker-id': string; username: string } } & {
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
            consoleAccess?: boolean | undefined
            groups?: String[] | undefined
            password?: string | undefined
            replicationUser?: boolean | undefined
          }
        }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/brokers/:broker-id': {
      $delete: {
        input: { param: { 'broker-id': string } } & {
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
        output: DeleteBrokerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'broker-id': string } } & {
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
        output: DescribeBrokerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'broker-id': string } } & {
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
            authenticationStrategy?: 'SIMPLE' | 'LDAP' | undefined
            autoMinorVersionUpgrade?: boolean | undefined
            configuration?: { Id?: {} | undefined; Revision?: {} | undefined } | undefined
            engineVersion?: string | undefined
            hostInstanceType?: string | undefined
            ldapServerMetadata?:
              | {
                  Hosts?: {} | undefined
                  RoleBase?: {} | undefined
                  RoleName?: {} | undefined
                  RoleSearchMatching?: {} | undefined
                  RoleSearchSubtree?: {} | undefined
                  ServiceAccountPassword?: {} | undefined
                  ServiceAccountUsername?: {} | undefined
                  UserBase?: {} | undefined
                  UserRoleName?: {} | undefined
                  UserSearchMatching?: {} | undefined
                  UserSearchSubtree?: {} | undefined
                }
              | undefined
            logs?: { Audit?: {} | undefined; General?: {} | undefined } | undefined
            maintenanceWindowStartTime?:
              | {
                  DayOfWeek?: {} | undefined
                  TimeOfDay?: {} | undefined
                  TimeZone?: {} | undefined
                }
              | undefined
            securityGroups?: String[] | undefined
            dataReplicationMode?: 'NONE' | 'CRDR' | undefined
          }
        }
        output: UpdateBrokerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
        status: 204
      }
    }
  } & {
    '/v1/broker-engine-types': {
      $get: {
        input: {
          query: {
            engineType?: string | undefined
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
        output: DescribeBrokerEngineTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broker-instance-options': {
      $get: {
        input: {
          query: {
            engineType?: string | undefined
            hostInstanceType?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            storageType?: string | undefined
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
        output: DescribeBrokerInstanceOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/configurations/:configuration-id': {
      $get: {
        input: { param: { 'configuration-id': string } } & {
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
        output: DescribeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'configuration-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { data: string; description?: string | undefined } }
        output: UpdateConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/configurations/:configuration-id/revisions/:configuration-revision': {
      $get: {
        input: { param: { 'configuration-id': string; 'configuration-revision': string } } & {
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
        output: DescribeConfigurationRevisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/configurations/:configuration-id/revisions': {
      $get: {
        input: { param: { 'configuration-id': string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListConfigurationRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/brokers/:broker-id/users': {
      $get: {
        input: { param: { 'broker-id': string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/brokers/:broker-id/promote': {
      $post: {
        input: { param: { 'broker-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { mode: 'SWITCHOVER' | 'FAILOVER' } }
        output: PromoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/brokers/:broker-id/reboot': {
      $post: {
        input: { param: { 'broker-id': string } } & {
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
        output: RebootBrokerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
