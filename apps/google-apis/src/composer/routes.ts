import { createRoute, z } from '@hono/zod-openapi'

const DatabaseConfigSchema = z
  .object({
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
  })
  .openapi({
    description:
      'The configuration of Cloud SQL instance that is used by the Apache Airflow software.',
    required: [],
  })
  .openapi('DatabaseConfig')

const EncryptionConfigSchema = z
  .object({
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.",
      }),
  })
  .openapi({
    description:
      'The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
    required: [],
  })
  .openapi('EncryptionConfig')

const MaintenanceWindowSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end_time must be in the future, relative to `start_time`.',
      }),
    recurrence: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Start time of the first recurrence of the maintenance window.',
      }),
  })
  .openapi({
    description:
      'The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.',
    required: [],
  })
  .openapi('MaintenanceWindow')

const CidrBlockSchema = z
  .object({
    cidrBlock: z
      .string()
      .exactOptional()
      .openapi({ description: 'CIDR block that must be specified in CIDR notation.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-defined name that identifies the CIDR block.' }),
  })
  .openapi({ description: 'CIDR block with an optional name.', required: [] })
  .openapi('CidrBlock')

const MasterAuthorizedNetworksConfigSchema = z
  .object({
    cidrBlocks: z
      .array(CidrBlockSchema)
      .exactOptional()
      .openapi({
        description:
          'Up to 50 external networks that could access Kubernetes master through HTTPS.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not master authorized networks feature is enabled.' }),
  })
  .openapi({
    description:
      'Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.',
    required: [],
  })
  .openapi('MasterAuthorizedNetworksConfig')

const IPAllocationPolicySchema = z
  .object({
    clusterIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The IP address range used to allocate IP addresses to pods in the cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both.',
      }),
    clusterSecondaryRangeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the cluster's secondary range used to allocate IP addresses to pods. Specify either `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.",
      }),
    servicesIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The IP address range of the services IP addresses in this cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `services_secondary_range_name` or `services_ipv4_cidr_block` but not both.',
      }),
    servicesSecondaryRangeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the services' secondary range used to allocate IP addresses to the cluster. Specify either `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.",
      }),
    useIpAliases: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.',
      }),
  })
  .openapi({
    description: 'Configuration for controlling how IPs are allocated in the GKE cluster.',
    required: [],
  })
  .openapi('IPAllocationPolicy')

const NodeConfigSchema = z
  .object({
    diskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    enableIpMasqAgent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent",
      }),
    ipAllocationPolicy: IPAllocationPolicySchema.exactOptional().openapi({
      description: 'Optional. The IPAllocationPolicy fields for the GKE cluster.',
    }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}". This `location` must belong to the enclosing environment\'s project and location. If both this field and `nodeConfig.machineType` are specified, `nodeConfig.machineType` must belong to this `location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (`location` or `nodeConfig.machineType`) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}". The `machineType` must belong to the enclosing environment\'s project and location. If both this field and `nodeConfig.location` are specified, this `machineType` must belong to the `nodeConfig.location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and `nodeConfig.location` is specified, the location information from the specified field will be propagated to the unspecified field. The `machineTypeId` must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the `machineTypeId` defaults to "n1-standard-1". This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    maxPodsPerNode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of pods per node in the Cloud Composer GKE cluster. The value must be between 8 and 110 and it can be set only if the environment is VPC-native. The default value is 32. Values of this field will be propagated both to the `default-pool` node pool of the newly created GKE cluster, and to the default "Maximum Pods per Node" value which is used for newly created node pools if their value is not explicitly set during node pool creation. For more information, see [Optimizing IP address allocation] (https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr). Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/global/networks/{networkId}". If unspecified, the default network in the environment\'s project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, `nodeConfig.subnetwork` must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see `nodeConfig.subnetwork`.',
      }),
    oauthScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The set of Google API scopes to be made available on all node VMs. If `oauth_scopes` is empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Google Cloud Platform Service Account to be used by the workloads. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, `nodeConfig.network` must also be provided, and the subnetwork must belong to the enclosing environment\'s project and location.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated.',
      }),
  })
  .openapi({
    description:
      'The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.',
    required: [],
  })
  .openapi('NodeConfig')

const NetworkingConfigSchema = z
  .object({
    connectionType: z
      .enum(['CONNECTION_TYPE_UNSPECIFIED', 'VPC_PEERING', 'PRIVATE_SERVICE_CONNECT'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.',
      }),
  })
  .openapi({
    description: 'Configuration options for networking connections in the Composer 2 environment.',
    required: [],
  })
  .openapi('NetworkingConfig')

const PrivateClusterConfigSchema = z
  .object({
    enablePrivateEndpoint: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If `true`, access to the public endpoint of the GKE cluster is denied.',
      }),
    masterIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.",
      }),
    masterIpv4ReservedRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Configuration options for the private GKE cluster in a Cloud Composer environment.',
    required: [],
  })
  .openapi('PrivateClusterConfig')

const PrivateEnvironmentConfigSchema = z
  .object({
    cloudComposerConnectionSubnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.',
      }),
    cloudComposerNetworkIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
      }),
    cloudComposerNetworkIpv4ReservedRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
        readOnly: true,
      }),
    cloudSqlIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block',
      }),
    enablePrivateEnvironment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    enablePrivatelyUsedPublicIps: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.',
      }),
    networkingConfig: NetworkingConfigSchema.exactOptional().openapi({
      description:
        'Optional. Configuration for the network connections configuration in the environment.',
    }),
    privateClusterConfig: PrivateClusterConfigSchema.exactOptional().openapi({
      description:
        'Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.',
    }),
    webServerIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      }),
    webServerIpv4ReservedRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'The configuration information for configuring a Private IP Cloud Composer environment.',
    required: [],
  })
  .openapi('PrivateEnvironmentConfig')

const ScheduledSnapshotsConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Whether scheduled snapshots creation is enabled.' }),
    snapshotCreationSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.',
      }),
    snapshotLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Cloud Storage location for storing automatically created snapshots.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Time zone that sets the context to interpret snapshot_creation_schedule.',
      }),
  })
  .openapi({
    description: 'The configuration for scheduled snapshot creation mechanism.',
    required: [],
  })
  .openapi('ScheduledSnapshotsConfig')

const RecoveryConfigSchema = z
  .object({
    scheduledSnapshotsConfig: ScheduledSnapshotsConfigSchema.exactOptional().openapi({
      description: 'Optional. The configuration for scheduled snapshot creation mechanism.',
    }),
  })
  .openapi({ description: 'The Recovery settings of an environment.', required: [] })
  .openapi('RecoveryConfig')

const CloudDataLineageIntegrationSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Whether or not Cloud Data Lineage integration is enabled.',
      }),
  })
  .openapi({ description: 'Configuration for Cloud Data Lineage integration.', required: [] })
  .openapi('CloudDataLineageIntegration')

const SoftwareConfigSchema = z
  .object({
    airflowConfigOverrides: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden.',
      }),
    cloudDataLineageIntegration: CloudDataLineageIntegrationSchema.exactOptional().openapi({
      description: 'Optional. The configuration for Cloud Data Lineage integration.',
    }),
    envVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression `a-zA-Z_*`. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the following reserved names: * `AIRFLOW_HOME` * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER`',
      }),
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\\.[0-9]+\\.[0-9]+(-preview\\.[0-9]+)?)?|latest)-airflow-([0-9]+(\\.[0-9]+(\\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).',
      }),
    pypiPackages: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value.',
      }),
    pythonVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.",
      }),
    schedulerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.',
      }),
  })
  .openapi({
    description: 'Specifies the selection and configuration of software inside the environment.',
    required: [],
  })
  .openapi('SoftwareConfig')

const WebServerConfigSchema = z
  .object({
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.',
      }),
  })
  .openapi({
    description:
      'The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
    required: [],
  })
  .openapi('WebServerConfig')

const AllowedIpRangeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. User-provided description. It must contain at most 300 characters.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32` or `2001:0db8:0000:0042:0000:8a2e:0370:7334`. IP range prefixes should be properly truncated. For example, `1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6, `2001:db8::1/32` should be truncated to `2001:db8::/32`.',
      }),
  })
  .openapi({ description: 'Allowed IP range with user-provided description.', required: [] })
  .openapi('AllowedIpRange')

const WebServerNetworkAccessControlSchema = z
  .object({
    allowedIpRanges: z
      .array(AllowedIpRangeSchema)
      .exactOptional()
      .openapi({ description: 'A collection of allowed IP ranges with descriptions.' }),
  })
  .openapi({
    description: 'Network-level access control policy for the Airflow web server.',
    required: [],
  })
  .openapi('WebServerNetworkAccessControl')

const SchedulerResourceSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. The number of schedulers.' }),
    cpu: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Optional. CPU request and limit for a single Airflow scheduler replica.',
      }),
    memoryGb: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Memory (GB) request and limit for a single Airflow scheduler replica.',
      }),
    storageGb: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Storage (GB) request and limit for a single Airflow scheduler replica.',
      }),
  })
  .openapi({ description: 'Configuration for resources used by Airflow schedulers.', required: [] })
  .openapi('SchedulerResource')

const TriggererResourceSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. The number of triggerers.' }),
    cpu: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Optional. CPU request and limit for a single Airflow triggerer replica.',
      }),
    memoryGb: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Memory (GB) request and limit for a single Airflow triggerer replica.',
      }),
  })
  .openapi({ description: 'Configuration for resources used by Airflow triggerers.', required: [] })
  .openapi('TriggererResource')

const WebServerResourceSchema = z
  .object({
    cpu: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. CPU request and limit for Airflow web server.' }),
    memoryGb: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. Memory (GB) request and limit for Airflow web server.' }),
    storageGb: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. Storage (GB) request and limit for Airflow web server.' }),
  })
  .openapi({ description: 'Configuration for resources used by Airflow web server.', required: [] })
  .openapi('WebServerResource')

const WorkerResourceSchema = z
  .object({
    cpu: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Optional. CPU request and limit for a single Airflow worker replica.',
      }),
    maxCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Maximum number of workers for autoscaling.' }),
    memoryGb: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Optional. Memory (GB) request and limit for a single Airflow worker replica.',
      }),
    minCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Minimum number of workers for autoscaling.' }),
    storageGb: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Storage (GB) request and limit for a single Airflow worker replica.',
      }),
  })
  .openapi({ description: 'Configuration for resources used by Airflow workers.', required: [] })
  .openapi('WorkerResource')

const WorkloadsConfigSchema = z
  .object({
    scheduler: SchedulerResourceSchema.exactOptional().openapi({
      description: 'Optional. Resources used by Airflow schedulers.',
    }),
    triggerer: TriggererResourceSchema.exactOptional().openapi({
      description: 'Optional. Resources used by Airflow triggerers.',
    }),
    webServer: WebServerResourceSchema.exactOptional().openapi({
      description: 'Optional. Resources used by Airflow web server.',
    }),
    worker: WorkerResourceSchema.exactOptional().openapi({
      description: 'Optional. Resources used by Airflow workers.',
    }),
  })
  .openapi({
    description:
      'The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
    required: [],
  })
  .openapi('WorkloadsConfig')

type EnvironmentConfigType = {
  airflowByoidUri?: string
  airflowUri?: string
  dagGcsPrefix?: string
  databaseConfig?: z.infer<typeof DatabaseConfigSchema>
  encryptionConfig?: z.infer<typeof EncryptionConfigSchema>
  environmentSize?:
    | 'ENVIRONMENT_SIZE_UNSPECIFIED'
    | 'ENVIRONMENT_SIZE_SMALL'
    | 'ENVIRONMENT_SIZE_MEDIUM'
    | 'ENVIRONMENT_SIZE_LARGE'
  gkeCluster?: string
  maintenanceWindow?: z.infer<typeof MaintenanceWindowSchema>
  masterAuthorizedNetworksConfig?: z.infer<typeof MasterAuthorizedNetworksConfigSchema>
  nodeConfig?: z.infer<typeof NodeConfigSchema>
  nodeCount?: number
  privateEnvironmentConfig?: z.infer<typeof PrivateEnvironmentConfigSchema>
  recoveryConfig?: z.infer<typeof RecoveryConfigSchema>
  softwareConfig?: z.infer<typeof SoftwareConfigSchema>
  webServerConfig?: z.infer<typeof WebServerConfigSchema>
  webServerNetworkAccessControl?: z.infer<typeof WebServerNetworkAccessControlSchema>
  workloadsConfig?: z.infer<typeof WorkloadsConfigSchema>
}

const CheckUpgradeRequestSchema = z
  .object({
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\\.[0-9]+\\.[0-9]+(-preview\\.[0-9]+)?)?|latest)-airflow-([0-9]+(\\.[0-9]+(\\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).',
      }),
  })
  .openapi({ description: 'Request to check whether image upgrade will succeed.', required: [] })
  .openapi('CheckUpgradeRequest')

const CheckUpgradeResponseSchema = z
  .object({
    buildLogUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Url for a docker build log of an upgraded image.',
        readOnly: true,
      }),
    containsPypiModulesConflict: z
      .enum(['CONFLICT_RESULT_UNSPECIFIED', 'CONFLICT', 'NO_CONFLICT'])
      .exactOptional()
      .openapi({
        description: 'Output only. Whether build has succeeded or failed on modules conflicts.',
        readOnly: true,
      }),
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Composer image for which the build was happening.' }),
    pypiConflictBuildLogExtract: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Extract from a docker image build log containing information about pypi modules conflicts.',
        readOnly: true,
      }),
    pypiDependencies: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Pypi dependencies specified in the environment configuration, at the time when the build was triggered.',
      }),
  })
  .openapi({
    description: 'Message containing information about the result of an upgrade check operation.',
    required: [],
  })
  .openapi('CheckUpgradeResponse')

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

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EnvironmentConfigSchema: z.ZodType<EnvironmentConfigType> = z
  .lazy(() =>
    z
      .object({
        airflowByoidUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)).",
            readOnly: true,
          }),
        airflowUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)).',
            readOnly: true,
          }),
        dagGcsPrefix: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.',
            readOnly: true,
          }),
        databaseConfig: DatabaseConfigSchema.exactOptional().openapi({
          description:
            'Optional. The configuration settings for Cloud SQL instance used internally by Apache Airflow software.',
        }),
        encryptionConfig: EncryptionConfigSchema.exactOptional().openapi({
          description:
            'Optional. The encryption options for the Cloud Composer environment and its dependencies. Cannot be updated.',
        }),
        environmentSize: z
          .enum([
            'ENVIRONMENT_SIZE_UNSPECIFIED',
            'ENVIRONMENT_SIZE_SMALL',
            'ENVIRONMENT_SIZE_MEDIUM',
            'ENVIRONMENT_SIZE_LARGE',
          ])
          .exactOptional()
          .openapi({
            description:
              'Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
          }),
        gkeCluster: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The Kubernetes Engine cluster used to run this environment.',
            readOnly: true,
          }),
        maintenanceWindow: MaintenanceWindowSchema.exactOptional().openapi({
          description:
            'Optional. The maintenance window is the period when Cloud Composer components may undergo maintenance. It is defined so that maintenance is not executed during peak hours or critical time periods. The system will not be under maintenance for every occurrence of this window, but when maintenance is planned, it will be scheduled during the window. The maintenance window period must encompass at least 12 hours per week. This may be split into multiple chunks, each with a size of at least 4 hours. If this value is omitted, Cloud Composer components may be subject to maintenance at any time.',
        }),
        masterAuthorizedNetworksConfig:
          MasterAuthorizedNetworksConfigSchema.exactOptional().openapi({
            description:
              'Optional. The configuration options for GKE cluster master authorized networks. By default master authorized networks feature is: - in case of private environment: enabled with no external networks allowlisted. - in case of public environment: disabled.',
          }),
        nodeConfig: NodeConfigSchema.exactOptional().openapi({
          description: 'The configuration used for the Kubernetes Engine cluster.',
        }),
        nodeCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
          }),
        privateEnvironmentConfig: PrivateEnvironmentConfigSchema.exactOptional().openapi({
          description: 'The configuration used for the Private IP Cloud Composer environment.',
        }),
        recoveryConfig: RecoveryConfigSchema.exactOptional().openapi({
          description:
            'Optional. The Recovery settings configuration of an environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
        }),
        softwareConfig: SoftwareConfigSchema.exactOptional().openapi({
          description: 'The configuration settings for software inside the environment.',
        }),
        webServerConfig: WebServerConfigSchema.exactOptional().openapi({
          description:
            'Optional. The configuration settings for the Airflow web server App Engine instance. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
        }),
        webServerNetworkAccessControl: WebServerNetworkAccessControlSchema.exactOptional().openapi({
          description:
            'Optional. The network-level access control policy for the Airflow web server. If unspecified, no network-level access restrictions will be applied.',
        }),
        workloadsConfig: WorkloadsConfigSchema.exactOptional().openapi({
          description:
            'Optional. The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. The GKE cluster runs Airflow scheduler, web server and workers workloads. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
        }),
      })
      .openapi({ description: 'Configuration information for an environment.', required: [] }),
  )
  .openapi('EnvironmentConfig')

const EnvironmentSchema = z
  .object({
    config: EnvironmentConfigSchema.exactOptional().openapi({
      description: 'Configuration parameters for this environment.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this environment was created.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \\p{Ll}\\p{Lo}{0,62} * Values must conform to regexp: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'RUNNING', 'UPDATING', 'DELETING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The current state of the environment.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this environment was last modified.',
        readOnly: true,
      }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An environment for running orchestration tasks.', required: [] })
  .openapi('Environment')

const ExecuteAirflowCommandResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message. Empty if there was no error.' }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the command execution for polling.' }),
    pod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the pod where the command is executed.' }),
    podNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the pod where the command is executed.' }),
  })
  .openapi({ description: 'Response to ExecuteAirflowCommandRequest.', required: [] })
  .openapi('ExecuteAirflowCommandResponse')

const ExitInfoSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message. Empty if there was no error.' }),
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The exit code from the command execution.' }),
  })
  .openapi({ description: 'Information about how a command ended.', required: [] })
  .openapi('ExitInfo')

const ImageVersionSchema = z
  .object({
    creationDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether it is impossible to create an environment with the image version.',
      }),
    imageVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c"',
      }),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified.',
      }),
    releaseDate: DateSchema.exactOptional().openapi({
      description: 'The date of the version release.',
    }),
    supportedPythonVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'supported python versions' }),
    upgradeDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether it is impossible to upgrade an environment running with the image version.',
      }),
  })
  .openapi({ description: 'Image Version information', required: [] })
  .openapi('ImageVersion')

const LineSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Text content of the log line.' }),
    lineNumber: z.int32().exactOptional().openapi({ description: 'Number of the line.' }),
  })
  .openapi({ description: 'Contains information about a single line from logs.', required: [] })
  .openapi('Line')

const ListEnvironmentsResponseSchema = z
  .object({
    environments: z
      .array(EnvironmentSchema)
      .exactOptional()
      .openapi({ description: 'The list of environments returned by a ListEnvironmentsRequest.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The page token used to query for the next page if one exists.' }),
  })
  .openapi({ description: 'The environments in a project and location.', required: [] })
  .openapi('ListEnvironmentsResponse')

const ListImageVersionsResponseSchema = z
  .object({
    imageVersions: z
      .array(ImageVersionSchema)
      .exactOptional()
      .openapi({ description: 'The list of supported ImageVersions in a location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The page token used to query for the next page if one exists.' }),
  })
  .openapi({ description: 'The ImageVersions in a project and location.', required: [] })
  .openapi('ListImageVersionsResponse')

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

const LoadSnapshotRequestSchema = z
  .object({
    skipAirflowOverridesSetting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to skip setting Airflow overrides when loading the environment's state.",
      }),
    skipEnvironmentVariablesSetting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to skip setting environment variables when loading the environment's state.",
      }),
    skipGcsDataCopying: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to skip copying Cloud Storage data when loading the environment's state.",
      }),
    skipPypiPackagesInstallation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to skip installing Pypi packages when loading the environment's state.",
      }),
    snapshotPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".',
      }),
  })
  .openapi({
    description: 'Request to load a snapshot into a Cloud Composer environment.',
    required: [],
  })
  .openapi('LoadSnapshotRequest')

const LoadSnapshotResponseSchema = z
  .object({})
  .openapi({ description: 'Response to LoadSnapshotRequest.' })
  .openapi('LoadSnapshotResponse')

const OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was submitted to the server.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing.',
      }),
    operationType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'CREATE',
        'DELETE',
        'UPDATE',
        'CHECK',
        'SAVE_SNAPSHOT',
        'LOAD_SNAPSHOT',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The type of operation being performed.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name).',
      }),
    resourceUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The UUID of the resource being operated on.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'RUNNING', 'SUCCESSFUL', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current operation state.' }),
  })
  .openapi({ description: 'Metadata describing an operation.', required: [] })
  .openapi('OperationMetadata')

const PollAirflowCommandResponseSchema = z
  .object({
    exitInfo: ExitInfoSchema.exactOptional().openapi({
      description: 'The result exit status of the command.',
    }),
    output: z
      .array(LineSchema)
      .exactOptional()
      .openapi({
        description:
          'Output from the command execution. It may not contain the full output and the caller may need to poll for more lines.',
      }),
    outputEnd: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the command execution has finished and there is no more output.',
      }),
  })
  .openapi({ description: 'Response to PollAirflowCommandRequest.', required: [] })
  .openapi('PollAirflowCommandResponse')

const RestartWebServerRequestSchema = z
  .object({})
  .openapi({ description: 'Restart Airflow web server.' })
  .openapi('RestartWebServerRequest')

const SaveSnapshotRequestSchema = z
  .object({
    snapshotLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots".',
      }),
  })
  .openapi({
    description: 'Request to create a snapshot of a Cloud Composer environment.',
    required: [],
  })
  .openapi('SaveSnapshotRequest')

const SaveSnapshotResponseSchema = z
  .object({
    snapshotPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-resolved Cloud Storage path of the created snapshot, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". This field is populated only if the snapshot creation was successful.',
      }),
  })
  .openapi({ description: 'Response to SaveSnapshotRequest.', required: [] })
  .openapi('SaveSnapshotResponse')

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

export const postV1beta1EnvironmentCheckUpgradeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{environment}:checkUpgrade',
  tags: ['projects'],
  description:
    'Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.',
  operationId: 'composer.projects.locations.environments.checkUpgrade',
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
      environment: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"',
            in: 'path',
            name: 'environment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckUpgradeRequestSchema } } },
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

export const postV1beta1EnvironmentLoadSnapshotRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{environment}:loadSnapshot',
  tags: ['projects'],
  description:
    "Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.",
  operationId: 'composer.projects.locations.environments.loadSnapshot',
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
      environment: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"',
            in: 'path',
            name: 'environment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoadSnapshotRequestSchema } } },
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

export const postV1beta1EnvironmentSaveSnapshotRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{environment}:saveSnapshot',
  tags: ['projects'],
  description:
    "Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.",
  operationId: 'composer.projects.locations.environments.saveSnapshot',
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
      environment: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"',
            in: 'path',
            name: 'environment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SaveSnapshotRequestSchema } } },
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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'composer.projects.locations.operations.get',
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'composer.projects.locations.operations.delete',
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

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Update an environment.',
  operationId: 'composer.projects.locations.environments.patch',
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
              'Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request\'s `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field\'s path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment\'s current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version\'s Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.',
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
              'The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvironmentSchema } } },
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

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'composer.projects.locations.operations.list',
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

export const postV1beta1NameRestartWebServerRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:restartWebServer',
  tags: ['projects'],
  description: 'Restart Airflow web server.',
  operationId: 'composer.projects.locations.environments.restartWebServer',
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
              'The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestartWebServerRequestSchema } } },
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

export const getV1beta1ParentEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/environments',
  tags: ['projects'],
  description: 'List environments.',
  operationId: 'composer.projects.locations.environments.list',
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
            description: 'The maximum number of environments to return.',
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
              'List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"',
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
      content: { 'application/json': { schema: ListEnvironmentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/environments',
  tags: ['projects'],
  description: 'Create a new environment.',
  operationId: 'composer.projects.locations.environments.create',
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
              'The parent must be of the form "projects/{projectId}/locations/{locationId}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvironmentSchema } } },
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

export const getV1beta1ParentImageVersionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/imageVersions',
  tags: ['projects'],
  description: 'List ImageVersions for provided location.',
  operationId: 'composer.projects.locations.imageVersions.list',
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
      includePastReleases: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not image versions from old releases should be included.',
            in: 'query',
            name: 'includePastReleases',
            schema: { type: 'boolean' },
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
            description: 'The maximum number of image_versions to return.',
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
              'List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"',
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
      content: { 'application/json': { schema: ListImageVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
