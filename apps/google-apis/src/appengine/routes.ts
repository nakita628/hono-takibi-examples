import { createRoute, z } from '@hono/zod-openapi'

const ApiConfigHandlerSchema = z
  .object({
    authFailAction: z
      .enum([
        'AUTH_FAIL_ACTION_UNSPECIFIED',
        'AUTH_FAIL_ACTION_REDIRECT',
        'AUTH_FAIL_ACTION_UNAUTHORIZED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Action to take when users access resources that require authentication. Defaults to redirect.',
      }),
    login: z
      .enum(['LOGIN_UNSPECIFIED', 'LOGIN_OPTIONAL', 'LOGIN_ADMIN', 'LOGIN_REQUIRED'])
      .exactOptional()
      .openapi({
        description: 'Level of login required to access this resource. Defaults to optional.',
      }),
    script: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the script from the application root directory.' }),
    securityLevel: z
      .enum([
        'SECURE_UNSPECIFIED',
        'SECURE_DEFAULT',
        'SECURE_NEVER',
        'SECURE_OPTIONAL',
        'SECURE_ALWAYS',
      ])
      .exactOptional()
      .openapi({ description: 'Security (HTTPS) enforcement for this URL.' }),
    url: z.string().exactOptional().openapi({ description: 'URL to serve the endpoint at.' }),
  })
  .openapi({
    description:
      'Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.',
    required: [],
  })
  .openapi('ApiConfigHandler')

const ApiEndpointHandlerSchema = z
  .object({
    scriptPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the script from the application root directory.' }),
  })
  .openapi({ description: 'Uses Google Cloud Endpoints to handle requests.', required: [] })
  .openapi('ApiEndpointHandler')

const UrlDispatchRuleSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.',
      }),
  })
  .openapi({
    description: 'Rules to match an HTTP request and dispatch that request to a service.',
    required: [],
  })
  .openapi('UrlDispatchRule')

const FeatureSettingsSchema = z
  .object({
    splitHealthChecks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed.",
      }),
    useContainerOptimizedOs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, use Container-Optimized OS (https://cloud.google.com/container-optimized-os/) base image for VMs, rather than a base Debian image.',
      }),
  })
  .openapi({
    description:
      'The feature specific settings to be used in the application. These define behaviors that are user configurable.',
    required: [],
  })
  .openapi('FeatureSettings')

const IdentityAwareProxySchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.',
      }),
    oauth2ClientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth2 client ID to use for the authentication flow.' }),
    oauth2ClientSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly',
      }),
    oauth2ClientSecretSha256: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Hex-encoded SHA-256 hash of the client secret.@OutputOnly',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Identity-Aware Proxy', required: [] })
  .openapi('IdentityAwareProxy')

const ApplicationSchema = z
  .object({
    authDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.',
      }),
    codeBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly',
        readOnly: true,
      }),
    databaseType: z
      .enum([
        'DATABASE_TYPE_UNSPECIFIED',
        'CLOUD_DATASTORE',
        'CLOUD_FIRESTORE',
        'CLOUD_DATASTORE_COMPATIBILITY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of the Cloud Firestore or Cloud Datastore database associated with this application.',
      }),
    defaultBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly',
        readOnly: true,
      }),
    defaultCookieExpiration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cookie expiration policy for this application.' }),
    defaultHostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Hostname used to reach this application, as resolved by App Engine.@OutputOnly',
        readOnly: true,
      }),
    dispatchRules: z
      .array(UrlDispatchRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.',
      }),
    featureSettings: FeatureSettingsSchema.exactOptional().openapi({
      description: 'The feature specific settings to be used in the application.',
    }),
    gcrDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Google Container Registry domain used for storing managed build docker images for this application.',
        readOnly: true,
      }),
    iap: IdentityAwareProxySchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly',
        readOnly: true,
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.',
      }),
    servingStatus: z
      .enum(['UNSPECIFIED', 'SERVING', 'USER_DISABLED', 'SYSTEM_DISABLED'])
      .exactOptional()
      .openapi({ description: 'Serving status of this application.' }),
  })
  .openapi({
    description:
      'An Application resource contains the top-level configuration of an App Engine application.',
    required: [],
  })
  .openapi('Application')

const CertificateRawDataSchema = z
  .object({
    privateKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: -----BEGIN RSA PRIVATE KEY----- -----END RSA PRIVATE KEY----- @InputOnly',
      }),
    publicCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: -----BEGIN CERTIFICATE----- -----END CERTIFICATE----- ',
      }),
  })
  .openapi({
    description: 'An SSL certificate obtained from a certificate authority.',
    required: [],
  })
  .openapi('CertificateRawData')

const ManagedCertificateSchema = z
  .object({
    lastRenewalTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly',
      }),
    status: z
      .enum([
        'MANAGEMENT_STATUS_UNSPECIFIED',
        'OK',
        'PENDING',
        'FAILED_RETRYING_NOT_VISIBLE',
        'FAILED_PERMANENT',
        'FAILED_RETRYING_CAA_FORBIDDEN',
        'FAILED_RETRYING_CAA_CHECKING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly',
      }),
  })
  .openapi({ description: 'A certificate managed by App Engine.', required: [] })
  .openapi('ManagedCertificate')

const AuthorizedCertificateSchema = z
  .object({
    certificateRawData: CertificateRawDataSchema.exactOptional().openapi({
      description:
        'The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.',
      }),
    domainMappingsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly',
      }),
    domainNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly',
      }),
    managedCertificate: ManagedCertificateSchema.exactOptional().openapi({
      description:
        'Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly',
      }),
    visibleDomainMappings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly',
      }),
  })
  .openapi({
    description:
      'An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.',
    required: [],
  })
  .openapi('AuthorizedCertificate')

const AuthorizedDomainSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fully qualified domain name of the domain authorized for use. Example: example.com.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly',
      }),
  })
  .openapi({
    description:
      'A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Search Console (https://search.google.com/search-console/welcome).',
    required: [],
  })
  .openapi('AuthorizedDomain')

const CpuUtilizationSchema = z
  .object({
    aggregationWindowLength: z
      .string()
      .exactOptional()
      .openapi({ description: 'Period of time over which CPU utilization is calculated.' }),
    targetUtilization: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.',
      }),
  })
  .openapi({ description: 'Target scaling by CPU usage.', required: [] })
  .openapi('CpuUtilization')

const CustomMetricSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: "Allows filtering on the metric's fields." }),
    metricName: z.string().exactOptional().openapi({ description: 'The name of the metric.' }),
    singleInstanceAssignment: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'May be used instead of target_utilization when an instance can handle a specific amount of work/resources and the metric value is equal to the current amount of work remaining. The autoscaler will try to keep the number of instances equal to the metric value divided by single_instance_assignment.',
      }),
    targetType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the metric. Must be a string representing a Stackdriver metric type e.g. GAGUE, DELTA_PER_SECOND, etc.',
      }),
    targetUtilization: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The target value for the metric.' }),
  })
  .openapi({ description: 'Allows autoscaling based on Stackdriver metrics.', required: [] })
  .openapi('CustomMetric')

const DiskUtilizationSchema = z
  .object({
    targetReadBytesPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target bytes read per second.' }),
    targetReadOpsPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target ops read per seconds.' }),
    targetWriteBytesPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target bytes written per second.' }),
    targetWriteOpsPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target ops written per second.' }),
  })
  .openapi({
    description:
      'Target scaling by disk usage. Only applicable in the App Engine flexible environment.',
    required: [],
  })
  .openapi('DiskUtilization')

const NetworkUtilizationSchema = z
  .object({
    targetReceivedBytesPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target bytes received per second.' }),
    targetReceivedPacketsPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target packets received per second.' }),
    targetSentBytesPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target bytes sent per second.' }),
    targetSentPacketsPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target packets sent per second.' }),
  })
  .openapi({
    description:
      'Target scaling by network usage. Only applicable in the App Engine flexible environment.',
    required: [],
  })
  .openapi('NetworkUtilization')

const RequestUtilizationSchema = z
  .object({
    targetConcurrentRequests: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target number of concurrent requests.' }),
    targetRequestCountPerSecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Target requests per second.' }),
  })
  .openapi({
    description:
      'Target scaling by request utilization. Only applicable in the App Engine flexible environment.',
    required: [],
  })
  .openapi('RequestUtilization')

const StandardSchedulerSettingsSchema = z
  .object({
    maxInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of instances to run for this version. Set to zero to disable max_instances configuration.',
      }),
    minInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of instances to run for this version. Set to zero to disable min_instances configuration.',
      }),
    targetCpuUtilization: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Target CPU utilization ratio to maintain when scaling.' }),
    targetThroughputUtilization: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Target throughput utilization ratio to maintain when scaling' }),
  })
  .openapi({ description: 'Scheduler settings for standard environment.', required: [] })
  .openapi('StandardSchedulerSettings')

const AutomaticScalingSchema = z
  .object({
    coolDownPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time period that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. Only applicable in the App Engine flexible environment.',
      }),
    cpuUtilization: CpuUtilizationSchema.exactOptional().openapi({
      description: 'Target scaling by CPU usage.',
    }),
    customMetrics: z
      .array(CustomMetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Target scaling by user-provided metrics. Only applicable in the App Engine flexible environment.',
      }),
    diskUtilization: DiskUtilizationSchema.exactOptional().openapi({
      description: 'Target scaling by disk usage.',
    }),
    maxConcurrentRequests: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.',
      }),
    maxIdleInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Maximum number of idle instances that should be maintained for this version.',
      }),
    maxPendingLatency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.',
      }),
    maxTotalInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of instances that should be started to handle requests for this version.',
      }),
    minIdleInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.',
      }),
    minPendingLatency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.',
      }),
    minTotalInstances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of running instances that should be maintained for this version.',
      }),
    networkUtilization: NetworkUtilizationSchema.exactOptional().openapi({
      description: 'Target scaling by network usage.',
    }),
    requestUtilization: RequestUtilizationSchema.exactOptional().openapi({
      description: 'Target scaling by request utilization.',
    }),
    standardSchedulerSettings: StandardSchedulerSettingsSchema.exactOptional().openapi({
      description: 'Scheduler settings for standard environment.',
    }),
  })
  .openapi({
    description:
      'Automatic scaling is based on request rate, response latencies, and other application metrics.',
    required: [],
  })
  .openapi('AutomaticScaling')

const BasicScalingSchema = z
  .object({
    idleTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration of time after the last request that an instance must wait before the instance is shut down.',
      }),
    maxInstances: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of instances to create for this version.' }),
  })
  .openapi({
    description:
      'A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.',
    required: [],
  })
  .openapi('BasicScaling')

const FirewallRuleSchema = z
  .object({
    action: z
      .enum(['UNSPECIFIED_ACTION', 'ALLOW', 'DENY'])
      .exactOptional()
      .openapi({ description: 'The action to take on matched requests.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional string description of this rule. This field has a maximum length of 400 characters.',
      }),
    priority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.',
      }),
    sourceRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.',
      }),
  })
  .openapi({
    description:
      'A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.',
    required: [],
  })
  .openapi('FirewallRule')

const BatchUpdateIngressRulesRequestSchema = z
  .object({
    ingressRules: z
      .array(FirewallRuleSchema)
      .exactOptional()
      .openapi({ description: 'A list of FirewallRules to replace the existing set.' }),
  })
  .openapi({ description: 'Request message for Firewall.BatchUpdateIngressRules.', required: [] })
  .openapi('BatchUpdateIngressRulesRequest')

const BatchUpdateIngressRulesResponseSchema = z
  .object({
    ingressRules: z
      .array(FirewallRuleSchema)
      .exactOptional()
      .openapi({ description: 'The full list of ingress FirewallRules for this application.' }),
  })
  .openapi({ description: 'Response message for Firewall.UpdateAllIngressRules.', required: [] })
  .openapi('BatchUpdateIngressRulesResponse')

const BuildInfoSchema = z
  .object({
    cloudBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Google Cloud Build id. Example: "f966068f-08b2-42c8-bdfe-74137dff2bf9"',
      }),
  })
  .openapi({ description: 'Google Cloud Build information.', required: [] })
  .openapi('BuildInfo')

const CloudBuildOptionsSchema = z
  .object({
    appYamlPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the yaml file used in deployment, used to determine runtime configuration details.Required for flexible environment builds.See https://cloud.google.com/appengine/docs/standard/python/config/appref for more details.',
      }),
    cloudBuildTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.',
      }),
  })
  .openapi({
    description:
      'Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.',
    required: [],
  })
  .openapi('CloudBuildOptions')

const ContainerInfoSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"',
      }),
  })
  .openapi({
    description:
      'Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.',
    required: [],
  })
  .openapi('ContainerInfo')

const CreateVersionMetadataV1Schema = z
  .object({
    cloudBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build ID if one was created as part of the version create. @OutputOnly',
      }),
  })
  .openapi({
    description:
      'Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest.',
    required: [],
  })
  .openapi('CreateVersionMetadataV1')

const CreateVersionMetadataV1AlphaSchema = z
  .object({
    cloudBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build ID if one was created as part of the version create. @OutputOnly',
      }),
  })
  .openapi({
    description:
      'Metadata for the given google.longrunning.Operation during a google.appengine.v1alpha.CreateVersionRequest.',
    required: [],
  })
  .openapi('CreateVersionMetadataV1Alpha')

const CreateVersionMetadataV1BetaSchema = z
  .object({
    cloudBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build ID if one was created as part of the version create. @OutputOnly',
      }),
  })
  .openapi({
    description:
      'Metadata for the given google.longrunning.Operation during a google.appengine.v1beta.CreateVersionRequest.',
    required: [],
  })
  .openapi('CreateVersionMetadataV1Beta')

const DebugInstanceRequestSchema = z
  .object({
    sshKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).',
      }),
  })
  .openapi({ description: 'Request message for Instances.DebugInstance.', required: [] })
  .openapi('DebugInstanceRequest')

const FileInfoSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The MIME type of the file.Defaults to the value from Google Cloud Storage.',
      }),
    sha1Sum: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA1 hash of the file, in hex.' }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.",
      }),
  })
  .openapi({
    description:
      'Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.',
    required: [],
  })
  .openapi('FileInfo')

const ZipInfoSchema = z
  .object({
    filesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.',
      }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.",
      }),
  })
  .openapi({ description: 'The zip file information for a zip deployment.', required: [] })
  .openapi('ZipInfo')

const DeploymentSchema = z
  .object({
    build: BuildInfoSchema.exactOptional().openapi({
      description:
        'Google Cloud Build build information. Only applicable for instances running in the App Engine flexible environment.',
    }),
    cloudBuildOptions: CloudBuildOptionsSchema.exactOptional().openapi({
      description:
        'Options for any Google Cloud Build builds created as a part of this deployment.These options will only be used if a new build is created, such as when deploying to the App Engine flexible environment using files or zip.',
    }),
    container: ContainerInfoSchema.exactOptional().openapi({
      description:
        'The Docker image for the container that runs the version. Only applicable for instances running in the App Engine flexible environment.',
    }),
    files: z
      .record(z.string(), FileInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.',
      }),
    zip: ZipInfoSchema.exactOptional().openapi({
      description: 'The zip file for this deployment, if this is a zip deployment.',
    }),
  })
  .openapi({
    description: 'Code and application artifacts used to deploy a version to App Engine.',
    required: [],
  })
  .openapi('Deployment')

const ResourceRecordSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.",
      }),
    rrdata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).',
      }),
    type: z
      .enum(['A', 'AAAA', 'CNAME'])
      .exactOptional()
      .openapi({ description: 'Resource record type. Example: AAAA.' }),
  })
  .openapi({ description: 'A DNS resource record.', required: [] })
  .openapi('ResourceRecord')

const SslSettingsSchema = z
  .object({
    certificateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify SslManagementType.MANUAL on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.',
      }),
    pendingManagedCertificateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the managed AuthorizedCertificate resource currently being provisioned, if applicable. Until the new managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the provisioning process completes, the certificate_id field will reflect the new managed certificate and this field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the certificate_id field with an UpdateDomainMappingRequest.@OutputOnly',
      }),
    sslManagementType: z
      .enum(['AUTOMATIC', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain.',
      }),
  })
  .openapi({ description: 'SSL configuration for a DomainMapping resource.', required: [] })
  .openapi('SslSettings')

const DomainMappingSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Relative name of the domain serving the application. Example: example.com.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly',
      }),
    resourceRecords: z
      .array(ResourceRecordSchema)
      .exactOptional()
      .openapi({
        description:
          "The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly",
      }),
    sslSettings: SslSettingsSchema.exactOptional().openapi({
      description:
        'SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.',
    }),
  })
  .openapi({ description: 'A domain serving an App Engine application.', required: [] })
  .openapi('DomainMapping')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const EndpointsApiServiceSchema = z
  .object({
    configId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".By default, the rollout strategy for Endpoints is RolloutStrategy.FIXED. This means that Endpoints starts up with a particular configuration ID. When a new configuration is rolled out, Endpoints must be given the new configuration ID. The config_id field is used to give the configuration ID and is required in this case.Endpoints also has a rollout strategy called RolloutStrategy.MANAGED. When using this, Endpoints fetches the latest configuration and does not need the configuration ID. In this case, config_id must be omitted.',
      }),
    disableTraceSampling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable or disable trace sampling. By default, this is set to false for enabled.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog"',
      }),
    rolloutStrategy: z
      .enum(['UNSPECIFIED_ROLLOUT_STRATEGY', 'FIXED', 'MANAGED'])
      .exactOptional()
      .openapi({
        description:
          'Endpoints rollout strategy. If FIXED, config_id must be specified. If MANAGED, config_id must be omitted.',
      }),
  })
  .openapi({
    description:
      'Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).',
    required: [],
  })
  .openapi('EndpointsApiService')

const EntrypointSchema = z
  .object({
    shell: z
      .string()
      .exactOptional()
      .openapi({ description: 'The format should be a shell command that can be fed to bash -c.' }),
  })
  .openapi({ description: 'The entrypoint for the application.', required: [] })
  .openapi('Entrypoint')

const ErrorHandlerSchema = z
  .object({
    errorCode: z
      .enum([
        'ERROR_CODE_UNSPECIFIED',
        'ERROR_CODE_DEFAULT',
        'ERROR_CODE_OVER_QUOTA',
        'ERROR_CODE_DOS_API_DENIAL',
        'ERROR_CODE_TIMEOUT',
      ])
      .exactOptional()
      .openapi({ description: 'Error condition this handler applies to.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'MIME type of file. Defaults to text/html.' }),
    staticFile: z
      .string()
      .exactOptional()
      .openapi({ description: 'Static file content to be served for this error.' }),
  })
  .openapi({
    description: 'Custom static error page to be served when an error occurs.',
    required: [],
  })
  .openapi('ErrorHandler')

const FlexibleRuntimeSettingsSchema = z
  .object({
    operatingSystem: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operating system of the application runtime.' }),
    runtimeVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The runtime version of an App Engine flexible application.' }),
  })
  .openapi({
    description: 'Runtime settings for the App Engine flexible environment.',
    required: [],
  })
  .openapi('FlexibleRuntimeSettings')

const GoogleAppengineV1betaLocationMetadataSchema = z
  .object({
    flexibleEnvironmentAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'App Engine flexible environment is available in the given location.@OutputOnly',
      }),
    searchApiAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Search API (https://cloud.google.com/appengine/docs/standard/python/search) is available in the given location.',
        readOnly: true,
      }),
    standardEnvironmentAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'App Engine standard environment is available in the given location.@OutputOnly',
      }),
  })
  .openapi({ description: 'Metadata for the given google.cloud.location.Location.', required: [] })
  .openapi('GoogleAppengineV1betaLocationMetadata')

const HealthCheckSchema = z
  .object({
    checkInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interval between health checks.' }),
    disableHealthCheck: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to explicitly disable health checks for this instance.' }),
    healthyThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Number of consecutive successful health checks required before receiving traffic.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"',
      }),
    restartThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Number of consecutive failed health checks required before an instance is restarted.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time before the health check is considered failed.' }),
    unhealthyThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'Number of consecutive failed health checks required before removing traffic.',
      }),
  })
  .openapi({
    description:
      'Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.',
    required: [],
  })
  .openapi('HealthCheck')

const InstanceSchema = z
  .object({
    appEngineRelease: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. App Engine release this instance is running on.',
        readOnly: true,
      }),
    availability: z
      .enum(['UNSPECIFIED', 'RESIDENT', 'DYNAMIC'])
      .exactOptional()
      .openapi({ description: 'Output only. Availability of the instance.', readOnly: true }),
    averageLatency: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Average latency (ms) over the last minute.',
        readOnly: true,
      }),
    errors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of errors since this instance was started.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Relative name of the instance within the version. Example: instance-1.',
        readOnly: true,
      }),
    memoryUsage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total memory in use (bytes).', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.',
        readOnly: true,
      }),
    qps: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Output only. Average queries per second (QPS) over the last minute.',
        readOnly: true,
      }),
    requests: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of requests since this instance was started.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time that this instance was started.@OutputOnly',
        readOnly: true,
      }),
    vmDebugEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The IP address of this instance. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmLiveness: z
      .enum([
        'LIVENESS_STATE_UNSPECIFIED',
        'UNKNOWN',
        'HEALTHY',
        'UNHEALTHY',
        'DRAINING',
        'TIMEOUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
    vmZoneName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An Instance resource is the computing unit that App Engine uses to automatically scale an application.',
    required: [],
  })
  .openapi('Instance')

const LibrarySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the library. Example: "django".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the library to select, or "latest".' }),
  })
  .openapi({
    description: 'Third-party Python runtime library that is required by the application.',
    required: [],
  })
  .openapi('Library')

const ListAuthorizedCertificatesResponseSchema = z
  .object({
    certificates: z
      .array(AuthorizedCertificateSchema)
      .exactOptional()
      .openapi({ description: 'The SSL certificates the user is authorized to administer.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({
    description: 'Response message for AuthorizedCertificates.ListAuthorizedCertificates.',
    required: [],
  })
  .openapi('ListAuthorizedCertificatesResponse')

const ListAuthorizedDomainsResponseSchema = z
  .object({
    domains: z
      .array(AuthorizedDomainSchema)
      .exactOptional()
      .openapi({ description: 'The authorized domains belonging to the user.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({
    description: 'Response message for AuthorizedDomains.ListAuthorizedDomains.',
    required: [],
  })
  .openapi('ListAuthorizedDomainsResponse')

const ListDomainMappingsResponseSchema = z
  .object({
    domainMappings: z
      .array(DomainMappingSchema)
      .exactOptional()
      .openapi({ description: 'The domain mappings for the application.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'Response message for DomainMappings.ListDomainMappings.', required: [] })
  .openapi('ListDomainMappingsResponse')

const ListIngressRulesResponseSchema = z
  .object({
    ingressRules: z
      .array(FirewallRuleSchema)
      .exactOptional()
      .openapi({ description: 'The ingress FirewallRules for this application.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'Response message for Firewall.ListIngressRules.', required: [] })
  .openapi('ListIngressRulesResponse')

const ListInstancesResponseSchema = z
  .object({
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({ description: 'The instances belonging to the requested version.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
  })
  .openapi({ description: 'Response message for Instances.ListInstances.', required: [] })
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
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} ',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: "us-east1".' }),
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
          'Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"',
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
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
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
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
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
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
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

const NetworkSettingsSchema = z
  .object({
    ingressTrafficAllowed: z
      .enum([
        'INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED',
        'INGRESS_TRAFFIC_ALLOWED_ALL',
        'INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY',
        'INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB',
      ])
      .exactOptional()
      .openapi({ description: 'The ingress settings for version or service.' }),
  })
  .openapi({
    description:
      'A NetworkSettings resource is a container for ingress settings for a version or service.',
    required: [],
  })
  .openapi('NetworkSettings')

const TrafficSplitSchema = z
  .object({
    allocations: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({
        description:
          'Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.',
      }),
    shardBy: z
      .enum(['UNSPECIFIED', 'COOKIE', 'IP', 'RANDOM'])
      .exactOptional()
      .openapi({
        description:
          'Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.',
      }),
  })
  .openapi({
    description:
      'Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.',
    required: [],
  })
  .openapi('TrafficSplit')

const ServiceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Relative name of the service within the application. Example: default.@OutputOnly',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of labels to apply to this service. Labels are key/value pairs that describe the service and all resources that belong to it (e.g., versions). The labels can be used to search and group resources, and are propagated to the usage and billing reports, enabling fine-grain analysis of costs. An example of using labels is to tag resources belonging to different environments (e.g., "env=prod", "env=qa"). Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters. Label keys must start with a lowercase letter or an international character. Each service can have at most 32 labels.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly',
      }),
    networkSettings: NetworkSettingsSchema.exactOptional().openapi({
      description: 'Ingress settings for this service. Will apply to all versions.',
    }),
    split: TrafficSplitSchema.exactOptional().openapi({
      description:
        'Mapping that defines fractional HTTP traffic diversion to different versions within the service.',
    }),
  })
  .openapi({
    description:
      'A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.',
    required: [],
  })
  .openapi('Service')

const ListServicesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    services: z
      .array(ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The services belonging to the requested application.' }),
  })
  .openapi({ description: 'Response message for Services.ListServices.', required: [] })
  .openapi('ListServicesResponse')

const ScriptHandlerSchema = z
  .object({
    scriptPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the script from the application root directory.' }),
  })
  .openapi({
    description: 'Executes a script to handle the request that matches the URL pattern.',
    required: [],
  })
  .openapi('ScriptHandler')

const StaticFilesHandlerSchema = z
  .object({
    applicationReadable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.',
      }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time a static file served by this handler should be cached by web proxies and browsers.',
      }),
    httpHeaders: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'HTTP headers to use for all responses from these URLs.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension.",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.',
      }),
    requireMatchingFile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this handler should match the request if the file referenced by the handler does not exist.',
      }),
    uploadPathRegex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regular expression that matches the file paths for all files that should be referenced by this handler.',
      }),
  })
  .openapi({
    description:
      'Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.',
    required: [],
  })
  .openapi('StaticFilesHandler')

const UrlMapSchema = z
  .object({
    apiEndpoint: ApiEndpointHandlerSchema.exactOptional().openapi({
      description: 'Uses API Endpoints to handle requests.',
    }),
    authFailAction: z
      .enum([
        'AUTH_FAIL_ACTION_UNSPECIFIED',
        'AUTH_FAIL_ACTION_REDIRECT',
        'AUTH_FAIL_ACTION_UNAUTHORIZED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Action to take when users access resources that require authentication. Defaults to redirect.',
      }),
    login: z
      .enum(['LOGIN_UNSPECIFIED', 'LOGIN_OPTIONAL', 'LOGIN_ADMIN', 'LOGIN_REQUIRED'])
      .exactOptional()
      .openapi({
        description:
          'Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment.',
      }),
    redirectHttpResponseCode: z
      .enum([
        'REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED',
        'REDIRECT_HTTP_RESPONSE_CODE_301',
        'REDIRECT_HTTP_RESPONSE_CODE_302',
        'REDIRECT_HTTP_RESPONSE_CODE_303',
        'REDIRECT_HTTP_RESPONSE_CODE_307',
      ])
      .exactOptional()
      .openapi({
        description:
          '30x code to use when performing redirects for the secure field. Defaults to 302.',
      }),
    script: ScriptHandlerSchema.exactOptional().openapi({
      description:
        'Executes a script to handle the requests that match this URL pattern. Only the auto value is supported for Node.js in the App Engine standard environment, for example "script": "auto".',
    }),
    securityLevel: z
      .enum([
        'SECURE_UNSPECIFIED',
        'SECURE_DEFAULT',
        'SECURE_NEVER',
        'SECURE_OPTIONAL',
        'SECURE_ALWAYS',
      ])
      .exactOptional()
      .openapi({ description: 'Security (HTTPS) enforcement for this URL.' }),
    staticFiles: StaticFilesHandlerSchema.exactOptional().openapi({
      description: 'Returns the contents of a file, such as an image, as the response.',
    }),
    urlRegex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.',
      }),
  })
  .openapi({
    description:
      'URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.',
    required: [],
  })
  .openapi('UrlMap')

const LivenessCheckSchema = z
  .object({
    checkInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interval between health checks.' }),
    failureThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Number of consecutive failed checks required before considering the VM unhealthy.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com"',
      }),
    initialDelay: z
      .string()
      .exactOptional()
      .openapi({ description: 'The initial delay before starting to execute the checks.' }),
    path: z.string().exactOptional().openapi({ description: 'The request path.' }),
    successThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Number of consecutive successful checks required before considering the VM healthy.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time before the check is considered failed.' }),
  })
  .openapi({
    description:
      'Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.',
    required: [],
  })
  .openapi('LivenessCheck')

const ManualScalingSchema = z
  .object({
    instances: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.',
      }),
  })
  .openapi({
    description:
      'A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.',
    required: [],
  })
  .openapi('ManualScaling')

const NetworkSchema = z
  .object({
    forwardedPorts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment.',
      }),
    instanceIpMode: z
      .enum(['INSTANCE_IP_MODE_UNSPECIFIED', 'EXTERNAL', 'INTERNAL'])
      .exactOptional()
      .openapi({
        description:
          'The IP mode for instances. Only applicable in the App Engine flexible environment.',
      }),
    instanceTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tag to apply to the instance during creation. Only applicable in the App Engine flexible environment.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default.',
      }),
    sessionAffinity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable session affinity. Only applicable in the App Engine flexible environment.',
      }),
    subnetworkName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network. If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range. If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network. If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.',
      }),
  })
  .openapi({
    description: 'Extra network settings. Only applicable in the App Engine flexible environment.',
    required: [],
  })
  .openapi('Network')

const ReadinessCheckSchema = z
  .object({
    appStartTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.',
      }),
    checkInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interval between health checks.' }),
    failureThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'Number of consecutive failed checks required before removing traffic.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"',
      }),
    path: z.string().exactOptional().openapi({ description: 'The request path.' }),
    successThreshold: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'Number of consecutive successful checks required before receiving traffic.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time before the check is considered failed.' }),
  })
  .openapi({
    description:
      'Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.',
    required: [],
  })
  .openapi('ReadinessCheck')

const VolumeSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Unique name for the volume.' }),
    sizeGb: z.float64().exactOptional().openapi({ description: 'Volume size in gigabytes.' }),
    volumeType: z
      .string()
      .exactOptional()
      .openapi({ description: "Underlying volume type, e.g. 'tmpfs'." }),
  })
  .openapi({
    description:
      'Volumes mounted within the app container. Only applicable in the App Engine flexible environment.',
    required: [],
  })
  .openapi('Volume')

const ResourcesSchema = z
  .object({
    cpu: z.float64().exactOptional().openapi({ description: 'Number of CPU cores needed.' }),
    diskGb: z.float64().exactOptional().openapi({ description: 'Disk size (GB) needed.' }),
    kmsKeyReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the encryption key that is stored in Google Cloud KMS. Only should be used by Cloud Composer to encrypt the vm disk',
      }),
    memoryGb: z.float64().exactOptional().openapi({ description: 'Memory (GB) needed.' }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({ description: 'User specified volumes.' }),
  })
  .openapi({ description: 'Machine resources for a version.', required: [] })
  .openapi('Resources')

const VpcAccessConnectorSchema = z
  .object({
    egressSetting: z
      .enum(['EGRESS_SETTING_UNSPECIFIED', 'ALL_TRAFFIC', 'PRIVATE_IP_RANGES'])
      .exactOptional()
      .openapi({
        description:
          'The egress setting for the connector, controlling what traffic is diverted through it.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.',
      }),
  })
  .openapi({ description: 'VPC access connector specification.', required: [] })
  .openapi('VpcAccessConnector')

const VersionSchema = z
  .object({
    apiConfig: ApiConfigHandlerSchema.exactOptional().openapi({
      description:
        'Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set.',
    }),
    appEngineApis: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows App Engine second generation runtimes to access the legacy bundled services.',
      }),
    automaticScaling: AutomaticScalingSchema.exactOptional().openapi({
      description:
        'Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic.',
    }),
    basicScaling: BasicScalingSchema.exactOptional().openapi({
      description:
        'A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.',
    }),
    betaSettings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Metadata settings that are supplied to this version to enable beta runtime features.',
      }),
    buildEnvVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this version was created.@OutputOnly' }),
    createdBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the user who created this version.@OutputOnly' }),
    defaultExpiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.',
      }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.',
    }),
    diskUsageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly',
      }),
    endpointsApiService: EndpointsApiServiceSchema.exactOptional().openapi({
      description:
        'Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.',
    }),
    entrypoint: EntrypointSchema.exactOptional().openapi({
      description: 'The entrypoint for the application.',
    }),
    env: z
      .string()
      .exactOptional()
      .openapi({
        description: 'App Engine execution environment for this version.Defaults to standard.',
      }),
    envVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Environment variables available to the application.Only returned in GET requests if view=FULL is set.',
      }),
    errorHandlers: z
      .array(ErrorHandlerSchema)
      .exactOptional()
      .openapi({
        description:
          'Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.',
      }),
    flexibleRuntimeSettings: FlexibleRuntimeSettingsSchema.exactOptional().openapi({
      description: 'Settings for App Engine flexible runtimes.',
    }),
    handlers: z
      .array(UrlMapSchema)
      .exactOptional()
      .openapi({
        description:
          'An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.',
      }),
    healthCheck: HealthCheckSchema.exactOptional().openapi({
      description:
        'Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.Only returned in GET requests if view=FULL is set.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".',
      }),
    inboundServices: z
      .array(
        z.enum([
          'INBOUND_SERVICE_UNSPECIFIED',
          'INBOUND_SERVICE_MAIL',
          'INBOUND_SERVICE_MAIL_BOUNCE',
          'INBOUND_SERVICE_XMPP_ERROR',
          'INBOUND_SERVICE_XMPP_MESSAGE',
          'INBOUND_SERVICE_XMPP_SUBSCRIBE',
          'INBOUND_SERVICE_XMPP_PRESENCE',
          'INBOUND_SERVICE_CHANNEL_PRESENCE',
          'INBOUND_SERVICE_WARMUP',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Before an application can receive email or XMPP messages, the application must be configured to enable the service.',
      }),
    instanceClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.',
      }),
    libraries: z
      .array(LibrarySchema)
      .exactOptional()
      .openapi({
        description:
          'Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.',
      }),
    livenessCheck: LivenessCheckSchema.exactOptional().openapi({
      description:
        'Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.',
    }),
    manualScaling: ManualScalingSchema.exactOptional().openapi({
      description:
        'A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends".',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly',
      }),
    network: NetworkSchema.exactOptional().openapi({
      description:
        'Extra network settings. Only applicable in the App Engine flexible environment.',
    }),
    nobuildFilesRegex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.',
      }),
    readinessCheck: ReadinessCheckSchema.exactOptional().openapi({
      description:
        'Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.',
    }),
    resources: ResourcesSchema.exactOptional().openapi({
      description:
        'Machine resources for this version. Only applicable in the App Engine flexible environment.',
    }),
    runtime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Desired runtime. Example: python27.' }),
    runtimeApiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref',
      }),
    runtimeChannel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.',
      }),
    runtimeMainExecutablePath: z
      .string()
      .exactOptional()
      .openapi({ description: "The path or name of the app's main executable." }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.',
      }),
    servingStatus: z
      .enum(['SERVING_STATUS_UNSPECIFIED', 'SERVING', 'STOPPED'])
      .exactOptional()
      .openapi({
        description:
          'Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.',
      }),
    threadsafe: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether multiple requests can be dispatched to this version at once.',
      }),
    versionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly',
      }),
    vm: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to deploy this version in a container on a virtual machine.',
      }),
    vpcAccessConnector: VpcAccessConnectorSchema.exactOptional().openapi({
      description: 'Enables VPC connectivity for standard apps.',
    }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.',
      }),
  })
  .openapi({
    description:
      'A Version resource is a specific set of source code and configuration files that are deployed into a service.',
    required: [],
  })
  .openapi('Version')

const ListVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    versions: z
      .array(VersionSchema)
      .exactOptional()
      .openapi({ description: 'The versions belonging to the requested service.' }),
  })
  .openapi({ description: 'Response message for Versions.ListVersions.', required: [] })
  .openapi('ListVersionsResponse')

const LocationMetadataSchema = z
  .object({
    flexibleEnvironmentAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'App Engine flexible environment is available in the given location.@OutputOnly',
      }),
    searchApiAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Search API (https://cloud.google.com/appengine/docs/standard/python/search) is available in the given location.',
        readOnly: true,
      }),
    standardEnvironmentAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'App Engine standard environment is available in the given location.@OutputOnly',
      }),
  })
  .openapi({ description: 'Metadata for the given google.cloud.location.Location.', required: [] })
  .openapi('LocationMetadata')

const OperationMetadataV1Schema = z
  .object({
    createVersionMetadata: CreateVersionMetadataV1Schema.exactOptional(),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation completed.@OutputOnly' }),
    ephemeralMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ephemeral message that may change every time the operation is polled. @OutputOnly',
      }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation was created.@OutputOnly' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'User who requested this operation.@OutputOnly' }),
    warning: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Durable messages that persist on every operation poll. @OutputOnly',
      }),
  })
  .openapi({ description: 'Metadata for the given google.longrunning.Operation.', required: [] })
  .openapi('OperationMetadataV1')

const OperationMetadataV1AlphaSchema = z
  .object({
    createVersionMetadata: CreateVersionMetadataV1AlphaSchema.exactOptional(),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation completed.@OutputOnly' }),
    ephemeralMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ephemeral message that may change every time the operation is polled. @OutputOnly',
      }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation was created.@OutputOnly' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'User who requested this operation.@OutputOnly' }),
    warning: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Durable messages that persist on every operation poll. @OutputOnly',
      }),
  })
  .openapi({ description: 'Metadata for the given google.longrunning.Operation.', required: [] })
  .openapi('OperationMetadataV1Alpha')

const OperationMetadataV1BetaSchema = z
  .object({
    createVersionMetadata: CreateVersionMetadataV1BetaSchema.exactOptional(),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation completed.@OutputOnly' }),
    ephemeralMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ephemeral message that may change every time the operation is polled. @OutputOnly',
      }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that this operation was created.@OutputOnly' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'User who requested this operation.@OutputOnly' }),
    warning: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Durable messages that persist on every operation poll. @OutputOnly',
      }),
  })
  .openapi({ description: 'Metadata for the given google.longrunning.Operation.', required: [] })
  .openapi('OperationMetadataV1Beta')

const ProjectsMetadataSchema = z
  .object({
    consumerProjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The consumer project id.' }),
    consumerProjectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The consumer project number.' }),
    consumerProjectState: z
      .enum(['UNKNOWN_STATE', 'ON', 'OFF', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'The CCFE state of the consumer project. It is the same state that is communicated to the CLH during project events. Notice that this field is not set in the DB, it is only set in this proto when communicated to CLH in the side channel.',
      }),
    p4ServiceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account authorized to operate on the consumer project. Note: CCFE only propagates P4SA with default tag to CLH.',
      }),
    producerProjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The producer project id.' }),
    producerProjectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The producer project number.' }),
    tenantProjectId: z.string().exactOptional().openapi({ description: 'The tenant project id.' }),
    tenantProjectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant project number.' }),
  })
  .openapi({
    description:
      'ProjectsMetadata is the metadata CCFE stores about the all the relevant projects (tenant, consumer, producer).',
    required: [],
  })
  .openapi('ProjectsMetadata')

const ReasonsSchema = z
  .object({
    abuse: z
      .enum(['ABUSE_UNKNOWN_REASON', 'ABUSE_CONTROL_PLANE_SYNC', 'SUSPEND', 'REINSTATE'])
      .exactOptional(),
    billing: z
      .enum(['BILLING_UNKNOWN_REASON', 'BILLING_CONTROL_PLANE_SYNC', 'PROBATION', 'CLOSE', 'OPEN'])
      .exactOptional(),
    dataGovernance: z
      .enum([
        'DATA_GOVERNANCE_UNKNOWN_REASON',
        'DATA_GOVERNANCE_CONTROL_PLANE_SYNC',
        'HIDE',
        'UNHIDE',
        'PURGE',
      ])
      .exactOptional(),
    serviceManagement: z
      .enum([
        'SERVICE_MANAGEMENT_UNKNOWN_REASON',
        'SERVICE_MANAGEMENT_CONTROL_PLANE_SYNC',
        'ACTIVATION',
        'PREPARE_DEACTIVATION',
        'ABORT_DEACTIVATION',
        'COMMIT_DEACTIVATION',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Projects transition between and within states based on reasons sent from various systems. CCFE will provide the CLH with reasons for the current state per system.The current systems that CCFE supports are: Service Management (Inception) Data Governance (Wipeout) Abuse (Ares) Billing (Internal Cloud Billing API)',
    required: [],
  })
  .openapi('Reasons')

const ProjectStateSchema = z
  .object({
    currentReasons: ReasonsSchema.exactOptional(),
    previousReasons: ReasonsSchema.exactOptional().openapi({
      description:
        'The previous and current reasons for a project state will be sent for a project event. CLHs that need to know the signal that caused the project event to trigger (edges) as opposed to just knowing the state can act upon differences in the previous and current reasons.Reasons will be provided for every system: service management, data governance, abuse, and billing.If this is a CCFE-triggered event used for reconciliation then the current reasons will be set to their *_CONTROL_PLANE_SYNC state. The previous reasons will contain the last known set of non-unknown non-control_plane_sync reasons for the state.Reasons fields are deprecated. New tenants should only use the state field. If you must know the reason(s) behind a specific state, please consult with CCFE team first (cloud-ccfe-discuss@google.com).',
    }),
    state: z
      .enum(['UNKNOWN_STATE', 'ON', 'OFF', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'The current state of the project. This state is the culmination of all of the opinions from external systems that CCFE knows about of the project.',
      }),
  })
  .openapi({
    description:
      "ProjectState contains the externally-visible project state that is used to communicate the state and reasoning for that state to the CLH. This data is not persisted by CCFE, but is instead derived from CCFE's internal representation of the project state.",
    required: [],
  })
  .openapi('ProjectState')

const ProjectEventSchema = z
  .object({
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID for this project event. CLHs can use this value to dedup repeated calls. required',
      }),
    phase: z
      .enum(['UNKNOWN', 'BEFORE_RESOURCE_HANDLING', 'AFTER_RESOURCE_HANDLING'])
      .exactOptional(),
    projectMetadata: ProjectsMetadataSchema.exactOptional().openapi({
      description: 'The projects metadata for this project. required',
    }),
    state: ProjectStateSchema.exactOptional().openapi({
      description: 'The state of the project that led to this event.',
    }),
  })
  .openapi({ description: 'The request sent to CLHs during project events.', required: [] })
  .openapi('ProjectEvent')

const RepairApplicationRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'Applications.RepairApplication'." })
  .openapi('RepairApplicationRequest')

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
        'https://www.googleapis.com/auth/appengine.admin':
          'View and manage your applications deployed on Google App Engine',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
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
        'https://www.googleapis.com/auth/appengine.admin':
          'View and manage your applications deployed on Google App Engine',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1betaAppsRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps',
  tags: ['apps'],
  description:
    'Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).',
  operationId: 'appengine.apps.create',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project and location in which the application should be created, specified in the format projects/*/locations/*',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationSchema } } },
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

export const getV1betaAppsAppsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}',
  tags: ['apps'],
  description: 'Gets information about an application.',
  operationId: 'appengine.apps.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Application resource to get. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApplicationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const patchV1betaAppsAppsIdRoute = createRoute({
  method: 'patch',
  path: '/v1beta/apps/{appsId}',
  tags: ['apps'],
  description:
    'Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.',
  operationId: 'appengine.apps.patch',
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
            description: 'Required. Standard field mask for the set of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Application resource to update. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationSchema } } },
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

export const getV1betaAppsAppsIdAuthorizedCertificatesRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/authorizedCertificates',
  tags: ['apps'],
  description: 'Lists all SSL certificates the user is authorized to administer.',
  operationId: 'appengine.apps.authorizedCertificates.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC_CERTIFICATE', 'FULL_CERTIFICATE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the set of fields returned in the LIST response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC_CERTIFICATE', 'FULL_CERTIFICATE'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAuthorizedCertificatesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1betaAppsAppsIdAuthorizedCertificatesRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}/authorizedCertificates',
  tags: ['apps'],
  description: 'Uploads the specified SSL certificate.',
  operationId: 'appengine.apps.authorizedCertificates.create',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthorizedCertificateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuthorizedCertificateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}',
  tags: ['apps'],
  description: 'Gets the specified SSL certificate.',
  operationId: 'appengine.apps.authorizedCertificates.get',
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
      view: z
        .enum(['BASIC_CERTIFICATE', 'FULL_CERTIFICATE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the set of fields returned in the GET response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC_CERTIFICATE', 'FULL_CERTIFICATE'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorizedCertificatesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'authorizedCertificatesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuthorizedCertificateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}',
    tags: ['apps'],
    description: 'Deletes the specified SSL certificate.',
    operationId: 'appengine.apps.authorizedCertificates.delete',
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
        appsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.',
              in: 'path',
              name: 'appsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        authorizedCertificatesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'authorizedCertificatesId',
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

export const patchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdRoute = createRoute(
  {
    method: 'patch',
    path: '/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}',
    tags: ['apps'],
    description:
      'Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.',
    operationId: 'appengine.apps.authorizedCertificates.patch',
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
                'Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.',
              in: 'query',
              name: 'updateMask',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        appsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.',
              in: 'path',
              name: 'appsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        authorizedCertificatesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'authorizedCertificatesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AuthorizedCertificateSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AuthorizedCertificateSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  },
)

export const getV1betaAppsAppsIdAuthorizedDomainsRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/authorizedDomains',
  tags: ['apps'],
  description: 'Lists all domains the user is authorized to administer.',
  operationId: 'appengine.apps.authorizedDomains.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAuthorizedDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdDomainMappingsRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/domainMappings',
  tags: ['apps'],
  description: 'Lists the domain mappings on an application.',
  operationId: 'appengine.apps.domainMappings.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDomainMappingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1betaAppsAppsIdDomainMappingsRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}/domainMappings',
  tags: ['apps'],
  description:
    'Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.',
  operationId: 'appengine.apps.domainMappings.create',
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
      overrideStrategy: z
        .enum(['UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY', 'STRICT', 'OVERRIDE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.',
            in: 'query',
            name: 'overrideStrategy',
            schema: {
              enum: ['UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY', 'STRICT', 'OVERRIDE'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainMappingSchema } } },
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

export const getV1betaAppsAppsIdDomainMappingsDomainMappingsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}',
  tags: ['apps'],
  description: 'Gets the specified domain mapping.',
  operationId: 'appengine.apps.domainMappings.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainMappingsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'domainMappingsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainMappingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}',
  tags: ['apps'],
  description:
    'Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.',
  operationId: 'appengine.apps.domainMappings.delete',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainMappingsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'domainMappingsId',
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

export const patchV1betaAppsAppsIdDomainMappingsDomainMappingsIdRoute = createRoute({
  method: 'patch',
  path: '/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}',
  tags: ['apps'],
  description:
    'Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.',
  operationId: 'appengine.apps.domainMappings.patch',
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
            description: 'Required. Standard field mask for the set of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainMappingsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'domainMappingsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainMappingSchema } } },
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

export const getV1betaAppsAppsIdFirewallIngressRulesRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules',
  tags: ['apps'],
  description: 'Lists the firewall rules of an application.',
  operationId: 'appengine.apps.firewall.ingressRules.list',
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
      matchingAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.',
            in: 'query',
            name: 'matchingAddress',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListIngressRulesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1betaAppsAppsIdFirewallIngressRulesRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules',
  tags: ['apps'],
  description: 'Creates a firewall rule for the application.',
  operationId: 'appengine.apps.firewall.ingressRules.create',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FirewallRuleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirewallRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}',
  tags: ['apps'],
  description: 'Gets the specified firewall rule.',
  operationId: 'appengine.apps.firewall.ingressRules.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ingressRulesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'ingressRulesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirewallRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}',
  tags: ['apps'],
  description: 'Deletes the specified firewall rule.',
  operationId: 'appengine.apps.firewall.ingressRules.delete',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ingressRulesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'ingressRulesId',
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

export const patchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdRoute = createRoute({
  method: 'patch',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}',
  tags: ['apps'],
  description: 'Updates the specified firewall rule.',
  operationId: 'appengine.apps.firewall.ingressRules.patch',
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
            description: 'Standard field mask for the set of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ingressRulesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'ingressRulesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FirewallRuleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirewallRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaAppsAppsIdFirewallIngressRulesBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate',
  tags: ['apps'],
  description:
    'Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the \'*\' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.',
  operationId: 'appengine.apps.firewall.ingressRules.batchUpdate',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdateIngressRulesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdateIngressRulesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaAppsAppsIdLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/locations',
  tags: ['apps'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'appengine.apps.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).',
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
              'A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'appsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdLocationsLocationsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/locations/{locationsId}',
  tags: ['apps'],
  description: 'Gets information about a location.',
  operationId: 'appengine.apps.locations.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. Resource name for the location.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'locationsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/operations',
  tags: ['apps'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.",
  operationId: 'appengine.apps.operations.list',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description: "Part of `name`. The name of the operation's parent resource.",
            in: 'path',
            name: 'appsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdOperationsOperationsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/operations/{operationsId}',
  tags: ['apps'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'appengine.apps.operations.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. The name of the operation resource.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'operationsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdServicesRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/services',
  tags: ['apps'],
  description: 'Lists all the services in the application.',
  operationId: 'appengine.apps.services.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Application resource. Example: apps/myapp.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdServicesServicesIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/services/{servicesId}',
  tags: ['apps'],
  description: 'Gets the current configuration of the specified service.',
  operationId: 'appengine.apps.services.get',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1betaAppsAppsIdServicesServicesIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta/apps/{appsId}/services/{servicesId}',
  tags: ['apps'],
  description: 'Deletes the specified service and all enclosed versions.',
  operationId: 'appengine.apps.services.delete',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
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

export const patchV1betaAppsAppsIdServicesServicesIdRoute = createRoute({
  method: 'patch',
  path: '/v1beta/apps/{appsId}/services/{servicesId}',
  tags: ['apps'],
  description: 'Updates the configuration of the specified service.',
  operationId: 'appengine.apps.services.patch',
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
      migrateTraffic: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).',
            in: 'query',
            name: 'migrateTraffic',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Standard field mask for the set of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceSchema } } },
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

export const getV1betaAppsAppsIdServicesServicesIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions',
  tags: ['apps'],
  description: 'Lists the versions of a service.',
  operationId: 'appengine.apps.services.versions.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the set of fields returned in the List response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `parent`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1betaAppsAppsIdServicesServicesIdVersionsRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions',
  tags: ['apps'],
  description: 'Deploys code and resource files to a new version.',
  operationId: 'appengine.apps.services.versions.create',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `parent`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionSchema } } },
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

export const getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
  tags: ['apps'],
  description:
    'Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.',
  operationId: 'appengine.apps.services.versions.get',
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
      view: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the set of fields returned in the Get response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'versionsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const deleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
  tags: ['apps'],
  description: 'Deletes an existing Version resource.',
  operationId: 'appengine.apps.services.versions.delete',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'versionsId',
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

export const patchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdRoute = createRoute({
  method: 'patch',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
  tags: ['apps'],
  description:
    'Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)',
  operationId: 'appengine.apps.services.versions.patch',
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
            description: 'Standard field mask for the set of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `appsId`.',
            in: 'path',
            name: 'versionsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionSchema } } },
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

export const getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesRoute = createRoute({
  method: 'get',
  path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances',
  tags: ['apps'],
  description:
    'Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).',
  operationId: 'appengine.apps.services.versions.instances.list',
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
            description: 'Maximum results to return per page.',
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
            description: 'Continuation token for fetching the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      appsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      servicesId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `parent`. See documentation of `appsId`.',
            in: 'path',
            name: 'servicesId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `parent`. See documentation of `appsId`.',
            in: 'path',
            name: 'versionsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdRoute =
  createRoute({
    method: 'get',
    path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}',
    tags: ['apps'],
    description: 'Gets instance information.',
    operationId: 'appengine.apps.services.versions.instances.get',
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
        appsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.',
              in: 'path',
              name: 'appsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        servicesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'servicesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'versionsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instancesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'instancesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InstanceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
    ],
  })

export const deleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}',
    tags: ['apps'],
    description:
      'Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.',
    operationId: 'appengine.apps.services.versions.instances.delete',
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
        appsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.',
              in: 'path',
              name: 'appsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        servicesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'servicesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'versionsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instancesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'instancesId',
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

export const postV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugRoute =
  createRoute({
    method: 'post',
    path: '/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug',
    tags: ['apps'],
    description:
      'Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.',
    operationId: 'appengine.apps.services.versions.instances.debug',
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
        appsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.',
              in: 'path',
              name: 'appsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        servicesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'servicesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'versionsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instancesId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `appsId`.',
              in: 'path',
              name: 'instancesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DebugInstanceRequestSchema } } },
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

export const postV1betaAppsAppsIdRepairRoute = createRoute({
  method: 'post',
  path: '/v1beta/apps/{appsId}:repair',
  tags: ['apps'],
  description:
    'Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.',
  operationId: 'appengine.apps.repair',
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
      appsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. Name of the application to repair. Example: apps/myapp',
            in: 'path',
            name: 'appsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RepairApplicationRequestSchema } } },
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

export const getV1betaProjectsProjectsIdLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/projects/{projectsId}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'appengine.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).',
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
              'A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `name`. The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'projectsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaProjectsProjectsIdLocationsLocationsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/projects/{projectsId}/locations/{locationsId}',
  tags: ['projects'],
  description: 'Gets information about a location.',
  operationId: 'appengine.projects.locations.get',
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
      projectsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. Resource name for the location.',
            in: 'path',
            name: 'projectsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `projectsId`.',
            in: 'path',
            name: 'locationsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsRoute = createRoute({
  method: 'post',
  path: '/v1beta/projects/{projectsId}/locations/{locationsId}/applications',
  tags: ['projects'],
  description:
    'Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).',
  operationId: 'appengine.projects.locations.applications.create',
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
      projectsId: z
        .string()
        .openapi({
          param: {
            description:
              'Part of `parent`. The project and location in which the application should be created, specified in the format projects/*/locations/*',
            in: 'path',
            name: 'projectsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `parent`. See documentation of `projectsId`.',
            in: 'path',
            name: 'locationsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationSchema } } },
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

export const getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRoute =
  createRoute({
    method: 'get',
    path: '/v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}',
    tags: ['projects'],
    description: 'Gets information about an application.',
    operationId: 'appengine.projects.locations.applications.get',
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
        projectsId: z
          .string()
          .openapi({
            param: {
              description:
                'Part of `name`. Name of the Application resource to get. Example: apps/myapp.',
              in: 'path',
              name: 'projectsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'locationsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        applicationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'applicationsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ApplicationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
    ],
  })

export const postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairRoute =
  createRoute({
    method: 'post',
    path: '/v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}:repair',
    tags: ['projects'],
    description:
      'Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.',
    operationId: 'appengine.projects.locations.applications.repair',
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
        projectsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. Name of the application to repair. Example: apps/myapp',
              in: 'path',
              name: 'projectsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'locationsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        applicationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'applicationsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RepairApplicationRequestSchema } } },
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

export const getV1betaProjectsProjectsIdLocationsLocationsIdOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/projects/{projectsId}/locations/{locationsId}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.",
  operationId: 'appengine.projects.locations.operations.list',
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
      projectsId: z
        .string()
        .openapi({
          param: {
            description: "Part of `name`. The name of the operation's parent resource.",
            in: 'path',
            name: 'projectsId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationsId: z
        .string()
        .openapi({
          param: {
            description: 'Part of `name`. See documentation of `projectsId`.',
            in: 'path',
            name: 'locationsId',
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
      Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdRoute =
  createRoute({
    method: 'get',
    path: '/v1beta/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}',
    tags: ['projects'],
    description:
      'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
    operationId: 'appengine.projects.locations.operations.get',
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
        projectsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. The name of the operation resource.',
              in: 'path',
              name: 'projectsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'locationsId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        operationsId: z
          .string()
          .openapi({
            param: {
              description: 'Part of `name`. See documentation of `projectsId`.',
              in: 'path',
              name: 'operationsId',
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
        Oauth2: ['https://www.googleapis.com/auth/appengine.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/appengine.admin'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      },
    ],
  })
