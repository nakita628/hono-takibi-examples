import { createRoute, z } from '@hono/zod-openapi'

const PolicyNameSchema = z.string().openapi('PolicyName')

const CookieNameSchema = z.string().openapi('CookieName')

const AppCookieStickinessPolicySchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.',
        }),
    ).exactOptional(),
    CookieName: CookieNameSchema.and(
      z.any().openapi({ description: 'The name of the application cookie used for stickiness.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a policy for application-controlled session stickiness.',
    required: [],
  })
  .openapi('AppCookieStickinessPolicy')

const AppCookieStickinessPoliciesSchema = z
  .array(AppCookieStickinessPolicySchema)
  .openapi('AppCookieStickinessPolicies')

const CookieExpirationPeriodSchema = z.int().openapi('CookieExpirationPeriod')

const LBCookieStickinessPolicySchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the policy. This name must be unique within the set of policies for this load balancer.',
        }),
    ).exactOptional(),
    CookieExpirationPeriod: CookieExpirationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a policy for duration-based session stickiness.',
    required: [],
  })
  .openapi('LBCookieStickinessPolicy')

const LBCookieStickinessPoliciesSchema = z
  .array(LBCookieStickinessPolicySchema)
  .openapi('LBCookieStickinessPolicies')

const PolicyNamesSchema = z.array(PolicyNameSchema).openapi('PolicyNames')

type PoliciesType = {
  AppCookieStickinessPolicies?: z.infer<typeof AppCookieStickinessPoliciesSchema> & {
    [key: string]: unknown
  }
  LBCookieStickinessPolicies?: z.infer<typeof LBCookieStickinessPoliciesSchema> & {
    [key: string]: unknown
  }
  OtherPolicies?: z.infer<typeof PolicyNamesSchema> & { [key: string]: unknown }
}

const AddTagsOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of AddTags.' })
  .openapi('AddTagsOutput')

const AccessPointNameSchema = z.string().openapi('AccessPointName')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Key'], description: 'Information about a tag.' })
  .openapi('Tag')

const AccessPointNotFoundExceptionSchema = z.any().openapi('AccessPointNotFoundException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const DuplicateTagKeysExceptionSchema = z.any().openapi('DuplicateTagKeysException')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const SecurityGroupsSchema = z.array(SecurityGroupIdSchema).openapi('SecurityGroups')

const ApplySecurityGroupsToLoadBalancerOutputSchema = z
  .object({
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description: 'The IDs of the security groups associated with the load balancer.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { SecurityGroups: ['sg-fc448899'] },
    description: 'Contains the output of ApplySecurityGroupsToLoadBalancer.',
    required: [],
  })
  .openapi('ApplySecurityGroupsToLoadBalancerOutput')

const InvalidConfigurationRequestExceptionSchema = z
  .any()
  .openapi('InvalidConfigurationRequestException')

const InvalidSecurityGroupExceptionSchema = z.any().openapi('InvalidSecurityGroupException')

const SubnetIdSchema = z.string().openapi('SubnetId')

const SubnetsSchema = z.array(SubnetIdSchema).openapi('Subnets')

const AttachLoadBalancerToSubnetsOutputSchema = z
  .object({
    Subnets: SubnetsSchema.and(
      z.any().openapi({ description: 'The IDs of the subnets attached to the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Subnets: ['subnet-15aaab61', 'subnet-0ecac448'] },
    description: 'Contains the output of AttachLoadBalancerToSubnets.',
    required: [],
  })
  .openapi('AttachLoadBalancerToSubnetsOutput')

const SubnetNotFoundExceptionSchema = z.any().openapi('SubnetNotFoundException')

const InvalidSubnetExceptionSchema = z.any().openapi('InvalidSubnetException')

const HealthCheckTargetSchema = z.string().openapi('HealthCheckTarget')

const HealthCheckIntervalSchema = z.int().min(5).max(300).openapi('HealthCheckInterval')

const HealthCheckTimeoutSchema = z.int().min(2).max(60).openapi('HealthCheckTimeout')

const UnhealthyThresholdSchema = z.int().min(2).max(10).openapi('UnhealthyThreshold')

const HealthyThresholdSchema = z.int().min(2).max(10).openapi('HealthyThreshold')

const HealthCheckSchema = z
  .object({
    Target: HealthCheckTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p> <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p> <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p> <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p> <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>',
        }),
    ),
    Interval: HealthCheckIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate interval, in seconds, between health checks of an individual instance.',
        }),
    ),
    Timeout: HealthCheckTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time, in seconds, during which no response means a failed health check.</p> <p>This value must be less than the <code>Interval</code> value.</p>',
        }),
    ),
    UnhealthyThreshold: UnhealthyThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.',
        }),
    ),
    HealthyThreshold: HealthyThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.',
        }),
    ),
  })
  .openapi({
    required: ['Target', 'Interval', 'Timeout', 'UnhealthyThreshold', 'HealthyThreshold'],
    description: 'Information about a health check.',
  })
  .openapi('HealthCheck')

const ConfigureHealthCheckOutputSchema = z
  .object({
    HealthCheck: HealthCheckSchema.and(
      z.any().openapi({ description: 'The updated health check.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      HealthCheck: {
        HealthyThreshold: 2,
        Interval: 30,
        Target: 'HTTP:80/png',
        Timeout: 3,
        UnhealthyThreshold: 2,
      },
    },
    description: 'Contains the output of ConfigureHealthCheck.',
    required: [],
  })
  .openapi('ConfigureHealthCheckOutput')

const CreateAppCookieStickinessPolicyOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output for CreateAppCookieStickinessPolicy.' })
  .openapi('CreateAppCookieStickinessPolicyOutput')

const DuplicatePolicyNameExceptionSchema = z.any().openapi('DuplicatePolicyNameException')

const TooManyPoliciesExceptionSchema = z.any().openapi('TooManyPoliciesException')

const CreateLBCookieStickinessPolicyOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output for CreateLBCookieStickinessPolicy.' })
  .openapi('CreateLBCookieStickinessPolicyOutput')

const DNSNameSchema = z.string().openapi('DNSName')

const CreateAccessPointOutputSchema = z
  .object({
    DNSName: DNSNameSchema.and(
      z.any().openapi({ description: 'The DNS name of the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { DNSName: 'internal-my-load-balancer-123456789.us-west-2.elb.amazonaws.com' },
    description: 'Contains the output for CreateLoadBalancer.',
    required: [],
  })
  .openapi('CreateAccessPointOutput')

const ProtocolSchema = z.string().openapi('Protocol')

const AccessPointPortSchema = z.int().openapi('AccessPointPort')

const InstancePortSchema = z.int().min(1).max(65535).openapi('InstancePort')

const SSLCertificateIdSchema = z.string().openapi('SSLCertificateId')

const ListenerSchema = z
  .object({
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.',
        }),
    ),
    LoadBalancerPort: AccessPointPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.',
        }),
    ),
    InstanceProtocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>",
        }),
    ).exactOptional(),
    InstancePort: InstancePortSchema.and(
      z.any().openapi({ description: 'The port on which the instance is listening.' }),
    ),
    SSLCertificateId: SSLCertificateIdSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the server certificate.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
    description:
      '<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  })
  .openapi('Listener')

const AvailabilityZoneSchema = z.string().openapi('AvailabilityZone')

const DuplicateAccessPointNameExceptionSchema = z.any().openapi('DuplicateAccessPointNameException')

const TooManyAccessPointsExceptionSchema = z.any().openapi('TooManyAccessPointsException')

const CertificateNotFoundExceptionSchema = z.any().openapi('CertificateNotFoundException')

const InvalidSchemeExceptionSchema = z.any().openapi('InvalidSchemeException')

const UnsupportedProtocolExceptionSchema = z.any().openapi('UnsupportedProtocolException')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const CreateLoadBalancerListenerOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the parameters for CreateLoadBalancerListener.' })
  .openapi('CreateLoadBalancerListenerOutput')

const DuplicateListenerExceptionSchema = z.any().openapi('DuplicateListenerException')

const CreateLoadBalancerPolicyOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of CreateLoadBalancerPolicy.' })
  .openapi('CreateLoadBalancerPolicyOutput')

const AttributeNameSchema = z.string().openapi('AttributeName')

const AttributeValueSchema = z.string().openapi('AttributeValue')

const PolicyAttributeSchema = z
  .object({
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute.' }),
    ).exactOptional(),
    AttributeValue: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy attribute.', required: [] })
  .openapi('PolicyAttribute')

const PolicyTypeNotFoundExceptionSchema = z.any().openapi('PolicyTypeNotFoundException')

const DeleteAccessPointOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of DeleteLoadBalancer.' })
  .openapi('DeleteAccessPointOutput')

const DeleteLoadBalancerListenerOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of DeleteLoadBalancerListeners.' })
  .openapi('DeleteLoadBalancerListenerOutput')

const DeleteLoadBalancerPolicyOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of DeleteLoadBalancerPolicy.' })
  .openapi('DeleteLoadBalancerPolicyOutput')

const InstanceIdSchema = z.string().openapi('InstanceId')

const InstanceSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The instance ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The ID of an EC2 instance.', required: [] })
  .openapi('Instance')

const InstancesSchema = z.array(InstanceSchema).openapi('Instances')

const DeregisterEndPointsOutputSchema = z
  .object({
    Instances: InstancesSchema.and(
      z
        .any()
        .openapi({ description: 'The remaining instances registered with the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Instances: [{ InstanceId: 'i-207d9717' }, { InstanceId: 'i-afefb49b' }] },
    description: 'Contains the output of DeregisterInstancesFromLoadBalancer.',
    required: [],
  })
  .openapi('DeregisterEndPointsOutput')

const InvalidEndPointExceptionSchema = z.any().openapi('InvalidEndPointException')

const NameSchema = z.string().openapi('Name')

const MaxSchema = z.string().openapi('Max')

const LimitSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the limit. The possible values are:</p> <ul> <li> <p>classic-listeners</p> </li> <li> <p>classic-load-balancers</p> </li> <li> <p>classic-registered-instances</p> </li> </ul>',
        }),
    ).exactOptional(),
    Max: MaxSchema.and(
      z.any().openapi({ description: 'The maximum value of the limit.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an Elastic Load Balancing resource limit for your AWS account.',
    required: [],
  })
  .openapi('Limit')

const LimitsSchema = z.array(LimitSchema).openapi('Limits')

const MarkerSchema = z.string().openapi('Marker')

const DescribeAccountLimitsOutputSchema = z
  .object({
    Limits: LimitsSchema.and(
      z.any().openapi({ description: 'Information about the limits.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountLimitsOutput')

const StateSchema = z.string().openapi('State')

const ReasonCodeSchema = z.string().openapi('ReasonCode')

const DescriptionSchema = z.string().openapi('Description')

const InstanceStateSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The ID of the instance.' }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the instance.</p> <p>Valid values: <code>InService</code> | <code>OutOfService</code> | <code>Unknown</code> </p>',
        }),
    ).exactOptional(),
    ReasonCode: ReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the cause of <code>OutOfService</code> instances. Specifically, whether the cause is Elastic Load Balancing or the instance.</p> <p>Valid values: <code>ELB</code> | <code>Instance</code> | <code>N/A</code> </p>',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A description of the instance state. This string can contain one or more of the following messages.</p> <ul> <li> <p> <code>N/A</code> </p> </li> <li> <p> <code>A transient error occurred. Please try again later.</code> </p> </li> <li> <p> <code>Instance has failed at least the UnhealthyThreshold number of health checks consecutively.</code> </p> </li> <li> <p> <code>Instance has not passed the configured HealthyThreshold number of health checks consecutively.</code> </p> </li> <li> <p> <code>Instance registration is still in progress.</code> </p> </li> <li> <p> <code>Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to.</code> </p> </li> <li> <p> <code>Instance is not currently registered with the LoadBalancer.</code> </p> </li> <li> <p> <code>Instance deregistration currently in progress.</code> </p> </li> <li> <p> <code>Disable Availability Zone is currently in progress.</code> </p> </li> <li> <p> <code>Instance is in pending state.</code> </p> </li> <li> <p> <code>Instance is in stopped state.</code> </p> </li> <li> <p> <code>Instance is in terminated state.</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the state of an EC2 instance.', required: [] })
  .openapi('InstanceState')

const InstanceStatesSchema = z.array(InstanceStateSchema).openapi('InstanceStates')

const DescribeEndPointStateOutputSchema = z
  .object({
    InstanceStates: InstanceStatesSchema.and(
      z.any().openapi({ description: 'Information about the health of the instances.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      InstanceStates: [
        { Description: 'N/A', InstanceId: 'i-207d9717', ReasonCode: 'N/A', State: 'InService' },
        { Description: 'N/A', InstanceId: 'i-afefb49b', ReasonCode: 'N/A', State: 'InService' },
      ],
    },
    description: 'Contains the output for DescribeInstanceHealth.',
    required: [],
  })
  .openapi('DescribeEndPointStateOutput')

const CrossZoneLoadBalancingEnabledSchema = z.boolean().openapi('CrossZoneLoadBalancingEnabled')

const CrossZoneLoadBalancingSchema = z
  .object({
    Enabled: CrossZoneLoadBalancingEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether cross-zone load balancing is enabled for the load balancer.',
        }),
    ),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Information about the <code>CrossZoneLoadBalancing</code> attribute.',
  })
  .openapi('CrossZoneLoadBalancing')

const AccessLogEnabledSchema = z.boolean().openapi('AccessLogEnabled')

const S3BucketNameSchema = z.string().openapi('S3BucketName')

const AccessLogIntervalSchema = z.int().openapi('AccessLogInterval')

const AccessLogPrefixSchema = z.string().openapi('AccessLogPrefix')

const AccessLogSchema = z
  .object({
    Enabled: AccessLogEnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether access logs are enabled for the load balancer.',
        }),
    ),
    S3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon S3 bucket where the access logs are stored.',
        }),
    ).exactOptional(),
    EmitInterval: AccessLogIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p> <p>Default: 60 minutes</p>',
        }),
    ).exactOptional(),
    S3BucketPrefix: AccessLogPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>. If the prefix is not provided, the log is placed at the root level of the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Information about the <code>AccessLog</code> attribute.',
  })
  .openapi('AccessLog')

const ConnectionDrainingEnabledSchema = z.boolean().openapi('ConnectionDrainingEnabled')

const ConnectionDrainingTimeoutSchema = z.int().openapi('ConnectionDrainingTimeout')

const ConnectionDrainingSchema = z
  .object({
    Enabled: ConnectionDrainingEnabledSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether connection draining is enabled for the load balancer.',
        }),
    ),
    Timeout: ConnectionDrainingTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time, in seconds, to keep the existing connections open before deregistering the instances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Information about the <code>ConnectionDraining</code> attribute.',
  })
  .openapi('ConnectionDraining')

const IdleTimeoutSchema = z.int().min(1).max(3600).openapi('IdleTimeout')

const ConnectionSettingsSchema = z
  .object({
    IdleTimeout: IdleTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.',
        }),
    ),
  })
  .openapi({
    required: ['IdleTimeout'],
    description: 'Information about the <code>ConnectionSettings</code> attribute.',
  })
  .openapi('ConnectionSettings')

const AdditionalAttributeKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9.]+$/)
  .max(256)
  .openapi('AdditionalAttributeKey')

const AdditionalAttributeValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9.]+$/)
  .max(256)
  .openapi('AdditionalAttributeValue')

const AdditionalAttributeSchema = z
  .object({
    Key: AdditionalAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the attribute.</p> <p>The following attribute is supported.</p> <ul> <li> <p> <code>elb.http.desyncmitigationmode</code> - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are <code>monitor</code>, <code>defensive</code>, and <code>strictest</code>. The default is <code>defensive</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Value: AdditionalAttributeValueSchema.and(
      z.any().openapi({ description: 'This value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about additional load balancer attributes.', required: [] })
  .openapi('AdditionalAttribute')

const AdditionalAttributesSchema = z
  .array(AdditionalAttributeSchema)
  .max(10)
  .openapi('AdditionalAttributes')

const LoadBalancerAttributesSchema = z
  .object({
    CrossZoneLoadBalancing: CrossZoneLoadBalancingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    AccessLog: AccessLogSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    ConnectionDraining: ConnectionDrainingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    ConnectionSettings: ConnectionSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p> <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    AdditionalAttributes: AdditionalAttributesSchema.and(
      z.any().openapi({ description: 'Any additional attributes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The attributes for a load balancer.', required: [] })
  .openapi('LoadBalancerAttributes')

const DescribeLoadBalancerAttributesOutputSchema = z
  .object({
    LoadBalancerAttributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'Information about the load balancer attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      LoadBalancerAttributes: {
        AccessLog: { Enabled: false },
        ConnectionDraining: { Enabled: false, Timeout: 300 },
        ConnectionSettings: { IdleTimeout: 60 },
        CrossZoneLoadBalancing: { Enabled: false },
      },
    },
    description: 'Contains the output of DescribeLoadBalancerAttributes.',
    required: [],
  })
  .openapi('DescribeLoadBalancerAttributesOutput')

const LoadBalancerAttributeNotFoundExceptionSchema = z
  .any()
  .openapi('LoadBalancerAttributeNotFoundException')

const PolicyTypeNameSchema = z.string().openapi('PolicyTypeName')

const PolicyAttributeDescriptionSchema = z
  .object({
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute.' }),
    ).exactOptional(),
    AttributeValue: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy attribute.', required: [] })
  .openapi('PolicyAttributeDescription')

const PolicyAttributeDescriptionsSchema = z
  .array(PolicyAttributeDescriptionSchema)
  .openapi('PolicyAttributeDescriptions')

const PolicyDescriptionSchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the policy.' }),
    ).exactOptional(),
    PolicyTypeName: PolicyTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the policy type.' }),
    ).exactOptional(),
    PolicyAttributeDescriptions: PolicyAttributeDescriptionsSchema.and(
      z.any().openapi({ description: 'The policy attributes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy.', required: [] })
  .openapi('PolicyDescription')

const PolicyDescriptionsSchema = z.array(PolicyDescriptionSchema).openapi('PolicyDescriptions')

const DescribeLoadBalancerPoliciesOutputSchema = z
  .object({
    PolicyDescriptions: PolicyDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the policies.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      PolicyDescriptions: [
        {
          PolicyAttributeDescriptions: [
            { AttributeName: 'PublicKeyPolicyName', AttributeValue: 'my-PublicKey-policy' },
          ],
          PolicyName: 'my-authentication-policy',
          PolicyTypeName: 'BackendServerAuthenticationPolicyType',
        },
      ],
    },
    description: 'Contains the output of DescribeLoadBalancerPolicies.',
    required: [],
  })
  .openapi('DescribeLoadBalancerPoliciesOutput')

const PolicyNotFoundExceptionSchema = z.any().openapi('PolicyNotFoundException')

const AttributeTypeSchema = z.string().openapi('AttributeType')

const DefaultValueSchema = z.string().openapi('DefaultValue')

const CardinalitySchema = z.string().openapi('Cardinality')

const PolicyAttributeTypeDescriptionSchema = z
  .object({
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute.' }),
    ).exactOptional(),
    AttributeType: AttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the attribute. For example, <code>Boolean</code> or <code>Integer</code>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the attribute.' }),
    ).exactOptional(),
    DefaultValue: DefaultValueSchema.and(
      z.any().openapi({ description: 'The default value of the attribute, if applicable.' }),
    ).exactOptional(),
    Cardinality: CardinalitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cardinality of the attribute.</p> <p>Valid values:</p> <ul> <li> <p>ONE(1) : Single value required</p> </li> <li> <p>ZERO_OR_ONE(0..1) : Up to one value is allowed</p> </li> <li> <p>ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed</p> </li> <li> <p>ONE_OR_MORE(1..*0) : Required. Multiple values are allowed</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy attribute type.', required: [] })
  .openapi('PolicyAttributeTypeDescription')

const PolicyAttributeTypeDescriptionsSchema = z
  .array(PolicyAttributeTypeDescriptionSchema)
  .openapi('PolicyAttributeTypeDescriptions')

const PolicyTypeDescriptionSchema = z
  .object({
    PolicyTypeName: PolicyTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the policy type.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the policy type.' }),
    ).exactOptional(),
    PolicyAttributeTypeDescriptions: PolicyAttributeTypeDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the policy attributes associated with the policies defined by Elastic Load Balancing.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy type.', required: [] })
  .openapi('PolicyTypeDescription')

const PolicyTypeDescriptionsSchema = z
  .array(PolicyTypeDescriptionSchema)
  .openapi('PolicyTypeDescriptions')

const DescribeLoadBalancerPolicyTypesOutputSchema = z
  .object({
    PolicyTypeDescriptions: PolicyTypeDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the policy types.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      PolicyTypeDescriptions: [
        {
          Description:
            'Policy that controls whether to include the IP address and port of the originating request for TCP messages. This policy operates on TCP listeners only.',
          PolicyAttributeTypeDescriptions: [
            { AttributeName: 'ProxyProtocol', AttributeType: 'Boolean', Cardinality: 'ONE' },
          ],
          PolicyTypeName: 'ProxyProtocolPolicyType',
        },
      ],
    },
    description: 'Contains the output of DescribeLoadBalancerPolicyTypes.',
    required: [],
  })
  .openapi('DescribeLoadBalancerPolicyTypesOutput')

const ListenerDescriptionSchema = z
  .object({
    Listener: ListenerSchema.and(z.any().openapi({ description: 'The listener.' })).exactOptional(),
    PolicyNames: PolicyNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'The policies. If there are no policies enabled, the list is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The policies enabled for a listener.', required: [] })
  .openapi('ListenerDescription')

const ListenerDescriptionsSchema = z
  .array(ListenerDescriptionSchema)
  .openapi('ListenerDescriptions')

const PoliciesSchema: z.ZodType<PoliciesType> = z
  .lazy(() =>
    z
      .object({
        AppCookieStickinessPolicies: AppCookieStickinessPoliciesSchema.and(
          z
            .any()
            .openapi({
              description:
                'The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.',
            }),
        ).exactOptional(),
        LBCookieStickinessPolicies: LBCookieStickinessPoliciesSchema.and(
          z
            .any()
            .openapi({
              description:
                'The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.',
            }),
        ).exactOptional(),
        OtherPolicies: PolicyNamesSchema.and(
          z.any().openapi({ description: 'The policies other than the stickiness policies.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'The policies for a load balancer.', required: [] }),
  )
  .openapi('Policies')

const BackendServerDescriptionSchema = z
  .object({
    InstancePort: InstancePortSchema.and(
      z.any().openapi({ description: 'The port on which the EC2 instance is listening.' }),
    ).exactOptional(),
    PolicyNames: PolicyNamesSchema.and(
      z.any().openapi({ description: 'The names of the policies enabled for the EC2 instance.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the configuration of an EC2 instance.', required: [] })
  .openapi('BackendServerDescription')

const BackendServerDescriptionsSchema = z
  .array(BackendServerDescriptionSchema)
  .openapi('BackendServerDescriptions')

const AvailabilityZonesSchema = z.array(AvailabilityZoneSchema).openapi('AvailabilityZones')

const VPCIdSchema = z.string().openapi('VPCId')

const SecurityGroupOwnerAliasSchema = z.string().openapi('SecurityGroupOwnerAlias')

const SecurityGroupNameSchema = z.string().openapi('SecurityGroupName')

const SourceSecurityGroupSchema = z
  .object({
    OwnerAlias: SecurityGroupOwnerAliasSchema.and(
      z.any().openapi({ description: 'The owner of the security group.' }),
    ).exactOptional(),
    GroupName: SecurityGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the security group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a source security group.', required: [] })
  .openapi('SourceSecurityGroup')

const CreatedTimeSchema = z.iso.datetime({ offset: true }).openapi('CreatedTime')

const LoadBalancerSchemeSchema = z.string().openapi('LoadBalancerScheme')

const LoadBalancerDescriptionSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ).exactOptional(),
    DNSName: DNSNameSchema.and(
      z.any().openapi({ description: 'The DNS name of the load balancer.' }),
    ).exactOptional(),
    CanonicalHostedZoneName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS name of the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html">Configure a Custom Domain Name</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    CanonicalHostedZoneNameID: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Route 53 hosted zone for the load balancer.',
        }),
    ).exactOptional(),
    ListenerDescriptions: ListenerDescriptionsSchema.and(
      z.any().openapi({ description: 'The listeners for the load balancer.' }),
    ).exactOptional(),
    Policies: PoliciesSchema.and(
      z.any().openapi({ description: 'The policies defined for the load balancer.' }),
    ).exactOptional(),
    BackendServerDescriptions: BackendServerDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about your EC2 instances.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'The Availability Zones for the load balancer.' }),
    ).exactOptional(),
    Subnets: SubnetsSchema.and(
      z.any().openapi({ description: 'The IDs of the subnets for the load balancer.' }),
    ).exactOptional(),
    VPCId: VPCIdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC for the load balancer.' }),
    ).exactOptional(),
    Instances: InstancesSchema.and(
      z.any().openapi({ description: 'The IDs of the instances for the load balancer.' }),
    ).exactOptional(),
    HealthCheck: HealthCheckSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the health checks conducted on the load balancer.',
        }),
    ).exactOptional(),
    SourceSecurityGroup: SourceSecurityGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.',
        }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security groups for the load balancer. Valid only for load balancers in a VPC.',
        }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The date and time the load balancer was created.' }),
    ).exactOptional(),
    Scheme: LoadBalancerSchemeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of load balancer. Valid only for load balancers in a VPC.</p> <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public DNS name that resolves to a public IP address.</p> <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name that resolves to a private IP address.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a load balancer.', required: [] })
  .openapi('LoadBalancerDescription')

const LoadBalancerDescriptionsSchema = z
  .array(LoadBalancerDescriptionSchema)
  .openapi('LoadBalancerDescriptions')

const DescribeAccessPointsOutputSchema = z
  .object({
    LoadBalancerDescriptions: LoadBalancerDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the load balancers.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      LoadBalancerDescriptions: [
        {
          AvailabilityZones: ['us-west-2a'],
          BackendServerDescriptions: [
            { InstancePort: 80, PolicyNames: ['my-ProxyProtocol-policy'] },
          ],
          CanonicalHostedZoneName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com',
          CanonicalHostedZoneNameID: 'Z3DZXE0EXAMPLE',
          CreatedTime: '2015-03-19T03:24:02.650Z',
          DNSName: 'my-load-balancer-1234567890.us-west-2.elb.amazonaws.com',
          HealthCheck: {
            HealthyThreshold: 2,
            Interval: 30,
            Target: 'HTTP:80/png',
            Timeout: 3,
            UnhealthyThreshold: 2,
          },
          Instances: [{ InstanceId: 'i-207d9717' }, { InstanceId: 'i-afefb49b' }],
          ListenerDescriptions: [
            {
              Listener: {
                InstancePort: 80,
                InstanceProtocol: 'HTTP',
                LoadBalancerPort: 80,
                Protocol: 'HTTP',
              },
              PolicyNames: [],
            },
            {
              Listener: {
                InstancePort: 443,
                InstanceProtocol: 'HTTPS',
                LoadBalancerPort: 443,
                Protocol: 'HTTPS',
                SSLCertificateId: 'arn:aws:iam::123456789012:server-certificate/my-server-cert',
              },
              PolicyNames: ['ELBSecurityPolicy-2015-03'],
            },
          ],
          LoadBalancerName: 'my-load-balancer',
          Policies: {
            AppCookieStickinessPolicies: [],
            LBCookieStickinessPolicies: [
              { CookieExpirationPeriod: 60, PolicyName: 'my-duration-cookie-policy' },
            ],
            OtherPolicies: [
              'my-PublicKey-policy',
              'my-authentication-policy',
              'my-SSLNegotiation-policy',
              'my-ProxyProtocol-policy',
              'ELBSecurityPolicy-2015-03',
            ],
          },
          Scheme: 'internet-facing',
          SecurityGroups: ['sg-a61988c3'],
          SourceSecurityGroup: { GroupName: 'my-elb-sg', OwnerAlias: '123456789012' },
          Subnets: ['subnet-15aaab61'],
          VPCId: 'vpc-a01106c2',
        },
      ],
    },
    description: 'Contains the parameters for DescribeLoadBalancers.',
    required: [],
  })
  .openapi('DescribeAccessPointsOutput')

const DependencyThrottleExceptionSchema = z.any().openapi('DependencyThrottleException')

const TagListSchema = z.array(TagSchema).min(1).openapi('TagList')

const TagDescriptionSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tags.' })).exactOptional(),
  })
  .openapi({ description: 'The tags associated with a load balancer.', required: [] })
  .openapi('TagDescription')

const TagDescriptionsSchema = z.array(TagDescriptionSchema).openapi('TagDescriptions')

const DescribeTagsOutputSchema = z
  .object({
    TagDescriptions: TagDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TagDescriptions: [
        {
          LoadBalancerName: 'my-load-balancer',
          Tags: [
            { Key: 'project', Value: 'lima' },
            { Key: 'department', Value: 'digital-media' },
          ],
        },
      ],
    },
    description: 'Contains the output for DescribeTags.',
    required: [],
  })
  .openapi('DescribeTagsOutput')

const DetachLoadBalancerFromSubnetsOutputSchema = z
  .object({
    Subnets: SubnetsSchema.and(
      z.any().openapi({ description: 'The IDs of the remaining subnets for the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Subnets: ['subnet-15aaab61'] },
    description: 'Contains the output of DetachLoadBalancerFromSubnets.',
    required: [],
  })
  .openapi('DetachLoadBalancerFromSubnetsOutput')

const RemoveAvailabilityZonesOutputSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'The remaining Availability Zones for the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { AvailabilityZones: ['us-west-2b'] },
    description: 'Contains the output for DisableAvailabilityZonesForLoadBalancer.',
    required: [],
  })
  .openapi('RemoveAvailabilityZonesOutput')

const AddAvailabilityZonesOutputSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({ description: 'The updated list of Availability Zones for the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { AvailabilityZones: ['us-west-2a', 'us-west-2b'] },
    description: 'Contains the output of EnableAvailabilityZonesForLoadBalancer.',
    required: [],
  })
  .openapi('AddAvailabilityZonesOutput')

const ModifyLoadBalancerAttributesOutputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ).exactOptional(),
    LoadBalancerAttributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'Information about the load balancer attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      LoadBalancerAttributes: { ConnectionDraining: { Enabled: true, Timeout: 300 } },
      LoadBalancerName: 'my-load-balancer',
    },
    description: 'Contains the output of ModifyLoadBalancerAttributes.',
    required: [],
  })
  .openapi('ModifyLoadBalancerAttributesOutput')

const RegisterEndPointsOutputSchema = z
  .object({
    Instances: InstancesSchema.and(
      z.any().openapi({ description: 'The updated list of instances for the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Instances: [
        { InstanceId: 'i-d6f6fae3' },
        { InstanceId: 'i-207d9717' },
        { InstanceId: 'i-afefb49b' },
      ],
    },
    description: 'Contains the output of RegisterInstancesWithLoadBalancer.',
    required: [],
  })
  .openapi('RegisterEndPointsOutput')

const RemoveTagsOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of RemoveTags.' })
  .openapi('RemoveTagsOutput')

const TagKeyOnlySchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The name of the key.' })).exactOptional(),
  })
  .openapi({ description: 'The key of a tag.', required: [] })
  .openapi('TagKeyOnly')

const SetLoadBalancerListenerSSLCertificateOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of SetLoadBalancerListenerSSLCertificate.' })
  .openapi('SetLoadBalancerListenerSSLCertificateOutput')

const ListenerNotFoundExceptionSchema = z.any().openapi('ListenerNotFoundException')

const SetLoadBalancerPoliciesForBackendServerOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of SetLoadBalancerPoliciesForBackendServer.' })
  .openapi('SetLoadBalancerPoliciesForBackendServerOutput')

const SetLoadBalancerPoliciesOfListenerOutputSchema = z
  .object({})
  .openapi({ description: 'Contains the output of SetLoadBalancePoliciesOfListener.' })
  .openapi('SetLoadBalancerPoliciesOfListenerOutput')

const AddAvailabilityZonesInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zones. These must be in the same region as the load balancer.',
        }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'AvailabilityZones'],
    title: 'AddAvailabilityZonesInput',
    description: 'Contains the parameters for EnableAvailabilityZonesForLoadBalancer.',
  })
  .openapi('AddAvailabilityZonesInput')

const LoadBalancerNamesSchema = z.array(AccessPointNameSchema).openapi('LoadBalancerNames')

const AddTagsInputSchema = z
  .object({
    LoadBalancerNames: LoadBalancerNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the load balancer. You can specify one load balancer only.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tags.' })),
  })
  .openapi({
    required: ['LoadBalancerNames', 'Tags'],
    title: 'AddTagsInput',
    description: 'Contains the parameters for AddTags.',
  })
  .openapi('AddTagsInput')

const ApplySecurityGroupsToLoadBalancerInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.',
        }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'SecurityGroups'],
    title: 'ApplySecurityGroupsToLoadBalancerInput',
    description: 'Contains the parameters for ApplySecurityGroupsToLoadBalancer.',
  })
  .openapi('ApplySecurityGroupsToLoadBalancerInput')

const AttachLoadBalancerToSubnetsInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Subnets: SubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the subnets to add. You can add only one subnet per Availability Zone.',
        }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'Subnets'],
    title: 'AttachLoadBalancerToSubnetsInput',
    description: 'Contains the parameters for AttachLoaBalancerToSubnets.',
  })
  .openapi('AttachLoadBalancerToSubnetsInput')

const ConfigureHealthCheckInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    HealthCheck: HealthCheckSchema.and(
      z.any().openapi({ description: 'The configuration information.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'HealthCheck'],
    title: 'ConfigureHealthCheckInput',
    description: 'Contains the parameters for ConfigureHealthCheck.',
  })
  .openapi('ConfigureHealthCheckInput')

const ListenersSchema = z.array(ListenerSchema).openapi('Listeners')

const CreateAccessPointInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the load balancer.</p> <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>',
        }),
    ),
    Listeners: ListenersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The listeners.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Availability Zones from the same region as the load balancer.</p> <p>You must specify at least one Availability Zone.</p> <p>You can add more Availability Zones after you create the load balancer using <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>',
        }),
    ).exactOptional(),
    Subnets: SubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.',
        }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({ description: 'The IDs of the security groups to assign to the load balancer.' }),
    ).exactOptional(),
    Scheme: LoadBalancerSchemeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of a load balancer. Valid only for load balancers in a VPC.</p> <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a> in the <i>Elastic Load Balancing User Guide</i>.</p> <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags to assign to the load balancer.</p> <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LoadBalancerName', 'Listeners'],
    title: 'CreateAccessPointInput',
    description: 'Contains the parameters for CreateLoadBalancer.',
  })
  .openapi('CreateAccessPointInput')

const CreateAppCookieStickinessPolicyInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.',
        }),
    ),
    CookieName: CookieNameSchema.and(
      z.any().openapi({ description: 'The name of the application cookie used for stickiness.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'PolicyName', 'CookieName'],
    title: 'CreateAppCookieStickinessPolicyInput',
    description: 'Contains the parameters for CreateAppCookieStickinessPolicy.',
  })
  .openapi('CreateAppCookieStickinessPolicyInput')

const CreateLBCookieStickinessPolicyInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.',
        }),
    ),
    CookieExpirationPeriod: CookieExpirationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LoadBalancerName', 'PolicyName'],
    title: 'CreateLBCookieStickinessPolicyInput',
    description: 'Contains the parameters for CreateLBCookieStickinessPolicy.',
  })
  .openapi('CreateLBCookieStickinessPolicyInput')

const CreateLoadBalancerListenerInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Listeners: ListenersSchema.and(z.any().openapi({ description: 'The listeners.' })),
  })
  .openapi({
    required: ['LoadBalancerName', 'Listeners'],
    title: 'CreateLoadBalancerListenerInput',
    description: 'Contains the parameters for CreateLoadBalancerListeners.',
  })
  .openapi('CreateLoadBalancerListenerInput')

const PolicyAttributesSchema = z.array(PolicyAttributeSchema).openapi('PolicyAttributes')

const CreateLoadBalancerPolicyInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.',
        }),
    ),
    PolicyTypeName: PolicyTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the base policy type. To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.',
        }),
    ),
    PolicyAttributes: PolicyAttributesSchema.and(
      z.any().openapi({ description: 'The policy attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LoadBalancerName', 'PolicyName', 'PolicyTypeName'],
    title: 'CreateLoadBalancerPolicyInput',
    description: 'Contains the parameters for CreateLoadBalancerPolicy.',
  })
  .openapi('CreateLoadBalancerPolicyInput')

const DeleteAccessPointInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName'],
    title: 'DeleteAccessPointInput',
    description: 'Contains the parameters for DeleteLoadBalancer.',
  })
  .openapi('DeleteAccessPointInput')

const PortsSchema = z.array(AccessPointPortSchema).openapi('Ports')

const DeleteLoadBalancerListenerInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    LoadBalancerPorts: PortsSchema.and(
      z.any().openapi({ description: 'The client port numbers of the listeners.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'LoadBalancerPorts'],
    title: 'DeleteLoadBalancerListenerInput',
    description: 'Contains the parameters for DeleteLoadBalancerListeners.',
  })
  .openapi('DeleteLoadBalancerListenerInput')

const DeleteLoadBalancerPolicyInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    PolicyName: PolicyNameSchema.and(z.any().openapi({ description: 'The name of the policy.' })),
  })
  .openapi({
    required: ['LoadBalancerName', 'PolicyName'],
    title: 'DeleteLoadBalancerPolicyInput',
    description: 'Contains the parameters for DeleteLoadBalancerPolicy.',
  })
  .openapi('DeleteLoadBalancerPolicyInput')

const DeregisterEndPointsInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Instances: InstancesSchema.and(z.any().openapi({ description: 'The IDs of the instances.' })),
  })
  .openapi({
    required: ['LoadBalancerName', 'Instances'],
    title: 'DeregisterEndPointsInput',
    description: 'Contains the parameters for DeregisterInstancesFromLoadBalancer.',
  })
  .openapi('DeregisterEndPointsInput')

const PageSizeSchema = z.int().min(1).max(400).openapi('PageSize')

const DescribeAccessPointsInputSchema = z
  .object({
    LoadBalancerNames: LoadBalancerNamesSchema.and(
      z.any().openapi({ description: 'The names of the load balancers.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with this call (a number from 1 to 400). The default is 400.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeAccessPointsInput',
    description: 'Contains the parameters for DescribeLoadBalancers.',
    required: [],
  })
  .openapi('DescribeAccessPointsInput')

const DescribeAccountLimitsInputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAccountLimitsInput', required: [] })
  .openapi('DescribeAccountLimitsInput')

const DescribeEndPointStateInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Instances: InstancesSchema.and(
      z.any().openapi({ description: 'The IDs of the instances.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LoadBalancerName'],
    title: 'DescribeEndPointStateInput',
    description: 'Contains the parameters for DescribeInstanceHealth.',
  })
  .openapi('DescribeEndPointStateInput')

const DescribeLoadBalancerAttributesInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName'],
    title: 'DescribeLoadBalancerAttributesInput',
    description: 'Contains the parameters for DescribeLoadBalancerAttributes.',
  })
  .openapi('DescribeLoadBalancerAttributesInput')

const DescribeLoadBalancerPoliciesInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ).exactOptional(),
    PolicyNames: PolicyNamesSchema.and(
      z.any().openapi({ description: 'The names of the policies.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeLoadBalancerPoliciesInput',
    description: 'Contains the parameters for DescribeLoadBalancerPolicies.',
    required: [],
  })
  .openapi('DescribeLoadBalancerPoliciesInput')

const PolicyTypeNamesSchema = z.array(PolicyTypeNameSchema).openapi('PolicyTypeNames')

const DescribeLoadBalancerPolicyTypesInputSchema = z
  .object({
    PolicyTypeNames: PolicyTypeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeLoadBalancerPolicyTypesInput',
    description: 'Contains the parameters for DescribeLoadBalancerPolicyTypes.',
    required: [],
  })
  .openapi('DescribeLoadBalancerPolicyTypesInput')

const LoadBalancerNamesMax20Schema = z
  .array(AccessPointNameSchema)
  .min(1)
  .max(20)
  .openapi('LoadBalancerNamesMax20')

const DescribeTagsInputSchema = z
  .object({
    LoadBalancerNames: LoadBalancerNamesMax20Schema.and(
      z.any().openapi({ description: 'The names of the load balancers.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerNames'],
    title: 'DescribeTagsInput',
    description: 'Contains the parameters for DescribeTags.',
  })
  .openapi('DescribeTagsInput')

const DetachLoadBalancerFromSubnetsInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Subnets: SubnetsSchema.and(z.any().openapi({ description: 'The IDs of the subnets.' })),
  })
  .openapi({
    required: ['LoadBalancerName', 'Subnets'],
    title: 'DetachLoadBalancerFromSubnetsInput',
    description: 'Contains the parameters for DetachLoadBalancerFromSubnets.',
  })
  .openapi('DetachLoadBalancerFromSubnetsInput')

const EndPointPortSchema = z.int().openapi('EndPointPort')

const ModifyLoadBalancerAttributesInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    LoadBalancerAttributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'The attributes for the load balancer.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'LoadBalancerAttributes'],
    title: 'ModifyLoadBalancerAttributesInput',
    description: 'Contains the parameters for ModifyLoadBalancerAttributes.',
  })
  .openapi('ModifyLoadBalancerAttributesInput')

const RegisterEndPointsInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    Instances: InstancesSchema.and(z.any().openapi({ description: 'The IDs of the instances.' })),
  })
  .openapi({
    required: ['LoadBalancerName', 'Instances'],
    title: 'RegisterEndPointsInput',
    description: 'Contains the parameters for RegisterInstancesWithLoadBalancer.',
  })
  .openapi('RegisterEndPointsInput')

const RemoveAvailabilityZonesInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'The Availability Zones.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'AvailabilityZones'],
    title: 'RemoveAvailabilityZonesInput',
    description: 'Contains the parameters for DisableAvailabilityZonesForLoadBalancer.',
  })
  .openapi('RemoveAvailabilityZonesInput')

const TagKeyListSchema = z.array(TagKeyOnlySchema).min(1).openapi('TagKeyList')

const RemoveTagsInputSchema = z
  .object({
    LoadBalancerNames: LoadBalancerNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the load balancer. You can specify a maximum of one load balancer name.',
        }),
    ),
    Tags: TagKeyListSchema.and(z.any().openapi({ description: 'The list of tag keys to remove.' })),
  })
  .openapi({
    required: ['LoadBalancerNames', 'Tags'],
    title: 'RemoveTagsInput',
    description: 'Contains the parameters for RemoveTags.',
  })
  .openapi('RemoveTagsInput')

const SetLoadBalancerListenerSSLCertificateInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    LoadBalancerPort: AccessPointPortSchema.and(
      z.any().openapi({ description: 'The port that uses the specified SSL certificate.' }),
    ),
    SSLCertificateId: SSLCertificateIdSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the SSL certificate.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'LoadBalancerPort', 'SSLCertificateId'],
    title: 'SetLoadBalancerListenerSSLCertificateInput',
    description: 'Contains the parameters for SetLoadBalancerListenerSSLCertificate.',
  })
  .openapi('SetLoadBalancerListenerSSLCertificateInput')

const SetLoadBalancerPoliciesForBackendServerInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    InstancePort: EndPointPortSchema.and(
      z.any().openapi({ description: 'The port number associated with the EC2 instance.' }),
    ),
    PolicyNames: PolicyNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.',
        }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'InstancePort', 'PolicyNames'],
    title: 'SetLoadBalancerPoliciesForBackendServerInput',
    description: 'Contains the parameters for SetLoadBalancerPoliciesForBackendServer.',
  })
  .openapi('SetLoadBalancerPoliciesForBackendServerInput')

const SetLoadBalancerPoliciesOfListenerInputSchema = z
  .object({
    LoadBalancerName: AccessPointNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ),
    LoadBalancerPort: AccessPointPortSchema.and(
      z.any().openapi({ description: 'The external port of the load balancer.' }),
    ),
    PolicyNames: PolicyNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.',
        }),
    ),
  })
  .openapi({
    required: ['LoadBalancerName', 'LoadBalancerPort', 'PolicyNames'],
    title: 'SetLoadBalancerPoliciesOfListenerInput',
    description: 'Contains the parameters for SetLoadBalancePoliciesOfListener.',
  })
  .openapi('SetLoadBalancerPoliciesOfListenerInput')

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

export const getActionAddTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=AddTags',
  description:
    '<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_AddTags',
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
      LoadBalancerNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AccessPointNameSchema),
        )
        .openapi({
          param: {
            name: 'LoadBalancerNames',
            in: 'query',
            required: true,
            description: 'The name of the load balancer. You can specify one load balancer only.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AccessPointName' } },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: true,
            description: 'The tags.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('AddTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: AddTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
  },
})

export const postActionAddTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=AddTags',
  description:
    '<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_AddTags',
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
      Action: z
        .literal('AddTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: AddTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
  },
})

export const getActionApplySecurityGroupsToLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=ApplySecurityGroupsToLoadBalancer',
  description:
    '<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_ApplySecurityGroupsToLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      SecurityGroups: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SecurityGroupIdSchema),
        )
        .openapi({
          param: {
            name: 'SecurityGroups',
            in: 'query',
            required: true,
            description:
              'The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SecurityGroupId' } },
          },
        }),
      Action: z
        .literal('ApplySecurityGroupsToLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplySecurityGroupsToLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplySecurityGroupsToLoadBalancerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
  },
})

export const postActionApplySecurityGroupsToLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=ApplySecurityGroupsToLoadBalancer',
  description:
    '<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_ApplySecurityGroupsToLoadBalancer',
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
      Action: z
        .literal('ApplySecurityGroupsToLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplySecurityGroupsToLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ApplySecurityGroupsToLoadBalancerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplySecurityGroupsToLoadBalancerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
  },
})

export const getActionAttachLoadBalancerToSubnetsRoute = createRoute({
  method: 'get',
  path: '/#Action=AttachLoadBalancerToSubnets',
  description:
    '<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_AttachLoadBalancerToSubnets',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Subnets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetIdSchema),
        )
        .openapi({
          param: {
            name: 'Subnets',
            in: 'query',
            required: true,
            description:
              'The IDs of the subnets to add. You can add only one subnet per Availability Zone.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetId' } },
          },
        }),
      Action: z
        .literal('AttachLoadBalancerToSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AttachLoadBalancerToSubnets'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AttachLoadBalancerToSubnetsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
  },
})

export const postActionAttachLoadBalancerToSubnetsRoute = createRoute({
  method: 'post',
  path: '/#Action=AttachLoadBalancerToSubnets',
  description:
    '<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_AttachLoadBalancerToSubnets',
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
      Action: z
        .literal('AttachLoadBalancerToSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AttachLoadBalancerToSubnets'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AttachLoadBalancerToSubnetsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AttachLoadBalancerToSubnetsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
  },
})

export const getActionConfigureHealthCheckRoute = createRoute({
  method: 'get',
  path: '/#Action=ConfigureHealthCheck',
  description:
    '<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_ConfigureHealthCheck',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Target', ['HealthCheck']],
          ['Interval', ['HealthCheck']],
          ['Timeout', ['HealthCheck']],
          ['UnhealthyThreshold', ['HealthCheck']],
          ['HealthyThreshold', ['HealthCheck']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          LoadBalancerName: z
            .string()
            .openapi({
              param: {
                name: 'LoadBalancerName',
                in: 'query',
                required: true,
                description: 'The name of the load balancer.',
                schema: { type: 'string' },
              },
            }),
          HealthCheck: z
            .object({
              Target: HealthCheckTargetSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p> <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p> <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p> <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p> <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>',
                  }),
              ),
              Interval: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  HealthCheckIntervalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The approximate interval, in seconds, between health checks of an individual instance.',
                    }),
                ),
              Timeout: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  HealthCheckTimeoutSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>The amount of time, in seconds, during which no response means a failed health check.</p> <p>This value must be less than the <code>Interval</code> value.</p>',
                    }),
                ),
              UnhealthyThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  UnhealthyThresholdSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.',
                    }),
                ),
              HealthyThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  HealthyThresholdSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.',
                    }),
                ),
            })
            .openapi({
              param: {
                name: 'HealthCheck',
                in: 'query',
                required: true,
                description: 'The configuration information.',
                schema: {
                  type: 'object',
                  required: [
                    'Target',
                    'Interval',
                    'Timeout',
                    'UnhealthyThreshold',
                    'HealthyThreshold',
                  ],
                  properties: {
                    Target: {
                      allOf: [
                        { $ref: '#/components/schemas/HealthCheckTarget' },
                        {
                          description:
                            '<p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p> <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p> <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p> <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p> <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>',
                        },
                      ],
                    },
                    Interval: {
                      allOf: [
                        { $ref: '#/components/schemas/HealthCheckInterval' },
                        {
                          description:
                            'The approximate interval, in seconds, between health checks of an individual instance.',
                        },
                      ],
                    },
                    Timeout: {
                      allOf: [
                        { $ref: '#/components/schemas/HealthCheckTimeout' },
                        {
                          description:
                            '<p>The amount of time, in seconds, during which no response means a failed health check.</p> <p>This value must be less than the <code>Interval</code> value.</p>',
                        },
                      ],
                    },
                    UnhealthyThreshold: {
                      allOf: [
                        { $ref: '#/components/schemas/UnhealthyThreshold' },
                        {
                          description:
                            'The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.',
                        },
                      ],
                    },
                    HealthyThreshold: {
                      allOf: [
                        { $ref: '#/components/schemas/HealthyThreshold' },
                        {
                          description:
                            'The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.',
                        },
                      ],
                    },
                  },
                  description: 'Information about a health check.',
                },
              },
              required: ['Target', 'Interval', 'Timeout', 'UnhealthyThreshold', 'HealthyThreshold'],
              description: 'Information about a health check.',
            }),
          Action: z
            .literal('ConfigureHealthCheck')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['ConfigureHealthCheck'] },
              },
            }),
          Version: z
            .literal('2012-06-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-06-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigureHealthCheckOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const postActionConfigureHealthCheckRoute = createRoute({
  method: 'post',
  path: '/#Action=ConfigureHealthCheck',
  description:
    '<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_ConfigureHealthCheck',
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
      Action: z
        .literal('ConfigureHealthCheck')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ConfigureHealthCheck'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ConfigureHealthCheckInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigureHealthCheckOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const getActionCreateAppCookieStickinessPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateAppCookieStickinessPolicy',
  description:
    '<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_CreateAppCookieStickinessPolicy',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description:
              'The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.',
            schema: { type: 'string' },
          },
        }),
      CookieName: z
        .string()
        .openapi({
          param: {
            name: 'CookieName',
            in: 'query',
            required: true,
            description: 'The name of the application cookie used for stickiness.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CreateAppCookieStickinessPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateAppCookieStickinessPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAppCookieStickinessPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    482: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionCreateAppCookieStickinessPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateAppCookieStickinessPolicy',
  description:
    '<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_CreateAppCookieStickinessPolicy',
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
      Action: z
        .literal('CreateAppCookieStickinessPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateAppCookieStickinessPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateAppCookieStickinessPolicyInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAppCookieStickinessPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    482: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionCreateLBCookieStickinessPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateLBCookieStickinessPolicy',
  description:
    '<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_CreateLBCookieStickinessPolicy',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description:
              'The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.',
            schema: { type: 'string' },
          },
        }),
      CookieExpirationPeriod: z
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
            name: 'CookieExpirationPeriod',
            in: 'query',
            required: false,
            description:
              'The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('CreateLBCookieStickinessPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLBCookieStickinessPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLBCookieStickinessPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    482: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionCreateLBCookieStickinessPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateLBCookieStickinessPolicy',
  description:
    '<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_CreateLBCookieStickinessPolicy',
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
      Action: z
        .literal('CreateLBCookieStickinessPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLBCookieStickinessPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateLBCookieStickinessPolicyInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLBCookieStickinessPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    482: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionCreateLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateLoadBalancer',
  description:
    '<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_CreateLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the load balancer.</p> <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>',
            schema: { type: 'string' },
          },
        }),
      Listeners: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Protocol: ProtocolSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.',
                    }),
                ),
                LoadBalancerPort: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    AccessPointPortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.',
                      }),
                  ),
                InstanceProtocol: ProtocolSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "<p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>",
                    }),
                ).exactOptional(),
                InstancePort: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    InstancePortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({ description: 'The port on which the instance is listening.' }),
                  ),
                SSLCertificateId: SSLCertificateIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The Amazon Resource Name (ARN) of the server certificate.',
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
                description:
                  '<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
              }),
          ),
        )
        .openapi({
          param: {
            name: 'Listeners',
            in: 'query',
            required: true,
            description:
              '<p>The listeners.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
                properties: {
                  Protocol: {
                    allOf: [
                      { $ref: '#/components/schemas/Protocol' },
                      {
                        description:
                          'The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.',
                      },
                    ],
                  },
                  LoadBalancerPort: {
                    allOf: [
                      { $ref: '#/components/schemas/AccessPointPort' },
                      {
                        description:
                          'The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.',
                      },
                    ],
                  },
                  InstanceProtocol: {
                    allOf: [
                      { $ref: '#/components/schemas/Protocol' },
                      {
                        description:
                          "<p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>",
                      },
                    ],
                  },
                  InstancePort: {
                    allOf: [
                      { $ref: '#/components/schemas/InstancePort' },
                      { description: 'The port on which the instance is listening.' },
                    ],
                  },
                  SSLCertificateId: {
                    allOf: [
                      { $ref: '#/components/schemas/SSLCertificateId' },
                      { description: 'The Amazon Resource Name (ARN) of the server certificate.' },
                    ],
                  },
                },
                description:
                  '<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
              },
            },
          },
        }),
      AvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AvailabilityZoneSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZones',
            in: 'query',
            required: false,
            description:
              '<p>One or more Availability Zones from the same region as the load balancer.</p> <p>You must specify at least one Availability Zone.</p> <p>You can add more Availability Zones after you create the load balancer using <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AvailabilityZone' } },
          },
        }),
      Subnets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Subnets',
            in: 'query',
            required: false,
            description:
              'The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetId' } },
          },
        }),
      SecurityGroups: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SecurityGroupIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroups',
            in: 'query',
            required: false,
            description: 'The IDs of the security groups to assign to the load balancer.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SecurityGroupId' } },
          },
        }),
      Scheme: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Scheme',
            in: 'query',
            required: false,
            description:
              '<p>The type of a load balancer. Valid only for load balancers in a VPC.</p> <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a> in the <i>Elastic Load Balancing User Guide</i>.</p> <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              '<p>A list of tags to assign to the load balancer.</p> <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('CreateLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAccessPointOutputSchema } },
    },
    480: {
      description: 'DuplicateAccessPointNameException',
      content: { 'text/xml': { schema: DuplicateAccessPointNameExceptionSchema } },
    },
    481: {
      description: 'TooManyAccessPointsException',
      content: { 'text/xml': { schema: TooManyAccessPointsExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    486: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
    487: {
      description: 'InvalidSchemeException',
      content: { 'text/xml': { schema: InvalidSchemeExceptionSchema } },
    },
    488: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    489: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postActionCreateLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateLoadBalancer',
  description:
    '<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_CreateLoadBalancer',
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
      Action: z
        .literal('CreateLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateAccessPointInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateAccessPointOutputSchema } },
    },
    480: {
      description: 'DuplicateAccessPointNameException',
      content: { 'text/xml': { schema: DuplicateAccessPointNameExceptionSchema } },
    },
    481: {
      description: 'TooManyAccessPointsException',
      content: { 'text/xml': { schema: TooManyAccessPointsExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    486: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
    487: {
      description: 'InvalidSchemeException',
      content: { 'text/xml': { schema: InvalidSchemeExceptionSchema } },
    },
    488: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    489: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const getActionCreateLoadBalancerListenersRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateLoadBalancerListeners',
  description:
    '<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_CreateLoadBalancerListeners',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Listeners: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Protocol: ProtocolSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.',
                    }),
                ),
                LoadBalancerPort: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    AccessPointPortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.',
                      }),
                  ),
                InstanceProtocol: ProtocolSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "<p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>",
                    }),
                ).exactOptional(),
                InstancePort: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    InstancePortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({ description: 'The port on which the instance is listening.' }),
                  ),
                SSLCertificateId: SSLCertificateIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The Amazon Resource Name (ARN) of the server certificate.',
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
                description:
                  '<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
              }),
          ),
        )
        .openapi({
          param: {
            name: 'Listeners',
            in: 'query',
            required: true,
            description: 'The listeners.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
                properties: {
                  Protocol: {
                    allOf: [
                      { $ref: '#/components/schemas/Protocol' },
                      {
                        description:
                          'The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.',
                      },
                    ],
                  },
                  LoadBalancerPort: {
                    allOf: [
                      { $ref: '#/components/schemas/AccessPointPort' },
                      {
                        description:
                          'The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.',
                      },
                    ],
                  },
                  InstanceProtocol: {
                    allOf: [
                      { $ref: '#/components/schemas/Protocol' },
                      {
                        description:
                          "<p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>",
                      },
                    ],
                  },
                  InstancePort: {
                    allOf: [
                      { $ref: '#/components/schemas/InstancePort' },
                      { description: 'The port on which the instance is listening.' },
                    ],
                  },
                  SSLCertificateId: {
                    allOf: [
                      { $ref: '#/components/schemas/SSLCertificateId' },
                      { description: 'The Amazon Resource Name (ARN) of the server certificate.' },
                    ],
                  },
                },
                description:
                  '<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
              },
            },
          },
        }),
      Action: z
        .literal('CreateLoadBalancerListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancerListeners'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const postActionCreateLoadBalancerListenersRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateLoadBalancerListeners',
  description:
    '<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_CreateLoadBalancerListeners',
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
      Action: z
        .literal('CreateLoadBalancerListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancerListeners'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateLoadBalancerListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const getActionCreateLoadBalancerPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateLoadBalancerPolicy',
  description:
    '<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>',
  operationId: 'GET_CreateLoadBalancerPolicy',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description:
              'The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyTypeName: z
        .string()
        .openapi({
          param: {
            name: 'PolicyTypeName',
            in: 'query',
            required: true,
            description:
              'The name of the base policy type. To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.',
            schema: { type: 'string' },
          },
        }),
      PolicyAttributes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyAttributeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PolicyAttributes',
            in: 'query',
            required: false,
            description: 'The policy attributes.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyAttribute' } },
          },
        }),
      Action: z
        .literal('CreateLoadBalancerPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancerPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyTypeNotFoundException',
      content: { 'text/xml': { schema: PolicyTypeNotFoundExceptionSchema } },
    },
    482: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    483: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    484: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionCreateLoadBalancerPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateLoadBalancerPolicy',
  description:
    '<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>',
  operationId: 'POST_CreateLoadBalancerPolicy',
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
      Action: z
        .literal('CreateLoadBalancerPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancerPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateLoadBalancerPolicyInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyTypeNotFoundException',
      content: { 'text/xml': { schema: PolicyTypeNotFoundExceptionSchema } },
    },
    482: {
      description: 'DuplicatePolicyNameException',
      content: { 'text/xml': { schema: DuplicatePolicyNameExceptionSchema } },
    },
    483: {
      description: 'TooManyPoliciesException',
      content: { 'text/xml': { schema: TooManyPoliciesExceptionSchema } },
    },
    484: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionDeleteLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteLoadBalancer',
  description:
    '<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>',
  operationId: 'GET_DeleteLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAccessPointOutputSchema } },
    },
  },
})

export const postActionDeleteLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteLoadBalancer',
  description:
    '<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>',
  operationId: 'POST_DeleteLoadBalancer',
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
      Action: z
        .literal('DeleteLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteAccessPointInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteAccessPointOutputSchema } },
    },
  },
})

export const getActionDeleteLoadBalancerListenersRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteLoadBalancerListeners',
  description: 'Deletes the specified listeners from the specified load balancer.',
  operationId: 'GET_DeleteLoadBalancerListeners',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      LoadBalancerPorts: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              AccessPointPortSchema,
            ),
          ),
        )
        .openapi({
          param: {
            name: 'LoadBalancerPorts',
            in: 'query',
            required: true,
            description: 'The client port numbers of the listeners.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AccessPointPort' } },
          },
        }),
      Action: z
        .literal('DeleteLoadBalancerListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancerListeners'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const postActionDeleteLoadBalancerListenersRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteLoadBalancerListeners',
  description: 'Deletes the specified listeners from the specified load balancer.',
  operationId: 'POST_DeleteLoadBalancerListeners',
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
      Action: z
        .literal('DeleteLoadBalancerListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancerListeners'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteLoadBalancerListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const getActionDeleteLoadBalancerPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteLoadBalancerPolicy',
  description:
    'Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.',
  operationId: 'GET_DeleteLoadBalancerPolicy',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description: 'The name of the policy.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteLoadBalancerPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancerPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionDeleteLoadBalancerPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteLoadBalancerPolicy',
  description:
    'Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.',
  operationId: 'POST_DeleteLoadBalancerPolicy',
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
      Action: z
        .literal('DeleteLoadBalancerPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancerPolicy'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteLoadBalancerPolicyInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerPolicyOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionDeregisterInstancesFromLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=DeregisterInstancesFromLoadBalancer',
  description:
    '<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_DeregisterInstancesFromLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Instances: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InstanceSchema),
        )
        .openapi({
          param: {
            name: 'Instances',
            in: 'query',
            required: true,
            description: 'The IDs of the instances.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Instance' } },
          },
        }),
      Action: z
        .literal('DeregisterInstancesFromLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeregisterInstancesFromLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeregisterEndPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const postActionDeregisterInstancesFromLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=DeregisterInstancesFromLoadBalancer',
  description:
    '<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_DeregisterInstancesFromLoadBalancer',
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
      Action: z
        .literal('DeregisterInstancesFromLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeregisterInstancesFromLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeregisterEndPointsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeregisterEndPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const getActionDescribeAccountLimitsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAccountLimits',
  description:
    '<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_DescribeAccountLimits',
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeAccountLimits')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountLimits'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountLimitsOutputSchema } },
    },
  },
})

export const postActionDescribeAccountLimitsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAccountLimits',
  description:
    '<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_DescribeAccountLimits',
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
      Action: z
        .literal('DescribeAccountLimits')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountLimits'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAccountLimitsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountLimitsOutputSchema } },
    },
  },
})

export const getActionDescribeInstanceHealthRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeInstanceHealth',
  description:
    'Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.',
  operationId: 'GET_DescribeInstanceHealth',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Instances: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InstanceSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Instances',
            in: 'query',
            required: false,
            description: 'The IDs of the instances.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Instance' } },
          },
        }),
      Action: z
        .literal('DescribeInstanceHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInstanceHealth'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEndPointStateOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const postActionDescribeInstanceHealthRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeInstanceHealth',
  description:
    'Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.',
  operationId: 'POST_DescribeInstanceHealth',
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
      Action: z
        .literal('DescribeInstanceHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInstanceHealth'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEndPointStateInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEndPointStateOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancerAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancerAttributes',
  description: 'Describes the attributes for the specified load balancer.',
  operationId: 'GET_DescribeLoadBalancerAttributes',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerAttributeNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerAttributeNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancerAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancerAttributes',
  description: 'Describes the attributes for the specified load balancer.',
  operationId: 'POST_DescribeLoadBalancerAttributes',
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
      Action: z
        .literal('DescribeLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeLoadBalancerAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerAttributeNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerAttributeNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancerPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancerPolicies',
  description:
    "<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>",
  operationId: 'GET_DescribeLoadBalancerPolicies',
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
      LoadBalancerName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: false,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      PolicyNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PolicyNames',
            in: 'query',
            required: false,
            description: 'The names of the policies.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyName' } },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancerPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerPolicies'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerPoliciesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancerPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancerPolicies',
  description:
    "<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>",
  operationId: 'POST_DescribeLoadBalancerPolicies',
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
      Action: z
        .literal('DescribeLoadBalancerPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerPolicies'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeLoadBalancerPoliciesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerPoliciesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancerPolicyTypesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancerPolicyTypes',
  description:
    '<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>',
  operationId: 'GET_DescribeLoadBalancerPolicyTypes',
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
      PolicyTypeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyTypeNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PolicyTypeNames',
            in: 'query',
            required: false,
            description:
              'The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyTypeName' } },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancerPolicyTypes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerPolicyTypes'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerPolicyTypesOutputSchema } },
    },
    480: {
      description: 'PolicyTypeNotFoundException',
      content: { 'text/xml': { schema: PolicyTypeNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancerPolicyTypesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancerPolicyTypes',
  description:
    '<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>',
  operationId: 'POST_DescribeLoadBalancerPolicyTypes',
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
      Action: z
        .literal('DescribeLoadBalancerPolicyTypes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerPolicyTypes'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeLoadBalancerPolicyTypesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerPolicyTypesOutputSchema } },
    },
    480: {
      description: 'PolicyTypeNotFoundException',
      content: { 'text/xml': { schema: PolicyTypeNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancers',
  description:
    'Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.',
  operationId: 'GET_DescribeLoadBalancers',
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
      LoadBalancerNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AccessPointNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerNames',
            in: 'query',
            required: false,
            description: 'The names of the load balancers.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AccessPointName' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return with this call (a number from 1 to 400). The default is 400.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancers'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccessPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DependencyThrottleException',
      content: { 'text/xml': { schema: DependencyThrottleExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancers',
  description:
    'Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.',
  operationId: 'POST_DescribeLoadBalancers',
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('DescribeLoadBalancers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancers'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAccessPointsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccessPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'DependencyThrottleException',
      content: { 'text/xml': { schema: DependencyThrottleExceptionSchema } },
    },
  },
})

export const getActionDescribeTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeTags',
  description: 'Describes the tags associated with the specified load balancers.',
  operationId: 'GET_DescribeTags',
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
      LoadBalancerNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AccessPointNameSchema).min(1).max(20),
        )
        .openapi({
          param: {
            name: 'LoadBalancerNames',
            in: 'query',
            required: true,
            description: 'The names of the load balancers.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AccessPointName' },
              minItems: 1,
              maxItems: 20,
            },
          },
        }),
      Action: z
        .literal('DescribeTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeTags',
  description: 'Describes the tags associated with the specified load balancers.',
  operationId: 'POST_DescribeTags',
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
      Action: z
        .literal('DescribeTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const getActionDetachLoadBalancerFromSubnetsRoute = createRoute({
  method: 'get',
  path: '/#Action=DetachLoadBalancerFromSubnets',
  description:
    '<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>',
  operationId: 'GET_DetachLoadBalancerFromSubnets',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Subnets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetIdSchema),
        )
        .openapi({
          param: {
            name: 'Subnets',
            in: 'query',
            required: true,
            description: 'The IDs of the subnets.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetId' } },
          },
        }),
      Action: z
        .literal('DetachLoadBalancerFromSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DetachLoadBalancerFromSubnets'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DetachLoadBalancerFromSubnetsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionDetachLoadBalancerFromSubnetsRoute = createRoute({
  method: 'post',
  path: '/#Action=DetachLoadBalancerFromSubnets',
  description:
    '<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>',
  operationId: 'POST_DetachLoadBalancerFromSubnets',
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
      Action: z
        .literal('DetachLoadBalancerFromSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DetachLoadBalancerFromSubnets'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DetachLoadBalancerFromSubnetsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DetachLoadBalancerFromSubnetsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionDisableAvailabilityZonesForLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=DisableAvailabilityZonesForLoadBalancer',
  description:
    '<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_DisableAvailabilityZonesForLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      AvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AvailabilityZoneSchema),
        )
        .openapi({
          param: {
            name: 'AvailabilityZones',
            in: 'query',
            required: true,
            description: 'The Availability Zones.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AvailabilityZone' } },
          },
        }),
      Action: z
        .literal('DisableAvailabilityZonesForLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableAvailabilityZonesForLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveAvailabilityZonesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionDisableAvailabilityZonesForLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=DisableAvailabilityZonesForLoadBalancer',
  description:
    '<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_DisableAvailabilityZonesForLoadBalancer',
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
      Action: z
        .literal('DisableAvailabilityZonesForLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisableAvailabilityZonesForLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveAvailabilityZonesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveAvailabilityZonesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionEnableAvailabilityZonesForLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=EnableAvailabilityZonesForLoadBalancer',
  description:
    '<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_EnableAvailabilityZonesForLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      AvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AvailabilityZoneSchema),
        )
        .openapi({
          param: {
            name: 'AvailabilityZones',
            in: 'query',
            required: true,
            description:
              'The Availability Zones. These must be in the same region as the load balancer.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AvailabilityZone' } },
          },
        }),
      Action: z
        .literal('EnableAvailabilityZonesForLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableAvailabilityZonesForLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddAvailabilityZonesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const postActionEnableAvailabilityZonesForLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=EnableAvailabilityZonesForLoadBalancer',
  description:
    '<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_EnableAvailabilityZonesForLoadBalancer',
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
      Action: z
        .literal('EnableAvailabilityZonesForLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['EnableAvailabilityZonesForLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddAvailabilityZonesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddAvailabilityZonesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const getActionModifyLoadBalancerAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyLoadBalancerAttributes',
  description:
    '<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>',
  operationId: 'GET_ModifyLoadBalancerAttributes',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['CrossZoneLoadBalancing', ['LoadBalancerAttributes']],
          ['AccessLog', ['LoadBalancerAttributes']],
          ['ConnectionDraining', ['LoadBalancerAttributes']],
          ['ConnectionSettings', ['LoadBalancerAttributes']],
          ['AdditionalAttributes', ['LoadBalancerAttributes']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          LoadBalancerName: z
            .string()
            .openapi({
              param: {
                name: 'LoadBalancerName',
                in: 'query',
                required: true,
                description: 'The name of the load balancer.',
                schema: { type: 'string' },
              },
            }),
          LoadBalancerAttributes: z
            .object({
              CrossZoneLoadBalancing: z
                .object({
                  Enabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      CrossZoneLoadBalancingEnabledSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies whether cross-zone load balancing is enabled for the load balancer.',
                        }),
                    ),
                })
                .openapi({
                  required: ['Enabled'],
                  description:
                    'Information about the <code>CrossZoneLoadBalancing</code> attribute.',
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                    }),
                )
                .exactOptional(),
              AccessLog: z
                .object({
                  Enabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      AccessLogEnabledSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies whether access logs are enabled for the load balancer.',
                        }),
                    ),
                  S3BucketName: S3BucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Amazon S3 bucket where the access logs are stored.',
                      }),
                  ).exactOptional(),
                  EmitInterval: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      AccessLogIntervalSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p> <p>Default: 60 minutes</p>',
                        }),
                    )
                    .exactOptional(),
                  S3BucketPrefix: AccessLogPrefixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>. If the prefix is not provided, the log is placed at the root level of the bucket.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  required: ['Enabled'],
                  description: 'Information about the <code>AccessLog</code> attribute.',
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                    }),
                )
                .exactOptional(),
              ConnectionDraining: z
                .object({
                  Enabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      ConnectionDrainingEnabledSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies whether connection draining is enabled for the load balancer.',
                        }),
                    ),
                  Timeout: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      ConnectionDrainingTimeoutSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The maximum time, in seconds, to keep the existing connections open before deregistering the instances.',
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  required: ['Enabled'],
                  description: 'Information about the <code>ConnectionDraining</code> attribute.',
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                    }),
                )
                .exactOptional(),
              ConnectionSettings: z
                .object({
                  IdleTimeout: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      IdleTimeoutSchema,
                    )
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.',
                        }),
                    ),
                })
                .openapi({
                  required: ['IdleTimeout'],
                  description: 'Information about the <code>ConnectionSettings</code> attribute.',
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p> <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                    }),
                )
                .exactOptional(),
              AdditionalAttributes: AdditionalAttributesSchema.and(
                z.any().openapi({ description: 'Any additional attributes.' }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'LoadBalancerAttributes',
                in: 'query',
                required: true,
                description: 'The attributes for the load balancer.',
                schema: {
                  type: 'object',
                  properties: {
                    CrossZoneLoadBalancing: {
                      allOf: [
                        {
                          type: 'object',
                          required: ['Enabled'],
                          properties: {
                            Enabled: {
                              allOf: [
                                { $ref: '#/components/schemas/CrossZoneLoadBalancingEnabled' },
                                {
                                  description:
                                    'Specifies whether cross-zone load balancing is enabled for the load balancer.',
                                },
                              ],
                            },
                          },
                          description:
                            'Information about the <code>CrossZoneLoadBalancing</code> attribute.',
                        },
                        {
                          description:
                            '<p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                        },
                      ],
                    },
                    AccessLog: {
                      allOf: [
                        {
                          type: 'object',
                          required: ['Enabled'],
                          properties: {
                            Enabled: {
                              allOf: [
                                { $ref: '#/components/schemas/AccessLogEnabled' },
                                {
                                  description:
                                    'Specifies whether access logs are enabled for the load balancer.',
                                },
                              ],
                            },
                            S3BucketName: {
                              allOf: [
                                { $ref: '#/components/schemas/S3BucketName' },
                                {
                                  description:
                                    'The name of the Amazon S3 bucket where the access logs are stored.',
                                },
                              ],
                            },
                            EmitInterval: {
                              allOf: [
                                { $ref: '#/components/schemas/AccessLogInterval' },
                                {
                                  description:
                                    '<p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p> <p>Default: 60 minutes</p>',
                                },
                              ],
                            },
                            S3BucketPrefix: {
                              allOf: [
                                { $ref: '#/components/schemas/AccessLogPrefix' },
                                {
                                  description:
                                    'The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>. If the prefix is not provided, the log is placed at the root level of the bucket.',
                                },
                              ],
                            },
                          },
                          description: 'Information about the <code>AccessLog</code> attribute.',
                        },
                        {
                          description:
                            '<p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                        },
                      ],
                    },
                    ConnectionDraining: {
                      allOf: [
                        {
                          type: 'object',
                          required: ['Enabled'],
                          properties: {
                            Enabled: {
                              allOf: [
                                { $ref: '#/components/schemas/ConnectionDrainingEnabled' },
                                {
                                  description:
                                    'Specifies whether connection draining is enabled for the load balancer.',
                                },
                              ],
                            },
                            Timeout: {
                              allOf: [
                                { $ref: '#/components/schemas/ConnectionDrainingTimeout' },
                                {
                                  description:
                                    'The maximum time, in seconds, to keep the existing connections open before deregistering the instances.',
                                },
                              ],
                            },
                          },
                          description:
                            'Information about the <code>ConnectionDraining</code> attribute.',
                        },
                        {
                          description:
                            '<p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                        },
                      ],
                    },
                    ConnectionSettings: {
                      allOf: [
                        {
                          type: 'object',
                          required: ['IdleTimeout'],
                          properties: {
                            IdleTimeout: {
                              allOf: [
                                { $ref: '#/components/schemas/IdleTimeout' },
                                {
                                  description:
                                    'The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.',
                                },
                              ],
                            },
                          },
                          description:
                            'Information about the <code>ConnectionSettings</code> attribute.',
                        },
                        {
                          description:
                            '<p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p> <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a> in the <i>Classic Load Balancers Guide</i>.</p>',
                        },
                      ],
                    },
                    AdditionalAttributes: {
                      allOf: [
                        { $ref: '#/components/schemas/AdditionalAttributes' },
                        { description: 'Any additional attributes.' },
                      ],
                    },
                  },
                  description: 'The attributes for a load balancer.',
                },
              },
              description: 'The attributes for a load balancer.',
              required: [],
            }),
          Action: z
            .literal('ModifyLoadBalancerAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['ModifyLoadBalancerAttributes'] },
              },
            }),
          Version: z
            .literal('2012-06-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2012-06-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerAttributeNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerAttributeNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionModifyLoadBalancerAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyLoadBalancerAttributes',
  description:
    '<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>',
  operationId: 'POST_ModifyLoadBalancerAttributes',
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
      Action: z
        .literal('ModifyLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyLoadBalancerAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerAttributeNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerAttributeNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionRegisterInstancesWithLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=RegisterInstancesWithLoadBalancer',
  description:
    '<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_RegisterInstancesWithLoadBalancer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Instances: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InstanceSchema),
        )
        .openapi({
          param: {
            name: 'Instances',
            in: 'query',
            required: true,
            description: 'The IDs of the instances.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Instance' } },
          },
        }),
      Action: z
        .literal('RegisterInstancesWithLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RegisterInstancesWithLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RegisterEndPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const postActionRegisterInstancesWithLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=RegisterInstancesWithLoadBalancer',
  description:
    '<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_RegisterInstancesWithLoadBalancer',
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
      Action: z
        .literal('RegisterInstancesWithLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RegisterInstancesWithLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RegisterEndPointsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RegisterEndPointsOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidEndPointException',
      content: { 'text/xml': { schema: InvalidEndPointExceptionSchema } },
    },
  },
})

export const getActionRemoveTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveTags',
  description: 'Removes one or more tags from the specified load balancer.',
  operationId: 'GET_RemoveTags',
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
      LoadBalancerNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AccessPointNameSchema),
        )
        .openapi({
          param: {
            name: 'LoadBalancerNames',
            in: 'query',
            required: true,
            description:
              'The name of the load balancer. You can specify a maximum of one load balancer name.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AccessPointName' } },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeyOnlySchema).min(1),
        )
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKeyOnly' },
              minItems: 1,
            },
          },
        }),
      Action: z
        .literal('RemoveTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: RemoveTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const postActionRemoveTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveTags',
  description: 'Removes one or more tags from the specified load balancer.',
  operationId: 'POST_RemoveTags',
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
      Action: z
        .literal('RemoveTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTags'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: RemoveTagsOutputSchema } } },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
  },
})

export const getActionSetLoadBalancerListenerSSLCertificateRoute = createRoute({
  method: 'get',
  path: '/#Action=SetLoadBalancerListenerSSLCertificate',
  description:
    '<p>Sets the certificate that terminates the specified listener\'s SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_SetLoadBalancerListenerSSLCertificate',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      LoadBalancerPort: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'LoadBalancerPort',
            in: 'query',
            required: true,
            description: 'The port that uses the specified SSL certificate.',
            schema: { type: 'integer' },
          },
        }),
      SSLCertificateId: z
        .string()
        .openapi({
          param: {
            name: 'SSLCertificateId',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the SSL certificate.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetLoadBalancerListenerSSLCertificate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerListenerSSLCertificate'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerListenerSSLCertificateOutputSchema } },
    },
    480: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const postActionSetLoadBalancerListenerSSLCertificateRoute = createRoute({
  method: 'post',
  path: '/#Action=SetLoadBalancerListenerSSLCertificate',
  description:
    '<p>Sets the certificate that terminates the specified listener\'s SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_SetLoadBalancerListenerSSLCertificate',
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
      Action: z
        .literal('SetLoadBalancerListenerSSLCertificate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerListenerSSLCertificate'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetLoadBalancerListenerSSLCertificateInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerListenerSSLCertificateOutputSchema } },
    },
    480: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    484: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const getActionSetLoadBalancerPoliciesForBackendServerRoute = createRoute({
  method: 'get',
  path: '/#Action=SetLoadBalancerPoliciesForBackendServer',
  description:
    '<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_SetLoadBalancerPoliciesForBackendServer',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      InstancePort: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'InstancePort',
            in: 'query',
            required: true,
            description: 'The port number associated with the EC2 instance.',
            schema: { type: 'integer' },
          },
        }),
      PolicyNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyNameSchema),
        )
        .openapi({
          param: {
            name: 'PolicyNames',
            in: 'query',
            required: true,
            description:
              'The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyName' } },
          },
        }),
      Action: z
        .literal('SetLoadBalancerPoliciesForBackendServer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerPoliciesForBackendServer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerPoliciesForBackendServerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionSetLoadBalancerPoliciesForBackendServerRoute = createRoute({
  method: 'post',
  path: '/#Action=SetLoadBalancerPoliciesForBackendServer',
  description:
    '<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_SetLoadBalancerPoliciesForBackendServer',
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
      Action: z
        .literal('SetLoadBalancerPoliciesForBackendServer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerPoliciesForBackendServer'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: SetLoadBalancerPoliciesForBackendServerInputSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerPoliciesForBackendServerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionSetLoadBalancerPoliciesOfListenerRoute = createRoute({
  method: 'get',
  path: '/#Action=SetLoadBalancerPoliciesOfListener',
  description:
    '<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'GET_SetLoadBalancerPoliciesOfListener',
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
      LoadBalancerName: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerName',
            in: 'query',
            required: true,
            description: 'The name of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      LoadBalancerPort: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'LoadBalancerPort',
            in: 'query',
            required: true,
            description: 'The external port of the load balancer.',
            schema: { type: 'integer' },
          },
        }),
      PolicyNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyNameSchema),
        )
        .openapi({
          param: {
            name: 'PolicyNames',
            in: 'query',
            required: true,
            description:
              'The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyName' } },
          },
        }),
      Action: z
        .literal('SetLoadBalancerPoliciesOfListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerPoliciesOfListener'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerPoliciesOfListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionSetLoadBalancerPoliciesOfListenerRoute = createRoute({
  method: 'post',
  path: '/#Action=SetLoadBalancerPoliciesOfListener',
  description:
    '<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>',
  operationId: 'POST_SetLoadBalancerPoliciesOfListener',
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
      Action: z
        .literal('SetLoadBalancerPoliciesOfListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetLoadBalancerPoliciesOfListener'] },
          },
        }),
      Version: z
        .literal('2012-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2012-06-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetLoadBalancerPoliciesOfListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetLoadBalancerPoliciesOfListenerOutputSchema } },
    },
    480: {
      description: 'AccessPointNotFoundException',
      content: { 'text/xml': { schema: AccessPointNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'text/xml': { schema: PolicyNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})
