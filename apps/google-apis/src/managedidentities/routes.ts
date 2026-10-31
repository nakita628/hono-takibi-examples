import { createRoute, z } from '@hono/zod-openapi'

type CertificateType = {
  expireTime?: string
  issuingCertificate?: CertificateType
  subject?: string
  subjectAlternativeName?: string[]
  thumbprint?: string
}

const TrustSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was created.' }),
    lastKnownTrustConnectedHeartbeatTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The last heartbeat time when the trust was known to be connected.',
      }),
    selectiveAuthentication: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'UPDATING', 'DELETING', 'CONNECTED', 'DISCONNECTED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of this trust.' }),
    stateDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current state of this trust, if available.',
      }),
    targetDnsIpAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The target dns server ip addresses which can resolve the remote domain involved in trust.',
      }),
    targetDomainName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified target domain name which will be in trust with current domain.',
      }),
    trustDirection: z
      .enum(['TRUST_DIRECTION_UNSPECIFIED', 'INBOUND', 'OUTBOUND', 'BIDIRECTIONAL'])
      .exactOptional()
      .openapi({
        description: 'The trust direction decides the current domain is trusted, trusting or both.',
      }),
    trustHandshakeSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only, and will not be stored. The trust secret used for handshake with target domain.',
      }),
    trustType: z
      .enum(['TRUST_TYPE_UNSPECIFIED', 'FOREST', 'EXTERNAL'])
      .exactOptional()
      .openapi({ description: 'The type of trust represented by the trust resource.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time.' }),
  })
  .openapi({
    description:
      'Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.',
    required: [],
  })
  .openapi('Trust')

const AttachTrustRequestSchema = z
  .object({
    trust: TrustSchema.exactOptional().openapi({ description: 'The domain trust resource.' }),
  })
  .openapi({ required: [] })
  .openapi('AttachTrustRequest')

const BackupSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the backups was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A short description of the backup.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Resource labels to represent user provided metadata.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name}',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'FAILED', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the backup.', readOnly: true }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current status of this backup, if available.',
        readOnly: true,
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'ON_DEMAND', 'SCHEDULED', 'SCHEMA_EXTENSION'])
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether it’s an on-demand backup or scheduled.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time.', readOnly: true }),
  })
  .openapi({ description: 'Represents a Managed Microsoft Identities backup.', required: [] })
  .openapi('Backup')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CertificateSchema: z.ZodType<CertificateType> = z
  .lazy(() =>
    z
      .object({
        expireTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'The certificate expire time.' }),
        issuingCertificate: CertificateSchema.exactOptional().openapi({
          description: 'The issuer of this certificate.',
        }),
        subject: z.string().exactOptional().openapi({ description: 'The certificate subject.' }),
        subjectAlternativeName: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The additional hostnames for the domain.' }),
        thumbprint: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The certificate thumbprint which uniquely identifies the certificate.',
          }),
      })
      .openapi({ description: 'Certificate used to configure LDAPS.', required: [] }),
  )
  .openapi('Certificate')

const CheckMigrationPermissionRequestSchema = z
  .object({})
  .openapi({
    description:
      'CheckMigrationPermissionRequest is the request message for CheckMigrationPermission method.',
  })
  .openapi('CheckMigrationPermissionRequest')

const OnPremDomainSIDDetailsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'FQDN of the on-prem domain being migrated.' }),
    sidFilteringState: z
      .enum(['SID_FILTERING_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'Current SID filtering state.' }),
  })
  .openapi({
    description:
      'OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.',
    required: [],
  })
  .openapi('OnPremDomainSIDDetails')

const CheckMigrationPermissionResponseSchema = z
  .object({
    onpremDomains: z
      .array(OnPremDomainSIDDetailsSchema)
      .exactOptional()
      .openapi({
        description: 'The state of SID filtering of all the domains which has trust established.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'DISABLED', 'ENABLED', 'NEEDS_MAINTENANCE'])
      .exactOptional()
      .openapi({ description: 'The state of DomainMigration.' }),
  })
  .openapi({
    description:
      'CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.',
    required: [],
  })
  .openapi('CheckMigrationPermissionResponse')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const DailyCycleSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Duration of the time window, set by service producer.',
      }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'Time within the day to start the operations.',
    }),
  })
  .openapi({ description: 'Time window specified for daily operations.', required: [] })
  .openapi('DailyCycle')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const DenyMaintenancePeriodSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({
      description:
        'Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.',
    }),
    time: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC',
    }),
  })
  .openapi({
    description:
      'DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.',
    required: [],
  })
  .openapi('DenyMaintenancePeriod')

const DetachTrustRequestSchema = z
  .object({
    trust: TrustSchema.exactOptional().openapi({
      description: 'The domain trust resource to removed.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DetachTrustRequest')

const DisableMigrationRequestSchema = z
  .object({})
  .openapi({
    description: 'DisableMigrationRequest is the request message for DisableMigration method.',
  })
  .openapi('DisableMigrationRequest')

const DomainSchema = z
  .object({
    auditLogsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.',
      }),
    authorizedNetworks: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Network can be added using UpdateDomain later. Domain is only available on network part of authorized_networks. Caller needs to make sure that CIDR subnets do not overlap between networks, else domain creation will fail.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide',
      }),
    fqdn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Resource labels to represent user provided metadata' }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.',
      }),
    managedIdentitiesAdminName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified `setupadmin` would be used.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.',
      }),
    reservedIpRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'READY',
        'UPDATING',
        'DELETING',
        'REPAIRING',
        'PERFORMING_MAINTENANCE',
        'DOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of this domain.' }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current status of this domain, if available.',
      }),
    trusts: z
      .array(TrustSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The current trusts associated with the domain.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Last update time. Synthetic field is populated automatically by CCFE.',
      }),
  })
  .openapi({
    description:
      'If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.',
    required: [],
  })
  .openapi('Domain')

const DomainJoinMachineRequestSchema = z
  .object({
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. force if True, forces domain join even if the computer account already exists.',
      }),
    ouName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. OU name where the VM needs to be domain joined' }),
    vmIdToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature',
      }),
  })
  .openapi({
    description: 'DomainJoinMachineRequest is the request message for DomainJoinMachine method',
    required: [],
  })
  .openapi('DomainJoinMachineRequest')

const DomainJoinMachineResponseSchema = z
  .object({
    domainJoinBlob: z
      .string()
      .exactOptional()
      .openapi({ description: 'Offline domain join blob as the response' }),
  })
  .openapi({
    description: 'DomainJoinMachineResponse is the response message for DomainJoinMachine method',
    required: [],
  })
  .openapi('DomainJoinMachineResponse')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const OnPremDomainDetailsSchema = z
  .object({
    disableSidFiltering: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Option to disable SID filtering.' }),
    domainName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. FQDN of the on-prem domain being migrated.' }),
  })
  .openapi({
    description:
      'OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.',
    required: [],
  })
  .openapi('OnPremDomainDetails')

const EnableMigrationRequestSchema = z
  .object({
    migratingDomains: z
      .array(OnPremDomainDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of the on-prem domains to be migrated.' }),
  })
  .openapi({
    description: 'EnableMigrationRequest is the request message for EnableMigration method.',
    required: [],
  })
  .openapi('EnableMigrationRequest')

const ExtendSchemaRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Description for Schema Change.' }),
    fileContents: z
      .string()
      .exactOptional()
      .openapi({ description: 'File uploaded as a byte stream input.' }),
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain.',
      }),
  })
  .openapi({
    description: 'ExtendSchemaRequest is the request message for ExtendSchema method.',
    required: [],
  })
  .openapi('ExtendSchemaRequest')

const GoogleCloudManagedidentitiesV1OpMetadataSchema = z
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
  .openapi('GoogleCloudManagedidentitiesV1OpMetadata')

const GoogleCloudManagedidentitiesV1alpha1OpMetadataSchema = z
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
  .openapi('GoogleCloudManagedidentitiesV1alpha1OpMetadata')

const GoogleCloudManagedidentitiesV1beta1OpMetadataSchema = z
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
  .openapi('GoogleCloudManagedidentitiesV1beta1OpMetadata')

const GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleSchema = z
  .object({
    canReschedule: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scheduled end time for the maintenance.' }),
    rolloutManagementPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.',
      }),
    scheduleDeadlineTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.",
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scheduled start time for the maintenance.' }),
  })
  .openapi({
    description:
      'Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule')

const ScheduleSchema = z
  .object({
    day: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Allows to define schedule that runs specified day of the week.' }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Duration of the time window, set by service producer.',
      }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'Time within the window to start the operations.',
    }),
  })
  .openapi({ description: 'Configure the schedule.', required: [] })
  .openapi('Schedule')

const WeeklyCycleSchema = z
  .object({
    schedule: z
      .array(ScheduleSchema)
      .exactOptional()
      .openapi({
        description: 'User can specify multiple windows in a week. Minimum of 1 window.',
      }),
  })
  .openapi({ description: 'Time window specified for weekly operations.', required: [] })
  .openapi('WeeklyCycle')

const MaintenanceWindowSchema = z
  .object({
    dailyCycle: DailyCycleSchema.exactOptional().openapi({ description: 'Daily cycle.' }),
    weeklyCycle: WeeklyCycleSchema.exactOptional().openapi({ description: 'Weekly cycle.' }),
  })
  .openapi({ description: 'MaintenanceWindow definition.', required: [] })
  .openapi('MaintenanceWindow')

const UpdatePolicySchema = z
  .object({
    channel: z
      .enum(['UPDATE_CHANNEL_UNSPECIFIED', 'EARLIER', 'LATER', 'WEEK1', 'WEEK2', 'WEEK5'])
      .exactOptional()
      .openapi({ description: 'Optional. Relative scheduling channel applied to resource.' }),
    denyMaintenancePeriods: z
      .array(DenyMaintenancePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. Maximum number of deny_maintenance_periods expected is one.',
      }),
    window: MaintenanceWindowSchema.exactOptional().openapi({
      description:
        'Optional. Maintenance window that is applied to resources covered by this policy.',
    }),
  })
  .openapi({ description: 'Maintenance policy applicable to instance updates.', required: [] })
  .openapi('UpdatePolicy')

const MaintenancePolicySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the resource was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'READY', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Optional. The state of the policy.' }),
    updatePolicy: UpdatePolicySchema.exactOptional().openapi({
      description: 'Maintenance policy applicable to instance update.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the resource was updated.' }),
  })
  .openapi({
    description: 'LINT.IfChange Defines policies to service maintenance events.',
    required: [],
  })
  .openapi('MaintenancePolicy')

const GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsSchema = z
  .object({
    exclude: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.',
      }),
    isRollback: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If the update call is triggered from rollback, set the value as true.',
      }),
    maintenancePolicies: z
      .record(z.string(), MaintenancePolicySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.',
      }),
  })
  .openapi({
    description:
      'Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings')

const GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterSchema = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "Optional. Array of string values. e.g. instance's replica information.",
      }),
  })
  .openapi({ description: 'Contains notification related data.', required: [] })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter')

const GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceSchema = z
  .object({
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.",
      }),
    resourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".',
      }),
  })
  .openapi({ description: 'Describes provisioned dataplane resources.', required: [] })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource')

const GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilitySchema = z
  .object({
    eligible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether an instance is eligible or ineligible.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.',
      }),
  })
  .openapi({
    description:
      'SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility')

const GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilitySchema = z
  .object({
    eligibilities: z
      .record(z.string(), GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilitySchema)
      .exactOptional()
      .openapi({
        description:
          'An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.',
      }),
  })
  .openapi({
    description: 'PerSliSloEligibility is a mapping from an SLI name to eligibility.',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility')

const GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location of the node, if different from instance location.' }),
    nodeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the node. This should be equal to SaasInstanceNode.node_id.',
      }),
    perSliEligibility:
      GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilitySchema.exactOptional().openapi(
        {
          description:
            'If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.',
        },
      ),
  })
  .openapi({
    description:
      'Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata')

const GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataSchema = z
  .object({
    nodes: z
      .array(GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.',
      }),
    perSliEligibility:
      GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilitySchema.exactOptional().openapi(
        {
          description:
            'Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.',
        },
      ),
    tier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.',
      }),
  })
  .openapi({
    description:
      'SloMetadata contains resources required for proper SLO classification of the instance.',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata')

const GoogleCloudSaasacceleratorManagementProvidersV1InstanceSchema = z
  .object({
    consumerDefinedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when the resource was created.',
        readOnly: true,
      }),
    instanceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.",
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.',
      }),
    maintenancePolicyNames: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set.',
      }),
    maintenanceSchedules: z
      .record(z.string(), GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleSchema)
      .exactOptional()
      .openapi({
        description:
          'The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.',
      }),
    maintenanceSettings:
      GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsSchema.exactOptional().openapi(
        { description: 'Optional. The MaintenanceSettings associated with instance.' },
      ),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.',
      }),
    notificationParameters: z
      .record(
        z.string(),
        GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterSchema,
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.',
      }),
    producerMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.',
        readOnly: true,
      }),
    provisionedResources: z
      .array(GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.',
        readOnly: true,
      }),
    slmInstanceTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.",
      }),
    sloMetadata:
      GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataSchema.exactOptional().openapi({
        description:
          'Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.',
        readOnly: true,
      }),
    softwareVersions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Software versions that are used to deploy this instance. This can be mutated by rollout services.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'READY',
        'UPDATING',
        'REPAIRING',
        'DELETING',
        'ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          "Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).",
        readOnly: true,
      }),
    tenantProjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp when the resource was last modified.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange',
    required: [],
  })
  .openapi('GoogleCloudSaasacceleratorManagementProvidersV1Instance')

const LDAPSSettingsSchema = z
  .object({
    certificate: CertificateSchema.exactOptional().openapi({
      description:
        'Output only. The certificate used to configure LDAPS. Certificates can be chained with a maximum length of 15.',
      readOnly: true,
    }),
    certificatePassword: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Input only. The password used to encrypt the uploaded pfx certificate.',
      }),
    certificatePfx: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'UPDATING', 'ACTIVE', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of this LDAPS settings.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time.', readOnly: true }),
  })
  .openapi({
    description:
      'LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.',
    required: [],
  })
  .openapi('LDAPSSettings')

const ListBackupsResponseSchema = z
  .object({
    backups: z
      .array(BackupSchema)
      .exactOptional()
      .openapi({ description: 'A list of Cloud AD backups in the domain.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'ListBackupsResponse is the response message for ListBackups method.',
    required: [],
  })
  .openapi('ListBackupsResponse')

const ListDomainsResponseSchema = z
  .object({
    domains: z
      .array(DomainSchema)
      .exactOptional()
      .openapi({ description: 'A list of Managed Identities Service domains in the project.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

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

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const PeeringSchema = z
  .object({
    authorizedNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was created.', readOnly: true }),
    domainResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Resource labels to represent user provided metadata.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'CONNECTED', 'DISCONNECTED', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of this Peering.', readOnly: true }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current status of this peering, if available.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update time.', readOnly: true }),
  })
  .openapi({ description: 'Represents a Managed Microsoft Identities Peering.', required: [] })
  .openapi('Peering')

const ListPeeringsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    peerings: z
      .array(PeeringSchema)
      .exactOptional()
      .openapi({ description: 'A list of Managed Identities Service Peerings in the project.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'ListPeeringsResponse is the response message for ListPeerings method.',
    required: [],
  })
  .openapi('ListPeeringsResponse')

const SQLIntegrationSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was created.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}`',
      }),
    sqlInstance: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full resource name of an integrated sql instance' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'DELETING', 'READY'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the managed OU.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last update time for this SQL instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the SQL instance integrated with AD.', required: [] })
  .openapi('SQLIntegration')

const ListSQLIntegrationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    sqlIntegrations: z
      .array(SQLIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'A list of SQLIntegrations of a domain.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of locations that could not be reached.' }),
  })
  .openapi({
    description:
      'ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.',
    required: [],
  })
  .openapi('ListSQLIntegrationsResponse')

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

const PolicySchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const ReconfigureTrustRequestSchema = z
  .object({
    trust: TrustSchema.exactOptional().openapi({
      description: 'The domain trust resource with updated dns conditional forwarder.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ReconfigureTrustRequest')

const ResetAdminPasswordRequestSchema = z.object({}).openapi('ResetAdminPasswordRequest')

const ResetAdminPasswordResponseSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'A random password. See admin for more information.' }),
  })
  .openapi({ required: [] })
  .openapi('ResetAdminPasswordResponse')

const RestoreDomainRequestSchema = z
  .object({
    backupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. ID of the backup to be restored' }),
  })
  .openapi({
    description: 'RestoreDomainRequest is the request received by RestoreDomain rpc',
    required: [],
  })
  .openapi('RestoreDomainRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const ValidateTrustRequestSchema = z
  .object({
    trust: TrustSchema.exactOptional().openapi({
      description: 'The domain trust to validate trust state for.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ValidateTrustRequest')

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

export const postV1alpha1DomainCheckMigrationPermissionRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{domain}:checkMigrationPermission',
  tags: ['projects'],
  description: 'AuditMigration API gets the current state of DomainMigration',
  operationId: 'managedidentities.projects.locations.global.domains.checkMigrationPermission',
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
      domain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckMigrationPermissionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckMigrationPermissionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1DomainDisableMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{domain}:disableMigration',
  tags: ['projects'],
  description: 'Disable Domain Migration',
  operationId: 'managedidentities.projects.locations.global.domains.disableMigration',
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
      domain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisableMigrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1DomainDomainJoinMachineRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{domain}:domainJoinMachine',
  tags: ['projects'],
  description: 'DomainJoinMachine API joins a Compute Engine VM to the domain',
  operationId: 'managedidentities.projects.locations.global.domains.domainJoinMachine',
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
      domain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The domain resource name using the form: projects/{project_id}/locations/global/domains/{domain_name}',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainJoinMachineRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainJoinMachineResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1DomainEnableMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{domain}:enableMigration',
  tags: ['projects'],
  description: 'Enable Domain Migration',
  operationId: 'managedidentities.projects.locations.global.domains.enableMigration',
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
      domain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableMigrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1DomainExtendSchemaRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{domain}:extendSchema',
  tags: ['projects'],
  description: 'Extend Schema for Domain',
  operationId: 'managedidentities.projects.locations.global.domains.extendSchema',
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
      domain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExtendSchemaRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Gets details of a single Peering.',
  operationId: 'managedidentities.projects.locations.global.peerings.get',
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
              'Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`',
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
      content: { 'application/json': { schema: PeeringSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Deletes identified Peering.',
  operationId: 'managedidentities.projects.locations.global.peerings.delete',
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
              'Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1alpha1NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description: 'Updates the labels for specified Peering.',
  operationId: 'managedidentities.projects.locations.global.peerings.patch',
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
            description:
              'Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Peering: * `labels`',
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
              'Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PeeringSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameLdapssettingsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/ldapssettings',
  tags: ['projects'],
  description: 'Gets the domain ldaps settings.',
  operationId: 'managedidentities.projects.locations.global.domains.getLdapssettings',
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
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
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
      content: { 'application/json': { schema: LDAPSSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1alpha1NameLdapssettingsRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}/ldapssettings',
  tags: ['projects'],
  description: 'Patches a single ldaps settings.',
  operationId: 'managedidentities.projects.locations.global.domains.updateLdapssettings',
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
            description:
              'Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask',
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
              'The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LDAPSSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'managedidentities.projects.locations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'managedidentities.projects.locations.global.operations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameAttachTrustRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:attachTrust',
  tags: ['projects'],
  description: 'Adds AD trust in a given domain. Operation',
  operationId: 'managedidentities.projects.locations.global.domains.attachTrust',
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
              'The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttachTrustRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'managedidentities.projects.locations.global.operations.cancel',
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

export const postV1alpha1NameDetachTrustRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:detachTrust',
  tags: ['projects'],
  description: 'Removes identified trust. Operation',
  operationId: 'managedidentities.projects.locations.global.domains.detachTrust',
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
              'The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetachTrustRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameReconfigureTrustRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:reconfigureTrust',
  tags: ['projects'],
  description: 'Updates the dns conditional forwarder. Operation',
  operationId: 'managedidentities.projects.locations.global.domains.reconfigureTrust',
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
              'The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReconfigureTrustRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameResetAdminPasswordRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:resetAdminPassword',
  tags: ['projects'],
  description:
    'Resets managed identities admin password identified by managed_identities_admin_name',
  operationId: 'managedidentities.projects.locations.global.domains.resetAdminPassword',
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
              'The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetAdminPasswordRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResetAdminPasswordResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameRestoreRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:restore',
  tags: ['projects'],
  description: 'RestoreDomain restores domain backup mentioned in the RestoreDomainRequest',
  operationId: 'managedidentities.projects.locations.global.domains.restore',
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
            description: 'Required. resource name for the domain to which the backup belongs',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1NameValidateTrustRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:validateTrust',
  tags: ['projects'],
  description: 'Validate the trust state Operation',
  operationId: 'managedidentities.projects.locations.global.domains.validateTrust',
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
              'The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ValidateTrustRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentBackupsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/backups',
  tags: ['projects'],
  description: 'Lists Backup in a given project.',
  operationId: 'managedidentities.projects.locations.global.domains.backups.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter specifying constraints of a list operation.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              "Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
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
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
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
      content: { 'application/json': { schema: ListBackupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentBackupsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/backups',
  tags: ['projects'],
  description: 'Creates a Backup for a domain.',
  operationId: 'managedidentities.projects.locations.global.domains.backups.create',
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
      backupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain.',
            in: 'query',
            name: 'backupId',
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
              'Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BackupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentDomainsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/domains',
  tags: ['projects'],
  description: 'Lists Domains in a given project.',
  operationId: 'managedidentities.projects.locations.global.domains.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              "If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
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
              'Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`',
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
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentDomainsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/domains',
  tags: ['projects'],
  description: 'Creates a Microsoft AD Domain in a given project. Operation',
  operationId: 'managedidentities.projects.locations.global.domains.create',
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
      domainName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The fully qualified domain name. e.g. mydomain.myorganization.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * Must be unique within the project. * First segment length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric.",
            in: 'query',
            name: 'domainName',
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
              'Resource project name and location using the form: `projects/{project_id}/locations/global`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentPeeringsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/peerings',
  tags: ['projects'],
  description: 'Lists Peerings in a given project.',
  operationId: 'managedidentities.projects.locations.global.peerings.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter specifying constraints of a list operation. For example, `peering.authoized_network ="/projects/myprojectid"`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              "Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
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
              'Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`',
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
      content: { 'application/json': { schema: ListPeeringsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentPeeringsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/peerings',
  tags: ['projects'],
  description: 'Creates a Peering for Managed AD instance.',
  operationId: 'managedidentities.projects.locations.global.peerings.create',
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
      peeringId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Peering Id, unique name to identify peering.',
            in: 'query',
            name: 'peeringId',
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
              'Required. Resource project name and location using the form: `projects/{project_id}/locations/global`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PeeringSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentSqlIntegrationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/sqlIntegrations',
  tags: ['projects'],
  description: 'Lists SQLIntegrations in a given domain.',
  operationId: 'managedidentities.projects.locations.global.domains.sqlIntegrations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter specifying constraints of a list operation. For example, `SqlIntegration.name="sql"`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              "Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
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
              'Required. The resource name of the SqlIntegrations using the form: `projects/{project_id}/locations/global/domains/*`',
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
      content: { 'application/json': { schema: ListSQLIntegrationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'managedidentities.projects.locations.global.peerings.getIamPolicy',
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
      'options.requestedPolicyVersion': z
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
            description:
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'managedidentities.projects.locations.global.peerings.setIamPolicy',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'managedidentities.projects.locations.global.peerings.testIamPermissions',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
