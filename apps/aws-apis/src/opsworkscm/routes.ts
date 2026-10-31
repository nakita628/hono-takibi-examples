import { createRoute, z } from '@hono/zod-openapi'

const NodeAssociationStatusTokenSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('NodeAssociationStatusToken')

const AssociateNodeResponseSchema = z
  .object({
    NodeAssociationStatusToken: NodeAssociationStatusTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the association request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateNodeResponse')

const ServerNameSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
  .min(1)
  .max(40)
  .openapi('ServerName')

const NodeNameSchema = z
  .string()
  .max(10000)
  .openapi({
    description:
      'The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href="https://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef</a> or <a href="https://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html">Puppet</a> documentation. ',
    pattern: '^[\\-\\p{Alnum}_:.]+$',
  })
  .openapi('NodeName')

const EngineAttributeNameSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('EngineAttributeName')

const EngineAttributeValueSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('EngineAttributeValue')

const EngineAttributeSchema = z
  .object({
    Name: EngineAttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the engine attribute. ' }),
    ).exactOptional(),
    Value: EngineAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the engine attribute. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A name and value pair that is specific to the engine of the server. ',
    required: [],
  })
  .openapi('EngineAttribute')

const EngineAttributesSchema = z.array(EngineAttributeSchema).openapi('EngineAttributes')

const AssociateNodeRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server with which to associate the node. ' }),
    ),
    NodeName: NodeNameSchema.and(z.any().openapi({ description: 'The name of the node. ' })),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Engine attributes used for associating the node. </p> <p class="title"> <b>Attributes accepted in a AssociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node is associated. By default only one organization named <code>default</code> can exist. </p> </li> <li> <p> <code>CHEF_NODE_PUBLIC_KEY</code>: A PEM-formatted public key. This key is required for the <code>chef-client</code> agent to access the Chef API. </p> </li> </ul> <p class="title"> <b>Attributes accepted in a AssociateNode request for Puppet</b> </p> <ul> <li> <p> <code>PUPPET_NODE_CSR</code>: A PEM-formatted certificate-signing request (CSR) that is created by the node. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ServerName', 'NodeName', 'EngineAttributes'],
    title: 'AssociateNodeRequest',
  })
  .openapi('AssociateNodeRequest')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const StringSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('String')

const BackupIdSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9\-\.\:]*/)
  .max(79)
  .openapi('BackupId')

const BackupTypeSchema = z.enum(['AUTOMATED', 'MANUAL']).openapi('BackupType')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimeWindowDefinitionSchema = z
  .string()
  .regex(/^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$/)
  .max(10000)
  .openapi({
    description:
      '<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>',
  })
  .openapi('TimeWindowDefinition')

const IntegerSchema = z.int().openapi('Integer')

const StringsSchema = z.array(StringSchema).openapi('Strings')

const BackupStatusSchema = z
  .enum(['IN_PROGRESS', 'OK', 'FAILED', 'DELETING'])
  .openapi('BackupStatus')

const BackupSchema = z
  .object({
    BackupArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the backup. ' }),
    ).exactOptional(),
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The generated ID of the backup. Example: <code>myServerName-yyyyMMddHHmmssSSS</code> ',
        }),
    ).exactOptional(),
    BackupType: BackupTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The backup type. Valid values are <code>automated</code> or <code>manual</code>. ',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time stamp when the backup was created in the database. Example: <code>2016-07-29T13:38:47.520Z</code> ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A user-provided description for a manual backup. This field is empty for automated backups. ',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The engine type that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    EngineModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The engine model that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The engine version that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    InstanceProfileArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The EC2 instance profile ARN that is obtained from the server when the backup is created. Because this value is stored, you are not required to provide the InstanceProfileArn again if you restore a backup. ',
        }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The instance type that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    KeyPair: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The key pair that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    PreferredBackupWindow: TimeWindowDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The preferred backup period that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: TimeWindowDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The preferred maintenance period that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    S3DataSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: ' This field is deprecated and is no longer used. ',
        }),
    ).exactOptional(),
    S3DataUrl: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: ' This field is deprecated and is no longer used. ',
        }),
    ).exactOptional(),
    S3LogUrl: StringSchema.and(
      z.any().openapi({ description: " The Amazon S3 URL of the backup's log file. " }),
    ).exactOptional(),
    SecurityGroupIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The security group IDs that are obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: ' The name of the server from which the backup was made. ' }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The service role ARN that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    Status: BackupStatusSchema.and(
      z.any().openapi({ description: 'The status of a backup while in progress. ' }),
    ).exactOptional(),
    StatusDescription: StringSchema.and(
      z.any().openapi({ description: ' An informational message about backup status. ' }),
    ).exactOptional(),
    SubnetIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The subnet IDs that are obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    ToolsVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The version of AWS OpsWorks CM-specific tools that is obtained from the server when the backup is created. ',
        }),
    ).exactOptional(),
    UserArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The IAM user ARN of the requester for manual backups. This field is empty for automated backups. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a single backup. ', required: [] })
  .openapi('Backup')

const CreateBackupResponseSchema = z
  .object({
    Backup: BackupSchema.and(
      z.any().openapi({ description: 'Backup created by request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBackupResponse')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> ',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional tag value, such as <code>Production</code> or <code>test-owcm-server</code>. The value can be a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateBackupRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server that you want to back up. ' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: ' A user-defined description of the backup. ' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains tag keys and tag values to attach to an AWS OpsWorks-CM server backup.</p> <ul> <li> <p>The key cannot be empty.</p> </li> <li> <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>Leading and trailing white spaces are trimmed from both the key and value.</p> </li> <li> <p>A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerName'], title: 'CreateBackupRequest' })
  .openapi('CreateBackupRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const BooleanSchema = z.boolean().openapi('Boolean')

const CustomDomainSchema = z
  .string()
  .regex(/^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$/)
  .max(253)
  .openapi('CustomDomain')

const MaintenanceStatusSchema = z.enum(['SUCCESS', 'FAILED']).openapi('MaintenanceStatus')

const ServerStatusSchema = z
  .enum([
    'BACKING_UP',
    'CONNECTION_LOST',
    'CREATING',
    'DELETING',
    'MODIFYING',
    'FAILED',
    'HEALTHY',
    'RUNNING',
    'RESTORING',
    'SETUP',
    'UNDER_MAINTENANCE',
    'UNHEALTHY',
    'TERMINATED',
  ])
  .openapi('ServerStatus')

const ServerSchema = z
  .object({
    AssociatePublicIpAddress: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Associate a public IP address with a server that you are launching. ',
        }),
    ).exactOptional(),
    BackupRetentionCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of automated backups to keep. ' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the server. ' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time stamp of server creation. Example <code>2016-07-29T13:38:47.520Z</code> ',
        }),
    ).exactOptional(),
    CloudFormationStackArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the CloudFormation stack that was used to create the server. ',
        }),
    ).exactOptional(),
    CustomDomain: CustomDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional public endpoint of a server, such as <code>https://aws.my-company.com</code>. You cannot access the server by using the <code>Endpoint</code> value if the server has a <code>CustomDomain</code> specified.',
        }),
    ).exactOptional(),
    DisableAutomatedBackup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Disables automated backups. The number of stored backups is dependent on the value of PreferredBackupCount. ',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A DNS name that can be used to access the engine. Example: <code>myserver-asdfghjkl.us-east-1.opsworks.io</code>. You cannot access the server by using the <code>Endpoint</code> value if the server has a <code>CustomDomain</code> specified. ',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine type of the server. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>. ',
        }),
    ).exactOptional(),
    EngineModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef. ',
        }),
    ).exactOptional(),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The response of a createServer() request returns the master credential to access the server in EngineAttributes. These credentials are not stored by AWS OpsWorks CM; they are returned only as part of the result of createServer(). </p> <p class="title"> <b>Attributes returned in a createServer response for Chef</b> </p> <ul> <li> <p> <code>CHEF_AUTOMATE_PIVOTAL_KEY</code>: A base64-encoded RSA private key that is generated by AWS OpsWorks for Chef Automate. This private key is required to access the Chef API.</p> </li> <li> <p> <code>CHEF_STARTER_KIT</code>: A base64-encoded ZIP file. The ZIP file contains a Chef starter kit, which includes a README, a configuration file, and the required RSA private key. Save this file, unzip it, and then change to the directory where you\'ve unzipped the file contents. From this directory, you can run Knife commands.</p> </li> </ul> <p class="title"> <b>Attributes returned in a createServer response for Puppet</b> </p> <ul> <li> <p> <code>PUPPET_STARTER_KIT</code>: A base64-encoded ZIP file. The ZIP file contains a Puppet starter kit, including a README and a required private key. Save this file, unzip it, and then change to the directory where you\'ve unzipped the file contents.</p> </li> <li> <p> <code>PUPPET_ADMIN_PASSWORD</code>: An administrator password that you can use to sign in to the Puppet Enterprise console after the server is online.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version of the server. For a Chef server, the valid value for EngineVersion is currently <code>2</code>. For a Puppet server, specify either <code>2019</code> or <code>2017</code>. ',
        }),
    ).exactOptional(),
    InstanceProfileArn: StringSchema.and(
      z.any().openapi({ description: 'The instance profile ARN of the server. ' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The instance type for the server, as specified in the CloudFormation stack. This might not be the same instance type that is shown in the EC2 console. ',
        }),
    ).exactOptional(),
    KeyPair: StringSchema.and(
      z.any().openapi({ description: 'The key pair associated with the server. ' }),
    ).exactOptional(),
    MaintenanceStatus: MaintenanceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the most recent server maintenance run. Shows <code>SUCCESS</code> or <code>FAILED</code>. ',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: TimeWindowDefinitionSchema.and(
      z
        .any()
        .openapi({ description: 'The preferred maintenance period specified for the server. ' }),
    ).exactOptional(),
    PreferredBackupWindow: TimeWindowDefinitionSchema.and(
      z.any().openapi({ description: 'The preferred backup period specified for the server. ' }),
    ).exactOptional(),
    SecurityGroupIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The security group IDs for the server, as specified in the CloudFormation stack. These might not be the same security groups that are shown in the EC2 console. ',
        }),
    ).exactOptional(),
    ServiceRoleArn: StringSchema.and(
      z.any().openapi({ description: 'The service role ARN used to create the server. ' }),
    ).exactOptional(),
    Status: ServerStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " The server's status. This field displays the states of actions in progress, such as creating, running, or backing up the server, as well as the server's health state. ",
        }),
    ).exactOptional(),
    StatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Depending on the server status, this field has either a human-readable message (such as a create or backup error), or an escaped block of JSON (used for health check results). ',
        }),
    ).exactOptional(),
    SubnetIds: StringsSchema.and(
      z.any().openapi({ description: ' The subnet IDs specified in a CreateServer request. ' }),
    ).exactOptional(),
    ServerArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the server. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a configuration management server. ', required: [] })
  .openapi('Server')

const CreateServerResponseSchema = z
  .object({
    Server: ServerSchema.and(
      z.any().openapi({ description: 'The server that is created by the request. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateServerResponse')

const CustomCertificateSchema = z
  .string()
  .regex(/\(\?s\)\s*-----BEGIN CERTIFICATE-----.\+-----END CERTIFICATE-----\s*/)
  .max(2097152)
  .openapi('CustomCertificate')

const CustomPrivateKeySchema = z
  .string()
  .regex(
    /\(\?ms\)\s*^-----BEGIN \(\?-s:.*\)PRIVATE KEY-----$.*\?^-----END \(\?-s:.*\)PRIVATE KEY-----$\s*/,
  )
  .max(4096)
  .openapi('CustomPrivateKey')

const BackupRetentionCountDefinitionSchema = z
  .int()
  .min(1)
  .openapi('BackupRetentionCountDefinition')

const InstanceProfileArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]{12}:instance-profile\/.*/)
  .max(10000)
  .openapi('InstanceProfileArn')

const KeyPairSchema = z.string().regex(/.*/).max(10000).openapi('KeyPair')

const ServiceRoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]{12}:role\/.*/)
  .max(10000)
  .openapi('ServiceRoleArn')

const CreateServerRequestSchema = z
  .object({
    AssociatePublicIpAddress: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Associate a public IP address with a server that you are launching. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. ',
        }),
    ).exactOptional(),
    CustomDomain: CustomDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional public endpoint of a server, such as <code>https://aws.my-company.com</code>. To access the server, create a CNAME DNS record in your preferred DNS service that points the custom domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the generated <code>Endpoint</code> value if the server is using a custom domain. If you specify a custom domain, you must also specify values for <code>CustomCertificate</code> and <code>CustomPrivateKey</code>.',
        }),
    ).exactOptional(),
    CustomCertificate: CustomCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a custom certificate, you must also specify values for <code>CustomDomain</code> and <code>CustomPrivateKey</code>. The following are requirements for the <code>CustomCertificate</code> value:</p> <ul> <li> <p>You can provide either a self-signed, custom certificate, or the full certificate chain.</p> </li> <li> <p>The certificate must be a valid X509 certificate, or a certificate chain in PEM format.</p> </li> <li> <p>The certificate must be valid at the time of upload. A certificate can't be used before its validity period begins (the certificate's <code>NotBefore</code> date), or after it expires (the certificate's <code>NotAfter</code> date).</p> </li> <li> <p>The certificate’s common name or subject alternative names (SANs), if present, must match the value of <code>CustomDomain</code>.</p> </li> <li> <p>The certificate must match the value of <code>CustomPrivateKey</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CustomPrivateKey: CustomPrivateKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase. If you specify a custom private key, you must also specify values for <code>CustomDomain</code> and <code>CustomCertificate</code>.',
        }),
    ).exactOptional(),
    DisableAutomatedBackup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Enable or disable scheduled backups. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. ',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration management engine to use. Valid values include <code>ChefAutomate</code> and <code>Puppet</code>. ',
        }),
    ),
    EngineModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef. ',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion is currently <code>2</code>. For a Puppet server, valid values are <code>2019</code> or <code>2017</code>. ',
        }),
    ).exactOptional(),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional engine attributes on a specified server. </p> <p class="title"> <b>Attributes accepted in a Chef createServer request:</b> </p> <ul> <li> <p> <code>CHEF_AUTOMATE_PIVOTAL_KEY</code>: A base64-encoded RSA public key. The corresponding private key is required to access the Chef API. When no CHEF_AUTOMATE_PIVOTAL_KEY is set, a private key is generated and returned in the response. </p> </li> <li> <p> <code>CHEF_AUTOMATE_ADMIN_PASSWORD</code>: The password for the administrative user in the Chef Automate web-based dashboard. The password length is a minimum of eight characters, and a maximum of 32. The password can contain letters, numbers, and special characters (!/@#$%^&amp;+=_). The password must contain at least one lower case letter, one upper case letter, one number, and one special character. When no CHEF_AUTOMATE_ADMIN_PASSWORD is set, one is generated and returned in the response.</p> </li> </ul> <p class="title"> <b>Attributes accepted in a Puppet createServer request:</b> </p> <ul> <li> <p> <code>PUPPET_ADMIN_PASSWORD</code>: To work with the Puppet Enterprise console, a password must use ASCII characters.</p> </li> <li> <p> <code>PUPPET_R10K_REMOTE</code>: The r10k remote is the URL of your control repository (for example, ssh://git@your.git-repo.com:user/control-repo.git). Specifying an r10k remote opens TCP port 8170.</p> </li> <li> <p> <code>PUPPET_R10K_PRIVATE_KEY</code>: If you are using a private Git repository, add PUPPET_R10K_PRIVATE_KEY to specify a PEM-encoded private SSH key.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BackupRetentionCount: BackupRetentionCountDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded. The default value is <code>1</code>. ',
        }),
    ).exactOptional(),
    ServerName: ServerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the server. The server name must be unique within your AWS account, within each region. Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters. ',
        }),
    ),
    InstanceProfileArn: InstanceProfileArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the instance profile that your Amazon EC2 instances use. Although the AWS OpsWorks console typically creates the instance profile for you, if you are using API commands instead, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the instance profile you need. ',
        }),
    ),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon EC2 instance type to use. For example, <code>m5.large</code>. ',
        }),
    ),
    KeyPair: KeyPairSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon EC2 key pair to set for the instance. This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH. ',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: TimeWindowDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance. Valid values must be specified in the following format: <code>DDD:HH:MM</code>. <code>MM</code> must be specified as <code>00</code>. The specified time is in coordinated universal time (UTC). The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See <code>TimeWindowDefinition</code> for more information. </p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.) </p>',
        }),
    ).exactOptional(),
    PreferredBackupWindow: TimeWindowDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled. Valid values must be specified in one of the following formats: </p> <ul> <li> <p> <code>HH:MM</code> for daily backups</p> </li> <li> <p> <code>DDD:HH:MM</code> for weekly backups</p> </li> </ul> <p> <code>MM</code> must be specified as <code>00</code>. The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.</p> <p> <b>Example:</b> <code>08:00</code>, which represents a daily start time of 08:00 UTC.</p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)</p>',
        }),
    ).exactOptional(),
    SecurityGroupIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups must be within the VPC that is specified by <code>SubnetIds</code>. </p> <p> If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone). </p>',
        }),
    ).exactOptional(),
    ServiceRoleArn: ServiceRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The service role that the AWS OpsWorks CM service backend uses to work with your account. Although the AWS OpsWorks management console typically creates the service role for you, if you are using the AWS CLI or API commands, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the service role and instance profile that you need. ',
        }),
    ),
    SubnetIds: StringsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The IDs of subnets in which to launch the server EC2 instance. </p> <p> Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have "Auto Assign Public IP" enabled. </p> <p> EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have "Auto Assign Public IP" enabled. </p> <p>For more information about supported Amazon EC2 platforms, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server.</p> <ul> <li> <p>The key cannot be empty.</p> </li> <li> <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : / @</code> </p> </li> <li> <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : / @</code> </p> </li> <li> <p>Leading and trailing white spaces are trimmed from both the key and value.</p> </li> <li> <p>A maximum of 50 user-applied tags is allowed for any AWS OpsWorks-CM server.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Engine', 'ServerName', 'InstanceProfileArn', 'InstanceType', 'ServiceRoleArn'],
    title: 'CreateServerRequest',
  })
  .openapi('CreateServerRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const DeleteBackupResponseSchema = z.object({}).openapi('DeleteBackupResponse')

const DeleteBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the backup to delete. Run the DescribeBackups command to get a list of backup IDs. Backup IDs are in the format <code>ServerName-yyyyMMddHHmmssSSS</code>. ',
        }),
    ),
  })
  .openapi({ required: ['BackupId'], title: 'DeleteBackupRequest' })
  .openapi('DeleteBackupRequest')

const DeleteServerResponseSchema = z.object({}).openapi('DeleteServerResponse')

const DeleteServerRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The ID of the server to delete.' }),
    ),
  })
  .openapi({ required: ['ServerName'], title: 'DeleteServerRequest' })
  .openapi('DeleteServerRequest')

const AccountAttributeSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The attribute name. The following are supported attribute names. </p> <ul> <li> <p> <i>ServerLimit:</i> The number of current servers/maximum number of servers allowed. By default, you can have a maximum of 10 servers. </p> </li> <li> <p> <i>ManualBackupLimit:</i> The number of current manual backups/maximum number of backups allowed. By default, you can have a maximum of 50 manual backups saved. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Maximum: IntegerSchema.and(
      z.any().openapi({ description: ' The maximum allowed value. ' }),
    ).exactOptional(),
    Used: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The current usage, such as the current number of servers that are associated with the account. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Stores account attributes. ', required: [] })
  .openapi('AccountAttribute')

const AccountAttributesSchema = z
  .array(AccountAttributeSchema)
  .openapi({ description: ' A list of individual account attributes. ' })
  .openapi('AccountAttributes')

const DescribeAccountAttributesResponseSchema = z
  .object({
    Attributes: AccountAttributesSchema.and(
      z.any().openapi({ description: ' The attributes that are currently set for the account. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountAttributesResponse')

const DescribeAccountAttributesRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAccountAttributesRequest' })
  .openapi('DescribeAccountAttributesRequest')

const BackupsSchema = z.array(BackupSchema).openapi('Backups')

const DescribeBackupsResponseSchema = z
  .object({
    Backups: BackupsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the response to a <code>DescribeBackups</code> request. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeBackups</code> requests.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBackupsResponse')

const NextTokenSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('NextToken')

const MaxResultsSchema = z.int().min(1).openapi('MaxResults')

const DescribeBackupsRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'Describes a single backup. ' }),
    ).exactOptional(),
    ServerName: ServerNameSchema.and(
      z
        .any()
        .openapi({ description: 'Returns backups for the server with the specified ServerName. ' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeBackups</code> requests.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeBackups</code> requests.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeBackupsRequest', required: [] })
  .openapi('DescribeBackupsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ServerEventSchema = z
  .object({
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the event occurred. ' }),
    ).exactOptional(),
    ServerName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the server on or for which the event occurred. ' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A human-readable informational or status message.' }),
    ).exactOptional(),
    LogUrl: StringSchema.and(
      z.any().openapi({ description: "The Amazon S3 URL of the event's log file." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An event that is related to the server, such as the start of maintenance or backup. ',
    required: [],
  })
  .openapi('ServerEvent')

const ServerEventsSchema = z.array(ServerEventSchema).openapi('ServerEvents')

const DescribeEventsResponseSchema = z
  .object({
    ServerEvents: ServerEventsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the response to a <code>DescribeEvents</code> request. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventsResponse')

const DescribeEventsRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server for which you want to view events.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur. ",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerName'], title: 'DescribeEventsRequest' })
  .openapi('DescribeEventsRequest')

const NodeAssociationStatusSchema = z
  .enum(['SUCCESS', 'FAILED', 'IN_PROGRESS'])
  .openapi({
    description:
      '<p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>',
  })
  .openapi('NodeAssociationStatus')

const DescribeNodeAssociationStatusResponseSchema = z
  .object({
    NodeAssociationStatus: NodeAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>',
        }),
    ).exactOptional(),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes specific to the node association. In Puppet, the attibute PUPPET_NODE_CERT contains the signed certificate (the result of the CSR). ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeNodeAssociationStatusResponse')

const DescribeNodeAssociationStatusRequestSchema = z
  .object({
    NodeAssociationStatusToken: NodeAssociationStatusTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned in either the AssociateNodeResponse or the DisassociateNodeResponse. ',
        }),
    ),
    ServerName: ServerNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the server from which to disassociate the node. ' }),
    ),
  })
  .openapi({
    required: ['NodeAssociationStatusToken', 'ServerName'],
    title: 'DescribeNodeAssociationStatusRequest',
  })
  .openapi('DescribeNodeAssociationStatusRequest')

const ServersSchema = z.array(ServerSchema).openapi('Servers')

const DescribeServersResponseSchema = z
  .object({
    Servers: ServersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the response to a <code>DescribeServers</code> request.</p> <p> <i>For Chef Automate servers:</i> If <code>DescribeServersResponse$Servers$EngineAttributes</code> includes CHEF_MAJOR_UPGRADE_AVAILABLE, you can upgrade the Chef Automate server to Chef Automate 2. To be eligible for upgrade, a server running Chef Automate 1 must have had at least one successful maintenance run after November 1, 2019.</p> <p> <i>For Puppet servers:</i> <code>DescribeServersResponse$Servers$EngineAttributes</code> contains the following two responses:</p> <ul> <li> <p> <code>PUPPET_API_CA_CERT</code>, the PEM-encoded CA certificate that is used by the Puppet API over TCP port number 8140. The CA certificate is also used to sign node certificates.</p> </li> <li> <p> <code>PUPPET_API_CRL</code>, a certificate revocation list. The certificate revocation list is for internal maintenance purposes only. For more information about the Puppet certificate revocation list, see <a href="https://puppet.com/docs/puppet/5.5/man/certificate_revocation_list.html">Man Page: puppet certificate_revocation_list</a> in the Puppet documentation.</p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeServers</code> requests. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeServersResponse')

const DescribeServersRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'Describes the server with the specified ServerName.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeServers</code> requests. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is not currently implemented for <code>DescribeServers</code> requests. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeServersRequest', required: [] })
  .openapi('DescribeServersRequest')

const DisassociateNodeResponseSchema = z
  .object({
    NodeAssociationStatusToken: NodeAssociationStatusTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the disassociation request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateNodeResponse')

const DisassociateNodeRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the server from which to disassociate the node. ' }),
    ),
    NodeName: NodeNameSchema.and(z.any().openapi({ description: 'The name of the client node. ' })),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Engine attributes that are used for disassociating the node. No attributes are required for Puppet. </p> <p class="title"> <b>Attributes required in a DisassociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node was associated. By default only one organization named <code>default</code> can exist. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerName', 'NodeName'], title: 'DisassociateNodeRequest' })
  .openapi('DisassociateNodeRequest')

const ExportServerEngineAttributeResponseSchema = z
  .object({
    EngineAttribute: EngineAttributeSchema.and(
      z
        .any()
        .openapi({
          description: 'The requested engine attribute pair with attribute name and value.',
        }),
    ).exactOptional(),
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The server name used in the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportServerEngineAttributeResponse')

const ExportServerEngineAttributeRequestSchema = z
  .object({
    ExportAttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the export attribute. Currently, the supported export attribute is <code>Userdata</code>. This exports a user data script that includes parameters and values provided in the <code>InputAttributes</code> list.',
        }),
    ),
    ServerName: ServerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the server from which you are exporting the attribute.',
        }),
    ),
    InputAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of engine attributes. The list type is <code>EngineAttribute</code>. An <code>EngineAttribute</code> list item is a pair that includes an attribute name and its value. For the <code>Userdata</code> ExportAttributeName, the following are supported engine attribute names.</p> <ul> <li> <p> <b>RunList</b> In Chef, a list of roles or recipes that are run in the specified order. In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>OrganizationName</b> In Chef, an organization name. AWS OpsWorks for Chef Automate always creates the organization <code>default</code>. In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>NodeEnvironment</b> In Chef, a node environment (for example, development, staging, or one-box). In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>NodeClientVersion</b> In Chef, the version of the Chef engine (three numbers separated by dots, such as 13.8.5). If this attribute is empty, OpsWorks for Chef Automate uses the most current version. In Puppet, this parameter is ignored.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExportAttributeName', 'ServerName'],
    title: 'ExportServerEngineAttributeRequest',
  })
  .openapi('ExportServerEngineAttributeRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags that have been applied to the resource.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you can use as the value of <code>NextToken</code> in subsequent calls to the API to show more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AWSOpsWorksCMResourceArnSchema = z
  .string()
  .regex(/arn:aws.*:opsworks-cm:.*:[0-9]{12}:.*/)
  .openapi('AWSOpsWorksCMResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: AWSOpsWorksCMResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server for which you want to show applied tags. For example, <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "NextToken is a string that is returned in some command responses. It indicates that not all entries have been returned, and that you must run at least one more request to get remaining items. To get remaining results, call <code>ListTagsForResource</code> again, and assign the token from the previous results as the value of the <code>nextToken</code> parameter. If there are no more results, the response object's <code>nextToken</code> parameter value is <code>null</code>. Setting a <code>nextToken</code> value that was not returned in your previous results causes an <code>InvalidNextTokenException</code> to occur.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RestoreServerResponseSchema = z
  .object({ Server: ServerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RestoreServerResponse')

const RestoreServerRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The ID of the backup that you want to use to restore a server. ',
        }),
    ),
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: ' The name of the server that you want to restore. ' }),
    ),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of instance to restore. Valid values must be specified in the following format: <code>^([cm][34]|t2).*</code> For example, <code>m5.large</code>. Valid values are <code>m5.large</code>, <code>r5.xlarge</code>, and <code>r5.2xlarge</code>. If you do not specify this parameter, RestoreServer uses the instance type from the specified backup. ',
        }),
    ).exactOptional(),
    KeyPair: KeyPairSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the key pair to set on the new EC2 instance. This can be helpful if the administrator no longer has the SSH key. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BackupId', 'ServerName'], title: 'RestoreServerRequest' })
  .openapi('RestoreServerRequest')

const StartMaintenanceResponseSchema = z
  .object({
    Server: ServerSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the response to a <code>StartMaintenance</code> request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMaintenanceResponse')

const StartMaintenanceRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server on which to run maintenance. ' }),
    ),
    EngineAttributes: EngineAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Engine attributes that are specific to the server on which you want to run maintenance.</p> <p class="title"> <b>Attributes accepted in a StartMaintenance request for Chef</b> </p> <ul> <li> <p> <code>CHEF_MAJOR_UPGRADE</code>: If a Chef Automate server is eligible for upgrade to Chef Automate 2, add this engine attribute to a <code>StartMaintenance</code> request and set the value to <code>true</code> to upgrade the server to Chef Automate 2. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opscm-a2upgrade.html">Upgrade an AWS OpsWorks for Chef Automate Server to Chef Automate 2</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerName'], title: 'StartMaintenanceRequest' })
  .openapi('StartMaintenanceRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AWSOpsWorksCMResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of a resource to which you want to apply tags. For example, <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map that contains tag keys and tag values to attach to AWS OpsWorks-CM servers or backups.</p> <ul> <li> <p>The key cannot be empty.</p> </li> <li> <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code> </p> </li> <li> <p>Leading and trailing white spaces are trimmed from both the key and value.</p> </li> <li> <p>A maximum of 50 user-applied tags is allowed for any AWS OpsWorks-CM server or backup.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: AWSOpsWorksCMResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of a resource from which you want to remove tags. For example, <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of tags that you want to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateServerResponseSchema = z
  .object({
    Server: ServerSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the response to a <code>UpdateServer</code> request. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateServerResponse')

const UpdateServerRequestSchema = z
  .object({
    DisableAutomatedBackup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Setting DisableAutomatedBackup to <code>true</code> disables automated or scheduled backups. Automated backups are enabled by default. ',
        }),
    ).exactOptional(),
    BackupRetentionCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Sets the number of automated backups that you want to keep. ' }),
    ).exactOptional(),
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server to update. ' }),
    ),
    PreferredMaintenanceWindow: TimeWindowDefinitionSchema.exactOptional(),
    PreferredBackupWindow: TimeWindowDefinitionSchema.exactOptional(),
  })
  .openapi({ required: ['ServerName'], title: 'UpdateServerRequest' })
  .openapi('UpdateServerRequest')

const UpdateServerEngineAttributesResponseSchema = z
  .object({
    Server: ServerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the response to an <code>UpdateServerEngineAttributes</code> request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateServerEngineAttributesResponse')

const AttributeNameSchema = z
  .string()
  .regex(/[A-Z][A-Z0-9_]*/)
  .min(1)
  .max(64)
  .openapi('AttributeName')

const AttributeValueSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('AttributeValue')

const UpdateServerEngineAttributesRequestSchema = z
  .object({
    ServerName: ServerNameSchema.and(
      z.any().openapi({ description: 'The name of the server to update. ' }),
    ),
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the engine attribute to update. ' }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value to set for the attribute. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerName', 'AttributeName'],
    title: 'UpdateServerEngineAttributesRequest',
  })
  .openapi('UpdateServerEngineAttributesRequest')

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

export const postXAmzTargetOpsWorksCMV20161101AssociateNodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode',
  description:
    '<p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server\'s instance. </p>',
  operationId: 'AssociateNode',
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
        .literal('OpsWorksCM_V2016_11_01.AssociateNode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.AssociateNode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateNodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateNodeResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101CreateBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup',
  description:
    '<p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>',
  operationId: 'CreateBackup',
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
        .literal('OpsWorksCM_V2016_11_01.CreateBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.CreateBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackupResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101CreateServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer',
  description:
    '<p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>',
  operationId: 'CreateServer',
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
        .literal('OpsWorksCM_V2016_11_01.CreateServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.CreateServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServerResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DeleteBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup',
  description:
    '<p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>',
  operationId: 'DeleteBackup',
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
        .literal('OpsWorksCM_V2016_11_01.DeleteBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DeleteBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackupResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DeleteServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer',
  description:
    "<p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>",
  operationId: 'DeleteServer',
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
        .literal('OpsWorksCM_V2016_11_01.DeleteServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DeleteServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServerResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes',
  description:
    '<p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>',
  operationId: 'DescribeAccountAttributes',
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
        .literal('OpsWorksCM_V2016_11_01.DescribeAccountAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DescribeAccountAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountAttributesResponseSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DescribeBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups',
  description:
    '<p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>',
  operationId: 'DescribeBackups',
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
        .literal('OpsWorksCM_V2016_11_01.DescribeBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DescribeBackups'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBackupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBackupsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents',
  description:
    '<p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>',
  operationId: 'DescribeEvents',
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
        .literal('OpsWorksCM_V2016_11_01.DescribeEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DescribeEvents'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus',
  description:
    '<p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>',
  operationId: 'DescribeNodeAssociationStatus',
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
        .literal('OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeNodeAssociationStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNodeAssociationStatusResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DescribeServersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers',
  description:
    '<p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>',
  operationId: 'DescribeServers',
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
        .literal('OpsWorksCM_V2016_11_01.DescribeServers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DescribeServers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101DisassociateNodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode',
  description:
    "<p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>",
  operationId: 'DisassociateNode',
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
        .literal('OpsWorksCM_V2016_11_01.DisassociateNode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.DisassociateNode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateNodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateNodeResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute',
  description:
    '<p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>',
  operationId: 'ExportServerEngineAttribute',
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
        .literal('OpsWorksCM_V2016_11_01.ExportServerEngineAttribute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportServerEngineAttributeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportServerEngineAttributeResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource',
  description:
    'Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.',
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
      'X-Amz-Target': z
        .literal('OpsWorksCM_V2016_11_01.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
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
  },
})

export const postXAmzTargetOpsWorksCMV20161101RestoreServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer',
  description:
    "<p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>",
  operationId: 'RestoreServer',
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
        .literal('OpsWorksCM_V2016_11_01.RestoreServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.RestoreServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreServerResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101StartMaintenanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance',
  description:
    '<p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>',
  operationId: 'StartMaintenance',
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
        .literal('OpsWorksCM_V2016_11_01.StartMaintenance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.StartMaintenance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartMaintenanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMaintenanceResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource',
  description:
    'Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.',
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
      'X-Amz-Target': z
        .literal('OpsWorksCM_V2016_11_01.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
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
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource',
  description: 'Removes specified tags from an AWS OpsWorks-CM server or backup.',
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
      'X-Amz-Target': z
        .literal('OpsWorksCM_V2016_11_01.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
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
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101UpdateServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer',
  description: '<p> Updates settings for a server. </p> <p> This operation is synchronous. </p>',
  operationId: 'UpdateServer',
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
        .literal('OpsWorksCM_V2016_11_01.UpdateServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OpsWorksCM_V2016_11_01.UpdateServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServerResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes',
  description:
    "<p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>",
  operationId: 'UpdateServerEngineAttributes',
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
        .literal('OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServerEngineAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServerEngineAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
