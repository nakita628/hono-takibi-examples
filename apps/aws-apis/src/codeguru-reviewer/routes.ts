import { createRoute, z } from '@hono/zod-openapi'

const NameSchema = z
  .string()
  .regex(/^\S[\w.-]*$/)
  .min(1)
  .max(100)
  .openapi('Name')

const CodeCommitRepositorySchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon Web Services CodeCommit repository. For more information, see <a href="https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName">repositoryName</a> in the <i>Amazon Web Services CodeCommit API Reference</i>.',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      'Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.',
  })
  .openapi('CodeCommitRepository')

const ConnectionArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+/)
  .min(0)
  .max(256)
  .openapi('ConnectionArn')

const OwnerSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('Owner')

const ThirdPartySourceRepositorySchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the third party source repository.' }),
    ),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.',
        }),
    ),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, this can be the username or Amazon Web Services account ID ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'ConnectionArn', 'Owner'],
    description:
      'Information about a third-party source repository connected to CodeGuru Reviewer.',
  })
  .openapi('ThirdPartySourceRepository')

const S3BucketNameSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3RepositorySchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the repository in the S3 bucket.' }),
    ),
    BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'BucketName'],
    description: 'Information about a repository in an S3 bucket.',
  })
  .openapi('S3Repository')

type RepositoryType = {
  CodeCommit?: z.infer<typeof CodeCommitRepositorySchema> & { [key: string]: unknown }
  Bitbucket?: z.infer<typeof ThirdPartySourceRepositorySchema> & { [key: string]: unknown }
  GitHubEnterpriseServer?: z.infer<typeof ThirdPartySourceRepositorySchema> & {
    [key: string]: unknown
  }
  S3Bucket?: z.infer<typeof S3RepositorySchema>
}

const CommitIdSchema = z.string().min(6).max(64).openapi('CommitId')

const CommitDiffSourceCodeTypeSchema = z
  .object({
    SourceCommit: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA of the source commit used to generate a commit diff. This field is required for a pull request code review.',
        }),
    ).exactOptional(),
    DestinationCommit: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA of the destination commit used to generate a commit diff. This field is required for a pull request code review.',
        }),
    ).exactOptional(),
    MergeBaseCommit: CommitIdSchema.and(
      z.any().openapi({ description: 'The SHA of the merge base of a commit.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review.',
    required: [],
  })
  .openapi('CommitDiffSourceCodeType')

const BranchNameSchema = z.string().min(1).max(256).openapi('BranchName')

const RepositoryHeadSourceCodeTypeSchema = z
  .object({
    BranchName: BranchNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the branch in an associated repository. The <code>RepositoryHeadSourceCodeType</code> specifies the tip of this branch.',
        }),
    ),
  })
  .openapi({
    required: ['BranchName'],
    description:
      'A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository.',
  })
  .openapi('RepositoryHeadSourceCodeType')

const BranchDiffSourceCodeTypeSchema = z
  .object({
    SourceBranchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The source branch for a diff in an associated repository.' }),
    ),
    DestinationBranchName: BranchNameSchema.and(
      z
        .any()
        .openapi({ description: 'The destination branch for a diff in an associated repository.' }),
    ),
  })
  .openapi({
    required: ['SourceBranchName', 'DestinationBranchName'],
    description:
      'A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a code diff between a source and destination branch in an associated repository.',
  })
  .openapi('BranchDiffSourceCodeType')

const SourceCodeArtifactsObjectKeySchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(1024)
  .openapi('SourceCodeArtifactsObjectKey')

const BuildArtifactsObjectKeySchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(1024)
  .openapi('BuildArtifactsObjectKey')

const CodeArtifactsSchema = z
  .object({
    SourceCodeArtifactsObjectKey: SourceCodeArtifactsObjectKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 object key for a source code .zip file. This is required for all code reviews.',
        }),
    ),
    BuildArtifactsObjectKey: BuildArtifactsObjectKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 object key for a build artifacts .zip file that contains .jar or .class files. This is required for a code review with security analysis. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html">Create code reviews with GitHub Actions</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceCodeArtifactsObjectKey'],
    description:
      '<p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul>',
  })
  .openapi('CodeArtifacts')

const S3RepositoryDetailsSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. ',
        }),
    ).exactOptional(),
    CodeArtifacts: CodeArtifactsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the S3 object key for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.',
    required: [],
  })
  .openapi('S3RepositoryDetails')

const S3BucketRepositorySchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository when the <code>ProviderType</code> is <code>S3Bucket</code>.',
        }),
    ),
    Details: S3RepositoryDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>S3RepositoryDetails</code> object that specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the S3 object keys for a source code .zip file and for a build artifacts .zip file.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files.',
  })
  .openapi('S3BucketRepository')

const RequestIdSchema = z.string().min(1).max(64).openapi('RequestId')

const RequesterSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('Requester')

const EventNameSchema = z
  .string()
  .regex(/^[ \-A-Z_a-z]+$/)
  .min(1)
  .max(32)
  .openapi('EventName')

const EventStateSchema = z
  .string()
  .regex(/^[ \-A-Z_a-z]+$/)
  .min(1)
  .max(32)
  .openapi('EventState')

const EventInfoSchema = z
  .object({
    Name: EventNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event. The possible names are <code>pull_request</code>, <code>workflow_dispatch</code>, <code>schedule</code>, and <code>push</code> ',
        }),
    ).exactOptional(),
    State: EventStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of an event. The state might be open, closed, or another state.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an event. The event might be a push, pull request, scheduled request, or another type of event.',
    required: [],
  })
  .openapi('EventInfo')

const VendorNameSchema = z.enum(['GitHub', 'GitLab', 'NativeS3']).openapi('VendorName')

const RequestMetadataSchema = z
  .object({
    RequestId: RequestIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the request. This is required for a pull request code review.',
        }),
    ).exactOptional(),
    Requester: RequesterSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier, such as a name or account ID, that is associated with the requester. The <code>Requester</code> is used to capture the <code>author/actor</code> name of the event request.',
        }),
    ).exactOptional(),
    EventInfo: EventInfoSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the event associated with a code review.' }),
    ).exactOptional(),
    VendorName: VendorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository vendor used to upload code to an S3 bucket for a CI/CD code review. For example, if code and artifacts are uploaded to an S3 bucket for a CI/CD code review by GitHub scripts from a GitHub repository, then the repository association\'s <code>ProviderType</code> is <code>S3Bucket</code> and the CI/CD repository vendor name is GitHub. For more information, see the definition for <code>ProviderType</code> in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.',
    required: [],
  })
  .openapi('RequestMetadata')

type SourceCodeTypeType = {
  CommitDiff?: z.infer<typeof CommitDiffSourceCodeTypeSchema> & { [key: string]: unknown }
  RepositoryHead?: z.infer<typeof RepositoryHeadSourceCodeTypeSchema>
  BranchDiff?: z.infer<typeof BranchDiffSourceCodeTypeSchema> & { [key: string]: unknown }
  S3BucketRepository?: z.infer<typeof S3BucketRepositorySchema> & { [key: string]: unknown }
  RequestMetadata?: z.infer<typeof RequestMetadataSchema> & { [key: string]: unknown }
}

const AssociationIdSchema = z.string().min(1).max(64).openapi('AssociationId')

const ArnSchema = z
  .string()
  .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
  .min(1)
  .max(1600)
  .openapi('Arn')

const ProviderTypeSchema = z
  .enum(['CodeCommit', 'GitHub', 'Bitbucket', 'GitHubEnterpriseServer', 'S3Bucket'])
  .openapi('ProviderType')

const RepositoryAssociationStateSchema = z
  .enum(['Associated', 'Associating', 'Failed', 'Disassociating', 'Disassociated'])
  .openapi('RepositoryAssociationState')

const StateReasonSchema = z.string().min(0).max(256).openapi('StateReason')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const KMSKeyIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(2048)
  .openapi('KMSKeyId')

const EncryptionOptionSchema = z
  .enum(['AWS_OWNED_CMK', 'CUSTOMER_MANAGED_CMK'])
  .openapi('EncryptionOption')

const KMSKeyDetailsSchema = z
  .object({
    KMSKeyId: KMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services KMS key that is associated with a repository association.',
        }),
    ).exactOptional(),
    EncryptionOption: EncryptionOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul>',
    required: [],
  })
  .openapi('KMSKeyDetails')

const RepositoryAssociationSchema = z
  .object({
    AssociationId: AssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the repository association.' }),
    ).exactOptional(),
    AssociationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) identifying the repository association.',
        }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.',
        }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The provider type of the repository association.' }),
    ).exactOptional(),
    State: RepositoryAssociationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the repository association.</p> <p>The valid repository association states are:</p> <ul> <li> <p> <b>Associated</b>: The repository association is complete.</p> </li> <li> <p> <b>Associating</b>: CodeGuru Reviewer is:</p> <ul> <li> <p>Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.</p> <note> <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p> </note> </li> <li> <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p> </li> </ul> </li> <li> <p> <b>Failed</b>: The repository failed to associate or disassociate.</p> </li> <li> <p> <b>Disassociating</b>: CodeGuru Reviewer is removing the repository\'s pull request notifications and source code access.</p> </li> <li> <p> <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StateReason: StateReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of why the repository association is in the current state.',
        }),
    ).exactOptional(),
    LastUpdatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the repository association was last updated.',
        }),
    ).exactOptional(),
    CreatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the repository association was created.',
        }),
    ).exactOptional(),
    KMSKeyDetails: KMSKeyDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <code>KMSKeyDetails</code> object that contains:</p> <ul> <li> <p>The encryption option for this repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with this repository association.</p> </li> </ul>',
        }),
    ).exactOptional(),
    S3RepositoryDetails: S3RepositoryDetailsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object.',
    required: [],
  })
  .openapi('RepositoryAssociation')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const AssociateRepositoryResponseSchema = z
  .object({
    RepositoryAssociation: RepositoryAssociationSchema.and(
      z.any().openapi({ description: 'Information about the repository association.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateRepositoryResponse')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const JobStateSchema = z.enum(['Completed', 'Pending', 'Failed', 'Deleting']).openapi('JobState')

const TypeSchema = z.enum(['PullRequest', 'RepositoryAnalysis']).openapi('Type')

const PullRequestIdSchema = z.string().min(1).max(64).openapi('PullRequestId')

const SourceCodeTypeSchema: z.ZodType<SourceCodeTypeType> = z
  .lazy(() =>
    z
      .object({
        CommitDiff: CommitDiffSourceCodeTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a commit diff created by a pull request on an associated repository.',
            }),
        ).exactOptional(),
        RepositoryHead: RepositoryHeadSourceCodeTypeSchema.exactOptional(),
        BranchDiff: BranchDiffSourceCodeTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a source branch name and a destination branch name in an associated repository.',
            }),
        ).exactOptional(),
        S3BucketRepository: S3BucketRepositorySchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about an associated repository in an S3 bucket that includes its name and an <code>S3RepositoryDetails</code> object. The <code>S3RepositoryDetails</code> object includes the name of an S3 bucket, an S3 key for a source code .zip file, and an S3 key for a build artifacts .zip file. <code>S3BucketRepository</code> is required in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> for <code>S3BucketRepository</code> based code reviews.',
            }),
        ).exactOptional(),
        RequestMetadata: RequestMetadataSchema.and(
          z
            .any()
            .openapi({
              description:
                'Metadata that is associated with a code review. This applies to any type of code review supported by CodeGuru Reviewer. The <code>RequestMetadaa</code> field captures any event metadata. For example, it might capture metadata associated with an event trigger, such as a push or a pull request.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Specifies the source code that is analyzed in a code review.',
        required: [],
      }),
  )
  .openapi('SourceCodeType')

const AssociationArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  )
  .min(1)
  .max(1600)
  .openapi('AssociationArn')

const LinesOfCodeCountSchema = z.int().openapi('LinesOfCodeCount')

const FindingsCountSchema = z.int().openapi('FindingsCount')

const MetricsSchema = z
  .object({
    MeteredLinesOfCodeCount: LinesOfCodeCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>MeteredLinesOfCodeCount</code> is the number of lines of code in the repository where the code review happened. This does not include non-code lines such as comments and blank lines.',
        }),
    ).exactOptional(),
    SuppressedLinesOfCodeCount: LinesOfCodeCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>SuppressedLinesOfCodeCount</code> is the number of lines of code in the repository where the code review happened that CodeGuru Reviewer did not analyze. The lines suppressed in the analysis is based on the <code>excludeFiles</code> variable in the <code>aws-codeguru-reviewer.yml</code> file. This number does not include non-code lines such as comments and blank lines. ',
        }),
    ).exactOptional(),
    FindingsCount: FindingsCountSchema.and(
      z.any().openapi({ description: 'Total number of recommendations found in the code review.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the statistics from the code review.', required: [] })
  .openapi('Metrics')

const AnalysisTypeSchema = z.enum(['Security', 'CodeQuality']).openapi('AnalysisType')

const AnalysisTypesSchema = z.array(AnalysisTypeSchema).openapi('AnalysisTypes')

const ConfigFileStateSchema = z
  .enum(['Present', 'Absent', 'PresentWithErrors'])
  .openapi('ConfigFileState')

const CodeReviewSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the code review.' }),
    ).exactOptional(),
    CodeReviewArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
        }),
    ).exactOptional(),
    RepositoryName: NameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.',
        }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of repository that contains the reviewed code (for example, GitHub or Bitbucket).',
        }),
    ).exactOptional(),
    State: JobStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StateReason: StateReasonSchema.and(
      z.any().openapi({ description: 'The reason for the state of the code review.' }),
    ).exactOptional(),
    CreatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the code review was created.',
        }),
    ).exactOptional(),
    LastUpdatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the code review was last updated.',
        }),
    ).exactOptional(),
    Type: TypeSchema.and(
      z.any().openapi({ description: 'The type of code review.' }),
    ).exactOptional(),
    PullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The pull request ID for the code review.' }),
    ).exactOptional(),
    SourceCodeType: SourceCodeTypeSchema.and(
      z.any().openapi({ description: 'The type of the source code for the code review.' }),
    ).exactOptional(),
    AssociationArn: AssociationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> that contains the reviewed source code. You can retrieve associated repository ARNs by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
        }),
    ).exactOptional(),
    Metrics: MetricsSchema.and(
      z.any().openapi({ description: 'The statistics from the code review.' }),
    ).exactOptional(),
    AnalysisTypes: AnalysisTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of analysis performed during a repository analysis or a pull request review. You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.',
        }),
    ).exactOptional(),
    ConfigFileState: ConfigFileStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The state of the <code>aws-codeguru-reviewer.yml</code> configuration file that allows the configuration of the CodeGuru Reviewer analysis. The file either exists, doesn't exist, or exists with errors at the root directory of your repository.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a code review. A code review belongs to the associated repository that contains the reviewed code.',
    required: [],
  })
  .openapi('CodeReview')

const CreateCodeReviewResponseSchema = z
  .object({ CodeReview: CodeReviewSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCodeReviewResponse')

const RepositoryAnalysisSchema = z
  .object({
    RepositoryHead: RepositoryHeadSourceCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository.',
        }),
    ).exactOptional(),
    SourceCodeType: SourceCodeTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.',
    required: [],
  })
  .openapi('RepositoryAnalysis')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DescribeCodeReviewResponseSchema = z
  .object({
    CodeReview: CodeReviewSchema.and(
      z.any().openapi({ description: 'Information about the code review.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCodeReviewResponse')

const RecommendationIdSchema = z.string().min(1).max(64).openapi('RecommendationId')

const ReactionSchema = z.enum(['ThumbsUp', 'ThumbsDown']).openapi('Reaction')

const ReactionsSchema = z.array(ReactionSchema).min(0).max(1).openapi('Reactions')

const UserIdSchema = z.string().min(1).max(256).openapi('UserId')

const RecommendationFeedbackSchema = z
  .object({
    CodeReviewArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
        }),
    ).exactOptional(),
    RecommendationId: RecommendationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.',
        }),
    ).exactOptional(),
    Reactions: ReactionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback.',
        }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the user that made the API call.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>',
        }),
    ).exactOptional(),
    CreatedTimeStamp: TimeStampSchema.and(
      z.any().openapi({ description: 'The time at which the feedback was created.' }),
    ).exactOptional(),
    LastUpdatedTimeStamp: TimeStampSchema.and(
      z.any().openapi({ description: 'The time at which the feedback was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the recommendation feedback.', required: [] })
  .openapi('RecommendationFeedback')

const DescribeRecommendationFeedbackResponseSchema = z
  .object({
    RecommendationFeedback: RecommendationFeedbackSchema.and(
      z.any().openapi({ description: 'The recommendation feedback given by the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecommendationFeedbackResponse')

const DescribeRepositoryAssociationResponseSchema = z
  .object({
    RepositoryAssociation: RepositoryAssociationSchema.and(
      z.any().openapi({ description: 'Information about the repository association.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRepositoryAssociationResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const DisassociateRepositoryResponseSchema = z
  .object({
    RepositoryAssociation: RepositoryAssociationSchema.and(
      z.any().openapi({ description: 'Information about the disassociated repository.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateRepositoryResponse')

const MetricsSummarySchema = z
  .object({
    MeteredLinesOfCodeCount: LinesOfCodeCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions, this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files, <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of code for a total of 2,725 lines of code.',
        }),
    ).exactOptional(),
    SuppressedLinesOfCodeCount: LinesOfCodeCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lines of code suppressed in the code review based on the <code>excludeFiles</code> element in the <code>aws-codeguru-reviewer.yml</code> file. For full repository analyses, this number includes all lines of code in the files that are suppressed. For pull requests, this number only includes the <i>changed</i> lines of code that are suppressed. In both cases, this number does not include non-code lines such as comments and import statements. For example, if you initiate a full repository analysis on a repository containing 5 files, each file with 100 lines of code, and 2 files are listed as excluded in the <code>aws-codeguru-reviewer.yml</code> file, then <code>SuppressedLinesOfCodeCount</code> returns 200 (2 * 100) as the total number of lines of code suppressed. However, if you submit a pull request for the same repository, then <code>SuppressedLinesOfCodeCount</code> only includes the lines in the 2 files that changed. If only 1 of the 2 files changed in the pull request, then <code>SuppressedLinesOfCodeCount</code> returns 100 (1 * 100) as the total number of lines of code suppressed.',
        }),
    ).exactOptional(),
    FindingsCount: FindingsCountSchema.and(
      z.any().openapi({ description: 'Total number of recommendations found in the code review.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about metrics summaries.', required: [] })
  .openapi('MetricsSummary')

const CodeReviewSummarySchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the code review.' }),
    ).exactOptional(),
    CodeReviewArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
        }),
    ).exactOptional(),
    RepositoryName: NameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ).exactOptional(),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.',
        }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The provider type of the repository association.' }),
    ).exactOptional(),
    State: JobStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the code review.</p> <p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CreatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the code review was created.',
        }),
    ).exactOptional(),
    LastUpdatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the code review was last updated.',
        }),
    ).exactOptional(),
    Type: TypeSchema.and(
      z.any().openapi({ description: 'The type of the code review.' }),
    ).exactOptional(),
    PullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The pull request ID for the code review.' }),
    ).exactOptional(),
    MetricsSummary: MetricsSummarySchema.and(
      z.any().openapi({ description: 'The statistics from the code review.' }),
    ).exactOptional(),
    SourceCodeType: SourceCodeTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Information about the summary of the code review.', required: [] })
  .openapi('CodeReviewSummary')

const CodeReviewSummariesSchema = z.array(CodeReviewSummarySchema).openapi('CodeReviewSummaries')

const NextTokenSchema = z.string().min(1).max(2048).openapi('NextToken')

const ListCodeReviewsResponseSchema = z
  .object({
    CodeReviewSummaries: CodeReviewSummariesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of code reviews that meet the criteria of the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCodeReviewsResponse')

const RecommendationFeedbackSummarySchema = z
  .object({
    RecommendationId: RecommendationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.',
        }),
    ).exactOptional(),
    Reactions: ReactionsSchema.and(
      z
        .any()
        .openapi({
          description: 'List for storing reactions. Reactions are utf-8 text code for emojis.',
        }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the user that gave the feedback.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about recommendation feedback summaries.', required: [] })
  .openapi('RecommendationFeedbackSummary')

const RecommendationFeedbackSummariesSchema = z
  .array(RecommendationFeedbackSummarySchema)
  .openapi('RecommendationFeedbackSummaries')

const ListRecommendationFeedbackResponseSchema = z
  .object({
    RecommendationFeedbackSummaries: RecommendationFeedbackSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'Recommendation feedback summaries corresponding to the code review ARN.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecommendationFeedbackResponse')

const FilePathSchema = z.string().min(1).max(1024).openapi('FilePath')

const LineNumberSchema = z.int().openapi('LineNumber')

const TextSchema = z.string().min(1).max(5000).openapi('Text')

const RecommendationCategorySchema = z
  .enum([
    'AWSBestPractices',
    'AWSCloudFormationIssues',
    'DuplicateCode',
    'CodeMaintenanceIssues',
    'ConcurrencyIssues',
    'InputValidations',
    'PythonBestPractices',
    'JavaBestPractices',
    'ResourceLeaks',
    'SecurityIssues',
    'CodeInconsistencies',
  ])
  .openapi('RecommendationCategory')

const RuleIdSchema = z
  .string()
  .regex(/^\S+\/[a-zA-Z0-9-]+@v\d+\.\d+$/)
  .min(1)
  .max(64)
  .openapi('RuleId')

const RuleNameSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('RuleName')

const ShortDescriptionSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(200)
  .openapi('ShortDescription')

const LongDescriptionSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(1000)
  .openapi('LongDescription')

const RuleTagSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(50)
  .openapi('RuleTag')

const RuleTagsSchema = z.array(RuleTagSchema).min(1).max(20).openapi('RuleTags')

const RuleMetadataSchema = z
  .object({
    RuleId: RuleIdSchema.and(
      z.any().openapi({ description: 'The ID of the rule.' }),
    ).exactOptional(),
    RuleName: RuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule.' }),
    ).exactOptional(),
    ShortDescription: ShortDescriptionSchema.and(
      z.any().openapi({ description: 'A short description of the rule.' }),
    ).exactOptional(),
    LongDescription: LongDescriptionSchema.and(
      z.any().openapi({ description: 'A long description of the rule.' }),
    ).exactOptional(),
    RuleTags: RuleTagsSchema.and(
      z.any().openapi({ description: 'Tags that are associated with the rule.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.",
    required: [],
  })
  .openapi('RuleMetadata')

const SeveritySchema = z.enum(['Info', 'Low', 'Medium', 'High', 'Critical']).openapi('Severity')

const RecommendationSummarySchema = z
  .object({
    FilePath: FilePathSchema.and(
      z.any().openapi({ description: 'Name of the file on which a recommendation is provided.' }),
    ).exactOptional(),
    RecommendationId: RecommendationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.',
        }),
    ).exactOptional(),
    StartLine: LineNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Start line from where the recommendation is applicable in the source commit or source branch.',
        }),
    ).exactOptional(),
    EndLine: LineNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values are the same.',
        }),
    ).exactOptional(),
    Description: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the recommendation generated by CodeGuru Reviewer for the lines of code between the start line and the end line.',
        }),
    ).exactOptional(),
    RecommendationCategory: RecommendationCategorySchema.and(
      z.any().openapi({ description: 'The type of a recommendation.' }),
    ).exactOptional(),
    RuleMetadata: RuleMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            "Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.",
        }),
    ).exactOptional(),
    Severity: SeveritySchema.and(
      z
        .any()
        .openapi({
          description: 'The severity of the issue in the code that generated this recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about recommendations.', required: [] })
  .openapi('RecommendationSummary')

const RecommendationSummariesSchema = z
  .array(RecommendationSummarySchema)
  .openapi('RecommendationSummaries')

const ListRecommendationsResponseSchema = z
  .object({
    RecommendationSummaries: RecommendationSummariesSchema.and(
      z.any().openapi({ description: 'List of recommendations for the requested code review.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecommendationsResponse')

const RepositoryAssociationSummarySchema = z
  .object({
    AssociationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
        }),
    ).exactOptional(),
    ConnectionArn: ConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.',
        }),
    ).exactOptional(),
    LastUpdatedTimeStamp: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, since the repository association was last updated.',
        }),
    ).exactOptional(),
    AssociationId: AssociationIdSchema.and(
      z.any().openapi({ description: 'The repository association ID.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the repository association.' }),
    ).exactOptional(),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.',
        }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The provider type of the repository association.' }),
    ).exactOptional(),
    State: RepositoryAssociationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the repository association.</p> <p>The valid repository association states are:</p> <ul> <li> <p> <b>Associated</b>: The repository association is complete.</p> </li> <li> <p> <b>Associating</b>: CodeGuru Reviewer is:</p> <ul> <li> <p>Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.</p> <note> <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p> </note> </li> <li> <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p> </li> </ul> </li> <li> <p> <b>Failed</b>: The repository failed to associate or disassociate.</p> </li> <li> <p> <b>Disassociating</b>: CodeGuru Reviewer is removing the repository\'s pull request notifications and source code access.</p> </li> <li> <p> <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.',
    required: [],
  })
  .openapi('RepositoryAssociationSummary')

const RepositoryAssociationSummariesSchema = z
  .array(RepositoryAssociationSummarySchema)
  .openapi('RepositoryAssociationSummaries')

const ListRepositoryAssociationsResponseSchema = z
  .object({
    RepositoryAssociationSummaries: RepositoryAssociationSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of repository associations that meet the criteria of the request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListRecommendations</code> request. When the results of a <code>ListRecommendations</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRepositoryAssociationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutRecommendationFeedbackResponseSchema = z
  .object({})
  .openapi('PutRecommendationFeedbackResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const RepositorySchema: z.ZodType<RepositoryType> = z
  .lazy(() =>
    z
      .object({
        CodeCommit: CodeCommitRepositorySchema.and(
          z
            .any()
            .openapi({
              description: 'Information about an Amazon Web Services CodeCommit repository.',
            }),
        ).exactOptional(),
        Bitbucket: ThirdPartySourceRepositorySchema.and(
          z.any().openapi({ description: ' Information about a Bitbucket repository. ' }),
        ).exactOptional(),
        GitHubEnterpriseServer: ThirdPartySourceRepositorySchema.and(
          z
            .any()
            .openapi({ description: 'Information about a GitHub Enterprise Server repository.' }),
        ).exactOptional(),
        S3Bucket: S3RepositorySchema.exactOptional(),
      })
      .openapi({
        description:
          'Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.',
        required: [],
      }),
  )
  .openapi('Repository')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const AssociateRepositoryRequestSchema = z
  .object({
    Repository: RepositorySchema.and(
      z.any().openapi({ description: 'The repository to associate.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    KMSKeyDetails: KMSKeyDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <code>KMSKeyDetails</code> object that contains:</p> <ul> <li> <p>The encryption option for this repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with this repository association.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Repository'], title: 'AssociateRepositoryRequest' })
  .openapi('AssociateRepositoryRequest')

const CodeReviewNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_]*/)
  .min(1)
  .max(100)
  .openapi('CodeReviewName')

const CodeReviewTypeSchema = z
  .object({
    RepositoryAnalysis: RepositoryAnalysisSchema.and(
      z
        .any()
        .openapi({
          description:
            'A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.',
        }),
    ),
    AnalysisTypes: AnalysisTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'They types of analysis performed during a repository analysis or a pull request review. You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RepositoryAnalysis'],
    description:
      '<p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul>',
  })
  .openapi('CodeReviewType')

const CreateCodeReviewRequestSchema = z
  .object({
    Name: CodeReviewNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the code review. The name of each code review in your Amazon Web Services account must be unique.',
        }),
    ),
    RepositoryAssociationArn: AssociationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p> <p>A code review can only be created on an associated repository. This is the ARN of the associated repository.</p>',
        }),
    ),
    Type: CodeReviewTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of code review to create. This is specified using a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> object. You can create a code review only of type <code>RepositoryAnalysis</code>.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'RepositoryAssociationArn', 'Type'],
    title: 'CreateCodeReviewRequest',
  })
  .openapi('CreateCodeReviewRequest')

const DescribeCodeReviewRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeCodeReviewRequest' })
  .openapi('DescribeCodeReviewRequest')

const DescribeRecommendationFeedbackRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRecommendationFeedbackRequest' })
  .openapi('DescribeRecommendationFeedbackRequest')

const DescribeRepositoryAssociationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRepositoryAssociationRequest' })
  .openapi('DescribeRepositoryAssociationRequest')

const DisassociateRepositoryRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateRepositoryRequest' })
  .openapi('DisassociateRepositoryRequest')

const JobStatesSchema = z.array(JobStateSchema).min(1).max(3).openapi('JobStates')

const ListCodeReviewsMaxResultsSchema = z.int().min(1).max(100).openapi('ListCodeReviewsMaxResults')

const ProviderTypesSchema = z.array(ProviderTypeSchema).min(1).max(3).openapi('ProviderTypes')

const RepositoryNamesSchema = z.array(NameSchema).min(1).max(100).openapi('RepositoryNames')

const ListCodeReviewsRequestSchema = z
  .object({})
  .openapi({ title: 'ListCodeReviewsRequest' })
  .openapi('ListCodeReviewsRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const UserIdsSchema = z.array(UserIdSchema).min(1).max(100).openapi('UserIds')

const RecommendationIdsSchema = z
  .array(RecommendationIdSchema)
  .min(1)
  .max(100)
  .openapi('RecommendationIds')

const ListRecommendationFeedbackRequestSchema = z
  .object({})
  .openapi({ title: 'ListRecommendationFeedbackRequest' })
  .openapi('ListRecommendationFeedbackRequest')

const ListRecommendationsMaxResultsSchema = z
  .int()
  .min(1)
  .max(300)
  .openapi('ListRecommendationsMaxResults')

const ListRecommendationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRecommendationsRequest' })
  .openapi('ListRecommendationsRequest')

const RepositoryAssociationStatesSchema = z
  .array(RepositoryAssociationStateSchema)
  .min(1)
  .max(5)
  .openapi('RepositoryAssociationStates')

const NamesSchema = z.array(NameSchema).min(1).max(3).openapi('Names')

const OwnersSchema = z.array(OwnerSchema).min(1).max(3).openapi('Owners')

const ListRepositoryAssociationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRepositoryAssociationsRequest' })
  .openapi('ListRepositoryAssociationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutRecommendationFeedbackRequestSchema = z
  .object({
    CodeReviewArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
        }),
    ),
    RecommendationId: RecommendationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.',
        }),
    ),
    Reactions: ReactionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.',
        }),
    ),
  })
  .openapi({
    required: ['CodeReviewArn', 'RecommendationId', 'Reactions'],
    title: 'PutRecommendationFeedbackRequest',
  })
  .openapi('PutRecommendationFeedbackRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const getAssociationsRoute = createRoute({
  method: 'get',
  path: '/associations',
  description:
    'Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.',
  operationId: 'ListRepositoryAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ProviderType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ProviderTypeSchema).min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ProviderType',
            in: 'query',
            required: false,
            description: 'List of provider types to use as a filter.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ProviderType' },
              minItems: 1,
              maxItems: 3,
            },
          },
        }),
      State: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RepositoryAssociationStateSchema).min(1).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'State',
            in: 'query',
            required: false,
            description:
              '<p>List of repository association states to use as a filter.</p> <p>The valid repository association states are:</p> <ul> <li> <p> <b>Associated</b>: The repository association is complete.</p> </li> <li> <p> <b>Associating</b>: CodeGuru Reviewer is:</p> <ul> <li> <p>Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.</p> <note> <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p> </note> </li> <li> <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p> </li> </ul> </li> <li> <p> <b>Failed</b>: The repository failed to associate or disassociate.</p> </li> <li> <p> <b>Disassociating</b>: CodeGuru Reviewer is removing the repository\'s pull request notifications and source code access.</p> </li> <li> <p> <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/RepositoryAssociationState' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
      Name: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(NameSchema).min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Name',
            in: 'query',
            required: false,
            description: 'List of repository names to use as a filter.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Name' },
              minItems: 1,
              maxItems: 3,
            },
          },
        }),
      Owner: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(OwnerSchema).min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Owner',
            in: 'query',
            required: false,
            description:
              'List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository. ',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Owner' },
              minItems: 1,
              maxItems: 3,
            },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of repository association results returned by <code>ListRepositoryAssociations</code> in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to 100 results and a <code>nextToken</code> value if applicable. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositoryAssociationsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAssociationsRoute = createRoute({
  method: 'post',
  path: '/associations',
  description:
    '<p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository\'s pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>',
  operationId: 'AssociateRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Repository: z
                .object({
                  CodeCommit: CodeCommitRepositorySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about an Amazon Web Services CodeCommit repository.',
                      }),
                  ).exactOptional(),
                  Bitbucket: ThirdPartySourceRepositorySchema.and(
                    z.any().openapi({ description: ' Information about a Bitbucket repository. ' }),
                  ).exactOptional(),
                  GitHubEnterpriseServer: ThirdPartySourceRepositorySchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about a GitHub Enterprise Server repository.',
                      }),
                  ).exactOptional(),
                  S3Bucket: S3RepositorySchema.exactOptional(),
                })
                .openapi({
                  description:
                    'Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.',
                  required: [],
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[\w-]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
                }),
              KMSKeyDetails: z
                .object({
                  KMSKeyId: KMSKeyIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ID of the Amazon Web Services KMS key that is associated with a repository association.',
                      }),
                  ).exactOptional(),
                  EncryptionOption: EncryptionOptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul>',
                  required: [],
                }),
            })
            .openapi({ required: ['Repository'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateRepositoryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postCodereviewsRoute = createRoute({
  method: 'post',
  path: '/codereviews',
  description:
    'Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.',
  operationId: 'CreateCodeReview',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[a-zA-Z0-9-_]*/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The name of the code review. The name of each code review in your Amazon Web Services account must be unique.',
                }),
              RepositoryAssociationArn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
                )
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p> <p>A code review can only be created on an associated repository. This is the ARN of the associated repository.</p>',
                }),
              Type: z
                .object({
                  RepositoryAnalysis: RepositoryAnalysisSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.',
                      }),
                  ).exactOptional(),
                  AnalysisTypes: AnalysisTypesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'They types of analysis performed during a repository analysis or a pull request review. You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul>',
                  required: [],
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[\w-]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.',
                }),
            })
            .openapi({ required: ['Name', 'RepositoryAssociationArn', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCodeReviewResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getCodereviewsCodeReviewArnRoute = createRoute({
  method: 'get',
  path: '/codereviews/{CodeReviewArn}',
  description: 'Returns the metadata associated with the code review along with its status.',
  operationId: 'DescribeCodeReview',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeReviewArn: z
        .string()
        .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'CodeReviewArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:[a-z-]+:[\\w-]+$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCodeReviewResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getFeedbackCodeReviewArnRecommendationIdRoute = createRoute({
  method: 'get',
  path: '/feedback/{CodeReviewArn}#RecommendationId',
  description: 'Describes the customer feedback for a CodeGuru Reviewer recommendation.',
  operationId: 'DescribeRecommendationFeedback',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CodeReviewArn: z
        .string()
        .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'CodeReviewArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:[a-z-]+:[\\w-]+$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      RecommendationId: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'RecommendationId',
            in: 'query',
            required: true,
            description:
              'The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
      UserId: z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'UserId',
            in: 'query',
            required: false,
            description:
              '<p>Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecommendationFeedbackResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAssociationsAssociationArnRoute = createRoute({
  method: 'get',
  path: '/associations/{AssociationArn}',
  description:
    'Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.',
  operationId: 'DescribeRepositoryAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      AssociationArn: z
        .string()
        .regex(
          /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'AssociationArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRepositoryAssociationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteAssociationsAssociationArnRoute = createRoute({
  method: 'delete',
  path: '/associations/{AssociationArn}',
  description: 'Removes the association between Amazon CodeGuru Reviewer and a repository.',
  operationId: 'DisassociateRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      AssociationArn: z
        .string()
        .regex(
          /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'AssociationArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateRepositoryResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getCodereviewsTypeRoute = createRoute({
  method: 'get',
  path: '/codereviews#Type',
  description: 'Lists all the code reviews that the customer has created in the past 90 days.',
  operationId: 'ListCodeReviews',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ProviderTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ProviderTypeSchema).min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ProviderTypes',
            in: 'query',
            required: false,
            description:
              'List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from GitHub.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ProviderType' },
              minItems: 1,
              maxItems: 3,
            },
          },
        }),
      States: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(JobStateSchema).min(1).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'States',
            in: 'query',
            required: false,
            description:
              '<p>List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.</p> <p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/JobState' },
              minItems: 1,
              maxItems: 3,
            },
          },
        }),
      RepositoryNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(NameSchema).min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'RepositoryNames',
            in: 'query',
            required: false,
            description:
              'List of repository names for filtering that needs to be applied before displaying the result.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Name' },
              minItems: 1,
              maxItems: 100,
            },
          },
        }),
      Type: z
        .enum(['PullRequest', 'RepositoryAnalysis'])
        .openapi({
          param: {
            name: 'Type',
            in: 'query',
            required: true,
            description: 'The type of code reviews to list in the response.',
            schema: { type: 'string', enum: ['PullRequest', 'RepositoryAnalysis'] },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results that are returned per call. The default is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCodeReviewsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getFeedbackCodeReviewArnRecommendationFeedbackRoute = createRoute({
  method: 'get',
  path: '/feedback/{CodeReviewArn}/RecommendationFeedback',
  description:
    'Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.',
  operationId: 'ListRecommendationFeedback',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      NextToken: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results that are returned per call. The default is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      UserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserIdSchema).min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserIds',
            in: 'query',
            required: false,
            description:
              '<p>An Amazon Web Services user\'s account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/UserId' },
              minItems: 1,
              maxItems: 100,
            },
          },
        }),
      RecommendationIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RecommendationIdSchema).min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'RecommendationIds',
            in: 'query',
            required: false,
            description: 'Used to query the recommendation feedback for a given recommendation.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/RecommendationId' },
              minItems: 1,
              maxItems: 100,
            },
          },
        }),
    }),
    params: z.object({
      CodeReviewArn: z
        .string()
        .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'CodeReviewArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:[a-z-]+:[\\w-]+$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecommendationFeedbackResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getCodereviewsCodeReviewArnRecommendationsRoute = createRoute({
  method: 'get',
  path: '/codereviews/{CodeReviewArn}/Recommendations',
  description: 'Returns the list of all recommendations for a completed code review.',
  operationId: 'ListRecommendations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      NextToken: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'Pagination token.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(300),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results that are returned per call. The default is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 300 },
          },
        }),
    }),
    params: z.object({
      CodeReviewArn: z
        .string()
        .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'CodeReviewArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:[a-z-]+:[\\w-]+$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecommendationsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Returns the list of tags associated with an associated repository resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds one or more tags to an associated repository.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    '<p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putFeedbackRoute = createRoute({
  method: 'put',
  path: '/feedback',
  description:
    'Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.',
  operationId: 'PutRecommendationFeedback',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CodeReviewArn: z
                .string()
                .regex(/^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$/)
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. ',
                }),
              RecommendationId: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.',
                }),
              Reactions: z
                .array(ReactionSchema)
                .min(0)
                .max(1)
                .openapi({
                  description:
                    'List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.',
                }),
            })
            .openapi({ required: ['CodeReviewArn', 'RecommendationId', 'Reactions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecommendationFeedbackResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes a tag from an associated repository.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(
          /^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        )
        .min(1)
        .max(1600)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codeguru-reviewer:[^:\\s]+:[\\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'A list of the keys for each tag you want to remove from an associated repository.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
