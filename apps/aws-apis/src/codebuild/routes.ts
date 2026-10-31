import { createRoute, z } from '@hono/zod-openapi'

const LogsConfigStatusTypeSchema = z.enum(['ENABLED', 'DISABLED']).openapi('LogsConfigStatusType')

const StringSchema = z.string().openapi('String')

const CloudWatchLogsConfigSchema = z
  .object({
    status: LogsConfigStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the logs in CloudWatch Logs for a build project. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: CloudWatch Logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: CloudWatch Logs are not enabled for this build project.</p> </li> </ul>',
        }),
    ),
    groupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The group name of the logs in CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with Log Groups and Log Streams</a>. ',
        }),
    ).exactOptional(),
    streamName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The prefix of the stream name of the CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with Log Groups and Log Streams</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['status'],
    description: ' Information about CloudWatch Logs for a build project. ',
  })
  .openapi('CloudWatchLogsConfig')

const WrapperBooleanSchema = z.boolean().openapi('WrapperBoolean')

const BucketOwnerAccessSchema = z
  .enum(['NONE', 'READ_ONLY', 'FULL'])
  .openapi({
    description:
      '<p>Specifies the bucket owner\'s access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket\'s policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl>',
  })
  .openapi('BucketOwnerAccess')

const S3LogsConfigSchema = z
  .object({
    status: LogsConfigStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the S3 build logs. Valid values are:</p> <ul> <li> <p> <code>ENABLED</code>: S3 build logs are enabled for this build project.</p> </li> <li> <p> <code>DISABLED</code>: S3 build logs are not enabled for this build project.</p> </li> </ul>',
        }),
    ),
    location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then acceptable formats are <code>my-bucket/build-log</code> or <code>arn:aws:s3:::my-bucket/build-log</code>. ',
        }),
    ).exactOptional(),
    encryptionDisabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted. ',
        }),
    ).exactOptional(),
    bucketOwnerAccess: BucketOwnerAccessSchema.exactOptional(),
  })
  .openapi({
    required: ['status'],
    description: ' Information about S3 logs for a build project. ',
  })
  .openapi('S3LogsConfig')

type LogsConfigType = {
  cloudWatchLogs?: z.infer<typeof CloudWatchLogsConfigSchema> & { [key: string]: unknown }
  s3Logs?: z.infer<typeof S3LogsConfigSchema> & { [key: string]: unknown }
}

const ReportExportConfigTypeSchema = z.enum(['S3', 'NO_EXPORT']).openapi('ReportExportConfigType')

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

const ReportPackagingTypeSchema = z.enum(['ZIP', 'NONE']).openapi('ReportPackagingType')

const S3ReportExportConfigSchema = z
  .object({
    bucket: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the S3 bucket where the raw data of a report are exported. ',
        }),
    ).exactOptional(),
    bucketOwner: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket that is owned by an account other than the account running the build.',
        }),
    ).exactOptional(),
    path: StringSchema.and(
      z.any().openapi({ description: " The path to the exported report's raw data results. " }),
    ).exactOptional(),
    packaging: ReportPackagingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of build output artifact to create. Valid values include: </p> <ul> <li> <p> <code>NONE</code>: CodeBuild creates the raw data in the output bucket. This is the default if packaging is not specified. </p> </li> <li> <p> <code>ZIP</code>: CodeBuild creates a ZIP file with the raw data in the output bucket. </p> </li> </ul>',
        }),
    ).exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z.any().openapi({ description: " The encryption key for the report's encrypted raw data. " }),
    ).exactOptional(),
    encryptionDisabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' A boolean value that specifies if the results of a report are encrypted. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about the S3 bucket where the raw data of a report are exported. ',
    required: [],
  })
  .openapi('S3ReportExportConfig')

type ReportExportConfigType = {
  exportConfigType?: z.infer<typeof ReportExportConfigTypeSchema> & { [key: string]: unknown }
  s3Destination?: z.infer<typeof S3ReportExportConfigSchema> & { [key: string]: unknown }
}

const BuildIdsSchema = z.array(NonEmptyStringSchema).min(1).max(100).openapi('BuildIds')

const BuildNotDeletedSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the build that could not be successfully deleted.' }),
    ).exactOptional(),
    statusCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the build that could not be successfully deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a build that could not be successfully deleted.',
    required: [],
  })
  .openapi('BuildNotDeleted')

const BuildsNotDeletedSchema = z.array(BuildNotDeletedSchema).openapi('BuildsNotDeleted')

const BatchDeleteBuildsOutputSchema = z
  .object({
    buildsDeleted: BuildIdsSchema.and(
      z.any().openapi({ description: 'The IDs of the builds that were successfully deleted.' }),
    ).exactOptional(),
    buildsNotDeleted: BuildsNotDeletedSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about any builds that could not be successfully deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteBuildsOutput')

const BatchDeleteBuildsInputSchema = z
  .object({
    ids: BuildIdsSchema.and(z.any().openapi({ description: 'The IDs of the builds to delete.' })),
  })
  .openapi({ required: ['ids'], title: 'BatchDeleteBuildsInput' })
  .openapi('BatchDeleteBuildsInput')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const StatusTypeSchema = z
  .enum(['SUCCEEDED', 'FAILED', 'FAULT', 'TIMED_OUT', 'IN_PROGRESS', 'STOPPED'])
  .openapi('StatusType')

const BuildBatchPhaseTypeSchema = z
  .enum([
    'SUBMITTED',
    'DOWNLOAD_BATCHSPEC',
    'IN_PROGRESS',
    'COMBINE_ARTIFACTS',
    'SUCCEEDED',
    'FAILED',
    'STOPPED',
  ])
  .openapi('BuildBatchPhaseType')

const WrapperLongSchema = z.int().openapi('WrapperLong')

const PhaseContextSchema = z
  .object({
    statusCode: StringSchema.and(
      z.any().openapi({ description: 'The status code for the context of the build phase.' }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An explanation of the build phase's context. This might include a command ID and an exit code.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Additional information about a build phase that has an error. You can use this information for troubleshooting.',
    required: [],
  })
  .openapi('PhaseContext')

const PhaseContextsSchema = z.array(PhaseContextSchema).openapi('PhaseContexts')

const BuildBatchPhaseSchema = z
  .object({
    phaseType: BuildBatchPhaseTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the batch build phase. Valid values include:</p> <dl> <dt>COMBINE_ARTIFACTS</dt> <dd> <p>Build output artifacts are being combined and uploaded to the output location.</p> </dd> <dt>DOWNLOAD_BATCHSPEC</dt> <dd> <p>The batch build specification is being downloaded.</p> </dd> <dt>FAILED</dt> <dd> <p>One or more of the builds failed.</p> </dd> <dt>IN_PROGRESS</dt> <dd> <p>The batch build is in progress.</p> </dd> <dt>STOPPED</dt> <dd> <p>The batch build was stopped.</p> </dd> <dt>SUBMITTED</dt> <dd> <p>The btach build has been submitted.</p> </dd> <dt>SUCCEEDED</dt> <dd> <p>The batch build succeeded.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    phaseStatus: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the batch build phase. Valid values include:</p> <dl> <dt>FAILED</dt> <dd> <p>The build phase failed.</p> </dd> <dt>FAULT</dt> <dd> <p>The build phase faulted.</p> </dd> <dt>IN_PROGRESS</dt> <dd> <p>The build phase is still in progress.</p> </dd> <dt>STOPPED</dt> <dd> <p>The build phase stopped.</p> </dd> <dt>SUCCEEDED</dt> <dd> <p>The build phase succeeded.</p> </dd> <dt>TIMED_OUT</dt> <dd> <p>The build phase timed out.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'When the batch build phase started, expressed in Unix time format.',
        }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'When the batch build phase ended, expressed in Unix time format.',
        }),
    ).exactOptional(),
    durationInSeconds: WrapperLongSchema.and(
      z
        .any()
        .openapi({
          description:
            "How long, in seconds, between the starting and ending times of the batch build's phase.",
        }),
    ).exactOptional(),
    contexts: PhaseContextsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the batch build phase. Especially to help troubleshoot a failed batch build.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a stage for a batch build.', required: [] })
  .openapi('BuildBatchPhase')

const BuildBatchPhasesSchema = z.array(BuildBatchPhaseSchema).openapi('BuildBatchPhases')

const SourceTypeSchema = z
  .enum([
    'CODECOMMIT',
    'CODEPIPELINE',
    'GITHUB',
    'S3',
    'BITBUCKET',
    'GITHUB_ENTERPRISE',
    'NO_SOURCE',
  ])
  .openapi('SourceType')

const GitCloneDepthSchema = z.int().min(0).openapi('GitCloneDepth')

const GitSubmodulesConfigSchema = z
  .object({
    fetchSubmodules: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Set to true to fetch Git submodules for your CodeBuild build project. ',
        }),
    ),
  })
  .openapi({
    required: ['fetchSubmodules'],
    description:
      ' Information about the Git submodules configuration for an CodeBuild build project. ',
  })
  .openapi('GitSubmodulesConfig')

const SourceAuthTypeSchema = z.literal('OAUTH').openapi('SourceAuthType')

const SourceAuthSchema = z
  .object({
    type: SourceAuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p> This data type is deprecated and is no longer accurate or used. </p> </note> <p>The authorization type to use. The only valid value is <code>OAUTH</code>, which represents the OAuth authorization type.</p>',
        }),
    ),
    resource: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource value that applies to the specified authorization type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      "<p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>",
  })
  .openapi('SourceAuth')

const BuildStatusConfigSchema = z
  .object({
    context: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.</p> <dl> <dt>Bitbucket</dt> <dd> <p>This parameter is used for the <code>name</code> parameter in the Bitbucket commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p> </dd> <dt>GitHub/GitHub Enterprise Server</dt> <dd> <p>This parameter is used for the <code>context</code> parameter in the GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    targetUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.</p> <dl> <dt>Bitbucket</dt> <dd> <p>This parameter is used for the <code>url</code> parameter in the Bitbucket commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p> </dd> <dt>GitHub/GitHub Enterprise Server</dt> <dd> <p>This parameter is used for the <code>target_url</code> parameter in the GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information that defines how the CodeBuild build project reports the build status to the source provider. ',
    required: [],
  })
  .openapi('BuildStatusConfig')

const ProjectSourceSchema = z
  .object({
    type: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of repository that contains the source code to be built. Valid values include:</p> <ul> <li> <p> <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p> </li> <li> <p> <code>CODECOMMIT</code>: The source code is in an CodeCommit repository.</p> </li> <li> <p> <code>CODEPIPELINE</code>: The source code settings are specified in the source action of a pipeline in CodePipeline.</p> </li> <li> <p> <code>GITHUB</code>: The source code is in a GitHub or GitHub Enterprise Cloud repository.</p> </li> <li> <p> <code>GITHUB_ENTERPRISE</code>: The source code is in a GitHub Enterprise Server repository.</p> </li> <li> <p> <code>NO_SOURCE</code>: The project does not have input source code.</p> </li> <li> <p> <code>S3</code>: The source code is in an Amazon S3 bucket.</p> </li> </ul>',
        }),
    ),
    location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about the location of the source code to be built. Valid values include:</p> <ul> <li> <p>For source code settings that are specified in the source action of a pipeline in CodePipeline, <code>location</code> should not be specified. If it is specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source action instead of this value.</p> </li> <li> <p>For source code in an CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the buildspec file (for example, <code>https://git-codecommit.&lt;region-ID&gt;.amazonaws.com/v1/repos/&lt;repo-name&gt;</code>).</p> </li> <li> <p>For source code in an Amazon S3 input bucket, one of the following. </p> <ul> <li> <p>The path to the ZIP file that contains the source code (for example, <code>&lt;bucket-name&gt;/&lt;path&gt;/&lt;object-name&gt;.zip</code>). </p> </li> <li> <p>The path to the folder that contains the source code (for example, <code>&lt;bucket-name&gt;/&lt;path-to-source-code&gt;/&lt;folder&gt;/</code>). </p> </li> </ul> </li> <li> <p>For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the buildspec file. You must connect your Amazon Web Services account to your GitHub account. Use the CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with GitHub, on the GitHub <b>Authorize application</b> page, for <b>Organization access</b>, choose <b>Request access</b> next to each repository you want to allow CodeBuild to have access to, and then choose <b>Authorize application</b>. (After you have connected to your GitHub account, you do not need to finish creating the build project. You can leave the CodeBuild console.) To instruct CodeBuild to use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> <li> <p>For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the buildspec file. You must connect your Amazon Web Services account to your Bitbucket account. Use the CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with Bitbucket, on the Bitbucket <b>Confirm access to your account</b> page, choose <b>Grant access</b>. (After you have connected to your Bitbucket account, you do not need to finish creating the build project. You can leave the CodeBuild console.) To instruct CodeBuild to use this connection, in the <code>source</code> object, set the <code>auth</code> object's <code>type</code> value to <code>OAUTH</code>.</p> </li> </ul> <p> If you specify <code>CODEPIPELINE</code> for the <code>Type</code> property, don't specify this property. For all of the other types, you must specify <code>Location</code>. </p>",
        }),
    ).exactOptional(),
    gitCloneDepth: GitCloneDepthSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the Git clone depth for the build project.' }),
    ).exactOptional(),
    gitSubmodulesConfig: GitSubmodulesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the Git submodules configuration for the build project. ',
        }),
    ).exactOptional(),
    buildspec: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The buildspec file declaration to use for the builds in this build project.</p> <p> If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>',
        }),
    ).exactOptional(),
    auth: SourceAuthSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>",
        }),
    ).exactOptional(),
    reportBuildStatus: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Set to true to report the status of a build\'s start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, or Bitbucket. If this is set and you use a different source provider, an <code>invalidInputException</code> is thrown. </p> <p>To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p> <p>The status of a build triggered by a webhook is always reported to your source provider. </p> <p>If your project\'s builds are triggered by a webhook, you must push a new commit to the repo for a change to this property to take effect.</p>',
        }),
    ).exactOptional(),
    buildStatusConfig: BuildStatusConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or <code>BITBUCKET</code>.',
        }),
    ).exactOptional(),
    insecureSsl: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enable this flag to ignore SSL warnings while connecting to the project source code.',
        }),
    ).exactOptional(),
    sourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'Information about the build input source code for the build project.',
  })
  .openapi('ProjectSource')

const ProjectSourcesSchema = z.array(ProjectSourceSchema).min(0).max(12).openapi('ProjectSources')

const ProjectSourceVersionSchema = z
  .object({
    sourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for a source in the build project. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length. ',
        }),
    ),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The source version for the corresponding source identifier. If specified, must be one of:</p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ),
  })
  .openapi({
    required: ['sourceIdentifier', 'sourceVersion'],
    description: ' A source identifier and its corresponding version. ',
  })
  .openapi('ProjectSourceVersion')

const ProjectSecondarySourceVersionsSchema = z
  .array(ProjectSourceVersionSchema)
  .min(0)
  .max(12)
  .openapi('ProjectSecondarySourceVersions')

const BuildArtifactsSchema = z
  .object({
    location: StringSchema.and(
      z.any().openapi({ description: 'Information about the location of the build artifacts.' }),
    ).exactOptional(),
    sha256sum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The SHA-256 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>",
        }),
    ).exactOptional(),
    md5sum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The MD5 hash of the build artifact.</p> <p>You can use this hash along with a checksum tool to confirm file integrity and authenticity.</p> <note> <p>This value is available only if the build project's <code>packaging</code> value is set to <code>ZIP</code>.</p> </note>",
        }),
    ).exactOptional(),
    overrideArtifactName: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. ',
        }),
    ).exactOptional(),
    encryptionDisabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information that tells you if encryption for build artifacts is disabled. ',
        }),
    ).exactOptional(),
    artifactIdentifier: StringSchema.and(
      z.any().openapi({ description: ' An identifier for this artifact definition. ' }),
    ).exactOptional(),
    bucketOwnerAccess: BucketOwnerAccessSchema.exactOptional(),
  })
  .openapi({ description: 'Information about build output artifacts.', required: [] })
  .openapi('BuildArtifacts')

const BuildArtifactsListSchema = z
  .array(BuildArtifactsSchema)
  .min(0)
  .max(12)
  .openapi('BuildArtifactsList')

const CacheTypeSchema = z.enum(['NO_CACHE', 'S3', 'LOCAL']).openapi('CacheType')

const CacheModeSchema = z
  .enum(['LOCAL_DOCKER_LAYER_CACHE', 'LOCAL_SOURCE_CACHE', 'LOCAL_CUSTOM_CACHE'])
  .openapi('CacheMode')

const ProjectCacheModesSchema = z.array(CacheModeSchema).openapi('ProjectCacheModes')

const ProjectCacheSchema = z
  .object({
    type: CacheTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of cache used by the build project. Valid values include:</p> <ul> <li> <p> <code>NO_CACHE</code>: The build project does not use any cache.</p> </li> <li> <p> <code>S3</code>: The build project reads and writes from and to S3.</p> </li> <li> <p> <code>LOCAL</code>: The build project stores a cache locally on a build host that is only available to that build host.</p> </li> </ul>',
        }),
    ),
    location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the cache location: </p> <ul> <li> <p> <code>NO_CACHE</code> or <code>LOCAL</code>: This value is ignored.</p> </li> <li> <p> <code>S3</code>: This is the S3 bucket name/prefix.</p> </li> </ul>',
        }),
    ).exactOptional(),
    modes: ProjectCacheModesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings that specify the local cache modes. You can use one or more local cache modes at the same time. This is only used for <code>LOCAL</code> cache types.</p> <p>Possible values are:</p> <dl> <dt>LOCAL_SOURCE_CACHE</dt> <dd> <p>Caches Git metadata for primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits. This mode is a good choice for projects with a clean working directory and a source that is a large Git repository. If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the option is ignored. </p> </dd> <dt>LOCAL_DOCKER_LAYER_CACHE</dt> <dd> <p>Caches existing Docker layers. This mode is a good choice for projects that build or pull large Docker images. It can prevent the performance issues caused by pulling large Docker images down from the network. </p> <note> <ul> <li> <p>You can use a Docker layer cache in the Linux environment only. </p> </li> <li> <p>The <code>privileged</code> flag must be set so that your project has the required Docker permissions. </p> </li> <li> <p>You should consider the security implications before you use a Docker layer cache. </p> </li> </ul> </note> </dd> <dt>LOCAL_CUSTOM_CACHE</dt> <dd> <p>Caches directories you specify in the buildspec file. This mode is a good choice if your build scenario is not suited to one of the other three local cache modes. If you use a custom cache: </p> <ul> <li> <p>Only directories can be specified for caching. You cannot specify individual files. </p> </li> <li> <p>Symlinks are used to reference cached directories. </p> </li> <li> <p>Cached directories are linked to your build before it downloads its project sources. Cached items are overridden if a source item has the same name. Directories are specified using cache paths in the buildspec file. </p> </li> </ul> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'Information about the cache for the build project.',
  })
  .openapi('ProjectCache')

const EnvironmentTypeSchema = z
  .enum([
    'WINDOWS_CONTAINER',
    'LINUX_CONTAINER',
    'LINUX_GPU_CONTAINER',
    'ARM_CONTAINER',
    'WINDOWS_SERVER_2019_CONTAINER',
  ])
  .openapi('EnvironmentType')

const ComputeTypeSchema = z
  .enum([
    'BUILD_GENERAL1_SMALL',
    'BUILD_GENERAL1_MEDIUM',
    'BUILD_GENERAL1_LARGE',
    'BUILD_GENERAL1_2XLARGE',
  ])
  .openapi('ComputeType')

const EnvironmentVariableTypeSchema = z
  .enum(['PLAINTEXT', 'PARAMETER_STORE', 'SECRETS_MANAGER'])
  .openapi('EnvironmentVariableType')

const EnvironmentVariableSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name or key of the environment variable.' }),
    ),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the environment variable.</p> <important> <p>We strongly discourage the use of <code>PLAINTEXT</code> environment variables to store sensitive values, especially Amazon Web Services secret key IDs and secret access keys. <code>PLAINTEXT</code> environment variables can be displayed in plain text using the CodeBuild console and the CLI. For sensitive values, we recommend you use an environment variable of type <code>PARAMETER_STORE</code> or <code>SECRETS_MANAGER</code>. </p> </important>',
        }),
    ),
    type: EnvironmentVariableTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of environment variable. Valid values include:</p> <ul> <li> <p> <code>PARAMETER_STORE</code>: An environment variable stored in Systems Manager Parameter Store. To learn how to specify a parameter store environment variable, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.parameter-store">env/parameter-store</a> in the <i>CodeBuild User Guide</i>.</p> </li> <li> <p> <code>PLAINTEXT</code>: An environment variable in plain text format. This is the default value.</p> </li> <li> <p> <code>SECRETS_MANAGER</code>: An environment variable stored in Secrets Manager. To learn how to specify a secrets manager environment variable, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.secrets-manager">env/secrets-manager</a> in the <i>CodeBuild User Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'value'],
    description: 'Information about an environment variable for a build project or a build.',
  })
  .openapi('EnvironmentVariable')

const EnvironmentVariablesSchema = z
  .array(EnvironmentVariableSchema)
  .openapi('EnvironmentVariables')

const CredentialProviderTypeSchema = z.literal('SECRETS_MANAGER').openapi('CredentialProviderType')

const RegistryCredentialSchema = z
  .object({
    credential: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. </p> <note> <p> The <code>credential</code> can use the name of the credentials only if they exist in your current Amazon Web Services Region. </p> </note>',
        }),
    ),
    credentialProvider: CredentialProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for Secrets Manager. ',
        }),
    ),
  })
  .openapi({
    required: ['credential', 'credentialProvider'],
    description:
      '<p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p>',
  })
  .openapi('RegistryCredential')

const ImagePullCredentialsTypeSchema = z
  .enum(['CODEBUILD', 'SERVICE_ROLE'])
  .openapi('ImagePullCredentialsType')

const ProjectEnvironmentSchema = z
  .object({
    type: EnvironmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of build environment to use for related builds.</p> <ul> <li> <p>The environment type <code>ARM_CONTAINER</code> is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Sydney), and EU (Frankfurt).</p> </li> <li> <p>The environment type <code>LINUX_CONTAINER</code> with compute type <code>build.general1.2xlarge</code> is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), EU (Ireland), EU (London), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia).</p> </li> <li> <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), EU (Ireland), EU (London), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney) , China (Beijing), and China (Ningxia).</p> </li> </ul> <ul> <li> <p>The environment types <code>WINDOWS_CONTAINER</code> and <code>WINDOWS_SERVER_2019_CONTAINER</code> are available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and EU (Ireland).</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild user guide</i>.</p>',
        }),
    ),
    image: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The image tag or image digest that identifies the Docker image to use for this build project. Use the following formats:</p> <ul> <li> <p>For an image tag: <code>&lt;registry&gt;/&lt;repository&gt;:&lt;tag&gt;</code>. For example, in the Docker repository that CodeBuild uses to manage its Docker images, this would be <code>aws/codebuild/standard:4.0</code>. </p> </li> <li> <p>For an image digest: <code>&lt;registry&gt;/&lt;repository&gt;@&lt;digest&gt;</code>. For example, to specify an image with the digest "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use <code>&lt;registry&gt;/&lt;repository&gt;@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html">Docker images provided by CodeBuild</a> in the <i>CodeBuild user guide</i>.</p>',
        }),
    ),
    computeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the compute resources the build project uses. Available values include:</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL</code>: Use up to 3 GB memory and 2 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 7 GB memory and 4 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GB memory and 8 vCPUs for builds, depending on your environment type.</p> </li> <li> <p> <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 145 GB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.</p> </li> </ul> <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p> <ul> <li> <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 15 GB memory and 8 vCPUs for builds. </p> </li> <li> <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255 GB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p> </li> <li> <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GB memory and 8 vCPUs on ARM-based processors for builds.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build Environment Compute Types</a> in the <i>CodeBuild User Guide.</i> </p>',
        }),
    ),
    environmentVariables: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of environment variables to make available to builds for this build project.',
        }),
    ).exactOptional(),
    privilegedMode: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables running the Docker daemon inside a Docker container. Set to true only if the build project is used to build Docker images. Otherwise, a build that attempts to interact with the Docker daemon fails. The default setting is <code>false</code>.</p> <p>You can initialize the Docker daemon during the install phase of your build by adding one of the following sets of commands to the install phase of your buildspec file:</p> <p>If the operating system\'s base image is Ubuntu Linux:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp;</code> </p> <p> <code>- timeout 15 sh -c "until docker info; do echo .; sleep 1; done"</code> </p> <p>If the operating system\'s base image is Alpine Linux and the previous command does not work, add the <code>-t</code> argument to <code>timeout</code>:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp;</code> </p> <p> <code>- timeout -t 15 sh -c "until docker info; do echo .; sleep 1; done"</code> </p>',
        }),
    ).exactOptional(),
    certificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded certificate for the build project. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/create-project-cli.html#cli.environment.certificate">certificate</a> in the <i>CodeBuild User Guide</i>.',
        }),
    ).exactOptional(),
    registryCredential: RegistryCredentialSchema.and(
      z.any().openapi({ description: ' The credentials for access to a private registry.' }),
    ).exactOptional(),
    imagePullCredentialsType: ImagePullCredentialsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The type of credentials CodeBuild uses to pull images in your build. There are two valid values: </p> <ul> <li> <p> <code>CODEBUILD</code> specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild service principal. </p> </li> <li> <p> <code>SERVICE_ROLE</code> specifies that CodeBuild uses your build project's service role. </p> </li> </ul> <p> When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild curated image, you must use CODEBUILD credentials. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'image', 'computeType'],
    description: 'Information about the build environment of the build project.',
  })
  .openapi('ProjectEnvironment')

const LogsConfigSchema: z.ZodType<LogsConfigType> = z
  .lazy(() =>
    z
      .object({
        cloudWatchLogs: CloudWatchLogsConfigSchema.and(
          z
            .any()
            .openapi({
              description:
                ' Information about CloudWatch Logs for a build project. CloudWatch Logs are enabled by default. ',
            }),
        ).exactOptional(),
        s3Logs: S3LogsConfigSchema.and(
          z
            .any()
            .openapi({
              description:
                ' Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          ' Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. ',
        required: [],
      }),
  )
  .openapi('LogsConfig')

const WrapperIntSchema = z.int().openapi('WrapperInt')

const BooleanSchema = z.boolean().openapi('Boolean')

const SubnetsSchema = z.array(NonEmptyStringSchema).max(16).openapi('Subnets')

const SecurityGroupIdsSchema = z.array(NonEmptyStringSchema).max(5).openapi('SecurityGroupIds')

const VpcConfigSchema = z
  .object({
    vpcId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon VPC.' }),
    ).exactOptional(),
    subnets: SubnetsSchema.and(
      z.any().openapi({ description: 'A list of one or more subnet IDs in your Amazon VPC.' }),
    ).exactOptional(),
    securityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of one or more security groups IDs in your Amazon VPC.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the VPC configuration that CodeBuild accesses.',
    required: [],
  })
  .openapi('VpcConfig')

const FileSystemTypeSchema = z.literal('EFS').openapi('FileSystemType')

const ProjectFileSystemLocationSchema = z
  .object({
    type: FileSystemTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of the file system. The one supported type is <code>EFS</code>. ',
        }),
    ).exactOptional(),
    location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that specifies the location of the file system created by Amazon EFS. Its format is <code>efs-dns-name:/directory-path</code>. You can find the DNS name of file system when you view it in the Amazon EFS console. The directory path is a path to a directory in the file system that CodeBuild mounts. For example, if the DNS name of a file system is <code>fs-abcd1234.efs.us-west-2.amazonaws.com</code>, and its mount directory is <code>my-efs-mount-directory</code>, then the <code>location</code> is <code>fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory</code>. </p> <p>The directory path in the format <code>efs-dns-name:/directory-path</code> is optional. If you do not specify a directory path, the location is only the DNS name and CodeBuild mounts the entire file system. </p>',
        }),
    ).exactOptional(),
    mountPoint: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The location in the container where you mount the file system. ',
        }),
    ).exactOptional(),
    identifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by appending the <code>identifier</code> in all capital letters to <code>CODEBUILD_</code>. For example, if you specify <code>my_efs</code> for <code>identifier</code>, a new environment variable is create named <code>CODEBUILD_MY_EFS</code>. </p> <p> The <code>identifier</code> is used to mount your file system. </p>',
        }),
    ).exactOptional(),
    mountOptions: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The mount options for a file system created by Amazon EFS. The default mount options used by CodeBuild are <code>nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2</code>. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-nfs-mount-settings.html">Recommended NFS Mount Options</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a> ',
    required: [],
  })
  .openapi('ProjectFileSystemLocation')

const ProjectFileSystemLocationsSchema = z
  .array(ProjectFileSystemLocationSchema)
  .openapi('ProjectFileSystemLocations')

const ComputeTypesAllowedSchema = z.array(NonEmptyStringSchema).openapi('ComputeTypesAllowed')

const BatchRestrictionsSchema = z
  .object({
    maximumBuildsAllowed: WrapperIntSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of builds allowed.' }),
    ).exactOptional(),
    computeTypesAllowed: ComputeTypesAllowedSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that specify the compute types that are allowed for the batch build. See <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild User Guide</i> for these values. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies restrictions for the batch build.', required: [] })
  .openapi('BatchRestrictions')

const BatchReportModeTypeSchema = z
  .enum(['REPORT_INDIVIDUAL_BUILDS', 'REPORT_AGGREGATED_BATCH'])
  .openapi('BatchReportModeType')

const ProjectBuildBatchConfigSchema = z
  .object({
    serviceRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the service role ARN for the batch build project.' }),
    ).exactOptional(),
    combineArtifacts: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if the build artifacts for the batch build should be combined into a single artifact location.',
        }),
    ).exactOptional(),
    restrictions: BatchRestrictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BatchRestrictions</code> object that specifies the restrictions for the batch build.',
        }),
    ).exactOptional(),
    timeoutInMins: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum amount of time, in minutes, that the batch build must be completed in.',
        }),
    ).exactOptional(),
    batchReportMode: BatchReportModeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how build status reports are sent to the source provider for the batch build. This property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is configured to report build statuses to the source provider.</p> <dl> <dt>REPORT_AGGREGATED_BATCH</dt> <dd> <p>(Default) Aggregate all of the build statuses into a single status report.</p> </dd> <dt>REPORT_INDIVIDUAL_BUILDS</dt> <dd> <p>Send a separate status report for each individual build.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains configuration information about a batch build project.',
    required: [],
  })
  .openapi('ProjectBuildBatchConfig')

const IdentifiersSchema = z.array(NonEmptyStringSchema).openapi('Identifiers')

const ArtifactsTypeSchema = z.enum(['CODEPIPELINE', 'S3', 'NO_ARTIFACTS']).openapi('ArtifactsType')

const ResolvedArtifactSchema = z
  .object({
    type: ArtifactsTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of artifact.' }),
    ).exactOptional(),
    location: StringSchema.and(
      z.any().openapi({ description: 'The location of the artifact.' }),
    ).exactOptional(),
    identifier: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the artifact.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.',
    required: [],
  })
  .openapi('ResolvedArtifact')

const ResolvedSecondaryArtifactsSchema = z
  .array(ResolvedArtifactSchema)
  .openapi('ResolvedSecondaryArtifacts')

const BuildSummarySchema = z
  .object({
    arn: StringSchema.and(z.any().openapi({ description: 'The batch build ARN.' })).exactOptional(),
    requestedOn: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'When the build was started, expressed in Unix time format.' }),
    ).exactOptional(),
    buildStatus: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the build group.</p> <dl> <dt>FAILED</dt> <dd> <p>The build group failed.</p> </dd> <dt>FAULT</dt> <dd> <p>The build group faulted.</p> </dd> <dt>IN_PROGRESS</dt> <dd> <p>The build group is still in progress.</p> </dd> <dt>STOPPED</dt> <dd> <p>The build group stopped.</p> </dd> <dt>SUCCEEDED</dt> <dd> <p>The build group succeeded.</p> </dd> <dt>TIMED_OUT</dt> <dd> <p>The build group timed out.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    primaryArtifact: ResolvedArtifactSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ResolvedArtifact</code> object that represents the primary build artifacts for the build group.',
        }),
    ).exactOptional(),
    secondaryArtifacts: ResolvedSecondaryArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ResolvedArtifact</code> objects that represents the secondary build artifacts for the build group.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains summary information about a batch build group.', required: [] })
  .openapi('BuildSummary')

const BuildSummariesSchema = z.array(BuildSummarySchema).openapi('BuildSummaries')

const BuildGroupSchema = z
  .object({
    identifier: StringSchema.and(
      z.any().openapi({ description: 'Contains the identifier of the build group.' }),
    ).exactOptional(),
    dependsOn: IdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that contain the identifiers of the build groups that this build group depends on.',
        }),
    ).exactOptional(),
    ignoreFailure: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies if failures in this build group can be ignored.' }),
    ).exactOptional(),
    currentBuildSummary: BuildSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildSummary</code> object that contains a summary of the current build group.',
        }),
    ).exactOptional(),
    priorBuildSummaryList: BuildSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildSummary</code> objects that contain summaries of previous build groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.',
    required: [],
  })
  .openapi('BuildGroup')

const BuildGroupsSchema = z.array(BuildGroupSchema).openapi('BuildGroups')

const BuildBatchSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the batch build.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the batch build.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the batch build started.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the batch build ended.' }),
    ).exactOptional(),
    currentPhase: StringSchema.and(
      z.any().openapi({ description: 'The current phase of the batch build.' }),
    ).exactOptional(),
    buildBatchStatus: StatusTypeSchema.and(
      z.any().openapi({ description: 'The status of the batch build.' }),
    ).exactOptional(),
    sourceVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the version of the source code to be built.' }),
    ).exactOptional(),
    resolvedSourceVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier of the resolved version of this batch build's source code.</p> <ul> <li> <p>For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.</p> </li> <li> <p>For CodePipeline, the source revision provided by CodePipeline.</p> </li> <li> <p>For Amazon S3, this does not apply.</p> </li> </ul>",
        }),
    ).exactOptional(),
    projectName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the batch build project.' }),
    ).exactOptional(),
    phases: BuildBatchPhasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildBatchPhase</code> objects the specify the phases of the batch build.',
        }),
    ).exactOptional(),
    source: ProjectSourceSchema.exactOptional(),
    secondarySources: ProjectSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectSource</code> objects that define the sources for the batch build.',
        }),
    ).exactOptional(),
    secondarySourceVersions: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of <code>ProjectSourceVersion</code> objects. Each <code>ProjectSourceVersion</code> must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul>",
        }),
    ).exactOptional(),
    artifacts: BuildArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildArtifacts</code> object the defines the build artifacts for this batch build.',
        }),
    ).exactOptional(),
    secondaryArtifacts: BuildArtifactsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildArtifacts</code> objects the define the build artifacts for this batch build.',
        }),
    ).exactOptional(),
    cache: ProjectCacheSchema.exactOptional(),
    environment: ProjectEnvironmentSchema.exactOptional(),
    serviceRole: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of a service role used for builds in the batch.' }),
    ).exactOptional(),
    logConfig: LogsConfigSchema.exactOptional(),
    buildTimeoutInMinutes: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum amount of time, in minutes, that the build in a batch must be completed in.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutes: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of time, in minutes, that the batch build is allowed to be queued before it times out.',
        }),
    ).exactOptional(),
    complete: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates if the batch build is complete.' }),
    ).exactOptional(),
    initiator: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The entity that started the batch build. Valid values include:</p> <ul> <li> <p>If CodePipeline started the build, the pipeline's name (for example, <code>codepipeline/my-demo-pipeline</code>).</p> </li> <li> <p>If an IAM user started the build, the user's name.</p> </li> <li> <p>If the Jenkins plugin for CodeBuild started the build, the string <code>CodeBuild-Jenkins-Plugin</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) to be used for encrypting the batch build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
        }),
    ).exactOptional(),
    buildBatchNumber: WrapperLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of the batch build. For each project, the <code>buildBatchNumber</code> of its first batch build is <code>1</code>. The <code>buildBatchNumber</code> of each subsequent batch build is incremented by <code>1</code>. If a batch build is deleted, the <code>buildBatchNumber</code> of other batch builds does not change.',
        }),
    ).exactOptional(),
    fileSystemLocations: ProjectFileSystemLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectFileSystemLocation</code> objects for the batch build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ',
        }),
    ).exactOptional(),
    buildBatchConfig: ProjectBuildBatchConfigSchema.exactOptional(),
    buildGroups: BuildGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildGroup</code> objects that define the build groups for the batch build.',
        }),
    ).exactOptional(),
    debugSessionEnabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if session debugging is enabled for this batch build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a batch build.', required: [] })
  .openapi('BuildBatch')

const BuildBatchesSchema = z.array(BuildBatchSchema).min(0).max(100).openapi('BuildBatches')

const BuildBatchIdsSchema = z.array(NonEmptyStringSchema).min(0).max(100).openapi('BuildBatchIds')

const BatchGetBuildBatchesOutputSchema = z
  .object({
    buildBatches: BuildBatchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildBatch</code> objects that represent the retrieved batch builds.',
        }),
    ).exactOptional(),
    buildBatchesNotFound: BuildBatchIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the identifiers of any batch builds that are not found.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetBuildBatchesOutput')

const BatchGetBuildBatchesInputSchema = z
  .object({
    ids: BuildBatchIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array that contains the batch build identifiers to retrieve.',
        }),
    ),
  })
  .openapi({ required: ['ids'], title: 'BatchGetBuildBatchesInput' })
  .openapi('BatchGetBuildBatchesInput')

const BuildPhaseTypeSchema = z
  .enum([
    'SUBMITTED',
    'QUEUED',
    'PROVISIONING',
    'DOWNLOAD_SOURCE',
    'INSTALL',
    'PRE_BUILD',
    'BUILD',
    'POST_BUILD',
    'UPLOAD_ARTIFACTS',
    'FINALIZING',
    'COMPLETED',
  ])
  .openapi('BuildPhaseType')

const BuildPhaseSchema = z
  .object({
    phaseType: BuildPhaseTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the build phase. Valid values include:</p> <dl> <dt>BUILD</dt> <dd> <p>Core build activities typically occur in this build phase.</p> </dd> <dt>COMPLETED</dt> <dd> <p>The build has been completed.</p> </dd> <dt>DOWNLOAD_SOURCE</dt> <dd> <p>Source code is being downloaded in this build phase.</p> </dd> <dt>FINALIZING</dt> <dd> <p>The build process is completing in this build phase.</p> </dd> <dt>INSTALL</dt> <dd> <p>Installation activities typically occur in this build phase.</p> </dd> <dt>POST_BUILD</dt> <dd> <p>Post-build activities typically occur in this build phase.</p> </dd> <dt>PRE_BUILD</dt> <dd> <p>Pre-build activities typically occur in this build phase.</p> </dd> <dt>PROVISIONING</dt> <dd> <p>The build environment is being set up.</p> </dd> <dt>QUEUED</dt> <dd> <p>The build has been submitted and is queued behind other submitted builds.</p> </dd> <dt>SUBMITTED</dt> <dd> <p>The build has been submitted.</p> </dd> <dt>UPLOAD_ARTIFACTS</dt> <dd> <p>Build output artifacts are being uploaded to the output location.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    phaseStatus: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the build phase. Valid values include:</p> <dl> <dt>FAILED</dt> <dd> <p>The build phase failed.</p> </dd> <dt>FAULT</dt> <dd> <p>The build phase faulted.</p> </dd> <dt>IN_PROGRESS</dt> <dd> <p>The build phase is still in progress.</p> </dd> <dt>STOPPED</dt> <dd> <p>The build phase stopped.</p> </dd> <dt>SUCCEEDED</dt> <dd> <p>The build phase succeeded.</p> </dd> <dt>TIMED_OUT</dt> <dd> <p>The build phase timed out.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'When the build phase started, expressed in Unix time format.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'When the build phase ended, expressed in Unix time format.' }),
    ).exactOptional(),
    durationInSeconds: WrapperLongSchema.and(
      z
        .any()
        .openapi({
          description:
            "How long, in seconds, between the starting and ending times of the build's phase.",
        }),
    ).exactOptional(),
    contexts: PhaseContextsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about a build phase, especially to help troubleshoot a failed build.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a stage for a build.', required: [] })
  .openapi('BuildPhase')

const BuildPhasesSchema = z.array(BuildPhaseSchema).openapi('BuildPhases')

const LogsLocationSchema = z
  .object({
    groupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the CloudWatch Logs group for the build logs.' }),
    ).exactOptional(),
    streamName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the CloudWatch Logs stream for the build logs.' }),
    ).exactOptional(),
    deepLink: StringSchema.and(
      z.any().openapi({ description: 'The URL to an individual build log in CloudWatch Logs.' }),
    ).exactOptional(),
    s3DeepLink: StringSchema.and(
      z.any().openapi({ description: ' The URL to a build log in an S3 bucket. ' }),
    ).exactOptional(),
    cloudWatchLogsArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of CloudWatch Logs for a build project. Its format is <code>arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html#amazoncloudwatchlogs-resources-for-iam-policies">Resources Defined by CloudWatch Logs</a>. ',
        }),
    ).exactOptional(),
    s3LogsArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of S3 logs for a build project. Its format is <code>arn:${Partition}:s3:::${BucketName}/${ObjectName}</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html#amazons3-resources-for-iam-policies">Resources Defined by Amazon S3</a>. ',
        }),
    ).exactOptional(),
    cloudWatchLogs: CloudWatchLogsConfigSchema.and(
      z.any().openapi({ description: ' Information about CloudWatch Logs for a build project. ' }),
    ).exactOptional(),
    s3Logs: S3LogsConfigSchema.and(
      z.any().openapi({ description: ' Information about S3 logs for a build project. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about build logs in CloudWatch Logs.', required: [] })
  .openapi('LogsLocation')

const NetworkInterfaceSchema = z
  .object({
    subnetId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the subnet.' }),
    ).exactOptional(),
    networkInterfaceId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the network interface.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a network interface.', required: [] })
  .openapi('NetworkInterface')

const ExportedEnvironmentVariableSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the exported environment variable.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value assigned to the exported environment variable.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains information about an exported environment variable. </p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p> <note> <p> During a build, the value of a variable is available starting with the <code>install</code> phase. It can be updated between the start of the <code>install</code> phase and the end of the <code>post_build</code> phase. After the <code>post_build</code> phase ends, the value of exported variables cannot change.</p> </note>',
    required: [],
  })
  .openapi('ExportedEnvironmentVariable')

const ExportedEnvironmentVariablesSchema = z
  .array(ExportedEnvironmentVariableSchema)
  .openapi('ExportedEnvironmentVariables')

const BuildReportArnsSchema = z.array(StringSchema).openapi('BuildReportArns')

const DebugSessionSchema = z
  .object({
    sessionEnabled: WrapperBooleanSchema.and(
      z.any().openapi({ description: 'Specifies if session debugging is enabled for this build.' }),
    ).exactOptional(),
    sessionTarget: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the identifier of the Session Manager session used for the build. To work with the paused build, you open this session to examine, control, and resume the build.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.',
    required: [],
  })
  .openapi('DebugSession')

const BuildSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The unique ID for the build.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the build.' }),
    ).exactOptional(),
    buildNumber: WrapperLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of the build. For each project, the <code>buildNumber</code> of its first build is <code>1</code>. The <code>buildNumber</code> of each subsequent build is incremented by <code>1</code>. If a build is deleted, the <code>buildNumber</code> of other builds does not change.',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'When the build process started, expressed in Unix time format.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'When the build process ended, expressed in Unix time format.' }),
    ).exactOptional(),
    currentPhase: StringSchema.and(
      z.any().openapi({ description: 'The current build phase.' }),
    ).exactOptional(),
    buildStatus: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the build. Valid values include:</p> <ul> <li> <p> <code>FAILED</code>: The build failed.</p> </li> <li> <p> <code>FAULT</code>: The build faulted.</p> </li> <li> <p> <code>IN_PROGRESS</code>: The build is still in progress.</p> </li> <li> <p> <code>STOPPED</code>: The build stopped.</p> </li> <li> <p> <code>SUCCEEDED</code>: The build succeeded.</p> </li> <li> <p> <code>TIMED_OUT</code>: The build timed out.</p> </li> </ul>',
        }),
    ).exactOptional(),
    sourceVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Any version identifier for the version of the source code to be built. If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>',
        }),
    ).exactOptional(),
    resolvedSourceVersion: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An identifier for the version of this build's source code. </p> <ul> <li> <p> For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. </p> </li> <li> <p> For CodePipeline, the source revision provided by CodePipeline. </p> </li> <li> <p> For Amazon S3, this does not apply. </p> </li> </ul>",
        }),
    ).exactOptional(),
    projectName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the CodeBuild project.' }),
    ).exactOptional(),
    phases: BuildPhasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about all previous build phases that are complete and information about any current build phase that is not yet complete.',
        }),
    ).exactOptional(),
    source: ProjectSourceSchema.and(
      z.any().openapi({ description: 'Information about the source code to be built.' }),
    ).exactOptional(),
    secondarySources: ProjectSourcesSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectSource</code> objects. ' }),
    ).exactOptional(),
    secondarySourceVersions: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An array of <code>ProjectSourceVersion</code> objects. Each <code>ProjectSourceVersion</code> must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul>",
        }),
    ).exactOptional(),
    artifacts: BuildArtifactsSchema.and(
      z.any().openapi({ description: 'Information about the output artifacts for the build.' }),
    ).exactOptional(),
    secondaryArtifacts: BuildArtifactsListSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectArtifacts</code> objects. ' }),
    ).exactOptional(),
    cache: ProjectCacheSchema.and(
      z.any().openapi({ description: 'Information about the cache for the build.' }),
    ).exactOptional(),
    environment: ProjectEnvironmentSchema.and(
      z.any().openapi({ description: 'Information about the build environment for this build.' }),
    ).exactOptional(),
    serviceRole: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of a service role used for this build.' }),
    ).exactOptional(),
    logs: LogsLocationSchema.and(
      z.any().openapi({ description: "Information about the build's logs in CloudWatch Logs." }),
    ).exactOptional(),
    timeoutInMinutes: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in minutes, for CodeBuild to wait before timing out this build if it does not get marked as completed.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutes: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of minutes a build is allowed to be queued before it times out. ',
        }),
    ).exactOptional(),
    buildComplete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the build is complete. True if complete; otherwise, false.',
        }),
    ).exactOptional(),
    initiator: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The entity that started the build. Valid values include:</p> <ul> <li> <p>If CodePipeline started the build, the pipeline's name (for example, <code>codepipeline/my-demo-pipeline</code>).</p> </li> <li> <p>If an IAM user started the build, the user's name (for example, <code>MyUserName</code>).</p> </li> <li> <p>If the Jenkins plugin for CodeBuild started the build, the string <code>CodeBuild-Jenkins-Plugin</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'If your CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.',
        }),
    ).exactOptional(),
    networkInterface: NetworkInterfaceSchema.and(
      z.any().openapi({ description: 'Describes a network interface.' }),
    ).exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
        }),
    ).exactOptional(),
    exportedEnvironmentVariables: ExportedEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of exported environment variables for this build.</p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p>',
        }),
    ).exactOptional(),
    reportArns: BuildReportArnsSchema.and(
      z
        .any()
        .openapi({ description: " An array of the ARNs associated with this build's reports. " }),
    ).exactOptional(),
    fileSystemLocations: ProjectFileSystemLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ',
        }),
    ).exactOptional(),
    debugSession: DebugSessionSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about the debug session for this build.' }),
    ).exactOptional(),
    buildBatchArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the batch build that this build is a member of, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a build.', required: [] })
  .openapi('Build')

const BuildsSchema = z.array(BuildSchema).openapi('Builds')

const BatchGetBuildsOutputSchema = z
  .object({
    builds: BuildsSchema.and(
      z.any().openapi({ description: 'Information about the requested builds.' }),
    ).exactOptional(),
    buildsNotFound: BuildIdsSchema.and(
      z
        .any()
        .openapi({ description: 'The IDs of builds for which information could not be found.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetBuildsOutput')

const BatchGetBuildsInputSchema = z
  .object({ ids: BuildIdsSchema.and(z.any().openapi({ description: 'The IDs of the builds.' })) })
  .openapi({ required: ['ids'], title: 'BatchGetBuildsInput' })
  .openapi('BatchGetBuildsInput')

const ProjectNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{1,254}/)
  .min(2)
  .max(255)
  .openapi('ProjectName')

const ProjectDescriptionSchema = z.string().min(0).max(255).openapi('ProjectDescription')

const ArtifactNamespaceSchema = z.enum(['NONE', 'BUILD_ID']).openapi('ArtifactNamespace')

const ArtifactPackagingSchema = z.enum(['NONE', 'ZIP']).openapi('ArtifactPackaging')

const ProjectArtifactsSchema = z
  .object({
    type: ArtifactsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of build output artifact. Valid values include:</p> <ul> <li> <p> <code>CODEPIPELINE</code>: The build project has build output generated through CodePipeline. </p> <note> <p>The <code>CODEPIPELINE</code> type is not supported for <code>secondaryArtifacts</code>.</p> </note> </li> <li> <p> <code>NO_ARTIFACTS</code>: The build project does not produce any build output.</p> </li> <li> <p> <code>S3</code>: The build project stores build output in Amazon S3.</p> </li> </ul>',
        }),
    ),
    location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the build output artifact location:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output locations instead of CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that CodeBuild uses to name and store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the path to the output artifact. If <code>path</code> is not specified, <code>path</code> is not used.</p> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, the output artifact is stored in the output bucket at <code>MyArtifacts/MyArtifact.zip</code>.</p>',
        }),
    ).exactOptional(),
    namespaceType: ArtifactNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Along with <code>path</code> and <code>name</code>, the pattern that CodeBuild uses to determine the name and location to store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p> <ul> <li> <p> <code>BUILD_ID</code>: Include the build ID in the location of the build output artifact.</p> </li> <li> <p> <code>NONE</code>: Do not include the build ID. This is the default if <code>namespaceType</code> is not specified.</p> </li> </ul> </li> </ul> <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, the output artifact is stored in <code>MyArtifacts/&lt;build-ID&gt;/MyArtifact.zip</code>.</p>',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that CodeBuild uses to name and store the output artifact:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output artifact object. If you set the name to be a forward slash ("/"), the artifact is stored in the root of the output bucket.</p> </li> </ul> <p>For example:</p> <ul> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to <code>MyArtifact.zip</code>, then the output artifact is stored in <code>MyArtifacts/&lt;build-ID&gt;/MyArtifact.zip</code>. </p> </li> <li> <p> If <code>path</code> is empty, <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set to "<code>/</code>", the output artifact is stored in the root of the output bucket. </p> </li> <li> <p> If <code>path</code> is set to <code>MyArtifacts</code>, <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is set to "<code>/</code>", the output artifact is stored in <code>MyArtifacts/&lt;build-ID&gt;</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    packaging: ArtifactPackagingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of build output artifact to create:</p> <ul> <li> <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output artifacts instead of CodeBuild.</p> </li> <li> <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is ignored if specified, because no build output is produced.</p> </li> <li> <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p> <ul> <li> <p> <code>NONE</code>: CodeBuild creates in the output bucket a folder that contains the build output. This is the default if <code>packaging</code> is not specified.</p> </li> <li> <p> <code>ZIP</code>: CodeBuild creates in the output bucket a ZIP file that contains the build output.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    overrideArtifactName: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. ',
        }),
    ).exactOptional(),
    encryptionDisabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon S3. If this is set with another artifacts type, an invalidInputException is thrown. ',
        }),
    ).exactOptional(),
    artifactIdentifier: StringSchema.and(
      z.any().openapi({ description: ' An identifier for this artifact definition. ' }),
    ).exactOptional(),
    bucketOwnerAccess: BucketOwnerAccessSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'Information about the build output artifacts for the build project.',
  })
  .openapi('ProjectArtifacts')

const ProjectArtifactsListSchema = z
  .array(ProjectArtifactsSchema)
  .min(0)
  .max(12)
  .openapi('ProjectArtifactsList')

const TimeOutSchema = z.int().min(5).max(480).openapi('TimeOut')

const KeyInputSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=@+\-]*)$/u)
  .min(1)
  .max(127)
  .openapi('KeyInput')

const ValueInputSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=@+\-]*)$/u)
  .min(0)
  .max(255)
  .openapi('ValueInput')

const TagSchema = z
  .object({
    key: KeyInputSchema.and(z.any().openapi({ description: "The tag's key." })).exactOptional(),
    value: ValueInputSchema.and(
      z.any().openapi({ description: "The tag's value." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(50).openapi('TagList')

const WebhookFilterTypeSchema = z
  .enum(['EVENT', 'BASE_REF', 'HEAD_REF', 'ACTOR_ACCOUNT_ID', 'FILE_PATH', 'COMMIT_MESSAGE'])
  .openapi('WebhookFilterType')

const WebhookFilterSchema = z
  .object({
    type: WebhookFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The type of webhook filter. There are six webhook filter types: <code>EVENT</code>, <code>ACTOR_ACCOUNT_ID</code>, <code>HEAD_REF</code>, <code>BASE_REF</code>, <code>FILE_PATH</code>, and <code>COMMIT_MESSAGE</code>. </p> <dl> <dt> EVENT </dt> <dd> <p> A webhook event triggers a build when the provided <code>pattern</code> matches one of five event types: <code>PUSH</code>, <code>PULL_REQUEST_CREATED</code>, <code>PULL_REQUEST_UPDATED</code>, <code>PULL_REQUEST_REOPENED</code>, and <code>PULL_REQUEST_MERGED</code>. The <code>EVENT</code> patterns are specified as a comma-separated string. For example, <code>PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> filters all push, pull request created, and pull request updated events. </p> <note> <p> The <code>PULL_REQUEST_REOPENED</code> works with GitHub and GitHub Enterprise only. </p> </note> </dd> <dt> ACTOR_ACCOUNT_ID </dt> <dd> <p> A webhook event triggers a build when a GitHub, GitHub Enterprise, or Bitbucket account ID matches the regular expression <code>pattern</code>. </p> </dd> <dt> HEAD_REF </dt> <dd> <p> A webhook event triggers a build when the head reference matches the regular expression <code>pattern</code>. For example, <code>refs/heads/branch-name</code> and <code>refs/tags/tag-name</code>. </p> <p> Works with GitHub and GitHub Enterprise push, GitHub and GitHub Enterprise pull request, Bitbucket push, and Bitbucket pull request events. </p> </dd> <dt> BASE_REF </dt> <dd> <p> A webhook event triggers a build when the base reference matches the regular expression <code>pattern</code>. For example, <code>refs/heads/branch-name</code>. </p> <note> <p> Works with pull request events only. </p> </note> </dd> <dt> FILE_PATH </dt> <dd> <p> A webhook triggers a build when the path of a changed file matches the regular expression <code>pattern</code>. </p> <note> <p> Works with GitHub and Bitbucket events push and pull requests events. Also works with GitHub Enterprise push events, but does not work with GitHub Enterprise pull request events. </p> </note> </dd> <dt>COMMIT_MESSAGE</dt> <dd> <p>A webhook triggers a build when the head commit message matches the regular expression <code>pattern</code>.</p> <note> <p> Works with GitHub and Bitbucket events push and pull requests events. Also works with GitHub Enterprise push events, but does not work with GitHub Enterprise pull request events. </p> </note> </dd> </dl>',
        }),
    ),
    pattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> For a <code>WebHookFilter</code> that uses <code>EVENT</code> type, a comma-separated string that specifies one or more events. For example, the webhook filter <code>PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> allows all push, pull request created, and pull request updated events to trigger a build. </p> <p> For a <code>WebHookFilter</code> that uses any of the other filter types, a regular expression pattern. For example, a <code>WebHookFilter</code> that uses <code>HEAD_REF</code> for its <code>type</code> and the pattern <code>^refs/heads/</code> triggers a build when the head reference is a branch with a reference name <code>refs/heads/branch-name</code>. </p>',
        }),
    ),
    excludeMatchedPattern: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used to indicate that the <code>pattern</code> determines which webhook events do not trigger a build. If true, then a webhook event that does not match the <code>pattern</code> triggers a build. If false, then a webhook event that matches the <code>pattern</code> triggers a build. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'pattern'],
    description: ' A filter used to determine which webhooks trigger a build. ',
  })
  .openapi('WebhookFilter')

const FilterGroupSchema = z.array(WebhookFilterSchema).openapi('FilterGroup')

const FilterGroupsSchema = z.array(FilterGroupSchema).openapi('FilterGroups')

const WebhookBuildTypeSchema = z.enum(['BUILD', 'BUILD_BATCH']).openapi('WebhookBuildType')

const WebhookSchema = z
  .object({
    url: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The URL to the webhook.' }),
    ).exactOptional(),
    payloadUrl: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The CodeBuild endpoint where webhook events are sent.' }),
    ).exactOptional(),
    secret: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The secret token of the associated repository. </p> <note> <p>A Bitbucket webhook does not support <code>secret</code>. </p> </note>',
        }),
    ).exactOptional(),
    branchFilter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p>It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>',
        }),
    ).exactOptional(),
    filterGroups: FilterGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of arrays of <code>WebhookFilter</code> objects used to determine which webhooks are triggered. At least one <code>WebhookFilter</code> in the array must specify <code>EVENT</code> as its <code>type</code>. </p> <p>For a build to be triggered, at least one filter group in the <code>filterGroups</code> array must pass. For a filter group to pass, each of its filters must pass. </p>',
        }),
    ).exactOptional(),
    buildType: WebhookBuildTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of build this webhook will trigger.' }),
    ).exactOptional(),
    lastModifiedSecret: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "A timestamp that indicates the last time a repository's secret token was modified. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a webhook that connects repository events to a build project in CodeBuild.',
    required: [],
  })
  .openapi('Webhook')

const ProjectBadgeSchema = z
  .object({
    badgeEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge.",
        }),
    ).exactOptional(),
    badgeRequestUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The publicly-accessible URL through which you can access the build badge for your project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the build badge for the build project.',
    required: [],
  })
  .openapi('ProjectBadge')

const ProjectVisibilityTypeSchema = z
  .enum(['PUBLIC_READ', 'PRIVATE'])
  .openapi({
    description:
      "<p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>",
  })
  .openapi('ProjectVisibilityType')

const ProjectSchema = z
  .object({
    name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the build project.' }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the build project.' }),
    ).exactOptional(),
    description: ProjectDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description that makes the build project easy to identify.' }),
    ).exactOptional(),
    source: ProjectSourceSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the build input source code for this build project.',
        }),
    ).exactOptional(),
    secondarySources: ProjectSourcesSchema.and(
      z.any().openapi({ description: 'An array of <code>ProjectSource</code> objects. ' }),
    ).exactOptional(),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:</p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p>If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ).exactOptional(),
    secondarySourceVersions: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take over these <code>secondarySourceVersions</code> (at the project level). ',
        }),
    ).exactOptional(),
    artifacts: ProjectArtifactsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the build output artifacts for the build project.',
        }),
    ).exactOptional(),
    secondaryArtifacts: ProjectArtifactsListSchema.and(
      z.any().openapi({ description: 'An array of <code>ProjectArtifacts</code> objects. ' }),
    ).exactOptional(),
    cache: ProjectCacheSchema.and(
      z.any().openapi({ description: 'Information about the cache for the build project.' }),
    ).exactOptional(),
    environment: ProjectEnvironmentSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the build environment for this build project.',
        }),
    ).exactOptional(),
    serviceRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.',
        }),
    ).exactOptional(),
    timeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes a build is allowed to be queued before it times out. ',
        }),
    ).exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>). If you don't specify a value, CodeBuild uses the managed CMK for Amazon Simple Storage Service (Amazon S3). </p>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tag key and value pairs associated with this build project.</p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.</p>',
        }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'When the build project was created, expressed in Unix time format.',
        }),
    ).exactOptional(),
    lastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "When the build project's settings were last modified, expressed in Unix time format.",
        }),
    ).exactOptional(),
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a webhook that connects repository events to a build project in CodeBuild.',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the VPC configuration that CodeBuild accesses.',
        }),
    ).exactOptional(),
    badge: ProjectBadgeSchema.and(
      z.any().openapi({ description: 'Information about the build badge for the build project.' }),
    ).exactOptional(),
    logsConfig: LogsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about logs for the build project. A project can create logs in CloudWatch Logs, an S3 bucket, or both. ',
        }),
    ).exactOptional(),
    fileSystemLocations: ProjectFileSystemLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ',
        }),
    ).exactOptional(),
    buildBatchConfig: ProjectBuildBatchConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>ProjectBuildBatchConfig</a> object that defines the batch build options for the project.',
        }),
    ).exactOptional(),
    concurrentBuildLimit: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of concurrent builds that are allowed for this project.</p> <p>New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.</p>',
        }),
    ).exactOptional(),
    projectVisibility: ProjectVisibilityTypeSchema.exactOptional(),
    publicProjectAlias: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the project identifier used with the public build APIs. ',
        }),
    ).exactOptional(),
    resourceAccessRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a build project.', required: [] })
  .openapi('Project')

const ProjectsSchema = z.array(ProjectSchema).openapi('Projects')

const ProjectNamesSchema = z.array(NonEmptyStringSchema).min(1).max(100).openapi('ProjectNames')

const BatchGetProjectsOutputSchema = z
  .object({
    projects: ProjectsSchema.and(
      z.any().openapi({ description: 'Information about the requested build projects.' }),
    ).exactOptional(),
    projectsNotFound: ProjectNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of build projects for which information could not be found.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetProjectsOutput')

const BatchGetProjectsInputSchema = z
  .object({
    names: ProjectNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names or ARNs of the build projects. To get information about a project shared with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project using its name.',
        }),
    ),
  })
  .openapi({ required: ['names'], title: 'BatchGetProjectsInput' })
  .openapi('BatchGetProjectsInput')

const ReportGroupNameSchema = z.string().min(2).max(128).openapi('ReportGroupName')

const ReportTypeSchema = z.enum(['TEST', 'CODE_COVERAGE']).openapi('ReportType')

const ReportExportConfigSchema: z.ZodType<ReportExportConfigType> = z
  .lazy(() =>
    z
      .object({
        exportConfigType: ReportExportConfigTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p> The export configuration type. Valid values are: </p> <ul> <li> <p> <code>S3</code>: The report results are exported to an S3 bucket. </p> </li> <li> <p> <code>NO_EXPORT</code>: The report results are not exported. </p> </li> </ul>',
            }),
        ).exactOptional(),
        s3Destination: S3ReportExportConfigSchema.and(
          z
            .any()
            .openapi({
              description:
                ' A <code>S3ReportExportConfig</code> object that contains information about the S3 bucket where the run of a report is exported. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: ' Information about the location where the run of a report is exported. ',
        required: [],
      }),
  )
  .openapi('ReportExportConfig')

const ReportGroupStatusTypeSchema = z.enum(['ACTIVE', 'DELETING']).openapi('ReportGroupStatusType')

const ReportGroupSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>ReportGroup</code>. ' }),
    ).exactOptional(),
    name: ReportGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>ReportGroup</code>. ' }),
    ).exactOptional(),
    type: ReportTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the <code>ReportGroup</code>. This can be one of the following values:</p> <dl> <dt>CODE_COVERAGE</dt> <dd> <p>The report group contains code coverage reports.</p> </dd> <dt>TEST</dt> <dd> <p>The report group contains test reports.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    exportConfig: ReportExportConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the destination where the raw data of this <code>ReportGroup</code> is exported. ',
        }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time this <code>ReportGroup</code> was created. ' }),
    ).exactOptional(),
    lastModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time this <code>ReportGroup</code> was last modified. ',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tag key and value pairs associated with this report group. </p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.</p>',
        }),
    ).exactOptional(),
    status: ReportGroupStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the report group. This property is read-only.</p> <p>This can be one of the following values:</p> <dl> <dt>ACTIVE</dt> <dd> <p>The report group is active.</p> </dd> <dt>DELETING</dt> <dd> <p>The report group is in the process of being deleted.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. ',
    required: [],
  })
  .openapi('ReportGroup')

const ReportGroupsSchema = z.array(ReportGroupSchema).min(1).max(100).openapi('ReportGroups')

const ReportGroupArnsSchema = z
  .array(NonEmptyStringSchema)
  .min(1)
  .max(100)
  .openapi('ReportGroupArns')

const BatchGetReportGroupsOutputSchema = z
  .object({
    reportGroups: ReportGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The array of report groups returned by <code>BatchGetReportGroups</code>. ',
        }),
    ).exactOptional(),
    reportGroupsNotFound: ReportGroupArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>ReportGroup</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetReportGroupsOutput')

const BatchGetReportGroupsInputSchema = z
  .object({
    reportGroupArns: ReportGroupArnsSchema.and(
      z
        .any()
        .openapi({
          description: ' An array of report group ARNs that identify the report groups to return. ',
        }),
    ),
  })
  .openapi({ required: ['reportGroupArns'], title: 'BatchGetReportGroupsInput' })
  .openapi('BatchGetReportGroupsInput')

const ReportStatusTypeSchema = z
  .enum(['GENERATING', 'SUCCEEDED', 'FAILED', 'INCOMPLETE', 'DELETING'])
  .openapi('ReportStatusType')

const ReportStatusCountsSchema = z
  .record(z.string(), WrapperIntSchema)
  .openapi('ReportStatusCounts')

const TestReportSummarySchema = z
  .object({
    total: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of test cases in this <code>TestReportSummary</code>. The total includes truncated test cases. ',
        }),
    ),
    statusCounts: ReportStatusCountsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map that contains the number of each type of status returned by the test results in this <code>TestReportSummary</code>. ',
        }),
    ),
    durationInNanoSeconds: WrapperLongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of nanoseconds it took to run all of the test cases in this report. ',
        }),
    ),
  })
  .openapi({
    required: ['total', 'statusCounts', 'durationInNanoSeconds'],
    description: ' Information about a test report. ',
  })
  .openapi('TestReportSummary')

const PercentageSchema = z.float64().min(0).max(100).openapi('Percentage')

const NonNegativeIntSchema = z.int().min(0).openapi('NonNegativeInt')

const CodeCoverageReportSummarySchema = z
  .object({
    lineCoveragePercentage: PercentageSchema.and(
      z.any().openapi({ description: 'The percentage of lines that are covered by your tests.' }),
    ).exactOptional(),
    linesCovered: NonNegativeIntSchema.and(
      z.any().openapi({ description: 'The number of lines that are covered by your tests.' }),
    ).exactOptional(),
    linesMissed: NonNegativeIntSchema.and(
      z.any().openapi({ description: 'The number of lines that are not covered by your tests.' }),
    ).exactOptional(),
    branchCoveragePercentage: PercentageSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage of branches that are covered by your tests.' }),
    ).exactOptional(),
    branchesCovered: NonNegativeIntSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of conditional branches that are covered by your tests.',
        }),
    ).exactOptional(),
    branchesMissed: NonNegativeIntSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of conditional branches that are not covered by your tests.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>',
    required: [],
  })
  .openapi('CodeCoverageReportSummary')

const ReportSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The ARN of the report run. ' }),
    ).exactOptional(),
    type: ReportTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the report that was run.</p> <dl> <dt>CODE_COVERAGE</dt> <dd> <p>A code coverage report.</p> </dd> <dt>TEST</dt> <dd> <p>A test report.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: ' The name of the report that was run. ' }),
    ).exactOptional(),
    reportGroupArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: ' The ARN of the report group associated with this report. ' }),
    ).exactOptional(),
    executionId: StringSchema.and(
      z.any().openapi({ description: ' The ARN of the build run that generated this report. ' }),
    ).exactOptional(),
    status: ReportStatusTypeSchema.and(
      z.any().openapi({ description: ' The status of this report. ' }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time this report run occurred. ' }),
    ).exactOptional(),
    expired: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time a report expires. A report expires 30 days after it is created. An expired report is not available to view in CodeBuild. ',
        }),
    ).exactOptional(),
    exportConfig: ReportExportConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about where the raw data used to generate this report was exported. ',
        }),
    ).exactOptional(),
    truncated: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A boolean that specifies if this report run is truncated. The list of test cases is truncated after the maximum number of test cases is reached. ',
        }),
    ).exactOptional(),
    testSummary: TestReportSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>TestReportSummary</code> object that contains information about this test report. ',
        }),
    ).exactOptional(),
    codeCoverageSummary: CodeCoverageReportSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CodeCoverageReportSummary</code> object that contains a code coverage summary for this report.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests. ',
    required: [],
  })
  .openapi('Report')

const ReportsSchema = z.array(ReportSchema).min(1).max(100).openapi('Reports')

const ReportArnsSchema = z.array(NonEmptyStringSchema).min(1).max(100).openapi('ReportArns')

const BatchGetReportsOutputSchema = z
  .object({
    reports: ReportsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The array of <code>Report</code> objects returned by <code>BatchGetReports</code>. ',
        }),
    ).exactOptional(),
    reportsNotFound: ReportArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>Report</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetReportsOutput')

const BatchGetReportsInputSchema = z
  .object({
    reportArns: ReportArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of ARNs that identify the <code>Report</code> objects to return. ',
        }),
    ),
  })
  .openapi({ required: ['reportArns'], title: 'BatchGetReportsInput' })
  .openapi('BatchGetReportsInput')

const CreateProjectOutputSchema = z
  .object({
    project: ProjectSchema.and(
      z.any().openapi({ description: 'Information about the build project that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProjectOutput')

const CreateProjectInputSchema = z
  .object({
    name: ProjectNameSchema.and(z.any().openapi({ description: 'The name of the build project.' })),
    description: ProjectDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description that makes the build project easy to identify.' }),
    ).exactOptional(),
    source: ProjectSourceSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the build input source code for the build project.',
        }),
    ),
    secondarySources: ProjectSourcesSchema.and(
      z.any().openapi({ description: 'An array of <code>ProjectSource</code> objects. ' }),
    ).exactOptional(),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p>If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ).exactOptional(),
    secondarySourceVersions: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take precedence over these <code>secondarySourceVersions</code> (at the project level). ',
        }),
    ).exactOptional(),
    artifacts: ProjectArtifactsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the build output artifacts for the build project.',
        }),
    ),
    secondaryArtifacts: ProjectArtifactsListSchema.and(
      z.any().openapi({ description: 'An array of <code>ProjectArtifacts</code> objects. ' }),
    ).exactOptional(),
    cache: ProjectCacheSchema.and(
      z
        .any()
        .openapi({
          description:
            'Stores recently used information so that it can be quickly accessed at a later time.',
        }),
    ).exactOptional(),
    environment: ProjectEnvironmentSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the build environment for the build project.' }),
    ),
    serviceRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.',
        }),
    ),
    timeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes a build is allowed to be queued before it times out. ',
        }),
    ).exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>). </p>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tag key and value pairs associated with this build project.</p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.</p>',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'VpcConfig enables CodeBuild to access resources in an Amazon VPC.',
        }),
    ).exactOptional(),
    badgeEnabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge.",
        }),
    ).exactOptional(),
    logsConfig: LogsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about logs for the build project. These can be logs in CloudWatch Logs, logs uploaded to a specified S3 bucket, or both. ',
        }),
    ).exactOptional(),
    fileSystemLocations: ProjectFileSystemLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ',
        }),
    ).exactOptional(),
    buildBatchConfig: ProjectBuildBatchConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>ProjectBuildBatchConfig</a> object that defines the batch build options for the project.',
        }),
    ).exactOptional(),
    concurrentBuildLimit: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of concurrent builds that are allowed for this project.</p> <p>New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'source', 'artifacts', 'environment', 'serviceRole'],
    title: 'CreateProjectInput',
  })
  .openapi('CreateProjectInput')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const AccountLimitExceededExceptionSchema = z.any().openapi('AccountLimitExceededException')

const CreateReportGroupOutputSchema = z
  .object({
    reportGroup: ReportGroupSchema.and(
      z.any().openapi({ description: ' Information about the report group that was created. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateReportGroupOutput')

const CreateReportGroupInputSchema = z
  .object({
    name: ReportGroupNameSchema.and(
      z.any().openapi({ description: ' The name of the report group. ' }),
    ),
    type: ReportTypeSchema.and(z.any().openapi({ description: ' The type of report group. ' })),
    exportConfig: ReportExportConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>ReportExportConfig</code> object that contains information about where the report group test results are exported. ',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A list of tag key and value pairs associated with this report group. </p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'type', 'exportConfig'], title: 'CreateReportGroupInput' })
  .openapi('CreateReportGroupInput')

const CreateWebhookOutputSchema = z
  .object({
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a webhook that connects repository events to a build project in CodeBuild.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWebhookOutput')

const CreateWebhookInputSchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the CodeBuild project.' }),
    ),
    branchFilter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p>It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>',
        }),
    ).exactOptional(),
    filterGroups: FilterGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of arrays of <code>WebhookFilter</code> objects used to determine which webhooks are triggered. At least one <code>WebhookFilter</code> in the array must specify <code>EVENT</code> as its <code>type</code>. </p> <p>For a build to be triggered, at least one filter group in the <code>filterGroups</code> array must pass. For a filter group to pass, each of its filters must pass. </p>',
        }),
    ).exactOptional(),
    buildType: WebhookBuildTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of build this webhook will trigger.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'CreateWebhookInput' })
  .openapi('CreateWebhookInput')

const OAuthProviderExceptionSchema = z.any().openapi('OAuthProviderException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteBuildBatchOutputSchema = z
  .object({
    statusCode: StringSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    buildsDeleted: BuildIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that contain the identifiers of the builds that were deleted.',
        }),
    ).exactOptional(),
    buildsNotDeleted: BuildsNotDeletedSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuildNotDeleted</code> objects that specify the builds that could not be deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBuildBatchOutput')

const DeleteBuildBatchInputSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the batch build to delete.' }),
    ),
  })
  .openapi({ required: ['id'], title: 'DeleteBuildBatchInput' })
  .openapi('DeleteBuildBatchInput')

const DeleteProjectOutputSchema = z.object({}).openapi('DeleteProjectOutput')

const DeleteProjectInputSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the build project.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteProjectInput' })
  .openapi('DeleteProjectInput')

const DeleteReportOutputSchema = z.object({}).openapi('DeleteReportOutput')

const DeleteReportInputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The ARN of the report to delete. ' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteReportInput' })
  .openapi('DeleteReportInput')

const DeleteReportGroupOutputSchema = z.object({}).openapi('DeleteReportGroupOutput')

const DeleteReportGroupInputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the report group to delete. ' }),
    ),
    deleteReports: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>true</code>, deletes any reports that belong to a report group before deleting the report group. </p> <p>If <code>false</code>, you must delete any reports in the report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'DeleteReportGroupInput' })
  .openapi('DeleteReportGroupInput')

const DeleteResourcePolicyOutputSchema = z.object({}).openapi('DeleteResourcePolicyOutput')

const DeleteResourcePolicyInputSchema = z
  .object({
    resourceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: ' The ARN of the resource that is associated with the resource policy. ',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'DeleteResourcePolicyInput' })
  .openapi('DeleteResourcePolicyInput')

const DeleteSourceCredentialsOutputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the token. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSourceCredentialsOutput')

const DeleteSourceCredentialsInputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the token.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteSourceCredentialsInput' })
  .openapi('DeleteSourceCredentialsInput')

const DeleteWebhookOutputSchema = z.object({}).openapi('DeleteWebhookOutput')

const DeleteWebhookInputSchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the CodeBuild project.' }),
    ),
  })
  .openapi({ required: ['projectName'], title: 'DeleteWebhookInput' })
  .openapi('DeleteWebhookInput')

const CodeCoverageSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the code coverage report.' }),
    ).exactOptional(),
    reportARN: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the report.' }),
    ).exactOptional(),
    filePath: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The path of the test report file.' }),
    ).exactOptional(),
    lineCoveragePercentage: PercentageSchema.and(
      z.any().openapi({ description: 'The percentage of lines that are covered by your tests.' }),
    ).exactOptional(),
    linesCovered: NonNegativeIntSchema.and(
      z.any().openapi({ description: 'The number of lines that are covered by your tests.' }),
    ).exactOptional(),
    linesMissed: NonNegativeIntSchema.and(
      z.any().openapi({ description: 'The number of lines that are not covered by your tests.' }),
    ).exactOptional(),
    branchCoveragePercentage: PercentageSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage of branches that are covered by your tests.' }),
    ).exactOptional(),
    branchesCovered: NonNegativeIntSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of conditional branches that are covered by your tests.',
        }),
    ).exactOptional(),
    branchesMissed: NonNegativeIntSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of conditional branches that are not covered by your tests.',
        }),
    ).exactOptional(),
    expired: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the tests were run.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>',
    required: [],
  })
  .openapi('CodeCoverage')

const CodeCoveragesSchema = z.array(CodeCoverageSchema).openapi('CodeCoverages')

const DescribeCodeCoveragesOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items to return, this contains a token that is passed to a subsequent call to <code>DescribeCodeCoverages</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
    codeCoverages: CodeCoveragesSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>CodeCoverage</code> objects that contain the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCodeCoveragesOutput')

const PageSizeSchema = z.int().min(1).max(100).openapi('PageSize')

const SortOrderTypeSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrderType')

const ReportCodeCoverageSortByTypeSchema = z
  .enum(['LINE_COVERAGE_PERCENTAGE', 'FILE_PATH'])
  .openapi('ReportCodeCoverageSortByType')

const DescribeCodeCoveragesInputSchema = z
  .object({
    reportArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: ' The ARN of the report for which test cases are returned. ' }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous call to <code>DescribeCodeCoverages</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies if the results are sorted in ascending or descending order.',
        }),
    ).exactOptional(),
    sortBy: ReportCodeCoverageSortByTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how the results are sorted. Possible values are:</p> <dl> <dt>FILE_PATH</dt> <dd> <p>The results are sorted by file path.</p> </dd> <dt>LINE_COVERAGE_PERCENTAGE</dt> <dd> <p>The results are sorted by the percentage of lines that are covered.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    minLineCoveragePercentage: PercentageSchema.and(
      z.any().openapi({ description: 'The minimum line coverage percentage to report.' }),
    ).exactOptional(),
    maxLineCoveragePercentage: PercentageSchema.and(
      z.any().openapi({ description: 'The maximum line coverage percentage to report.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['reportArn'], title: 'DescribeCodeCoveragesInput' })
  .openapi('DescribeCodeCoveragesInput')

const TestCaseSchema = z
  .object({
    reportArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The ARN of the report to which the test case belongs. ' }),
    ).exactOptional(),
    testRawDataPath: StringSchema.and(
      z
        .any()
        .openapi({ description: ' The path to the raw data file that contains the test result. ' }),
    ).exactOptional(),
    prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A string that is applied to a series of related test cases. CodeBuild generates the prefix. The prefix depends on the framework used to generate the tests. ',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: ' The name of the test case. ' }),
    ).exactOptional(),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status returned by the test case after it was run. Valid statuses are <code>SUCCEEDED</code>, <code>FAILED</code>, <code>ERROR</code>, <code>SKIPPED</code>, and <code>UNKNOWN</code>. ',
        }),
    ).exactOptional(),
    durationInNanoSeconds: WrapperLongSchema.and(
      z
        .any()
        .openapi({ description: ' The number of nanoseconds it took to run this test case. ' }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A message associated with a test case. For example, an error message or stack trace. ',
        }),
    ).exactOptional(),
    expired: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time a test case expires. A test case expires 30 days after it is created. An expired test case is not available to view in CodeBuild. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test. ',
    required: [],
  })
  .openapi('TestCase')

const TestCasesSchema = z.array(TestCaseSchema).openapi('TestCases')

const DescribeTestCasesOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    testCases: TestCasesSchema.and(
      z.any().openapi({ description: ' The returned list of test cases. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTestCasesOutput')

const TestCaseFilterSchema = z
  .object({
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status used to filter test cases. A <code>TestCaseFilter</code> can have one status. Valid values are:</p> <ul> <li> <p> <code>SUCCEEDED</code> </p> </li> <li> <p> <code>FAILED</code> </p> </li> <li> <p> <code>ERROR</code> </p> </li> <li> <p> <code>SKIPPED</code> </p> </li> <li> <p> <code>UNKNOWN</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    keyword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyword that is used to filter on the <code>name</code> or the <code>prefix</code> of the test cases. Only test cases where the keyword is a substring of the <code>name</code> or the <code>prefix</code> will be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.',
    required: [],
  })
  .openapi('TestCaseFilter')

const DescribeTestCasesInputSchema = z
  .object({
    reportArn: StringSchema.and(
      z
        .any()
        .openapi({ description: ' The ARN of the report for which test cases are returned. ' }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated test cases returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>TestCase</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
    filter: TestCaseFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>TestCaseFilter</code> object used to filter the returned reports. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['reportArn'], title: 'DescribeTestCasesInput' })
  .openapi('DescribeTestCasesInput')

const ReportGroupTrendStatsSchema = z
  .object({
    average: StringSchema.and(
      z.any().openapi({ description: 'Contains the average of all values analyzed.' }),
    ).exactOptional(),
    max: StringSchema.and(
      z.any().openapi({ description: 'Contains the maximum value analyzed.' }),
    ).exactOptional(),
    min: StringSchema.and(
      z.any().openapi({ description: 'Contains the minimum value analyzed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .',
    required: [],
  })
  .openapi('ReportGroupTrendStats')

const ReportWithRawDataSchema = z
  .object({
    reportArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the report.' }),
    ).exactOptional(),
    data: StringSchema.and(
      z.any().openapi({ description: 'The value of the requested data field from the report.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the unmodified data for the report. For more information, see .',
    required: [],
  })
  .openapi('ReportWithRawData')

const ReportGroupTrendRawDataListSchema = z
  .array(ReportWithRawDataSchema)
  .openapi('ReportGroupTrendRawDataList')

const GetReportGroupTrendOutputSchema = z
  .object({
    stats: ReportGroupTrendStatsSchema.and(
      z.any().openapi({ description: 'Contains the accumulated trend data.' }),
    ).exactOptional(),
    rawData: ReportGroupTrendRawDataListSchema.and(
      z.any().openapi({ description: 'An array that contains the raw data for each report.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetReportGroupTrendOutput')

const ReportGroupTrendFieldTypeSchema = z
  .enum([
    'PASS_RATE',
    'DURATION',
    'TOTAL',
    'LINE_COVERAGE',
    'LINES_COVERED',
    'LINES_MISSED',
    'BRANCH_COVERAGE',
    'BRANCHES_COVERED',
    'BRANCHES_MISSED',
  ])
  .openapi('ReportGroupTrendFieldType')

const GetReportGroupTrendInputSchema = z
  .object({
    reportGroupArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the report group that contains the reports to analyze.',
        }),
    ),
    numOfReports: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of reports to analyze. This operation always retrieves the most recent reports.</p> <p>If this parameter is omitted, the most recent 100 reports are analyzed.</p>',
        }),
    ).exactOptional(),
    trendField: ReportGroupTrendFieldTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The test report value to accumulate. This must be one of the following values:</p> <dl> <dt>Test reports:</dt> <dd> <dl> <dt>DURATION</dt> <dd> <p>Accumulate the test run times for the specified reports.</p> </dd> <dt>PASS_RATE</dt> <dd> <p>Accumulate the percentage of tests that passed for the specified test reports.</p> </dd> <dt>TOTAL</dt> <dd> <p>Accumulate the total number of tests for the specified test reports.</p> </dd> </dl> </dd> </dl> <dl> <dt>Code coverage reports:</dt> <dd> <dl> <dt>BRANCH_COVERAGE</dt> <dd> <p>Accumulate the branch coverage percentages for the specified test reports.</p> </dd> <dt>BRANCHES_COVERED</dt> <dd> <p>Accumulate the branches covered values for the specified test reports.</p> </dd> <dt>BRANCHES_MISSED</dt> <dd> <p>Accumulate the branches missed values for the specified test reports.</p> </dd> <dt>LINE_COVERAGE</dt> <dd> <p>Accumulate the line coverage percentages for the specified test reports.</p> </dd> <dt>LINES_COVERED</dt> <dd> <p>Accumulate the lines covered values for the specified test reports.</p> </dd> <dt>LINES_MISSED</dt> <dd> <p>Accumulate the lines not covered values for the specified test reports.</p> </dd> </dl> </dd> </dl>',
        }),
    ),
  })
  .openapi({ required: ['reportGroupArn', 'trendField'], title: 'GetReportGroupTrendInput' })
  .openapi('GetReportGroupTrendInput')

const GetResourcePolicyOutputSchema = z
  .object({
    policy: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The resource policy for the resource identified by the input ARN parameter. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePolicyOutput')

const GetResourcePolicyInputSchema = z
  .object({
    resourceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: ' The ARN of the resource that is associated with the resource policy. ',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'GetResourcePolicyInput' })
  .openapi('GetResourcePolicyInput')

const ImportSourceCredentialsOutputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the token. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportSourceCredentialsOutput')

const SensitiveNonEmptyStringSchema = z.string().min(1).openapi('SensitiveNonEmptyString')

const ServerTypeSchema = z.enum(['GITHUB', 'BITBUCKET', 'GITHUB_ENTERPRISE']).openapi('ServerType')

const AuthTypeSchema = z.enum(['OAUTH', 'BASIC_AUTH', 'PERSONAL_ACCESS_TOKEN']).openapi('AuthType')

const ImportSourceCredentialsInputSchema = z
  .object({
    username: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter is not valid for other types of source providers or connections. ',
        }),
    ).exactOptional(),
    token: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password. ',
        }),
    ),
    serverType: ServerTypeSchema.and(
      z.any().openapi({ description: ' The source provider used for this project. ' }),
    ),
    authType: AuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console. ',
        }),
    ),
    shouldOverwrite: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Set to <code>false</code> to prevent overwriting the repository source credentials. Set to <code>true</code> to overwrite the repository source credentials. The default value is <code>true</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['token', 'serverType', 'authType'], title: 'ImportSourceCredentialsInput' })
  .openapi('ImportSourceCredentialsInput')

const InvalidateProjectCacheOutputSchema = z.object({}).openapi('InvalidateProjectCacheOutput')

const InvalidateProjectCacheInputSchema = z
  .object({
    projectName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the CodeBuild build project that the cache is reset for.',
        }),
    ),
  })
  .openapi({ required: ['projectName'], title: 'InvalidateProjectCacheInput' })
  .openapi('InvalidateProjectCacheInput')

const ListBuildBatchesOutputSchema = z
  .object({
    ids: BuildBatchIdsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of strings that contains the batch build identifiers.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items to return, this contains a token that is passed to a subsequent call to <code>ListBuildBatches</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuildBatchesOutput')

const BuildBatchFilterSchema = z
  .object({
    status: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the batch builds to retrieve. Only batch builds that have this status will be retrieved.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies filters when retrieving batch builds.', required: [] })
  .openapi('BuildBatchFilter')

const ListBuildBatchesInputSchema = z
  .object({
    filter: BuildBatchFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildBatchFilter</code> object that specifies the filters for the search.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the sort order of the returned items. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the batch build identifiers in ascending order by identifier.</p> </li> <li> <p> <code>DESCENDING</code>: List the batch build identifiers in descending order by identifier.</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous call to <code>ListBuildBatches</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuildBatchesInput', required: [] })
  .openapi('ListBuildBatchesInput')

const ListBuildBatchesForProjectOutputSchema = z
  .object({
    ids: BuildBatchIdsSchema.and(
      z
        .any()
        .openapi({ description: 'An array of strings that contains the batch build identifiers.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items to return, this contains a token that is passed to a subsequent call to <code>ListBuildBatchesForProject</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuildBatchesForProjectOutput')

const ListBuildBatchesForProjectInputSchema = z
  .object({
    projectName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the project.' }),
    ).exactOptional(),
    filter: BuildBatchFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildBatchFilter</code> object that specifies the filters for the search.',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the sort order of the returned items. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the batch build identifiers in ascending order by identifier.</p> </li> <li> <p> <code>DESCENDING</code>: List the batch build identifiers in descending order by identifier.</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value returned from a previous call to <code>ListBuildBatchesForProject</code>. This specifies the next item to return. To return the beginning of the list, exclude this parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuildBatchesForProjectInput', required: [] })
  .openapi('ListBuildBatchesForProjectInput')

const ListBuildsOutputSchema = z
  .object({
    ids: BuildIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of build IDs, with each build ID representing a single build.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuildsOutput')

const ListBuildsInputSchema = z
  .object({
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The order to list build IDs. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build IDs in ascending order by build ID.</p> </li> <li> <p> <code>DESCENDING</code>: List the build IDs in descending order by build ID.</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuildsInput', required: [] })
  .openapi('ListBuildsInput')

const ListBuildsForProjectOutputSchema = z
  .object({
    ids: BuildIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of build identifiers for the specified build project, with each build ID representing a single build.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuildsForProjectOutput')

const ListBuildsForProjectInputSchema = z
  .object({
    projectName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the CodeBuild project.' }),
    ),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order.</p> <p>Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List the build identifiers in ascending order, by build number.</p> </li> <li> <p> <code>DESCENDING</code>: List the build identifiers in descending order, by build number.</p> </li> </ul> <p>If the project has more than 100 builds, setting the sort order will result in an error. </p>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'ListBuildsForProjectInput' })
  .openapi('ListBuildsForProjectInput')

const PlatformTypeSchema = z
  .enum(['DEBIAN', 'AMAZON_LINUX', 'UBUNTU', 'WINDOWS_SERVER'])
  .openapi('PlatformType')

const LanguageTypeSchema = z
  .enum([
    'JAVA',
    'PYTHON',
    'NODE_JS',
    'RUBY',
    'GOLANG',
    'DOCKER',
    'ANDROID',
    'DOTNET',
    'BASE',
    'PHP',
  ])
  .openapi('LanguageType')

const ImageVersionsSchema = z.array(StringSchema).openapi('ImageVersions')

const EnvironmentImageSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the Docker image.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the Docker image.' }),
    ).exactOptional(),
    versions: ImageVersionsSchema.and(
      z.any().openapi({ description: 'A list of environment image versions.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a Docker image that is managed by CodeBuild.',
    required: [],
  })
  .openapi('EnvironmentImage')

const EnvironmentImagesSchema = z.array(EnvironmentImageSchema).openapi('EnvironmentImages')

const EnvironmentLanguageSchema = z
  .object({
    language: LanguageTypeSchema.and(
      z.any().openapi({ description: 'The programming language for the Docker images.' }),
    ).exactOptional(),
    images: EnvironmentImagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Docker images that are related by the specified programming language.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of Docker images that are related by programming language and are managed by CodeBuild.',
    required: [],
  })
  .openapi('EnvironmentLanguage')

const EnvironmentLanguagesSchema = z
  .array(EnvironmentLanguageSchema)
  .openapi('EnvironmentLanguages')

const EnvironmentPlatformSchema = z
  .object({
    platform: PlatformTypeSchema.and(
      z.any().openapi({ description: "The platform's name." }),
    ).exactOptional(),
    languages: EnvironmentLanguagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of programming languages that are available for the specified platform.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of Docker images that are related by platform and are managed by CodeBuild.',
    required: [],
  })
  .openapi('EnvironmentPlatform')

const EnvironmentPlatformsSchema = z
  .array(EnvironmentPlatformSchema)
  .openapi('EnvironmentPlatforms')

const ListCuratedEnvironmentImagesOutputSchema = z
  .object({
    platforms: EnvironmentPlatformsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about supported platforms for Docker images that are managed by CodeBuild.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCuratedEnvironmentImagesOutput')

const ListCuratedEnvironmentImagesInputSchema = z
  .object({})
  .openapi({ title: 'ListCuratedEnvironmentImagesInput' })
  .openapi('ListCuratedEnvironmentImagesInput')

const ListProjectsOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.',
        }),
    ).exactOptional(),
    projects: ProjectNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of build project names, with each build project name representing a single build project.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProjectsOutput')

const ProjectSortByTypeSchema = z
  .enum(['NAME', 'CREATED_TIME', 'LAST_MODIFIED_TIME'])
  .openapi('ProjectSortByType')

const ListProjectsInputSchema = z
  .object({
    sortBy: ProjectSortByTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The criterion to be used to list build project names. Valid values include:</p> <ul> <li> <p> <code>CREATED_TIME</code>: List based on when each build project was created.</p> </li> <li> <p> <code>LAST_MODIFIED_TIME</code>: List based on when information about each build project was last changed.</p> </li> <li> <p> <code>NAME</code>: List based on each build project's name.</p> </li> </ul> <p>Use <code>sortOrder</code> to specify in what order to list the build project names based on the preceding criteria.</p>",
        }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The order in which to list build projects. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul> <p>Use <code>sortBy</code> to specify the criterion to be used to list build project names.</p>',
        }),
    ).exactOptional(),
    nextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>nextToken</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProjectsInput', required: [] })
  .openapi('ListProjectsInput')

const ListReportGroupsOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    reportGroups: ReportGroupArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of ARNs for the report groups in the current Amazon Web Services account. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportGroupsOutput')

const ReportGroupSortByTypeSchema = z
  .enum(['NAME', 'CREATED_TIME', 'LAST_MODIFIED_TIME'])
  .openapi('ReportGroupSortByType')

const ListReportGroupsInputSchema = z
  .object({
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used to specify the order to sort the list of returned report groups. Valid values are <code>ASCENDING</code> and <code>DESCENDING</code>. ',
        }),
    ).exactOptional(),
    sortBy: ReportGroupSortByTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The criterion to be used to list build report groups. Valid values include: </p> <ul> <li> <p> <code>CREATED_TIME</code>: List based on when each report group was created.</p> </li> <li> <p> <code>LAST_MODIFIED_TIME</code>: List based on when each report group was last changed.</p> </li> <li> <p> <code>NAME</code>: List based on each report group's name.</p> </li> </ul>",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated report groups returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>ReportGroup</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReportGroupsInput', required: [] })
  .openapi('ListReportGroupsInput')

const ListReportsOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    reports: ReportArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of returned ARNs for the reports in the current Amazon Web Services account. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportsOutput')

const ReportFilterSchema = z
  .object({
    status: ReportStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The status used to filter reports. You can filter using one status only. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A filter used to return reports with the status specified by the input <code>status</code> parameter. ',
    required: [],
  })
  .openapi('ReportFilter')

const ListReportsInputSchema = z
  .object({
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the sort order for the list of returned reports. Valid values are: </p> <ul> <li> <p> <code>ASCENDING</code>: return reports in chronological order based on their creation date. </p> </li> <li> <p> <code>DESCENDING</code>: return reports in the reverse chronological order based on their creation date. </p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated reports returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Report</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
    filter: ReportFilterSchema.and(
      z
        .any()
        .openapi({
          description: ' A <code>ReportFilter</code> object used to filter the returned reports. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReportsInput', required: [] })
  .openapi('ListReportsInput')

const ListReportsForReportGroupOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    reports: ReportArnsSchema.and(
      z.any().openapi({ description: ' The list of report ARNs. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportsForReportGroupOutput')

const ListReportsForReportGroupInputSchema = z
  .object({
    reportGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' The ARN of the report group for which you want to return report ARNs. ',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Use to specify whether the results are returned in ascending or descending order. ',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated reports in this report group returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Report</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
    filter: ReportFilterSchema.and(
      z
        .any()
        .openapi({
          description: ' A <code>ReportFilter</code> object used to filter the returned reports. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['reportGroupArn'], title: 'ListReportsForReportGroupInput' })
  .openapi('ListReportsForReportGroupInput')

const ProjectArnsSchema = z.array(NonEmptyStringSchema).min(1).max(100).openapi('ProjectArns')

const ListSharedProjectsOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    projects: ProjectArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of ARNs for the build projects shared with the current Amazon Web Services account or user. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSharedProjectsOutput')

const SharedResourceSortByTypeSchema = z
  .enum(['ARN', 'MODIFIED_TIME'])
  .openapi('SharedResourceSortByType')

const ListSharedProjectsInputSchema = z
  .object({
    sortBy: SharedResourceSortByTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The criterion to be used to list build projects shared with the current Amazon Web Services account or user. Valid values include: </p> <ul> <li> <p> <code>ARN</code>: List based on the ARN. </p> </li> <li> <p> <code>MODIFIED_TIME</code>: List based on when information about the shared project was last changed. </p> </li> </ul>',
        }),
    ).exactOptional(),
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The order in which to list shared build projects. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul>',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated shared build projects returned per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>Project</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
    nextToken: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSharedProjectsInput', required: [] })
  .openapi('ListSharedProjectsInput')

const ListSharedReportGroupsOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    reportGroups: ReportGroupArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of ARNs for the report groups shared with the current Amazon Web Services account or user. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSharedReportGroupsOutput')

const ListSharedReportGroupsInputSchema = z
  .object({
    sortOrder: SortOrderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The order in which to list shared report groups. Valid values include:</p> <ul> <li> <p> <code>ASCENDING</code>: List in ascending order.</p> </li> <li> <p> <code>DESCENDING</code>: List in descending order.</p> </li> </ul>',
        }),
    ).exactOptional(),
    sortBy: SharedResourceSortByTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include: </p> <ul> <li> <p> <code>ARN</code>: List based on the ARN. </p> </li> <li> <p> <code>MODIFIED_TIME</code>: List based on when information about the shared report group was last changed. </p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' During a previous call, the maximum number of items that can be returned is the value specified in <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i> is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned. ',
        }),
    ).exactOptional(),
    maxResults: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of paginated shared report groups per response. Use <code>nextToken</code> to iterate pages in the list of returned <code>ReportGroup</code> objects. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSharedReportGroupsInput', required: [] })
  .openapi('ListSharedReportGroupsInput')

const SourceCredentialsInfoSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the token. ' }),
    ).exactOptional(),
    serverType: ServerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or BITBUCKET. ',
        }),
    ).exactOptional(),
    authType: AuthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. ',
    required: [],
  })
  .openapi('SourceCredentialsInfo')

const SourceCredentialsInfosSchema = z
  .array(SourceCredentialsInfoSchema)
  .openapi('SourceCredentialsInfos')

const ListSourceCredentialsOutputSchema = z
  .object({
    sourceCredentialsInfos: SourceCredentialsInfosSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes the authentication type, token ARN, and type of source provider for one set of credentials. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSourceCredentialsOutput')

const ListSourceCredentialsInputSchema = z
  .object({})
  .openapi({ title: 'ListSourceCredentialsInput' })
  .openapi('ListSourceCredentialsInput')

const PutResourcePolicyOutputSchema = z
  .object({
    resourceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the <code>Project</code> or <code>ReportGroup</code> resource that is associated with a resource policy. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyOutput')

const PutResourcePolicyInputSchema = z
  .object({
    policy: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A JSON-formatted resource policy. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share">Sharing a Project</a> and <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share">Sharing a Report Group</a> in the <i>CodeBuild User Guide</i>. ',
        }),
    ),
    resourceArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the <code>Project</code> or <code>ReportGroup</code> resource you want to associate with a resource policy. ',
        }),
    ),
  })
  .openapi({ required: ['policy', 'resourceArn'], title: 'PutResourcePolicyInput' })
  .openapi('PutResourcePolicyInput')

const RetryBuildOutputSchema = z
  .object({ build: BuildSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RetryBuildOutput')

const RetryBuildInputSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'Specifies the identifier of the build to restart.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'RetryBuildInput', required: [] })
  .openapi('RetryBuildInput')

const RetryBuildBatchOutputSchema = z
  .object({ buildBatch: BuildBatchSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RetryBuildBatchOutput')

const RetryBuildBatchTypeSchema = z
  .enum(['RETRY_ALL_BUILDS', 'RETRY_FAILED_BUILDS'])
  .openapi('RetryBuildBatchType')

const RetryBuildBatchInputSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'Specifies the identifier of the batch build to restart.' }),
    ).exactOptional(),
    retryType: RetryBuildBatchTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of retry to perform.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'RetryBuildBatchInput', required: [] })
  .openapi('RetryBuildBatchInput')

const StartBuildOutputSchema = z
  .object({
    build: BuildSchema.and(
      z.any().openapi({ description: 'Information about the build to be run.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBuildOutput')

const StartBuildInputSchema = z
  .object({
    projectName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the CodeBuild build project to start running a build.',
        }),
    ),
    secondarySourcesOverride: ProjectSourcesSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectSource</code> objects. ' }),
    ).exactOptional(),
    secondarySourcesVersionOverride: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            " An array of <code>ProjectSourceVersion</code> objects that specify one or more versions of the project's secondary sources to be used for this build only. ",
        }),
    ).exactOptional(),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:</p> <dl> <dt>CodeCommit</dt> <dd> <p>The commit ID, branch, or Git tag to use.</p> </dd> <dt>GitHub</dt> <dd> <p>The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Bitbucket</dt> <dd> <p>The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Amazon S3</dt> <dd> <p>The version ID of the object that represents the build input ZIP file to use.</p> </dd> </dl> <p>If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ).exactOptional(),
    artifactsOverride: ProjectArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Build output artifact settings that override, for this build only, the latest ones already defined in the build project.',
        }),
    ).exactOptional(),
    secondaryArtifactsOverride: ProjectArtifactsListSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectArtifacts</code> objects. ' }),
    ).exactOptional(),
    environmentVariablesOverride: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.',
        }),
    ).exactOptional(),
    sourceTypeOverride: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A source input type, for this build, that overrides the source input defined in the build project.',
        }),
    ).exactOptional(),
    sourceLocationOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A location that overrides, for this build, the source location for the one defined in the build project.',
        }),
    ).exactOptional(),
    sourceAuthOverride: SourceAuthSchema.and(
      z
        .any()
        .openapi({
          description:
            "An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket or GitHub.",
        }),
    ).exactOptional(),
    gitCloneDepthOverride: GitCloneDepthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.',
        }),
    ).exactOptional(),
    gitSubmodulesConfigOverride: GitSubmodulesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the Git submodules configuration for this build of an CodeBuild build project. ',
        }),
    ).exactOptional(),
    buildspecOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project.</p> <p> If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>',
        }),
    ).exactOptional(),
    insecureSslOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.",
        }),
    ).exactOptional(),
    reportBuildStatusOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Set to true to report to your source provider the status of a build\'s start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p> <p>To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p> <note> <p> The status of a build triggered by a webhook is always reported to your source provider. </p> </note>',
        }),
    ).exactOptional(),
    buildStatusConfigOverride: BuildStatusConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or <code>BITBUCKET</code>.',
        }),
    ).exactOptional(),
    environmentTypeOverride: EnvironmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container type for this build that overrides the one specified in the build project.',
        }),
    ).exactOptional(),
    imageOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an image for this build that overrides the one specified in the build project.',
        }),
    ).exactOptional(),
    computeTypeOverride: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a compute type for this build that overrides the one specified in the build project.',
        }),
    ).exactOptional(),
    certificateOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a certificate for this build that overrides the one specified in the build project.',
        }),
    ).exactOptional(),
    cacheOverride: ProjectCacheSchema.and(
      z
        .any()
        .openapi({
          description:
            'A ProjectCache object specified for this build that overrides the one defined in the build project.',
        }),
    ).exactOptional(),
    serviceRoleOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a service role for this build that overrides the one specified in the build project.',
        }),
    ).exactOptional(),
    privilegedModeOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Enable this flag to override privileged mode in the build project.',
        }),
    ).exactOptional(),
    timeoutInMinutesOverride: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this build only, the latest setting already defined in the build project.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutesOverride: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of minutes a build is allowed to be queued before it times out. ',
        }),
    ).exactOptional(),
    encryptionKeyOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) that overrides the one specified in the build project. The CMK key encrypts the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
        }),
    ).exactOptional(),
    logsConfigOverride: LogsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Log settings for this build that override the log settings defined in the build project. ',
        }),
    ).exactOptional(),
    registryCredentialOverride: RegistryCredentialSchema.and(
      z.any().openapi({ description: ' The credentials for access to a private registry. ' }),
    ).exactOptional(),
    imagePullCredentialsTypeOverride: ImagePullCredentialsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of credentials CodeBuild uses to pull images in your build. There are two valid values: </p> <dl> <dt>CODEBUILD</dt> <dd> <p>Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.</p> </dd> <dt>SERVICE_ROLE</dt> <dd> <p>Specifies that CodeBuild uses your build project's service role. </p> </dd> </dl> <p>When using a cross-account or private registry image, you must use <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image, you must use <code>CODEBUILD</code> credentials. </p>",
        }),
    ).exactOptional(),
    debugSessionEnabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if session debugging is enabled for this build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'StartBuildInput' })
  .openapi('StartBuildInput')

const StartBuildBatchOutputSchema = z
  .object({
    buildBatch: BuildBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildBatch</code> object that contains information about the batch build.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBuildBatchOutput')

const StartBuildBatchInputSchema = z
  .object({
    projectName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the project.' }),
    ),
    secondarySourcesOverride: ProjectSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectSource</code> objects that override the secondary sources defined in the batch build project.',
        }),
    ).exactOptional(),
    secondarySourcesVersionOverride: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectSourceVersion</code> objects that override the secondary source versions in the batch build project.',
        }),
    ).exactOptional(),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The version of the batch build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:</p> <dl> <dt>CodeCommit</dt> <dd> <p>The commit ID, branch, or Git tag to use.</p> </dd> <dt>GitHub</dt> <dd> <p>The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Bitbucket</dt> <dd> <p>The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </dd> <dt>Amazon S3</dt> <dd> <p>The version ID of the object that represents the build input ZIP file to use.</p> </dd> </dl> <p>If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ).exactOptional(),
    artifactsOverride: ProjectArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectArtifacts</code> objects that contains information about the build output artifact overrides for the build project.',
        }),
    ).exactOptional(),
    secondaryArtifactsOverride: ProjectArtifactsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ProjectArtifacts</code> objects that override the secondary artifacts defined in the batch build project.',
        }),
    ).exactOptional(),
    environmentVariablesOverride: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>EnvironmentVariable</code> objects that override, or add to, the environment variables defined in the batch build project.',
        }),
    ).exactOptional(),
    sourceTypeOverride: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source input type that overrides the source input defined in the batch build project.',
        }),
    ).exactOptional(),
    sourceLocationOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A location that overrides, for this batch build, the source location defined in the batch build project.',
        }),
    ).exactOptional(),
    sourceAuthOverride: SourceAuthSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>SourceAuth</code> object that overrides the one defined in the batch build project. This override applies only if the build project's source is BitBucket or GitHub.",
        }),
    ).exactOptional(),
    gitCloneDepthOverride: GitCloneDepthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any previous depth of history defined in the batch build project.',
        }),
    ).exactOptional(),
    gitSubmodulesConfigOverride: GitSubmodulesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>GitSubmodulesConfig</code> object that overrides the Git submodules configuration for this batch build.',
        }),
    ).exactOptional(),
    buildspecOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project.</p> <p>If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>',
        }),
    ).exactOptional(),
    insecureSslOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.",
        }),
    ).exactOptional(),
    reportBuildBatchStatusOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set to <code>true</code> to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p> <note> <p>The status of a build triggered by a webhook is always reported to your source provider. </p> </note>",
        }),
    ).exactOptional(),
    environmentTypeOverride: EnvironmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container type for this batch build that overrides the one specified in the batch build project.',
        }),
    ).exactOptional(),
    imageOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an image for this batch build that overrides the one specified in the batch build project.',
        }),
    ).exactOptional(),
    computeTypeOverride: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a compute type for this batch build that overrides the one specified in the batch build project.',
        }),
    ).exactOptional(),
    certificateOverride: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a certificate for this batch build that overrides the one specified in the batch build project.',
        }),
    ).exactOptional(),
    cacheOverride: ProjectCacheSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>ProjectCache</code> object that specifies cache overrides.',
        }),
    ).exactOptional(),
    serviceRoleOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a service role for this batch build that overrides the one specified in the batch build project.',
        }),
    ).exactOptional(),
    privilegedModeOverride: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Enable this flag to override privileged mode in the batch build project.',
        }),
    ).exactOptional(),
    buildTimeoutInMinutesOverride: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description: 'Overrides the build timeout specified in the batch build project.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutesOverride: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes a batch build is allowed to be queued before it times out.',
        }),
    ).exactOptional(),
    encryptionKeyOverride: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project. The CMK key encrypts the build output artifacts.</p> <note> <p>You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>).</p>",
        }),
    ).exactOptional(),
    logsConfigOverride: LogsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>LogsConfig</code> object that override the log settings defined in the batch build project.',
        }),
    ).exactOptional(),
    registryCredentialOverride: RegistryCredentialSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>RegistryCredential</code> object that overrides credentials for access to a private registry.',
        }),
    ).exactOptional(),
    imagePullCredentialsTypeOverride: ImagePullCredentialsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values: </p> <dl> <dt>CODEBUILD</dt> <dd> <p>Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.</p> </dd> <dt>SERVICE_ROLE</dt> <dd> <p>Specifies that CodeBuild uses your build project's service role. </p> </dd> </dl> <p>When using a cross-account or private registry image, you must use <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image, you must use <code>CODEBUILD</code> credentials. </p>",
        }),
    ).exactOptional(),
    buildBatchConfigOverride: ProjectBuildBatchConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>BuildBatchConfigOverride</code> object that contains batch build configuration overrides.',
        }),
    ).exactOptional(),
    debugSessionEnabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies if session debugging is enabled for this batch build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'StartBuildBatchInput' })
  .openapi('StartBuildBatchInput')

const StopBuildOutputSchema = z
  .object({
    build: BuildSchema.and(
      z.any().openapi({ description: 'Information about the build.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopBuildOutput')

const StopBuildInputSchema = z
  .object({
    id: NonEmptyStringSchema.and(z.any().openapi({ description: 'The ID of the build.' })),
  })
  .openapi({ required: ['id'], title: 'StopBuildInput' })
  .openapi('StopBuildInput')

const StopBuildBatchOutputSchema = z
  .object({ buildBatch: BuildBatchSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StopBuildBatchOutput')

const StopBuildBatchInputSchema = z
  .object({
    id: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the batch build to stop.' }),
    ),
  })
  .openapi({ required: ['id'], title: 'StopBuildBatchInput' })
  .openapi('StopBuildBatchInput')

const UpdateProjectOutputSchema = z
  .object({
    project: ProjectSchema.and(
      z.any().openapi({ description: 'Information about the build project that was changed.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProjectOutput')

const UpdateProjectInputSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the build project.</p> <note> <p>You cannot change a build project's name.</p> </note>",
        }),
    ),
    description: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'A new or replacement description of the build project.' }),
    ).exactOptional(),
    source: ProjectSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be changed about the build input source code for the build project.',
        }),
    ).exactOptional(),
    secondarySources: ProjectSourcesSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectSource</code> objects. ' }),
    ).exactOptional(),
    sourceVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: </p> <ul> <li> <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon S3: the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p> For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html\">Source Version Sample with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>",
        }),
    ).exactOptional(),
    secondarySourceVersions: ProjectSecondarySourceVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take over these <code>secondarySourceVersions</code> (at the project level). ',
        }),
    ).exactOptional(),
    artifacts: ProjectArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be changed about the build output artifacts for the build project.',
        }),
    ).exactOptional(),
    secondaryArtifacts: ProjectArtifactsListSchema.and(
      z.any().openapi({ description: ' An array of <code>ProjectArtifact</code> objects. ' }),
    ).exactOptional(),
    cache: ProjectCacheSchema.and(
      z
        .any()
        .openapi({
          description:
            'Stores recently used information so that it can be quickly accessed at a later time.',
        }),
    ).exactOptional(),
    environment: ProjectEnvironmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information to be changed about the build environment for the build project.',
        }),
    ).exactOptional(),
    serviceRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replacement ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.',
        }),
    ).exactOptional(),
    timeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replacement value in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed.',
        }),
    ).exactOptional(),
    queuedTimeoutInMinutes: TimeOutSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of minutes a build is allowed to be queued before it times out. ',
        }),
    ).exactOptional(),
    encryptionKey: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/&lt;alias-name&gt;</code>). </p>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An updated list of tag key and value pairs associated with this build project.</p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.</p>',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'VpcConfig enables CodeBuild to access resources in an Amazon VPC.',
        }),
    ).exactOptional(),
    badgeEnabled: WrapperBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge.",
        }),
    ).exactOptional(),
    logsConfig: LogsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about logs for the build project. A project can create logs in CloudWatch Logs, logs in an S3 bucket, or both. ',
        }),
    ).exactOptional(),
    fileSystemLocations: ProjectFileSystemLocationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>, <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System. ',
        }),
    ).exactOptional(),
    buildBatchConfig: ProjectBuildBatchConfigSchema.exactOptional(),
    concurrentBuildLimit: WrapperIntSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of concurrent builds that are allowed for this project.</p> <p>New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.</p> <p>To remove this limit, set this value to -1.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'UpdateProjectInput' })
  .openapi('UpdateProjectInput')

const UpdateProjectVisibilityOutputSchema = z
  .object({
    projectArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the build project.' }),
    ).exactOptional(),
    publicProjectAlias: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the project identifier used with the public build APIs. ',
        }),
    ).exactOptional(),
    projectVisibility: ProjectVisibilityTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProjectVisibilityOutput')

const UpdateProjectVisibilityInputSchema = z
  .object({
    projectArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the build project.' }),
    ),
    projectVisibility: ProjectVisibilityTypeSchema,
    resourceAccessRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectArn', 'projectVisibility'], title: 'UpdateProjectVisibilityInput' })
  .openapi('UpdateProjectVisibilityInput')

const UpdateReportGroupOutputSchema = z
  .object({
    reportGroup: ReportGroupSchema.and(
      z.any().openapi({ description: ' Information about the updated report group. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReportGroupOutput')

const UpdateReportGroupInputSchema = z
  .object({
    arn: NonEmptyStringSchema.and(
      z.any().openapi({ description: ' The ARN of the report group to update. ' }),
    ),
    exportConfig: ReportExportConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Used to specify an updated export type. Valid values are: </p> <ul> <li> <p> <code>S3</code>: The report results are exported to an S3 bucket. </p> </li> <li> <p> <code>NO_EXPORT</code>: The report results are not exported. </p> </li> </ul>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> An updated list of tag key and value pairs associated with this report group. </p> <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateReportGroupInput' })
  .openapi('UpdateReportGroupInput')

const UpdateWebhookOutputSchema = z
  .object({
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description:
            " Information about a repository's webhook that is associated with a project in CodeBuild. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookOutput')

const UpdateWebhookInputSchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the CodeBuild project.' }),
    ),
    branchFilter: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p> It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>',
        }),
    ).exactOptional(),
    rotateSecret: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. ",
        }),
    ).exactOptional(),
    filterGroups: FilterGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of arrays of <code>WebhookFilter</code> objects used to determine if a webhook event can trigger a build. A filter group must contain at least one <code>EVENT</code> <code>WebhookFilter</code>. ',
        }),
    ).exactOptional(),
    buildType: WebhookBuildTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of build this webhook will trigger.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'UpdateWebhookInput' })
  .openapi('UpdateWebhookInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetCodeBuild20161006BatchDeleteBuildsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds',
  description: 'Deletes one or more builds.',
  operationId: 'BatchDeleteBuilds',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchDeleteBuilds')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchDeleteBuilds'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDeleteBuildsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteBuildsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006BatchGetBuildBatchesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches',
  description: 'Retrieves information about one or more batch builds.',
  operationId: 'BatchGetBuildBatches',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchGetBuildBatches')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchGetBuildBatches'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetBuildBatchesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetBuildBatchesOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006BatchGetBuildsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds',
  description: 'Gets information about one or more builds.',
  operationId: 'BatchGetBuilds',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchGetBuilds')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchGetBuilds'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetBuildsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetBuildsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006BatchGetProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects',
  description: 'Gets information about one or more build projects.',
  operationId: 'BatchGetProjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchGetProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchGetProjects'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetProjectsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetProjectsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006BatchGetReportGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups',
  description: ' Returns an array of report groups. ',
  operationId: 'BatchGetReportGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchGetReportGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchGetReportGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetReportGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetReportGroupsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006BatchGetReportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.BatchGetReports',
  description: ' Returns an array of reports. ',
  operationId: 'BatchGetReports',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.BatchGetReports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.BatchGetReports'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetReportsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetReportsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006CreateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.CreateProject',
  description: 'Creates a build project.',
  operationId: 'CreateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.CreateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.CreateProject'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateProjectInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'AccountLimitExceededException',
      content: { 'application/json': { schema: AccountLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006CreateReportGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup',
  description: ' Creates a report group. A report group contains a collection of reports. ',
  operationId: 'CreateReportGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.CreateReportGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.CreateReportGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReportGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReportGroupOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'AccountLimitExceededException',
      content: { 'application/json': { schema: AccountLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006CreateWebhookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.CreateWebhook',
  description:
    '<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project\'s Settings</a>.</p> </important>',
  operationId: 'CreateWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.CreateWebhook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.CreateWebhook'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateWebhookInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWebhookOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'OAuthProviderException',
      content: { 'application/json': { schema: OAuthProviderExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteBuildBatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch',
  description: 'Deletes a batch build.',
  operationId: 'DeleteBuildBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteBuildBatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteBuildBatch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBuildBatchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBuildBatchOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteProject',
  description: ' Deletes a build project. When you delete a project, its builds are not deleted. ',
  operationId: 'DeleteProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteProject'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteProjectInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteReportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteReport',
  description: ' Deletes a report. ',
  operationId: 'DeleteReport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteReport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteReport'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteReportInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReportOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteReportGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup',
  description:
    'Deletes a report group. Before you delete a report group, you must delete its reports. ',
  operationId: 'DeleteReportGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteReportGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteReportGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteReportGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReportGroupOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy',
  description: ' Deletes a resource policy that is identified by its resource ARN. ',
  operationId: 'DeleteResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteSourceCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials',
  description: ' Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. ',
  operationId: 'DeleteSourceCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteSourceCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteSourceCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSourceCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSourceCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DeleteWebhookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook',
  description:
    'For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.',
  operationId: 'DeleteWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DeleteWebhook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DeleteWebhook'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteWebhookInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWebhookOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OAuthProviderException',
      content: { 'application/json': { schema: OAuthProviderExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DescribeCodeCoveragesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages',
  description: 'Retrieves one or more code coverage reports.',
  operationId: 'DescribeCodeCoverages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DescribeCodeCoverages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DescribeCodeCoverages'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCodeCoveragesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCodeCoveragesOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006DescribeTestCasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases',
  description: ' Returns a list of details about test cases for a report. ',
  operationId: 'DescribeTestCases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.DescribeTestCases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.DescribeTestCases'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTestCasesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTestCasesOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006GetReportGroupTrendRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend',
  description: 'Analyzes and accumulates test report values for the specified test reports.',
  operationId: 'GetReportGroupTrend',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.GetReportGroupTrend')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.GetReportGroupTrend'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetReportGroupTrendInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReportGroupTrendOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006GetResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy',
  description: ' Gets a resource policy that is identified by its resource ARN. ',
  operationId: 'GetResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.GetResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.GetResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourcePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePolicyOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ImportSourceCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials',
  description:
    ' Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. ',
  operationId: 'ImportSourceCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ImportSourceCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ImportSourceCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportSourceCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportSourceCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'AccountLimitExceededException',
      content: { 'application/json': { schema: AccountLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006InvalidateProjectCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache',
  description: 'Resets the cache for a project.',
  operationId: 'InvalidateProjectCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.InvalidateProjectCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.InvalidateProjectCache'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InvalidateProjectCacheInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InvalidateProjectCacheOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListBuildBatchesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches',
  description: 'Retrieves the identifiers of your build batches in the current region.',
  operationId: 'ListBuildBatches',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListBuildBatches')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListBuildBatches'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBuildBatchesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBuildBatchesOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListBuildBatchesForProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject',
  description: 'Retrieves the identifiers of the build batches for a specific project.',
  operationId: 'ListBuildBatchesForProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListBuildBatchesForProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListBuildBatchesForProject'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBuildBatchesForProjectInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBuildBatchesForProjectOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListBuildsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListBuilds',
  description: 'Gets a list of build IDs, with each build ID representing a single build.',
  operationId: 'ListBuilds',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListBuilds')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListBuilds'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListBuildsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBuildsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListBuildsForProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject',
  description:
    'Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.',
  operationId: 'ListBuildsForProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListBuildsForProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListBuildsForProject'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBuildsForProjectInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBuildsForProjectOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages',
  description: 'Gets information about Docker images that are managed by CodeBuild.',
  operationId: 'ListCuratedEnvironmentImages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListCuratedEnvironmentImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListCuratedEnvironmentImages'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListCuratedEnvironmentImagesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCuratedEnvironmentImagesOutputSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListProjects',
  description:
    'Gets a list of build project names, with each build project name representing a single build project.',
  operationId: 'ListProjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListProjects'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListProjectsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListReportGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListReportGroups',
  description:
    ' Gets a list ARNs for the report groups in the current Amazon Web Services account. ',
  operationId: 'ListReportGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListReportGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListReportGroups'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReportGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportGroupsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListReportsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListReports',
  description:
    ' Returns a list of ARNs for the reports in the current Amazon Web Services account. ',
  operationId: 'ListReports',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListReports')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListReports'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListReportsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListReportsForReportGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup',
  description:
    ' Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. ',
  operationId: 'ListReportsForReportGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListReportsForReportGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListReportsForReportGroup'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListReportsForReportGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportsForReportGroupOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListSharedProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects',
  description:
    ' Gets a list of projects that are shared with other Amazon Web Services accounts or users. ',
  operationId: 'ListSharedProjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListSharedProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListSharedProjects'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSharedProjectsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSharedProjectsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListSharedReportGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups',
  description:
    ' Gets a list of report groups that are shared with other Amazon Web Services accounts or users. ',
  operationId: 'ListSharedReportGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListSharedReportGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListSharedReportGroups'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSharedReportGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSharedReportGroupsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006ListSourceCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials',
  description: ' Returns a list of <code>SourceCredentialsInfo</code> objects. ',
  operationId: 'ListSourceCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.ListSourceCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.ListSourceCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSourceCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSourceCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006PutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy',
  description:
    ' Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. ',
  operationId: 'PutResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.PutResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourcePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006RetryBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.RetryBuild',
  description: 'Restarts a build.',
  operationId: 'RetryBuild',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.RetryBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.RetryBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RetryBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetryBuildOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccountLimitExceededException',
      content: { 'application/json': { schema: AccountLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006RetryBuildBatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch',
  description: 'Restarts a failed batch build. Only batch builds that have failed can be retried.',
  operationId: 'RetryBuildBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.RetryBuildBatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.RetryBuildBatch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RetryBuildBatchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetryBuildBatchOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006StartBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.StartBuild',
  description: 'Starts running a build.',
  operationId: 'StartBuild',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.StartBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.StartBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartBuildOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccountLimitExceededException',
      content: { 'application/json': { schema: AccountLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006StartBuildBatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch',
  description: 'Starts a batch build for a project.',
  operationId: 'StartBuildBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.StartBuildBatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.StartBuildBatch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartBuildBatchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartBuildBatchOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006StopBuildRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.StopBuild',
  description: 'Attempts to stop running a build.',
  operationId: 'StopBuild',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.StopBuild')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.StopBuild'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopBuildInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopBuildOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006StopBuildBatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch',
  description: 'Stops a running batch build.',
  operationId: 'StopBuildBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.StopBuildBatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.StopBuildBatch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopBuildBatchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopBuildBatchOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006UpdateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.UpdateProject',
  description: 'Changes the settings of a build project.',
  operationId: 'UpdateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.UpdateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.UpdateProject'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateProjectInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006UpdateProjectVisibilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility',
  description:
    '<p>Changes the public visibility for a project. The project\'s build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project\'s build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>',
  operationId: 'UpdateProjectVisibility',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.UpdateProjectVisibility')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.UpdateProjectVisibility'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProjectVisibilityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectVisibilityOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006UpdateReportGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup',
  description: ' Updates a report group. ',
  operationId: 'UpdateReportGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.UpdateReportGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.UpdateReportGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateReportGroupInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateReportGroupOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeBuild20161006UpdateWebhookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook',
  description:
    '<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>',
  operationId: 'UpdateWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeBuild_20161006.UpdateWebhook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeBuild_20161006.UpdateWebhook'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateWebhookInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWebhookOutputSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OAuthProviderException',
      content: { 'application/json': { schema: OAuthProviderExceptionSchema } },
    },
  },
})
