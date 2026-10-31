import { createRoute, z } from '@hono/zod-openapi'

const RepositoryNameSchema = z
  .string()
  .regex(/^\S[\w.-]*$/)
  .min(1)
  .max(100)
  .openapi('RepositoryName')

const CodeCommitCodeDestinationSchema = z
  .object({
    name: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the AWS CodeCommit repository to be created in AWS CodeStar.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description:
      'Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.',
  })
  .openapi('CodeCommitCodeDestination')

const RepositoryDescriptionSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(1000)
  .openapi('RepositoryDescription')

const RepositoryTypeSchema = z
  .string()
  .regex(/^(user|organization|User|Organization)$/)
  .openapi('RepositoryType')

const RepositoryOwnerSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('RepositoryOwner')

const RepositoryIsPrivateSchema = z.boolean().openapi('RepositoryIsPrivate')

const RepositoryEnableIssuesSchema = z.boolean().openapi('RepositoryEnableIssues')

const GitHubPersonalTokenSchema = z.string().min(1).openapi('GitHubPersonalToken')

const GitHubCodeDestinationSchema = z
  .object({
    name: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the GitHub repository to be created in AWS CodeStar.' }),
    ),
    description: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Description for the GitHub repository to be created in AWS CodeStar. This description displays in GitHub after the repository is created.',
        }),
    ).exactOptional(),
    type: RepositoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.',
        }),
    ),
    owner: RepositoryOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should be owned by a GitHub organization, provide its name.',
        }),
    ),
    privateRepository: RepositoryIsPrivateSchema.and(
      z
        .any()
        .openapi({ description: 'Whether the GitHub repository is to be a private repository.' }),
    ),
    issuesEnabled: RepositoryEnableIssuesSchema.and(
      z.any().openapi({ description: 'Whether to enable issues for the GitHub repository.' }),
    ),
    token: GitHubPersonalTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The GitHub user's personal access token for the GitHub repository.",
        }),
    ),
  })
  .openapi({
    required: ['name', 'type', 'owner', 'privateRepository', 'issuesEnabled', 'token'],
    description:
      'Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.',
  })
  .openapi('GitHubCodeDestination')

type CodeDestinationType = {
  codeCommit?: z.infer<typeof CodeCommitCodeDestinationSchema> & { [key: string]: unknown }
  gitHub?: z.infer<typeof GitHubCodeDestinationSchema> & { [key: string]: unknown }
}

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[\w:\/-]+$/)
  .min(1)
  .max(256)
  .openapi('ClientRequestToken')

const AssociateTeamMemberResultSchema = z
  .object({
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user- or system-generated token from the initial request that can be used to repeat the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateTeamMemberResult')

const ProjectIdSchema = z
  .string()
  .regex(/^[a-z][a-z0-9-]+$/)
  .min(2)
  .max(15)
  .openapi('ProjectId')

const UserArnSchema = z
  .string()
  .regex(/^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$/)
  .min(32)
  .max(95)
  .openapi('UserArn')

const RoleSchema = z
  .string()
  .regex(/^(Owner|Viewer|Contributor)$/)
  .openapi('Role')

const RemoteAccessAllowedSchema = z.boolean().openapi('RemoteAccessAllowed')

const AssociateTeamMemberRequestSchema = z
  .object({
    projectId: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project to which you will add the IAM user.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user- or system-generated token that identifies the entity that requested the team member association to the project. This token can be used to repeat the request.',
        }),
    ).exactOptional(),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar project.',
        }),
    ),
    projectRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS CodeStar project role that will apply to this user. This role determines what actions a user can take in an AWS CodeStar project.',
        }),
    ),
    remoteAccessAllowed: RemoteAccessAllowedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the team member is allowed to use an SSH public/private key pair to remotely access project resources, for example Amazon EC2 instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectId', 'userArn', 'projectRole'],
    title: 'AssociateTeamMemberRequest',
  })
  .openapi('AssociateTeamMemberRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ProjectNotFoundExceptionSchema = z.any().openapi('ProjectNotFoundException')

const TeamMemberAlreadyAssociatedExceptionSchema = z
  .any()
  .openapi('TeamMemberAlreadyAssociatedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InvalidServiceRoleExceptionSchema = z.any().openapi('InvalidServiceRoleException')

const ProjectConfigurationExceptionSchema = z.any().openapi('ProjectConfigurationException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const ProjectArnSchema = z
  .string()
  .regex(/^arn:aws[^:\s]*:codestar:[^:\s]+:[0-9]{12}:project\/[a-z]([a-z0-9|-])+$/)
  .openapi('ProjectArn')

const ProjectTemplateIdSchema = z
  .string()
  .regex(
    /^arn:aws[^:\s]{0,5}:codestar:[^:\s]+::project-template(\/(github|codecommit))?\/[a-z0-9-]+$/,
  )
  .min(1)
  .openapi('ProjectTemplateId')

const CreateProjectResultSchema = z
  .object({
    id: ProjectIdSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    arn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the created project.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user- or system-generated token that identifies the entity that requested project creation.',
        }),
    ).exactOptional(),
    projectTemplateId: ProjectTemplateIdSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['id', 'arn'] })
  .openapi('CreateProjectResult')

const ProjectNameSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('ProjectName')

const ProjectDescriptionSchema = z
  .string()
  .regex(/^$|^\S(.*\S)?$/)
  .max(1024)
  .openapi('ProjectDescription')

const BucketNameSchema = z.string().min(3).max(63).openapi('BucketName')

const BucketKeySchema = z.string().openapi('BucketKey')

const S3LocationSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket name where the source code files provided with the project request are stored.',
        }),
    ).exactOptional(),
    bucketKey: BucketKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 object key where the source code files provided with the project request are stored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon S3 location where the source code files provided with the project request are stored.',
    required: [],
  })
  .openapi('S3Location')

const CodeSourceSchema = z
  .object({
    s3: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Amazon S3 location where the source code files provided with the project request are stored. ',
        }),
    ),
  })
  .openapi({
    required: ['s3'],
    description:
      'The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.',
  })
  .openapi('CodeSource')

const CodeDestinationSchema: z.ZodType<CodeDestinationType> = z
  .lazy(() =>
    z
      .object({
        codeCommit: CodeCommitCodeDestinationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.',
            }),
        ).exactOptional(),
        gitHub: GitHubCodeDestinationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.',
        required: [],
      }),
  )
  .openapi('CodeDestination')

const CodeSchema = z
  .object({
    source: CodeSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.',
        }),
    ),
    destination: CodeDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.',
        }),
    ),
  })
  .openapi({
    required: ['source', 'destination'],
    description:
      'Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.',
  })
  .openapi('Code')

const SourceCodeSchema = z.array(CodeSchema).openapi('SourceCode')

const ToolchainSourceSchema = z
  .object({
    s3: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket where the toolchain template file provided with the project request is stored.',
        }),
    ),
  })
  .openapi({
    required: ['s3'],
    description:
      'The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.',
  })
  .openapi('ToolchainSource')

const RoleArnSchema = z.string().min(1).max(1224).openapi('RoleArn')

const TemplateParameterValueSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(100)
  .openapi('TemplateParameterValue')

const TemplateParameterMapSchema = z
  .record(z.string(), TemplateParameterValueSchema)
  .refine((val) => Object.keys(val).length <= 25)
  .openapi('TemplateParameterMap')

const ToolchainSchema = z
  .object({
    source: ToolchainSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service role ARN for AWS CodeStar to use for the toolchain template during stack provisioning.',
        }),
    ).exactOptional(),
    stackParameters: TemplateParameterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of parameter overrides to be passed into the toolchain template during stack provisioning, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source'],
    description:
      'The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.',
  })
  .openapi('Toolchain')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('TagValue')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const CreateProjectRequestSchema = z
  .object({
    name: ProjectNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The display name for the project to be created in AWS CodeStar.',
        }),
    ),
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project to be created in AWS CodeStar.' }),
    ),
    description: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the project, if any.' }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user- or system-generated token that identifies the entity that requested project creation. This token can be used to repeat the request.',
        }),
    ).exactOptional(),
    sourceCode: SourceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the Code objects submitted with the project request. If this parameter is specified, the request must also include the toolchain parameter.',
        }),
    ).exactOptional(),
    toolchain: ToolchainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the toolchain template file submitted with the project request. If this parameter is specified, the request must also include the sourceCode parameter.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags created for the project.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'id'], title: 'CreateProjectRequest' })
  .openapi('CreateProjectRequest')

const ProjectAlreadyExistsExceptionSchema = z.any().openapi('ProjectAlreadyExistsException')

const ProjectCreationFailedExceptionSchema = z.any().openapi('ProjectCreationFailedException')

const UserProfileDisplayNameSchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(64)
  .openapi('UserProfileDisplayName')

const EmailSchema = z
  .string()
  .regex(/^[\w-.+]+@[\w-.+]+$/)
  .min(3)
  .max(128)
  .openapi('Email')

const SshPublicKeySchema = z
  .string()
  .regex(/^[\t\r\n\u0020-\u00FF]*$/)
  .max(16384)
  .openapi('SshPublicKey')

const CreatedTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreatedTimestamp')

const LastModifiedTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('LastModifiedTimestamp')

const CreateUserProfileResultSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user in IAM.' }),
    ),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is displayed as the friendly name for the user in AWS CodeStar.',
        }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that is displayed as part of the user's profile in AWS CodeStar.",
        }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSH public key associated with the user in AWS CodeStar. This is the public portion of the public/private keypair the user can use to access project resources if a project owner allows the user remote access to those resources.',
        }),
    ).exactOptional(),
    createdTimestamp: CreatedTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the user profile was created, in timestamp format.' }),
    ).exactOptional(),
    lastModifiedTimestamp: LastModifiedTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the user profile was last modified, in timestamp format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['userArn'] })
  .openapi('CreateUserProfileResult')

const CreateUserProfileRequestSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user in IAM.' }),
    ),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that will be displayed as the friendly name for the user in AWS CodeStar. ',
        }),
    ),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that will be displayed as part of the user's profile in AWS CodeStar.",
        }),
    ),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['userArn', 'displayName', 'emailAddress'],
    title: 'CreateUserProfileRequest',
  })
  .openapi('CreateUserProfileRequest')

const UserProfileAlreadyExistsExceptionSchema = z.any().openapi('UserProfileAlreadyExistsException')

const StackIdSchema = z
  .string()
  .regex(/^arn:aws[^:\s]*:cloudformation:[^:\s]+:[0-9]{12}:stack\/[^:\s]+\/[^:\s]+$/)
  .openapi('StackId')

const DeleteProjectResultSchema = z
  .object({
    stackId: StackIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the primary stack in AWS CloudFormation that will be deleted as part of deleting the project and its resources.',
        }),
    ).exactOptional(),
    projectArn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the deleted project.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteProjectResult')

const DeleteStackSchema = z.boolean().openapi('DeleteStack')

const DeleteProjectRequestSchema = z
  .object({
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project to be deleted in AWS CodeStar.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user- or system-generated token that identifies the entity that requested project deletion. This token can be used to repeat the request. ',
        }),
    ).exactOptional(),
    deleteStack: DeleteStackSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to send a delete request for the primary stack in AWS CloudFormation originally used to generate the project and its resources. This option will delete all AWS resources for the project (except for any buckets in Amazon S3) as well as deleting the project itself. Recommended for most use cases.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['id'], title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DeleteUserProfileResultSchema = z
  .object({
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.',
        }),
    ),
  })
  .openapi({ required: ['userArn'] })
  .openapi('DeleteUserProfileResult')

const DeleteUserProfileRequestSchema = z
  .object({
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.',
        }),
    ),
  })
  .openapi({ required: ['userArn'], title: 'DeleteUserProfileRequest' })
  .openapi('DeleteUserProfileRequest')

const StateSchema = z
  .string()
  .regex(
    /^(CreateInProgress|CreateComplete|CreateFailed|DeleteComplete|DeleteFailed|DeleteInProgress|UpdateComplete|UpdateInProgress|UpdateFailed|Unknown)$/,
  )
  .openapi('State')

const ReasonSchema = z
  .string()
  .regex(/^$|^\S(.*\S)?$/)
  .max(1024)
  .openapi('Reason')

const ProjectStatusSchema = z
  .object({
    state: StateSchema.and(
      z
        .any()
        .openapi({ description: 'The phase of completion for a project creation or deletion.' }),
    ),
    reason: ReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the case of a project creation or deletion failure, a reason for the failure.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['state'],
    description: 'An indication of whether a project creation or deletion is failed or successful.',
  })
  .openapi('ProjectStatus')

const DescribeProjectResultSchema = z
  .object({
    name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The display name for the project.' }),
    ).exactOptional(),
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project.' }),
    ).exactOptional(),
    arn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the project.' }),
    ).exactOptional(),
    description: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the project, if any.' }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user- or system-generated token that identifies the entity that requested project creation. ',
        }),
    ).exactOptional(),
    createdTimeStamp: CreatedTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the project was created, in timestamp format.',
        }),
    ).exactOptional(),
    stackId: StackIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the primary stack in AWS CloudFormation used to generate resources for the project.',
        }),
    ).exactOptional(),
    projectTemplateId: ProjectTemplateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID for the AWS CodeStar project template used to create the project.',
        }),
    ).exactOptional(),
    status: ProjectStatusSchema.and(
      z.any().openapi({ description: 'The project creation or deletion status.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProjectResult')

const DescribeProjectRequestSchema = z
  .object({ id: ProjectIdSchema.and(z.any().openapi({ description: 'The ID of the project.' })) })
  .openapi({ required: ['id'], title: 'DescribeProjectRequest' })
  .openapi('DescribeProjectRequest')

const DescribeUserProfileResultSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user.' }),
    ),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name shown for the user in AWS CodeStar projects. For example, this could be set to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the display name, the first character that appears after the space will be used as the second character in the user initial icon. The initial icon displays a maximum of two characters, so a display name with more than one space (for example "Mary Jane Major") would generate an initial icon using the first character and the first character after the space ("MJ", not "MM").',
        }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z.any().openapi({ description: 'The email address for the user. Optional.' }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSH public key associated with the user. This SSH public key is associated with the user profile, and can be used in conjunction with the associated private key for access to project resources, such as Amazon EC2 instances, if a project owner grants remote access to those resources.',
        }),
    ).exactOptional(),
    createdTimestamp: CreatedTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the user profile was created in AWS CodeStar, in timestamp format.',
        }),
    ),
    lastModifiedTimestamp: LastModifiedTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the user profile was last modified, in timestamp format.',
        }),
    ),
  })
  .openapi({ required: ['userArn', 'createdTimestamp', 'lastModifiedTimestamp'] })
  .openapi('DescribeUserProfileResult')

const DescribeUserProfileRequestSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user.' }),
    ),
  })
  .openapi({ required: ['userArn'], title: 'DescribeUserProfileRequest' })
  .openapi('DescribeUserProfileRequest')

const UserProfileNotFoundExceptionSchema = z.any().openapi('UserProfileNotFoundException')

const DisassociateTeamMemberResultSchema = z.object({}).openapi('DisassociateTeamMemberResult')

const DisassociateTeamMemberRequestSchema = z
  .object({
    projectId: ProjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the AWS CodeStar project from which you want to remove a team member.',
        }),
    ),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from the project.',
        }),
    ),
  })
  .openapi({ required: ['projectId', 'userArn'], title: 'DisassociateTeamMemberRequest' })
  .openapi('DisassociateTeamMemberRequest')

const ProjectSummarySchema = z
  .object({
    projectId: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project.' }),
    ).exactOptional(),
    projectArn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the metadata for a project.', required: [] })
  .openapi('ProjectSummary')

const ProjectsListSchema = z.array(ProjectSummarySchema).openapi('ProjectsList')

const PaginationTokenSchema = z
  .string()
  .regex(/^[\w\/+=]+$/)
  .min(1)
  .max(512)
  .openapi('PaginationToken')

const ListProjectsResultSchema = z
  .object({
    projects: ProjectsListSchema.and(z.any().openapi({ description: 'A list of projects.' })),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token to use when requesting the next set of results, if there are more results to be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projects'] })
  .openapi('ListProjectsResult')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListProjectsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token to be used to return the next set of results, if the results cannot be returned in one response.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of data that can be contained in a single set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProjectsRequest', required: [] })
  .openapi('ListProjectsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ResourceIdSchema = z
  .string()
  .regex(/^arn\:aws\:\S.*\:.*/)
  .min(11)
  .openapi('ResourceId')

const ResourceSchema = z
  .object({
    id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
  })
  .openapi({ required: ['id'], description: 'Information about a resource for a project.' })
  .openapi('Resource')

const ResourcesResultSchema = z.array(ResourceSchema).openapi('ResourcesResult')

const ListResourcesResultSchema = z
  .object({
    resources: ResourcesResultSchema.and(
      z.any().openapi({ description: 'An array of resources associated with the project. ' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token to use when requesting the next set of results, if there are more results to be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesResult')

const ListResourcesRequestSchema = z
  .object({
    projectId: ProjectIdSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token for the next set of results, if the results cannot be returned in one response.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of data that can be contained in a single set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectId'], title: 'ListResourcesRequest' })
  .openapi('ListResourcesRequest')

const ListTagsForProjectResultSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags for the project.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForProjectResult')

const ListTagsForProjectRequestSchema = z
  .object({
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project to get tags for.' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['id'], title: 'ListTagsForProjectRequest' })
  .openapi('ListTagsForProjectRequest')

const TeamMemberSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user in IAM.' }),
    ),
    projectRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role assigned to the user in the project. Project roles have different levels of access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with Teams</a> in the <i>AWS CodeStar User Guide</i>. ',
        }),
    ),
    remoteAccessAllowed: RemoteAccessAllowedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the user is allowed to remotely access project resources using an SSH public/private key pair.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['userArn', 'projectRole'],
    description: 'Information about a team member in a project.',
  })
  .openapi('TeamMember')

const TeamMemberResultSchema = z.array(TeamMemberSchema).openapi('TeamMemberResult')

const ListTeamMembersResultSchema = z
  .object({
    teamMembers: TeamMemberResultSchema.and(
      z.any().openapi({ description: 'A list of team member objects for the project.' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token to use when requesting the next set of results, if there are more results to be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['teamMembers'] })
  .openapi('ListTeamMembersResult')

const ListTeamMembersRequestSchema = z
  .object({
    projectId: ProjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the project for which you want to list team members.' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token for the next set of results, if the results cannot be returned in one response.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of team members you want returned in a response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectId'], title: 'ListTeamMembersRequest' })
  .openapi('ListTeamMembersRequest')

const UserProfileSummarySchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user in IAM.' }),
    ).exactOptional(),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name of a user in AWS CodeStar. For example, this could be set to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the display name, the first character that appears after the space will be used as the second character in the user initial icon. The initial icon displays a maximum of two characters, so a display name with more than one space (for example "Mary Jane Major") would generate an initial icon using the first character and the first character after the space ("MJ", not "MM").',
        }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z.any().openapi({ description: 'The email address associated with the user.' }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Information about a user's profile in AWS CodeStar.", required: [] })
  .openapi('UserProfileSummary')

const UserProfilesListSchema = z.array(UserProfileSummarySchema).openapi('UserProfilesList')

const ListUserProfilesResultSchema = z
  .object({
    userProfiles: UserProfilesListSchema.and(
      z
        .any()
        .openapi({
          description: 'All the user profiles configured in AWS CodeStar for an AWS account.',
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token to use when requesting the next set of results, if there are more results to be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['userProfiles'] })
  .openapi('ListUserProfilesResult')

const ListUserProfilesRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The continuation token for the next set of results, if the results cannot be returned in one response.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a response.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListUserProfilesRequest', required: [] })
  .openapi('ListUserProfilesRequest')

const TagProjectResultSchema = z
  .object({
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags for the project.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagProjectResult')

const TagProjectRequestSchema = z
  .object({
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project you want to add a tag to.' }),
    ),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags you want to add to the project.' }),
    ),
  })
  .openapi({ required: ['id', 'tags'], title: 'TagProjectRequest' })
  .openapi('TagProjectRequest')

const UntagProjectResultSchema = z.object({}).openapi('UntagProjectResult')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const UntagProjectRequestSchema = z
  .object({
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project to remove tags from.' }),
    ),
    tags: TagKeysSchema.and(
      z.any().openapi({ description: 'The tags to remove from the project.' }),
    ),
  })
  .openapi({ required: ['id', 'tags'], title: 'UntagProjectRequest' })
  .openapi('UntagProjectRequest')

const UpdateProjectResultSchema = z.object({}).openapi('UpdateProjectResult')

const UpdateProjectRequestSchema = z
  .object({
    id: ProjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the project you want to update.' }),
    ),
    name: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project you want to update.' }),
    ).exactOptional(),
    description: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the project, if any.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['id'], title: 'UpdateProjectRequest' })
  .openapi('UpdateProjectRequest')

const UpdateTeamMemberResultSchema = z
  .object({
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user whose team membership attributes were updated.',
        }),
    ).exactOptional(),
    projectRole: RoleSchema.and(
      z.any().openapi({ description: 'The project role granted to the user.' }),
    ).exactOptional(),
    remoteAccessAllowed: RemoteAccessAllowedSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether a team member is allowed to remotely access project resources using the SSH public key associated with the user's profile.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTeamMemberResult')

const UpdateTeamMemberRequestSchema = z
  .object({
    projectId: ProjectIdSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user for whom you want to change team membership attributes.',
        }),
    ),
    projectRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role assigned to the user in the project. Project roles have different levels of access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with Teams</a> in the <i>AWS CodeStar User Guide</i>.',
        }),
    ).exactOptional(),
    remoteAccessAllowed: RemoteAccessAllowedSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether a team member is allowed to remotely access project resources using the SSH public key associated with the user's profile. Even if this is set to True, the user must associate a public key with their profile before the user can access resources.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectId', 'userArn'], title: 'UpdateTeamMemberRequest' })
  .openapi('UpdateTeamMemberRequest')

const TeamMemberNotFoundExceptionSchema = z.any().openapi('TeamMemberNotFoundException')

const UpdateUserProfileResultSchema = z
  .object({
    userArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user in IAM.' }),
    ),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is displayed as the friendly name for the user in AWS CodeStar.',
        }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that is displayed as part of the user's profile in AWS CodeStar.",
        }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSH public key associated with the user in AWS CodeStar. This is the public portion of the public/private keypair the user can use to access project resources if a project owner allows the user remote access to those resources.',
        }),
    ).exactOptional(),
    createdTimestamp: CreatedTimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the user profile was created, in timestamp format.' }),
    ).exactOptional(),
    lastModifiedTimestamp: LastModifiedTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the user profile was last modified, in timestamp format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['userArn'] })
  .openapi('UpdateUserProfileResult')

const UpdateUserProfileRequestSchema = z
  .object({
    userArn: UserArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that will be displayed as the friendly name for the user in AWS CodeStar.',
        }),
    ),
    displayName: UserProfileDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is displayed as the friendly name for the user in AWS CodeStar.',
        }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that is displayed as part of the user's profile in AWS CodeStar.",
        }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "The SSH public key associated with the user in AWS CodeStar. If a project owner allows the user remote access to project resources, this public key will be used along with the user's private key for SSH access.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['userArn'], title: 'UpdateUserProfileRequest' })
  .openapi('UpdateUserProfileRequest')

const TemplateParameterKeySchema = z
  .string()
  .regex(/^\S(.*\S)?$/)
  .min(1)
  .max(30)
  .openapi('TemplateParameterKey')

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

export const postXAmzTargetCodeStar20170419AssociateTeamMemberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.AssociateTeamMember',
  description: 'Adds an IAM user to the team for an AWS CodeStar project.',
  operationId: 'AssociateTeamMember',
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
        .literal('CodeStar_20170419.AssociateTeamMember')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.AssociateTeamMember'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateTeamMemberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateTeamMemberResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    482: {
      description: 'TeamMemberAlreadyAssociatedException',
      content: { 'application/json': { schema: TeamMemberAlreadyAssociatedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
    485: {
      description: 'ProjectConfigurationException',
      content: { 'application/json': { schema: ProjectConfigurationExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419CreateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.CreateProject',
  description:
    'Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.',
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
        .literal('CodeStar_20170419.CreateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.CreateProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResultSchema } },
    },
    480: {
      description: 'ProjectAlreadyExistsException',
      content: { 'application/json': { schema: ProjectAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ProjectCreationFailedException',
      content: { 'application/json': { schema: ProjectCreationFailedExceptionSchema } },
    },
    484: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
    485: {
      description: 'ProjectConfigurationException',
      content: { 'application/json': { schema: ProjectConfigurationExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419CreateUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.CreateUserProfile',
  description:
    "Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.",
  operationId: 'CreateUserProfile',
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
        .literal('CodeStar_20170419.CreateUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.CreateUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserProfileResultSchema } },
    },
    480: {
      description: 'UserProfileAlreadyExistsException',
      content: { 'application/json': { schema: UserProfileAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419DeleteProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.DeleteProject',
  description:
    'Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.',
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
        .literal('CodeStar_20170419.DeleteProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.DeleteProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResultSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419DeleteUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.DeleteUserProfile',
  description:
    'Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.',
  operationId: 'DeleteUserProfile',
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
        .literal('CodeStar_20170419.DeleteUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.DeleteUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserProfileResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419DescribeProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.DescribeProject',
  description: 'Describes a project and its resources.',
  operationId: 'DescribeProject',
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
        .literal('CodeStar_20170419.DescribeProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.DescribeProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
    483: {
      description: 'ProjectConfigurationException',
      content: { 'application/json': { schema: ProjectConfigurationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419DescribeUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.DescribeUserProfile',
  description: 'Describes a user in AWS CodeStar and the user attributes across all projects.',
  operationId: 'DescribeUserProfile',
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
        .literal('CodeStar_20170419.DescribeUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.DescribeUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserProfileResultSchema } },
    },
    480: {
      description: 'UserProfileNotFoundException',
      content: { 'application/json': { schema: UserProfileNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419DisassociateTeamMemberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember',
  description:
    "Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.",
  operationId: 'DisassociateTeamMember',
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
        .literal('CodeStar_20170419.DisassociateTeamMember')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.DisassociateTeamMember'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateTeamMemberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateTeamMemberResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419ListProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.ListProjects',
  description: 'Lists all projects in AWS CodeStar associated with your AWS account.',
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
        .literal('CodeStar_20170419.ListProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.ListProjects'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListProjectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419ListResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.ListResources',
  description: 'Lists resources associated with a project in AWS CodeStar.',
  operationId: 'ListResources',
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
        .literal('CodeStar_20170419.ListResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.ListResources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419ListTagsForProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.ListTagsForProject',
  description: 'Gets the tags for a project.',
  operationId: 'ListTagsForProject',
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
        .literal('CodeStar_20170419.ListTagsForProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.ListTagsForProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForProjectResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419ListTeamMembersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.ListTeamMembers',
  description: 'Lists all team members associated with a project.',
  operationId: 'ListTeamMembers',
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
        .literal('CodeStar_20170419.ListTeamMembers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.ListTeamMembers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTeamMembersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTeamMembersResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419ListUserProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.ListUserProfiles',
  description: 'Lists all the user profiles configured for your AWS account in AWS CodeStar.',
  operationId: 'ListUserProfiles',
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
        .literal('CodeStar_20170419.ListUserProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.ListUserProfiles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListUserProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUserProfilesResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419TagProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.TagProject',
  description: 'Adds tags to a project.',
  operationId: 'TagProject',
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
        .literal('CodeStar_20170419.TagProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.TagProject'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagProjectRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagProjectResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419UntagProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.UntagProject',
  description: 'Removes tags from a project.',
  operationId: 'UntagProject',
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
        .literal('CodeStar_20170419.UntagProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.UntagProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagProjectResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419UpdateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.UpdateProject',
  description: 'Updates a project in AWS CodeStar.',
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
        .literal('CodeStar_20170419.UpdateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.UpdateProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectResultSchema } },
    },
    480: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419UpdateTeamMemberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.UpdateTeamMember',
  description:
    "Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.",
  operationId: 'UpdateTeamMember',
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
        .literal('CodeStar_20170419.UpdateTeamMember')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.UpdateTeamMember'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTeamMemberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTeamMemberResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ProjectNotFoundException',
      content: { 'application/json': { schema: ProjectNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InvalidServiceRoleException',
      content: { 'application/json': { schema: InvalidServiceRoleExceptionSchema } },
    },
    484: {
      description: 'ProjectConfigurationException',
      content: { 'application/json': { schema: ProjectConfigurationExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    486: {
      description: 'TeamMemberNotFoundException',
      content: { 'application/json': { schema: TeamMemberNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeStar20170419UpdateUserProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeStar_20170419.UpdateUserProfile',
  description:
    "Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. ",
  operationId: 'UpdateUserProfile',
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
        .literal('CodeStar_20170419.UpdateUserProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeStar_20170419.UpdateUserProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUserProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUserProfileResultSchema } },
    },
    480: {
      description: 'UserProfileNotFoundException',
      content: { 'application/json': { schema: UserProfileNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
