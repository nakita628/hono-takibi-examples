import { createRoute, z } from '@hono/zod-openapi'

const ApplyParametersRequestSchema = z
  .object({
    applyAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance.',
      }),
    nodeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Nodes to which the instance-level parameter group is applied.' }),
  })
  .openapi({ description: 'Request for ApplyParameters.', required: [] })
  .openapi('ApplyParametersRequest')

const ApplySoftwareUpdateRequestSchema = z
  .object({
    applyAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance.',
      }),
    nodeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel.',
      }),
  })
  .openapi({ description: 'Request for ApplySoftwareUpdate.', required: [] })
  .openapi('ApplySoftwareUpdateRequest')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

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

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleCloudMemcacheV1beta2ZoneMetadataSchema = z
  .object({})
  .openapi('GoogleCloudMemcacheV1beta2ZoneMetadata')

const GoogleCloudMemcacheV1beta2LocationMetadataSchema = z
  .object({
    availableZones: z
      .record(z.string(), GoogleCloudMemcacheV1beta2ZoneMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata for the given google.cloud.location.Location.', required: [] })
  .openapi('GoogleCloudMemcacheV1beta2LocationMetadata')

const WeeklyMaintenanceWindowSchema = z
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
      .openapi({
        description: 'Required. Allows to define schedule that runs specified day of the week.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Duration of the time window.' }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'Required. Start time of the window in UTC.',
    }),
  })
  .openapi({ description: 'Time window specified for weekly operations.', required: [] })
  .openapi('WeeklyMaintenanceWindow')

const GoogleCloudMemcacheV1beta2MaintenancePolicySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the policy was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the policy was updated.',
        readOnly: true,
      }),
    weeklyMaintenanceWindow: z
      .array(WeeklyMaintenanceWindowSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one.',
      }),
  })
  .openapi({ description: 'Maintenance policy per instance.', required: [] })
  .openapi('GoogleCloudMemcacheV1beta2MaintenancePolicy')

const GoogleCloudMemcacheV1beta2OperationMetadataSchema = z
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
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the operation was created.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the operation finished running.',
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
  .openapi({ description: 'Represents the metadata of a long-running operation.', required: [] })
  .openapi('GoogleCloudMemcacheV1beta2OperationMetadata')

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

const InstanceMessageSchema = z
  .object({
    code: z
      .enum(['CODE_UNSPECIFIED', 'ZONE_DISTRIBUTION_UNBALANCED'])
      .exactOptional()
      .openapi({ description: 'A code that correspond to one type of user-facing message.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message on memcached instance which will be exposed to users.' }),
  })
  .openapi({ required: [] })
  .openapi('InstanceMessage')

const MaintenanceScheduleSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The end time of any upcoming scheduled maintenance for this instance.',
        readOnly: true,
      }),
    scheduleDeadlineTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The start time of any upcoming scheduled maintenance for this instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Upcoming maintenance schedule.', required: [] })
  .openapi('MaintenanceSchedule')

const MemcacheParametersSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes.',
        readOnly: true,
      }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User defined set of parameters to use in the memcached process.' }),
  })
  .openapi({ required: [] })
  .openapi('MemcacheParameters')

const NodeSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.',
        readOnly: true,
      }),
    nodeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.',
        readOnly: true,
      }),
    parameters: MemcacheParametersSchema.exactOptional().openapi({
      description: 'User defined parameters currently applied to the node.',
    }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The port number of the Memcached server on this node.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'READY', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current state of the Memcached node.',
        readOnly: true,
      }),
    updateAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Returns true if there is an update waiting to be applied',
        readOnly: true,
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Location (GCP Zone) for the Memcached node.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Node')

const NodeConfigSchema = z
  .object({
    cpuCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Number of cpus per Memcached node.' }),
    memorySizeMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Memory size in MiB for each Memcached node.' }),
  })
  .openapi({ description: 'Configuration for a Memcached Node.', required: [] })
  .openapi('NodeConfig')

const InstanceSchema = z
  .object({
    authorizedNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was created.', readOnly: true }),
    discoveryEndpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Endpoint for the Discovery API.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.',
      }),
    instanceMessages: z
      .array(InstanceMessageSchema)
      .exactOptional()
      .openapi({
        description: 'List of messages that describe the current state of the Memcached instance.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources',
      }),
    maintenancePolicy: GoogleCloudMemcacheV1beta2MaintenancePolicySchema.exactOptional().openapi({
      description:
        'The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.',
    }),
    maintenanceSchedule: MaintenanceScheduleSchema.exactOptional().openapi({
      description: 'Output only. Published maintenance schedule.',
      readOnly: true,
    }),
    memcacheFullVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".',
        readOnly: true,
      }),
    memcacheNodes: z
      .array(NodeSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. List of Memcached nodes. Refer to Node message for more details.',
        readOnly: true,
      }),
    memcacheVersion: z
      .enum(['MEMCACHE_VERSION_UNSPECIFIED', 'MEMCACHE_1_5'])
      .exactOptional()
      .openapi({
        description:
          'The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.',
      }),
    nodeConfig: NodeConfigSchema.exactOptional().openapi({
      description: 'Required. Configuration for Memcached nodes.',
    }),
    nodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Number of nodes in the Memcached instance.' }),
    parameters: MemcacheParametersSchema.exactOptional().openapi({
      description: 'User defined parameters to apply to the memcached process on each node.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'READY',
        'UPDATING',
        'DELETING',
        'PERFORMING_MAINTENANCE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of this Memcached instance.',
        readOnly: true,
      }),
    updateAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Returns true if there is an update waiting to be applied',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the instance was updated.', readOnly: true }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.',
      }),
  })
  .openapi({ description: 'A Memorystore for Memcached instance', required: [] })
  .openapi('Instance')

const ListInstancesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    resources: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Memcached instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for ListInstances.', required: [] })
  .openapi('ListInstancesResponse')

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

const ZoneMetadataSchema = z.object({}).openapi('ZoneMetadata')

const LocationMetadataSchema = z
  .object({
    availableZones: z
      .record(z.string(), ZoneMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata for the given google.cloud.location.Location.', required: [] })
  .openapi('LocationMetadata')

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
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the operation was created.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the operation finished running.',
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
  .openapi({ description: 'Represents the metadata of a long-running operation.', required: [] })
  .openapi('OperationMetadata')

const RescheduleMaintenanceRequestSchema = z
  .object({
    rescheduleType: z
      .enum(['RESCHEDULE_TYPE_UNSPECIFIED', 'IMMEDIATE', 'NEXT_AVAILABLE_WINDOW', 'SPECIFIC_TIME'])
      .exactOptional()
      .openapi({
        description:
          'Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.',
      }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.',
      }),
  })
  .openapi({ description: 'Request for RescheduleMaintenance.', required: [] })
  .openapi('RescheduleMaintenanceRequest')

const UpdateParametersRequestSchema = z
  .object({
    parameters: MemcacheParametersSchema.exactOptional().openapi({
      description: 'The parameters to apply to the instance.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Mask of fields to update.' }),
  })
  .openapi({ description: 'Request for UpdateParameters.', required: [] })
  .openapi('UpdateParametersRequest')

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

export const postV1beta2InstanceApplySoftwareUpdateRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{instance}:applySoftwareUpdate',
  tags: ['projects'],
  description: 'Updates software on the selected nodes of the Instance.',
  operationId: 'memcache.projects.locations.instances.applySoftwareUpdate',
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
      instance: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the Memcached instance for which software update should be applied.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplySoftwareUpdateRequestSchema } } },
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

export const postV1beta2InstanceRescheduleMaintenanceRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{instance}:rescheduleMaintenance',
  tags: ['projects'],
  description: 'Performs the apply phase of the RescheduleMaintenance verb.',
  operationId: 'memcache.projects.locations.instances.rescheduleMaintenance',
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
      instance: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Memcache instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RescheduleMaintenanceRequestSchema } } },
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

export const getV1beta2NameRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'memcache.projects.locations.operations.get',
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
            description: 'The name of the operation resource.',
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

export const deleteV1beta2NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'memcache.projects.locations.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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

export const patchV1beta2NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description: 'Updates an existing Instance in a given project and location.',
  operationId: 'memcache.projects.locations.instances.patch',
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
            description: 'Required. Mask of fields to update. * `displayName`',
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
              'Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSchema } } },
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

export const getV1beta2NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'memcache.projects.locations.list',
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

export const getV1beta2NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'memcache.projects.locations.operations.list',
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

export const postV1beta2NameApplyParametersRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{name}:applyParameters',
  tags: ['projects'],
  description:
    '`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.',
  operationId: 'memcache.projects.locations.instances.applyParameters',
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
              'Required. Resource name of the Memcached instance for which parameter group updates should be applied.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplyParametersRequestSchema } } },
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

export const postV1beta2NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'memcache.projects.locations.operations.cancel',
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

export const patchV1beta2NameUpdateParametersRoute = createRoute({
  method: 'patch',
  path: '/v1beta2/{name}:updateParameters',
  tags: ['projects'],
  description:
    'Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.',
  operationId: 'memcache.projects.locations.instances.updateParameters',
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
              'Required. Resource name of the Memcached instance for which the parameters should be updated.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateParametersRequestSchema } } },
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

export const getV1beta2ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{parent}/instances',
  tags: ['projects'],
  description: 'Lists Instances in a given location.',
  operationId: 'memcache.projects.locations.instances.list',
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
              'List filter. For example, exclude all Memcached instances with name as my-instance by specifying `"name != my-instance"`.',
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
            description: 'Sort results. Supported values are "name", "name desc" or "" (unsorted).',
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
              "The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the `page_size` value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.",
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
              'The `next_page_token` value returned from a previous List request, if any.',
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
              'Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region',
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
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta2ParentInstancesRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{parent}/instances',
  tags: ['projects'],
  description: 'Creates a new Instance in a given location.',
  operationId: 'memcache.projects.locations.instances.create',
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
      instanceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The logical name of the Memcached instance in the user project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the user project / location. If any of the above are not met, the API raises an invalid argument error.',
            in: 'query',
            name: 'instanceId',
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
              'Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSchema } } },
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
