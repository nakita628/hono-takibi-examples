import { createRoute, z } from '@hono/zod-openapi'

const RepoSourceSchema = z
  .object({
    branchName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
    commitSha: z.string().exactOptional().openapi({ description: 'Explicit commit SHA to build.' }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.",
      }),
    invertRegex: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only trigger a build if the revision regex does NOT match the revision regex.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.',
      }),
    repoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Cloud Source Repository.' }),
    substitutions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Substitutions to use in a triggered build. Should only be used with RunBuildTrigger',
      }),
    tagName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
  })
  .openapi({
    description: 'Location of the source in a Google Cloud Source Repository.',
    required: [],
  })
  .openapi('RepoSource')

const StorageSourceSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.',
      }),
  })
  .openapi({
    description: 'Location of the source in an archive file in Google Cloud Storage.',
    required: [],
  })
  .openapi('StorageSource')

const StorageSourceManifestSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage object containing the source manifest. This object must be a JSON file.',
      }),
  })
  .openapi({
    description:
      'Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).',
    required: [],
  })
  .openapi('StorageSourceManifest')

type SourceType = {
  repoSource?: z.infer<typeof RepoSourceSchema>
  storageSource?: z.infer<typeof StorageSourceSchema>
  storageSourceManifest?: z.infer<typeof StorageSourceManifestSchema>
}

const ApprovalConfigSchema = z
  .object({
    approvalRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.',
      }),
  })
  .openapi({
    description: 'ApprovalConfig describes configuration for manual approval of a build.',
    required: [],
  })
  .openapi('ApprovalConfig')

const ApprovalResultSchema = z
  .object({
    approvalTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the approval decision was made.',
        readOnly: true,
      }),
    approverAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.',
        readOnly: true,
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. An optional comment for this manual approval result.' }),
    decision: z
      .enum(['DECISION_UNSPECIFIED', 'APPROVED', 'REJECTED'])
      .exactOptional()
      .openapi({ description: 'Required. The decision of this manual approval.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.',
      }),
  })
  .openapi({
    description:
      'ApprovalResult describes the decision and associated metadata of a manual approval of a build.',
    required: [],
  })
  .openapi('ApprovalResult')

const TimeSpanSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'End of time span.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Start of time span.' }),
  })
  .openapi({ description: 'Start and end times for a build execution phase.', required: [] })
  .openapi('TimeSpan')

const ArtifactObjectsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.',
      }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Path globs used to match files in the build's workspace." }),
    timing: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing all artifact objects.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.',
    required: [],
  })
  .openapi('ArtifactObjects')

const HashSchema = z
  .object({
    type: z
      .enum(['NONE', 'SHA256', 'MD5'])
      .exactOptional()
      .openapi({ description: 'The type of hash that was performed.' }),
    value: z.string().exactOptional().openapi({ description: 'The hash value.' }),
  })
  .openapi({ description: 'Container message for hash values.', required: [] })
  .openapi('Hash')

const FileHashesSchema = z
  .object({
    fileHash: z
      .array(HashSchema)
      .exactOptional()
      .openapi({ description: 'Collection of file hashes.' }),
  })
  .openapi({
    description:
      'Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.',
    required: [],
  })
  .openapi('FileHashes')

const ArtifactResultSchema = z
  .object({
    fileHash: z
      .array(FileHashesSchema)
      .exactOptional()
      .openapi({ description: 'The file hash of the artifact.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`.',
      }),
  })
  .openapi({
    description:
      'An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.',
    required: [],
  })
  .openapi('ArtifactResult')

const MavenArtifactSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maven `artifactId` value used when uploading the artifact to Artifact Registry.',
      }),
    groupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maven `groupId` value used when uploading the artifact to Artifact Registry.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.",
      }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maven `version` value used when uploading the artifact to Artifact Registry.',
      }),
  })
  .openapi({
    description:
      'A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.',
    required: [],
  })
  .openapi('MavenArtifact')

const PythonPackageSchema = z
  .object({
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file.",
      }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.',
      }),
  })
  .openapi({
    description:
      'Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.',
    required: [],
  })
  .openapi('PythonPackage')

const ArtifactsSchema = z
  .object({
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.",
      }),
    mavenArtifacts: z
      .array(MavenArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.",
      }),
    objects: ArtifactObjectsSchema.exactOptional().openapi({
      description:
        "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.",
    }),
    pythonPackages: z
      .array(PythonPackageSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.',
      }),
  })
  .openapi({
    description:
      'Artifacts produced by a build that should be uploaded upon successful completion of all build steps.',
    required: [],
  })
  .openapi('Artifacts')

const BitbucketServerRepositoryIdSchema = z
  .object({
    projectKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Identifier for the project storing the repository.' }),
    repoSlug: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Identifier for the repository.' }),
    webhookId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.',
    required: [],
  })
  .openapi('BitbucketServerRepositoryId')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const BitbucketServerConnectedRepositorySchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`',
      }),
    repo: BitbucketServerRepositoryIdSchema.exactOptional().openapi({
      description: 'The Bitbucket Server repositories to connect.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description: 'Output only. The status of the repo connection request.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      '/ BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository.',
    required: [],
  })
  .openapi('BitbucketServerConnectedRepository')

const BatchCreateBitbucketServerConnectedRepositoriesResponseSchema = z
  .object({
    bitbucketServerConnectedRepositories: z
      .array(BitbucketServerConnectedRepositorySchema)
      .exactOptional()
      .openapi({ description: 'The connected Bitbucket Server repositories.' }),
  })
  .openapi({
    description:
      'Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories.',
    required: [],
  })
  .openapi('BatchCreateBitbucketServerConnectedRepositoriesResponse')

const BatchCreateBitbucketServerConnectedRepositoriesResponseMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    config: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `BitbucketServerConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
  })
  .openapi({
    description: 'Metadata for `BatchCreateBitbucketServerConnectedRepositories` operation.',
    required: [],
  })
  .openapi('BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata')

const GitLabRepositoryIdSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Identifier for the repository. example: "namespace/project-slug", namespace is usually the username or group ID',
      }),
    webhookId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise',
    required: [],
  })
  .openapi('GitLabRepositoryId')

const GitLabConnectedRepositorySchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `GitLabConfig` that added connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`',
      }),
    repo: GitLabRepositoryIdSchema.exactOptional().openapi({
      description: 'The GitLab repositories to connect.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description: 'Output only. The status of the repo connection request.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'GitLabConnectedRepository represents a GitLab connected repository request response.',
    required: [],
  })
  .openapi('GitLabConnectedRepository')

const BatchCreateGitLabConnectedRepositoriesResponseSchema = z
  .object({
    gitlabConnectedRepositories: z
      .array(GitLabConnectedRepositorySchema)
      .exactOptional()
      .openapi({ description: "The GitLab connected repository requests' responses." }),
  })
  .openapi({
    description: 'Response of BatchCreateGitLabConnectedRepositories RPC method.',
    required: [],
  })
  .openapi('BatchCreateGitLabConnectedRepositoriesResponse')

const BatchCreateGitLabConnectedRepositoriesResponseMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    config: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `GitLabConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
  })
  .openapi({
    description: 'Metadata for `BatchCreateGitLabConnectedRepositories` operation.',
    required: [],
  })
  .openapi('BatchCreateGitLabConnectedRepositoriesResponseMetadata')

const RepositorySchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Allows clients to store small amounts of arbitrary data.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server assigned timestamp for when the connection was created.',
        readOnly: true,
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`.',
      }),
    remoteUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Git Clone HTTPS URI.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server assigned timestamp for when the connection was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A repository associated to a parent connection.', required: [] })
  .openapi('Repository')

const BatchCreateRepositoriesResponseSchema = z
  .object({
    repositories: z
      .array(RepositorySchema)
      .exactOptional()
      .openapi({ description: 'Repository resources created.' }),
  })
  .openapi({ description: 'Message for response of creating repositories in batch.', required: [] })
  .openapi('BatchCreateRepositoriesResponse')

const BuildApprovalSchema = z
  .object({
    config: ApprovalConfigSchema.exactOptional().openapi({
      description: 'Output only. Configuration for manual approval of this build.',
      readOnly: true,
    }),
    result: ApprovalResultSchema.exactOptional().openapi({
      description: 'Output only. Result of manual approval for this Build.',
      readOnly: true,
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'APPROVED', 'REJECTED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: "Output only. The state of this build's approval.", readOnly: true }),
  })
  .openapi({
    description: "BuildApproval describes a build's approval configuration, state, and result.",
    required: [],
  })
  .openapi('BuildApproval')

const InlineSecretSchema = z
  .object({
    envMap: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.",
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/*/locations/*/keyRings/*/cryptoKeys/*',
      }),
  })
  .openapi({
    description:
      'Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.',
    required: [],
  })
  .openapi('InlineSecret')

const SecretManagerSecretSchema = z
  .object({
    env: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.",
      }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*',
      }),
  })
  .openapi({
    description: 'Pairs a secret environment variable with a SecretVersion in Secret Manager.',
    required: [],
  })
  .openapi('SecretManagerSecret')

const SecretsSchema = z
  .object({
    inline: z
      .array(InlineSecretSchema)
      .exactOptional()
      .openapi({
        description:
          'Secrets encrypted with KMS key and the associated secret environment variable.',
      }),
    secretManager: z
      .array(SecretManagerSecretSchema)
      .exactOptional()
      .openapi({
        description: 'Secrets in Secret Manager and associated secret environment variable.',
      }),
  })
  .openapi({ description: 'Secrets and secret environment variables.', required: [] })
  .openapi('Secrets')

const FailureInfoSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explains the failure issue in more detail using hard-coded text.' }),
    type: z
      .enum([
        'FAILURE_TYPE_UNSPECIFIED',
        'PUSH_FAILED',
        'PUSH_IMAGE_NOT_FOUND',
        'PUSH_NOT_AUTHORIZED',
        'LOGGING_FAILURE',
        'USER_BUILD_STEP',
        'FETCH_SOURCE_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The name of the failure.' }),
  })
  .openapi({
    description: 'A fatal problem encountered during the execution of the build.',
    required: [],
  })
  .openapi('FailureInfo')

const PoolOptionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId}',
      }),
  })
  .openapi({
    description:
      'Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.',
    required: [],
  })
  .openapi('PoolOption')

const VolumeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.',
      }),
  })
  .openapi({
    description:
      'Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.',
    required: [],
  })
  .openapi('Volume')

const BuildOptionsSchema = z
  .object({
    diskSizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.',
      }),
    dynamicSubstitutions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.',
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      }),
    logStreamingOption: z
      .enum(['STREAM_DEFAULT', 'STREAM_ON', 'STREAM_OFF'])
      .exactOptional()
      .openapi({
        description: 'Option to define build log streaming behavior to Google Cloud Storage.',
      }),
    logging: z
      .enum([
        'LOGGING_UNSPECIFIED',
        'LEGACY',
        'GCS_ONLY',
        'STACKDRIVER_ONLY',
        'CLOUD_LOGGING_ONLY',
        'NONE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify the logging mode, which determines if and where build logs are stored.',
      }),
    machineType: z
      .enum(['UNSPECIFIED', 'N1_HIGHCPU_8', 'N1_HIGHCPU_32', 'E2_HIGHCPU_8', 'E2_HIGHCPU_32'])
      .exactOptional()
      .openapi({ description: 'Compute Engine machine type on which to run the build.' }),
    pool: PoolOptionSchema.exactOptional().openapi({
      description:
        'Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.',
    }),
    requestedVerifyOption: z
      .enum(['NOT_VERIFIED', 'VERIFIED'])
      .exactOptional()
      .openapi({ description: 'Requested verifiability options.' }),
    secretEnv: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.",
      }),
    sourceProvenanceHash: z
      .array(z.enum(['NONE', 'SHA256', 'MD5']))
      .exactOptional()
      .openapi({ description: 'Requested hash for SourceProvenance.' }),
    substitutionOption: z
      .enum(['MUST_MATCH', 'ALLOW_LOOSE'])
      .exactOptional()
      .openapi({
        description:
          'Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.',
      }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.',
      }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field deprecated; please use `pool.name` instead.' }),
  })
  .openapi({
    description: 'Optional arguments to enable specific features of builds.',
    required: [],
  })
  .openapi('BuildOptions')

const BuiltImageSchema = z
  .object({
    digest: z.string().exactOptional().openapi({ description: 'Docker Registry 2.0 digest.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name used to push the container image to Google Container Registry, as presented to `docker push`.',
      }),
    pushTiming: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified image.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'An image built by the pipeline.', required: [] })
  .openapi('BuiltImage')

const UploadedMavenArtifactSchema = z
  .object({
    fileHashes: FileHashesSchema.exactOptional().openapi({
      description: 'Hash types and values of the Maven Artifact.',
    }),
    pushTiming: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified artifact.',
      readOnly: true,
    }),
    uri: z.string().exactOptional().openapi({ description: 'URI of the uploaded artifact.' }),
  })
  .openapi({
    description: 'A Maven artifact uploaded using the MavenArtifact directive.',
    required: [],
  })
  .openapi('UploadedMavenArtifact')

const UploadedPythonPackageSchema = z
  .object({
    fileHashes: FileHashesSchema.exactOptional().openapi({
      description: 'Hash types and values of the Python Artifact.',
    }),
    pushTiming: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified artifact.',
      readOnly: true,
    }),
    uri: z.string().exactOptional().openapi({ description: 'URI of the uploaded artifact.' }),
  })
  .openapi({ description: 'Artifact uploaded using the PythonPackage directive.', required: [] })
  .openapi('UploadedPythonPackage')

const ResultsSchema = z
  .object({
    artifactManifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.',
      }),
    artifactTiming: TimeSpanSchema.exactOptional().openapi({
      description: 'Time to push all non-container artifacts to Cloud Storage.',
    }),
    buildStepImages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of build step digests, in the order corresponding to build step indices.',
      }),
    buildStepOutputs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.',
      }),
    images: z
      .array(BuiltImageSchema)
      .exactOptional()
      .openapi({ description: 'Container images that were built as a part of the build.' }),
    mavenArtifacts: z
      .array(UploadedMavenArtifactSchema)
      .exactOptional()
      .openapi({
        description: 'Maven artifacts uploaded to Artifact Registry at the end of the build.',
      }),
    numArtifacts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.',
      }),
    pythonPackages: z
      .array(UploadedPythonPackageSchema)
      .exactOptional()
      .openapi({
        description: 'Python artifacts uploaded to Artifact Registry at the end of the build.',
      }),
  })
  .openapi({ description: 'Artifacts created by the build pipeline.', required: [] })
  .openapi('Results')

const SecretSchema = z
  .object({
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud KMS key name to use to decrypt these envs.' }),
    secretEnv: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.",
      }),
  })
  .openapi({
    description:
      'Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.',
    required: [],
  })
  .openapi('Secret')

const SourceSchema: z.ZodType<SourceType> = z
  .lazy(() =>
    z
      .object({
        repoSource: RepoSourceSchema.exactOptional().openapi({
          description:
            'If provided, get the source from this location in a Cloud Source Repository.',
        }),
        storageSource: StorageSourceSchema.exactOptional().openapi({
          description: 'If provided, get the source from this location in Google Cloud Storage.',
        }),
        storageSourceManifest: StorageSourceManifestSchema.exactOptional().openapi({
          description:
            'If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).',
        }),
      })
      .openapi({
        description: 'Location of the source in a supported storage service.',
        required: [],
      }),
  )
  .openapi('Source')

const SourceProvenanceSchema = z
  .object({
    fileHashes: z
      .record(z.string(), FileHashesSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.',
        readOnly: true,
      }),
    resolvedRepoSource: RepoSourceSchema.exactOptional().openapi({
      description:
        "A copy of the build's `source.repo_source`, if exists, with any revisions resolved.",
    }),
    resolvedStorageSource: StorageSourceSchema.exactOptional().openapi({
      description:
        "A copy of the build's `source.storage_source`, if exists, with any generations resolved.",
    }),
    resolvedStorageSourceManifest: StorageSourceManifestSchema.exactOptional().openapi({
      description:
        "A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.",
    }),
  })
  .openapi({
    description:
      'Provenance of the source. Ways to find the original source, or verify that some source was used for this build.',
    required: [],
  })
  .openapi('SourceProvenance')

const BuildStepSchema = z
  .object({
    allowExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.',
      }),
    allowFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.",
      }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.",
      }),
    entrypoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.",
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      }),
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Return code from running the step.', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like \"ubuntu\", \"debian\", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.",
      }),
    pullTiming: TimeSpanSchema.exactOptional().openapi({
      description:
        "Output only. Stores timing information for pulling this build step's builder image only.",
      readOnly: true,
    }),
    script: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.',
      }),
    secretEnv: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.",
      }),
    status: z
      .enum([
        'STATUS_UNKNOWN',
        'PENDING',
        'QUEUED',
        'WORKING',
        'SUCCESS',
        'FAILURE',
        'INTERNAL_ERROR',
        'TIMEOUT',
        'CANCELLED',
        'EXPIRED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.',
        readOnly: true,
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.',
      }),
    timing: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for executing this build step.',
      readOnly: true,
    }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.',
      }),
    waitFor: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.',
      }),
  })
  .openapi({ description: 'A step in the build pipeline.', required: [] })
  .openapi('BuildStep')

const WarningSchema = z
  .object({
    priority: z
      .enum(['PRIORITY_UNSPECIFIED', 'INFO', 'WARNING', 'ALERT'])
      .exactOptional()
      .openapi({ description: 'The priority for this warning.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explanation of the warning generated.' }),
  })
  .openapi({
    description: 'A non-fatal problem encountered during the execution of the build.',
    required: [],
  })
  .openapi('Warning')

const BuildSchema = z
  .object({
    approval: BuildApprovalSchema.exactOptional().openapi({
      description:
        "Output only. Describes this build's approval configuration, status, and result.",
      readOnly: true,
    }),
    artifacts: ArtifactsSchema.exactOptional().openapi({
      description:
        'Artifacts produced by the build that should be uploaded upon successful completion of all build steps.',
    }),
    availableSecrets: SecretsSchema.exactOptional().openapi({
      description: 'Secrets and secret environment variables.',
    }),
    buildTriggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the request to create the build was received.',
        readOnly: true,
      }),
    failureInfo: FailureInfoSchema.exactOptional().openapi({
      description: 'Output only. Contains information about the build when status=FAILURE.',
      readOnly: true,
    }),
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.",
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique identifier of the build.', readOnly: true }),
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.",
      }),
    logUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. URL to logs for this build in Google Cloud Console.',
        readOnly: true,
      }),
    logsBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service.",
        readOnly: true,
      }),
    options: BuildOptionsSchema.exactOptional().openapi({
      description: 'Special options for this build.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ID of the project.', readOnly: true }),
    queueTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.',
      }),
    results: ResultsSchema.exactOptional().openapi({
      description: 'Output only. Results of the build.',
      readOnly: true,
    }),
    secrets: z
      .array(SecretSchema)
      .exactOptional()
      .openapi({
        description:
          'Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. ',
      }),
    source: SourceSchema.exactOptional().openapi({
      description: 'The location of the source files to build.',
    }),
    sourceProvenance: SourceProvenanceSchema.exactOptional().openapi({
      description: 'Output only. A permanent fixed identifier for source.',
      readOnly: true,
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which execution of the build was started.',
        readOnly: true,
      }),
    status: z
      .enum([
        'STATUS_UNKNOWN',
        'PENDING',
        'QUEUED',
        'WORKING',
        'SUCCESS',
        'FAILURE',
        'INTERNAL_ERROR',
        'TIMEOUT',
        'CANCELLED',
        'EXPIRED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Status of the build.', readOnly: true }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Customer-readable message about the current status.',
        readOnly: true,
      }),
    steps: z
      .array(BuildStepSchema)
      .exactOptional()
      .openapi({ description: 'Required. The operations to be performed on the workspace.' }),
    substitutions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Substitutions data for `Build` resource.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags for annotation of a `Build`. These are not docker tags.' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes.',
      }),
    timing: z
      .record(z.string(), TimeSpanSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.',
        readOnly: true,
      }),
    warnings: z
      .array(WarningSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Non-fatal problems encountered during the execution of the build.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.',
    required: [],
  })
  .openapi('Build')

const BuildOperationMetadataSchema = z
  .object({
    build: BuildSchema.exactOptional().openapi({
      description: 'The build that the operation is tracking.',
    }),
  })
  .openapi({ description: 'Metadata for build operations.', required: [] })
  .openapi('BuildOperationMetadata')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CreateBitbucketServerConfigOperationMetadataSchema = z
  .object({
    bitbucketServerConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the BitbucketServerConfig to be created. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.',
      }),
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
  })
  .openapi({ description: 'Metadata for `CreateBitbucketServerConfig` operation.', required: [] })
  .openapi('CreateBitbucketServerConfigOperationMetadata')

const CreateGitHubEnterpriseConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    githubEnterpriseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `CreateGithubEnterpriseConfig` operation.', required: [] })
  .openapi('CreateGitHubEnterpriseConfigOperationMetadata')

const CreateGitLabConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    gitlabConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `CreateGitLabConfig` operation.', required: [] })
  .openapi('CreateGitLabConfigOperationMetadata')

const CreateWorkerPoolOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the `WorkerPool` to create. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.',
      }),
  })
  .openapi({ description: 'Metadata for the `CreateWorkerPool` operation.', required: [] })
  .openapi('CreateWorkerPoolOperationMetadata')

const DeleteBitbucketServerConfigOperationMetadataSchema = z
  .object({
    bitbucketServerConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the BitbucketServerConfig to be deleted. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.',
      }),
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
  })
  .openapi({ description: 'Metadata for `DeleteBitbucketServerConfig` operation.', required: [] })
  .openapi('DeleteBitbucketServerConfigOperationMetadata')

const DeleteGitHubEnterpriseConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    githubEnterpriseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitHubEnterprise to be deleted. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `DeleteGitHubEnterpriseConfig` operation.', required: [] })
  .openapi('DeleteGitHubEnterpriseConfigOperationMetadata')

const DeleteGitLabConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    gitlabConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `DeleteGitLabConfig` operation.', required: [] })
  .openapi('DeleteGitLabConfigOperationMetadata')

const DeleteWorkerPoolOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the `WorkerPool` being deleted. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.',
      }),
  })
  .openapi({ description: 'Metadata for the `DeleteWorkerPool` operation.', required: [] })
  .openapi('DeleteWorkerPoolOperationMetadata')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleDevtoolsCloudbuildV2OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('GoogleDevtoolsCloudbuildV2OperationMetadata')

const HTTPDeliverySchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI to which JSON-containing HTTP POST requests should be sent.',
      }),
  })
  .openapi({
    description: 'HTTPDelivery is the delivery configuration for an HTTP notification.',
    required: [],
  })
  .openapi('HTTPDelivery')

const NetworkConfigSchema = z
  .object({
    peeredNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to WorkerPool.project_id on the default network. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number, such as `12345`, and {network} is the name of a VPC network in the project.',
      }),
  })
  .openapi({
    description: 'Network describes the network configuration for a `WorkerPool`.',
    required: [],
  })
  .openapi('NetworkConfig')

const WorkerConfigSchema = z
  .object({
    diskSizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size.',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool.',
      }),
  })
  .openapi({
    description:
      'WorkerConfig defines the configuration to be used for a creating workers in the pool.',
    required: [],
  })
  .openapi('WorkerConfig')

const WorkerPoolSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the request to create the `WorkerPool` was received.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the request to delete the `WorkerPool` was received.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.',
        readOnly: true,
      }),
    networkConfig: NetworkConfigSchema.exactOptional().openapi({
      description: 'Network configuration for the `WorkerPool`.',
    }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'RUNNING', 'DELETING', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'Output only. WorkerPool state.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the request to update the `WorkerPool` was received.',
        readOnly: true,
      }),
    workerConfig: WorkerConfigSchema.exactOptional().openapi({
      description: 'Worker configuration for the `WorkerPool`.',
    }),
  })
  .openapi({
    description:
      'Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.',
    required: [],
  })
  .openapi('WorkerPool')

const ListWorkerPoolsResponseSchema = z
  .object({
    workerPools: z
      .array(WorkerPoolSchema)
      .exactOptional()
      .openapi({ description: '`WorkerPools` for the specified project.' }),
  })
  .openapi({ description: 'Response containing existing `WorkerPools`.', required: [] })
  .openapi('ListWorkerPoolsResponse')

const NotifierSecretRefSchema = z
  .object({
    secretRef: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`.',
      }),
  })
  .openapi({
    description:
      'NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec.',
    required: [],
  })
  .openapi('NotifierSecretRef')

const SlackDeliverySchema = z
  .object({
    webhookUri: NotifierSecretRefSchema.exactOptional().openapi({
      description:
        'The secret reference for the Slack webhook URI for sending messages to a channel.',
    }),
  })
  .openapi({
    description:
      'SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks.',
    required: [],
  })
  .openapi('SlackDelivery')

const SMTPDeliverySchema = z
  .object({
    fromAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender.',
      }),
    password: NotifierSecretRefSchema.exactOptional().openapi({
      description: "The SMTP sender's password.",
    }),
    port: z.string().exactOptional().openapi({ description: 'The SMTP port of the server.' }),
    recipientAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This is the list of addresses to which we send the email (i.e. in the `To:` of the email).',
      }),
    senderAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is the SMTP account/email that is used to send the message.' }),
    server: z.string().exactOptional().openapi({ description: 'The address of the SMTP server.' }),
  })
  .openapi({
    description: 'SMTPDelivery is the delivery configuration for an SMTP (email) notification.',
    required: [],
  })
  .openapi('SMTPDelivery')

const NotificationSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more.',
      }),
    httpDelivery: HTTPDeliverySchema.exactOptional().openapi({
      description: 'Configuration for HTTP delivery.',
    }),
    slackDelivery: SlackDeliverySchema.exactOptional().openapi({
      description: 'Configuration for Slack delivery.',
    }),
    smtpDelivery: SMTPDeliverySchema.exactOptional().openapi({
      description: 'Configuration for SMTP (email) delivery.',
    }),
    structDelivery: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Escape hatch for users to supply custom delivery configs.' }),
  })
  .openapi({
    description:
      'Notification is the container which holds the data that is relevant to this particular notification.',
    required: [],
  })
  .openapi('Notification')

const NotifierMetadataSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier".',
      }),
    notifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34".',
      }),
  })
  .openapi({
    description:
      'NotifierMetadata contains the data which can be used to reference or describe this notifier.',
    required: [],
  })
  .openapi('NotifierMetadata')

const NotifierSecretSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name is the local name of the secret, such as the verbatim string "my-smtp-password".',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest".',
      }),
  })
  .openapi({
    description:
      'NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path.',
    required: [],
  })
  .openapi('NotifierSecret')

const NotifierSpecSchema = z
  .object({
    notification: NotificationSchema.exactOptional().openapi({
      description: 'The configuration of this particular notifier.',
    }),
    secrets: z
      .array(NotifierSecretSchema)
      .exactOptional()
      .openapi({
        description: 'Configurations for secret resources used by this particular notifier.',
      }),
  })
  .openapi({
    description: 'NotifierSpec is the configuration container for notifications.',
    required: [],
  })
  .openapi('NotifierSpec')

const NotifierConfigSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API version of this configuration format.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of notifier to use (e.g. SMTPNotifier).' }),
    metadata: NotifierMetadataSchema.exactOptional().openapi({
      description: 'Metadata for referring to/handling/deploying this notifier.',
    }),
    spec: NotifierSpecSchema.exactOptional().openapi({
      description: 'The actual configuration for this notifier.',
    }),
  })
  .openapi({ description: 'NotifierConfig is the top-level configuration message.', required: [] })
  .openapi('NotifierConfig')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const ProcessAppManifestCallbackOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    githubEnterpriseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `ProcessAppManifestCallback` operation.', required: [] })
  .openapi('ProcessAppManifestCallbackOperationMetadata')

const RunWorkflowCustomOperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    pipelineRunId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. ID of the pipeline run created by RunWorkflow.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Represents the custom metadata of the RunWorkflow long-running operation.',
    required: [],
  })
  .openapi('RunWorkflowCustomOperationMetadata')

const UpdateBitbucketServerConfigOperationMetadataSchema = z
  .object({
    bitbucketServerConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the BitbucketServerConfig to be updated. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`.',
      }),
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
  })
  .openapi({ description: 'Metadata for `UpdateBitbucketServerConfig` operation.', required: [] })
  .openapi('UpdateBitbucketServerConfigOperationMetadata')

const UpdateGitHubEnterpriseConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    githubEnterpriseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitHubEnterprise to be updated. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `UpdateGitHubEnterpriseConfig` operation.', required: [] })
  .openapi('UpdateGitHubEnterpriseConfigOperationMetadata')

const UpdateGitLabConfigOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    gitlabConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`.',
      }),
  })
  .openapi({ description: 'Metadata for `UpdateGitLabConfig` operation.', required: [] })
  .openapi('UpdateGitLabConfigOperationMetadata')

const UpdateWorkerPoolOperationMetadataSchema = z
  .object({
    completeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was completed.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the operation was created.' }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the `WorkerPool` being updated. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`.',
      }),
  })
  .openapi({ description: 'Metadata for the `UpdateWorkerPool` operation.', required: [] })
  .openapi('UpdateWorkerPoolOperationMetadata')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1alpha2NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha2/{name}',
  tags: ['projects'],
  description: 'Returns details of a `WorkerPool`.',
  operationId: 'cloudbuild.projects.workerPools.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `WorkerPool` to retrieve. Format: projects/{project}/workerPools/{workerPool}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkerPoolSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1alpha2NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha2/{name}',
  tags: ['projects'],
  description: 'Deletes a `WorkerPool`.',
  operationId: 'cloudbuild.projects.workerPools.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `WorkerPool` to delete. Format: projects/{project}/workerPools/{workerPool}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1alpha2NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha2/{name}',
  tags: ['projects'],
  description: 'Updates a `WorkerPool`.',
  operationId: 'cloudbuild.projects.workerPools.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A mask specifying which fields in `WorkerPool` should be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkerPoolSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkerPoolSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha2NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1alpha2/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'cloudbuild.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha2ParentWorkerPoolsRoute = createRoute({
  method: 'get',
  path: '/v1alpha2/{parent}/workerPools',
  tags: ['projects'],
  description: 'Lists `WorkerPool`s by project.',
  operationId: 'cloudbuild.projects.workerPools.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent, which owns this collection of `WorkerPools`. Format: projects/{project}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkerPoolsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha2ParentWorkerPoolsRoute = createRoute({
  method: 'post',
  path: '/v1alpha2/{parent}/workerPools',
  tags: ['projects'],
  description: 'Creates a `WorkerPool` to run the builds, and returns the new worker pool.',
  operationId: 'cloudbuild.projects.workerPools.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      workerPoolId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.',
            in: 'query',
            name: 'workerPoolId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource where this book will be created. Format: projects/{project}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkerPoolSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkerPoolSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
