import { createRoute, z } from '@hono/zod-openapi'

const OperationIdSchema = z.string().max(255).openapi('OperationId')

const CreateHttpNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: 'httpvoqozuhfet5kzxoxg-a-response-example' }, required: [] })
  .openapi('CreateHttpNamespaceResponse')

const NamespaceNameHttpSchema = z
  .string()
  .regex(/^[!-~]{1,1024}$/)
  .max(1024)
  .openapi('NamespaceNameHttp')

const ResourceIdSchema = z.string().max(64).openapi('ResourceId')

const ResourceDescriptionSchema = z.string().max(1024).openapi('ResourceDescription')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'The key identifier, or name, of the tag.' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: "A custom key-value pair that's associated with a resource.",
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateHttpNamespaceRequestSchema = z
  .object({
    Name: NamespaceNameHttpSchema.and(
      z.any().openapi({ description: 'The name that you want to assign to this namespace.' }),
    ),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>CreateHttpNamespace</code> requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string (for example, a date/time stamp).',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the namespace.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateHttpNamespaceRequest' })
  .openapi('CreateHttpNamespaceRequest')

const InvalidInputSchema = z.any().openapi('InvalidInput')

const NamespaceAlreadyExistsSchema = z.any().openapi('NamespaceAlreadyExists')

const ResourceLimitExceededSchema = z.any().openapi('ResourceLimitExceeded')

const DuplicateRequestSchema = z.any().openapi('DuplicateRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const CreatePrivateDnsNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: 'gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd' }, required: [] })
  .openapi('CreatePrivateDnsNamespaceResponse')

const NamespaceNamePrivateSchema = z
  .string()
  .regex(/^[!-~]{1,253}$/)
  .max(253)
  .openapi('NamespaceNamePrivate')

const RecordTTLSchema = z.int().min(0).max(2147483647).openapi('RecordTTL')

const SOASchema = z
  .object({
    TTL: RecordTTLSchema.and(
      z.any().openapi({ description: 'The time to live (TTL) for purposes of negative caching.' }),
    ),
  })
  .openapi({
    required: ['TTL'],
    description: 'Start of Authority (SOA) properties for a public or private DNS namespace.',
  })
  .openapi('SOA')

const PrivateDnsPropertiesMutableSchema = z
  .object({
    SOA: SOASchema.and(
      z
        .any()
        .openapi({
          description:
            'Fields for the Start of Authority (SOA) record for the hosted zone for the private DNS namespace.',
        }),
    ),
  })
  .openapi({ required: ['SOA'], description: 'DNS properties for the private DNS namespace.' })
  .openapi('PrivateDnsPropertiesMutable')

const PrivateDnsNamespacePropertiesSchema = z
  .object({
    DnsProperties: PrivateDnsPropertiesMutableSchema.and(
      z.any().openapi({ description: 'DNS properties for the private DNS namespace.' }),
    ),
  })
  .openapi({
    required: ['DnsProperties'],
    description: 'DNS properties for the private DNS namespace.',
  })
  .openapi('PrivateDnsNamespaceProperties')

const CreatePrivateDnsNamespaceRequestSchema = z
  .object({
    Name: NamespaceNamePrivateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that you want to assign to this namespace. When you create a private DNS namespace, Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.',
        }),
    ),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>CreatePrivateDnsNamespace</code> requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the namespace.' }),
    ).exactOptional(),
    Vpc: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon VPC that you want to associate the namespace with.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.',
        }),
    ).exactOptional(),
    Properties: PrivateDnsNamespacePropertiesSchema.and(
      z.any().openapi({ description: 'Properties for the private DNS namespace.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Vpc'], title: 'CreatePrivateDnsNamespaceRequest' })
  .openapi('CreatePrivateDnsNamespaceRequest')

const CreatePublicDnsNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: 'dns2voqozuhfet5kzxoxg-a-response-example' }, required: [] })
  .openapi('CreatePublicDnsNamespaceResponse')

const NamespaceNamePublicSchema = z
  .string()
  .regex(
    /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?$/,
  )
  .max(253)
  .openapi('NamespaceNamePublic')

const PublicDnsPropertiesMutableSchema = z
  .object({
    SOA: SOASchema.and(
      z
        .any()
        .openapi({
          description:
            'Start of Authority (SOA) record for the hosted zone for the public DNS namespace.',
        }),
    ),
  })
  .openapi({ required: ['SOA'], description: 'DNS properties for the public DNS namespace.' })
  .openapi('PublicDnsPropertiesMutable')

const PublicDnsNamespacePropertiesSchema = z
  .object({
    DnsProperties: PublicDnsPropertiesMutableSchema.and(
      z.any().openapi({ description: 'DNS properties for the public DNS namespace.' }),
    ),
  })
  .openapi({
    required: ['DnsProperties'],
    description: 'DNS properties for the public DNS namespace.',
  })
  .openapi('PublicDnsNamespaceProperties')

const CreatePublicDnsNamespaceRequestSchema = z
  .object({
    Name: NamespaceNamePublicSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name that you want to assign to this namespace.</p> <note> <p>Do not include sensitive information in the name. The name is publicly available using DNS queries.</p> </note>',
        }),
    ),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>CreatePublicDnsNamespace</code> requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the namespace.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.',
        }),
    ).exactOptional(),
    Properties: PublicDnsNamespacePropertiesSchema.and(
      z.any().openapi({ description: 'Properties for the public DNS namespace.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreatePublicDnsNamespaceRequest' })
  .openapi('CreatePublicDnsNamespaceRequest')

const ArnSchema = z.string().max(255).openapi('Arn')

const ServiceNameSchema = z
  .string()
  .regex(
    /((?=^.{1,127}$)^([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9])(\.([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9]))*$)|(^\.$)/,
  )
  .openapi('ServiceName')

const ResourceCountSchema = z.int().openapi('ResourceCount')

const RoutingPolicySchema = z.enum(['MULTIVALUE', 'WEIGHTED']).openapi('RoutingPolicy')

const RecordTypeSchema = z.enum(['SRV', 'A', 'AAAA', 'CNAME']).openapi('RecordType')

const DnsRecordSchema = z
  .object({
    Type: RecordTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the resource, which indicates the type of value that Route 53 returns in response to DNS queries. You can specify values for <code>Type</code> in the following combinations:</p> <ul> <li> <p> <b> <code>A</code> </b> </p> </li> <li> <p> <b> <code>AAAA</code> </b> </p> </li> <li> <p> <b> <code>A</code> </b> and <b> <code>AAAA</code> </b> </p> </li> <li> <p> <b> <code>SRV</code> </b> </p> </li> <li> <p> <b> <code>CNAME</code> </b> </p> </li> </ul> <p>If you want Cloud Map to create a Route 53 alias record when you register an instance, specify <code>A</code> or <code>AAAA</code> for <code>Type</code>.</p> <p>You specify other settings, such as the IP address for <code>A</code> and <code>AAAA</code> records, when you register an instance. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a>.</p> <p>The following values are supported:</p> <dl> <dt>A</dt> <dd> <p>Route 53 returns the IP address of the resource in IPv4 format, such as 192.0.2.44.</p> </dd> <dt>AAAA</dt> <dd> <p>Route 53 returns the IP address of the resource in IPv6 format, such as 2001:0db8:85a3:0000:0000:abcd:0001:2345.</p> </dd> <dt>CNAME</dt> <dd> <p>Route 53 returns the domain name of the resource, such as www.example.com. Note the following:</p> <ul> <li> <p>You specify the domain name that you want to route traffic to when you register an instance. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#cloudmap-RegisterInstance-request-Attributes">Attributes</a> in the topic <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a>.</p> </li> <li> <p>You must specify <code>WEIGHTED</code> for the value of <code>RoutingPolicy</code>.</p> </li> <li> <p>You can\'t specify both <code>CNAME</code> for <code>Type</code> and settings for <code>HealthCheckConfig</code>. If you do, the request will fail with an <code>InvalidInput</code> error.</p> </li> </ul> </dd> <dt>SRV</dt> <dd> <p>Route 53 returns the value for an <code>SRV</code> record. The value for an <code>SRV</code> record uses the following values:</p> <p> <code>priority weight port service-hostname</code> </p> <p>Note the following about the values:</p> <ul> <li> <p>The values of <code>priority</code> and <code>weight</code> are both set to <code>1</code> and can\'t be changed. </p> </li> <li> <p>The value of <code>port</code> comes from the value that you specify for the <code>AWS_INSTANCE_PORT</code> attribute when you submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request.</p> </li> <li> <p>The value of <code>service-hostname</code> is a concatenation of the following values:</p> <ul> <li> <p>The value that you specify for <code>InstanceId</code> when you register an instance.</p> </li> <li> <p>The name of the service.</p> </li> <li> <p>The name of the namespace. </p> </li> </ul> <p>For example, if the value of <code>InstanceId</code> is <code>test</code>, the name of the service is <code>backend</code>, and the name of the namespace is <code>example.com</code>, the value of <code>service-hostname</code> is the following:</p> <p> <code>test.backend.example.com</code> </p> </li> </ul> <p>If you specify settings for an <code>SRV</code> record, note the following:</p> <ul> <li> <p>If you specify values for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both in the <code>RegisterInstance</code> request, Cloud Map automatically creates <code>A</code> and/or <code>AAAA</code> records that have the same name as the value of <code>service-hostname</code> in the <code>SRV</code> record. You can ignore these records.</p> </li> <li> <p>If you\'re using a system that requires a specific <code>SRV</code> format, such as HAProxy, see the <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html#cloudmap-CreateService-request-Name">Name</a> element in the documentation about <code>CreateService</code> for information about how to specify the correct name format.</p> </li> </ul> </dd> </dl>',
        }),
    ),
    TTL: RecordTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time, in seconds, that you want DNS resolvers to cache the settings for this record.</p> <note> <p>Alias records don\'t include a TTL because Route 53 uses the TTL for the Amazon Web Services resource that an alias record routes traffic to. If you include the <code>AWS_ALIAS_DNS_NAME</code> attribute when you submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, the <code>TTL</code> value is ignored. Always specify a TTL for the service; you can use a service to register instances that create either alias or non-alias records.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'TTL'],
    description:
      'A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.',
  })
  .openapi('DnsRecord')

const DnsRecordListSchema = z.array(DnsRecordSchema).openapi('DnsRecordList')

const DnsConfigSchema = z
  .object({
    NamespaceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p> <i>Use NamespaceId in <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_Service.html">Service</a> instead.</i> </p> <p>The ID of the namespace to use for DNS configuration.</p>Top level attribute in request should be used to reference namespace-id',
        }),
    ).exactOptional(),
    RoutingPolicy: RoutingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The routing policy that you want to apply to all Route 53 DNS records that Cloud Map creates when you register an instance and specify this service.</p> <note> <p>If you want to use this service to register instances that create alias records, specify <code>WEIGHTED</code> for the routing policy.</p> </note> <p>You can specify the following values:</p> <dl> <dt>MULTIVALUE</dt> <dd> <p>If you define a health check for the service and the health check is healthy, Route 53 returns the applicable value for up to eight instances.</p> <p>For example, suppose that the service includes configurations for one <code>A</code> record and a health check. You use the service to register 10 instances. Route 53 responds to DNS queries with IP addresses for up to eight healthy instances. If fewer than eight instances are healthy, Route 53 responds to every DNS query with the IP addresses for all of the healthy instances.</p> <p>If you don\'t define a health check for the service, Route 53 assumes that all instances are healthy and returns the values for up to eight instances.</p> <p>For more information about the multivalue routing policy, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue">Multivalue Answer Routing</a> in the <i>Route 53 Developer Guide</i>.</p> </dd> <dt>WEIGHTED</dt> <dd> <p>Route 53 returns the applicable value from one randomly selected instance from among the instances that you registered using the same service. Currently, all records have the same weight, so you can\'t route more or less traffic to any instances.</p> <p>For example, suppose that the service includes configurations for one <code>A</code> record and a health check. You use the service to register 10 instances. Route 53 responds to DNS queries with the IP address for one randomly selected instance from among the healthy instances. If no instances are healthy, Route 53 responds to DNS queries as if all of the instances were healthy.</p> <p>If you don\'t define a health check for the service, Route 53 assumes that all instances are healthy and returns the applicable value for one randomly selected instance.</p> <p>For more information about the weighted routing policy, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted">Weighted Routing</a> in the <i>Route 53 Developer Guide</i>.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    DnsRecords: DnsRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <code>DnsRecord</code> object for each Route 53 DNS record that you want Cloud Map to create when you register an instance.',
        }),
    ),
  })
  .openapi({
    required: ['DnsRecords'],
    description:
      '<p>A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.</p> <important> <p>The record types of a service can only be changed by deleting the service and recreating it with a new <code>Dnsconfig</code>.</p> </important>',
  })
  .openapi('DnsConfig')

const ServiceTypeSchema = z.enum(['HTTP', 'DNS_HTTP', 'DNS']).openapi('ServiceType')

const HealthCheckTypeSchema = z.enum(['HTTP', 'HTTPS', 'TCP']).openapi('HealthCheckType')

const ResourcePathSchema = z.string().max(255).openapi('ResourcePath')

const FailureThresholdSchema = z.int().min(1).max(10).openapi('FailureThreshold')

const HealthCheckConfigSchema = z
  .object({
    Type: HealthCheckTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy.</p> <important> <p>You can\'t change the value of <code>Type</code> after you create a health check.</p> </important> <p>You can create the following types of health checks:</p> <ul> <li> <p> <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.</p> </li> <li> <p> <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.</p> <important> <p>If you specify HTTPS for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p> </important> </li> <li> <p> <b>TCP</b>: Route 53 tries to establish a TCP connection.</p> <p>If you specify <code>TCP</code> for <code>Type</code>, don\'t specify a value for <code>ResourcePath</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.</p>',
        }),
    ),
    ResourcePath: ResourcePathSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The path that you want Route 53 to request when performing health checks. The path can be any value that your endpoint returns an HTTP status code of a 2xx or 3xx format for when the endpoint is healthy. An example file is <code>/docs/route53-health-check.html</code>. Route 53 automatically adds the DNS name for the service. If you don't specify a value for <code>ResourcePath</code>, the default value is <code>/</code>.</p> <p>If you specify <code>TCP</code> for <code>Type</code>, you must <i>not</i> specify a value for <code>ResourcePath</code>.</p>",
        }),
    ).exactOptional(),
    FailureThreshold: FailureThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint from unhealthy to healthy or the other way around. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      '<p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <dl> <dt>A and AAAA records</dt> <dd> <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records, Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint tthat\'s specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code> records to be unhealthy. </p> </dd> <dt>CNAME records</dt> <dd> <p>You can\'t specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> </dd> <dt>Request interval</dt> <dd> <p>A Route 53 health checker in each health-checking Amazon Web Services Region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don\'t coordinate with one another. Therefore, you might sometimes see several requests in one second that\'s followed by a few seconds with no health checks at all.</p> </dd> <dt>Health checking regions</dt> <dd> <p>Health checkers perform checks from all Route 53 health-checking Regions. For a list of the current Regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> </dd> <dt>Alias records</dt> <dd> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced Amazon Web Services resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn\'t create the health check.</p> </li> </ul> </dd> <dt>Charges for health checks</dt> <dd> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </dd> </dl>',
  })
  .openapi('HealthCheckConfig')

const HealthCheckCustomConfigSchema = z
  .object({
    FailureThreshold: FailureThresholdSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "<important> <p>This parameter is no longer supported and is always set to 1. Cloud Map waits for approximately 30 seconds after receiving an <code>UpdateInstanceCustomHealthStatus</code> request before changing the status of the service instance.</p> </important> <p>The number of 30-second intervals that you want Cloud Map to wait after receiving an <code>UpdateInstanceCustomHealthStatus</code> request before it changes the health status of a service instance.</p> <p>Sending a second or subsequent <code>UpdateInstanceCustomHealthStatus</code> request with the same value before 30 seconds has passed doesn't accelerate the change. Cloud Map still waits <code>30</code> seconds after the first request to make the change.</p>Configurable FailureThreshold of HealthCheckCustomConfig is deprecated.  It will always have value 1.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that's defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are located.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that's associated with the new instance. </p> <note> <p>Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>Cloud Map waits for 30 seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, Cloud Map stops routing traffic to the resource.</p> </li> </ol>",
    required: [],
  })
  .openapi('HealthCheckCustomConfig')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ServiceSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that Cloud Map assigned to the service when you created it.',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that Cloud Map assigns to the service when you create it.',
        }),
    ).exactOptional(),
    Name: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the service.' }),
    ).exactOptional(),
    NamespaceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the namespace that was used to create the service.' }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the service.' }),
    ).exactOptional(),
    InstanceCount: ResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of instances that are currently associated with the service. Instances that were previously associated with the service but that are deleted aren't included in the count. The count might not reflect pending registrations and deregistrations.",
        }),
    ).exactOptional(),
    DnsConfig: DnsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.</p> <important> <p>The record types of a service can only be changed by deleting the service and recreating it with a new <code>Dnsconfig</code>.</p> </important>',
        }),
    ).exactOptional(),
    Type: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the systems that can be used to discover the service instances.</p> <dl> <dt>DNS_HTTP</dt> <dd> <p>The service instances can be discovered using either DNS queries or the <code>DiscoverInstances</code> API operation.</p> </dd> <dt>HTTP</dt> <dd> <p>The service instances can only be discovered using the <code>DiscoverInstances</code> API operation.</p> </dd> <dt>DNS</dt> <dd> <p>Reserved.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>',
        }),
    ).exactOptional(),
    HealthCheckCustomConfig: HealthCheckCustomConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains information about an optional custom health check.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important>',
        }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about the specified service.',
    required: [],
  })
  .openapi('Service')

const CreateServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the new service.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Service: {
        Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita',
        CreateDate: 1587081768.334,
        CreatorRequestId: '567c1193-6b00-4308-bd57-ad38a8822d25',
        DnsConfig: {
          DnsRecords: [{ TTL: 60, Type: 'A' }],
          NamespaceId: 'ns-ylexjili4cdxy3xm',
          RoutingPolicy: 'MULTIVALUE',
        },
        Id: 'srv-p5zdwlg5uvvzjita',
        Name: 'myservice',
        NamespaceId: 'ns-ylexjili4cdxy3xm',
      },
    },
    required: [],
  })
  .openapi('CreateServiceResponse')

const ServiceTypeOptionSchema = z.literal('HTTP').openapi('ServiceTypeOption')

const CreateServiceRequestSchema = z
  .object({
    Name: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name that you want to assign to the service.</p> <note> <p>Do not include sensitive information in the name if the namespace is discoverable by public DNS queries.</p> </note> <p>If you want Cloud Map to create an <code>SRV</code> record when you register an instance and you're using a system that requires a specific <code>SRV</code> format, such as <a href=\"http://www.haproxy.org/\">HAProxy</a>, specify the following for <code>Name</code>:</p> <ul> <li> <p>Start the name with an underscore (_), such as <code>_exampleservice</code>.</p> </li> <li> <p>End the name with <i>._protocol</i>, such as <code>._tcp</code>.</p> </li> </ul> <p>When you register an instance, Cloud Map creates an <code>SRV</code> record and assigns a name to the record by concatenating the service name and the namespace name (for example,</p> <p> <code>_exampleservice._tcp.example.com</code>).</p> <note> <p>For services that are accessible by DNS queries, you can't create multiple services with names that differ only by case (such as EXAMPLE and example). Otherwise, these services have the same DNS name and can't be distinguished. However, if you use a namespace that's only accessible by API calls, then you can create services that with names that differ only by case.</p> </note>",
        }),
    ),
    NamespaceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the namespace that you want to use to create the service. The namespace ID must be specified, but it can be specified either here or in the <code>DnsConfig</code> object.',
        }),
    ).exactOptional(),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>CreateService</code> requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the service.' }),
    ).exactOptional(),
    DnsConfig: DnsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the Amazon Route 53 records that you want Cloud Map to create when you register an instance. ',
        }),
    ).exactOptional(),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional Route 53 health check. If you specify settings for a health check, Cloud Map associates the health check with all the Route 53 DNS records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/cloud-map/pricing/">Cloud Map Pricing</a>.</p>',
        }),
    ).exactOptional(),
    HealthCheckCustomConfig: HealthCheckCustomConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A complex type that contains information about an optional custom health check.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration from an existing service.</p>",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the service. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.',
        }),
    ).exactOptional(),
    Type: ServiceTypeOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, specifies that the service instances are only discoverable using the <code>DiscoverInstances</code> API operation. No DNS records is registered for the service instances. The only valid value is <code>HTTP</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateServiceRequest' })
  .openapi('CreateServiceRequest')

const NamespaceNotFoundSchema = z.any().openapi('NamespaceNotFound')

const ServiceAlreadyExistsSchema = z.any().openapi('ServiceAlreadyExists')

const DeleteNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: 'gv4g5meo7ndmeh4fqskygvk23d2fijwa-k98y6drk' }, required: [] })
  .openapi('DeleteNamespaceResponse')

const DeleteNamespaceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the namespace that you want to delete.' }),
    ),
  })
  .openapi({ required: ['Id'], title: 'DeleteNamespaceRequest' })
  .openapi('DeleteNamespaceRequest')

const ResourceInUseSchema = z.any().openapi('ResourceInUse')

const DeleteServiceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteServiceResponse')

const DeleteServiceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the service that you want to delete.' }),
    ),
  })
  .openapi({ required: ['Id'], title: 'DeleteServiceRequest' })
  .openapi('DeleteServiceRequest')

const ServiceNotFoundSchema = z.any().openapi('ServiceNotFound')

const DeregisterInstanceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: '4yejorelbukcjzpnr6tlmrghsjwpngf4-k98rnaiq' }, required: [] })
  .openapi('DeregisterInstanceResponse')

const DeregisterInstanceRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the service that the instance is associated with.' }),
    ),
    InstanceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for <code>Id</code> in the <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request.',
        }),
    ),
  })
  .openapi({ required: ['ServiceId', 'InstanceId'], title: 'DeregisterInstanceRequest' })
  .openapi('DeregisterInstanceRequest')

const InstanceNotFoundSchema = z.any().openapi('InstanceNotFound')

const HealthStatusSchema = z.enum(['HEALTHY', 'UNHEALTHY', 'UNKNOWN']).openapi('HealthStatus')

const AttrValueSchema = z
  .string()
  .regex(/^([a-zA-Z0-9!-~][ \ta-zA-Z0-9!-~]*){0,1}[a-zA-Z0-9!-~]{0,1}$/)
  .max(1024)
  .openapi('AttrValue')

const AttributesSchema = z.record(z.string(), AttrValueSchema).openapi('Attributes')

const HttpInstanceSummarySchema = z
  .object({
    InstanceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an instance that matches the values that you specified in the request.',
        }),
    ).exactOptional(),
    NamespaceName: NamespaceNameHttpSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <code/> <code/> <code/> </p> <p>The <code>HttpName</code> name of the namespace. It's found in the <code>HttpProperties</code> member of the <code>Properties</code> member of the namespace.</p>",
        }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you specified when you registered the instance.',
        }),
    ).exactOptional(),
    HealthStatus: HealthStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you configured health checking in the service, the current health status of the service instance.',
        }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you included any attributes when you registered the instance, the values of those attributes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.',
    required: [],
  })
  .openapi('HttpInstanceSummary')

const HttpInstanceSummaryListSchema = z
  .array(HttpInstanceSummarySchema)
  .openapi('HttpInstanceSummaryList')

const DiscoverInstancesResponseSchema = z
  .object({
    Instances: HttpInstanceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>HttpInstanceSummary</code> for each registered instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Instances: [
        {
          Attributes: { AWS_INSTANCE_IPV4: '172.2.1.3', AWS_INSTANCE_PORT: '808' },
          HealthStatus: 'UNKNOWN',
          InstanceId: 'myservice-53',
          NamespaceName: 'example.com',
          ServiceName: 'myservice',
        },
      ],
    },
    required: [],
  })
  .openapi('DiscoverInstancesResponse')

const NamespaceNameSchema = z.string().max(1024).openapi('NamespaceName')

const DiscoverMaxResultsSchema = z.int().min(1).max(1000).openapi('DiscoverMaxResults')

const HealthStatusFilterSchema = z
  .enum(['HEALTHY', 'UNHEALTHY', 'ALL', 'HEALTHY_OR_ELSE_ALL'])
  .openapi('HealthStatusFilter')

const DiscoverInstancesRequestSchema = z
  .object({
    NamespaceName: NamespaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The <code>HttpName</code> name of the namespace. It's found in the <code>HttpProperties</code> member of the <code>Properties</code> member of the namespace.",
        }),
    ),
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you specified when you registered the instance.',
        }),
    ),
    MaxResults: DiscoverMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of instances that you want Cloud Map to return in the response to a <code>DiscoverInstances</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 instances.",
        }),
    ).exactOptional(),
    QueryParameters: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters to scope the results based on custom attributes for the instance (for example, <code>{version=v1, az=1a}</code>). Only instances that match all the specified key-value pairs are returned.',
        }),
    ).exactOptional(),
    OptionalParameters: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opportunistic filters to scope the results based on custom attributes. If there are instances that match both the filters specified in both the <code>QueryParameters</code> parameter and this parameter, all of these instances are returned. Otherwise, the filters are ignored, and only instances that match the filters that are specified in the <code>QueryParameters</code> parameter are returned.',
        }),
    ).exactOptional(),
    HealthStatus: HealthStatusFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The health status of the instances that you want to discover. This parameter is ignored for services that don't have a health check configured, and all instances are returned.</p> <dl> <dt>HEALTHY</dt> <dd> <p>Returns healthy instances.</p> </dd> <dt>UNHEALTHY</dt> <dd> <p>Returns unhealthy instances.</p> </dd> <dt>ALL</dt> <dd> <p>Returns all instances.</p> </dd> <dt>HEALTHY_OR_ELSE_ALL</dt> <dd> <p>Returns healthy instances, unless none are reporting a healthy state. In that case, return all instances. This is also called failing open.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['NamespaceName', 'ServiceName'], title: 'DiscoverInstancesRequest' })
  .openapi('DiscoverInstancesRequest')

const RequestLimitExceededSchema = z.any().openapi('RequestLimitExceeded')

const InstanceSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An identifier that you want to associate with the instance. Note the following:</p> <ul> <li> <p>If the service that's specified by <code>ServiceId</code> includes settings for an <code>SRV</code> record, the value of <code>InstanceId</code> is automatically included as part of the value for the <code>SRV</code> record. For more information, see <a href=\"https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type\">DnsRecord &gt; Type</a>.</p> </li> <li> <p>You can use this value to update an existing instance.</p> </li> <li> <p>To register a new instance, you must specify a value that's unique among instances that you register by using the same service. </p> </li> <li> <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, Cloud Map updates the existing DNS records. If there's also an existing health check, Cloud Map deletes the old health check and creates a new one. </p> <note> <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a <code>ListHealthChecks</code> request, for example.</p> </note> </li> </ul>",
        }),
    ),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string every time you submit a <code>RegisterInstance</code> request if you're registering additional instances for the same namespace and service. <code>CreatorRequestId</code> can be any unique string (for example, a date/time stamp).",
        }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A string map that contains the following information for the service that you specify in <code>ServiceId</code>:</p> <ul> <li> <p>The attributes that apply to the records that are defined in the service. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <note> <p>Do not include sensitive information in the attributes if the namespace is discoverable by public DNS queries.</p> </note> <p>Supported attribute keys include the following:</p> <dl> <dt>AWS_ALIAS_DNS_NAME</dt> <dd> <p>If you want Cloud Map to create a Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that's associated with the load balancer. For information about how to get the DNS name, see <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-DNSName\">AliasTarget-&gt;DNSName</a> in the <i>Route 53 API Reference</i>.</p> <p>Note the following:</p> <ul> <li> <p>The configuration for the service that's specified by <code>ServiceId</code> must include settings for an <code>A</code> record, an <code>AAAA</code> record, or both.</p> </li> <li> <p>In the service that's specified by <code>ServiceId</code>, the value of <code>RoutingPolicy</code> must be <code>WEIGHTED</code>.</p> </li> <li> <p>If the service that's specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code> settings, Cloud Map creates the health check, but it won't associate the health check with the alias record.</p> </li> <li> <p>Auto naming currently doesn't support creating alias records that route traffic to Amazon Web Services resources other than ELB load balancers.</p> </li> <li> <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the <code>AWS_INSTANCE</code> attributes.</p> </li> </ul> </dd> <dt>AWS_EC2_INSTANCE_ID</dt> <dd> <p> <i>HTTP namespaces only.</i> The Amazon EC2 instance ID for the instance. The <code>AWS_INSTANCE_IPV4</code> attribute contains the primary private IPv4 address.</p> </dd> <dt>AWS_INIT_HEALTH_STATUS</dt> <dd> <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use <code>AWS_INIT_HEALTH_STATUS</code> to specify the initial status of the custom health check, <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value for <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p> </dd> <dt>AWS_INSTANCE_CNAME</dt> <dd> <p>If the service configuration includes a <code>CNAME</code> record, the domain name that you want Route 53 to return in response to DNS queries (for example, <code>example.com</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>CNAME</code> record.</p> </dd> <dt>AWS_INSTANCE_IPV4</dt> <dd> <p>If the service configuration includes an <code>A</code> record, the IPv4 address that you want Route 53 to return in response to DNS queries (for example, <code>192.0.2.44</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>A</code> record. If the service includes settings for an <code>SRV</code> record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> </dd> <dt>AWS_INSTANCE_IPV6</dt> <dd> <p>If the service configuration includes an <code>AAAA</code> record, the IPv6 address that you want Route 53 to return in response to DNS queries (for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>AAAA</code> record. If the service includes settings for an <code>SRV</code> record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> </dd> <dt>AWS_INSTANCE_PORT</dt> <dd> <p>If the service includes an <code>SRV</code> record, the value that you want Route 53 to return for the port.</p> <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to send requests to. </p> <p>This value is required if you specified settings for an <code>SRV</code> record or a Route 53 health check when you created the service.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description:
      'A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.',
  })
  .openapi('Instance')

const GetInstanceResponseSchema = z
  .object({
    Instance: InstanceSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about a specified instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Instance: {
        Attributes: {
          AWS_INSTANCE_IPV4: '192.0.2.44',
          AWS_INSTANCE_PORT: '80',
          color: 'green',
          region: 'us-west-2',
          stage: 'beta',
        },
        Id: 'i-abcd1234',
      },
    },
    required: [],
  })
  .openapi('GetInstanceResponse')

const GetInstanceRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the service that the instance is associated with.' }),
    ),
    InstanceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the instance that you want to get information about.' }),
    ),
  })
  .openapi({ required: ['ServiceId', 'InstanceId'], title: 'GetInstanceRequest' })
  .openapi('GetInstanceRequest')

const InstanceHealthStatusMapSchema = z
  .record(z.string(), HealthStatusSchema)
  .openapi('InstanceHealthStatusMap')

const NextTokenSchema = z.string().max(4096).openapi('NextToken')

const GetInstancesHealthStatusResponseSchema = z
  .object({
    Status: InstanceHealthStatusMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the IDs and the health status of the instances that you specified in the <code>GetInstancesHealthStatus</code> request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Status: { 'i-abcd1234': 'HEALTHY', 'i-abcd1235': 'UNHEALTHY' } },
    required: [],
  })
  .openapi('GetInstancesHealthStatusResponse')

const InstanceIdListSchema = z.array(ResourceIdSchema).min(1).openapi('InstanceIdList')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const GetInstancesHealthStatusRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the service that the instance is associated with.' }),
    ),
    Instances: InstanceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that contains the IDs of all the instances that you want to get the health status for.</p> <p>If you omit <code>Instances</code>, Cloud Map returns the health status for all the instances that are associated with the specified service.</p> <note> <p>To get the IDs for the instances that you\'ve registered by using a specified service, submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html">ListInstances</a> request.</p> </note>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of instances that you want Cloud Map to return in the response to a <code>GetInstancesHealthStatus</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 instances.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>GetInstancesHealthStatus</code> request, omit this value.</p> <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceId'], title: 'GetInstancesHealthStatusRequest' })
  .openapi('GetInstancesHealthStatusRequest')

const NamespaceTypeSchema = z.enum(['DNS_PUBLIC', 'DNS_PRIVATE', 'HTTP']).openapi('NamespaceType')

const DnsPropertiesSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.',
        }),
    ).exactOptional(),
    SOA: SOASchema.and(
      z.any().openapi({ description: 'Start of Authority (SOA) record for the hosted zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.',
    required: [],
  })
  .openapi('DnsProperties')

const HttpPropertiesSchema = z
  .object({
    HttpName: NamespaceNameSchema.and(
      z.any().openapi({ description: 'The name of an HTTP namespace.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains the name of an HTTP namespace.',
    required: [],
  })
  .openapi('HttpProperties')

const NamespacePropertiesSchema = z
  .object({
    DnsProperties: DnsPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.',
        }),
    ).exactOptional(),
    HttpProperties: HttpPropertiesSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains the name of an HTTP namespace.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "A complex type that contains information that's specific to the namespace type.",
    required: [],
  })
  .openapi('NamespaceProperties')

const NamespaceSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of a namespace.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that Cloud Map assigns to the namespace when you create it.',
        }),
    ).exactOptional(),
    Name: NamespaceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the namespace, such as <code>example.com</code>.' }),
    ).exactOptional(),
    Type: NamespaceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the namespace. The methods for discovering instances depends on the value that you specify:</p> <dl> <dt>HTTP</dt> <dd> <p>Instances can be discovered only programmatically, using the Cloud Map <code>DiscoverInstances</code> API.</p> </dd> <dt>DNS_PUBLIC</dt> <dd> <p>Instances can be discovered using public DNS queries and using the <code>DiscoverInstances</code> API.</p> </dd> <dt>DNS_PRIVATE</dt> <dd> <p>Instances can be discovered using DNS queries in VPCs and using the <code>DiscoverInstances</code> API.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The description that you specify for the namespace when you create it.',
        }),
    ).exactOptional(),
    ServiceCount: ResourceCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of services that are associated with the namespace.' }),
    ).exactOptional(),
    Properties: NamespacePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that contains information that's specific to the type of the namespace.",
        }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running an operation twice. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about a specified namespace.',
    required: [],
  })
  .openapi('Namespace')

const GetNamespaceResponseSchema = z
  .object({
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the specified namespace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Namespace: {
        Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-e1tpmexample0001',
        CreateDate: '20181118T211712Z',
        CreatorRequestId: 'example-creator-request-id-0001',
        Description: 'Example.com AWS Cloud Map HTTP Namespace',
        Id: 'ns-e1tpmexample0001',
        Name: 'example-http.com',
        Properties: { DnsProperties: {}, HttpProperties: { HttpName: 'example-http.com' } },
        Type: 'HTTP',
      },
    },
    required: [],
  })
  .openapi('GetNamespaceResponse')

const GetNamespaceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the namespace that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['Id'], title: 'GetNamespaceRequest' })
  .openapi('GetNamespaceRequest')

const OperationTypeSchema = z
  .enum([
    'CREATE_NAMESPACE',
    'DELETE_NAMESPACE',
    'UPDATE_NAMESPACE',
    'UPDATE_SERVICE',
    'REGISTER_INSTANCE',
    'DEREGISTER_INSTANCE',
  ])
  .openapi('OperationType')

const OperationStatusSchema = z
  .enum(['SUBMITTED', 'PENDING', 'SUCCESS', 'FAIL'])
  .openapi('OperationStatus')

const MessageSchema = z.string().openapi('Message')

const CodeSchema = z.string().openapi('Code')

const OperationTargetsMapSchema = z
  .record(z.string(), ResourceIdSchema)
  .openapi('OperationTargetsMap')

const OperationSchema = z
  .object({
    Id: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the operation that you want to get information about.',
        }),
    ).exactOptional(),
    Type: OperationTypeSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the operation that's associated with the specified ID.",
        }),
    ).exactOptional(),
    Status: OperationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the operation. Values include the following:</p> <dl> <dt>SUBMITTED</dt> <dd> <p>This is the initial state that occurs immediately after you submit a request.</p> </dd> <dt>PENDING</dt> <dd> <p>Cloud Map is performing the operation.</p> </dd> <dt>SUCCESS</dt> <dd> <p>The operation succeeded.</p> </dd> <dt>FAIL</dt> <dd> <p>The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    ErrorMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value of <code>Status</code> is <code>FAIL</code>, the reason that the operation failed.',
        }),
    ).exactOptional(),
    ErrorCode: CodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The code associated with <code>ErrorMessage</code>. Values for <code>ErrorCode</code> include the following:</p> <ul> <li> <p> <code>ACCESS_DENIED</code> </p> </li> <li> <p> <code>CANNOT_CREATE_HOSTED_ZONE</code> </p> </li> <li> <p> <code>EXPIRED_TOKEN</code> </p> </li> <li> <p> <code>HOSTED_ZONE_NOT_FOUND</code> </p> </li> <li> <p> <code>INTERNAL_FAILURE</code> </p> </li> <li> <p> <code>INVALID_CHANGE_BATCH</code> </p> </li> <li> <p> <code>THROTTLED_REQUEST</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    UpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the value of <code>Status</code> changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>UpdateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    Targets: OperationTargetsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the target entity that's associated with the operation:</p> <dl> <dt>NAMESPACE</dt> <dd> <p>The namespace ID is returned in the <code>ResourceId</code> property.</p> </dd> <dt>SERVICE</dt> <dd> <p>The service ID is returned in the <code>ResourceId</code> property.</p> </dd> <dt>INSTANCE</dt> <dd> <p>The instance ID is returned in the <code>ResourceId</code> property.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about a specified operation.',
    required: [],
  })
  .openapi('Operation')

const GetOperationResponseSchema = z
  .object({
    Operation: OperationSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains information about the operation.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Operation: {
        CreateDate: 1587055860.121,
        Id: 'gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd',
        Status: 'SUCCESS',
        Targets: { NAMESPACE: 'ns-ylexjili4cdxy3xm' },
        Type: 'CREATE_NAMESPACE',
        UpdateDate: 1587055900.469,
      },
    },
    required: [],
  })
  .openapi('GetOperationResponse')

const GetOperationRequestSchema = z
  .object({
    OperationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the operation that you want to get more information about.',
        }),
    ),
  })
  .openapi({ required: ['OperationId'], title: 'GetOperationRequest' })
  .openapi('GetOperationRequest')

const OperationNotFoundSchema = z.any().openapi('OperationNotFound')

const GetServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains information about the service.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Service: {
        Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004',
        CreateDate: '20181118T211707Z',
        CreatorRequestId: 'example-creator-request-id-0004',
        Description: 'Example.com AWS Cloud Map HTTP Service',
        HealthCheckConfig: { FailureThreshold: 3, ResourcePath: '/', Type: 'HTTPS' },
        Id: 'srv-e4anhexample0004',
        Name: 'example-http-service',
        NamespaceId: 'ns-e4anhexample0004',
      },
    },
    required: [],
  })
  .openapi('GetServiceResponse')

const GetServiceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the service that you want to get settings for.' }),
    ),
  })
  .openapi({ required: ['Id'], title: 'GetServiceRequest' })
  .openapi('GetServiceRequest')

const InstanceSummarySchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID for an instance that you created by using a specified service.',
        }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A string map that contains the following information:</p> <ul> <li> <p>The attributes that are associated with the instance. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <p>Supported attribute keys include the following:</p> <dl> <dt>AWS_ALIAS_DNS_NAME</dt> <dd> <p>For an alias record that routes traffic to an Elastic Load Balancing load balancer, the DNS name that's associated with the load balancer. </p> </dd> <dt>AWS_EC2_INSTANCE_ID (HTTP namespaces only)</dt> <dd> <p>The Amazon EC2 instance ID for the instance. When the <code>AWS_EC2_INSTANCE_ID</code> attribute is specified, then the <code>AWS_INSTANCE_IPV4</code> attribute contains the primary private IPv4 address.</p> </dd> <dt>AWS_INIT_HEALTH_STATUS</dt> <dd> <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use <code>AWS_INIT_HEALTH_STATUS</code> to specify the initial status of the custom health check, <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value for <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p> </dd> <dt>AWS_INSTANCE_CNAME</dt> <dd> <p>For a <code>CNAME</code> record, the domain name that Route 53 returns in response to DNS queries (for example, <code>example.com</code>).</p> </dd> <dt>AWS_INSTANCE_IPV4</dt> <dd> <p>For an <code>A</code> record, the IPv4 address that Route 53 returns in response to DNS queries (for example, <code>192.0.2.44</code>).</p> </dd> <dt>AWS_INSTANCE_IPV6</dt> <dd> <p>For an <code>AAAA</code> record, the IPv6 address that Route 53 returns in response to DNS queries (for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>).</p> </dd> <dt>AWS_INSTANCE_PORT</dt> <dd> <p>For an <code>SRV</code> record, the value that Route 53 returns for the port. In addition, if the service includes <code>HealthCheckConfig</code>, the port on the endpoint that Route 53 sends requests to.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains information about the instances that you registered by using a specified service.',
    required: [],
  })
  .openapi('InstanceSummary')

const InstanceSummaryListSchema = z.array(InstanceSummarySchema).openapi('InstanceSummaryList')

const ListInstancesResponseSchema = z
  .object({
    Instances: InstanceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information about the instances that are associated with the specified service.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>ListInstances</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Instances: [
        {
          Attributes: { AWS_INSTANCE_IPV4: '172.2.1.3', AWS_INSTANCE_PORT: '808' },
          Id: 'i-06bdabbae60f65a4e',
        },
      ],
    },
    required: [],
  })
  .openapi('ListInstancesResponse')

const ListInstancesRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the service that you want to list instances for.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListInstances</code> request, omit this value.</p> <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>ListInstances</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of instances that you want Cloud Map to return in the response to a <code>ListInstances</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 instances.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceId'], title: 'ListInstancesRequest' })
  .openapi('ListInstancesRequest')

const NamespaceSummarySchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the namespace.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that Cloud Map assigns to the namespace when you create it.',
        }),
    ).exactOptional(),
    Name: NamespaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the namespace. When you create a namespace, Cloud Map automatically creates a Route 53 hosted zone that has the same name as the namespace.',
        }),
    ).exactOptional(),
    Type: NamespaceTypeSchema.and(
      z.any().openapi({ description: 'The type of the namespace, either public or private.' }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the namespace.' }),
    ).exactOptional(),
    ServiceCount: ResourceCountSchema.and(
      z
        .any()
        .openapi({ description: 'The number of services that were created using the namespace.' }),
    ).exactOptional(),
    Properties: NamespacePropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the namespace.' }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the namespace was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about a namespace.',
    required: [],
  })
  .openapi('NamespaceSummary')

const NamespaceSummariesListSchema = z
  .array(NamespaceSummarySchema)
  .openapi('NamespaceSummariesList')

const ListNamespacesResponseSchema = z
  .object({
    Namespaces: NamespaceSummariesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <code>NamespaceSummary</code> object for each namespace that matches the specified filter criteria.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's possible that no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that subsequent groups of <code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Namespaces: [
        {
          Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-a3ccy2e7e3a7rile',
          CreateDate: 1585354387.357,
          Id: 'ns-a3ccy2e7e3a7rile',
          Name: 'local',
          Properties: {
            DnsProperties: { HostedZoneId: 'Z06752353VBUDTC32S84S' },
            HttpProperties: { HttpName: 'local' },
          },
          Type: 'DNS_PRIVATE',
        },
        {
          Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-pocfyjtrsmwtvcxx',
          CreateDate: 1586468974.698,
          Description: 'My second namespace',
          Id: 'ns-pocfyjtrsmwtvcxx',
          Name: 'My-second-namespace',
          Properties: { DnsProperties: {}, HttpProperties: { HttpName: 'My-second-namespace' } },
          Type: 'HTTP',
        },
        {
          Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-ylexjili4cdxy3xm',
          CreateDate: 1587055896.798,
          Id: 'ns-ylexjili4cdxy3xm',
          Name: 'example.com',
          Properties: {
            DnsProperties: { HostedZoneId: 'Z09983722P0QME1B3KC8I' },
            HttpProperties: { HttpName: 'example.com' },
          },
          Type: 'DNS_PRIVATE',
        },
      ],
    },
    required: [],
  })
  .openapi('ListNamespacesResponse')

const NamespaceFilterNameSchema = z
  .enum(['TYPE', 'NAME', 'HTTP_NAME'])
  .openapi('NamespaceFilterName')

const FilterValueSchema = z.string().min(1).max(255).openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const FilterConditionSchema = z
  .enum(['EQ', 'IN', 'BETWEEN', 'BEGINS_WITH'])
  .openapi('FilterCondition')

const NamespaceFilterSchema = z
  .object({
    Name: NamespaceFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the namespaces that you want to get using one of the following.</p> <ul> <li> <p> <code>TYPE</code>: Gets the namespaces of the specified type.</p> </li> <li> <p> <code>NAME</code>: Gets the namespaces with the specified name.</p> </li> <li> <p> <code>HTTP_NAME</code>: Gets the namespaces with the specified HTTP name.</p> </li> </ul>',
        }),
    ),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the values that are applicable to the value that you specify for <code>Name</code>.</p> <ul> <li> <p> <code>TYPE</code>: Specify <code>HTTP</code>, <code>DNS_PUBLIC</code>, or <code>DNS_PRIVATE</code>.</p> </li> <li> <p> <code>NAME</code>: Specify the name of the namespace, which is found in <code>Namespace.Name</code>.</p> </li> <li> <p> <code>HTTP_NAME</code>: Specify the HTTP name of the namespace, which is found in <code>Namespace.Properties.HttpProperties.HttpName</code>.</p> </li> </ul>',
        }),
    ),
    Condition: FilterConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the operator that you want to use to determine whether a namespace matches the specified value. Valid values for <code>Condition</code> are one of the following.</p> <ul> <li> <p> <code>EQ</code>: When you specify <code>EQ</code> for <code>Condition</code>, you can specify only one value. <code>EQ</code> is supported for <code>TYPE</code>, <code>NAME</code>, and <code>HTTP_NAME</code>. <code>EQ</code> is the default condition and can be omitted.</p> </li> <li> <p> <code>BEGINS_WITH</code>: When you specify <code>BEGINS_WITH</code> for <code>Condition</code>, you can specify only one value. <code>BEGINS_WITH</code> is supported for <code>TYPE</code>, <code>NAME</code>, and <code>HTTP_NAME</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      'A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.',
  })
  .openapi('NamespaceFilter')

const NamespaceFiltersSchema = z.array(NamespaceFilterSchema).openapi('NamespaceFilters')

const ListNamespacesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For the first <code>ListNamespaces</code> request, omit this value.</p> <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's possible that no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that subsequent groups of <code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of namespaces that you want Cloud Map to return in the response to a <code>ListNamespaces</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 namespaces.",
        }),
    ).exactOptional(),
    Filters: NamespaceFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains specifications for the namespaces that you want to list.</p> <p>If you specify more than one filter, a namespace must match all filters to be returned by <code>ListNamespaces</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNamespacesRequest', required: [] })
  .openapi('ListNamespacesRequest')

const OperationSummarySchema = z
  .object({
    Id: OperationIdSchema.and(
      z.any().openapi({ description: 'The ID for an operation.' }),
    ).exactOptional(),
    Status: OperationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the operation. Values include the following:</p> <ul> <li> <p> <b>SUBMITTED</b>: This is the initial state immediately after you submit a request.</p> </li> <li> <p> <b>PENDING</b>: Cloud Map is performing the operation.</p> </li> <li> <p> <b>SUCCESS</b>: The operation succeeded.</p> </li> <li> <p> <b>FAIL</b>: The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.',
    required: [],
  })
  .openapi('OperationSummary')

const OperationSummaryListSchema = z.array(OperationSummarySchema).openapi('OperationSummaryList')

const ListOperationsResponseSchema = z
  .object({
    Operations: OperationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information about the operations that match the specified criteria.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's possible that no operations in the first <code>MaxResults</code> operations matched the specified criteria but that subsequent groups of <code>MaxResults</code> operations do contain operations that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Operations: [
        { Id: '76yy8ovhpdz0plmjzbsnqgnrqvpv2qdt-kexample', Status: 'SUCCESS' },
        { Id: 'prysnyzpji3u2ciy45nke83x2zanl7yk-dexample', Status: 'SUCCESS' },
        { Id: 'ko4ekftir7kzlbechsh7xvcdgcpk66gh-7example', Status: 'PENDING' },
      ],
    },
    required: [],
  })
  .openapi('ListOperationsResponse')

const OperationFilterNameSchema = z
  .enum(['NAMESPACE_ID', 'SERVICE_ID', 'STATUS', 'TYPE', 'UPDATE_DATE'])
  .openapi('OperationFilterName')

const OperationFilterSchema = z
  .object({
    Name: OperationFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the operations that you want to get:</p> <ul> <li> <p> <b>NAMESPACE_ID</b>: Gets operations related to specified namespaces.</p> </li> <li> <p> <b>SERVICE_ID</b>: Gets operations related to specified services.</p> </li> <li> <p> <b>STATUS</b>: Gets operations based on the status of the operations: <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p> </li> <li> <p> <b>TYPE</b>: Gets specified types of operation.</p> </li> <li> <p> <b>UPDATE_DATE</b>: Gets operations that changed status during a specified date/time range. </p> </li> </ul>',
        }),
    ),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify values that are applicable to the value that you specify for <code>Name</code>: </p> <ul> <li> <p> <b>NAMESPACE_ID</b>: Specify one namespace ID.</p> </li> <li> <p> <b>SERVICE_ID</b>: Specify one service ID.</p> </li> <li> <p> <b>STATUS</b>: Specify one or more statuses: <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p> </li> <li> <p> <b>TYPE</b>: Specify one or more of the following types: <code>CREATE_NAMESPACE</code>, <code>DELETE_NAMESPACE</code>, <code>UPDATE_SERVICE</code>, <code>REGISTER_INSTANCE</code>, or <code>DEREGISTER_INSTANCE</code>.</p> </li> <li> <p> <b>UPDATE_DATE</b>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value.</p> </li> </ul>',
        }),
    ),
    Condition: FilterConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operator that you want to use to determine whether an operation matches the specified value. Valid values for condition include:</p> <ul> <li> <p> <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can specify only one value. <code>EQ</code> is supported for <code>NAMESPACE_ID</code>, <code>SERVICE_ID</code>, <code>STATUS</code>, and <code>TYPE</code>. <code>EQ</code> is the default condition and can be omitted.</p> </li> <li> <p> <code>IN</code>: When you specify <code>IN</code> for the condition, you can specify a list of one or more values. <code>IN</code> is supported for <code>STATUS</code> and <code>TYPE</code>. An operation must match one of the specified values to be returned in the response.</p> </li> <li> <p> <code>BETWEEN</code>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value. <code>BETWEEN</code> is supported for <code>UPDATE_DATE</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Values'],
    description: 'A complex type that lets you select the operations that you want to list.',
  })
  .openapi('OperationFilter')

const OperationFiltersSchema = z.array(OperationFilterSchema).openapi('OperationFilters')

const ListOperationsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For the first <code>ListOperations</code> request, omit this value.</p> <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's possible that no operations in the first <code>MaxResults</code> operations matched the specified criteria but that subsequent groups of <code>MaxResults</code> operations do contain operations that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of items that you want Cloud Map to return in the response to a <code>ListOperations</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 operations.",
        }),
    ).exactOptional(),
    Filters: OperationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains specifications for the operations that you want to list, for example, operations that you started between a specified start date and end date.</p> <p>If you specify more than one filter, an operation must match all filters to be returned by <code>ListOperations</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListOperationsRequest', required: [] })
  .openapi('ListOperationsRequest')

const ServiceSummarySchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that Cloud Map assigned to the service when you created it.',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that Cloud Map assigns to the service when you create it.',
        }),
    ).exactOptional(),
    Name: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the service.' }),
    ).exactOptional(),
    Type: ServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the systems that can be used to discover the service instances.</p> <dl> <dt>DNS_HTTP</dt> <dd> <p>The service instances can be discovered using either DNS queries or the <code>DiscoverInstances</code> API operation.</p> </dd> <dt>HTTP</dt> <dd> <p>The service instances can only be discovered using the <code>DiscoverInstances</code> API operation.</p> </dd> <dt>DNS</dt> <dd> <p>Reserved.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description that you specify when you create the service.' }),
    ).exactOptional(),
    InstanceCount: ResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of instances that are currently associated with the service. Instances that were previously associated with the service but that are deleted aren't included in the count. The count might not reflect pending registrations and deregistrations.",
        }),
    ).exactOptional(),
    DnsConfig: DnsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.',
        }),
    ).exactOptional(),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>Public DNS and HTTP namespaces only.</i> Settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.',
        }),
    ).exactOptional(),
    HealthCheckCustomConfig: HealthCheckCustomConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that's defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are located.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important>",
        }),
    ).exactOptional(),
    CreateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the service was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about a specified service.',
    required: [],
  })
  .openapi('ServiceSummary')

const ServiceSummariesListSchema = z.array(ServiceSummarySchema).openapi('ServiceSummariesList')

const ListServicesResponseSchema = z
  .object({
    Services: ServiceSummariesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <code>ServiceSummary</code> object for each service that matches the specified filter criteria.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's possible that no services in the first <code>MaxResults</code> services matched the specified criteria but that subsequent groups of <code>MaxResults</code> services do contain services that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Services: [
        {
          Arn: 'arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita',
          CreateDate: 1587081768.334,
          DnsConfig: { DnsRecords: [{ TTL: 60, Type: 'A' }], RoutingPolicy: 'MULTIVALUE' },
          Id: 'srv-p5zdwlg5uvvzjita',
          Name: 'myservice',
        },
      ],
    },
    required: [],
  })
  .openapi('ListServicesResponse')

const ServiceFilterNameSchema = z.literal('NAMESPACE_ID').openapi('ServiceFilterName')

const ServiceFilterSchema = z
  .object({
    Name: ServiceFilterNameSchema.and(
      z.any().openapi({ description: 'Specify <code>NAMESPACE_ID</code>.' }),
    ),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values that are applicable to the value that you specify for <code>Condition</code> to filter the list of services.',
        }),
    ),
    Condition: FilterConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operator that you want to use to determine whether a service is returned by <code>ListServices</code>. Valid values for <code>Condition</code> include the following:</p> <ul> <li> <p> <code>EQ</code>: When you specify <code>EQ</code>, specify one namespace ID for <code>Values</code>. <code>EQ</code> is the default condition and can be omitted.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      'A complex type that lets you specify the namespaces that you want to list services for.',
  })
  .openapi('ServiceFilter')

const ServiceFiltersSchema = z.array(ServiceFilterSchema).openapi('ServiceFilters')

const ListServicesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For the first <code>ListServices</code> request, omit this value.</p> <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's possible that no services in the first <code>MaxResults</code> services matched the specified criteria but that subsequent groups of <code>MaxResults</code> services do contain services that match the criteria.</p> </note>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of services that you want Cloud Map to return in the response to a <code>ListServices</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 services.",
        }),
    ).exactOptional(),
    Filters: ServiceFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains specifications for the namespaces that you want to list services for. </p> <p>If you specify more than one filter, an operation must match all filters to be returned by <code>ListServices</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServicesRequest', required: [] })
  .openapi('ListServicesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags that are assigned to the resource.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Tags: [
        { Key: 'Project', Value: 'Zeta' },
        { Key: 'Department', Value: 'Engineering' },
      ],
    },
    required: [],
  })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const RegisterInstanceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: '4yejorelbukcjzpnr6tlmrghsjwpngf4-k95yg2u7' }, required: [] })
  .openapi('RegisterInstanceResponse')

const InstanceIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_\/:.@-]+$/)
  .max(64)
  .openapi('InstanceId')

const RegisterInstanceRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the service that you want to use for settings for the instance.',
        }),
    ),
    InstanceId: InstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An identifier that you want to associate with the instance. Note the following:</p> <ul> <li> <p>If the service that's specified by <code>ServiceId</code> includes settings for an <code>SRV</code> record, the value of <code>InstanceId</code> is automatically included as part of the value for the <code>SRV</code> record. For more information, see <a href=\"https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type\">DnsRecord &gt; Type</a>.</p> </li> <li> <p>You can use this value to update an existing instance.</p> </li> <li> <p>To register a new instance, you must specify a value that's unique among instances that you register by using the same service. </p> </li> <li> <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, Cloud Map updates the existing DNS records, if any. If there's also an existing health check, Cloud Map deletes the old health check and creates a new one. </p> <note> <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a <code>ListHealthChecks</code> request, for example.</p> </note> </li> </ul> <note> <p>Do not include sensitive information in <code>InstanceId</code> if the namespace is discoverable by public DNS queries and any <code>Type</code> member of <code>DnsRecord</code> for the service contains <code>SRV</code> because the <code>InstanceId</code> is discoverable by public DNS queries.</p> </note>",
        }),
    ),
    CreatorRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string every time you submit a <code>RegisterInstance</code> request if you're registering additional instances for the same namespace and service. <code>CreatorRequestId</code> can be any unique string (for example, a date/time stamp).",
        }),
    ).exactOptional(),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A string map that contains the following information for the service that you specify in <code>ServiceId</code>:</p> <ul> <li> <p>The attributes that apply to the records that are defined in the service. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <note> <p>Do not include sensitive information in the attributes if the namespace is discoverable by public DNS queries.</p> </note> <p>Supported attribute keys include the following:</p> <dl> <dt>AWS_ALIAS_DNS_NAME</dt> <dd> <p>If you want Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that's associated with the load balancer. For information about how to get the DNS name, see \"DNSName\" in the topic <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html\">AliasTarget</a> in the <i>Route 53 API Reference</i>.</p> <p>Note the following:</p> <ul> <li> <p>The configuration for the service that's specified by <code>ServiceId</code> must include settings for an <code>A</code> record, an <code>AAAA</code> record, or both.</p> </li> <li> <p>In the service that's specified by <code>ServiceId</code>, the value of <code>RoutingPolicy</code> must be <code>WEIGHTED</code>.</p> </li> <li> <p>If the service that's specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code> settings, Cloud Map will create the Route 53 health check, but it doesn't associate the health check with the alias record.</p> </li> <li> <p>Auto naming currently doesn't support creating alias records that route traffic to Amazon Web Services resources other than Elastic Load Balancing load balancers.</p> </li> <li> <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the <code>AWS_INSTANCE</code> attributes.</p> </li> </ul> </dd> <dt>AWS_EC2_INSTANCE_ID</dt> <dd> <p> <i>HTTP namespaces only.</i> The Amazon EC2 instance ID for the instance. If the <code>AWS_EC2_INSTANCE_ID</code> attribute is specified, then the only other attribute that can be specified is <code>AWS_INIT_HEALTH_STATUS</code>. When the <code>AWS_EC2_INSTANCE_ID</code> attribute is specified, then the <code>AWS_INSTANCE_IPV4</code> attribute will be filled out with the primary private IPv4 address.</p> </dd> <dt>AWS_INIT_HEALTH_STATUS</dt> <dd> <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use <code>AWS_INIT_HEALTH_STATUS</code> to specify the initial status of the custom health check, <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value for <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p> </dd> <dt>AWS_INSTANCE_CNAME</dt> <dd> <p>If the service configuration includes a <code>CNAME</code> record, the domain name that you want Route 53 to return in response to DNS queries (for example, <code>example.com</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>CNAME</code> record.</p> </dd> <dt>AWS_INSTANCE_IPV4</dt> <dd> <p>If the service configuration includes an <code>A</code> record, the IPv4 address that you want Route 53 to return in response to DNS queries (for example, <code>192.0.2.44</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>A</code> record. If the service includes settings for an <code>SRV</code> record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> </dd> <dt>AWS_INSTANCE_IPV6</dt> <dd> <p>If the service configuration includes an <code>AAAA</code> record, the IPv6 address that you want Route 53 to return in response to DNS queries (for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>).</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an <code>AAAA</code> record. If the service includes settings for an <code>SRV</code> record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> </dd> <dt>AWS_INSTANCE_PORT</dt> <dd> <p>If the service includes an <code>SRV</code> record, the value that you want Route 53 to return for the port.</p> <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to send requests to. </p> <p>This value is required if you specified settings for an <code>SRV</code> record or a Route 53 health check when you created the service.</p> </dd> <dt>Custom attributes</dt> <dd> <p>You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name is 255 characters, and the maximum length of the attribute value is 1,024 characters. The total size of all provided attributes (sum of all keys and values) must not exceed 5,000 characters.</p> </dd> </dl>",
        }),
    ),
  })
  .openapi({
    required: ['ServiceId', 'InstanceId', 'Attributes'],
    title: 'RegisterInstanceRequest',
  })
  .openapi('RegisterInstanceRequest')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The tags to add to the specified resource. Specifying the tag key is required. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.",
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The tag keys to remove from the specified resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateHttpNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateHttpNamespaceResponse')

const HttpNamespaceChangeSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An updated description for the HTTP namespace.' }),
    ),
  })
  .openapi({ required: ['Description'], description: 'Updated properties for the HTTP namespace.' })
  .openapi('HttpNamespaceChange')

const UpdateHttpNamespaceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the namespace that you want to update.' }),
    ),
    UpdaterRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>UpdateHttpNamespace</code> requests to be retried without the risk of running the operation twice. <code>UpdaterRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Namespace: HttpNamespaceChangeSchema.and(
      z.any().openapi({ description: 'Updated properties for the the HTTP namespace.' }),
    ),
  })
  .openapi({ required: ['Id', 'Namespace'], title: 'UpdateHttpNamespaceRequest' })
  .openapi('UpdateHttpNamespaceRequest')

const CustomHealthStatusSchema = z.enum(['HEALTHY', 'UNHEALTHY']).openapi('CustomHealthStatus')

const UpdateInstanceCustomHealthStatusRequestSchema = z
  .object({
    ServiceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the service that includes the configuration for the custom health check that you want to change the status for.',
        }),
    ),
    InstanceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the instance that you want to change the health status for.',
        }),
    ),
    Status: CustomHealthStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new status of the instance, <code>HEALTHY</code> or <code>UNHEALTHY</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ServiceId', 'InstanceId', 'Status'],
    title: 'UpdateInstanceCustomHealthStatusRequest',
  })
  .openapi('UpdateInstanceCustomHealthStatusRequest')

const CustomHealthNotFoundSchema = z.any().openapi('CustomHealthNotFound')

const UpdatePrivateDnsNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePrivateDnsNamespaceResponse')

const SOAChangeSchema = z
  .object({
    TTL: RecordTTLSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated time to live (TTL) for purposes of negative caching.',
        }),
    ),
  })
  .openapi({
    required: ['TTL'],
    description:
      'Updated Start of Authority (SOA) properties for a public or private DNS namespace.',
  })
  .openapi('SOAChange')

const PrivateDnsPropertiesMutableChangeSchema = z
  .object({
    SOA: SOAChangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updated fields for the Start of Authority (SOA) record for the hosted zone for the private DNS namespace.',
        }),
    ),
  })
  .openapi({
    required: ['SOA'],
    description: 'Updated DNS properties for the private DNS namespace.',
  })
  .openapi('PrivateDnsPropertiesMutableChange')

const PrivateDnsNamespacePropertiesChangeSchema = z
  .object({
    DnsProperties: PrivateDnsPropertiesMutableChangeSchema.and(
      z.any().openapi({ description: 'Updated DNS properties for the private DNS namespace.' }),
    ),
  })
  .openapi({
    required: ['DnsProperties'],
    description: 'Updated properties for the private DNS namespace.',
  })
  .openapi('PrivateDnsNamespacePropertiesChange')

const PrivateDnsNamespaceChangeSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An updated description for the private DNS namespace.' }),
    ).exactOptional(),
    Properties: PrivateDnsNamespacePropertiesChangeSchema.and(
      z.any().openapi({ description: 'Properties to be updated in the private DNS namespace.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Updated properties for the private DNS namespace.', required: [] })
  .openapi('PrivateDnsNamespaceChange')

const UpdatePrivateDnsNamespaceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the namespace that you want to update.' }),
    ),
    UpdaterRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>UpdatePrivateDnsNamespace</code> requests to be retried without the risk of running the operation twice. <code>UpdaterRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Namespace: PrivateDnsNamespaceChangeSchema.and(
      z.any().openapi({ description: 'Updated properties for the private DNS namespace.' }),
    ),
  })
  .openapi({ required: ['Id', 'Namespace'], title: 'UpdatePrivateDnsNamespaceRequest' })
  .openapi('UpdatePrivateDnsNamespaceRequest')

const UpdatePublicDnsNamespaceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePublicDnsNamespaceResponse')

const PublicDnsPropertiesMutableChangeSchema = z
  .object({
    SOA: SOAChangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updated fields for the Start of Authority (SOA) record for the hosted zone for the public DNS namespace.',
        }),
    ),
  })
  .openapi({
    required: ['SOA'],
    description: 'Updated DNS properties for the public DNS namespace.',
  })
  .openapi('PublicDnsPropertiesMutableChange')

const PublicDnsNamespacePropertiesChangeSchema = z
  .object({
    DnsProperties: PublicDnsPropertiesMutableChangeSchema.and(
      z
        .any()
        .openapi({
          description: 'Updated DNS properties for the hosted zone for the public DNS namespace.',
        }),
    ),
  })
  .openapi({
    required: ['DnsProperties'],
    description: 'Updated properties for the public DNS namespace.',
  })
  .openapi('PublicDnsNamespacePropertiesChange')

const PublicDnsNamespaceChangeSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An updated description for the public DNS namespace.' }),
    ).exactOptional(),
    Properties: PublicDnsNamespacePropertiesChangeSchema.and(
      z.any().openapi({ description: 'Properties to be updated in the public DNS namespace.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Updated properties for the public DNS namespace.', required: [] })
  .openapi('PublicDnsNamespaceChange')

const UpdatePublicDnsNamespaceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the namespace being updated.' }),
    ),
    UpdaterRequestId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>UpdatePublicDnsNamespace</code> requests to be retried without the risk of running the operation twice. <code>UpdaterRequestId</code> can be any unique string (for example, a date/timestamp).',
        }),
    ).exactOptional(),
    Namespace: PublicDnsNamespaceChangeSchema.and(
      z.any().openapi({ description: 'Updated properties for the public DNS namespace.' }),
    ),
  })
  .openapi({ required: ['Id', 'Namespace'], title: 'UpdatePublicDnsNamespaceRequest' })
  .openapi('UpdatePublicDnsNamespaceRequest')

const UpdateServiceResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { OperationId: 'm35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5' }, required: [] })
  .openapi('UpdateServiceResponse')

const DnsConfigChangeSchema = z
  .object({
    DnsRecords: DnsRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <code>DnsRecord</code> object for each Route 53 record that you want Cloud Map to create when you register an instance.',
        }),
    ),
  })
  .openapi({
    required: ['DnsRecords'],
    description:
      'A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.',
  })
  .openapi('DnsConfigChange')

const ServiceChangeSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the service.' }),
    ).exactOptional(),
    DnsConfig: DnsConfigChangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.',
        }),
    ).exactOptional(),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>Public DNS and HTTP namespaces only.</i> Settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains changes to an existing service.',
    required: [],
  })
  .openapi('ServiceChange')

const UpdateServiceRequestSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the service that you want to update.' }),
    ),
    Service: ServiceChangeSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains the new settings for the service.' }),
    ),
  })
  .openapi({ required: ['Id', 'Service'], title: 'UpdateServiceRequest' })
  .openapi('UpdateServiceRequest')

const AttrKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9!-~]+$/)
  .max(255)
  .openapi('AttrKey')

const OperationTargetTypeSchema = z
  .enum(['NAMESPACE', 'SERVICE', 'INSTANCE'])
  .openapi('OperationTargetType')

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

export const postXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace',
  description:
    '<p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can\'t be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>',
  operationId: 'CreateHttpNamespace',
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
        .literal('Route53AutoNaming_v20170314.CreateHttpNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.CreateHttpNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateHttpNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHttpNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceAlreadyExists',
      content: { 'application/json': { schema: NamespaceAlreadyExistsSchema } },
    },
    482: {
      description: 'ResourceLimitExceeded',
      content: { 'application/json': { schema: ResourceLimitExceededSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace',
  description:
    'Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.',
  operationId: 'CreatePrivateDnsNamespace',
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
        .literal('Route53AutoNaming_v20170314.CreatePrivateDnsNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePrivateDnsNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePrivateDnsNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceAlreadyExists',
      content: { 'application/json': { schema: NamespaceAlreadyExistsSchema } },
    },
    482: {
      description: 'ResourceLimitExceeded',
      content: { 'application/json': { schema: ResourceLimitExceededSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace',
  description:
    '<p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>',
  operationId: 'CreatePublicDnsNamespace',
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
        .literal('Route53AutoNaming_v20170314.CreatePublicDnsNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53AutoNaming_v20170314.CreatePublicDnsNamespace'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePublicDnsNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePublicDnsNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceAlreadyExists',
      content: { 'application/json': { schema: NamespaceAlreadyExistsSchema } },
    },
    482: {
      description: 'ResourceLimitExceeded',
      content: { 'application/json': { schema: ResourceLimitExceededSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314CreateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService',
  description:
    '<p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>',
  operationId: 'CreateService',
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
        .literal('Route53AutoNaming_v20170314.CreateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.CreateService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'ResourceLimitExceeded',
      content: { 'application/json': { schema: ResourceLimitExceededSchema } },
    },
    482: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    483: {
      description: 'ServiceAlreadyExists',
      content: { 'application/json': { schema: ServiceAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace',
  description:
    'Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.',
  operationId: 'DeleteNamespace',
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
        .literal('Route53AutoNaming_v20170314.DeleteNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.DeleteNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314DeleteServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService',
  description:
    'Deletes a specified service. If the service still contains one or more registered instances, the request fails.',
  operationId: 'DeleteService',
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
        .literal('Route53AutoNaming_v20170314.DeleteService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.DeleteService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance',
  description:
    'Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.',
  operationId: 'DeregisterInstance',
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
        .literal('Route53AutoNaming_v20170314.DeregisterInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.DeregisterInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterInstanceResponseSchema } },
    },
    480: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    482: {
      description: 'InstanceNotFound',
      content: { 'application/json': { schema: InstanceNotFoundSchema } },
    },
    483: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    484: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances',
  description:
    'Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.',
  operationId: 'DiscoverInstances',
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
        .literal('Route53AutoNaming_v20170314.DiscoverInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.DiscoverInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DiscoverInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DiscoverInstancesResponseSchema } },
    },
    480: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    482: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    483: {
      description: 'RequestLimitExceeded',
      content: { 'application/json': { schema: RequestLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314GetInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance',
  description: 'Gets information about a specified instance.',
  operationId: 'GetInstance',
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
        .literal('Route53AutoNaming_v20170314.GetInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.GetInstance'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetInstanceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceResponseSchema } },
    },
    480: {
      description: 'InstanceNotFound',
      content: { 'application/json': { schema: InstanceNotFoundSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    482: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus',
  description:
    "<p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>",
  operationId: 'GetInstancesHealthStatus',
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
        .literal('Route53AutoNaming_v20170314.GetInstancesHealthStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53AutoNaming_v20170314.GetInstancesHealthStatus'],
            },
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
      content: { 'application/json': { schema: GetInstancesHealthStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstancesHealthStatusResponseSchema } },
    },
    480: {
      description: 'InstanceNotFound',
      content: { 'application/json': { schema: InstanceNotFoundSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    482: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314GetNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace',
  description: 'Gets information about a namespace.',
  operationId: 'GetNamespace',
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
        .literal('Route53AutoNaming_v20170314.GetNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.GetNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314GetOperationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation',
  description:
    '<p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>',
  operationId: 'GetOperation',
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
        .literal('Route53AutoNaming_v20170314.GetOperation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.GetOperation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOperationResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationNotFound',
      content: { 'application/json': { schema: OperationNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314GetServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.GetService',
  description: 'Gets the settings for a specified service.',
  operationId: 'GetService',
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
        .literal('Route53AutoNaming_v20170314.GetService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.GetService'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetServiceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314ListInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances',
  description:
    'Lists summary information about the instances that you registered by using a specified service.',
  operationId: 'ListInstances',
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
        .literal('Route53AutoNaming_v20170314.ListInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.ListInstances'] },
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
      content: { 'application/json': { schema: ListInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
    480: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314ListNamespacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces',
  description:
    'Lists summary information about the namespaces that were created by the current Amazon Web Services account.',
  operationId: 'ListNamespaces',
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
        .literal('Route53AutoNaming_v20170314.ListNamespaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.ListNamespaces'] },
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
      content: { 'application/json': { schema: ListNamespacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNamespacesResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314ListOperationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations',
  description: 'Lists operations that match the criteria that you specify.',
  operationId: 'ListOperations',
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
        .literal('Route53AutoNaming_v20170314.ListOperations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.ListOperations'] },
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
      content: { 'application/json': { schema: ListOperationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314ListServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices',
  description:
    'Lists summary information for all the services that are associated with one or more specified namespaces.',
  operationId: 'ListServices',
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
        .literal('Route53AutoNaming_v20170314.ListServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.ListServices'] },
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
      content: { 'application/json': { schema: ListServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource',
  description: 'Lists tags for the specified resource.',
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
        .literal('Route53AutoNaming_v20170314.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.ListTagsForResource'] },
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
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314RegisterInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance',
  description:
    '<p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that\'s specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that\'s associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn\'t specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>',
  operationId: 'RegisterInstance',
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
        .literal('Route53AutoNaming_v20170314.RegisterInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.RegisterInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterInstanceResponseSchema } },
    },
    480: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    483: {
      description: 'ResourceLimitExceeded',
      content: { 'application/json': { schema: ResourceLimitExceededSchema } },
    },
    484: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource',
  description: 'Adds one or more tags to the specified resource.',
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
        .literal('Route53AutoNaming_v20170314.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.TagResource'] },
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
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource',
  description: 'Removes one or more tags from the specified resource.',
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
        .literal('Route53AutoNaming_v20170314.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.UntagResource'] },
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
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace',
  description: 'Updates an HTTP namespace.',
  operationId: 'UpdateHttpNamespace',
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
        .literal('Route53AutoNaming_v20170314.UpdateHttpNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.UpdateHttpNamespace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateHttpNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateHttpNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus',
    description:
      '<p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can\'t use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>',
    operationId: 'UpdateInstanceCustomHealthStatus',
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
          .literal('Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateInstanceCustomHealthStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InstanceNotFound',
        content: { 'application/json': { schema: InstanceNotFoundSchema } },
      },
      481: {
        description: 'ServiceNotFound',
        content: { 'application/json': { schema: ServiceNotFoundSchema } },
      },
      482: {
        description: 'CustomHealthNotFound',
        content: { 'application/json': { schema: CustomHealthNotFoundSchema } },
      },
      483: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
    },
  })

export const postXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace',
  description: 'Updates a private DNS namespace.',
  operationId: 'UpdatePrivateDnsNamespace',
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
        .literal('Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePrivateDnsNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePrivateDnsNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace',
  description: 'Updates a public DNS namespace.',
  operationId: 'UpdatePublicDnsNamespace',
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
        .literal('Route53AutoNaming_v20170314.UpdatePublicDnsNamespace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePublicDnsNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePublicDnsNamespaceResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'NamespaceNotFound',
      content: { 'application/json': { schema: NamespaceNotFoundSchema } },
    },
    482: {
      description: 'ResourceInUse',
      content: { 'application/json': { schema: ResourceInUseSchema } },
    },
    483: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
  },
})

export const postXAmzTargetRoute53AutoNamingV20170314UpdateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService',
  description:
    "<p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>",
  operationId: 'UpdateService',
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
        .literal('Route53AutoNaming_v20170314.UpdateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53AutoNaming_v20170314.UpdateService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceResponseSchema } },
    },
    480: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    481: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    482: {
      description: 'ServiceNotFound',
      content: { 'application/json': { schema: ServiceNotFoundSchema } },
    },
  },
})
