import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const CreateBrokerResponseSchema = z
  .object({
    BrokerArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerArn' },
          description: "The broker's Amazon Resource Name (ARN).",
        }),
    ).exactOptional(),
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBrokerResponse')

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const DayOfWeekSchema = z
  .enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'])
  .openapi('DayOfWeek')

const UserSchema = z
  .object({
    ConsoleAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'consoleAccess' },
          description:
            'Enables access to the ActiveMQ Web Console for the ActiveMQ user. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    Groups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'groups' },
          description:
            'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'password' },
          description:
            'Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).',
        }),
    ),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'username' },
          description:
            '<p>The username of the broker user. The following restrictions apply to broker usernames:</p> <ul><li><p>For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p></li> <li><p>para>For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.</p></para></li></ul> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>',
        }),
    ),
    ReplicationUser: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'replicationUser' },
          description: 'Defines if this user is intended for CRDR replication purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Username', 'Password'],
    description:
      'A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.',
  })
  .openapi('User')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const AuthenticationStrategySchema = z
  .enum(['SIMPLE', 'LDAP'])
  .openapi({
    description:
      'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
  })
  .openapi('AuthenticationStrategy')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const ConfigurationRevisionSchema = z
  .object({
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration revision.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description of the configuration revision.',
        }),
    ).exactOptional(),
    Revision: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revision' },
          description: 'Required. The revision number of the configuration.',
        }),
    ),
  })
  .openapi({
    required: ['Revision', 'Created'],
    description: 'Returns information about the specified configuration revision.',
  })
  .openapi('ConfigurationRevision')

const CreateConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'Required. The Amazon Resource Name (ARN) of the configuration.',
        }),
    ).exactOptional(),
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy associated with the configuration. The default is SIMPLE.',
        }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'Required. The unique ID that Amazon MQ generates for the configuration.',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: 'The latest revision of the configuration.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConfigurationResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const CreateUserResponseSchema = z.object({}).openapi('CreateUserResponse')

const DeleteBrokerResponseSchema = z
  .object({
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBrokerResponse')

const DeleteUserResponseSchema = z.object({}).openapi('DeleteUserResponse')

const ActionRequiredSchema = z
  .object({
    ActionRequiredCode: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'actionRequiredCode' },
          description:
            'The code you can use to find instructions on the action required to resolve your broker issue.',
        }),
    ).exactOptional(),
    ActionRequiredInfo: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'actionRequiredInfo' },
          description: 'Information about the action required to resolve your broker issue.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Action required for a broker.', required: [] })
  .openapi('ActionRequired')

const ListOfActionRequiredSchema = z.array(ActionRequiredSchema).openapi('ListOfActionRequired')

const BrokerInstanceSchema = z
  .object({
    ConsoleURL: StringSchema.and(
      z.any().openapi({ xml: { name: 'consoleURL' }, description: 'The brokers web console URL.' }),
    ).exactOptional(),
    Endpoints: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endpoints' },
          description: "The broker's wire-level protocol endpoints.",
        }),
    ).exactOptional(),
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ipAddress' },
          description:
            'The IP address of the Elastic Network Interface (ENI) attached to the broker. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about all brokers.', required: [] })
  .openapi('BrokerInstance')

const ListOfBrokerInstanceSchema = z.array(BrokerInstanceSchema).openapi('ListOfBrokerInstance')

const BrokerStateSchema = z
  .enum([
    'CREATION_IN_PROGRESS',
    'CREATION_FAILED',
    'DELETION_IN_PROGRESS',
    'RUNNING',
    'REBOOT_IN_PROGRESS',
    'CRITICAL_ACTION_REQUIRED',
    'REPLICA',
  ])
  .openapi({ description: "The broker's status." })
  .openapi('BrokerState')

const ConfigurationIdSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'Required. The unique ID that Amazon MQ generates for the configuration.',
        }),
    ),
    Revision: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revision' },
          description: 'The revision number of the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'A list of information about the configuration.' })
  .openapi('ConfigurationId')

const ListOfConfigurationIdSchema = z.array(ConfigurationIdSchema).openapi('ListOfConfigurationId')

const ConfigurationsSchema = z
  .object({
    Current: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'current' }, description: "The broker's current configuration." }),
    ).exactOptional(),
    History: ListOfConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'history' },
          description: 'The history of configurations applied to the broker.',
        }),
    ).exactOptional(),
    Pending: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'pending' }, description: "The broker's pending configuration." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Broker configuration information', required: [] })
  .openapi('Configurations')

const DeploymentModeSchema = z
  .enum(['SINGLE_INSTANCE', 'ACTIVE_STANDBY_MULTI_AZ', 'CLUSTER_MULTI_AZ'])
  .openapi({ description: "The broker's deployment mode." })
  .openapi('DeploymentMode')

const EncryptionOptionsSchema = z
  .object({
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'kmsKeyId' },
          description:
            'The customer master key (CMK) to use for the A KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.',
        }),
    ).exactOptional(),
    UseAwsOwnedKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'useAwsOwnedKey' },
          description:
            'Enables the use of an Amazon Web Services owned CMK using KMS (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.',
        }),
    ),
  })
  .openapi({ required: ['UseAwsOwnedKey'], description: 'Encryption options for the broker.' })
  .openapi('EncryptionOptions')

const EngineTypeSchema = z
  .enum(['ACTIVEMQ', 'RABBITMQ'])
  .openapi({ description: 'The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.' })
  .openapi('EngineType')

const LdapServerMetadataOutputSchema = z
  .object({
    Hosts: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hosts' },
          description:
            'Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.',
        }),
    ),
    RoleBase: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleBase' },
          description:
            'The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,\n                  dc=example, dc=com.',
        }),
    ),
    RoleName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleName' },
          description:
            'Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.',
        }),
    ).exactOptional(),
    RoleSearchMatching: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleSearchMatching' },
          description:
            "The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.",
        }),
    ),
    RoleSearchSubtree: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleSearchSubtree' },
          description:
            'The directory search scope for the role. If set to true, scope is to search the entire subtree.',
        }),
    ).exactOptional(),
    ServiceAccountUsername: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serviceAccountUsername' },
          description:
            'Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
        }),
    ),
    UserBase: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userBase' },
          description:
            'Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,\n                  dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.',
        }),
    ),
    UserRoleName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userRoleName' },
          description: 'Specifies the name of the LDAP attribute for the user group membership.',
        }),
    ).exactOptional(),
    UserSearchMatching: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userSearchMatching' },
          description:
            "The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,\n               dc=com.",
        }),
    ),
    UserSearchSubtree: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userSearchSubtree' },
          description:
            'The directory search scope for the user. If set to true, scope is to search the entire subtree.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Hosts',
      'UserSearchMatching',
      'UserBase',
      'RoleSearchMatching',
      'ServiceAccountUsername',
      'RoleBase',
    ],
    description:
      'Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.',
  })
  .openapi('LdapServerMetadataOutput')

const PendingLogsSchema = z
  .object({
    Audit: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'audit' },
          description:
            'Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.',
        }),
    ).exactOptional(),
    General: BooleanSchema.and(
      z.any().openapi({ xml: { name: 'general' }, description: 'Enables general logging.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The list of information about logs to be enabled for the specified broker.',
    required: [],
  })
  .openapi('PendingLogs')

const LogsSummarySchema = z
  .object({
    Audit: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'audit' },
          description:
            'Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.',
        }),
    ).exactOptional(),
    AuditLogGroup: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'auditLogGroup' },
          description: 'The location of the CloudWatch Logs log group where audit logs are sent.',
        }),
    ).exactOptional(),
    General: BooleanSchema.and(
      z.any().openapi({ xml: { name: 'general' }, description: 'Enables general logging.' }),
    ),
    GeneralLogGroup: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'generalLogGroup' },
          description: 'The location of the CloudWatch Logs log group where general logs are sent.',
        }),
    ),
    Pending: PendingLogsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pending' },
          description:
            'The list of information about logs pending to be deployed for the specified broker.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GeneralLogGroup', 'General'],
    description:
      'The list of information about logs currently enabled and pending to be deployed for the specified broker.',
  })
  .openapi('LogsSummary')

const WeeklyStartTimeSchema = z
  .object({
    DayOfWeek: DayOfWeekSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'dayOfWeek' }, description: 'Required. The day of the week.' }),
    ),
    TimeOfDay: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeOfDay' },
          description: 'Required. The time, in 24-hour format.',
        }),
    ),
    TimeZone: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeZone' },
          description:
            'The time zone, UTC by default, in either the Country/City format, or the UTC offset format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TimeOfDay', 'DayOfWeek'],
    description:
      'The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.',
  })
  .openapi('WeeklyStartTime')

const BrokerStorageTypeSchema = z
  .enum(['EBS', 'EFS'])
  .openapi({
    description:
      "<p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important>",
  })
  .openapi('BrokerStorageType')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const ChangeTypeSchema = z
  .enum(['CREATE', 'UPDATE', 'DELETE'])
  .openapi({ description: 'The type of change pending for the ActiveMQ user.' })
  .openapi('ChangeType')

const UserSummarySchema = z
  .object({
    PendingChange: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingChange' },
          description: 'The type of change pending for the broker user.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'username' },
          description:
            'Required. The username of the broker user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ),
  })
  .openapi({
    required: ['Username'],
    description: 'Returns a list of all broker users. Does not apply to RabbitMQ brokers.',
  })
  .openapi('UserSummary')

const ListOfUserSummarySchema = z.array(UserSummarySchema).openapi('ListOfUserSummary')

const DataReplicationCounterpartSchema = z
  .object({
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'Required. The unique broker id generated by Amazon MQ.',
        }),
    ),
    Region: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'region' }, description: 'Required. The region of the broker.' }),
    ),
  })
  .openapi({
    required: ['BrokerId', 'Region'],
    description: 'Specifies a broker in a data replication pair.',
  })
  .openapi('DataReplicationCounterpart')

const DataReplicationMetadataOutputSchema = z
  .object({
    DataReplicationCounterpart: DataReplicationCounterpartSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationCounterpart' },
          description:
            "Describes the replica/primary broker. Only returned if this broker is currently set as a primary or replica in the broker's dataReplicationRole property.",
        }),
    ).exactOptional(),
    DataReplicationRole: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationRole' },
          description:
            'Defines the role of this broker in a data replication pair. When a replica broker is promoted to primary, this role is interchanged.',
        }),
    ),
  })
  .openapi({
    required: ['DataReplicationRole'],
    description:
      'The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR.',
  })
  .openapi('DataReplicationMetadataOutput')

const DataReplicationModeSchema = z
  .enum(['NONE', 'CRDR'])
  .openapi({ description: 'Specifies whether a broker is a part of a data replication pair.' })
  .openapi('DataReplicationMode')

const DescribeBrokerResponseSchema = z
  .object({
    ActionsRequired: ListOfActionRequiredSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'actionsRequired' },
          description: 'Actions required for a broker.',
        }),
    ).exactOptional(),
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'The authentication strategy used to secure the broker. The default is SIMPLE.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoMinorVersionUpgrade' },
          description:
            'Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.',
        }),
    ).exactOptional(),
    BrokerArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerArn' },
          description: "The broker's Amazon Resource Name (ARN).",
        }),
    ).exactOptional(),
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
    BrokerInstances: ListOfBrokerInstanceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerInstances' },
          description: 'A list of information about allocated brokers.',
        }),
    ).exactOptional(),
    BrokerName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerName' },
          description:
            "The broker's name. This value must be unique in your Amazon Web Services account account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.",
        }),
    ).exactOptional(),
    BrokerState: BrokerStateSchema.and(
      z.any().openapi({ xml: { name: 'brokerState' }, description: "The broker's status." }),
    ).exactOptional(),
    Configurations: ConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurations' },
          description: 'The list of all revisions for the specified configuration.',
        }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'The time when the broker was created.',
        }),
    ).exactOptional(),
    DeploymentMode: DeploymentModeSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'deploymentMode' }, description: "The broker's deployment mode." }),
    ).exactOptional(),
    EncryptionOptions: EncryptionOptionsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionOptions' },
          description: 'Encryption options for the broker.',
        }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineType' },
          description:
            'The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'The broker engine\'s version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ).exactOptional(),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'hostInstanceType' }, description: "The broker's instance type." }),
    ).exactOptional(),
    LdapServerMetadata: LdapServerMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ldapServerMetadata' },
          description:
            'The metadata of the LDAP server used to authenticate and authorize connections to the broker.',
        }),
    ).exactOptional(),
    Logs: LogsSummarySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'logs' },
          description:
            'The list of information about logs currently enabled and pending to be deployed for the specified broker.',
        }),
    ).exactOptional(),
    MaintenanceWindowStartTime: WeeklyStartTimeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceWindowStartTime' },
          description: 'The parameters that determine the WeeklyStartTime.',
        }),
    ).exactOptional(),
    PendingAuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingAuthenticationStrategy' },
          description:
            'The authentication strategy that will be applied when the broker is rebooted. The default is SIMPLE.',
        }),
    ).exactOptional(),
    PendingEngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingEngineVersion' },
          description:
            'The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ).exactOptional(),
    PendingHostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingHostInstanceType' },
          description:
            'The broker\'s host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.',
        }),
    ).exactOptional(),
    PendingLdapServerMetadata: LdapServerMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingLdapServerMetadata' },
          description:
            'The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.',
        }),
    ).exactOptional(),
    PendingSecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingSecurityGroups' },
          description: 'The list of pending security groups to authorize connections to brokers.',
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'publiclyAccessible' },
          description:
            "Enables connections from applications outside of the VPC that hosts the broker's subnets.",
        }),
    ).exactOptional(),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            'The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.',
        }),
    ).exactOptional(),
    StorageType: BrokerStorageTypeSchema.and(
      z.any().openapi({ xml: { name: 'storageType' }, description: "The broker's storage type." }),
    ).exactOptional(),
    SubnetIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description:
            'The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The list of all tags associated with this broker.',
        }),
    ).exactOptional(),
    Users: ListOfUserSummarySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'users' },
          description: 'The list of all broker usernames for the specified broker.',
        }),
    ).exactOptional(),
    DataReplicationMetadata: DataReplicationMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMetadata' },
          description:
            'The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.',
        }),
    ).exactOptional(),
    DataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMode' },
          description: 'Describes whether this broker is a part of a data replication pair.',
        }),
    ).exactOptional(),
    PendingDataReplicationMetadata: DataReplicationMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingDataReplicationMetadata' },
          description:
            'The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.',
        }),
    ).exactOptional(),
    PendingDataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingDataReplicationMode' },
          description:
            'Describes whether this broker will be a part of a data replication pair after reboot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBrokerResponse')

const EngineVersionSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'Id for the version.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Id of the engine version.', required: [] })
  .openapi('EngineVersion')

const ListOfEngineVersionSchema = z.array(EngineVersionSchema).openapi('ListOfEngineVersion')

const BrokerEngineTypeSchema = z
  .object({
    EngineType: EngineTypeSchema.and(
      z.any().openapi({ xml: { name: 'engineType' }, description: "The broker's engine type." }),
    ).exactOptional(),
    EngineVersions: ListOfEngineVersionSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'engineVersions' }, description: 'The list of engine versions.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Types of broker engines.', required: [] })
  .openapi('BrokerEngineType')

const ListOfBrokerEngineTypeSchema = z
  .array(BrokerEngineTypeSchema)
  .openapi('ListOfBrokerEngineType')

const IntegerMin5Max100Schema = z.int().min(5).max(100).openapi('IntegerMin5Max100')

const DescribeBrokerEngineTypesResponseSchema = z
  .object({
    BrokerEngineTypes: ListOfBrokerEngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerEngineTypes' },
          description: 'List of available engine types and versions.',
        }),
    ).exactOptional(),
    MaxResults: IntegerMin5Max100Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxResults' },
          description:
            'Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBrokerEngineTypesResponse')

const AvailabilityZoneSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'Id for the availability zone.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Name of the availability zone.', required: [] })
  .openapi('AvailabilityZone')

const ListOfAvailabilityZoneSchema = z
  .array(AvailabilityZoneSchema)
  .openapi('ListOfAvailabilityZone')

const ListOfDeploymentModeSchema = z.array(DeploymentModeSchema).openapi('ListOfDeploymentMode')

const BrokerInstanceOptionSchema = z
  .object({
    AvailabilityZones: ListOfAvailabilityZoneSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'availabilityZones' }, description: 'The list of available az.' }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z.any().openapi({ xml: { name: 'engineType' }, description: "The broker's engine type." }),
    ).exactOptional(),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'hostInstanceType' }, description: "The broker's instance type." }),
    ).exactOptional(),
    StorageType: BrokerStorageTypeSchema.and(
      z.any().openapi({ xml: { name: 'storageType' }, description: "The broker's storage type." }),
    ).exactOptional(),
    SupportedDeploymentModes: ListOfDeploymentModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'supportedDeploymentModes' },
          description: 'The list of supported deployment modes.',
        }),
    ).exactOptional(),
    SupportedEngineVersions: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'supportedEngineVersions' },
          description: 'The list of supported engine versions.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Option for host instance type.', required: [] })
  .openapi('BrokerInstanceOption')

const ListOfBrokerInstanceOptionSchema = z
  .array(BrokerInstanceOptionSchema)
  .openapi('ListOfBrokerInstanceOption')

const DescribeBrokerInstanceOptionsResponseSchema = z
  .object({
    BrokerInstanceOptions: ListOfBrokerInstanceOptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerInstanceOptions' },
          description: 'List of available broker instance options.',
        }),
    ).exactOptional(),
    MaxResults: IntegerMin5Max100Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxResults' },
          description:
            'Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBrokerInstanceOptionsResponse')

const DescribeConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'arn' }, description: 'Required. The ARN of the configuration.' }),
    ).exactOptional(),
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy associated with the configuration. The default is SIMPLE.',
        }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration revision.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Required. The description of the configuration.',
        }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineType' },
          description:
            'Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'Required. The broker engine\'s version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'Required. The unique ID that Amazon MQ generates for the configuration.',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: 'Required. The latest revision of the configuration.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The list of all tags associated with this configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationResponse')

const DescribeConfigurationRevisionResponseSchema = z
  .object({
    ConfigurationId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationId' },
          description: 'Required. The unique ID that Amazon MQ generates for the configuration.',
        }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration.',
        }),
    ).exactOptional(),
    Data: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'data' },
          description:
            'Amazon MQ for ActiveMQ: the base64-encoded XML configuration. Amazon MQ for RabbitMQ: base64-encoded Cuttlefish.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description of the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationRevisionResponse')

const UserPendingChangesSchema = z
  .object({
    ConsoleAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'consoleAccess' },
          description: 'Enables access to the the ActiveMQ Web Console for the ActiveMQ user.',
        }),
    ).exactOptional(),
    Groups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'groups' },
          description:
            'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ).exactOptional(),
    PendingChange: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingChange' },
          description: 'Required. The type of change pending for the ActiveMQ user.',
        }),
    ),
  })
  .openapi({
    required: ['PendingChange'],
    description:
      'Returns information about the status of the changes pending for the ActiveMQ user.',
  })
  .openapi('UserPendingChanges')

const DescribeUserResponseSchema = z
  .object({
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'Required. The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
    ConsoleAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'consoleAccess' },
          description: 'Enables access to the the ActiveMQ Web Console for the ActiveMQ user.',
        }),
    ).exactOptional(),
    Groups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'groups' },
          description:
            'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ).exactOptional(),
    Pending: UserPendingChangesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pending' },
          description: 'The status of the changes pending for the ActiveMQ user.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'username' },
          description:
            'Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ).exactOptional(),
    ReplicationUser: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'replicationUser' },
          description: 'Describes whether the user is intended for data replication',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUserResponse')

const BrokerSummarySchema = z
  .object({
    BrokerArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerArn' },
          description: "The broker's Amazon Resource Name (ARN).",
        }),
    ).exactOptional(),
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
    BrokerName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerName' },
          description:
            "The broker's name. This value is unique in your Amazon Web Services account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.",
        }),
    ).exactOptional(),
    BrokerState: BrokerStateSchema.and(
      z.any().openapi({ xml: { name: 'brokerState' }, description: "The broker's status." }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'The time when the broker was created.',
        }),
    ).exactOptional(),
    DeploymentMode: DeploymentModeSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'deploymentMode' }, description: "The broker's deployment mode." }),
    ),
    EngineType: EngineTypeSchema.and(
      z.any().openapi({ xml: { name: 'engineType' }, description: 'The type of broker engine.' }),
    ),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'hostInstanceType' }, description: "The broker's instance type." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeploymentMode', 'EngineType'],
    description: 'Returns information about all brokers.',
  })
  .openapi('BrokerSummary')

const ListOfBrokerSummarySchema = z.array(BrokerSummarySchema).openapi('ListOfBrokerSummary')

const ListBrokersResponseSchema = z
  .object({
    BrokerSummaries: ListOfBrokerSummarySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerSummaries' },
          description: 'A list of information about all brokers.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBrokersResponse')

const ListOfConfigurationRevisionSchema = z
  .array(ConfigurationRevisionSchema)
  .openapi('ListOfConfigurationRevision')

const ListConfigurationRevisionsResponseSchema = z
  .object({
    ConfigurationId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurationId' },
          description: 'The unique ID that Amazon MQ generates for the configuration.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxResults' },
          description:
            'The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
    Revisions: ListOfConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'revisions' },
          description: 'The list of all revisions for the specified configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationRevisionsResponse')

const ConfigurationSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'arn' }, description: 'Required. The ARN of the configuration.' }),
    ),
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy associated with the configuration. The default is SIMPLE.',
        }),
    ),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration revision.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Required. The description of the configuration.',
        }),
    ),
    EngineType: EngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineType' },
          description:
            'Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'Required. The broker engine\'s version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'Required. The unique ID that Amazon MQ generates for the configuration.',
        }),
    ),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: 'Required. The latest revision of the configuration.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The list of all tags associated with this configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Description',
      'EngineVersion',
      'LatestRevision',
      'AuthenticationStrategy',
      'EngineType',
      'Id',
      'Arn',
      'Name',
      'Created',
    ],
    description: 'Returns information about all configurations.',
  })
  .openapi('Configuration')

const ListOfConfigurationSchema = z.array(ConfigurationSchema).openapi('ListOfConfiguration')

const ListConfigurationsResponseSchema = z
  .object({
    Configurations: ListOfConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configurations' },
          description: 'The list of all revisions for the specified configuration.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxResults' },
          description:
            'The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationsResponse')

const ListTagsResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The key-value pair for the resource tag.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsResponse')

const ListUsersResponseSchema = z
  .object({
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'Required. The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
    MaxResults: IntegerMin5Max100Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxResults' },
          description:
            'Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
        }),
    ).exactOptional(),
    Users: ListOfUserSummarySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'users' },
          description:
            'Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersResponse')

const PromoteResponseSchema = z
  .object({
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromoteResponse')

const RebootBrokerResponseSchema = z.object({}).openapi('RebootBrokerResponse')

const LogsSchema = z
  .object({
    Audit: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'audit' },
          description:
            'Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    General: BooleanSchema.and(
      z.any().openapi({ xml: { name: 'general' }, description: 'Enables general logging.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The list of information about logs to be enabled for the specified broker.',
    required: [],
  })
  .openapi('Logs')

const UpdateBrokerResponseSchema = z
  .object({
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoMinorVersionUpgrade' },
          description:
            'The new boolean value that specifies whether broker engines automatically upgrade to new minor versions as new versions are released and supported by Amazon MQ.',
        }),
    ).exactOptional(),
    BrokerId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerId' },
          description: 'Required. The unique ID that Amazon MQ generates for the broker.',
        }),
    ).exactOptional(),
    Configuration: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configuration' },
          description: 'The ID of the updated configuration.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ).exactOptional(),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hostInstanceType' },
          description:
            'The broker\'s host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.',
        }),
    ).exactOptional(),
    LdapServerMetadata: LdapServerMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ldapServerMetadata' },
          description:
            'Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    Logs: LogsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'logs' },
          description: 'The list of information about logs to be enabled for the specified broker.',
        }),
    ).exactOptional(),
    MaintenanceWindowStartTime: WeeklyStartTimeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceWindowStartTime' },
          description: 'The parameters that determine the WeeklyStartTime.',
        }),
    ).exactOptional(),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            'The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.',
        }),
    ).exactOptional(),
    DataReplicationMetadata: DataReplicationMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMetadata' },
          description:
            'The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.',
        }),
    ).exactOptional(),
    DataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMode' },
          description: 'Describes whether this broker is a part of a data replication pair.',
        }),
    ).exactOptional(),
    PendingDataReplicationMetadata: DataReplicationMetadataOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingDataReplicationMetadata' },
          description:
            'The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.',
        }),
    ).exactOptional(),
    PendingDataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pendingDataReplicationMode' },
          description:
            'Describes whether this broker will be a part of a data replication pair after reboot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBrokerResponse')

const SanitizationWarningReasonSchema = z
  .enum([
    'DISALLOWED_ELEMENT_REMOVED',
    'DISALLOWED_ATTRIBUTE_REMOVED',
    'INVALID_ATTRIBUTE_VALUE_REMOVED',
  ])
  .openapi({
    description: 'The reason for which the configuration elements or attributes were sanitized.',
  })
  .openapi('SanitizationWarningReason')

const SanitizationWarningSchema = z
  .object({
    AttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributeName' },
          description: 'The name of the configuration attribute that has been sanitized.',
        }),
    ).exactOptional(),
    ElementName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'elementName' },
          description: 'The name of the configuration element that has been sanitized.',
        }),
    ).exactOptional(),
    Reason: SanitizationWarningReasonSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reason' },
          description:
            'The reason for which the configuration elements or attributes were sanitized.',
        }),
    ),
  })
  .openapi({
    required: ['Reason'],
    description:
      'Returns information about the configuration element or attribute that was sanitized in the configuration.',
  })
  .openapi('SanitizationWarning')

const ListOfSanitizationWarningSchema = z
  .array(SanitizationWarningSchema)
  .openapi('ListOfSanitizationWarning')

const UpdateConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) of the configuration.',
        }),
    ).exactOptional(),
    Created: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'created' },
          description: 'Required. The date and time of the configuration.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'The unique ID that Amazon MQ generates for the configuration.',
        }),
    ).exactOptional(),
    LatestRevision: ConfigurationRevisionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'latestRevision' },
          description: 'The latest revision of the configuration.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
        }),
    ).exactOptional(),
    Warnings: ListOfSanitizationWarningSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The list of the first 20 warnings about the configuration elements or attributes that were sanitized.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConfigurationResponse')

const UpdateUserResponseSchema = z.object({}).openapi('UpdateUserResponse')

const LdapServerMetadataInputSchema = z
  .object({
    Hosts: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hosts' },
          description:
            'Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.',
        }),
    ),
    RoleBase: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleBase' },
          description:
            'The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,\n                  dc=example, dc=com.',
        }),
    ),
    RoleName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleName' },
          description:
            'Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.',
        }),
    ).exactOptional(),
    RoleSearchMatching: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleSearchMatching' },
          description:
            "The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.",
        }),
    ),
    RoleSearchSubtree: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleSearchSubtree' },
          description:
            'The directory search scope for the role. If set to true, scope is to search the entire subtree.',
        }),
    ).exactOptional(),
    ServiceAccountPassword: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serviceAccountPassword' },
          description:
            'Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
        }),
    ),
    ServiceAccountUsername: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serviceAccountUsername' },
          description:
            'Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
        }),
    ),
    UserBase: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userBase' },
          description:
            'Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,\n                  dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.',
        }),
    ),
    UserRoleName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userRoleName' },
          description: 'Specifies the name of the LDAP attribute for the user group membership.',
        }),
    ).exactOptional(),
    UserSearchMatching: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userSearchMatching' },
          description:
            "The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,\n                  dc=com.",
        }),
    ),
    UserSearchSubtree: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'userSearchSubtree' },
          description:
            'The directory search scope for the user. If set to true, scope is to search the entire subtree.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Hosts',
      'UserSearchMatching',
      'UserBase',
      'RoleSearchMatching',
      'ServiceAccountUsername',
      'RoleBase',
      'ServiceAccountPassword',
    ],
    description:
      '<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>',
  })
  .openapi('LdapServerMetadataInput')

const ListOfUserSchema = z.array(UserSchema).openapi('ListOfUser')

const CreateBrokerRequestSchema = z
  .object({
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoMinorVersionUpgrade' },
          description:
            'Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.',
        }),
    ),
    BrokerName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'brokerName' },
          description:
            "<p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>",
        }),
    ),
    Configuration: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configuration' },
          description: 'A list of information about the configuration.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'creatorRequestId' },
          description:
            "<p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note>",
        }),
    ).exactOptional(),
    DeploymentMode: DeploymentModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentMode' },
          description: "Required. The broker's deployment mode.",
        }),
    ),
    EncryptionOptions: EncryptionOptionsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionOptions' },
          description: 'Encryption options for the broker.',
        }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineType' },
          description:
            'Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'Required. The broker engine\'s version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hostInstanceType' },
          description: "Required. The broker's instance type.",
        }),
    ),
    LdapServerMetadata: LdapServerMetadataInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ldapServerMetadata' },
          description:
            'Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    Logs: LogsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'logs' },
          description: 'Enables Amazon CloudWatch logging for brokers.',
        }),
    ).exactOptional(),
    MaintenanceWindowStartTime: WeeklyStartTimeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceWindowStartTime' },
          description: 'The parameters that determine the WeeklyStartTime.',
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'publiclyAccessible' },
          description:
            "Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.",
        }),
    ),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            'The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.',
        }),
    ).exactOptional(),
    StorageType: BrokerStorageTypeSchema.and(
      z.any().openapi({ xml: { name: 'storageType' }, description: "The broker's storage type." }),
    ).exactOptional(),
    SubnetIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description:
            '<p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important>',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'tags' }, description: 'Create tags when creating the broker.' }),
    ).exactOptional(),
    Users: ListOfUserSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'users' },
          description:
            'The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.',
        }),
    ),
    DataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMode' },
          description: 'Defines whether this broker is a part of a data replication pair.',
        }),
    ).exactOptional(),
    DataReplicationPrimaryBrokerArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationPrimaryBrokerArn' },
          description:
            'The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'EngineVersion',
      'HostInstanceType',
      'AutoMinorVersionUpgrade',
      'Users',
      'BrokerName',
      'DeploymentMode',
      'EngineType',
      'PubliclyAccessible',
    ],
    title: 'CreateBrokerRequest',
    description: 'Creates a broker using the specified properties.',
  })
  .openapi('CreateBrokerRequest')

const CreateConfigurationRequestSchema = z
  .object({
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy associated with the configuration. The default is SIMPLE.',
        }),
    ).exactOptional(),
    EngineType: EngineTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineType' },
          description:
            'Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'Required. The broker engine\'s version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'Create tags when creating the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EngineVersion', 'EngineType', 'Name'],
    title: 'CreateConfigurationRequest',
    description:
      'Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).',
  })
  .openapi('CreateConfigurationRequest')

const CreateTagsRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The key-value pair for the resource tag.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateTagsRequest',
    description: 'A map of the key-value pairs for the resource tag.',
    required: [],
  })
  .openapi('CreateTagsRequest')

const CreateUserRequestSchema = z
  .object({
    ConsoleAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'consoleAccess' },
          description: 'Enables access to the ActiveMQ Web Console for the ActiveMQ user.',
        }),
    ).exactOptional(),
    Groups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'groups' },
          description:
            'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'password' },
          description:
            'Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).',
        }),
    ),
    ReplicationUser: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'replicationUser' },
          description: 'Defines if this user is intended for CRDR replication purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Password'],
    title: 'CreateUserRequest',
    description: 'Creates a new ActiveMQ user.',
  })
  .openapi('CreateUserRequest')

const DeleteBrokerRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBrokerRequest' })
  .openapi('DeleteBrokerRequest')

const DeleteTagsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteTagsRequest' })
  .openapi('DeleteTagsRequest')

const DeleteUserRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const DescribeBrokerEngineTypesRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBrokerEngineTypesRequest' })
  .openapi('DescribeBrokerEngineTypesRequest')

const DescribeBrokerInstanceOptionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBrokerInstanceOptionsRequest' })
  .openapi('DescribeBrokerInstanceOptionsRequest')

const DescribeBrokerRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBrokerRequest' })
  .openapi('DescribeBrokerRequest')

const DescribeConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeConfigurationRequest' })
  .openapi('DescribeConfigurationRequest')

const DescribeConfigurationRevisionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeConfigurationRevisionRequest' })
  .openapi('DescribeConfigurationRevisionRequest')

const DescribeUserRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeUserRequest' })
  .openapi('DescribeUserRequest')

const ListBrokersRequestSchema = z
  .object({})
  .openapi({ title: 'ListBrokersRequest' })
  .openapi('ListBrokersRequest')

const ListConfigurationRevisionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationRevisionsRequest' })
  .openapi('ListConfigurationRevisionsRequest')

const ListConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationsRequest' })
  .openapi('ListConfigurationsRequest')

const ListTagsRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const ListUsersRequestSchema = z
  .object({})
  .openapi({ title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const PromoteModeSchema = z
  .enum(['SWITCHOVER', 'FAILOVER'])
  .openapi({ description: 'The Promote mode requested.' })
  .openapi('PromoteMode')

const PromoteRequestSchema = z
  .object({
    Mode: PromoteModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mode' },
          description:
            'The Promote mode requested. Note: Valid values for the parameter are SWITCHOVER, FAILOVER.',
        }),
    ),
  })
  .openapi({
    required: ['Mode'],
    title: 'PromoteRequest',
    description: 'Promotes a data replication replica broker to the primary broker role.',
  })
  .openapi('PromoteRequest')

const RebootBrokerRequestSchema = z
  .object({})
  .openapi({ title: 'RebootBrokerRequest' })
  .openapi('RebootBrokerRequest')

const UpdateBrokerRequestSchema = z
  .object({
    AuthenticationStrategy: AuthenticationStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authenticationStrategy' },
          description:
            'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoMinorVersionUpgrade' },
          description:
            'Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.',
        }),
    ).exactOptional(),
    Configuration: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'configuration' },
          description: 'A list of information about the configuration.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'engineVersion' },
          description:
            'The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
        }),
    ).exactOptional(),
    HostInstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hostInstanceType' },
          description:
            'The broker\'s host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.',
        }),
    ).exactOptional(),
    LdapServerMetadata: LdapServerMetadataInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ldapServerMetadata' },
          description:
            'Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.',
        }),
    ).exactOptional(),
    Logs: LogsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'logs' },
          description: 'Enables Amazon CloudWatch logging for brokers.',
        }),
    ).exactOptional(),
    MaintenanceWindowStartTime: WeeklyStartTimeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceWindowStartTime' },
          description: 'The parameters that determine the WeeklyStartTime.',
        }),
    ).exactOptional(),
    SecurityGroups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroups' },
          description:
            'The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.',
        }),
    ).exactOptional(),
    DataReplicationMode: DataReplicationModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataReplicationMode' },
          description: 'Defines whether this broker is a part of a data replication pair.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBrokerRequest',
    description: 'Updates the broker using the specified properties.',
    required: [],
  })
  .openapi('UpdateBrokerRequest')

const UpdateConfigurationRequestSchema = z
  .object({
    Data: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'data' },
          description:
            'Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description of the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Data'],
    title: 'UpdateConfigurationRequest',
    description: 'Updates the specified configuration.',
  })
  .openapi('UpdateConfigurationRequest')

const UpdateUserRequestSchema = z
  .object({
    ConsoleAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'consoleAccess' },
          description: 'Enables access to the the ActiveMQ Web Console for the ActiveMQ user.',
        }),
    ).exactOptional(),
    Groups: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'groups' },
          description:
            'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'password' },
          description:
            'The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).',
        }),
    ).exactOptional(),
    ReplicationUser: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'replicationUser' },
          description: 'Defines whether the user is intended for data replication.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateUserRequest',
    description: 'Updates the information for an ActiveMQ user.',
    required: [],
  })
  .openapi('UpdateUserRequest')

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

export const getV1BrokersRoute = createRoute({
  method: 'get',
  path: '/v1/brokers',
  description: 'Returns a list of all brokers.',
  operationId: 'ListBrokers',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBrokersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1BrokersRoute = createRoute({
  method: 'post',
  path: '/v1/brokers',
  description:
    '<p>Creates a broker. Note: This API is asynchronous.</p> <p>To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.</p> <ul><li><p>ec2:CreateNetworkInterface</p> <p>This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.</p></li> <li><p>ec2:CreateNetworkInterfacePermission</p> <p>This permission is required to attach the ENI to the broker instance.</p></li> <li><p>ec2:DeleteNetworkInterface</p></li> <li><p>ec2:DeleteNetworkInterfacePermission</p></li> <li><p>ec2:DetachNetworkInterface</p></li> <li><p>ec2:DescribeInternetGateways</p></li> <li><p>ec2:DescribeNetworkInterfaces</p></li> <li><p>ec2:DescribeNetworkInterfacePermissions</p></li> <li><p>ec2:DescribeRouteTables</p></li> <li><p>ec2:DescribeSecurityGroups</p></li> <li><p>ec2:DescribeSubnets</p></li> <li><p>ec2:DescribeVpcs</p></li></ul> <p>For more information, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-setting-up.html#create-iam-user">Create an IAM User and Get Your Amazon Web Services Credentials</a> and <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/connecting-to-amazon-mq.html#never-modify-delete-elastic-network-interface">Never Modify or Delete the Amazon MQ Elastic Network Interface</a> in the <i>Amazon MQ Developer Guide</i>.</p>',
  operationId: 'CreateBroker',
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
              authenticationStrategy: z
                .enum(['SIMPLE', 'LDAP'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
                }),
              autoMinorVersionUpgrade: z
                .boolean()
                .openapi({
                  description:
                    'Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.',
                }),
              brokerName: z
                .string()
                .openapi({
                  description:
                    "<p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>",
                }),
              configuration: z
                .object({
                  Id: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'id' },
                        description:
                          'Required. The unique ID that Amazon MQ generates for the configuration.',
                      }),
                  ).exactOptional(),
                  Revision: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'revision' },
                        description: 'The revision number of the configuration.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A list of information about the configuration.',
                  required: [],
                }),
              creatorRequestId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note>",
                }),
              deploymentMode: z
                .enum(['SINGLE_INSTANCE', 'ACTIVE_STANDBY_MULTI_AZ', 'CLUSTER_MULTI_AZ'])
                .openapi({ description: "The broker's deployment mode." }),
              encryptionOptions: z
                .object({
                  KmsKeyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'kmsKeyId' },
                        description:
                          'The customer master key (CMK) to use for the A KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.',
                      }),
                  ).exactOptional(),
                  UseAwsOwnedKey: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'useAwsOwnedKey' },
                        description:
                          'Enables the use of an Amazon Web Services owned CMK using KMS (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Encryption options for the broker.', required: [] }),
              engineType: z
                .enum(['ACTIVEMQ', 'RABBITMQ'])
                .openapi({
                  description:
                    'The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.',
                }),
              engineVersion: z
                .string()
                .openapi({
                  description:
                    'Required. The broker engine\'s version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
                }),
              hostInstanceType: z
                .string()
                .openapi({ description: "Required. The broker's instance type." }),
              ldapServerMetadata: z
                .object({
                  Hosts: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'hosts' },
                        description:
                          'Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.',
                      }),
                  ).exactOptional(),
                  RoleBase: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleBase' },
                        description:
                          'The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,\n                  dc=example, dc=com.',
                      }),
                  ).exactOptional(),
                  RoleName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleName' },
                        description:
                          'Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.',
                      }),
                  ).exactOptional(),
                  RoleSearchMatching: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleSearchMatching' },
                        description:
                          "The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.",
                      }),
                  ).exactOptional(),
                  RoleSearchSubtree: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleSearchSubtree' },
                        description:
                          'The directory search scope for the role. If set to true, scope is to search the entire subtree.',
                      }),
                  ).exactOptional(),
                  ServiceAccountPassword: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serviceAccountPassword' },
                        description:
                          'Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
                      }),
                  ).exactOptional(),
                  ServiceAccountUsername: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serviceAccountUsername' },
                        description:
                          'Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
                      }),
                  ).exactOptional(),
                  UserBase: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userBase' },
                        description:
                          'Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,\n                  dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.',
                      }),
                  ).exactOptional(),
                  UserRoleName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userRoleName' },
                        description:
                          'Specifies the name of the LDAP attribute for the user group membership.',
                      }),
                  ).exactOptional(),
                  UserSearchMatching: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userSearchMatching' },
                        description:
                          "The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,\n                  dc=com.",
                      }),
                  ).exactOptional(),
                  UserSearchSubtree: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userSearchSubtree' },
                        description:
                          'The directory search scope for the user. If set to true, scope is to search the entire subtree.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>',
                  required: [],
                }),
              logs: z
                .object({
                  Audit: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'audit' },
                        description:
                          'Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.',
                      }),
                  ).exactOptional(),
                  General: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'general' },
                        description: 'Enables general logging.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The list of information about logs to be enabled for the specified broker.',
                  required: [],
                }),
              maintenanceWindowStartTime: z
                .object({
                  DayOfWeek: DayOfWeekSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'dayOfWeek' },
                        description: 'Required. The day of the week.',
                      }),
                  ).exactOptional(),
                  TimeOfDay: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'timeOfDay' },
                        description: 'Required. The time, in 24-hour format.',
                      }),
                  ).exactOptional(),
                  TimeZone: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'timeZone' },
                        description:
                          'The time zone, UTC by default, in either the Country/City format, or the UTC offset format.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.',
                  required: [],
                }),
              publiclyAccessible: z
                .boolean()
                .openapi({
                  description:
                    "Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.",
                }),
              securityGroups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.',
                }),
              storageType: z
                .enum(['EBS', 'EFS'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important>",
                }),
              subnetIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important>',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Create tags when creating the broker.' }),
              users: z
                .array(UserSchema)
                .openapi({
                  description:
                    'The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.',
                }),
              dataReplicationMode: z
                .enum(['NONE', 'CRDR'])
                .exactOptional()
                .openapi({
                  description: 'Specifies whether a broker is a part of a data replication pair.',
                }),
              dataReplicationPrimaryBrokerArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.',
                }),
            })
            .openapi({
              required: [
                'autoMinorVersionUpgrade',
                'brokerName',
                'deploymentMode',
                'engineType',
                'engineVersion',
                'hostInstanceType',
                'publiclyAccessible',
                'users',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBrokerResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/configurations',
  description: 'Returns a list of all configurations.',
  operationId: 'ListConfigurations',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1ConfigurationsRoute = createRoute({
  method: 'post',
  path: '/v1/configurations',
  description:
    'Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).',
  operationId: 'CreateConfiguration',
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
              authenticationStrategy: z
                .enum(['SIMPLE', 'LDAP'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
                }),
              engineType: z
                .enum(['ACTIVEMQ', 'RABBITMQ'])
                .openapi({
                  description:
                    'The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.',
                }),
              engineVersion: z
                .string()
                .openapi({
                  description:
                    'Required. The broker engine\'s version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Create tags when creating the configuration.' }),
            })
            .openapi({ required: ['engineType', 'engineVersion', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{resource-arn}',
  description: 'Lists tags for a resource.',
  operationId: 'ListTags',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource tag.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v1/tags/{resource-arn}',
  description: 'Add a tag to a resource.',
  operationId: 'CreateTags',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource tag.',
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
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1BrokersBrokerIdUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/v1/brokers/{broker-id}/users/{username}',
  description: 'Returns information about an ActiveMQ user.',
  operationId: 'DescribeUser',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            description:
              'The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const putV1BrokersBrokerIdUsersUsernameRoute = createRoute({
  method: 'put',
  path: '/v1/brokers/{broker-id}/users/{username}',
  description: 'Updates the information for an ActiveMQ user.',
  operationId: 'UpdateUser',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            description:
              'The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              consoleAccess: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables access to the the ActiveMQ Web Console for the ActiveMQ user.',
                }),
              groups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).',
                }),
              replicationUser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines whether the user is intended for data replication.',
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
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1BrokersBrokerIdUsersUsernameRoute = createRoute({
  method: 'post',
  path: '/v1/brokers/{broker-id}/users/{username}',
  description:
    '<p>Creates an ActiveMQ user.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>',
  operationId: 'CreateUser',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            description:
              'The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              consoleAccess: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enables access to the ActiveMQ Web Console for the ActiveMQ user.',
                }),
              groups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
                }),
              password: z
                .string()
                .openapi({
                  description:
                    'Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).',
                }),
              replicationUser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if this user is intended for CRDR replication purposes.',
                }),
            })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1BrokersBrokerIdUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/v1/brokers/{broker-id}/users/{username}',
  description: 'Deletes an ActiveMQ user.',
  operationId: 'DeleteUser',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            required: true,
            description:
              'The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1BrokersBrokerIdRoute = createRoute({
  method: 'get',
  path: '/v1/brokers/{broker-id}',
  description: 'Returns information about the specified broker.',
  operationId: 'DescribeBroker',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBrokerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const putV1BrokersBrokerIdRoute = createRoute({
  method: 'put',
  path: '/v1/brokers/{broker-id}',
  description: 'Adds a pending configuration change to a broker.',
  operationId: 'UpdateBroker',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authenticationStrategy: z
                .enum(['SIMPLE', 'LDAP'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The authentication strategy used to secure the broker. The default is SIMPLE.',
                }),
              autoMinorVersionUpgrade: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.',
                }),
              configuration: z
                .object({
                  Id: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'id' },
                        description:
                          'Required. The unique ID that Amazon MQ generates for the configuration.',
                      }),
                  ).exactOptional(),
                  Revision: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'revision' },
                        description: 'The revision number of the configuration.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A list of information about the configuration.',
                  required: [],
                }),
              engineVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.',
                }),
              hostInstanceType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The broker\'s host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.',
                }),
              ldapServerMetadata: z
                .object({
                  Hosts: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'hosts' },
                        description:
                          'Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.',
                      }),
                  ).exactOptional(),
                  RoleBase: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleBase' },
                        description:
                          'The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,\n                  dc=example, dc=com.',
                      }),
                  ).exactOptional(),
                  RoleName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleName' },
                        description:
                          'Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.',
                      }),
                  ).exactOptional(),
                  RoleSearchMatching: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleSearchMatching' },
                        description:
                          "The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.",
                      }),
                  ).exactOptional(),
                  RoleSearchSubtree: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleSearchSubtree' },
                        description:
                          'The directory search scope for the role. If set to true, scope is to search the entire subtree.',
                      }),
                  ).exactOptional(),
                  ServiceAccountPassword: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serviceAccountPassword' },
                        description:
                          'Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
                      }),
                  ).exactOptional(),
                  ServiceAccountUsername: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serviceAccountUsername' },
                        description:
                          'Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,\n                  dc=com.',
                      }),
                  ).exactOptional(),
                  UserBase: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userBase' },
                        description:
                          'Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,\n                  dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.',
                      }),
                  ).exactOptional(),
                  UserRoleName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userRoleName' },
                        description:
                          'Specifies the name of the LDAP attribute for the user group membership.',
                      }),
                  ).exactOptional(),
                  UserSearchMatching: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userSearchMatching' },
                        description:
                          "The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,\n                  dc=com.",
                      }),
                  ).exactOptional(),
                  UserSearchSubtree: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'userSearchSubtree' },
                        description:
                          'The directory search scope for the user. If set to true, scope is to search the entire subtree.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>',
                  required: [],
                }),
              logs: z
                .object({
                  Audit: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'audit' },
                        description:
                          'Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.',
                      }),
                  ).exactOptional(),
                  General: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'general' },
                        description: 'Enables general logging.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The list of information about logs to be enabled for the specified broker.',
                  required: [],
                }),
              maintenanceWindowStartTime: z
                .object({
                  DayOfWeek: DayOfWeekSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'dayOfWeek' },
                        description: 'Required. The day of the week.',
                      }),
                  ).exactOptional(),
                  TimeOfDay: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'timeOfDay' },
                        description: 'Required. The time, in 24-hour format.',
                      }),
                  ).exactOptional(),
                  TimeZone: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'timeZone' },
                        description:
                          'The time zone, UTC by default, in either the Country/City format, or the UTC offset format.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.',
                  required: [],
                }),
              securityGroups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.',
                }),
              dataReplicationMode: z
                .enum(['NONE', 'CRDR'])
                .exactOptional()
                .openapi({
                  description: 'Specifies whether a broker is a part of a data replication pair.',
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
      content: { 'application/json': { schema: UpdateBrokerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1BrokersBrokerIdRoute = createRoute({
  method: 'delete',
  path: '/v1/brokers/{broker-id}',
  description: 'Deletes a broker. Note: This API is asynchronous.',
  operationId: 'DeleteBroker',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBrokerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteV1TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{resource-arn}#tagKeys',
  description: 'Removes a tag from a resource.',
  operationId: 'DeleteTags',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource tag.',
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
            description: 'An array of tag keys to delete',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1BrokerEngineTypesRoute = createRoute({
  method: 'get',
  path: '/v1/broker-engine-types',
  description: 'Describe available engine types and versions.',
  operationId: 'DescribeBrokerEngineTypes',
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
      engineType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'engineType',
            in: 'query',
            required: false,
            description: 'Filter response by engine type.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBrokerEngineTypesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1BrokerInstanceOptionsRoute = createRoute({
  method: 'get',
  path: '/v1/broker-instance-options',
  description: 'Describe available broker instance options.',
  operationId: 'DescribeBrokerInstanceOptions',
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
      engineType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'engineType',
            in: 'query',
            required: false,
            description: 'Filter response by engine type.',
            schema: { type: 'string' },
          },
        }),
      hostInstanceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'hostInstanceType',
            in: 'query',
            required: false,
            description: 'Filter response by host instance type.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
      storageType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'storageType',
            in: 'query',
            required: false,
            description: 'Filter response by storage type.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBrokerInstanceOptionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsConfigurationIdRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{configuration-id}',
  description: 'Returns information about the specified configuration.',
  operationId: 'DescribeConfiguration',
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
      'configuration-id': z
        .string()
        .openapi({
          param: {
            name: 'configuration-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const putV1ConfigurationsConfigurationIdRoute = createRoute({
  method: 'put',
  path: '/v1/configurations/{configuration-id}',
  description: 'Updates the specified configuration.',
  operationId: 'UpdateConfiguration',
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
      'configuration-id': z
        .string()
        .openapi({
          param: {
            name: 'configuration-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .string()
                .openapi({
                  description:
                    'Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the configuration.' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConfigurationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{configuration-id}/revisions/{configuration-revision}',
  description: 'Returns the specified configuration revision for the specified configuration.',
  operationId: 'DescribeConfigurationRevision',
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
      'configuration-id': z
        .string()
        .openapi({
          param: {
            name: 'configuration-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the configuration.',
            schema: { type: 'string' },
          },
        }),
      'configuration-revision': z
        .string()
        .openapi({
          param: {
            name: 'configuration-revision',
            in: 'path',
            required: true,
            description: 'The revision of the configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationRevisionResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1ConfigurationsConfigurationIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/v1/configurations/{configuration-id}/revisions',
  description: 'Returns a list of all revisions for the specified configuration.',
  operationId: 'ListConfigurationRevisions',
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
      'configuration-id': z
        .string()
        .openapi({
          param: {
            name: 'configuration-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the configuration.',
            schema: { type: 'string' },
          },
        }),
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationRevisionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getV1BrokersBrokerIdUsersRoute = createRoute({
  method: 'get',
  path: '/v1/brokers/{broker-id}/users',
  description: 'Returns a list of all ActiveMQ users.',
  operationId: 'ListUsers',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
            description:
              'The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1BrokersBrokerIdPromoteRoute = createRoute({
  method: 'post',
  path: '/v1/brokers/{broker-id}/promote',
  description: 'Promotes a data replication replica broker to the primary broker role.',
  operationId: 'Promote',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mode: z
                .enum(['SWITCHOVER', 'FAILOVER'])
                .openapi({ description: 'The Promote mode requested.' }),
            })
            .openapi({ required: ['mode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PromoteResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postV1BrokersBrokerIdRebootRoute = createRoute({
  method: 'post',
  path: '/v1/brokers/{broker-id}/reboot',
  description: 'Reboots a broker. Note: This API is asynchronous.',
  operationId: 'RebootBroker',
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
      'broker-id': z
        .string()
        .openapi({
          param: {
            name: 'broker-id',
            in: 'path',
            required: true,
            description: 'The unique ID that Amazon MQ generates for the broker.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootBrokerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})
