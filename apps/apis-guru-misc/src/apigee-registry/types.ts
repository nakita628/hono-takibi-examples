type Api = {
  annotations?: { [x: string]: string } | undefined
  availability?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  recommendedDeployment?: string | undefined
  recommendedVersion?: string | undefined
  updateTime?: string | undefined
}
type ListApisResponse = { apis?: Api[] | undefined; nextPageToken?: string | undefined }
type GoogleProtobufAny = { '@type'?: string | undefined }
type Status = {
  code?: number | undefined
  details?: GoogleProtobufAny[] | undefined
  message?: string | undefined
}
type ApiDeployment = {
  accessGuidance?: string | undefined
  annotations?: { [x: string]: string } | undefined
  apiSpecRevision?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  endpointUri?: string | undefined
  externalChannelUri?: string | undefined
  intendedAudience?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  revisionCreateTime?: string | undefined
  revisionId?: string | undefined
  revisionUpdateTime?: string | undefined
}
type ListApiDeploymentsResponse = {
  apiDeployments?: ApiDeployment[] | undefined
  nextPageToken?: string | undefined
}
type ListApiDeploymentRevisionsResponse = {
  apiDeployments?: ApiDeployment[] | undefined
  nextPageToken?: string | undefined
}
type RollbackApiDeploymentRequest = { name: string; revisionId: string }
type TagApiDeploymentRevisionRequest = { name: string; tag: string }
type ApiVersion = {
  annotations?: { [x: string]: string } | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?: string | undefined
  updateTime?: string | undefined
}
type ListApiVersionsResponse = {
  apiVersions?: ApiVersion[] | undefined
  nextPageToken?: string | undefined
}
type ApiSpec = {
  annotations?: { [x: string]: string } | undefined
  contents?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  filename?: string | undefined
  hash?: string | undefined
  labels?: { [x: string]: string } | undefined
  mimeType?: string | undefined
  name?: string | undefined
  revisionCreateTime?: string | undefined
  revisionId?: string | undefined
  revisionUpdateTime?: string | undefined
  sizeBytes?: number | undefined
  sourceUri?: string | undefined
}
type ListApiSpecsResponse = { apiSpecs?: ApiSpec[] | undefined; nextPageToken?: string | undefined }
type ListApiSpecRevisionsResponse = {
  apiSpecs?: ApiSpec[] | undefined
  nextPageToken?: string | undefined
}
type RollbackApiSpecRequest = { name: string; revisionId: string }
type TagApiSpecRevisionRequest = { name: string; tag: string }
type Artifact = {
  contents?: string | undefined
  createTime?: string | undefined
  hash?: string | undefined
  mimeType?: string | undefined
  name?: string | undefined
  sizeBytes?: number | undefined
  updateTime?: string | undefined
}
type ListArtifactsResponse = {
  artifacts?: Artifact[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/projects/:project/locations/:location/apis': {
      $get:
        | {
            input: { param: { project: string; location: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListApisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project: string; location: string } } & {
              query: { apiId?: string | undefined }
            } & { json: Api }
            output: Api
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string } } & {
              query: { apiId?: string | undefined }
            } & { json: Api }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api': {
      $delete:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { force?: boolean | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project: string; location: string; api: string } }
            output: Api
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: Api }
            output: Api
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: Api }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments': {
      $get:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListApiDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { apiDeploymentId?: string | undefined }
            } & { json: ApiDeployment }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { apiDeploymentId?: string | undefined }
            } & { json: ApiDeployment }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment': {
      $delete:
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { query: { force?: boolean | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project: string; location: string; api: string; deployment: string } }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string; deployment: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiDeployment }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiDeployment }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:deleteRevision': {
      $delete:
        | {
            input: { param: { project: string; location: string; api: string; deployment: string } }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string; deployment: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:listRevisions': {
      $get:
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: ListApiDeploymentRevisionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:rollback': {
      $post:
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { json: RollbackApiDeploymentRequest }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { json: RollbackApiDeploymentRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:tagRevision': {
      $post:
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { json: TagApiDeploymentRevisionRequest }
            output: ApiDeployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; deployment: string }
            } & { json: TagApiDeploymentRevisionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions': {
      $get:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListApiVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { apiVersionId?: string | undefined }
            } & { json: ApiVersion }
            output: ApiVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string } } & {
              query: { apiVersionId?: string | undefined }
            } & { json: ApiVersion }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version': {
      $delete:
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & { query: { force?: boolean | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project: string; location: string; api: string; version: string } }
            output: ApiVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; api: string; version: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiVersion }
            output: ApiVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiVersion }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs': {
      $get:
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListApiSpecsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & { query: { apiSpecId?: string | undefined } } & { json: ApiSpec }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project: string; location: string; api: string; version: string }
            } & { query: { apiSpecId?: string | undefined } } & { json: ApiSpec }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec': {
      $delete:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { query: { force?: boolean | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiSpec }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & {
              query: { updateMask?: string | undefined; allowMissing?: boolean | undefined }
            } & { json: ApiSpec }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:deleteRevision': {
      $delete:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:getContents': {
      $get:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:listRevisions': {
      $get:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: ListApiSpecRevisionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:rollback': {
      $post:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { json: RollbackApiSpecRequest }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { json: RollbackApiSpecRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:tagRevision': {
      $post:
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { json: TagApiSpecRevisionRequest }
            output: ApiSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                location: string
                api: string
                version: string
                spec: string
              }
            } & { json: TagApiSpecRevisionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/artifacts': {
      $get:
        | {
            input: { param: { project: string; location: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: ListArtifactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                filter?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project: string; location: string } } & {
              query: { artifactId?: string | undefined }
            } & { json: Artifact }
            output: Artifact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string } } & {
              query: { artifactId?: string | undefined }
            } & { json: Artifact }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/artifacts/:artifact': {
      $delete:
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: Artifact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { project: string; location: string; artifact: string } } & {
              json: Artifact
            }
            output: Artifact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; location: string; artifact: string } } & {
              json: Artifact
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/projects/:project/locations/:location/artifacts/:artifact:getContents': {
      $get:
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project: string; location: string; artifact: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
