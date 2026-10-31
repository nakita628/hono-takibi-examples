import { createRoute, z } from '@hono/zod-openapi'

const RepositoryNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
  .min(2)
  .max(100)
  .openapi('RepositoryName')

const AccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .length(12)
  .openapi('AccountId')

const DomainNameSchema = z
  .string()
  .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
  .min(2)
  .max(50)
  .openapi('DomainName')

const ArnSchema = z.string().regex(/\S+/).min(1).max(1011).openapi('Arn')

const DescriptionSchema = z
  .string()
  .regex(/\P{C}*/u)
  .max(1000)
  .openapi('Description')

const UpstreamRepositoryInfoSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: ' The name of an upstream repository. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about an upstream repository. ', required: [] })
  .openapi('UpstreamRepositoryInfo')

const UpstreamRepositoryInfoListSchema = z
  .array(UpstreamRepositoryInfoSchema)
  .openapi('UpstreamRepositoryInfoList')

const ExternalConnectionNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9._\-:]{1,99}/)
  .min(2)
  .max(100)
  .openapi('ExternalConnectionName')

const PackageFormatSchema = z
  .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
  .openapi('PackageFormat')

const ExternalConnectionStatusSchema = z.literal('Available').openapi('ExternalConnectionStatus')

const RepositoryExternalConnectionInfoSchema = z
  .object({
    externalConnectionName: ExternalConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the external connection associated with a repository. ',
        }),
    ).exactOptional(),
    packageFormat: PackageFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The package format associated with a repository's external connection. The valid package formats are: </p> <ul> <li> <p> <code>npm</code>: A Node Package Manager (npm) package. </p> </li> <li> <p> <code>pypi</code>: A Python Package Index (PyPI) package. </p> </li> <li> <p> <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file. </p> </li> <li> <p> <code>nuget</code>: A NuGet package. </p> </li> </ul>",
        }),
    ).exactOptional(),
    status: ExternalConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the external connection of a repository. There is one valid value, <code>Available</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Contains information about the external connection of a repository. ',
    required: [],
  })
  .openapi('RepositoryExternalConnectionInfo')

const RepositoryExternalConnectionInfoListSchema = z
  .array(RepositoryExternalConnectionInfoSchema)
  .openapi('RepositoryExternalConnectionInfoList')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const RepositoryDescriptionSchema = z
  .object({
    name: RepositoryNameSchema.and(
      z.any().openapi({ description: ' The name of the repository. ' }),
    ).exactOptional(),
    administratorAccount: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 12-digit account number of the Amazon Web Services account that manages the repository. ',
        }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: ' The name of the domain that contains the repository. ' }),
    ).exactOptional(),
    domainOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. ',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the repository. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' A text description of the repository. ' }),
    ).exactOptional(),
    upstreams: UpstreamRepositoryInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
        }),
    ).exactOptional(),
    externalConnections: RepositoryExternalConnectionInfoListSchema.and(
      z
        .any()
        .openapi({
          description: ' An array of external connections associated with the repository. ',
        }),
    ).exactOptional(),
    createdTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that represents the date and time the repository was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services account. ',
    required: [],
  })
  .openapi('RepositoryDescription')

const AssociateExternalConnectionResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' Information about the connected repository after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateExternalConnectionResult')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const StringSchema = z.string().openapi('String')

const PackageVersionStatusSchema = z
  .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
  .openapi('PackageVersionStatus')

const SuccessfulPackageVersionInfoSchema = z
  .object({
    revision: StringSchema.and(
      z.any().openapi({ description: ' The revision of a package version. ' }),
    ).exactOptional(),
    status: PackageVersionStatusSchema.and(
      z.any().openapi({ description: ' The status of a package version. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Contains the revision and status of a package version. ',
    required: [],
  })
  .openapi('SuccessfulPackageVersionInfo')

const SuccessfulPackageVersionInfoMapSchema = z
  .record(z.string(), SuccessfulPackageVersionInfoSchema)
  .openapi('SuccessfulPackageVersionInfoMap')

const PackageVersionErrorCodeSchema = z
  .enum([
    'ALREADY_EXISTS',
    'MISMATCHED_REVISION',
    'MISMATCHED_STATUS',
    'NOT_ALLOWED',
    'NOT_FOUND',
    'SKIPPED',
  ])
  .openapi('PackageVersionErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const PackageVersionErrorSchema = z
  .object({
    errorCode: PackageVersionErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The error code associated with the error. Valid error codes are: </p> <ul> <li> <p> <code>ALREADY_EXISTS</code> </p> </li> <li> <p> <code>MISMATCHED_REVISION</code> </p> </li> <li> <p> <code>MISMATCHED_STATUS</code> </p> </li> <li> <p> <code>NOT_ALLOWED</code> </p> </li> <li> <p> <code>NOT_FOUND</code> </p> </li> <li> <p> <code>SKIPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: ' The error message associated with the error. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'l An error associated with package. ', required: [] })
  .openapi('PackageVersionError')

const PackageVersionErrorMapSchema = z
  .record(z.string(), PackageVersionErrorSchema)
  .openapi('PackageVersionErrorMap')

const CopyPackageVersionsResultSchema = z
  .object({
    successfulVersions: SuccessfulPackageVersionInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of the package versions that were successfully copied to your repository. ',
        }),
    ).exactOptional(),
    failedVersions: PackageVersionErrorMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A map of package versions that failed to copy and their error codes. The possible error codes are in the <code>PackageVersionError</code> data type. They are: </p> <ul> <li> <p> <code>ALREADY_EXISTS</code> </p> </li> <li> <p> <code>MISMATCHED_REVISION</code> </p> </li> <li> <p> <code>MISMATCHED_STATUS</code> </p> </li> <li> <p> <code>NOT_ALLOWED</code> </p> </li> <li> <p> <code>NOT_FOUND</code> </p> </li> <li> <p> <code>SKIPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopyPackageVersionsResult')

const PackageVersionSchema = z
  .string()
  .regex(/[^#\/\s]+/)
  .min(1)
  .max(255)
  .openapi('PackageVersion')

const PackageVersionRevisionSchema = z
  .string()
  .regex(/\S+/)
  .min(1)
  .max(50)
  .openapi('PackageVersionRevision')

const DomainStatusSchema = z.enum(['Active', 'Deleted']).openapi('DomainStatus')

const IntegerSchema = z.int().openapi('Integer')

const LongSchema = z.int().openapi('Long')

const DomainDescriptionSchema = z
  .object({
    name: DomainNameSchema.and(
      z.any().openapi({ description: ' The name of the domain. ' }),
    ).exactOptional(),
    owner: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Web Services account ID that owns the domain. ' }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the domain. ' }),
    ).exactOptional(),
    status: DomainStatusSchema.and(
      z.any().openapi({ description: ' The current status of a domain. ' }),
    ).exactOptional(),
    createdTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' A timestamp that represents the date and time the domain was created. ',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The ARN of an Key Management Service (KMS) key associated with a domain. ',
        }),
    ).exactOptional(),
    repositoryCount: IntegerSchema.and(
      z.any().openapi({ description: ' The number of repositories in the domain. ' }),
    ).exactOptional(),
    assetSizeBytes: LongSchema.and(
      z.any().openapi({ description: ' The total size of all assets in the domain. ' }),
    ).exactOptional(),
    s3BucketArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon S3 bucket that is used to store package assets in the domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories. ',
    required: [],
  })
  .openapi('DomainDescription')

const CreateDomainResultSchema = z
  .object({
    domain: DomainDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains information about the created domain after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDomainResult')

const TagKeySchema = z
  .string()
  .regex(/\P{C}+/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/\P{C}*/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The tag key.' })),
    value: TagValueSchema.and(z.any().openapi({ description: 'The tag value.' })),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact.',
  })
  .openapi('Tag')

const CreateRepositoryResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' Information about the created repository after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRepositoryResult')

const UpstreamRepositorySchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: ' The name of an upstream repository. ' }),
    ),
  })
  .openapi({
    required: ['repositoryName'],
    description:
      ' Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a> and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>. ',
  })
  .openapi('UpstreamRepository')

const DeleteDomainResultSchema = z
  .object({
    domain: DomainDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains information about the deleted domain after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainResult')

const PolicyRevisionSchema = z.string().regex(/\S+/).min(1).max(100).openapi('PolicyRevision')

const PolicyDocumentSchema = z
  .string()
  .regex(/[\P{C}\s]+/u)
  .min(1)
  .max(7168)
  .openapi('PolicyDocument')

const ResourcePolicySchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: ' The ARN of the resource associated with the resource policy ' }),
    ).exactOptional(),
    revision: PolicyRevisionSchema.and(
      z.any().openapi({ description: ' The current revision of the resource policy. ' }),
    ).exactOptional(),
    document: PolicyDocumentSchema.and(
      z.any().openapi({ description: ' The resource policy formatted in JSON. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An CodeArtifact resource policy that contains a resource ARN, document details, and a revision. ',
    required: [],
  })
  .openapi('ResourcePolicy')

const DeleteDomainPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the deleted resource policy after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainPermissionsPolicyResult')

const PackageNamespaceSchema = z
  .string()
  .regex(/[^#\/\s]+/)
  .min(1)
  .max(255)
  .openapi('PackageNamespace')

const PackageNameSchema = z
  .string()
  .regex(/[^#\/\s]+/)
  .min(1)
  .max(255)
  .openapi('PackageName')

const AllowPublishSchema = z.enum(['ALLOW', 'BLOCK']).openapi('AllowPublish')

const AllowUpstreamSchema = z.enum(['ALLOW', 'BLOCK']).openapi('AllowUpstream')

const PackageOriginRestrictionsSchema = z
  .object({
    publish: AllowPublishSchema.and(
      z
        .any()
        .openapi({
          description:
            'The package origin configuration that determines if new versions of the package can be published directly to the repository.',
        }),
    ),
    upstream: AllowUpstreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The package origin configuration that determines if new versions of the package can be added to the repository from an external connection or upstream source.',
        }),
    ),
  })
  .openapi({
    required: ['publish', 'upstream'],
    description:
      'Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.',
  })
  .openapi('PackageOriginRestrictions')

const PackageOriginConfigurationSchema = z
  .object({
    restrictions: PackageOriginRestrictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>PackageOriginRestrictions</code> object that contains information about the upstream and publish package origin configuration for the package.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about the package origin configuration of a package.',
    required: [],
  })
  .openapi('PackageOriginConfiguration')

const PackageSummarySchema = z
  .object({
    format: PackageFormatSchema.and(
      z.any().openapi({ description: ' The format of the package. ' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z.any().openapi({ description: ' The name of the package. ' }),
    ).exactOptional(),
    originConfiguration: PackageOriginConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a> object that contains a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a> object that contains information about the upstream and publish package origin restrictions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Details about a package, including its format, namespace, and name. ',
    required: [],
  })
  .openapi('PackageSummary')

const DeletePackageResultSchema = z
  .object({ deletedPackage: PackageSummarySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeletePackageResult')

const DeletePackageVersionsResultSchema = z
  .object({
    successfulVersions: SuccessfulPackageVersionInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of the package versions that were successfully deleted. The status of every successful version will be <code>Deleted</code>. ',
        }),
    ).exactOptional(),
    failedVersions: PackageVersionErrorMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A <code>PackageVersionError</code> object that contains a map of errors codes for the deleted package that failed. The possible error codes are: </p> <ul> <li> <p> <code>ALREADY_EXISTS</code> </p> </li> <li> <p> <code>MISMATCHED_REVISION</code> </p> </li> <li> <p> <code>MISMATCHED_STATUS</code> </p> </li> <li> <p> <code>NOT_ALLOWED</code> </p> </li> <li> <p> <code>NOT_FOUND</code> </p> </li> <li> <p> <code>SKIPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePackageVersionsResult')

const DeleteRepositoryResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' Information about the deleted repository after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRepositoryResult')

const DeleteRepositoryPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description: ' Information about the deleted policy after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRepositoryPermissionsPolicyResult')

const DescribeDomainResultSchema = z
  .object({ domain: DomainDescriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeDomainResult')

const PackageDescriptionSchema = z
  .object({
    format: PackageFormatSchema.and(
      z.any().openapi({ description: 'A format that specifies the type of the package.' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    name: PackageNameSchema.and(
      z.any().openapi({ description: 'The name of the package.' }),
    ).exactOptional(),
    originConfiguration: PackageOriginConfigurationSchema.and(
      z.any().openapi({ description: 'The package origin configuration for the package.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a package.', required: [] })
  .openapi('PackageDescription')

const DescribePackageResultSchema = z
  .object({
    package: PackageDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a> object that contains information about the requested package.',
        }),
    ),
  })
  .openapi({ required: ['package'] })
  .openapi('DescribePackageResult')

const String255Schema = z.string().min(1).max(255).openapi('String255')

const LicenseInfoSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: ' Name of the license. ' }),
    ).exactOptional(),
    url: StringSchema.and(
      z.any().openapi({ description: ' The URL for license data. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Details of the license data. ', required: [] })
  .openapi('LicenseInfo')

const LicenseInfoListSchema = z.array(LicenseInfoSchema).openapi('LicenseInfoList')

const DomainEntryPointSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository that a package was originally published to.',
        }),
    ).exactOptional(),
    externalConnectionName: ExternalConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the external connection that a package was ingested from.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to. For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery.',
    required: [],
  })
  .openapi('DomainEntryPoint')

const PackageVersionOriginTypeSchema = z
  .enum(['INTERNAL', 'EXTERNAL', 'UNKNOWN'])
  .openapi('PackageVersionOriginType')

const PackageVersionOriginSchema = z
  .object({
    domainEntryPoint: DomainEntryPointSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainEntryPoint.html">DomainEntryPoint</a> object that contains information about from which repository or external connection the package version was added to the domain.',
        }),
    ).exactOptional(),
    originType: PackageVersionOriginTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes how the package version was originally added to the domain. An <code>INTERNAL</code> origin type means the package version was published directly to a repository in the domain. An <code>EXTERNAL</code> origin type means the package version was ingested from an external connection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about how a package version was added to a repository.',
    required: [],
  })
  .openapi('PackageVersionOrigin')

const PackageVersionDescriptionSchema = z
  .object({
    format: PackageFormatSchema.and(
      z.any().openapi({ description: ' The format of the package version. ' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package version. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    packageName: PackageNameSchema.and(
      z.any().openapi({ description: ' The name of the requested package. ' }),
    ).exactOptional(),
    displayName: String255Schema.and(
      z
        .any()
        .openapi({
          description:
            " The name of the package that is displayed. The <code>displayName</code> varies depending on the package version's format. For example, if an npm package is named <code>ui</code>, is in the namespace <code>vue</code>, and has the format <code>npm</code>, then the <code>displayName</code> is <code>@vue/ui</code>. ",
        }),
    ).exactOptional(),
    version: PackageVersionSchema.and(
      z.any().openapi({ description: ' The version of the package. ' }),
    ).exactOptional(),
    summary: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " A summary of the package version. The summary is extracted from the package. The information in and detail level of the summary depends on the package version's format. ",
        }),
    ).exactOptional(),
    homePage: StringSchema.and(
      z.any().openapi({ description: ' The homepage associated with the package. ' }),
    ).exactOptional(),
    sourceCodeRepository: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The repository for the source code in the package version, or the source code used to build it. ',
        }),
    ).exactOptional(),
    publishedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A timestamp that contains the date and time the package version was published. ',
        }),
    ).exactOptional(),
    licenses: LicenseInfoListSchema.and(
      z
        .any()
        .openapi({
          description: ' Information about licenses associated with the package version. ',
        }),
    ).exactOptional(),
    revision: PackageVersionRevisionSchema.and(
      z.any().openapi({ description: ' The revision of the package version. ' }),
    ).exactOptional(),
    status: PackageVersionStatusSchema.and(
      z
        .any()
        .openapi({ description: ' A string that contains the status of the package version. ' }),
    ).exactOptional(),
    origin: PackageVersionOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains information about how the package version was added to the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Details about a package version. ', required: [] })
  .openapi('PackageVersionDescription')

const DescribePackageVersionResultSchema = z
  .object({
    packageVersion: PackageVersionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> object that contains information about the requested package version. ',
        }),
    ),
  })
  .openapi({ required: ['packageVersion'] })
  .openapi('DescribePackageVersionResult')

const DescribeRepositoryResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>RepositoryDescription</code> object that contains the requested repository information. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRepositoryResult')

const DisassociateExternalConnectionResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' The repository associated with the removed external connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateExternalConnectionResult')

const DisposePackageVersionsResultSchema = z
  .object({
    successfulVersions: SuccessfulPackageVersionInfoMapSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of the package versions that were successfully disposed. ',
        }),
    ).exactOptional(),
    failedVersions: PackageVersionErrorMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A <code>PackageVersionError</code> object that contains a map of errors codes for the disposed package versions that failed. The possible error codes are: </p> <ul> <li> <p> <code>ALREADY_EXISTS</code> </p> </li> <li> <p> <code>MISMATCHED_REVISION</code> </p> </li> <li> <p> <code>MISMATCHED_STATUS</code> </p> </li> <li> <p> <code>NOT_ALLOWED</code> </p> </li> <li> <p> <code>NOT_FOUND</code> </p> </li> <li> <p> <code>SKIPPED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisposePackageVersionsResult')

const GetAuthorizationTokenResultSchema = z
  .object({
    authorizationToken: StringSchema.and(
      z.any().openapi({ description: ' The returned authentication token. ' }),
    ).exactOptional(),
    expiration: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A timestamp that specifies the date and time the authorization token expires. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAuthorizationTokenResult')

const GetDomainPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z.any().openapi({ description: ' The returned resource policy. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainPermissionsPolicyResult')

const AssetSchema = z.string().openapi('Asset')

const GetPackageVersionAssetResultSchema = z
  .object({
    asset: AssetSchema.and(
      z.any().openapi({ description: ' The binary file, or asset, that is downloaded.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPackageVersionAssetResult')

const GetPackageVersionReadmeResultSchema = z
  .object({
    format: PackageFormatSchema.and(
      z
        .any()
        .openapi({ description: ' The format of the package with the requested readme file. ' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package version with the requested readme file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the package that contains the returned readme file. ',
        }),
    ).exactOptional(),
    version: PackageVersionSchema.and(
      z
        .any()
        .openapi({ description: ' The version of the package with the requested readme file. ' }),
    ).exactOptional(),
    versionRevision: PackageVersionRevisionSchema.and(
      z
        .any()
        .openapi({ description: ' The current revision associated with the package version. ' }),
    ).exactOptional(),
    readme: StringSchema.and(
      z.any().openapi({ description: ' The text of the returned readme file. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPackageVersionReadmeResult')

const GetRepositoryEndpointResultSchema = z
  .object({
    repositoryEndpoint: StringSchema.and(
      z
        .any()
        .openapi({ description: ' A string that specifies the URL of the returned endpoint. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRepositoryEndpointResult')

const GetRepositoryPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z.any().openapi({ description: ' The returned resource policy. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRepositoryPermissionsPolicyResult')

const DomainSummarySchema = z
  .object({
    name: DomainNameSchema.and(
      z.any().openapi({ description: ' The name of the domain. ' }),
    ).exactOptional(),
    owner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: ' The ARN of the domain. ' }),
    ).exactOptional(),
    status: DomainStatusSchema.and(
      z.any().openapi({ description: ' A string that contains the status of the domain. ' }),
    ).exactOptional(),
    createdTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: ' A timestamp that contains the date and time the domain was created. ',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z.any().openapi({ description: ' The key used to encrypt the domain. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a domain, including its name, Amazon Resource Name (ARN), and status. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code> objects. ',
    required: [],
  })
  .openapi('DomainSummary')

const DomainSummaryListSchema = z.array(DomainSummarySchema).openapi('DomainSummaryList')

const PaginationTokenSchema = z.string().regex(/\S+/).min(1).max(2000).openapi('PaginationToken')

const ListDomainsResultSchema = z
  .object({
    domains: DomainSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html">DomainSummary</a> objects. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResult')

const AssetNameSchema = z
  .string()
  .regex(/\P{C}+/u)
  .min(1)
  .max(255)
  .openapi('AssetName')

const LongOptionalSchema = z.int().openapi('LongOptional')

const HashValueSchema = z
  .string()
  .regex(/[0-9a-f]+/)
  .min(32)
  .max(512)
  .openapi('HashValue')

const AssetHashesSchema = z.record(z.string(), HashValueSchema).openapi('AssetHashes')

const AssetSummarySchema = z
  .object({
    name: AssetNameSchema.and(z.any().openapi({ description: ' The name of the asset. ' })),
    size: LongOptionalSchema.and(
      z.any().openapi({ description: ' The size of the asset. ' }),
    ).exactOptional(),
    hashes: AssetHashesSchema.and(
      z.any().openapi({ description: ' The hashes of the asset. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], description: ' Contains details about a package version asset. ' })
  .openapi('AssetSummary')

const AssetSummaryListSchema = z.array(AssetSummarySchema).openapi('AssetSummaryList')

const ListPackageVersionAssetsResultSchema = z
  .object({
    format: PackageFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format of the package that contains the requested package version assets. ',
        }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the package that contains the requested package version assets. ',
        }),
    ).exactOptional(),
    version: PackageVersionSchema.and(
      z
        .any()
        .openapi({
          description: ' The version of the package associated with the requested assets. ',
        }),
    ).exactOptional(),
    versionRevision: PackageVersionRevisionSchema.and(
      z
        .any()
        .openapi({ description: ' The current revision associated with the package version. ' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If there are additional results, this is the token for the next set of results. ',
        }),
    ).exactOptional(),
    assets: AssetSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPackageVersionAssetsResult')

const PackageDependencySchema = z
  .object({
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package that this package depends on. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z.any().openapi({ description: ' The name of the package that this package depends on. ' }),
    ).exactOptional(),
    dependencyType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The type of a package dependency. The possible values depend on the package type.</p> <ul> <li> <p>npm: <code>regular</code>, <code>dev</code>, <code>peer</code>, <code>optional</code> </p> </li> <li> <p>maven: <code>optional</code>, <code>parent</code>, <code>compile</code>, <code>runtime</code>, <code>test</code>, <code>system</code>, <code>provided</code>.</p> <note> <p>Note that <code>parent</code> is not a regular Maven dependency type; instead this is extracted from the <code>&lt;parent&gt;</code> element if one is defined in the package version's POM file.</p> </note> </li> <li> <p>nuget: The <code>dependencyType</code> field is never set for NuGet packages.</p> </li> <li> <p>pypi: <code>Requires-Dist</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
    versionRequirement: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The required version, or version range, of the package that this package depends on. The version format is specific to the package type. For example, the following are possible valid required versions: <code>1.2.3</code>, <code>^2.3.4</code>, or <code>4.x</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Details about a package dependency. ', required: [] })
  .openapi('PackageDependency')

const PackageDependencyListSchema = z
  .array(PackageDependencySchema)
  .openapi('PackageDependencyList')

const ListPackageVersionDependenciesResultSchema = z
  .object({
    format: PackageFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A format that specifies the type of the package that contains the returned dependencies. ',
        }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package version that contains the returned dependencies. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the package that contains the returned package versions dependencies. ',
        }),
    ).exactOptional(),
    version: PackageVersionSchema.and(
      z
        .any()
        .openapi({ description: ' The version of the package that is specified in the request. ' }),
    ).exactOptional(),
    versionRevision: PackageVersionRevisionSchema.and(
      z
        .any()
        .openapi({ description: ' The current revision associated with the package version. ' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    dependencies: PackageDependencyListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPackageVersionDependenciesResult')

const PackageVersionSummarySchema = z
  .object({
    version: PackageVersionSchema.and(
      z.any().openapi({ description: ' Information about a package version. ' }),
    ),
    revision: PackageVersionRevisionSchema.and(
      z.any().openapi({ description: ' The revision associated with a package version. ' }),
    ).exactOptional(),
    status: PackageVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A string that contains the status of the package version. It can be one of the following: ',
        }),
    ),
    origin: PackageVersionOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains information about how the package version was added to the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['version', 'status'],
    description:
      ' Details about a package version, including its status, version, and revision. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> operation returns a list of <code>PackageVersionSummary</code> objects. ',
  })
  .openapi('PackageVersionSummary')

const PackageVersionSummaryListSchema = z
  .array(PackageVersionSummarySchema)
  .openapi('PackageVersionSummaryList')

const ListPackageVersionsResultSchema = z
  .object({
    defaultDisplayVersion: PackageVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The default package version to display. This depends on the package format: </p> <ul> <li> <p> For Maven and PyPI packages, it's the most recently published package version. </p> </li> <li> <p> For npm packages, it's the version referenced by the <code>latest</code> tag. If the <code>latest</code> tag is not set, it's the most recently published package version. </p> </li> </ul>",
        }),
    ).exactOptional(),
    format: PackageFormatSchema.and(
      z.any().openapi({ description: ' A format of the package. ' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> </ul>',
        }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z.any().openapi({ description: ' The name of the package. ' }),
    ).exactOptional(),
    versions: PackageVersionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a> objects. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If there are additional results, this is the token for the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPackageVersionsResult')

const PackageSummaryListSchema = z.array(PackageSummarySchema).openapi('PackageSummaryList')

const ListPackagesResultSchema = z
  .object({
    packages: PackageSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of returned <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a> objects. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If there are additional results, this is the token for the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPackagesResult')

const RepositorySummarySchema = z
  .object({
    name: RepositoryNameSchema.and(
      z.any().openapi({ description: ' The name of the repository. ' }),
    ).exactOptional(),
    administratorAccount: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Web Services account ID that manages the repository. ',
        }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: ' The name of the domain that contains the repository. ' }),
    ).exactOptional(),
    domainOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: ' The ARN of the repository. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description of the repository. ' }),
    ).exactOptional(),
    createdTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp that represents the date and time the repository was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of <code>RepositorySummary</code> objects. ',
    required: [],
  })
  .openapi('RepositorySummary')

const RepositorySummaryListSchema = z
  .array(RepositorySummarySchema)
  .openapi('RepositorySummaryList')

const ListRepositoriesResultSchema = z
  .object({
    repositories: RepositorySummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If there are additional results, this is the token for the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRepositoriesResult')

const ListRepositoriesInDomainResultSchema = z
  .object({
    repositories: RepositorySummaryListSchema.and(
      z.any().openapi({ description: ' The returned list of repositories. ' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If there are additional results, this is the token for the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRepositoriesInDomainResult')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ListTagsForResourceResultSchema = z
  .object({
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key and value pairs associated with the specified resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const PublishPackageVersionResultSchema = z
  .object({
    format: PackageFormatSchema.and(
      z.any().openapi({ description: 'The format of the package version.' }),
    ).exactOptional(),
    namespace: PackageNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the package version.' }),
    ).exactOptional(),
    package: PackageNameSchema.and(
      z.any().openapi({ description: 'The name of the package.' }),
    ).exactOptional(),
    version: PackageVersionSchema.and(
      z.any().openapi({ description: 'The version of the package.' }),
    ).exactOptional(),
    versionRevision: PackageVersionRevisionSchema.and(
      z.any().openapi({ description: 'The revision of the package version.' }),
    ).exactOptional(),
    status: PackageVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that contains the status of the package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>.',
        }),
    ).exactOptional(),
    asset: AssetSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> for the published asset.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishPackageVersionResult')

const PutDomainPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description: ' The resource policy that was set after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutDomainPermissionsPolicyResult')

const PutPackageOriginConfigurationResultSchema = z
  .object({
    originConfiguration: PackageOriginConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a> object that describes the origin configuration set for the package. It contains a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a> object that describes how new versions of the package can be introduced to the repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutPackageOriginConfigurationResult')

const PutRepositoryPermissionsPolicyResultSchema = z
  .object({
    policy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({
          description: ' The resource policy that was set after processing the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRepositoryPermissionsPolicyResult')

const TagResourceResultSchema = z.object({}).openapi('TagResourceResult')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const UpdatePackageVersionsStatusResultSchema = z
  .object({
    successfulVersions: SuccessfulPackageVersionInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of <code>PackageVersionError</code> objects, one for each package version with a status that failed to update. ',
        }),
    ).exactOptional(),
    failedVersions: PackageVersionErrorMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of <code>SuccessfulPackageVersionInfo</code> objects, one for each package version with a status that successfully updated. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePackageVersionsStatusResult')

const UpdateRepositoryResultSchema = z
  .object({
    repository: RepositoryDescriptionSchema.and(
      z.any().openapi({ description: ' The updated repository. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRepositoryResult')

const AssociateExternalConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'AssociateExternalConnectionRequest' })
  .openapi('AssociateExternalConnectionRequest')

const AuthorizationTokenDurationSecondsSchema = z
  .int()
  .min(0)
  .max(43200)
  .openapi('AuthorizationTokenDurationSeconds')

const BooleanOptionalSchema = z.boolean().openapi('BooleanOptional')

const PackageVersionListSchema = z
  .array(PackageVersionSchema)
  .max(100)
  .openapi('PackageVersionList')

const PackageVersionRevisionMapSchema = z
  .record(z.string(), PackageVersionRevisionSchema)
  .openapi('PackageVersionRevisionMap')

const CopyPackageVersionsRequestSchema = z
  .object({
    versions: PackageVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The versions of the package to be copied. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>',
        }),
    ).exactOptional(),
    versionRevisions: PackageVersionRevisionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>',
        }),
    ).exactOptional(),
    allowOverwrite: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. ',
        }),
    ).exactOptional(),
    includeFromUpstream: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CopyPackageVersionsRequest', required: [] })
  .openapi('CopyPackageVersionsRequest')

const CreateDomainRequestSchema = z
  .object({
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tag key-value pairs for the domain.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateDomainRequest', required: [] })
  .openapi('CreateDomainRequest')

const UpstreamRepositoryListSchema = z
  .array(UpstreamRepositorySchema)
  .openapi('UpstreamRepositoryList')

const CreateRepositoryRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' A description of the created repository. ' }),
    ).exactOptional(),
    upstreams: UpstreamRepositoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tag key-value pairs for the repository.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateRepositoryRequest', required: [] })
  .openapi('CreateRepositoryRequest')

const DeleteDomainPermissionsPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDomainPermissionsPolicyRequest' })
  .openapi('DeleteDomainPermissionsPolicyRequest')

const DeleteDomainRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDomainRequest' })
  .openapi('DeleteDomainRequest')

const DeletePackageRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePackageRequest' })
  .openapi('DeletePackageRequest')

const DeletePackageVersionsRequestSchema = z
  .object({
    versions: PackageVersionListSchema.and(
      z
        .any()
        .openapi({
          description: ' An array of strings that specify the versions of the package to delete. ',
        }),
    ),
    expectedStatus: PackageVersionStatusSchema.and(
      z.any().openapi({ description: ' The expected status of the package version to delete. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['versions'], title: 'DeletePackageVersionsRequest' })
  .openapi('DeletePackageVersionsRequest')

const DeleteRepositoryPermissionsPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRepositoryPermissionsPolicyRequest' })
  .openapi('DeleteRepositoryPermissionsPolicyRequest')

const DeleteRepositoryRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRepositoryRequest' })
  .openapi('DeleteRepositoryRequest')

const DescribeDomainRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDomainRequest' })
  .openapi('DescribeDomainRequest')

const DescribePackageRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePackageRequest' })
  .openapi('DescribePackageRequest')

const DescribePackageVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePackageVersionRequest' })
  .openapi('DescribePackageVersionRequest')

const DescribeRepositoryRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRepositoryRequest' })
  .openapi('DescribeRepositoryRequest')

const DisassociateExternalConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateExternalConnectionRequest' })
  .openapi('DisassociateExternalConnectionRequest')

const DisposePackageVersionsRequestSchema = z
  .object({
    versions: PackageVersionListSchema.and(
      z.any().openapi({ description: ' The versions of the package you want to dispose. ' }),
    ),
    versionRevisions: PackageVersionRevisionMapSchema.and(
      z
        .any()
        .openapi({ description: ' The revisions of the package versions you want to dispose. ' }),
    ).exactOptional(),
    expectedStatus: PackageVersionStatusSchema.and(
      z.any().openapi({ description: ' The expected status of the package version to dispose. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['versions'], title: 'DisposePackageVersionsRequest' })
  .openapi('DisposePackageVersionsRequest')

const GetAuthorizationTokenRequestSchema = z
  .object({})
  .openapi({ title: 'GetAuthorizationTokenRequest' })
  .openapi('GetAuthorizationTokenRequest')

const GetDomainPermissionsPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetDomainPermissionsPolicyRequest' })
  .openapi('GetDomainPermissionsPolicyRequest')

const GetPackageVersionAssetRequestSchema = z
  .object({})
  .openapi({ title: 'GetPackageVersionAssetRequest' })
  .openapi('GetPackageVersionAssetRequest')

const GetPackageVersionReadmeRequestSchema = z
  .object({})
  .openapi({ title: 'GetPackageVersionReadmeRequest' })
  .openapi('GetPackageVersionReadmeRequest')

const GetRepositoryEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'GetRepositoryEndpointRequest' })
  .openapi('GetRepositoryEndpointRequest')

const GetRepositoryPermissionsPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetRepositoryPermissionsPolicyRequest' })
  .openapi('GetRepositoryPermissionsPolicyRequest')

const HashAlgorithmSchema = z.enum(['MD5', 'SHA-1', 'SHA-256', 'SHA-512']).openapi('HashAlgorithm')

const ListDomainsMaxResultsSchema = z.int().min(1).max(1000).openapi('ListDomainsMaxResults')

const ListDomainsRequestSchema = z
  .object({
    maxResults: ListDomainsMaxResultsSchema.and(
      z.any().openapi({ description: ' The maximum number of results to return per page. ' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDomainsRequest', required: [] })
  .openapi('ListDomainsRequest')

const ListPackageVersionAssetsMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListPackageVersionAssetsMaxResults')

const ListPackageVersionAssetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPackageVersionAssetsRequest' })
  .openapi('ListPackageVersionAssetsRequest')

const ListPackageVersionDependenciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListPackageVersionDependenciesRequest' })
  .openapi('ListPackageVersionDependenciesRequest')

const ListPackageVersionsMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListPackageVersionsMaxResults')

const PackageVersionSortTypeSchema = z.literal('PUBLISHED_TIME').openapi('PackageVersionSortType')

const ListPackageVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPackageVersionsRequest' })
  .openapi('ListPackageVersionsRequest')

const ListPackagesMaxResultsSchema = z.int().min(1).max(1000).openapi('ListPackagesMaxResults')

const ListPackagesRequestSchema = z
  .object({})
  .openapi({ title: 'ListPackagesRequest' })
  .openapi('ListPackagesRequest')

const ListRepositoriesInDomainMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListRepositoriesInDomainMaxResults')

const ListRepositoriesInDomainRequestSchema = z
  .object({})
  .openapi({ title: 'ListRepositoriesInDomainRequest' })
  .openapi('ListRepositoriesInDomainRequest')

const ListRepositoriesMaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('ListRepositoriesMaxResults')

const ListRepositoriesRequestSchema = z
  .object({})
  .openapi({ title: 'ListRepositoriesRequest' })
  .openapi('ListRepositoriesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SHA256Schema = z
  .string()
  .regex(/[0-9a-f]+/)
  .length(64)
  .openapi('SHA256')

const PublishPackageVersionRequestSchema = z
  .object({
    assetContent: AssetSchema.and(
      z.any().openapi({ description: 'The content of the asset to publish.' }),
    ),
  })
  .openapi({ required: ['assetContent'], title: 'PublishPackageVersionRequest' })
  .openapi('PublishPackageVersionRequest')

const PutDomainPermissionsPolicyRequestSchema = z
  .object({
    domain: DomainNameSchema.and(
      z
        .any()
        .openapi({ description: ' The name of the domain on which to set the resource policy. ' }),
    ),
    domainOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
        }),
    ).exactOptional(),
    policyRevision: PolicyRevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            " The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. ",
        }),
    ).exactOptional(),
    policyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain. ',
        }),
    ),
  })
  .openapi({ required: ['domain', 'policyDocument'], title: 'PutDomainPermissionsPolicyRequest' })
  .openapi('PutDomainPermissionsPolicyRequest')

const PutPackageOriginConfigurationRequestSchema = z
  .object({
    restrictions: PackageOriginRestrictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a> object that contains information about the <code>upstream</code> and <code>publish</code> package origin restrictions. The <code>upstream</code> restriction determines if new package versions can be ingested or retained from external connections or upstream repositories. The <code>publish</code> restriction determines if new package versions can be published directly to the repository.</p> <p>You must include both the desired <code>upstream</code> and <code>publish</code> restrictions.</p>',
        }),
    ),
  })
  .openapi({ required: ['restrictions'], title: 'PutPackageOriginConfigurationRequest' })
  .openapi('PutPackageOriginConfigurationRequest')

const PutRepositoryPermissionsPolicyRequestSchema = z
  .object({
    policyRevision: PolicyRevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            " Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy. ",
        }),
    ).exactOptional(),
    policyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository. ',
        }),
    ),
  })
  .openapi({ required: ['policyDocument'], title: 'PutRepositoryPermissionsPolicyRequest' })
  .openapi('PutRepositoryPermissionsPolicyRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags you want to modify or add to the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    tagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag key for each tag that you want to remove from the resource.',
        }),
    ),
  })
  .openapi({ required: ['tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdatePackageVersionsStatusRequestSchema = z
  .object({
    versions: PackageVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of strings that specify the versions of the package with the statuses to update. ',
        }),
    ),
    versionRevisions: PackageVersionRevisionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. ',
        }),
    ).exactOptional(),
    expectedStatus: PackageVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. ",
        }),
    ).exactOptional(),
    targetStatus: PackageVersionStatusSchema.and(
      z
        .any()
        .openapi({ description: ' The status you want to change the package version status to. ' }),
    ),
  })
  .openapi({ required: ['versions', 'targetStatus'], title: 'UpdatePackageVersionsStatusRequest' })
  .openapi('UpdatePackageVersionsStatusRequest')

const UpdateRepositoryRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' An updated repository description. ' }),
    ).exactOptional(),
    upstreams: UpstreamRepositoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRepositoryRequest', required: [] })
  .openapi('UpdateRepositoryRequest')

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

export const postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute =
  createRoute({
    method: 'post',
    path: '/v1/repository/external-connection#domain&repository&external-connection',
    description:
      '<p>Adds an existing external connection to a repository. One external connection is allowed per repository.</p> <note> <p>A repository can have one or more upstream repositories, or an external connection.</p> </note>',
    operationId: 'AssociateExternalConnection',
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
        domain: z
          .string()
          .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
          .min(2)
          .max(50)
          .openapi({
            param: {
              name: 'domain',
              in: 'query',
              required: true,
              description: 'The name of the domain that contains the repository.',
              schema: {
                type: 'string',
                pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
                minLength: 2,
                maxLength: 50,
              },
            },
          }),
        'domain-owner': z
          .string()
          .regex(/[0-9]{12}/)
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'domain-owner',
              in: 'query',
              required: false,
              description:
                ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
              schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
            },
          }),
        repository: z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'repository',
              in: 'query',
              required: true,
              description:
                ' The name of the repository to which the external connection is added. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        'external-connection': z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-:]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'external-connection',
              in: 'query',
              required: true,
              description:
                '<p> The name of the external connection to add to the repository. The following values are supported: </p> <ul> <li> <p> <code>public:npmjs</code> - for the npm public repository. </p> </li> <li> <p> <code>public:nuget-org</code> - for the NuGet Gallery. </p> </li> <li> <p> <code>public:pypi</code> - for the Python Package Index. </p> </li> <li> <p> <code>public:maven-central</code> - for Maven Central. </p> </li> <li> <p> <code>public:maven-googleandroid</code> - for the Google Android repository. </p> </li> <li> <p> <code>public:maven-gradleplugins</code> - for the Gradle plugins repository. </p> </li> <li> <p> <code>public:maven-commonsware</code> - for the CommonsWare Android repository. </p> </li> <li> <p> <code>public:maven-clojars</code> - for the Clojars repository. </p> </li> </ul>',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-:]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateExternalConnectionResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      486: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute =
  createRoute({
    method: 'delete',
    path: '/v1/repository/external-connection#domain&repository&external-connection',
    description: ' Removes an existing external connection from a repository. ',
    operationId: 'DisassociateExternalConnection',
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
        domain: z
          .string()
          .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
          .min(2)
          .max(50)
          .openapi({
            param: {
              name: 'domain',
              in: 'query',
              required: true,
              description:
                'The name of the domain that contains the repository from which to remove the external repository. ',
              schema: {
                type: 'string',
                pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
                minLength: 2,
                maxLength: 50,
              },
            },
          }),
        'domain-owner': z
          .string()
          .regex(/[0-9]{12}/)
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'domain-owner',
              in: 'query',
              required: false,
              description:
                ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
              schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
            },
          }),
        repository: z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'repository',
              in: 'query',
              required: true,
              description:
                'The name of the repository from which the external connection will be removed. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        'external-connection': z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-:]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'external-connection',
              in: 'query',
              required: true,
              description:
                'The name of the external connection to be removed from the repository. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-:]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateExternalConnectionResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      486: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRoute =
  createRoute({
    method: 'post',
    path: '/v1/package/versions/copy#domain&source-repository&destination-repository&format&package',
    description:
      '<p> Copies package versions from one repository to another repository in the same domain. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>',
    operationId: 'CopyPackageVersions',
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
        domain: z
          .string()
          .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
          .min(2)
          .max(50)
          .openapi({
            param: {
              name: 'domain',
              in: 'query',
              required: true,
              description:
                ' The name of the domain that contains the source and destination repositories. ',
              schema: {
                type: 'string',
                pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
                minLength: 2,
                maxLength: 50,
              },
            },
          }),
        'domain-owner': z
          .string()
          .regex(/[0-9]{12}/)
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'domain-owner',
              in: 'query',
              required: false,
              description:
                ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
              schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
            },
          }),
        'source-repository': z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'source-repository',
              in: 'query',
              required: true,
              description:
                ' The name of the repository that contains the package versions to be copied. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        'destination-repository': z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'destination-repository',
              in: 'query',
              required: true,
              description: ' The name of the repository into which package versions are copied. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        format: z
          .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
          .openapi({
            param: {
              name: 'format',
              in: 'query',
              required: true,
              description: ' The format of the package versions to be copied. ',
              schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
            },
          }),
        namespace: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            param: {
              name: 'namespace',
              in: 'query',
              required: false,
              description:
                '<p>The namespace of the package versions to be copied. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when copying Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        package: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'package',
              in: 'query',
              required: true,
              description: ' The name of the package that contains the versions to be copied. ',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                versions: z
                  .array(PackageVersionSchema)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      '<p> The versions of the package to be copied. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>',
                  }),
                versionRevisions: z
                  .record(z.string(), PackageVersionRevisionSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      '<p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>',
                  }),
                allowOverwrite: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      ' Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. ',
                  }),
                includeFromUpstream: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      ' Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CopyPackageVersionsResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      486: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const getV1DomainDomainRoute = createRoute({
  method: 'get',
  path: '/v1/domain#domain',
  description:
    ' Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a> object that contains information about the requested domain. ',
  operationId: 'DescribeDomain',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' A string that specifies the name of the requested domain. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDomainResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1DomainDomainRoute = createRoute({
  method: 'post',
  path: '/v1/domain#domain',
  description:
    "<p> Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different Amazon Web Services accounts. An asset is stored only once in a domain, even if it's in multiple repositories. </p> <p>Although you can have multiple domains, we recommend a single production domain that contains all published artifacts so that your development teams can find and share packages. You can use a second pre-production domain to test changes to the production domain configuration. </p>",
  operationId: 'CreateDomain',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain to create. All domain names in an Amazon Web Services Region that are in the same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encryptionKey: z
                .string()
                .regex(/\S+/)
                .min(1)
                .max(1011)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>',
                }),
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'One or more tag key-value pairs for the domain.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteV1DomainDomainRoute = createRoute({
  method: 'delete',
  path: '/v1/domain#domain',
  description:
    ' Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain with repositories, first delete its repositories. ',
  operationId: 'DeleteDomain',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain to delete. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1RepositoryDomainRepositoryRoute = createRoute({
  method: 'get',
  path: '/v1/repository#domain&repository',
  description:
    ' Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository. ',
  operationId: 'DescribeRepository',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain that contains the repository to describe. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' A string that specifies the name of the requested repository. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRepositoryResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putV1RepositoryDomainRepositoryRoute = createRoute({
  method: 'put',
  path: '/v1/repository#domain&repository',
  description: ' Update the properties of a repository. ',
  operationId: 'UpdateRepository',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain associated with the repository to update. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository to update. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .regex(/\P{C}*/u)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' An updated repository description. ' }),
              upstreams: z
                .array(UpstreamRepositorySchema)
                .exactOptional()
                .openapi({
                  description:
                    ' A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRepositoryResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1RepositoryDomainRepositoryRoute = createRoute({
  method: 'post',
  path: '/v1/repository#domain&repository',
  description: ' Creates a repository. ',
  operationId: 'CreateRepository',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain that contains the created repository. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository to create. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .regex(/\P{C}*/u)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' A description of the created repository. ' }),
              upstreams: z
                .array(UpstreamRepositorySchema)
                .exactOptional()
                .openapi({
                  description:
                    ' A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. ',
                }),
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'One or more tag key-value pairs for the repository.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRepositoryResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteV1RepositoryDomainRepositoryRoute = createRoute({
  method: 'delete',
  path: '/v1/repository#domain&repository',
  description: ' Deletes a repository. ',
  operationId: 'DeleteRepository',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain that contains the repository to delete. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository to delete. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRepositoryResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1DomainPermissionsPolicyDomainRoute = createRoute({
  method: 'get',
  path: '/v1/domain/permissions/policy#domain',
  description:
    '<p> Returns the resource policy attached to the specified domain. </p> <note> <p> The policy is a resource-based policy, not an identity-based policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies </a> in the <i>IAM User Guide</i>. </p> </note>',
  operationId: 'GetDomainPermissionsPolicy',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain to which the resource policy is attached. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteV1DomainPermissionsPolicyDomainRoute = createRoute({
  method: 'delete',
  path: '/v1/domain/permissions/policy#domain',
  description: ' Deletes the resource policy set on a domain. ',
  operationId: 'DeleteDomainPermissionsPolicy',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain associated with the resource policy to be deleted. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      'policy-revision': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'policy-revision',
            in: 'query',
            required: false,
            description:
              " The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. ",
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1PackageDomainRepositoryFormatPackageRoute = createRoute({
  method: 'get',
  path: '/v1/package#domain&repository&format&package',
  description:
    ' Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a> object that contains information about the requested package.',
  operationId: 'DescribePackage',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              'The name of the domain that contains the repository that contains the package.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: 'The name of the repository that contains the requested package. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: 'A format that specifies the type of the requested package.',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when requesting Maven packages. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: 'The name of the requested package.',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePackageResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageDomainRepositoryFormatPackageRoute = createRoute({
  method: 'post',
  path: '/v1/package#domain&repository&format&package',
  description:
    '<p>Sets the package origin configuration for a package.</p> <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p> <p> <code>PutPackageOriginConfiguration</code> can be called on a package that doesn\'t yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>',
  operationId: 'PutPackageOriginConfiguration',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              'The name of the domain that contains the repository that contains the package.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: 'The name of the repository that contains the package.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: 'A format that specifies the type of the package to be updated.',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package to be updated. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: 'The name of the package to be updated.',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              restrictions: z
                .object({
                  publish: AllowPublishSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The package origin configuration that determines if new versions of the package can be published directly to the repository.',
                      }),
                  ).exactOptional(),
                  upstream: AllowUpstreamSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The package origin configuration that determines if new versions of the package can be added to the repository from an external connection or upstream source.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.',
                  required: [],
                }),
            })
            .openapi({ required: ['restrictions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPackageOriginConfigurationResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteV1PackageDomainRepositoryFormatPackageRoute = createRoute({
  method: 'delete',
  path: '/v1/package#domain&repository&format&package',
  description:
    'Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html">DeletePackageVersions</a> API.',
  operationId: 'DeletePackage',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: 'The name of the domain that contains the package to delete.',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: 'The name of the repository that contains the package to delete.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: 'The format of the requested package to delete.',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>.</p> </li> <li> <p> Python and NuGet packages do not contain corresponding components, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: 'The name of the package to delete.',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePackageResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionsDeleteDomainRepositoryFormatPackageRoute = createRoute({
  method: 'post',
  path: '/v1/package/versions/delete#domain&repository&format&package',
  description:
    ' Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to <code>Archived</code>. Archived packages cannot be downloaded from a repository and don\'t show up with list package APIs (for example, <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. ',
  operationId: 'DeletePackageVersions',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain that contains the package to delete. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository that contains the package versions to delete. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: ' The format of the package versions to delete. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package versions to be deleted. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: ' The name of the package with the versions to delete. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              versions: z
                .array(PackageVersionSchema)
                .max(100)
                .openapi({
                  description:
                    ' An array of strings that specify the versions of the package to delete. ',
                }),
              expectedStatus: z
                .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
                .exactOptional()
                .openapi({
                  description: ' The expected status of the package version to delete. ',
                }),
            })
            .openapi({ required: ['versions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePackageVersionsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteV1RepositoryPermissionsPoliciesDomainRepositoryRoute = createRoute({
  method: 'delete',
  path: '/v1/repository/permissions/policies#domain&repository',
  description:
    '<p> Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. </p> <important> <p> Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy. </p> </important>',
  operationId: 'DeleteRepositoryPermissionsPolicy',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository associated with the resource policy to be deleted. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository that is associated with the resource policy to be deleted ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      'policy-revision': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'policy-revision',
            in: 'query',
            required: false,
            description:
              " The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy. ",
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRepositoryPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1PackageVersionDomainRepositoryFormatPackageVersionRoute = createRoute({
  method: 'get',
  path: '/v1/package/version#domain&repository&format&package&version',
  description:
    ' Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> object that contains information about the requested package version. ',
  operationId: 'DescribePackageVersion',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the package version. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository that contains the package version. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: ' A format that specifies the type of the requested package version. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the requested package version. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: ' The name of the requested package version. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      version: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description:
              ' A string that contains the package version (for example, <code>3.5.2</code>). ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePackageVersionResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionsDisposeDomainRepositoryFormatPackageRoute = createRoute({
  method: 'post',
  path: '/v1/package/versions/dispose#domain&repository&format&package',
  description:
    '<p> Deletes the assets in package versions and sets the package versions\' status to <code>Disposed</code>. A disposed package version cannot be restored in your repository because its assets are deleted. </p> <p> To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter to <code>Disposed</code>. </p> <p> To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>. </p>',
  operationId: 'DisposePackageVersions',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository you want to dispose. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository that contains the package versions you want to dispose. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' A format that specifies the type of package versions you want to dispose. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package versions to be disposed. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: ' The name of the package with the versions you want to dispose. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              versions: z
                .array(PackageVersionSchema)
                .max(100)
                .openapi({ description: ' The versions of the package you want to dispose. ' }),
              versionRevisions: z
                .record(z.string(), PackageVersionRevisionSchema)
                .exactOptional()
                .openapi({
                  description: ' The revisions of the package versions you want to dispose. ',
                }),
              expectedStatus: z
                .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
                .exactOptional()
                .openapi({
                  description: ' The expected status of the package version to dispose. ',
                }),
            })
            .openapi({ required: ['versions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisposePackageVersionsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1AuthorizationTokenDomainRoute = createRoute({
  method: 'post',
  path: '/v1/authorization-token#domain',
  description:
    '<p> Generates a temporary authorization token for accessing repositories in the domain. This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions. For more information about authorization tokens, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">CodeArtifact authentication and tokens</a>. </p> <note> <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command. You can call <code>login</code> periodically to refresh the token. When you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period, up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p> <p>The authorization period begins after <code>login</code> or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while assuming a role, the token lifetime is independent of the maximum session duration of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then generate a CodeArtifact authorization token, the token will be valid for the full authorization period even though this is longer than the 15-minute session duration.</p> <p>See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> for more information on controlling session duration. </p> </note>',
  operationId: 'GetAuthorizationToken',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that is in scope for the generated authorization token. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      duration: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(43200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration',
            in: 'query',
            required: false,
            description:
              "The time, in seconds, that the generated authorization token is valid. Valid values are <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours). A value of <code>0</code> will set the expiration of the authorization token to the same expiration of the user's role's temporary credentials.",
            schema: { type: 'integer', minimum: 0, maximum: 43200 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAuthorizationTokenResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRoute = createRoute({
  method: 'get',
  path: '/v1/package/version/asset#domain&repository&format&package&version&asset',
  description:
    ' Returns an asset (or file) that is in a package. For example, for a Maven package version, use <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file, or any other assets in the package version. ',
  operationId: 'GetPackageVersionAsset',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the package version with the requested asset. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The repository that contains the package version with the requested asset. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' A format that specifies the type of the package version with the requested asset file. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package version with the requested asset file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: ' The name of the package that contains the requested asset. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      version: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description:
              ' A string that contains the package version (for example, <code>3.5.2</code>). ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      asset: z
        .string()
        .regex(/\P{C}+/u)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'asset',
            in: 'query',
            required: true,
            description: ' The name of the requested asset. ',
            schema: { type: 'string', pattern: '\\P{C}+', minLength: 1, maxLength: 255 },
          },
        }),
      revision: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'revision',
            in: 'query',
            required: false,
            description:
              ' The name of the package version revision that contains the requested asset. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPackageVersionAssetResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRoute = createRoute({
  method: 'get',
  path: '/v1/package/version/readme#domain&repository&format&package&version',
  description:
    '<p> Gets the readme file or descriptive text for a package version. </p> <p> The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText. </p>',
  operationId: 'GetPackageVersionReadme',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the package version with the requested readme file. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The repository that contains the package with the requested readme file. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' A format that specifies the type of the package version with the requested readme file. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package version with the requested readme file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description:
              ' The name of the package version that contains the requested readme file. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      version: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description:
              ' A string that contains the package version (for example, <code>3.5.2</code>). ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPackageVersionReadmeResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1RepositoryEndpointDomainRepositoryFormatRoute = createRoute({
  method: 'get',
  path: '/v1/repository/endpoint#domain&repository&format',
  description:
    '<p> Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> </ul>',
  operationId: 'GetRepositoryEndpoint',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description: ' The name of the domain that contains the repository. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' Returns which endpoint of a repository to return. A repository has one endpoint for each package format. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryEndpointResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getV1RepositoryPermissionsPolicyDomainRepositoryRoute = createRoute({
  method: 'get',
  path: '/v1/repository/permissions/policy#domain&repository',
  description: ' Returns the resource policy that is set on a repository. ',
  operationId: 'GetRepositoryPermissionsPolicy',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain containing the repository whose associated resource policy is to be retrieved. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository whose associated resource policy is to be retrieved. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putV1RepositoryPermissionsPolicyDomainRepositoryRoute = createRoute({
  method: 'put',
  path: '/v1/repository/permissions/policy#domain&repository',
  description:
    '<p> Sets the resource policy on a repository that specifies permissions to access it. </p> <p> When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy. </p>',
  operationId: 'PutRepositoryPermissionsPolicy',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain containing the repository to set the resource policy on. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository to set the resource policy on. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policyRevision: z
                .string()
                .regex(/\S+/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    " Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy. ",
                }),
              policyDocument: z
                .string()
                .regex(/[\P{C}\s]+/u)
                .min(1)
                .max(7168)
                .openapi({
                  description:
                    ' A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository. ',
                }),
            })
            .openapi({ required: ['policyDocument'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRepositoryPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1DomainsRoute = createRoute({
  method: 'post',
  path: '/v1/domains',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes this call. Each returned <code>DomainSummary</code> object contains information about a domain. ',
  operationId: 'ListDomains',
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
      content: {
        'application/json': {
          schema: z
            .object({
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The maximum number of results to return per page. ' }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRoute = createRoute({
  method: 'post',
  path: '/v1/package/version/assets#domain&repository&format&package&version',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects for assets in a package version. ',
  operationId: 'ListPackageVersionAssets',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository associated with the package version assets. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository that contains the package that contains the requested package version assets. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' The format of the package that contains the requested package version assets. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description:
              ' The name of the package that contains the requested package version assets. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      version: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description:
              ' A string that contains the package version (for example, <code>3.5.2</code>). ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: ' The maximum number of results to return per page. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      'next-token': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPackageVersionAssetsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRoute =
  createRoute({
    method: 'post',
    path: '/v1/package/version/dependencies#domain&repository&format&package&version',
    description:
      ' Returns the direct dependencies for a package version. The dependencies are returned as <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file for Maven). Any package version dependencies that are not listed in the configuration file are not returned. ',
    operationId: 'ListPackageVersionDependencies',
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
        domain: z
          .string()
          .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
          .min(2)
          .max(50)
          .openapi({
            param: {
              name: 'domain',
              in: 'query',
              required: true,
              description:
                ' The name of the domain that contains the repository that contains the requested package version dependencies. ',
              schema: {
                type: 'string',
                pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
                minLength: 2,
                maxLength: 50,
              },
            },
          }),
        'domain-owner': z
          .string()
          .regex(/[0-9]{12}/)
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'domain-owner',
              in: 'query',
              required: false,
              description:
                ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
              schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
            },
          }),
        repository: z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'repository',
              in: 'query',
              required: true,
              description:
                ' The name of the repository that contains the requested package version. ',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        format: z
          .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
          .openapi({
            param: {
              name: 'format',
              in: 'query',
              required: true,
              description: ' The format of the package with the requested dependencies. ',
              schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
            },
          }),
        namespace: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            param: {
              name: 'namespace',
              in: 'query',
              required: false,
              description:
                '<p>The namespace of the package version with the requested dependencies. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        package: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'package',
              in: 'query',
              required: true,
              description: " The name of the package versions' package. ",
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        version: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              required: true,
              description:
                ' A string that contains the package version (for example, <code>3.5.2</code>). ',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        'next-token': z
          .string()
          .regex(/\S+/)
          .min(1)
          .max(2000)
          .exactOptional()
          .openapi({
            param: {
              name: 'next-token',
              in: 'query',
              required: false,
              description:
                ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
              schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListPackageVersionDependenciesResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const postV1PackageVersionsDomainRepositoryFormatPackageRoute = createRoute({
  method: 'post',
  path: '/v1/package/versions#domain&repository&format&package',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a> objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no <code>--status</code> parameter. ',
  operationId: 'ListPackageVersions',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the requested package versions. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The name of the repository that contains the requested package versions. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description: ' The format of the package versions you want to list. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description:
              ' The name of the package for which you want to request package versions. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      status: z
        .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: ' A string that filters the requested package versions by status. ',
            schema: {
              type: 'string',
              enum: ['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'],
            },
          },
        }),
      sortBy: z
        .literal('PUBLISHED_TIME')
        .exactOptional()
        .openapi({
          param: {
            name: 'sortBy',
            in: 'query',
            required: false,
            description: ' How to sort the requested list of package versions. ',
            schema: { type: 'string', enum: ['PUBLISHED_TIME'] },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: ' The maximum number of results to return per page. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      'next-token': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
          },
        }),
      originType: z
        .enum(['INTERNAL', 'EXTERNAL', 'UNKNOWN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'originType',
            in: 'query',
            required: false,
            description:
              'The <code>originType</code> used to filter package versions. Only package versions with the provided <code>originType</code> will be returned.',
            schema: { type: 'string', enum: ['INTERNAL', 'EXTERNAL', 'UNKNOWN'] },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPackageVersionsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackagesDomainRepositoryRoute = createRoute({
  method: 'post',
  path: '/v1/packages#domain&repository',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a> objects for packages in a repository that match the request parameters. ',
  operationId: 'ListPackages',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the requested packages. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description: ' The name of the repository that contains the requested packages. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: false,
            description:
              'The format used to filter requested packages. Only packages from the provided format will be returned.',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p> <p>Each package format uses namespace as follows:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      'package-prefix': z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'package-prefix',
            in: 'query',
            required: false,
            description:
              ' A prefix used to filter requested packages. Only packages with names that start with <code>packagePrefix</code> are returned. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: ' The maximum number of results to return per page. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      'next-token': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
          },
        }),
      publish: z
        .enum(['ALLOW', 'BLOCK'])
        .exactOptional()
        .openapi({
          param: {
            name: 'publish',
            in: 'query',
            required: false,
            description:
              'The value of the <code>Publish</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.',
            schema: { type: 'string', enum: ['ALLOW', 'BLOCK'] },
          },
        }),
      upstream: z
        .enum(['ALLOW', 'BLOCK'])
        .exactOptional()
        .openapi({
          param: {
            name: 'upstream',
            in: 'query',
            required: false,
            description:
              'The value of the <code>Upstream</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.',
            schema: { type: 'string', enum: ['ALLOW', 'BLOCK'] },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPackagesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1RepositoriesRoute = createRoute({
  method: 'post',
  path: '/v1/repositories',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified Amazon Web Services account and that matches the input parameters. ',
  operationId: 'ListRepositories',
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
      'repository-prefix': z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'repository-prefix',
            in: 'query',
            required: false,
            description:
              ' A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: ' The maximum number of results to return per page. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      'next-token': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositoriesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1DomainRepositoriesDomainRoute = createRoute({
  method: 'post',
  path: '/v1/domain/repositories#domain',
  description:
    ' Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input parameters. ',
  operationId: 'ListRepositoriesInDomain',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the returned list of repositories. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      'administrator-account': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'administrator-account',
            in: 'query',
            required: false,
            description:
              ' Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      'repository-prefix': z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'repository-prefix',
            in: 'query',
            required: false,
            description:
              ' A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: ' The maximum number of results to return per page. ',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      'next-token': z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              ' The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 2000 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositoriesInDomainResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tags#resourceArn',
  description:
    'Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in CodeArtifact.',
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
    query: z.object({
      resourceArn: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource to get tags for.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Route =
  createRoute({
    method: 'post',
    path: '/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256',
    description:
      '<p>Creates a new package version containing one or more assets (or files).</p> <p>The <code>unfinished</code> flag can be used to keep the package version in the <code>Unfinished</code> state until all of its assets have been uploaded (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact user guide</i>). To set the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag when uploading the final asset, or set the status using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionStatus</a>. Once a package version’s status is set to <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p> <note> <p>Only generic packages can be published using this API. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html">Using generic packages</a> in the <i>CodeArtifact User Guide</i>.</p> </note>',
    operationId: 'PublishPackageVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-content-sha256': z
          .string()
          .regex(/[0-9a-f]+/)
          .length(64)
          .openapi({
            param: {
              name: 'x-amz-content-sha256',
              in: 'header',
              required: true,
              description:
                '<p>The SHA256 hash of the <code>assetContent</code> to publish. This value must be calculated by the caller and provided with the request (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html#publishing-generic-packages">Publishing a generic package</a> in the <i>CodeArtifact User Guide</i>).</p> <p>This value is used as an integrity check to verify that the <code>assetContent</code> has not changed after it was originally sent.</p>',
              schema: { type: 'string', pattern: '[0-9a-f]+', minLength: 64, maxLength: 64 },
            },
          }),
      }),
      query: z.object({
        domain: z
          .string()
          .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
          .min(2)
          .max(50)
          .openapi({
            param: {
              name: 'domain',
              in: 'query',
              required: true,
              description:
                'The name of the domain that contains the repository that contains the package version to publish.',
              schema: {
                type: 'string',
                pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
                minLength: 2,
                maxLength: 50,
              },
            },
          }),
        'domain-owner': z
          .string()
          .regex(/[0-9]{12}/)
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'domain-owner',
              in: 'query',
              required: false,
              description:
                'The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.',
              schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
            },
          }),
        repository: z
          .string()
          .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'repository',
              in: 'query',
              required: true,
              description:
                'The name of the repository that the package version will be published to.',
              schema: {
                type: 'string',
                pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
                minLength: 2,
                maxLength: 100,
              },
            },
          }),
        format: z
          .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
          .openapi({
            param: {
              name: 'format',
              in: 'query',
              required: true,
              description:
                'A format that specifies the type of the package version with the requested asset file.',
              schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
            },
          }),
        namespace: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            param: {
              name: 'namespace',
              in: 'query',
              required: false,
              description: 'The namespace of the package version to publish.',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        package: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'package',
              in: 'query',
              required: true,
              description: 'The name of the package version to publish.',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        version: z
          .string()
          .regex(/[^#\/\s]+/)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              required: true,
              description: 'The package version to publish (for example, <code>3.5.2</code>).',
              schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
            },
          }),
        asset: z
          .string()
          .regex(/\P{C}+/u)
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'asset',
              in: 'query',
              required: true,
              description:
                'The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: <code>~ ! @ ^ &amp; ( ) - ` _ + [ ] { } ; , . `</code> ',
              schema: { type: 'string', pattern: '\\P{C}+', minLength: 1, maxLength: 255 },
            },
          }),
        unfinished: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'unfinished',
              in: 'query',
              required: false,
              description:
                '<p>Specifies whether the package version should remain in the <code>unfinished</code> state. If omitted, the package version status will be set to <code>Published</code> (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>).</p> <p>Valid values: <code>unfinished</code> </p>',
              schema: { type: 'boolean' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                assetContent: z
                  .string()
                  .openapi({ description: 'The content of the asset to publish.' }),
              })
              .openapi({ required: ['assetContent'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PublishPackageVersionResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      486: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
    },
  })

export const putV1DomainPermissionsPolicyRoute = createRoute({
  method: 'put',
  path: '/v1/domain/permissions/policy',
  description:
    '<p> Sets a resource policy on a domain that specifies permissions to access it. </p> <p> When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy. </p>',
  operationId: 'PutDomainPermissionsPolicy',
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
              domain: z
                .string()
                .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
                .min(2)
                .max(50)
                .openapi({
                  description: ' The name of the domain on which to set the resource policy. ',
                }),
              domainOwner: z
                .string()
                .regex(/[0-9]{12}/)
                .length(12)
                .exactOptional()
                .openapi({
                  description:
                    ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
                }),
              policyRevision: z
                .string()
                .regex(/\S+/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    " The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. ",
                }),
              policyDocument: z
                .string()
                .regex(/[\P{C}\s]+/u)
                .min(1)
                .max(7168)
                .openapi({
                  description:
                    ' A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain. ',
                }),
            })
            .openapi({ required: ['domain', 'policyDocument'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDomainPermissionsPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1TagResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tag#resourceArn',
  description: 'Adds or updates tags for a resource in CodeArtifact.',
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
    query: z.object({
      resourceArn: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .openapi({ description: 'The tags you want to modify or add to the resource.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1UntagResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/untag#resourceArn',
  description: 'Removes tags from a resource in CodeArtifact.',
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
    query: z.object({
      resourceArn: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to remove tags from.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tagKeys: z
                .array(TagKeySchema)
                .min(0)
                .max(200)
                .openapi({
                  description:
                    'The tag key for each tag that you want to remove from the resource.',
                }),
            })
            .openapi({ required: ['tagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRoute = createRoute({
  method: 'post',
  path: '/v1/package/versions/update_status#domain&repository&format&package',
  description:
    ' Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>, you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>. To set the status of a package version to <code>Disposed</code>, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>. ',
  operationId: 'UpdatePackageVersionsStatus',
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
      domain: z
        .string()
        .regex(/[a-z][a-z0-9\-]{0,48}[a-z0-9]/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: true,
            description:
              ' The name of the domain that contains the repository that contains the package versions with a status to be updated. ',
            schema: {
              type: 'string',
              pattern: '[a-z][a-z0-9\\-]{0,48}[a-z0-9]',
              minLength: 2,
              maxLength: 50,
            },
          },
        }),
      'domain-owner': z
        .string()
        .regex(/[0-9]{12}/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain-owner',
            in: 'query',
            required: false,
            description:
              ' The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ',
            schema: { type: 'string', pattern: '[0-9]{12}', minLength: 12, maxLength: 12 },
          },
        }),
      repository: z
        .string()
        .regex(/[A-Za-z0-9][A-Za-z0-9._\-]{1,99}/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'repository',
            in: 'query',
            required: true,
            description:
              ' The repository that contains the package versions with the status you want to update. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z0-9][A-Za-z0-9._\\-]{1,99}',
              minLength: 2,
              maxLength: 100,
            },
          },
        }),
      format: z
        .enum(['npm', 'pypi', 'maven', 'nuget', 'generic'])
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              ' A format that specifies the type of the package with the statuses to update. ',
            schema: { type: 'string', enum: ['npm', 'pypi', 'maven', 'nuget', 'generic'] },
          },
        }),
      namespace: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'namespace',
            in: 'query',
            required: false,
            description:
              '<p>The namespace of the package version to be updated. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
      package: z
        .string()
        .regex(/[^#\/\s]+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'package',
            in: 'query',
            required: true,
            description: ' The name of the package with the version statuses to update. ',
            schema: { type: 'string', pattern: '[^#/\\s]+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              versions: z
                .array(PackageVersionSchema)
                .max(100)
                .openapi({
                  description:
                    ' An array of strings that specify the versions of the package with the statuses to update. ',
                }),
              versionRevisions: z
                .record(z.string(), PackageVersionRevisionSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. ',
                }),
              expectedStatus: z
                .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
                .exactOptional()
                .openapi({
                  description:
                    " The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. ",
                }),
              targetStatus: z
                .enum(['Published', 'Unfinished', 'Unlisted', 'Archived', 'Disposed', 'Deleted'])
                .openapi({
                  description: ' The status you want to change the package version status to. ',
                }),
            })
            .openapi({ required: ['versions', 'targetStatus'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePackageVersionsStatusResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
