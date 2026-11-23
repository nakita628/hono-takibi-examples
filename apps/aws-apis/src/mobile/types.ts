type ProjectName = string
type ProjectId = string
type ProjectRegion = string
type ProjectState = 'NORMAL' | 'SYNCING' | 'IMPORTING'
type ResourceType = string
type ResourceName = string
type ResourceArn = string
type Feature = string
type AttributeValue = string
type Attributes = { [x: string]: AttributeValue }
type Resource = {
  type?: ResourceType | undefined
  name?: ResourceName | undefined
  arn?: ResourceArn | undefined
  feature?: Feature | undefined
  attributes?: Attributes | undefined
}
type Resources = Resource[]
type CreateProjectResult = {
  details?:
    | {
        name?: ProjectName | undefined
        projectId?: ProjectId | undefined
        region?: ProjectRegion | undefined
        state?: ProjectState | undefined
        createdDate?: {} | undefined
        lastUpdatedDate?: {} | undefined
        consoleUrl?: {} | undefined
        resources?: Resources | undefined
      }
    | undefined
}
type ProjectSummary = { name?: {} | undefined; projectId?: {} | undefined }
type ProjectSummaries = ProjectSummary[]
type NextToken = string
type ListProjectsResult = {
  projects?: ProjectSummaries | undefined
  nextToken?: NextToken | undefined
}
type DeleteProjectResult = { deletedResources?: {} | undefined; orphanedResources?: {} | undefined }
type BundleId = string
type BundleTitle = string
type BundleVersion = string
type BundleDescription = string
type IconUrl = string
type Platform = 'OSX' | 'WINDOWS' | 'LINUX' | 'OBJC' | 'SWIFT' | 'ANDROID' | 'JAVASCRIPT'
type Platforms = Platform[]
type DescribeBundleResult = {
  details?:
    | {
        bundleId?: BundleId | undefined
        title?: BundleTitle | undefined
        version?: BundleVersion | undefined
        description?: BundleDescription | undefined
        iconUrl?: IconUrl | undefined
        availablePlatforms?: Platforms | undefined
      }
    | undefined
}
type ExportBundleResult = { downloadUrl?: {} | undefined }
type ProjectDetails = {
  name?: ProjectName | undefined
  projectId?: ProjectId | undefined
  region?: ProjectRegion | undefined
  state?: ProjectState | undefined
  createdDate?: {} | undefined
  lastUpdatedDate?: {} | undefined
  consoleUrl?: {} | undefined
  resources?: Resources | undefined
}
type DescribeProjectResult = { details?: ProjectDetails | undefined }
type ExportProjectResult = {
  downloadUrl?: {} | undefined
  shareUrl?: {} | undefined
  snapshotId?: {} | undefined
}
type ListBundlesResult = { bundleList?: {} | undefined; nextToken?: {} | undefined }
type UpdateProjectResult = {
  details?:
    | {
        name?: ProjectName | undefined
        projectId?: ProjectId | undefined
        region?: ProjectRegion | undefined
        state?: ProjectState | undefined
        createdDate?: {} | undefined
        lastUpdatedDate?: {} | undefined
        consoleUrl?: {} | undefined
        resources?: Resources | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/projects': {
      $post: {
        input: {
          query: {
            name?: string | undefined
            region?: string | undefined
            snapshotId?: string | undefined
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
        } & { json: { contents?: string | undefined } }
        output: CreateProjectResult
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
        output: ListProjectsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId': {
      $delete: {
        input: { param: { projectId: string } } & {
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
        output: DeleteProjectResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bundles/:bundleId': {
      $get: {
        input: { param: { bundleId: string } } & {
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
        output: DescribeBundleResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bundleId: string } } & {
          query: {
            projectId?: string | undefined
            platform?:
              | 'OSX'
              | 'WINDOWS'
              | 'LINUX'
              | 'OBJC'
              | 'SWIFT'
              | 'ANDROID'
              | 'JAVASCRIPT'
              | undefined
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
        output: ExportBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project#projectId': {
      $get: {
        input: { query: { projectId: string; syncFromResources?: boolean | undefined } } & {
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
        output: DescribeProjectResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/exports/:projectId': {
      $post: {
        input: { param: { projectId: string } } & {
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
        output: ExportProjectResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bundles': {
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
        output: ListBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update#projectId': {
      $post: {
        input: { query: { projectId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { contents?: string | undefined } }
        output: UpdateProjectResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
