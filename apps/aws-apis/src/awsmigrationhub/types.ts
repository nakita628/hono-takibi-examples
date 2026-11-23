type AssociateCreatedArtifactRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  CreatedArtifact: { Name: {}; Description?: {} | undefined }
  DryRun?: {} | undefined
}
type AssociateCreatedArtifactResult = { [x: string]: unknown }
type AssociateDiscoveredResourceRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  DiscoveredResource: { ConfigurationId: {}; Description?: {} | undefined }
  DryRun?: {} | undefined
}
type AssociateDiscoveredResourceResult = { [x: string]: unknown }
type CreateProgressUpdateStreamRequest = { ProgressUpdateStreamName: {}; DryRun?: {} | undefined }
type CreateProgressUpdateStreamResult = { [x: string]: unknown }
type DeleteProgressUpdateStreamRequest = { ProgressUpdateStreamName: {}; DryRun?: {} | undefined }
type DeleteProgressUpdateStreamResult = { [x: string]: unknown }
type DescribeApplicationStateRequest = { ApplicationId: {} }
type DescribeApplicationStateResult = {
  ApplicationStatus?: {} | undefined
  LastUpdatedTime?: {} | undefined
}
type DescribeMigrationTaskRequest = { ProgressUpdateStream: {}; MigrationTaskName: {} }
type DescribeMigrationTaskResult = {
  MigrationTask?:
    | {
        ProgressUpdateStream?: {} | undefined
        MigrationTaskName?: {} | undefined
        Task?:
          | { Status: {}; StatusDetail?: {} | undefined; ProgressPercent?: {} | undefined }
          | undefined
        UpdateDateTime?: {} | undefined
        ResourceAttributeList?: {} | undefined
      }
    | undefined
}
type DisassociateCreatedArtifactRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  CreatedArtifactName: {}
  DryRun?: {} | undefined
}
type DisassociateCreatedArtifactResult = { [x: string]: unknown }
type DisassociateDiscoveredResourceRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  ConfigurationId: {}
  DryRun?: {} | undefined
}
type DisassociateDiscoveredResourceResult = { [x: string]: unknown }
type ImportMigrationTaskRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  DryRun?: {} | undefined
}
type ImportMigrationTaskResult = { [x: string]: unknown }
type ListApplicationStatesRequest = {
  ApplicationIds?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListApplicationStatesResult = {
  ApplicationStateList?: {} | undefined
  NextToken?: {} | undefined
}
type ListCreatedArtifactsRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListCreatedArtifactsResult = {
  NextToken?: {} | undefined
  CreatedArtifactList?: {} | undefined
}
type ListDiscoveredResourcesRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDiscoveredResourcesResult = {
  NextToken?: {} | undefined
  DiscoveredResourceList?: {} | undefined
}
type ListMigrationTasksRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResourceName?: {} | undefined
}
type ListMigrationTasksResult = {
  NextToken?: {} | undefined
  MigrationTaskSummaryList?: {} | undefined
}
type ListProgressUpdateStreamsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListProgressUpdateStreamsResult = {
  ProgressUpdateStreamSummaryList?: {} | undefined
  NextToken?: {} | undefined
}
type NotifyApplicationStateRequest = {
  ApplicationId: {}
  Status: {}
  UpdateDateTime?: {} | undefined
  DryRun?: {} | undefined
}
type NotifyApplicationStateResult = { [x: string]: unknown }
type NotifyMigrationTaskStateRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  Task: { Status: {}; StatusDetail?: {} | undefined; ProgressPercent?: {} | undefined }
  UpdateDateTime: {}
  NextUpdateSeconds: {}
  DryRun?: {} | undefined
}
type NotifyMigrationTaskStateResult = { [x: string]: unknown }
type PutResourceAttributesRequest = {
  ProgressUpdateStream: {}
  MigrationTaskName: {}
  ResourceAttributeList: {}
  DryRun?: {} | undefined
}
type PutResourceAttributesResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.AssociateCreatedArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateCreatedArtifactRequest }
        output: AssociateCreatedArtifactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.AssociateDiscoveredResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDiscoveredResourceRequest }
        output: AssociateDiscoveredResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.CreateProgressUpdateStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProgressUpdateStreamRequest }
        output: CreateProgressUpdateStreamResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.DeleteProgressUpdateStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProgressUpdateStreamRequest }
        output: DeleteProgressUpdateStreamResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.DescribeApplicationState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeApplicationStateRequest }
        output: DescribeApplicationStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.DescribeMigrationTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMigrationTaskRequest }
        output: DescribeMigrationTaskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.DisassociateCreatedArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateCreatedArtifactRequest }
        output: DisassociateCreatedArtifactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.DisassociateDiscoveredResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDiscoveredResourceRequest }
        output: DisassociateDiscoveredResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ImportMigrationTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportMigrationTaskRequest }
        output: ImportMigrationTaskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ListApplicationStates': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ListApplicationStates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApplicationStatesRequest }
        output: ListApplicationStatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ListCreatedArtifacts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCreatedArtifactsRequest }
        output: ListCreatedArtifactsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ListDiscoveredResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDiscoveredResourcesRequest }
        output: ListDiscoveredResourcesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ListMigrationTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMigrationTasksRequest }
        output: ListMigrationTasksResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.ListProgressUpdateStreams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProgressUpdateStreamsRequest }
        output: ListProgressUpdateStreamsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.NotifyApplicationState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyApplicationStateRequest }
        output: NotifyApplicationStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.NotifyMigrationTaskState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyMigrationTaskStateRequest }
        output: NotifyMigrationTaskStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMigrationHub.PutResourceAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourceAttributesRequest }
        output: PutResourceAttributesResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
