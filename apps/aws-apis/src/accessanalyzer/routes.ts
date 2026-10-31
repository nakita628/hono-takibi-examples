import { createRoute, z } from '@hono/zod-openapi'

const EbsUserIdSchema = z.string().openapi('EbsUserId')

const EbsUserIdListSchema = z.array(EbsUserIdSchema).openapi('EbsUserIdList')

const EbsGroupSchema = z.string().openapi('EbsGroup')

const EbsGroupListSchema = z.array(EbsGroupSchema).openapi('EbsGroupList')

const EbsSnapshotDataEncryptionKeyIdSchema = z.string().openapi('EbsSnapshotDataEncryptionKeyId')

const EbsSnapshotConfigurationSchema = z
  .object({
    userIds: EbsUserIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Amazon Web Services accounts that have access to the Amazon EBS volume snapshot.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>userIds</code>, then the access preview uses the existing shared <code>userIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>userIds</code>, then the access preview considers the snapshot without any <code>userIds</code>.</p> </li> <li> <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an empty list for <code>userIds</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    groups: EbsGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The groups that have access to the Amazon EBS volume snapshot. If the value <code>all</code> is specified, then the Amazon EBS volume snapshot is public.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>groups</code>, then the access preview uses the existing shared <code>groups</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>groups</code>, then the access preview considers the snapshot without any <code>groups</code>.</p> </li> <li> <p>To propose deletion of existing shared <code>groups</code>, you can specify an empty list for <code>groups</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    kmsKeyId: EbsSnapshotDataEncryptionKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for an encrypted Amazon EBS volume snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the <code>kmsKeyId</code>, the access preview considers the snapshot as unencrypted.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.',
    required: [],
  })
  .openapi('EbsSnapshotConfiguration')

const EcrRepositoryPolicySchema = z.string().openapi('EcrRepositoryPolicy')

const EcrRepositoryConfigurationSchema = z
  .object({
    repositoryPolicy: EcrRepositoryPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON repository policy text to apply to the Amazon ECR repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Private repository policy examples</a> in the <i>Amazon ECR User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.</p> </li> </ul>',
    required: [],
  })
  .openapi('EcrRepositoryConfiguration')

const IamTrustPolicySchema = z.string().openapi('IamTrustPolicy')

const IamRoleConfigurationSchema = z
  .object({
    trustPolicy: IamTrustPolicySchema.and(
      z.any().openapi({ description: 'The proposed trust policy for the IAM role.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a>.',
    required: [],
  })
  .openapi('IamRoleConfiguration')

const EfsFileSystemPolicySchema = z.string().openapi('EfsFileSystemPolicy')

const EfsFileSystemConfigurationSchema = z
  .object({
    fileSystemPolicy: EfsFileSystemPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON policy definition to apply to the Amazon EFS file system. For more information on the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">Amazon EFS Resource-based policies</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.</p> </li> </ul>',
    required: [],
  })
  .openapi('EfsFileSystemConfiguration')

const KmsKeyPolicySchema = z.string().openapi('KmsKeyPolicy')

const KmsKeyPoliciesMapSchema = z
  .record(z.string(), KmsKeyPolicySchema)
  .openapi('KmsKeyPoliciesMap')

const KmsGrantOperationSchema = z
  .enum([
    'CreateGrant',
    'Decrypt',
    'DescribeKey',
    'Encrypt',
    'GenerateDataKey',
    'GenerateDataKeyPair',
    'GenerateDataKeyPairWithoutPlaintext',
    'GenerateDataKeyWithoutPlaintext',
    'GetPublicKey',
    'ReEncryptFrom',
    'ReEncryptTo',
    'RetireGrant',
    'Sign',
    'Verify',
  ])
  .openapi('KmsGrantOperation')

const KmsGrantOperationsListSchema = z
  .array(KmsGrantOperationSchema)
  .openapi('KmsGrantOperationsList')

const GranteePrincipalSchema = z.string().openapi('GranteePrincipal')

const RetiringPrincipalSchema = z.string().openapi('RetiringPrincipal')

const KmsConstraintsValueSchema = z.string().openapi('KmsConstraintsValue')

const KmsConstraintsMapSchema = z
  .record(z.string(), KmsConstraintsValueSchema)
  .openapi('KmsConstraintsMap')

const KmsGrantConstraintsSchema = z
  .object({
    encryptionContextEquals: KmsConstraintsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.',
        }),
    ).exactOptional(),
    encryptionContextSubset: KmsConstraintsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that must be included in the encryption context of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.',
    required: [],
  })
  .openapi('KmsGrantConstraints')

const IssuingAccountSchema = z.string().openapi('IssuingAccount')

const KmsGrantConfigurationSchema = z
  .object({
    operations: KmsGrantOperationsListSchema.and(
      z.any().openapi({ description: 'A list of operations that the grant permits.' }),
    ),
    granteePrincipal: GranteePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The principal that is given permission to perform the operations that the grant permits.',
        }),
    ),
    retiringPrincipal: RetiringPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The principal that is given permission to retire the grant by using <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html">RetireGrant</a> operation.',
        }),
    ).exactOptional(),
    constraints: KmsGrantConstraintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>.',
        }),
    ).exactOptional(),
    issuingAccount: IssuingAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Web Services account under which the grant was issued. The account is used to propose KMS grants issued by accounts other than the owner of the key.',
        }),
    ),
  })
  .openapi({
    required: ['operations', 'granteePrincipal', 'issuingAccount'],
    description:
      'A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.',
  })
  .openapi('KmsGrantConfiguration')

const KmsGrantConfigurationsListSchema = z
  .array(KmsGrantConfigurationSchema)
  .openapi('KmsGrantConfigurationsList')

const KmsKeyConfigurationSchema = z
  .object({
    keyPolicies: KmsKeyPoliciesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Resource policy configuration for the KMS key. The only valid value for the name of the key policy is <code>default</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>.',
        }),
    ).exactOptional(),
    grants: KmsGrantConfigurationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of proposed grant configurations for the KMS key. If the proposed grant configuration is for an existing key, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the key.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/>',
    required: [],
  })
  .openapi('KmsKeyConfiguration')

const RdsDbClusterSnapshotAccountIdSchema = z.string().openapi('RdsDbClusterSnapshotAccountId')

const RdsDbClusterSnapshotAccountIdsListSchema = z
  .array(RdsDbClusterSnapshotAccountIdSchema)
  .openapi('RdsDbClusterSnapshotAccountIdsList')

const RdsDbClusterSnapshotAttributeValueSchema = z
  .object({
    accountIds: RdsDbClusterSnapshotAccountIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB cluster snapshot. If the value <code>all</code> is specified, then the Amazon RDS DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the <code>accountIds</code> in <code>RdsDbClusterSnapshotAttributeValue</code>, then the access preview uses the existing shared <code>accountIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>accountIds</code> in <code>RdsDbClusterSnapshotAttributeValue</code>, then the access preview considers the snapshot without any attributes.</p> </li> <li> <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an empty list for <code>accountIds</code> in the <code>RdsDbClusterSnapshotAttributeValue</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The values for a manual Amazon RDS DB cluster snapshot attribute.',
    required: [],
  })
  .openapi('RdsDbClusterSnapshotAttributeValue')

const RdsDbClusterSnapshotAttributesMapSchema = z
  .record(z.string(), RdsDbClusterSnapshotAttributeValueSchema)
  .openapi('RdsDbClusterSnapshotAttributesMap')

const RdsDbClusterSnapshotKmsKeyIdSchema = z.string().openapi('RdsDbClusterSnapshotKmsKeyId')

const RdsDbClusterSnapshotConfigurationSchema = z
  .object({
    attributes: RdsDbClusterSnapshotAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names and values of manual DB cluster snapshot attributes. Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. The only valid value for <code>AttributeName</code> for the attribute map is <code>restore</code> ',
        }),
    ).exactOptional(),
    kmsKeyId: RdsDbClusterSnapshotKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for an encrypted Amazon RDS DB cluster snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>kmsKeyId</code>, then the access preview considers the snapshot as unencrypted.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.',
    required: [],
  })
  .openapi('RdsDbClusterSnapshotConfiguration')

const RdsDbSnapshotAccountIdSchema = z.string().openapi('RdsDbSnapshotAccountId')

const RdsDbSnapshotAccountIdsListSchema = z
  .array(RdsDbSnapshotAccountIdSchema)
  .openapi('RdsDbSnapshotAccountIdsList')

const RdsDbSnapshotAttributeValueSchema = z
  .object({
    accountIds: RdsDbSnapshotAccountIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB snapshot. If the value <code>all</code> is specified, then the Amazon RDS DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the access preview uses the existing shared <code>accountIds</code> for the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the access preview considers the snapshot without any attributes.</p> </li> <li> <p>To propose deletion of an existing shared <code>accountIds</code>, you can specify an empty list for <code>accountIds</code> in the <code>RdsDbSnapshotAttributeValue</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot.',
    required: [],
  })
  .openapi('RdsDbSnapshotAttributeValue')

const RdsDbSnapshotAttributesMapSchema = z
  .record(z.string(), RdsDbSnapshotAttributeValueSchema)
  .openapi('RdsDbSnapshotAttributesMap')

const RdsDbSnapshotKmsKeyIdSchema = z.string().openapi('RdsDbSnapshotKmsKeyId')

const RdsDbSnapshotConfigurationSchema = z
  .object({
    attributes: RdsDbSnapshotAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid value for <code>attributeName</code> for the attribute map is restore.',
        }),
    ).exactOptional(),
    kmsKeyId: RdsDbSnapshotKmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for an encrypted Amazon RDS DB snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <ul> <li> <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the <code>kmsKeyId</code>, or you specify an empty string, then the access preview uses the existing <code>kmsKeyId</code> of the snapshot.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the specify the <code>kmsKeyId</code>, then the access preview considers the snapshot as unencrypted.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>.',
    required: [],
  })
  .openapi('RdsDbSnapshotConfiguration')

const SecretsManagerSecretKmsIdSchema = z.string().openapi('SecretsManagerSecretKmsId')

const SecretsManagerSecretPolicySchema = z.string().openapi('SecretsManagerSecretPolicy')

const SecretsManagerSecretConfigurationSchema = z
  .object({
    kmsKeyId: SecretsManagerSecretKmsIdSchema.and(
      z.any().openapi({ description: 'The proposed ARN, key ID, or alias of the KMS key.' }),
    ).exactOptional(),
    secretPolicy: SecretsManagerSecretPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The proposed resource policy defining who can access or manage the secret.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p> <p>You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for Secrets Manager.</a>.</p>',
    required: [],
  })
  .openapi('SecretsManagerSecretConfiguration')

const S3BucketPolicySchema = z.string().openapi('S3BucketPolicy')

const AclPermissionSchema = z
  .enum(['READ', 'WRITE', 'READ_ACP', 'WRITE_ACP', 'FULL_CONTROL'])
  .openapi('AclPermission')

const AclCanonicalIdSchema = z.string().openapi('AclCanonicalId')

const AclUriSchema = z.string().openapi('AclUri')

const AclGranteeSchema = z
  .object({
    id: AclCanonicalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value specified is the canonical user ID of an Amazon Web Services account.',
        }),
    ).exactOptional(),
    uri: AclUriSchema.and(
      z.any().openapi({ description: 'Used for granting permissions to a predefined group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.',
    required: [],
  })
  .openapi('AclGrantee')

const S3BucketAclGrantConfigurationSchema = z
  .object({
    permission: AclPermissionSchema.and(
      z.any().openapi({ description: 'The permissions being granted.' }),
    ),
    grantee: AclGranteeSchema.and(
      z.any().openapi({ description: 'The grantee to whom you’re assigning access rights.' }),
    ),
  })
  .openapi({
    required: ['permission', 'grantee'],
    description:
      'A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.',
  })
  .openapi('S3BucketAclGrantConfiguration')

const S3BucketAclGrantConfigurationsListSchema = z
  .array(S3BucketAclGrantConfigurationSchema)
  .openapi('S3BucketAclGrantConfigurationsList')

const BooleanSchema = z.boolean().openapi('Boolean')

const S3PublicAccessBlockConfigurationSchema = z
  .object({
    ignorePublicAcls: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. ',
        }),
    ),
    restrictPublicBuckets: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether Amazon S3 should restrict public bucket policies for this bucket. ',
        }),
    ),
  })
  .openapi({
    required: ['ignorePublicAcls', 'restrictPublicBuckets'],
    description:
      'The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>. ',
  })
  .openapi('S3PublicAccessBlockConfiguration')

const AccessPointPolicySchema = z.string().openapi('AccessPointPolicy')

const VpcIdSchema = z
  .string()
  .regex(/vpc-([0-9a-f]){8}(([0-9a-f]){9})?/)
  .openapi('VpcId')

const VpcConfigurationSchema = z
  .object({
    vpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If this field is specified, this access point will only allow connections from the specified VPC ID. ',
        }),
    ),
  })
  .openapi({
    required: ['vpcId'],
    description:
      'The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. ',
  })
  .openapi('VpcConfiguration')

const InternetConfigurationSchema = z
  .object({})
  .openapi({
    description:
      'This configuration sets the network origin for the Amazon S3 access point or multi-region access point to <code>Internet</code>.',
  })
  .openapi('InternetConfiguration')

const NetworkOriginConfigurationSchema = z
  .object({
    vpcConfiguration: VpcConfigurationSchema.exactOptional(),
    internetConfiguration: InternetConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for the Amazon S3 access point or multi-region access point with an <code>Internet</code> origin.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.',
    required: [],
  })
  .openapi('NetworkOriginConfiguration')

const S3AccessPointConfigurationSchema = z
  .object({
    accessPointPolicy: AccessPointPolicySchema.and(
      z.any().openapi({ description: 'The access point or multi-region access point policy.' }),
    ).exactOptional(),
    publicAccessBlock: S3PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The proposed <code>S3PublicAccessBlock</code> configuration to apply to this Amazon S3 access point or multi-region access point.',
        }),
    ).exactOptional(),
    networkOrigin: NetworkOriginConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The proposed <code>Internet</code> and <code>VpcConfiguration</code> to apply to this Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. If the access preview is for a new resource and neither is specified, the access preview uses <code>Internet</code> for the network origin. If the access preview is for an existing resource and neither is specified, the access preview uses the exiting network origin.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>.',
    required: [],
  })
  .openapi('S3AccessPointConfiguration')

const S3AccessPointConfigurationsMapSchema = z
  .record(z.string(), S3AccessPointConfigurationSchema)
  .openapi('S3AccessPointConfigurationsMap')

const S3BucketConfigurationSchema = z
  .object({
    bucketPolicy: S3BucketPolicySchema.and(
      z.any().openapi({ description: 'The proposed bucket policy for the Amazon S3 bucket.' }),
    ).exactOptional(),
    bucketAclGrants: S3BucketAclGrantConfigurationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL grants per bucket. If the proposed grant configuration is for an existing bucket, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the bucket.',
        }),
    ).exactOptional(),
    bucketPublicAccessBlock: S3PublicAccessBlockConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The proposed block public access configuration for the Amazon S3 bucket.',
        }),
    ).exactOptional(),
    accessPoints: S3AccessPointConfigurationsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of Amazon S3 access points or multi-region access points for the bucket. You can propose up to 10 new access points per bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.',
    required: [],
  })
  .openapi('S3BucketConfiguration')

const SnsTopicPolicySchema = z.string().min(0).max(30720).openapi('SnsTopicPolicy')

const SnsTopicConfigurationSchema = z
  .object({
    topicPolicy: SnsTopicPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON policy text that defines who can access an Amazon SNS topic. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html">Example cases for Amazon SNS access control</a> in the <i>Amazon SNS Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>.',
    required: [],
  })
  .openapi('SnsTopicConfiguration')

const SqsQueuePolicySchema = z.string().openapi('SqsQueuePolicy')

const SqsQueueConfigurationSchema = z
  .object({
    queuePolicy: SqsQueuePolicySchema.and(
      z.any().openapi({ description: ' The proposed resource policy for the Amazon SQS queue. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>.',
    required: [],
  })
  .openapi('SqsQueueConfiguration')

type ConfigurationType = {
  ebsSnapshot?: z.infer<typeof EbsSnapshotConfigurationSchema> & { [key: string]: unknown }
  ecrRepository?: z.infer<typeof EcrRepositoryConfigurationSchema> & { [key: string]: unknown }
  iamRole?: z.infer<typeof IamRoleConfigurationSchema> & { [key: string]: unknown }
  efsFileSystem?: z.infer<typeof EfsFileSystemConfigurationSchema> & { [key: string]: unknown }
  kmsKey?: z.infer<typeof KmsKeyConfigurationSchema> & { [key: string]: unknown }
  rdsDbClusterSnapshot?: z.infer<typeof RdsDbClusterSnapshotConfigurationSchema> & {
    [key: string]: unknown
  }
  rdsDbSnapshot?: z.infer<typeof RdsDbSnapshotConfigurationSchema> & { [key: string]: unknown }
  secretsManagerSecret?: z.infer<typeof SecretsManagerSecretConfigurationSchema> & {
    [key: string]: unknown
  }
  s3Bucket?: z.infer<typeof S3BucketConfigurationSchema> & { [key: string]: unknown }
  snsTopic?: z.infer<typeof SnsTopicConfigurationSchema> & { [key: string]: unknown }
  sqsQueue?: z.infer<typeof SqsQueueConfigurationSchema> & { [key: string]: unknown }
}

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const CancelPolicyGenerationResponseSchema = z.object({}).openapi('CancelPolicyGenerationResponse')

const AccessPreviewIdSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .openapi('AccessPreviewId')

const CreateAccessPreviewResponseSchema = z
  .object({
    id: AccessPreviewIdSchema.and(
      z.any().openapi({ description: 'The unique ID for the access preview.' }),
    ),
  })
  .openapi({ required: ['id'] })
  .openapi('CreateAccessPreviewResponse')

const ConfigurationSchema: z.ZodType<ConfigurationType> = z
  .lazy(() =>
    z
      .object({
        ebsSnapshot: EbsSnapshotConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon EBS volume snapshot.',
            }),
        ).exactOptional(),
        ecrRepository: EcrRepositoryConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon ECR repository.',
            }),
        ).exactOptional(),
        iamRole: IamRoleConfigurationSchema.and(
          z.any().openapi({ description: 'The access control configuration is for an IAM role. ' }),
        ).exactOptional(),
        efsFileSystem: EfsFileSystemConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon EFS file system.',
            }),
        ).exactOptional(),
        kmsKey: KmsKeyConfigurationSchema.and(
          z.any().openapi({ description: 'The access control configuration is for a KMS key. ' }),
        ).exactOptional(),
        rdsDbClusterSnapshot: RdsDbClusterSnapshotConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The access control configuration is for an Amazon RDS DB cluster snapshot.',
            }),
        ).exactOptional(),
        rdsDbSnapshot: RdsDbSnapshotConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon RDS DB snapshot.',
            }),
        ).exactOptional(),
        secretsManagerSecret: SecretsManagerSecretConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for a Secrets Manager secret.',
            }),
        ).exactOptional(),
        s3Bucket: S3BucketConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon S3 Bucket. ',
            }),
        ).exactOptional(),
        snsTopic: SnsTopicConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon SNS topic',
            }),
        ).exactOptional(),
        sqsQueue: SqsQueueConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The access control configuration is for an Amazon SQS queue. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.',
        required: [],
      }),
  )
  .openapi('Configuration')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const AnalyzerArnSchema = z
  .string()
  .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
  .openapi('AnalyzerArn')

const CreateAnalyzerResponseSchema = z
  .object({
    arn: AnalyzerArnSchema.and(
      z.any().openapi({ description: 'The ARN of the analyzer that was created by the request.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response to the request to create an analyzer.', required: [] })
  .openapi('CreateAnalyzerResponse')

const NameSchema = z
  .string()
  .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
  .min(1)
  .max(255)
  .openapi('Name')

const StringSchema = z.string().openapi('String')

const ValueListSchema = z.array(StringSchema).min(1).max(20).openapi('ValueList')

const CriterionSchema = z
  .object({
    eq: ValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'An "equals" operator to match for the filter used to create the rule.',
        }),
    ).exactOptional(),
    neq: ValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A "not equals" operator to match for the filter used to create the rule.',
        }),
    ).exactOptional(),
    contains: ValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A "contains" operator to match for the filter used to create the rule.',
        }),
    ).exactOptional(),
    exists: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'An "exists" operator to match for the filter used to create the rule. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.',
    required: [],
  })
  .openapi('Criterion')

const FilterCriteriaMapSchema = z.record(z.string(), CriterionSchema).openapi('FilterCriteriaMap')

const InlineArchiveRuleSchema = z
  .object({
    ruleName: NameSchema.and(z.any().openapi({ description: 'The name of the rule.' })),
    filter: FilterCriteriaMapSchema.and(
      z.any().openapi({ description: 'The condition and values for a criterion.' }),
    ),
  })
  .openapi({
    required: ['ruleName', 'filter'],
    description:
      'An criterion statement in an archive rule. Each archive rule may have multiple criteria.',
  })
  .openapi('InlineArchiveRule')

const ConfigurationsMapSchema = z
  .record(z.string(), ConfigurationSchema)
  .openapi('ConfigurationsMap')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AccessPreviewStatusSchema = z
  .enum(['COMPLETED', 'CREATING', 'FAILED'])
  .openapi('AccessPreviewStatus')

const AccessPreviewStatusReasonCodeSchema = z
  .enum(['INTERNAL_ERROR', 'INVALID_CONFIGURATION'])
  .openapi('AccessPreviewStatusReasonCode')

const AccessPreviewStatusReasonSchema = z
  .object({
    code: AccessPreviewStatusReasonCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The reason code for the current status of the access preview.' }),
    ),
  })
  .openapi({
    required: ['code'],
    description:
      'Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.',
  })
  .openapi('AccessPreviewStatusReason')

const AccessPreviewSchema = z
  .object({
    id: AccessPreviewIdSchema.and(
      z.any().openapi({ description: 'The unique ID for the access preview.' }),
    ),
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the analyzer used to generate the access preview.' }),
    ),
    configurations: ConfigurationsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A map of resource ARNs for the proposed resource configuration.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the access preview was created.' }),
    ),
    status: AccessPreviewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the access preview.</p> <ul> <li> <p> <code>Creating</code> - The access preview creation is in progress.</p> </li> <li> <p> <code>Completed</code> - The access preview is complete. You can preview findings for external access to the resource.</p> </li> <li> <p> <code>Failed</code> - The access preview creation has failed.</p> </li> </ul>',
        }),
    ),
    statusReason: AccessPreviewStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides more details about the current status of the access preview.</p> <p>For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid resource configuration.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'analyzerArn', 'configurations', 'createdAt', 'status'],
    description: 'Contains information about an access preview.',
  })
  .openapi('AccessPreview')

const GetAccessPreviewResponseSchema = z
  .object({
    accessPreview: AccessPreviewSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains information about the access preview.' }),
    ),
  })
  .openapi({ required: ['accessPreview'] })
  .openapi('GetAccessPreviewResponse')

const ResourceArnSchema = z
  .string()
  .regex(/arn:[^:]*:[^:]*:[^:]*:[^:]*:.*/)
  .openapi('ResourceArn')

const ResourceTypeSchema = z
  .enum([
    'AWS::S3::Bucket',
    'AWS::IAM::Role',
    'AWS::SQS::Queue',
    'AWS::Lambda::Function',
    'AWS::Lambda::LayerVersion',
    'AWS::KMS::Key',
    'AWS::SecretsManager::Secret',
    'AWS::EFS::FileSystem',
    'AWS::EC2::Snapshot',
    'AWS::ECR::Repository',
    'AWS::RDS::DBSnapshot',
    'AWS::RDS::DBClusterSnapshot',
    'AWS::SNS::Topic',
  ])
  .openapi('ResourceType')

const ActionListSchema = z.array(StringSchema).openapi('ActionList')

const SharedViaListSchema = z.array(StringSchema).openapi('SharedViaList')

const FindingStatusSchema = z.enum(['ACTIVE', 'ARCHIVED', 'RESOLVED']).openapi('FindingStatus')

const AnalyzedResourceSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource that was analyzed.' }),
    ),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the resource that was analyzed.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was created.' }),
    ),
    analyzedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the resource was analyzed.' }),
    ),
    updatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was updated.' }),
    ),
    isPublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the policy that generated the finding grants public access to the resource.',
        }),
    ),
    actions: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that an external principal is granted permission to use by the policy that generated the finding.',
        }),
    ).exactOptional(),
    sharedVia: SharedViaListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.',
        }),
    ).exactOptional(),
    status: FindingStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of the finding generated from the analyzed resource.',
        }),
    ).exactOptional(),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID that owns the resource.' }),
    ),
    error: StringSchema.and(z.any().openapi({ description: 'An error message.' })).exactOptional(),
  })
  .openapi({
    required: [
      'resourceArn',
      'resourceType',
      'createdAt',
      'analyzedAt',
      'updatedAt',
      'isPublic',
      'resourceOwnerAccount',
    ],
    description: 'Contains details about the analyzed resource.',
  })
  .openapi('AnalyzedResource')

const GetAnalyzedResourceResponseSchema = z
  .object({
    resource: AnalyzedResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AnalyzedResource</code> object that contains information that IAM Access Analyzer found when it analyzed the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response to the request.', required: [] })
  .openapi('GetAnalyzedResourceResponse')

const TypeSchema = z.enum(['ACCOUNT', 'ORGANIZATION']).openapi('Type')

const TagsMapSchema = z.record(z.string(), StringSchema).openapi('TagsMap')

const AnalyzerStatusSchema = z
  .enum(['ACTIVE', 'CREATING', 'DISABLED', 'FAILED'])
  .openapi('AnalyzerStatus')

const ReasonCodeSchema = z
  .enum([
    'AWS_SERVICE_ACCESS_DISABLED',
    'DELEGATED_ADMINISTRATOR_DEREGISTERED',
    'ORGANIZATION_DELETED',
    'SERVICE_LINKED_ROLE_CREATION_FAILED',
  ])
  .openapi('ReasonCode')

const StatusReasonSchema = z
  .object({
    code: ReasonCodeSchema.and(
      z.any().openapi({ description: 'The reason code for the current status of the analyzer.' }),
    ),
  })
  .openapi({
    required: ['code'],
    description:
      'Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.',
  })
  .openapi('StatusReason')

const AnalyzerSummarySchema = z
  .object({
    arn: AnalyzerArnSchema.and(z.any().openapi({ description: 'The ARN of the analyzer.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the analyzer.' })),
    type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of analyzer, which corresponds to the zone of trust chosen for the analyzer.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp for the time at which the analyzer was created.' }),
    ),
    lastResourceAnalyzed: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The resource that was most recently analyzed by the analyzer.' }),
    ).exactOptional(),
    lastResourceAnalyzedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the most recently analyzed resource was analyzed.',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'The tags added to the analyzer.' }),
    ).exactOptional(),
    status: AnalyzerStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the analyzer. An <code>Active</code> analyzer successfully monitors supported resources and generates new findings. The analyzer is <code>Disabled</code> when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is <code>Creating</code> when the analyzer creation is in progress and <code>Failed</code> when the analyzer creation has failed. ',
        }),
    ),
    statusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>statusReason</code> provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'name', 'type', 'createdAt', 'status'],
    description: 'Contains information about the analyzer.',
  })
  .openapi('AnalyzerSummary')

const GetAnalyzerResponseSchema = z
  .object({
    analyzer: AnalyzerSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>AnalyzerSummary</code> object that contains information about the analyzer.',
        }),
    ),
  })
  .openapi({ required: ['analyzer'], description: 'The response to the request.' })
  .openapi('GetAnalyzerResponse')

const ArchiveRuleSummarySchema = z
  .object({
    ruleName: NameSchema.and(z.any().openapi({ description: 'The name of the archive rule.' })),
    filter: FilterCriteriaMapSchema.and(
      z.any().openapi({ description: 'A filter used to define the archive rule.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the archive rule was created.' }),
    ),
    updatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the archive rule was last updated.' }),
    ),
  })
  .openapi({
    required: ['ruleName', 'filter', 'createdAt', 'updatedAt'],
    description: 'Contains information about an archive rule.',
  })
  .openapi('ArchiveRuleSummary')

const GetArchiveRuleResponseSchema = z
  .object({ archiveRule: ArchiveRuleSummarySchema })
  .openapi({ required: ['archiveRule'], description: 'The response to the request.' })
  .openapi('GetArchiveRuleResponse')

const FindingIdSchema = z.string().openapi('FindingId')

const PrincipalMapSchema = z.record(z.string(), StringSchema).openapi('PrincipalMap')

const ConditionKeyMapSchema = z.record(z.string(), StringSchema).openapi('ConditionKeyMap')

const FindingSourceTypeSchema = z
  .enum(['POLICY', 'BUCKET_ACL', 'S3_ACCESS_POINT', 'S3_ACCESS_POINT_ACCOUNT'])
  .openapi('FindingSourceType')

const FindingSourceDetailSchema = z
  .object({
    accessPointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the access point that generated the finding. The ARN format depends on whether the ARN represents an access point or a multi-region access point.',
        }),
    ).exactOptional(),
    accessPointAccount: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The account of the cross-account access point that generated the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.',
    required: [],
  })
  .openapi('FindingSourceDetail')

const FindingSourceSchema = z
  .object({
    type: FindingSourceTypeSchema.and(
      z.any().openapi({ description: 'Indicates the type of access that generated the finding.' }),
    ),
    detail: FindingSourceDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      'The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.',
  })
  .openapi('FindingSource')

const FindingSourceListSchema = z.array(FindingSourceSchema).openapi('FindingSourceList')

const FindingSchema = z
  .object({
    id: FindingIdSchema.and(z.any().openapi({ description: 'The ID of the finding.' })),
    principal: PrincipalMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The external principal that access to a resource within the zone of trust.',
        }),
    ).exactOptional(),
    action: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action in the analyzed policy statement that an external principal has permission to use.',
        }),
    ).exactOptional(),
    resource: StringSchema.and(
      z.any().openapi({ description: 'The resource that an external principal has access to.' }),
    ).exactOptional(),
    isPublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the policy that generated the finding allows public access to the resource.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the resource identified in the finding.' }),
    ),
    condition: ConditionKeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The condition in the analyzed policy statement that resulted in a finding.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was generated.' }),
    ),
    analyzedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the resource was analyzed.' }),
    ),
    updatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was updated.' }),
    ),
    status: FindingStatusSchema.and(
      z.any().openapi({ description: 'The current status of the finding.' }),
    ),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID that owns the resource.' }),
    ),
    error: StringSchema.and(z.any().openapi({ description: 'An error.' })).exactOptional(),
    sources: FindingSourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'resourceType',
      'condition',
      'createdAt',
      'analyzedAt',
      'updatedAt',
      'status',
      'resourceOwnerAccount',
    ],
    description: 'Contains information about a finding.',
  })
  .openapi('Finding')

const GetFindingResponseSchema = z
  .object({
    finding: FindingSchema.and(
      z
        .any()
        .openapi({ description: 'A <code>finding</code> object that contains finding details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response to the request.', required: [] })
  .openapi('GetFindingResponse')

const JobIdSchema = z.string().openapi('JobId')

const JobStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'CANCELED'])
  .openapi('JobStatus')

const JobErrorCodeSchema = z
  .enum([
    'AUTHORIZATION_ERROR',
    'RESOURCE_NOT_FOUND_ERROR',
    'SERVICE_QUOTA_EXCEEDED_ERROR',
    'SERVICE_ERROR',
  ])
  .openapi('JobErrorCode')

const JobErrorSchema = z
  .object({
    code: JobErrorCodeSchema.and(z.any().openapi({ description: 'The job error code.' })),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specific information about the error. For example, which service quota was exceeded or which resource was not found.',
        }),
    ),
  })
  .openapi({
    required: ['code', 'message'],
    description: 'Contains the details about the policy generation error.',
  })
  .openapi('JobError')

const JobDetailsSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.',
        }),
    ),
    status: JobStatusSchema.and(z.any().openapi({ description: 'The status of the job request.' })),
    startedOn: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of when the job was started.' }),
    ),
    completedOn: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of when the job was completed.' }),
    ).exactOptional(),
    jobError: JobErrorSchema.and(
      z.any().openapi({ description: 'The job error for the policy generation request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'status', 'startedOn'],
    description: 'Contains details about the policy generation request.',
  })
  .openapi('JobDetails')

const GeneratedPolicySchema = z
  .object({
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text to use as the content for the new policy. The policy is created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.',
        }),
    ),
  })
  .openapi({ required: ['policy'], description: 'Contains the text for the generated policy.' })
  .openapi('GeneratedPolicy')

const GeneratedPolicyListSchema = z.array(GeneratedPolicySchema).openapi('GeneratedPolicyList')

const GeneratedPolicyResultSchema = z
  .object({
    properties: z
      .any()
      .openapi({
        description:
          'A <code>GeneratedPolicyProperties</code> object that contains properties of the generated policy.',
      }),
    generatedPolicies: GeneratedPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text to use as the content for the new policy. The policy is created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['properties'],
    description: 'Contains the text for the generated policy and its details.',
  })
  .openapi('GeneratedPolicyResult')

const GetGeneratedPolicyResponseSchema = z
  .object({
    jobDetails: JobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>GeneratedPolicyDetails</code> object that contains details about the generated policy.',
        }),
    ),
    generatedPolicyResult: GeneratedPolicyResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>GeneratedPolicyResult</code> object that contains the generated policies and associated details.',
        }),
    ),
  })
  .openapi({ required: ['jobDetails', 'generatedPolicyResult'] })
  .openapi('GetGeneratedPolicyResponse')

const AccessPreviewFindingIdSchema = z.string().openapi('AccessPreviewFindingId')

const FindingChangeTypeSchema = z.enum(['CHANGED', 'NEW', 'UNCHANGED']).openapi('FindingChangeType')

const AccessPreviewFindingSchema = z
  .object({
    id: AccessPreviewFindingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the access preview finding. This ID uniquely identifies the element in the list of access preview findings and is not related to the finding ID in Access Analyzer.',
        }),
    ),
    existingFindingId: FindingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The existing ID of the finding in IAM Access Analyzer, provided only for existing findings.',
        }),
    ).exactOptional(),
    existingFindingStatus: FindingStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The existing status of the finding, provided only for existing findings.',
        }),
    ).exactOptional(),
    principal: PrincipalMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external principal that has access to a resource within the zone of trust.',
        }),
    ).exactOptional(),
    action: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action in the analyzed policy statement that an external principal has permission to perform.',
        }),
    ).exactOptional(),
    condition: ConditionKeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The condition in the analyzed policy statement that resulted in a finding.',
        }),
    ).exactOptional(),
    resource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource that an external principal has access to. This is the resource associated with the access preview.',
        }),
    ).exactOptional(),
    isPublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the policy that generated the finding allows public access to the resource.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of the resource that can be accessed in the finding.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the access preview finding was created.' }),
    ),
    changeType: FindingChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides context on how the access preview finding compares to existing access identified in IAM Access Analyzer.</p> <ul> <li> <p> <code>New</code> - The finding is for newly-introduced access.</p> </li> <li> <p> <code>Unchanged</code> - The preview finding is an existing finding that would remain unchanged.</p> </li> <li> <p> <code>Changed</code> - The preview finding is an existing finding with a change in status.</p> </li> </ul> <p>For example, a <code>Changed</code> finding with preview status <code>Resolved</code> and existing status <code>Active</code> indicates the existing <code>Active</code> finding would become <code>Resolved</code> as a result of the proposed permissions change.</p>',
        }),
    ),
    status: FindingStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preview status of the finding. This is what the status of the finding would be after permissions deployment. For example, a <code>Changed</code> finding with preview status <code>Resolved</code> and existing status <code>Active</code> indicates the existing <code>Active</code> finding would become <code>Resolved</code> as a result of the proposed permissions change.',
        }),
    ),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.',
        }),
    ),
    error: StringSchema.and(z.any().openapi({ description: 'An error.' })).exactOptional(),
    sources: FindingSourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'resourceType', 'createdAt', 'changeType', 'status', 'resourceOwnerAccount'],
    description: 'An access preview finding generated by the access preview.',
  })
  .openapi('AccessPreviewFinding')

const AccessPreviewFindingsListSchema = z
  .array(AccessPreviewFindingSchema)
  .openapi('AccessPreviewFindingsList')

const TokenSchema = z.string().openapi('Token')

const ListAccessPreviewFindingsResponseSchema = z
  .object({
    findings: AccessPreviewFindingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of access preview findings that match the specified filter criteria.',
        }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['findings'] })
  .openapi('ListAccessPreviewFindingsResponse')

const AccessPreviewSummarySchema = z
  .object({
    id: AccessPreviewIdSchema.and(
      z.any().openapi({ description: 'The unique ID for the access preview.' }),
    ),
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the analyzer used to generate the access preview.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the access preview was created.' }),
    ),
    status: AccessPreviewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the access preview.</p> <ul> <li> <p> <code>Creating</code> - The access preview creation is in progress.</p> </li> <li> <p> <code>Completed</code> - The access preview is complete and previews the findings for external access to the resource.</p> </li> <li> <p> <code>Failed</code> - The access preview creation has failed.</p> </li> </ul>',
        }),
    ),
    statusReason: AccessPreviewStatusReasonSchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'analyzerArn', 'createdAt', 'status'],
    description: 'Contains a summary of information about an access preview.',
  })
  .openapi('AccessPreviewSummary')

const AccessPreviewsListSchema = z.array(AccessPreviewSummarySchema).openapi('AccessPreviewsList')

const ListAccessPreviewsResponseSchema = z
  .object({
    accessPreviews: AccessPreviewsListSchema.and(
      z.any().openapi({ description: 'A list of access previews retrieved for the analyzer.' }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['accessPreviews'] })
  .openapi('ListAccessPreviewsResponse')

const AnalyzedResourceSummarySchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the analyzed resource.' }),
    ),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID that owns the resource.' }),
    ),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource that was analyzed.' }),
    ),
  })
  .openapi({
    required: ['resourceArn', 'resourceOwnerAccount', 'resourceType'],
    description: 'Contains the ARN of the analyzed resource.',
  })
  .openapi('AnalyzedResourceSummary')

const AnalyzedResourcesListSchema = z
  .array(AnalyzedResourceSummarySchema)
  .openapi('AnalyzedResourcesList')

const ListAnalyzedResourcesResponseSchema = z
  .object({
    analyzedResources: AnalyzedResourcesListSchema.and(
      z.any().openapi({ description: 'A list of resources that were analyzed.' }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['analyzedResources'], description: 'The response to the request.' })
  .openapi('ListAnalyzedResourcesResponse')

const AnalyzersListSchema = z.array(AnalyzerSummarySchema).openapi('AnalyzersList')

const ListAnalyzersResponseSchema = z
  .object({
    analyzers: AnalyzersListSchema.and(
      z.any().openapi({ description: 'The analyzers retrieved.' }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['analyzers'], description: 'The response to the request.' })
  .openapi('ListAnalyzersResponse')

const ArchiveRulesListSchema = z.array(ArchiveRuleSummarySchema).openapi('ArchiveRulesList')

const ListArchiveRulesResponseSchema = z
  .object({
    archiveRules: ArchiveRulesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of archive rules created for the specified analyzer.' }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['archiveRules'], description: 'The response to the request.' })
  .openapi('ListArchiveRulesResponse')

const FindingSummarySchema = z
  .object({
    id: FindingIdSchema.and(z.any().openapi({ description: 'The ID of the finding.' })),
    principal: PrincipalMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external principal that has access to a resource within the zone of trust.',
        }),
    ).exactOptional(),
    action: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action in the analyzed policy statement that an external principal has permission to use.',
        }),
    ).exactOptional(),
    resource: StringSchema.and(
      z.any().openapi({ description: 'The resource that the external principal has access to.' }),
    ).exactOptional(),
    isPublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the finding reports a resource that has a policy that allows public access.',
        }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the resource that the external principal has access to.',
        }),
    ),
    condition: ConditionKeyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The condition in the analyzed policy statement that resulted in a finding.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was created.' }),
    ),
    analyzedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the resource-based policy that generated the finding was analyzed.',
        }),
    ),
    updatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the finding was most recently updated.' }),
    ),
    status: FindingStatusSchema.and(z.any().openapi({ description: 'The status of the finding.' })),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID that owns the resource.' }),
    ),
    error: StringSchema.and(
      z.any().openapi({ description: 'The error that resulted in an Error finding.' }),
    ).exactOptional(),
    sources: FindingSourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'resourceType',
      'condition',
      'createdAt',
      'analyzedAt',
      'updatedAt',
      'status',
      'resourceOwnerAccount',
    ],
    description: 'Contains information about a finding.',
  })
  .openapi('FindingSummary')

const FindingsListSchema = z.array(FindingSummarySchema).openapi('FindingsList')

const ListFindingsResponseSchema = z
  .object({
    findings: FindingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of findings retrieved from the analyzer that match the filter criteria specified, if any.',
        }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['findings'], description: 'The response to the request.' })
  .openapi('ListFindingsResponse')

const OrderBySchema = z.enum(['ASC', 'DESC']).openapi('OrderBy')

const PrincipalArnSchema = z
  .string()
  .regex(/arn:[^:]*:iam::[^:]*:(role|user)\/.{1,576}/)
  .openapi('PrincipalArn')

const PolicyGenerationSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.',
        }),
    ),
    principalArn: PrincipalArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM entity (user or role) for which you are generating a policy.',
        }),
    ),
    status: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the policy generation request.' }),
    ),
    startedOn: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of when the policy generation started.' }),
    ),
    completedOn: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of when the policy generation was completed.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'principalArn', 'status', 'startedOn'],
    description: 'Contains details about the policy generation status and properties.',
  })
  .openapi('PolicyGeneration')

const PolicyGenerationListSchema = z.array(PolicyGenerationSchema).openapi('PolicyGenerationList')

const ListPolicyGenerationsResponseSchema = z
  .object({
    policyGenerations: PolicyGenerationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>PolicyGeneration</code> object that contains details about the generated policy.',
        }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['policyGenerations'] })
  .openapi('ListPolicyGenerationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'The tags that are applied to the specified resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response to the request.', required: [] })
  .openapi('ListTagsForResourceResponse')

const StartPolicyGenerationResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.',
        }),
    ),
  })
  .openapi({ required: ['jobId'] })
  .openapi('StartPolicyGenerationResponse')

const CloudTrailArnSchema = z
  .string()
  .regex(/arn:[^:]*:cloudtrail:[^:]*:[^:]*:trail\/.{1,576}/)
  .openapi('CloudTrailArn')

const RegionListSchema = z.array(StringSchema).openapi('RegionList')

const TrailSchema = z
  .object({
    cloudTrailArn: CloudTrailArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ARN of the trail. The format of a trail ARN is <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.',
        }),
    ),
    regions: RegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of regions to get CloudTrail data from and analyze to generate a policy.',
        }),
    ).exactOptional(),
    allRegions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Possible values are <code>true</code> or <code>false</code>. If set to <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['cloudTrailArn'],
    description: 'Contains details about the CloudTrail trail being analyzed to generate a policy.',
  })
  .openapi('Trail')

const TrailListSchema = z.array(TrailSchema).openapi('TrailList')

const RoleArnSchema = z
  .string()
  .regex(/arn:[^:]*:iam::[^:]*:role\/.{1,576}/)
  .openapi('RoleArn')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ description: 'The response to the request.' })
  .openapi('TagResourceResponse')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ description: 'The response to the request.' })
  .openapi('UntagResourceResponse')

const ValidatePolicyFindingTypeSchema = z
  .enum(['ERROR', 'SECURITY_WARNING', 'SUGGESTION', 'WARNING'])
  .openapi('ValidatePolicyFindingType')

const IssueCodeSchema = z.string().openapi('IssueCode')

const LearnMoreLinkSchema = z.string().openapi('LearnMoreLink')

const IntegerSchema = z.int().openapi('Integer')

const SubstringSchema = z
  .object({
    start: IntegerSchema.and(
      z.any().openapi({ description: 'The start index of the substring, starting from 0.' }),
    ),
    length: IntegerSchema.and(z.any().openapi({ description: 'The length of the substring.' })),
  })
  .openapi({
    required: ['start', 'length'],
    description: 'A reference to a substring of a literal string in a JSON document.',
  })
  .openapi('Substring')

const PathElementSchema = z
  .object({
    index: IntegerSchema.and(
      z.any().openapi({ description: 'Refers to an index in a JSON array.' }),
    ).exactOptional(),
    key: StringSchema.and(
      z.any().openapi({ description: 'Refers to a key in a JSON object.' }),
    ).exactOptional(),
    substring: SubstringSchema.and(
      z
        .any()
        .openapi({ description: 'Refers to a substring of a literal string in a JSON object.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Refers to the value associated with a given key in a JSON object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A single element in a path through the JSON representation of a policy.',
    required: [],
  })
  .openapi('PathElement')

const PathElementListSchema = z.array(PathElementSchema).openapi('PathElementList')

const PositionSchema = z
  .object({
    line: IntegerSchema.and(
      z.any().openapi({ description: 'The line of the position, starting from 1.' }),
    ),
    column: IntegerSchema.and(
      z.any().openapi({ description: 'The column of the position, starting from 0.' }),
    ),
    offset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The offset within the policy that corresponds to the position, starting from 0.',
        }),
    ),
  })
  .openapi({ required: ['line', 'column', 'offset'], description: 'A position in a policy.' })
  .openapi('Position')

const SpanSchema = z
  .object({
    start: PositionSchema.and(
      z.any().openapi({ description: 'The start position of the span (inclusive).' }),
    ),
    end: PositionSchema.and(
      z.any().openapi({ description: 'The end position of the span (exclusive).' }),
    ),
  })
  .openapi({
    required: ['start', 'end'],
    description:
      'A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).',
  })
  .openapi('Span')

const LocationSchema = z
  .object({
    path: PathElementListSchema.and(
      z
        .any()
        .openapi({
          description: 'A path in a policy, represented as a sequence of path elements.',
        }),
    ),
    span: SpanSchema.and(z.any().openapi({ description: 'A span in a policy.' })),
  })
  .openapi({
    required: ['path', 'span'],
    description:
      'A location in a policy that is represented as a path through the JSON representation and a corresponding span.',
  })
  .openapi('Location')

const LocationListSchema = z.array(LocationSchema).openapi('LocationList')

const ValidatePolicyFindingSchema = z
  .object({
    findingDetails: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A localized message that explains the finding and provides guidance on how to address it.',
        }),
    ),
    findingType: ValidatePolicyFindingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The impact of the finding.</p> <p>Security warnings report when the policy allows access that we consider overly permissive.</p> <p>Errors report when a part of the policy is not functional.</p> <p>Warnings report non-security issues when a policy does not conform to policy writing best practices.</p> <p>Suggestions recommend stylistic improvements in the policy that do not impact access.</p>',
        }),
    ),
    issueCode: IssueCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The issue code provides an identifier of the issue associated with this finding.',
        }),
    ),
    learnMoreLink: LearnMoreLinkSchema.and(
      z
        .any()
        .openapi({ description: 'A link to additional documentation about the type of finding.' }),
    ),
    locations: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of locations in the policy document that are related to the finding. The issue code provides a summary of an issue identified by the finding.',
        }),
    ),
  })
  .openapi({
    required: ['findingDetails', 'findingType', 'issueCode', 'learnMoreLink', 'locations'],
    description:
      'A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.',
  })
  .openapi('ValidatePolicyFinding')

const ValidatePolicyFindingListSchema = z
  .array(ValidatePolicyFindingSchema)
  .openapi('ValidatePolicyFindingList')

const ValidatePolicyResponseSchema = z
  .object({
    findings: ValidatePolicyFindingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy checks.',
        }),
    ),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['findings'] })
  .openapi('ValidatePolicyResponse')

const AccessPointArnSchema = z
  .string()
  .regex(/arn:[^:]*:s3:[^:]*:[^:]*:accesspoint\/.*/)
  .openapi('AccessPointArn')

const ApplyArchiveRuleRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z.any().openapi({ description: 'The Amazon resource name (ARN) of the analyzer.' }),
    ),
    ruleName: NameSchema.and(z.any().openapi({ description: 'The name of the rule to apply.' })),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerArn', 'ruleName'],
    title: 'ApplyArchiveRuleRequest',
    description: 'Retroactively applies an archive rule.',
  })
  .openapi('ApplyArchiveRuleRequest')

const CancelPolicyGenerationRequestSchema = z
  .object({})
  .openapi({ title: 'CancelPolicyGenerationRequest' })
  .openapi('CancelPolicyGenerationRequest')

const CloudTrailDetailsSchema = z
  .object({
    trails: TrailListSchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>Trail</code> object that contains settings for a trail.',
        }),
    ),
    accessRole: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and service last accessed information.',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['trails', 'accessRole', 'startTime'],
    description: 'Contains information about CloudTrail access.',
  })
  .openapi('CloudTrailDetails')

const TrailPropertiesSchema = z
  .object({
    cloudTrailArn: CloudTrailArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ARN of the trail. The format of a trail ARN is <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.',
        }),
    ),
    regions: RegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of regions to get CloudTrail data from and analyze to generate a policy.',
        }),
    ).exactOptional(),
    allRegions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Possible values are <code>true</code> or <code>false</code>. If set to <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['cloudTrailArn'],
    description: 'Contains details about the CloudTrail trail being analyzed to generate a policy.',
  })
  .openapi('TrailProperties')

const TrailPropertiesListSchema = z.array(TrailPropertiesSchema).openapi('TrailPropertiesList')

const CloudTrailPropertiesSchema = z
  .object({
    trailProperties: TrailPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>TrailProperties</code> object that contains settings for trail properties.',
        }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.',
        }),
    ),
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.',
        }),
    ),
  })
  .openapi({
    required: ['trailProperties', 'startTime', 'endTime'],
    description: 'Contains information about CloudTrail access.',
  })
  .openapi('CloudTrailProperties')

const ConfigurationsMapKeySchema = z.string().openapi('ConfigurationsMapKey')

const CreateAccessPreviewRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.',
        }),
    ),
    configurations: ConfigurationsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.',
        }),
    ),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['analyzerArn', 'configurations'], title: 'CreateAccessPreviewRequest' })
  .openapi('CreateAccessPreviewRequest')

const InlineArchiveRulesListSchema = z
  .array(InlineArchiveRuleSchema)
  .openapi('InlineArchiveRulesList')

const CreateAnalyzerRequestSchema = z
  .object({
    analyzerName: NameSchema.and(
      z.any().openapi({ description: 'The name of the analyzer to create.' }),
    ),
    type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.',
        }),
    ),
    archiveRules: InlineArchiveRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'The tags to apply to the analyzer.' }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerName', 'type'],
    title: 'CreateAnalyzerRequest',
    description: 'Creates an analyzer.',
  })
  .openapi('CreateAnalyzerRequest')

const CreateArchiveRuleRequestSchema = z
  .object({
    ruleName: NameSchema.and(z.any().openapi({ description: 'The name of the rule to create.' })),
    filter: FilterCriteriaMapSchema.and(
      z.any().openapi({ description: 'The criteria for the rule.' }),
    ),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ruleName', 'filter'],
    title: 'CreateArchiveRuleRequest',
    description: 'Creates an archive rule.',
  })
  .openapi('CreateArchiveRuleRequest')

const DeleteAnalyzerRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAnalyzerRequest', description: 'Deletes an analyzer.' })
  .openapi('DeleteAnalyzerRequest')

const DeleteArchiveRuleRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteArchiveRuleRequest', description: 'Deletes an archive rule.' })
  .openapi('DeleteArchiveRuleRequest')

const FindingIdListSchema = z.array(FindingIdSchema).openapi('FindingIdList')

const FindingStatusUpdateSchema = z.enum(['ACTIVE', 'ARCHIVED']).openapi('FindingStatusUpdate')

const GeneratedPolicyPropertiesSchema = z
  .object({
    isComplete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This value is set to <code>true</code> if the generated policy contains all possible actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified, and <code>false</code> otherwise.',
        }),
    ).exactOptional(),
    principalArn: PrincipalArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM entity (user or role) for which you are generating a policy.',
        }),
    ),
    cloudTrailProperties: CloudTrailPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists details about the <code>Trail</code> used to generated policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['principalArn'], description: 'Contains the generated policy details.' })
  .openapi('GeneratedPolicyProperties')

const GetAccessPreviewRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccessPreviewRequest' })
  .openapi('GetAccessPreviewRequest')

const GetAnalyzedResourceRequestSchema = z
  .object({})
  .openapi({ title: 'GetAnalyzedResourceRequest', description: 'Retrieves an analyzed resource.' })
  .openapi('GetAnalyzedResourceRequest')

const GetAnalyzerRequestSchema = z
  .object({})
  .openapi({ title: 'GetAnalyzerRequest', description: 'Retrieves an analyzer.' })
  .openapi('GetAnalyzerRequest')

const GetArchiveRuleRequestSchema = z
  .object({})
  .openapi({ title: 'GetArchiveRuleRequest', description: 'Retrieves an archive rule.' })
  .openapi('GetArchiveRuleRequest')

const GetFindingRequestSchema = z
  .object({})
  .openapi({ title: 'GetFindingRequest', description: 'Retrieves a finding.' })
  .openapi('GetFindingRequest')

const GetGeneratedPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetGeneratedPolicyRequest' })
  .openapi('GetGeneratedPolicyRequest')

const KmsConstraintsKeySchema = z.string().openapi('KmsConstraintsKey')

const ListAccessPreviewFindingsRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.',
        }),
    ),
    filter: FilterCriteriaMapSchema.and(
      z.any().openapi({ description: 'Criteria to filter the returned findings.' }),
    ).exactOptional(),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['analyzerArn'], title: 'ListAccessPreviewFindingsRequest' })
  .openapi('ListAccessPreviewFindingsRequest')

const ListAccessPreviewsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccessPreviewsRequest' })
  .openapi('ListAccessPreviewsRequest')

const ListAnalyzedResourcesRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.',
        }),
    ),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource.' }),
    ).exactOptional(),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerArn'],
    title: 'ListAnalyzedResourcesRequest',
    description: 'Retrieves a list of resources that have been analyzed.',
  })
  .openapi('ListAnalyzedResourcesRequest')

const ListAnalyzersRequestSchema = z
  .object({})
  .openapi({ title: 'ListAnalyzersRequest', description: 'Retrieves a list of analyzers.' })
  .openapi('ListAnalyzersRequest')

const ListArchiveRulesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListArchiveRulesRequest',
    description: 'Retrieves a list of archive rules created for the specified analyzer.',
  })
  .openapi('ListArchiveRulesRequest')

const SortCriteriaSchema = z
  .object({
    attributeName: StringSchema.and(
      z.any().openapi({ description: 'The name of the attribute to sort on.' }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z.any().openapi({ description: 'The sort order, ascending or descending.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The criteria used to sort.', required: [] })
  .openapi('SortCriteria')

const ListFindingsRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.',
        }),
    ),
    filter: FilterCriteriaMapSchema.and(
      z.any().openapi({ description: 'A filter to match for the findings to return.' }),
    ).exactOptional(),
    sort: SortCriteriaSchema.and(
      z.any().openapi({ description: 'The sort order for the findings returned.' }),
    ).exactOptional(),
    nextToken: TokenSchema.and(
      z.any().openapi({ description: 'A token used for pagination of results returned.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerArn'],
    title: 'ListFindingsRequest',
    description: 'Retrieves a list of findings generated by the specified analyzer.',
  })
  .openapi('ListFindingsRequest')

const ListPolicyGenerationsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .openapi('ListPolicyGenerationsRequestMaxResultsInteger')

const ListPolicyGenerationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPolicyGenerationsRequest' })
  .openapi('ListPolicyGenerationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description: 'Retrieves a list of tags applied to the specified resource.',
  })
  .openapi('ListTagsForResourceRequest')

const LocaleSchema = z
  .enum(['DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'KO', 'PT_BR', 'ZH_CN', 'ZH_TW'])
  .openapi('Locale')

const PolicyDocumentSchema = z.string().openapi('PolicyDocument')

const PolicyGenerationDetailsSchema = z
  .object({
    principalArn: PrincipalArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM entity (user or role) for which you are generating a policy.',
        }),
    ),
  })
  .openapi({
    required: ['principalArn'],
    description: 'Contains the ARN details about the IAM entity for which the policy is generated.',
  })
  .openapi('PolicyGenerationDetails')

const PolicyNameSchema = z.string().openapi('PolicyName')

const PolicyTypeSchema = z
  .enum(['IDENTITY_POLICY', 'RESOURCE_POLICY', 'SERVICE_CONTROL_POLICY'])
  .openapi('PolicyType')

const RdsDbClusterSnapshotAttributeNameSchema = z
  .string()
  .openapi('RdsDbClusterSnapshotAttributeName')

const RdsDbSnapshotAttributeNameSchema = z.string().openapi('RdsDbSnapshotAttributeName')

const StartPolicyGenerationRequestSchema = z
  .object({
    policyGenerationDetails: PolicyGenerationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the ARN of the IAM entity (user or role) for which you are generating a policy.',
        }),
    ),
    cloudTrailDetails: CloudTrailDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CloudTrailDetails</code> object that contains details about a <code>Trail</code> that you want to analyze to generate policies.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['policyGenerationDetails'], title: 'StartPolicyGenerationRequest' })
  .openapi('StartPolicyGenerationRequest')

const StartResourceScanRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.',
        }),
    ),
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource to scan.' }),
    ),
    resourceOwnerAccount: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerArn', 'resourceArn'],
    title: 'StartResourceScanRequest',
    description: 'Starts a scan of the policies applied to the specified resource.',
  })
  .openapi('StartResourceScanRequest')

const TagKeysSchema = z.array(StringSchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsMapSchema.and(z.any().openapi({ description: 'The tags to add to the resource.' })),
  })
  .openapi({
    required: ['tags'],
    title: 'TagResourceRequest',
    description: 'Adds a tag to the specified resource.',
  })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'UntagResourceRequest',
    description: 'Removes a tag from the specified resource.',
  })
  .openapi('UntagResourceRequest')

const UpdateArchiveRuleRequestSchema = z
  .object({
    filter: FilterCriteriaMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter to match for the rules to update. Only rules that match the filter are updated.',
        }),
    ),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['filter'],
    title: 'UpdateArchiveRuleRequest',
    description: 'Updates the specified archive rule.',
  })
  .openapi('UpdateArchiveRuleRequest')

const UpdateFindingsRequestSchema = z
  .object({
    analyzerArn: AnalyzerArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.',
        }),
    ),
    status: FindingStatusUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.',
        }),
    ),
    ids: FindingIdListSchema.and(
      z.any().openapi({ description: 'The IDs of the findings to update.' }),
    ).exactOptional(),
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource identified in the finding.' }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z.any().openapi({ description: 'A client token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['analyzerArn', 'status'],
    title: 'UpdateFindingsRequest',
    description: 'Updates findings with the new values provided in the request.',
  })
  .openapi('UpdateFindingsRequest')

const ValidatePolicyResourceTypeSchema = z
  .enum([
    'AWS::S3::Bucket',
    'AWS::S3::AccessPoint',
    'AWS::S3::MultiRegionAccessPoint',
    'AWS::S3ObjectLambda::AccessPoint',
    'AWS::IAM::AssumeRolePolicyDocument',
  ])
  .openapi('ValidatePolicyResourceType')

const ValidatePolicyRequestSchema = z
  .object({
    locale: LocaleSchema.and(
      z.any().openapi({ description: 'The locale to use for localizing the findings.' }),
    ).exactOptional(),
    policyDocument: PolicyDocumentSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON policy document to use as the content for the policy.' }),
    ),
    policyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>',
        }),
    ),
    validatePolicyResourceType: ValidatePolicyResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['policyDocument', 'policyType'], title: 'ValidatePolicyRequest' })
  .openapi('ValidatePolicyRequest')

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

export const putArchiveRuleRoute = createRoute({
  method: 'put',
  path: '/archive-rule',
  description:
    'Retroactively applies the archive rule to existing findings that meet the archive rule criteria.',
  operationId: 'ApplyArchiveRule',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({ description: 'The Amazon resource name (ARN) of the analyzer.' }),
              ruleName: z
                .string()
                .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the rule to apply.' }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['analyzerArn', 'ruleName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getPolicyGenerationJobIdRoute = createRoute({
  method: 'get',
  path: '/policy/generation/{jobId}',
  description: 'Retrieves the policy that was generated using <code>StartPolicyGeneration</code>. ',
  operationId: 'GetGeneratedPolicy',
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
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description:
              'The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeResourcePlaceholders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeResourcePlaceholders',
            in: 'query',
            required: false,
            description:
              '<p>The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies.</p> <p>For example, in the resource section of a policy, you can receive a placeholder such as <code>"Resource":"arn:aws:s3:::${BucketName}"</code> instead of <code>"*"</code>.</p>',
            schema: { type: 'boolean' },
          },
        }),
      includeServiceLevelTemplate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeServiceLevelTemplate',
            in: 'query',
            required: false,
            description:
              '<p>The level of detail that you want to generate. You can specify whether to generate service-level policies. </p> <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have been used recently to create this service-level template.</p>',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGeneratedPolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putPolicyGenerationJobIdRoute = createRoute({
  method: 'put',
  path: '/policy/generation/{jobId}',
  description: 'Cancels the requested policy generation.',
  operationId: 'CancelPolicyGeneration',
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
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description:
              'The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelPolicyGenerationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAccessPreviewRoute = createRoute({
  method: 'put',
  path: '/access-preview',
  description:
    'Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.',
  operationId: 'CreateAccessPreview',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.',
                }),
              configurations: z
                .record(z.string(), ConfigurationSchema)
                .openapi({
                  description:
                    'Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.',
                }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['analyzerArn', 'configurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccessPreviewResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAnalyzerRoute = createRoute({
  method: 'get',
  path: '/analyzer',
  description: 'Retrieves a list of analyzers.',
  operationId: 'ListAnalyzers',
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
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used for pagination of results returned.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['ACCOUNT', 'ORGANIZATION'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'The type of analyzer.',
            schema: { type: 'string', enum: ['ACCOUNT', 'ORGANIZATION'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnalyzersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAnalyzerRoute = createRoute({
  method: 'put',
  path: '/analyzer',
  description: 'Creates an analyzer for your account.',
  operationId: 'CreateAnalyzer',
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
              analyzerName: z
                .string()
                .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the analyzer to create.' }),
              type: z
                .enum(['ACCOUNT', 'ORGANIZATION'])
                .openapi({
                  description:
                    'The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.',
                }),
              archiveRules: z
                .array(InlineArchiveRuleSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the analyzer.' }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['analyzerName', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAnalyzerResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAnalyzerAnalyzerNameArchiveRuleRoute = createRoute({
  method: 'get',
  path: '/analyzer/{analyzerName}/archive-rule',
  description: 'Retrieves a list of archive rules created for the specified analyzer.',
  operationId: 'ListArchiveRules',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the analyzer to retrieve rules from.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
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
            required: false,
            description: 'A token used for pagination of results returned.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the request.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListArchiveRulesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAnalyzerAnalyzerNameArchiveRuleRoute = createRoute({
  method: 'put',
  path: '/analyzer/{analyzerName}/archive-rule',
  description:
    '<p>Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>',
  operationId: 'CreateArchiveRule',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the created analyzer.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ruleName: z
                .string()
                .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the rule to create.' }),
              filter: z
                .record(z.string(), CriterionSchema)
                .openapi({ description: 'The criteria for the rule.' }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['ruleName', 'filter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAnalyzerAnalyzerNameRoute = createRoute({
  method: 'get',
  path: '/analyzer/{analyzerName}',
  description: 'Retrieves information about the specified analyzer.',
  operationId: 'GetAnalyzer',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the analyzer retrieved.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnalyzerResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteAnalyzerAnalyzerNameRoute = createRoute({
  method: 'delete',
  path: '/analyzer/{analyzerName}',
  description:
    'Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.',
  operationId: 'DeleteAnalyzer',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the analyzer to delete.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description: 'A client token.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAnalyzerAnalyzerNameArchiveRuleRuleNameRoute = createRoute({
  method: 'get',
  path: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
  description:
    '<p>Retrieves information about an archive rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>',
  operationId: 'GetArchiveRule',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the analyzer to retrieve rules from.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      ruleName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ruleName',
            in: 'path',
            required: true,
            description: 'The name of the rule to retrieve.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetArchiveRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAnalyzerAnalyzerNameArchiveRuleRuleNameRoute = createRoute({
  method: 'put',
  path: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
  description: 'Updates the criteria and values for the specified archive rule.',
  operationId: 'UpdateArchiveRule',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description: 'The name of the analyzer to update the archive rules for.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      ruleName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ruleName',
            in: 'path',
            required: true,
            description: 'The name of the rule to update.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filter: z
                .record(z.string(), CriterionSchema)
                .openapi({
                  description:
                    'A filter to match for the rules to update. Only rules that match the filter are updated.',
                }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['filter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRoute = createRoute({
  method: 'delete',
  path: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
  description: 'Deletes the specified archive rule.',
  operationId: 'DeleteArchiveRule',
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
      analyzerName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'analyzerName',
            in: 'path',
            required: true,
            description:
              'The name of the analyzer that associated with the archive rule to delete.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      ruleName: z
        .string()
        .regex(/[A-Za-z][A-Za-z0-9_.-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'ruleName',
            in: 'path',
            required: true,
            description: 'The name of the rule to delete.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][A-Za-z0-9_.-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description: 'A client token.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAccessPreviewAccessPreviewIdAnalyzerArnRoute = createRoute({
  method: 'get',
  path: '/access-preview/{accessPreviewId}#analyzerArn',
  description: 'Retrieves information about an access preview for the specified analyzer.',
  operationId: 'GetAccessPreview',
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
      accessPreviewId: z
        .string()
        .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
        .openapi({
          param: {
            name: 'accessPreviewId',
            in: 'path',
            required: true,
            description: 'The unique ID for the access preview.',
            schema: {
              type: 'string',
              pattern: '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      analyzerArn: z
        .string()
        .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
        .openapi({
          param: {
            name: 'analyzerArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.',
            schema: { type: 'string', pattern: '[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccessPreviewResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAnalyzedResourceAnalyzerArnResourceArnRoute = createRoute({
  method: 'get',
  path: '/analyzed-resource#analyzerArn&resourceArn',
  description: 'Retrieves information about a resource that was analyzed.',
  operationId: 'GetAnalyzedResource',
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
      analyzerArn: z
        .string()
        .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
        .openapi({
          param: {
            name: 'analyzerArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve information from.',
            schema: { type: 'string', pattern: '[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}' },
          },
        }),
      resourceArn: z
        .string()
        .regex(/arn:[^:]*:[^:]*:[^:]*:[^:]*:.*/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource to retrieve information about.',
            schema: { type: 'string', pattern: 'arn:[^:]*:[^:]*:[^:]*:[^:]*:.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnalyzedResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getFindingIdAnalyzerArnRoute = createRoute({
  method: 'get',
  path: '/finding/{id}#analyzerArn',
  description: 'Retrieves information about the specified finding.',
  operationId: 'GetFinding',
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
      analyzerArn: z
        .string()
        .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
        .openapi({
          param: {
            name: 'analyzerArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the finding.',
            schema: { type: 'string', pattern: '[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the finding to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postAccessPreviewAccessPreviewIdRoute = createRoute({
  method: 'post',
  path: '/access-preview/{accessPreviewId}',
  description:
    'Retrieves a list of access preview findings generated by the specified access preview.',
  operationId: 'ListAccessPreviewFindings',
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
      accessPreviewId: z
        .string()
        .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
        .openapi({
          param: {
            name: 'accessPreviewId',
            in: 'path',
            required: true,
            description: 'The unique ID for the access preview.',
            schema: {
              type: 'string',
              pattern: '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
            },
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
      content: {
        'application/json': {
          schema: z
            .object({
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.',
                }),
              filter: z
                .record(z.string(), CriterionSchema)
                .exactOptional()
                .openapi({ description: 'Criteria to filter the returned findings.' }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A token used for pagination of results returned.' }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
            })
            .openapi({ required: ['analyzerArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccessPreviewFindingsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getAccessPreviewAnalyzerArnRoute = createRoute({
  method: 'get',
  path: '/access-preview#analyzerArn',
  description: 'Retrieves a list of access previews for the specified analyzer.',
  operationId: 'ListAccessPreviews',
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
      analyzerArn: z
        .string()
        .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
        .openapi({
          param: {
            name: 'analyzerArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.',
            schema: { type: 'string', pattern: '[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used for pagination of results returned.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccessPreviewsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postAnalyzedResourceRoute = createRoute({
  method: 'post',
  path: '/analyzed-resource',
  description:
    'Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..',
  operationId: 'ListAnalyzedResources',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.',
                }),
              resourceType: z
                .enum([
                  'AWS::S3::Bucket',
                  'AWS::IAM::Role',
                  'AWS::SQS::Queue',
                  'AWS::Lambda::Function',
                  'AWS::Lambda::LayerVersion',
                  'AWS::KMS::Key',
                  'AWS::SecretsManager::Secret',
                  'AWS::EFS::FileSystem',
                  'AWS::EC2::Snapshot',
                  'AWS::ECR::Repository',
                  'AWS::RDS::DBSnapshot',
                  'AWS::RDS::DBClusterSnapshot',
                  'AWS::SNS::Topic',
                ])
                .exactOptional()
                .openapi({ description: 'The type of resource.' }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A token used for pagination of results returned.' }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
            })
            .openapi({ required: ['analyzerArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnalyzedResourcesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putFindingRoute = createRoute({
  method: 'put',
  path: '/finding',
  description: 'Updates the status for the specified findings.',
  operationId: 'UpdateFindings',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.',
                }),
              status: z
                .enum(['ACTIVE', 'ARCHIVED'])
                .openapi({
                  description:
                    'The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.',
                }),
              ids: z
                .array(FindingIdSchema)
                .exactOptional()
                .openapi({ description: 'The IDs of the findings to update.' }),
              resourceArn: z
                .string()
                .regex(/arn:[^:]*:[^:]*:[^:]*:[^:]*:.*/)
                .exactOptional()
                .openapi({ description: 'The ARN of the resource identified in the finding.' }),
              clientToken: z.string().exactOptional().openapi({ description: 'A client token.' }),
            })
            .openapi({ required: ['analyzerArn', 'status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postFindingRoute = createRoute({
  method: 'post',
  path: '/finding',
  description:
    '<p>Retrieves a list of findings generated by the specified analyzer.</p> <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>',
  operationId: 'ListFindings',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.',
                }),
              filter: z
                .record(z.string(), CriterionSchema)
                .exactOptional()
                .openapi({ description: 'A filter to match for the findings to return.' }),
              sort: z
                .object({
                  attributeName: StringSchema.and(
                    z.any().openapi({ description: 'The name of the attribute to sort on.' }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z.any().openapi({ description: 'The sort order, ascending or descending.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The criteria used to sort.', required: [] }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A token used for pagination of results returned.' }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
            })
            .openapi({ required: ['analyzerArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFindingsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getPolicyGenerationRoute = createRoute({
  method: 'get',
  path: '/policy/generation',
  description: 'Lists all of the policy generations requested in the last seven days.',
  operationId: 'ListPolicyGenerations',
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
      principalArn: z
        .string()
        .regex(/arn:[^:]*:iam::[^:]*:(role|user)\/.{1,576}/)
        .exactOptional()
        .openapi({
          param: {
            name: 'principalArn',
            in: 'query',
            required: false,
            description:
              'The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with <code>ListGeneratedPolicies</code> to filter the results to only include results for a specific principal.',
            schema: { type: 'string', pattern: 'arn:[^:]*:iam::[^:]*:(role|user)/.{1,576}' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used for pagination of results returned.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPolicyGenerationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putPolicyGenerationRoute = createRoute({
  method: 'put',
  path: '/policy/generation',
  description: 'Starts the policy generation request.',
  operationId: 'StartPolicyGeneration',
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
              policyGenerationDetails: z
                .object({
                  principalArn: PrincipalArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the IAM entity (user or role) for which you are generating a policy.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains the ARN details about the IAM entity for which the policy is generated.',
                  required: [],
                }),
              cloudTrailDetails: z
                .object({
                  trails: TrailListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A <code>Trail</code> object that contains settings for a trail.',
                      }),
                  ).exactOptional(),
                  accessRole: RoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and service last accessed information.',
                      }),
                  ).exactOptional(),
                  startTime: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.',
                      }),
                  ).exactOptional(),
                  endTime: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about CloudTrail access.',
                  required: [],
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>',
                }),
            })
            .openapi({ required: ['policyGenerationDetails'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartPolicyGenerationResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Retrieves a list of tags applied to the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource to retrieve tags from.',
            schema: { type: 'string' },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds a tag to the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource to add the tag to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({ description: 'The tags to add to the resource.' }),
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
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postResourceScanRoute = createRoute({
  method: 'post',
  path: '/resource/scan',
  description: 'Immediately starts a scan of the policies applied to the specified resource.',
  operationId: 'StartResourceScan',
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
              analyzerArn: z
                .string()
                .regex(/[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer\/.{1,255}/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.',
                }),
              resourceArn: z
                .string()
                .regex(/arn:[^:]*:[^:]*:[^:]*:[^:]*:.*/)
                .openapi({ description: 'The ARN of the resource to scan.' }),
              resourceOwnerAccount: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.',
                }),
            })
            .openapi({ required: ['analyzerArn', 'resourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes a tag from the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource to remove the tag from.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The key for the tag to add.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postPolicyValidationRoute = createRoute({
  method: 'post',
  path: '/policy/validation',
  description:
    'Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices. ',
  operationId: 'ValidatePolicy',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in the response.',
            schema: { type: 'integer' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used for pagination of results returned.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              locale: z
                .enum(['DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'KO', 'PT_BR', 'ZH_CN', 'ZH_TW'])
                .exactOptional()
                .openapi({ description: 'The locale to use for localizing the findings.' }),
              policyDocument: z
                .string()
                .openapi({
                  description: 'The JSON policy document to use as the content for the policy.',
                }),
              policyType: z
                .enum(['IDENTITY_POLICY', 'RESOURCE_POLICY', 'SERVICE_CONTROL_POLICY'])
                .openapi({
                  description:
                    '<p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>',
                }),
              validatePolicyResourceType: z
                .enum([
                  'AWS::S3::Bucket',
                  'AWS::S3::AccessPoint',
                  'AWS::S3::MultiRegionAccessPoint',
                  'AWS::S3ObjectLambda::AccessPoint',
                  'AWS::IAM::AssumeRolePolicyDocument',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>',
                }),
            })
            .openapi({ required: ['policyDocument', 'policyType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidatePolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})
