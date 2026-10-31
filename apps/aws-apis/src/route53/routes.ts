import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdSchema = z.string().max(32).openapi('ResourceId')

const ChangeStatusSchema = z.enum(['PENDING', 'INSYNC']).openapi('ChangeStatus')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const ResourceDescriptionSchema = z.string().max(256).openapi('ResourceDescription')

const ChangeInfoSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'This element contains an ID that you use when performing a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a> action to get detailed information about the change.',
        }),
    ),
    Status: ChangeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the request. <code>PENDING</code> indicates that this request has not yet been applied to all Amazon Route 53 DNS servers.',
        }),
    ),
    SubmittedAt: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the change request was submitted in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.',
        }),
    ),
    Comment: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'A comment you can provide.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Status', 'SubmittedAt'],
    description:
      'A complex type that describes change information about changes made to your hosted zone.',
  })
  .openapi('ChangeInfo')

const ActivateKeySigningKeyResponseSchema = z
  .object({ ChangeInfo: ChangeInfoSchema })
  .openapi({ required: ['ChangeInfo'] })
  .openapi('ActivateKeySigningKeyResponse')

const ConcurrentModificationSchema = z.any().openapi('ConcurrentModification')

const NoSuchKeySigningKeySchema = z.any().openapi('NoSuchKeySigningKey')

const InvalidKeySigningKeyStatusSchema = z.any().openapi('InvalidKeySigningKeyStatus')

const InvalidSigningStatusSchema = z.any().openapi('InvalidSigningStatus')

const InvalidKMSArnSchema = z.any().openapi('InvalidKMSArn')

const InvalidInputSchema = z.any().openapi('InvalidInput')

const AssociateVPCWithHostedZoneResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that describes the changes made to your hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['ChangeInfo'],
    example: {
      ChangeInfo: {
        Comment: '',
        Id: '/change/C3HC6WDB2UANE2',
        Status: 'INSYNC',
        SubmittedAt: '2017-01-31T01:36:41.958Z',
      },
    },
    description:
      'A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.',
  })
  .openapi('AssociateVPCWithHostedZoneResponse')

const VPCRegionSchema = z
  .enum([
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-central-1',
    'eu-central-2',
    'ap-east-1',
    'me-south-1',
    'us-gov-west-1',
    'us-gov-east-1',
    'us-iso-east-1',
    'us-iso-west-1',
    'us-isob-east-1',
    'me-central-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-southeast-3',
    'ap-south-1',
    'ap-south-2',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'eu-north-1',
    'sa-east-1',
    'ca-central-1',
    'cn-north-1',
    'af-south-1',
    'eu-south-1',
    'eu-south-2',
    'ap-southeast-4',
    'il-central-1',
  ])
  .openapi('VPCRegion')

const VPCIdSchema = z
  .string()
  .max(1024)
  .openapi({ description: '(Private hosted zones only) The ID of an Amazon VPC. ' })
  .openapi('VPCId')

const NoSuchHostedZoneSchema = z.any().openapi('NoSuchHostedZone')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const InvalidVPCIdSchema = z.any().openapi('InvalidVPCId')

const PublicZoneVPCAssociationSchema = z.any().openapi('PublicZoneVPCAssociation')

const ConflictingDomainExistsSchema = z.any().openapi('ConflictingDomainExists')

const LimitsExceededSchema = z.any().openapi('LimitsExceeded')

const PriorRequestNotCompleteSchema = z.any().openapi('PriorRequestNotComplete')

const ChangeIdSchema = z.string().min(1).max(6500).openapi('ChangeId')

const ChangeCidrCollectionResponseSchema = z
  .object({
    Id: ChangeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that is returned by <code>ChangeCidrCollection</code>. You can use it as input to <code>GetChange</code> to see if a CIDR collection change has propagated or not.',
        }),
    ),
  })
  .openapi({ required: ['Id'] })
  .openapi('ChangeCidrCollectionResponse')

const CidrLocationNameDefaultNotAllowedSchema = z
  .string()
  .regex(/[0-9A-Za-z_\-]+/)
  .min(1)
  .max(16)
  .openapi('CidrLocationNameDefaultNotAllowed')

const CidrCollectionChangeActionSchema = z
  .enum(['PUT', 'DELETE_IF_EXISTS'])
  .openapi('CidrCollectionChangeAction')

const CidrSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(50)
  .openapi('Cidr')

const CidrListSchema = z
  .array(CidrSchema.and(z.any().openapi({ xml: { name: 'Cidr' } })))
  .min(1)
  .max(1000)
  .openapi('CidrList')

const CidrCollectionChangeSchema = z
  .object({
    LocationName: CidrLocationNameDefaultNotAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the location that is associated with the CIDR collection.',
        }),
    ),
    Action: CidrCollectionChangeActionSchema.and(
      z.any().openapi({ description: 'CIDR collection change action. ' }),
    ),
    CidrList: CidrListSchema.and(z.any().openapi({ description: 'List of CIDR blocks.' })),
  })
  .openapi({
    required: ['LocationName', 'Action', 'CidrList'],
    description: 'A complex type that contains information about the CIDR collection change.',
  })
  .openapi('CidrCollectionChange')

const NoSuchCidrCollectionExceptionSchema = z.any().openapi('NoSuchCidrCollectionException')

const CidrCollectionVersionMismatchExceptionSchema = z
  .any()
  .openapi('CidrCollectionVersionMismatchException')

const CidrBlockInUseExceptionSchema = z.any().openapi('CidrBlockInUseException')

const ChangeResourceRecordSetsResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains information about changes made to your hosted zone.</p> <p>This element contains an ID that you use when performing a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a> action to get detailed information about the change.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ChangeInfo'],
    example: {
      ChangeInfo: {
        Comment: 'Geolocation alias configuration for example.com',
        Id: '/change/C2682N5HXP0BZ4',
        Status: 'PENDING',
        SubmittedAt: '2017-02-10T01:36:41.958Z',
      },
    },
    description: 'A complex type containing the response for the request.',
  })
  .openapi('ChangeResourceRecordSetsResponse')

const ChangeActionSchema = z.enum(['CREATE', 'DELETE', 'UPSERT']).openapi('ChangeAction')

const DNSNameSchema = z.string().max(1024).openapi('DNSName')

const RRTypeSchema = z
  .enum(['SOA', 'A', 'TXT', 'NS', 'CNAME', 'MX', 'NAPTR', 'PTR', 'SRV', 'SPF', 'AAAA', 'CAA', 'DS'])
  .openapi('RRType')

const ResourceRecordSetIdentifierSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi('ResourceRecordSetIdentifier')

const ResourceRecordSetWeightSchema = z.int().min(0).max(255).openapi('ResourceRecordSetWeight')

const ResourceRecordSetRegionSchema = z
  .enum([
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-central-1',
    'eu-central-2',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-southeast-3',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'eu-north-1',
    'sa-east-1',
    'cn-north-1',
    'cn-northwest-1',
    'ap-east-1',
    'me-south-1',
    'me-central-1',
    'ap-south-1',
    'ap-south-2',
    'af-south-1',
    'eu-south-1',
    'eu-south-2',
    'ap-southeast-4',
    'il-central-1',
  ])
  .openapi('ResourceRecordSetRegion')

const GeoLocationContinentCodeSchema = z.string().length(2).openapi('GeoLocationContinentCode')

const GeoLocationCountryCodeSchema = z.string().min(1).max(2).openapi('GeoLocationCountryCode')

const GeoLocationSubdivisionCodeSchema = z
  .string()
  .min(1)
  .max(3)
  .openapi('GeoLocationSubdivisionCode')

const GeoLocationSchema = z
  .object({
    ContinentCode: GeoLocationContinentCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The two-letter code for the continent.</p> <p>Amazon Route 53 supports the following continent codes:</p> <ul> <li> <p> <b>AF</b>: Africa</p> </li> <li> <p> <b>AN</b>: Antarctica</p> </li> <li> <p> <b>AS</b>: Asia</p> </li> <li> <p> <b>EU</b>: Europe</p> </li> <li> <p> <b>OC</b>: Oceania</p> </li> <li> <p> <b>NA</b>: North America</p> </li> <li> <p> <b>SA</b>: South America</p> </li> </ul> <p>Constraint: Specifying <code>ContinentCode</code> with either <code>CountryCode</code> or <code>SubdivisionCode</code> returns an <code>InvalidInput</code> error.</p>',
        }),
    ).exactOptional(),
    CountryCode: GeoLocationCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For geolocation resource record sets, the two-letter code for a country.</p> <p>Amazon Route 53 uses the two-letter country codes that are specified in <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.</p>',
        }),
    ).exactOptional(),
    SubdivisionCode: GeoLocationSubdivisionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For geolocation resource record sets, the two-letter code for a state of the United States. Route 53 doesn\'t support any other values for <code>SubdivisionCode</code>. For a list of state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a> on the United States Postal Service website. </p> <p>If you specify <code>subdivisioncode</code>, you must also specify <code>US</code> for <code>CountryCode</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about a geographic location.',
    required: [],
  })
  .openapi('GeoLocation')

const ResourceRecordSetFailoverSchema = z
  .enum(['PRIMARY', 'SECONDARY'])
  .openapi('ResourceRecordSetFailover')

const ResourceRecordSetMultiValueAnswerSchema = z
  .boolean()
  .openapi('ResourceRecordSetMultiValueAnswer')

const TTLSchema = z.int().min(0).max(2147483647).openapi('TTL')

const RDataSchema = z.string().max(4000).openapi('RData')

const ResourceRecordSchema = z
  .object({
    Value: RDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current or new DNS record value, not to exceed 4,000 characters. In the case of a <code>DELETE</code> action, if the current value does not match the actual value, an error is returned. For descriptions about how to format <code>Value</code> for different record types, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>You can specify more than one value for all record types except <code>CNAME</code> and <code>SOA</code>. </p> <note> <p>If you\'re creating an alias resource record set, omit <code>Value</code>.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['Value'],
    description:
      "<p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note>",
  })
  .openapi('ResourceRecord')

const ResourceRecordsSchema = z
  .array(ResourceRecordSchema.and(z.any().openapi({ xml: { name: 'ResourceRecord' } })))
  .min(1)
  .openapi('ResourceRecords')

const AliasHealthEnabledSchema = z.boolean().openapi('AliasHealthEnabled')

const AliasTargetSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Alias resource records sets only</i>: The value used depends on where you want to route traffic:</p> <dl> <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt> <dd> <p>Specify the hosted zone ID for your API. You can get the applicable value using the CLI command <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html">get-domain-names</a>:</p> <ul> <li> <p>For regional APIs, specify the value of <code>regionalHostedZoneId</code>.</p> </li> <li> <p>For edge-optimized APIs, specify the value of <code>distributionHostedZoneId</code>.</p> </li> </ul> </dd> <dt>Amazon Virtual Private Cloud interface VPC endpoint</dt> <dd> <p>Specify the hosted zone ID for your interface endpoint. You can get the value of <code>HostedZoneId</code> using the CLI command <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html">describe-vpc-endpoints</a>.</p> </dd> <dt>CloudFront distribution</dt> <dd> <p>Specify <code>Z2FDTNDATAQYW2</code>.</p> <note> <p>Alias resource record sets for CloudFront can\'t be created in a private zone.</p> </note> </dd> <dt>Elastic Beanstalk environment</dt> <dd> <p>Specify the hosted zone ID for the region that you created the environment in. The environment must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see <a href="https://docs.aws.amazon.com/general/latest/gr/elasticbeanstalk.html">Elastic Beanstalk endpoints and quotas</a> in the the <i>Amazon Web Services General Reference</i>.</p> </dd> <dt>ELB load balancer</dt> <dd> <p>Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the hosted zone ID:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/elb.html">Elastic Load Balancing endpoints and quotas</a> topic in the <i>Amazon Web Services General Reference</i>: Use the value that corresponds with the region that you created your load balancer in. Note that there are separate columns for Application and Classic Load Balancers and for Network Load Balancers.</p> </li> <li> <p> <b>Amazon Web Services Management Console</b>: Go to the Amazon EC2 page, choose <b>Load Balancers</b> in the navigation pane, select the load balancer, and get the value of the <b>Hosted zone</b> field on the <b>Description</b> tab.</p> </li> <li> <p> <b>Elastic Load Balancing API</b>: Use <code>DescribeLoadBalancers</code> to get the applicable value. For more information, see the applicable guide:</p> <ul> <li> <p>Classic Load Balancers: Use <a href="https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> to get the value of <code>CanonicalHostedZoneNameId</code>.</p> </li> <li> <p>Application and Network Load Balancers: Use <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> to get the value of <code>CanonicalHostedZoneId</code>.</p> </li> </ul> </li> <li> <p> <b>CLI</b>: Use <code>describe-load-balancers</code> to get the applicable value. For more information, see the applicable guide:</p> <ul> <li> <p>Classic Load Balancers: Use <a href="http://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html">describe-load-balancers</a> to get the value of <code>CanonicalHostedZoneNameId</code>.</p> </li> <li> <p>Application and Network Load Balancers: Use <a href="http://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html">describe-load-balancers</a> to get the value of <code>CanonicalHostedZoneId</code>.</p> </li> </ul> </li> </ul> </dd> <dt>Global Accelerator accelerator</dt> <dd> <p>Specify <code>Z2BJ6XQ5FK7U4H</code>.</p> </dd> <dt>An Amazon S3 bucket configured as a static website</dt> <dd> <p>Specify the hosted zone ID for the region that you created the bucket in. For more information about valid values, see the table <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints">Amazon S3 Website Endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> </dd> <dt>Another Route 53 resource record set in your hosted zone</dt> <dd> <p>Specify the hosted zone ID of your hosted zone. (An alias resource record set can\'t reference a resource record set in a different hosted zone.)</p> </dd> </dl>',
        }),
    ),
    DNSName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Alias resource record sets only:</i> The value that you specify depends on where you want to route queries:</p> <dl> <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt> <dd> <p>Specify the applicable domain name for your API. You can get the applicable value using the CLI command <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html">get-domain-names</a>:</p> <ul> <li> <p>For regional APIs, specify the value of <code>regionalDomainName</code>.</p> </li> <li> <p>For edge-optimized APIs, specify the value of <code>distributionDomainName</code>. This is the name of the associated CloudFront distribution, such as <code>da1b2c3d4e5.cloudfront.net</code>.</p> </li> </ul> <note> <p>The name of the record that you\'re creating must match a custom domain name for your API, such as <code>api.example.com</code>.</p> </note> </dd> <dt>Amazon Virtual Private Cloud interface VPC endpoint</dt> <dd> <p>Enter the API endpoint for the interface endpoint, such as <code>vpce-123456789abcdef01-example-us-east-1a.elasticloadbalancing.us-east-1.vpce.amazonaws.com</code>. For edge-optimized APIs, this is the domain name for the corresponding CloudFront distribution. You can get the value of <code>DnsName</code> using the CLI command <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html">describe-vpc-endpoints</a>.</p> </dd> <dt>CloudFront distribution</dt> <dd> <p>Specify the domain name that CloudFront assigned when you created your distribution.</p> <p>Your CloudFront distribution must include an alternate domain name that matches the name of the resource record set. For example, if the name of the resource record set is <i>acme.example.com</i>, your CloudFront distribution must include <i>acme.example.com</i> as one of the alternate domain names. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html">Using Alternate Domain Names (CNAMEs)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can\'t create a resource record set in a private hosted zone to route traffic to a CloudFront distribution.</p> <note> <p>For failover alias records, you can\'t specify a CloudFront distribution for both the primary and secondary records. A distribution must include an alternate domain name that matches the name of the record. However, the primary and secondary records have the same name, and you can\'t include the same alternate domain name in more than one distribution. </p> </note> </dd> <dt>Elastic Beanstalk environment</dt> <dd> <p>If the domain name for your Elastic Beanstalk environment includes the region that you deployed the environment in, you can create an alias record that routes traffic to the environment. For example, the domain name <code>my-environment.<i>us-west-2</i>.elasticbeanstalk.com</code> is a regionalized domain name. </p> <important> <p>For environments that were created before early 2016, the domain name doesn\'t include the region. To route traffic to these environments, you must create a CNAME record instead of an alias record. Note that you can\'t create a CNAME record for the root domain name. For example, if your domain name is example.com, you can create a record that routes traffic for acme.example.com to your Elastic Beanstalk environment, but you can\'t create a record that routes traffic for example.com to your Elastic Beanstalk environment.</p> </important> <p>For Elastic Beanstalk environments that have regionalized subdomains, specify the <code>CNAME</code> attribute for the environment. You can use the following methods to get the value of the CNAME attribute:</p> <ul> <li> <p> <i>Amazon Web Services Management Console</i>: For information about how to get the value by using the console, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html">Using Custom Domains with Elastic Beanstalk</a> in the <i>Elastic Beanstalk Developer Guide</i>.</p> </li> <li> <p> <i>Elastic Beanstalk API</i>: Use the <code>DescribeEnvironments</code> action to get the value of the <code>CNAME</code> attribute. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html">DescribeEnvironments</a> in the <i>Elastic Beanstalk API Reference</i>.</p> </li> <li> <p> <i>CLI</i>: Use the <code>describe-environments</code> command to get the value of the <code>CNAME</code> attribute. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/describe-environments.html">describe-environments</a> in the <i>CLI Command Reference</i>.</p> </li> </ul> </dd> <dt>ELB load balancer</dt> <dd> <p>Specify the DNS name that is associated with the load balancer. Get the DNS name by using the Amazon Web Services Management Console, the ELB API, or the CLI. </p> <ul> <li> <p> <b>Amazon Web Services Management Console</b>: Go to the EC2 page, choose <b>Load Balancers</b> in the navigation pane, choose the load balancer, choose the <b>Description</b> tab, and get the value of the <b>DNS name</b> field. </p> <p>If you\'re routing traffic to a Classic Load Balancer, get the value that begins with <b>dualstack</b>. If you\'re routing traffic to another type of load balancer, get the value that applies to the record type, A or AAAA.</p> </li> <li> <p> <b>Elastic Load Balancing API</b>: Use <code>DescribeLoadBalancers</code> to get the value of <code>DNSName</code>. For more information, see the applicable guide:</p> <ul> <li> <p>Classic Load Balancers: <a href="https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> </p> </li> <li> <p>Application and Network Load Balancers: <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> </p> </li> </ul> </li> <li> <p> <b>CLI</b>: Use <code>describe-load-balancers</code> to get the value of <code>DNSName</code>. For more information, see the applicable guide:</p> <ul> <li> <p>Classic Load Balancers: <a href="http://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html">describe-load-balancers</a> </p> </li> <li> <p>Application and Network Load Balancers: <a href="http://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html">describe-load-balancers</a> </p> </li> </ul> </li> </ul> </dd> <dt>Global Accelerator accelerator</dt> <dd> <p>Specify the DNS name for your accelerator:</p> <ul> <li> <p> <b>Global Accelerator API:</b> To get the DNS name, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html">DescribeAccelerator</a>.</p> </li> <li> <p> <b>CLI:</b> To get the DNS name, use <a href="https://docs.aws.amazon.com/cli/latest/reference/globalaccelerator/describe-accelerator.html">describe-accelerator</a>.</p> </li> </ul> </dd> <dt>Amazon S3 bucket that is configured as a static website</dt> <dd> <p>Specify the domain name of the Amazon S3 website endpoint that you created the bucket in, for example, <code>s3-website.us-east-2.amazonaws.com</code>. For more information about valid values, see the table <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints">Amazon S3 Website Endpoints</a> in the <i>Amazon Web Services General Reference</i>. For more information about using S3 buckets for websites, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html">Getting Started with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide.</i> </p> </dd> <dt>Another Route 53 resource record set</dt> <dd> <p>Specify the value of the <code>Name</code> element for a resource record set in the current hosted zone.</p> <note> <p>If you\'re creating an alias record that has the same name as the hosted zone (known as the zone apex), you can\'t specify the domain name for a record for which the value of <code>Type</code> is <code>CNAME</code>. This is because the alias record must have the same type as the record that you\'re routing traffic to, and creating a CNAME record for the zone apex isn\'t supported even for an alias record.</p> </note> </dd> </dl>',
        }),
    ),
    EvaluateTargetHealth: AliasHealthEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets:</i> When <code>EvaluateTargetHealth</code> is <code>true</code>, an alias resource record set inherits the health of the referenced Amazon Web Services resource, such as an ELB load balancer or another resource record set in the hosted zone.</p> <p>Note the following:</p> <dl> <dt>CloudFront distributions</dt> <dd> <p>You can\'t set <code>EvaluateTargetHealth</code> to <code>true</code> when the alias target is a CloudFront distribution.</p> </dd> <dt>Elastic Beanstalk environments that have regionalized subdomains</dt> <dd> <p>If you specify an Elastic Beanstalk environment in <code>DNSName</code> and the environment contains an ELB load balancer, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically contains an ELB load balancer if it includes more than one Amazon EC2 instance.) If you set <code>EvaluateTargetHealth</code> to <code>true</code> and either no Amazon EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other available resources that are healthy, if any. </p> <p>If the environment contains a single Amazon EC2 instance, there are no special requirements.</p> </dd> <dt>ELB load balancers</dt> <dd> <p>Health checking behavior depends on the type of load balancer:</p> <ul> <li> <p> <b>Classic Load Balancers</b>: If you specify an ELB Classic Load Balancer in <code>DNSName</code>, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. If you set <code>EvaluateTargetHealth</code> to <code>true</code> and either no EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other resources.</p> </li> <li> <p> <b>Application and Network Load Balancers</b>: If you specify an ELB Application or Network Load Balancer and you set <code>EvaluateTargetHealth</code> to <code>true</code>, Route 53 routes queries to the load balancer based on the health of the target groups that are associated with the load balancer:</p> <ul> <li> <p>For an Application or Network Load Balancer to be considered healthy, every target group that contains targets must contain at least one healthy target. If any target group contains only unhealthy targets, the load balancer is considered unhealthy, and Route 53 routes queries to other resources.</p> </li> <li> <p>A target group that has no registered targets is considered unhealthy.</p> </li> </ul> </li> </ul> <note> <p>When you create a load balancer, you configure settings for Elastic Load Balancing health checks; they\'re not Route 53 health checks, but they perform a similar function. Do not create Route 53 health checks for the EC2 instances that you register with an ELB load balancer. </p> </note> </dd> <dt>S3 buckets</dt> <dd> <p>There are no special requirements for setting <code>EvaluateTargetHealth</code> to <code>true</code> when the alias target is an S3 bucket.</p> </dd> <dt>Other records in the same hosted zone</dt> <dd> <p>If the Amazon Web Services resource that you specify in <code>DNSName</code> is a record or a group of records (for example, a group of weighted records) but is not another alias record, we recommend that you associate a health check with all of the records in the alias target. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting">What Happens When You Omit Health Checks?</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> </dl> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Amazon Route 53 Health Checks and DNS Failover</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'DNSName', 'EvaluateTargetHealth'],
    description:
      '<p> <i>Alias resource record sets only:</i> Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul>',
  })
  .openapi('AliasTarget')

const HealthCheckIdSchema = z.string().max(64).openapi('HealthCheckId')

const TrafficPolicyInstanceIdSchema = z.string().min(1).max(36).openapi('TrafficPolicyInstanceId')

const UUIDSchema = z
  .string()
  .regex(/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/)
  .openapi('UUID')

const CidrLocationNameDefaultAllowedSchema = z
  .string()
  .regex(/[0-9A-Za-z_\-\*]+/)
  .min(1)
  .max(16)
  .openapi('CidrLocationNameDefaultAllowed')

const CidrRoutingConfigSchema = z
  .object({
    CollectionId: UUIDSchema.and(z.any().openapi({ description: 'The CIDR collection ID.' })),
    LocationName: CidrLocationNameDefaultAllowedSchema.and(
      z.any().openapi({ description: 'The CIDR collection location name.' }),
    ),
  })
  .openapi({
    required: ['CollectionId', 'LocationName'],
    description:
      '<p>The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.</p> <p>A <code>LocationName</code> with an asterisk “*” can be used to create a default CIDR record. <code>CollectionId</code> is still required for default record.</p>',
  })
  .openapi('CidrRoutingConfig')

const ResourceRecordSetSchema = z
  .object({
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For <code>ChangeResourceRecordSets</code> requests, the name of the record that you want to create, update, or delete. For <code>ListResourceRecordSets</code> responses, the name of a record in the specified hosted zone.</p> <p> <b>ChangeResourceRecordSets Only</b> </p> <p>Enter a fully qualified domain name, for example, <code>www.example.com</code>. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats <code>www.example.com</code> (without a trailing dot) and <code>www.example.com.</code> (with a trailing dot) as identical.</p> <p>For information about how to specify characters other than <code>a-z</code>, <code>0-9</code>, and <code>-</code> (hyphen) and how to specify internationalized domain names, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html\">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, <code>*.example.com</code>. Note the following:</p> <ul> <li> <p>The * must replace the entire label. For example, you can't specify <code>*prod.example.com</code> or <code>prod*.example.com</code>.</p> </li> <li> <p>The * can't replace any of the middle labels, for example, marketing.*.example.com.</p> </li> <li> <p>If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard.</p> <important> <p>You can't use the * wildcard for resource records sets that have a type of NS.</p> </important> </li> </ul> <p>You can use the * wildcard as the leftmost label in a domain name, for example, <code>*.example.com</code>. You can't use an * for one of the middle labels, for example, <code>marketing.*.example.com</code>. In addition, the * must replace the entire label; for example, you can't specify <code>prod*.example.com</code>.</p>",
        }),
    ),
    Type: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DNS record type. For information about different record types and how data is encoded for them, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>DS</code> |<code>MX</code> | <code>NAPTR</code> | <code>NS</code> | <code>PTR</code> | <code>SOA</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group.</p> <p>Valid values for multivalue answer resource record sets: <code>A</code> | <code>AAAA</code> | <code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <note> <p>SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of <code>Type</code> is <code>SPF</code>. RFC 7208, <i>Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1</i>, has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, <a href="http://tools.ietf.org/html/rfc7208#section-14.1">The SPF DNS Record Type</a>.</p> </note> <p>Values for alias resource record sets:</p> <ul> <li> <p> <b>Amazon API Gateway custom regional APIs and edge-optimized APIs:</b> <code>A</code> </p> </li> <li> <p> <b>CloudFront distributions:</b> <code>A</code> </p> <p>If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of <code>A</code> and one with a value of <code>AAAA</code>. </p> </li> <li> <p> <b>Amazon API Gateway environment that has a regionalized subdomain</b>: <code>A</code> </p> </li> <li> <p> <b>ELB load balancers:</b> <code>A</code> | <code>AAAA</code> </p> </li> <li> <p> <b>Amazon S3 buckets:</b> <code>A</code> </p> </li> <li> <p> <b>Amazon Virtual Private Cloud interface VPC endpoints</b> <code>A</code> </p> </li> <li> <p> <b>Another resource record set in this hosted zone:</b> Specify the type of the resource record set that you\'re creating the alias for. All values are supported except <code>NS</code> and <code>SOA</code>.</p> <note> <p>If you\'re creating an alias record that has the same name as the hosted zone (known as the zone apex), you can\'t route traffic to a record for which the value of <code>Type</code> is <code>CNAME</code>. This is because the alias record must have the same type as the record you\'re routing traffic to, and creating a CNAME record for the zone apex isn\'t supported even for an alias record.</p> </note> </li> </ul>',
        }),
    ),
    SetIdentifier: ResourceRecordSetIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Resource record sets that have a routing policy other than simple:</i> An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of <code>SetIdentifier</code> must be unique for each resource record set. </p> <p>For information about routing policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html">Choosing a Routing Policy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Weight: ResourceRecordSetWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Weighted resource record sets only:</i> Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource\'s weight to the total. Note the following:</p> <ul> <li> <p>You must specify a value for the <code>Weight</code> element for every weighted resource record set.</p> </li> <li> <p>You can only specify one <code>ResourceRecord</code> per weighted resource record set.</p> </li> <li> <p>You can\'t create latency, failover, or geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements as weighted resource record sets.</p> </li> <li> <p>You can create a maximum of 100 weighted resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements.</p> </li> <li> <p>For weighted (but not weighted alias) resource record sets, if you set <code>Weight</code> to <code>0</code> for a resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set <code>Weight</code> to <code>0</code> for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability.</p> <p>The effect of setting <code>Weight</code> to <code>0</code> is different when you associate health checks with weighted resource record sets. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html">Options for Configuring Route 53 Active-Active and Active-Passive Failover</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Region: ResourceRecordSetRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <i>Latency-based resource record sets only:</i> The Amazon EC2 Region where you created the resource that this resource record set refers to. The resource typically is an Amazon Web Services resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.</p> <p>When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set.</p> <p>Note the following:</p> <ul> <li> <p>You can only specify one <code>ResourceRecord</code> per latency resource record set.</p> </li> <li> <p>You can only create one latency resource record set for each Amazon EC2 Region.</p> </li> <li> <p>You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for.</p> </li> <li> <p>You can't create non-latency resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements as latency resource record sets.</p> </li> </ul>",
        }),
    ).exactOptional(),
    GeoLocation: GeoLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <i>Geolocation resource record sets only:</i> A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of <code>192.0.2.111</code>, create a resource record set with a <code>Type</code> of <code>A</code> and a <code>ContinentCode</code> of <code>AF</code>.</p> <note> <p>Although creating geolocation and geolocation alias resource record sets in a private hosted zone is allowed, it's not supported.</p> </note> <p>If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource.</p> <p>You can't create two geolocation resource record sets that specify the same geographic location.</p> <p>The value <code>*</code> in the <code>CountryCode</code> element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements.</p> <important> <p>Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of <code>CountryCode</code> is <code>*</code>. Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a <code>*</code> resource record set, Route 53 returns a \"no answer\" response for queries from those locations.</p> </important> <p>You can't create non-geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements as geolocation resource record sets.</p>",
        }),
    ).exactOptional(),
    Failover: ResourceRecordSetFailoverSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Failover resource record sets only:</i> To configure failover, you add the <code>Failover</code> element to two resource record sets. For one resource record set, you specify <code>PRIMARY</code> as the value for <code>Failover</code>; for the other resource record set, you specify <code>SECONDARY</code>. In addition, you include the <code>HealthCheckId</code> element and specify the health check that you want Amazon Route 53 to perform for each resource record set.</p> <p>Except where noted, the following failover behaviors assume that you have included the <code>HealthCheckId</code> element in both resource record sets:</p> <ul> <li> <p>When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set.</p> </li> <li> <p>When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the secondary resource record set.</p> </li> <li> <p>When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set.</p> </li> <li> <p>If you omit the <code>HealthCheckId</code> element for the secondary resource record set, and if the primary resource record set is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint.</p> </li> </ul> <p>You can\'t create non-failover resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements as failover resource record sets.</p> <p>For failover alias resource record sets, you must also include the <code>EvaluateTargetHealth</code> element and set the value to true.</p> <p>For more information about configuring failover for Route 53, see the following topics in the <i>Amazon Route 53 Developer Guide</i>: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a> </p> </li> </ul>',
        }),
    ).exactOptional(),
    MultiValueAnswer: ResourceRecordSetMultiValueAnswerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <i>Multivalue answer resource record sets only</i>: To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify <code>true</code> for <code>MultiValueAnswer</code>. Note the following:</p> <ul> <li> <p>If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.</p> </li> <li> <p>If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy.</p> </li> <li> <p>Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records.</p> </li> <li> <p>If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records.</p> </li> <li> <p>When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records.</p> </li> <li> <p>If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.</p> </li> </ul> <p>You can't create multivalue answer alias records.</p>",
        }),
    ).exactOptional(),
    TTL: TTLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The resource record cache time to live (TTL), in seconds. Note the following:</p> <ul> <li> <p>If you're creating or updating an alias resource record set, omit <code>TTL</code>. Amazon Route 53 uses the value of <code>TTL</code> for the alias target. </p> </li> <li> <p>If you're associating this resource record set with a health check (if you're adding a <code>HealthCheckId</code> element), we recommend that you specify a <code>TTL</code> of 60 seconds or less so clients respond quickly to changes in health status.</p> </li> <li> <p>All of the resource record sets in a group of weighted resource record sets must have the same value for <code>TTL</code>.</p> </li> <li> <p>If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a <code>TTL</code> of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for <code>Weight</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ResourceRecords: ResourceRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Information about the resource records to act upon.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecords</code>.</p> </note>",
        }),
    ).exactOptional(),
    AliasTarget: AliasTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Alias resource record sets only:</i> Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. </p> <p>If you\'re creating resource records sets for a private hosted zone, note the following:</p> <ul> <li> <p>You can\'t create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    HealthCheckId: HealthCheckIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the <code>HealthCheckId</code> element and specify the ID of the applicable health check.</p> <p>Route 53 determines whether a resource record set is healthy based on one of the following:</p> <ul> <li> <p>By periodically sending a request to the endpoint that is specified in the health check</p> </li> <li> <p>By aggregating the status of a specified group of health checks (calculated health checks)</p> </li> <li> <p>By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)</p> </li> </ul> <important> <p>Route 53 doesn\'t check the health of the endpoint that is specified in the resource record set, for example, the endpoint specified by the IP address in the <code>Value</code> element. When you add a <code>HealthCheckId</code> element to a resource record set, Route 53 checks the health of the endpoint that you specified in the health check. </p> </important> <p>For more information, see the following topics in the <i>Amazon Route 53 Developer Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a> </p> </li> </ul> <p> <b>When to Specify HealthCheckId</b> </p> <p>Specifying a value for <code>HealthCheckId</code> is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations:</p> <ul> <li> <p> <b>Non-alias resource record sets</b>: You\'re checking the health of a group of non-alias resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A) and you specify health check IDs for all the resource record sets. </p> <p>If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it responds to DNS queries with.</p> <p>If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value for that resource record set.</p> <p>If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets in the group healthy and responds to DNS queries accordingly. </p> </li> <li> <p> <b>Alias resource record sets</b>: You specify the following settings:</p> <ul> <li> <p>You set <code>EvaluateTargetHealth</code> to true for an alias resource record set in a group of resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A). </p> </li> <li> <p>You configure the alias resource record set to route traffic to a non-alias resource record set in the same hosted zone.</p> </li> <li> <p>You specify a health check ID for the non-alias resource record set. </p> </li> </ul> <p>If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the alias record among the records that it responds to DNS queries with.</p> <p>If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set.</p> <note> <p>The alias resource record set can also route traffic to a <i>group</i> of non-alias resource record sets that have the same routing policy, name, and type. In that configuration, associate health checks with all of the resource record sets in the group of non-alias resource record sets.</p> </note> </li> </ul> <p> <b>Geolocation Routing</b> </p> <p>For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has <code>*</code> for <code>CountryCode</code> is <code>*</code>, which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy:</p> <ul> <li> <p>The United States</p> </li> <li> <p>North America</p> </li> <li> <p>The default resource record set</p> </li> </ul> <p> <b>Specifying the Health Check Endpoint by Domain Name</b> </p> <p>If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each <code>HTTP</code> server that is serving content for <code>www.example.com</code>. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (<code>www.example.com</code>).</p> <important> <p>Health check results will be unpredictable if you do the following:</p> <ul> <li> <p>Create a health check that has the same value for <code>FullyQualifiedDomainName</code> as the name of a resource record set.</p> </li> <li> <p>Associate that health check with the resource record set.</p> </li> </ul> </important>',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceId: TrafficPolicyInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. <code>TrafficPolicyInstanceId</code> is the ID of the traffic policy instance that Route 53 created this resource record set for.</p> <important> <p>To delete the resource record set that is associated with a traffic policy instance, use <code>DeleteTrafficPolicyInstance</code>. Route 53 will delete the resource record set automatically. If you delete the resource record set by using <code>ChangeResourceRecordSets</code>, Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use. </p> </important>",
        }),
    ).exactOptional(),
    CidrRoutingConfig: CidrRoutingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['Name', 'Type'],
    description: 'Information about the resource record set to create or delete.',
  })
  .openapi('ResourceRecordSet')

const ChangeSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action to perform:</p> <ul> <li> <p> <code>CREATE</code>: Creates a resource record set that has the specified values.</p> </li> <li> <p> <code>DELETE</code>: Deletes a existing resource record set.</p> <important> <p>To delete the resource record set that is associated with a traffic policy instance, use <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html\">DeleteTrafficPolicyInstance</a>. Amazon Route 53 will delete the resource record set automatically. If you delete the resource record set by using <code>ChangeResourceRecordSets</code>, Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use. </p> </important> </li> <li> <p> <code>UPSERT</code>: If a resource record set doesn't already exist, Route 53 creates it. If a resource record set does exist, Route 53 updates it with the values in the request.</p> </li> </ul>",
        }),
    ),
    ResourceRecordSet: ResourceRecordSetSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the resource record set to create, delete, or update.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'ResourceRecordSet'],
    description: 'The information for each resource record set that you want to change.',
  })
  .openapi('Change')

const ChangesSchema = z
  .array(ChangeSchema.and(z.any().openapi({ xml: { name: 'Change' } })))
  .min(1)
  .openapi('Changes')

const NoSuchHealthCheckSchema = z.any().openapi('NoSuchHealthCheck')

const InvalidChangeBatchSchema = z.any().openapi('InvalidChangeBatch')

const ChangeTagsForResourceResponseSchema = z
  .object({})
  .openapi({ example: {}, description: 'Empty response for the request.' })
  .openapi('ChangeTagsForResourceResponse')

const TagKeySchema = z.string().max(128).openapi('TagKey')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>Key</code> depends on the operation that you want to perform:</p> <ul> <li> <p> <b>Add a tag to a health check or hosted zone</b>: <code>Key</code> is the name that you want to give the new tag.</p> </li> <li> <p> <b>Edit a tag</b>: <code>Key</code> is the name of the tag that you want to change the <code>Value</code> for.</p> </li> <li> <p> <b> Delete a key</b>: <code>Key</code> is the name of the tag you want to remove.</p> </li> <li> <p> <b>Give a name to a health check</b>: Edit the default <code>Name</code> tag. In the Amazon Route 53 console, the list of your health checks includes a <b>Name</b> column that lets you see the name that you've given to each health check.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of <code>Value</code> depends on the operation that you want to perform:</p> <ul> <li> <p> <b>Add a tag to a health check or hosted zone</b>: <code>Value</code> is the value that you want to give the new tag.</p> </li> <li> <p> <b>Edit a tag</b>: <code>Value</code> is the new value that you want to assign the tag.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.',
    required: [],
  })
  .openapi('Tag')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ARNSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(20)
  .max(2048)
  .openapi('ARN')

const CollectionNameSchema = z
  .string()
  .regex(/[0-9A-Za-z_\-]+/)
  .min(1)
  .max(64)
  .openapi('CollectionName')

const CollectionVersionSchema = z.int().min(1).openapi('CollectionVersion')

const CidrCollectionSchema = z
  .object({
    Arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the collection. Can be used to reference the collection in IAM policy or in another Amazon Web Services account.',
        }),
    ).exactOptional(),
    Id: UUIDSchema.and(
      z.any().openapi({ description: 'The unique ID of the CIDR collection.' }),
    ).exactOptional(),
    Name: CollectionNameSchema.and(
      z.any().openapi({ description: 'The name of a CIDR collection.' }),
    ).exactOptional(),
    Version: CollectionVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A sequential counter that Route 53 sets to 1 when you create a CIDR collection and increments by 1 each time you update settings for the CIDR collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A complex type that identifies a CIDR collection.', required: [] })
  .openapi('CidrCollection')

const CreateCidrCollectionResponseSchema = z
  .object({
    Collection: CidrCollectionSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the CIDR collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCidrCollectionResponse')

const CidrCollectionAlreadyExistsExceptionSchema = z
  .any()
  .openapi('CidrCollectionAlreadyExistsException')

const HealthCheckNonceSchema = z.string().min(1).max(64).openapi('HealthCheckNonce')

const ServicePrincipalSchema = z.string().max(128).openapi('ServicePrincipal')

const LinkedServiceSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the health check or hosted zone was created by another service, the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. ",
        }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the health check or hosted zone was created by another service, an optional description that can be provided by the other service. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. ",
    required: [],
  })
  .openapi('LinkedService')

const IPAddressSchema = z
  .string()
  .regex(
    /(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)/,
  )
  .max(45)
  .openapi('IPAddress')

const PortSchema = z.int().min(1).max(65535).openapi('Port')

const HealthCheckTypeSchema = z
  .enum([
    'HTTP',
    'HTTPS',
    'HTTP_STR_MATCH',
    'HTTPS_STR_MATCH',
    'TCP',
    'CALCULATED',
    'CLOUDWATCH_METRIC',
    'RECOVERY_CONTROL',
  ])
  .openapi('HealthCheckType')

const ResourcePathSchema = z.string().max(255).openapi('ResourcePath')

const FullyQualifiedDomainNameSchema = z.string().max(255).openapi('FullyQualifiedDomainName')

const SearchStringSchema = z.string().max(255).openapi('SearchString')

const RequestIntervalSchema = z.int().min(10).max(30).openapi('RequestInterval')

const FailureThresholdSchema = z.int().min(1).max(10).openapi('FailureThreshold')

const MeasureLatencySchema = z.boolean().openapi('MeasureLatency')

const InvertedSchema = z.boolean().openapi('Inverted')

const DisabledSchema = z.boolean().openapi('Disabled')

const HealthThresholdSchema = z.int().min(0).max(256).openapi('HealthThreshold')

const ChildHealthCheckListSchema = z
  .array(HealthCheckIdSchema.and(z.any().openapi({ xml: { name: 'ChildHealthCheck' } })))
  .max(256)
  .openapi('ChildHealthCheckList')

const EnableSNISchema = z.boolean().openapi('EnableSNI')

const HealthCheckRegionSchema = z
  .enum([
    'us-east-1',
    'us-west-1',
    'us-west-2',
    'eu-west-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'sa-east-1',
  ])
  .openapi('HealthCheckRegion')

const HealthCheckRegionListSchema = z
  .array(HealthCheckRegionSchema.and(z.any().openapi({ xml: { name: 'Region' } })))
  .min(3)
  .max(64)
  .openapi('HealthCheckRegionList')

const CloudWatchRegionSchema = z
  .enum([
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-central-1',
    'eu-central-2',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'ap-east-1',
    'me-south-1',
    'me-central-1',
    'ap-south-1',
    'ap-south-2',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-southeast-3',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'eu-north-1',
    'sa-east-1',
    'cn-northwest-1',
    'cn-north-1',
    'af-south-1',
    'eu-south-1',
    'eu-south-2',
    'us-gov-west-1',
    'us-gov-east-1',
    'us-iso-east-1',
    'us-iso-west-1',
    'us-isob-east-1',
    'ap-southeast-4',
    'il-central-1',
  ])
  .openapi('CloudWatchRegion')

const AlarmNameSchema = z.string().min(1).max(256).openapi('AlarmName')

const AlarmIdentifierSchema = z
  .object({
    Region: CloudWatchRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.</p> <p>For the current list of CloudWatch regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/cw_region.html">Amazon CloudWatch endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
    Name: AlarmNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p> <note> <p>Route 53 supports CloudWatch alarms with the following features:</p> <ul> <li> <p>Standard-resolution metrics. High-resolution metrics aren\'t supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren\'t supported.</p> </li> </ul> </note>',
        }),
    ),
  })
  .openapi({
    required: ['Region', 'Name'],
    description:
      'A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.',
  })
  .openapi('AlarmIdentifier')

const InsufficientDataHealthStatusSchema = z
  .enum(['Healthy', 'Unhealthy', 'LastKnownStatus'])
  .openapi('InsufficientDataHealthStatus')

const RoutingControlArnSchema = z.string().min(1).max(255).openapi('RoutingControlArn')

const HealthCheckConfigSchema = z
  .object({
    IPAddress: IPAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on. If you don\'t specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance will never change.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can\'t check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can\'t create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul> <p>When the value of <code>Type</code> is <code>CALCULATED</code> or <code>CLOUDWATCH_METRIC</code>, omit <code>IPAddress</code>.</p>',
        }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>",
        }),
    ).exactOptional(),
    Type: HealthCheckTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.</p> <important> <p>You can\'t change the value of <code>Type</code> after you create a health check.</p> </important> <p>You can create the following types of health checks:</p> <ul> <li> <p> <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.</p> </li> <li> <p> <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.</p> <important> <p>If you specify <code>HTTPS</code> for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p> </important> </li> <li> <p> <b>HTTP_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p> </li> <li> <p> <b>HTTPS_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an <code>HTTPS</code> request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p> </li> <li> <p> <b>TCP</b>: Route 53 tries to establish a TCP connection.</p> </li> <li> <p> <b>CLOUDWATCH_METRIC</b>: The health check is associated with a CloudWatch alarm. If the state of the alarm is <code>OK</code>, the health check is considered healthy. If the state is <code>ALARM</code>, the health check is considered unhealthy. If CloudWatch doesn\'t have sufficient data to determine whether the state is <code>OK</code> or <code>ALARM</code>, the health check status depends on the setting for <code>InsufficientDataHealthStatus</code>: <code>Healthy</code>, <code>Unhealthy</code>, or <code>LastKnownStatus</code>. </p> </li> <li> <p> <b>CALCULATED</b>: For health checks that monitor the status of other health checks, Route 53 adds up the number of health checks that Route 53 health checkers consider to be healthy and compares that number with the value of <code>HealthThreshold</code>. </p> </li> <li> <p> <b>RECOVERY_CONTROL</b>: The health check is assocated with a Route53 Application Recovery Controller routing control. If the routing control state is <code>ON</code>, the health check is considered healthy. If the state is <code>OFF</code>, the health check is considered unhealthy. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
        }),
    ),
    ResourcePath: ResourcePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. ',
        }),
    ).exactOptional(),
    FullyQualifiedDomainName: FullyQualifiedDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the Host header. </p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <code>FullyQualifiedDomainName:Port</code> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the preceding cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends a DNS request to the domain that you specify for <code>FullyQualifiedDomainName</code> at the interval that you specify for <code>RequestInterval</code>. Using an IPv4 address that DNS returns, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a \"DNS resolution failed\" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if you create a health check for which the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value that you specify for <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>",
        }),
    ).exactOptional(),
    SearchString: SearchStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the value of Type is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.</p> <p>Route 53 considers case when searching for <code>SearchString</code> in the response body. </p>',
        }),
    ).exactOptional(),
    RequestInterval: RequestIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health check request. Each Route 53 health checker makes requests at this interval.</p> <important> <p>You can't change the value of <code>RequestInterval</code> after you create a health check.</p> </important> <p>If you don't specify a value for <code>RequestInterval</code>, the default value is <code>30</code> seconds.</p>",
        }),
    ).exactOptional(),
    FailureThreshold: FailureThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don\'t specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>',
        }),
    ).exactOptional(),
    MeasureLatency: MeasureLatencySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple Amazon Web Services regions and your endpoint, and to display CloudWatch latency graphs on the <b>Health Checks</b> page in the Route 53 console.</p> <important> <p>You can't change the value of <code>MeasureLatency</code> after you create a health check.</p> </important>",
        }),
    ).exactOptional(),
    Inverted: InvertedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.',
        }),
    ).exactOptional(),
    Disabled: DisabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Stops Route 53 from performing health checks. When you disable a health check, here\'s what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>',
        }),
    ).exactOptional(),
    HealthThreshold: HealthThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of child health checks that are associated with a <code>CALCULATED</code> health check that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-ChildHealthChecks">ChildHealthChecks</a> element.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ChildHealthChecks: ChildHealthCheckListSchema.and(
      z
        .any()
        .openapi({
          description:
            '(CALCULATED Health Checks Only) A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.',
        }),
    ).exactOptional(),
    EnableSNI: EnableSNISchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during TLS negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that <code>HTTPS</code> requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be <code>SSL alert handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>",
        }),
    ).exactOptional(),
    Regions: HealthCheckRegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A complex type that contains one <code>Region</code> element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.</p> <p>If you don't specify any regions, Route 53 health checkers automatically performs checks from all of the regions that are listed under <b>Valid Values</b>.</p> <p>If you update a health check to remove a region that has been performing health checks, Route 53 will briefly continue to perform checks from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with four different regions). </p>",
        }),
    ).exactOptional(),
    AlarmIdentifier: AlarmIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.',
        }),
    ).exactOptional(),
    InsufficientDataHealthStatus: InsufficientDataHealthStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: Route 53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.</p> </li> </ul>',
        }),
    ).exactOptional(),
    RoutingControlArn: RoutingControlArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control.</p> <p>For more information about Route 53 Application Recovery Controller, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery.html">Route 53 Application Recovery Controller Developer Guide.</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description: 'A complex type that contains information about the health check.',
  })
  .openapi('HealthCheckConfig')

const HealthCheckVersionSchema = z.int().min(1).openapi('HealthCheckVersion')

const EvaluationPeriodsSchema = z.int().min(1).openapi('EvaluationPeriods')

const ThresholdSchema = z.float64().openapi('Threshold')

const ComparisonOperatorSchema = z
  .enum([
    'GreaterThanOrEqualToThreshold',
    'GreaterThanThreshold',
    'LessThanThreshold',
    'LessThanOrEqualToThreshold',
  ])
  .openapi('ComparisonOperator')

const PeriodSchema = z.int().min(60).openapi('Period')

const MetricNameSchema = z.string().min(1).max(255).openapi('MetricName')

const NamespaceSchema = z.string().min(1).max(255).openapi('Namespace')

const StatisticSchema = z
  .enum(['Average', 'Sum', 'SampleCount', 'Maximum', 'Minimum'])
  .openapi('Statistic')

const DimensionFieldSchema = z.string().min(1).max(255).openapi('DimensionField')

const DimensionSchema = z
  .object({
    Name: DimensionFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the name of one dimension.',
        }),
    ),
    Value: DimensionFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the value of one dimension.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.',
  })
  .openapi('Dimension')

const DimensionListSchema = z
  .array(DimensionSchema.and(z.any().openapi({ xml: { name: 'Dimension' } })))
  .max(10)
  .openapi('DimensionList')

const CloudWatchAlarmConfigurationSchema = z
  .object({
    EvaluationPeriods: EvaluationPeriodsSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.',
        }),
    ),
    Threshold: ThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.',
        }),
    ),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.',
        }),
    ),
    Period: PeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.',
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the CloudWatch metric that the alarm is associated with.',
        }),
    ),
    Namespace: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the metric that the alarm is associated with. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ),
    Statistic: StatisticSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.',
        }),
    ),
    Dimensions: DimensionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric. For information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'EvaluationPeriods',
      'Threshold',
      'ComparisonOperator',
      'Period',
      'MetricName',
      'Namespace',
      'Statistic',
    ],
    description:
      'A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.',
  })
  .openapi('CloudWatchAlarmConfiguration')

const HealthCheckSchema = z
  .object({
    Id: HealthCheckIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long. ',
        }),
    ),
    CallerReference: HealthCheckNonceSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that you specified when you created the health check.',
        }),
    ),
    LinkedService: LinkedServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the health check was created by another service, the service that created the health check. When a health check is created by another service, you can't edit or delete it using Amazon Route 53. ",
        }),
    ).exactOptional(),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains detailed information about one health check.',
        }),
    ),
    HealthCheckVersion: HealthCheckVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the health check. You can optionally pass this value in a call to <code>UpdateHealthCheck</code> to prevent overwriting another change to the health check.',
        }),
    ),
    CloudWatchAlarmConfiguration: CloudWatchAlarmConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'CallerReference', 'HealthCheckConfig', 'HealthCheckVersion'],
    description:
      'A complex type that contains information about one health check that is associated with the current Amazon Web Services account.',
  })
  .openapi('HealthCheck')

const CreateHealthCheckResponseSchema = z
  .object({
    HealthCheck: HealthCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains identifying information about the health check.',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheck'],
    description: 'A complex type containing the response information for the new health check.',
  })
  .openapi('CreateHealthCheckResponse')

const TooManyHealthChecksSchema = z.any().openapi('TooManyHealthChecks')

const HealthCheckAlreadyExistsSchema = z.any().openapi('HealthCheckAlreadyExists')

const NonceSchema = z.string().min(1).max(128).openapi('Nonce')

const IsPrivateZoneSchema = z.boolean().openapi('IsPrivateZone')

const HostedZoneConfigSchema = z
  .object({
    Comment: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'Any comments that you want to include about the hosted zone.' }),
    ).exactOptional(),
    PrivateZone: IsPrivateZoneSchema.and(
      z
        .any()
        .openapi({ description: 'A value that indicates whether this is a private hosted zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.",
    required: [],
  })
  .openapi('HostedZoneConfig')

const HostedZoneRRSetCountSchema = z.int().openapi('HostedZoneRRSetCount')

const HostedZoneSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that Amazon Route 53 assigned to the hosted zone when you created it.',
        }),
    ),
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar.</p> <p>For information about how to specify characters other than <code>a-z</code>, <code>0-9</code>, and <code>-</code> (hyphen) and how to specify internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a>.</p>',
        }),
    ),
    CallerReference: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for <code>CallerReference</code> when you created the hosted zone.',
        }),
    ),
    Config: HostedZoneConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that includes the <code>Comment</code> and <code>PrivateZone</code> elements. If you omitted the <code>HostedZoneConfig</code> and <code>Comment</code> elements from the request, the <code>Config</code> and <code>Comment</code> elements don't appear in the response.",
        }),
    ).exactOptional(),
    ResourceRecordSetCount: HostedZoneRRSetCountSchema.and(
      z.any().openapi({ description: 'The number of resource record sets in the hosted zone.' }),
    ).exactOptional(),
    LinkedService: LinkedServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Route 53. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Name', 'CallerReference'],
    description: 'A complex type that contains general information about the hosted zone.',
  })
  .openapi('HostedZone')

const DelegationSetNameServersSchema = z
  .array(DNSNameSchema.and(z.any().openapi({ xml: { name: 'NameServer' } })))
  .min(1)
  .openapi('DelegationSetNameServers')

const DelegationSetSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that Amazon Route 53 assigns to a reusable delegation set.',
        }),
    ).exactOptional(),
    CallerReference: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for <code>CallerReference</code> when you created the reusable delegation set.',
        }),
    ).exactOptional(),
    NameServers: DelegationSetNameServersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.',
        }),
    ),
  })
  .openapi({
    required: ['NameServers'],
    description:
      'A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.',
  })
  .openapi('DelegationSet')

const VPCSchema = z
  .object({
    VPCRegion: VPCRegionSchema.and(
      z
        .any()
        .openapi({
          description: '(Private hosted zones only) The region that an Amazon VPC was created in.',
        }),
    ).exactOptional(),
    VPCId: VPCIdSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
    required: [],
  })
  .openapi('VPC')

const CreateHostedZoneResponseSchema = z
  .object({
    HostedZone: HostedZoneSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains general information about the hosted zone.',
        }),
    ),
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the <code>CreateHostedZone</code> request.',
        }),
    ),
    DelegationSet: DelegationSetSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that describes the name servers for this hosted zone.',
        }),
    ),
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about an Amazon VPC that you associated with this hosted zone.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HostedZone', 'ChangeInfo', 'DelegationSet'],
    description: 'A complex type containing the response information for the hosted zone.',
  })
  .openapi('CreateHostedZoneResponse')

const InvalidDomainNameSchema = z.any().openapi('InvalidDomainName')

const HostedZoneAlreadyExistsSchema = z.any().openapi('HostedZoneAlreadyExists')

const TooManyHostedZonesSchema = z.any().openapi('TooManyHostedZones')

const DelegationSetNotAvailableSchema = z.any().openapi('DelegationSetNotAvailable')

const NoSuchDelegationSetSchema = z.any().openapi('NoSuchDelegationSet')

const DelegationSetNotReusableSchema = z.any().openapi('DelegationSetNotReusable')

const SigningKeyNameSchema = z.string().min(3).max(128).openapi('SigningKeyName')

const SigningKeyStringSchema = z.string().openapi('SigningKeyString')

const SigningKeyIntegerSchema = z.int().openapi('SigningKeyInteger')

const SigningKeyTagSchema = z.int().min(0).max(65536).openapi('SigningKeyTag')

const SigningKeyStatusSchema = z.string().min(5).max(150).openapi('SigningKeyStatus')

const SigningKeyStatusMessageSchema = z.string().min(0).max(512).openapi('SigningKeyStatusMessage')

const KeySigningKeySchema = z
  .object({
    Name: SigningKeyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.',
        }),
    ).exactOptional(),
    KmsArn: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon resource name (ARN) used to identify the customer managed key in Key Management Service (KMS). The <code>KmsArn</code> must be unique for each key-signing key (KSK) in a single hosted zone.</p> <p>You must configure the customer managed key as follows:</p> <dl> <dt>Status</dt> <dd> <p>Enabled</p> </dd> <dt>Key spec</dt> <dd> <p>ECC_NIST_P256</p> </dd> <dt>Key usage</dt> <dd> <p>Sign and verify</p> </dd> <dt>Key policy</dt> <dd> <p>The key policy must give permission for the following actions:</p> <ul> <li> <p>DescribeKey</p> </li> <li> <p>GetPublicKey</p> </li> <li> <p>Sign</p> </li> </ul> <p>The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:</p> <ul> <li> <p> <code>"Service": "dnssec-route53.amazonaws.com"</code> </p> </li> </ul> </dd> </dl> <p>For more information about working with the customer managed key in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>',
        }),
    ).exactOptional(),
    Flag: SigningKeyIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies how the key is used. For key-signing key (KSK), this value is always 257.',
        }),
    ).exactOptional(),
    SigningAlgorithmMnemonic: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to represent the signing algorithm. This value must follow the guidelines provided by <a href="https://tools.ietf.org/html/rfc8624#section-3.1">RFC-8624 Section 3.1</a>. ',
        }),
    ).exactOptional(),
    SigningAlgorithmType: SigningKeyIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer used to represent the signing algorithm. This value must follow the guidelines provided by <a href="https://tools.ietf.org/html/rfc8624#section-3.1">RFC-8624 Section 3.1</a>. ',
        }),
    ).exactOptional(),
    DigestAlgorithmMnemonic: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to represent the delegation signer digest algorithm. This value must follow the guidelines provided by <a href="https://tools.ietf.org/html/rfc8624#section-3.3">RFC-8624 Section 3.3</a>. ',
        }),
    ).exactOptional(),
    DigestAlgorithmType: SigningKeyIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer used to represent the delegation signer digest algorithm. This value must follow the guidelines provided by <a href="https://tools.ietf.org/html/rfc8624#section-3.3">RFC-8624 Section 3.3</a>.',
        }),
    ).exactOptional(),
    KeyTag: SigningKeyTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer used to identify the DNSSEC record for the domain name. The process used to calculate the value is described in <a href="https://tools.ietf.org/rfc/rfc4034.txt">RFC-4034 Appendix B</a>.',
        }),
    ).exactOptional(),
    DigestValue: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A cryptographic digest of a DNSKEY resource record (RR). DNSKEY records are used to publish the public key that resolvers can use to verify DNSSEC signatures that are used to secure certain kinds of information provided by the DNS system.',
        }),
    ).exactOptional(),
    PublicKey: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key, represented as a Base64 encoding, as required by <a href="https://tools.ietf.org/rfc/rfc4034.txt"> RFC-4034 Page 5</a>.',
        }),
    ).exactOptional(),
    DSRecord: SigningKeyStringSchema.and(
      z.any().openapi({ description: 'A string that represents a delegation signer (DS) record.' }),
    ).exactOptional(),
    DNSKEYRecord: SigningKeyStringSchema.and(
      z.any().openapi({ description: 'A string that represents a DNSKEY record.' }),
    ).exactOptional(),
    Status: SigningKeyStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that represents the current key-signing key (KSK) status.</p> <p>Status can have one of the following values:</p> <dl> <dt>ACTIVE</dt> <dd> <p>The KSK is being used for signing.</p> </dd> <dt>INACTIVE</dt> <dd> <p>The KSK is not being used for signing.</p> </dd> <dt>DELETING</dt> <dd> <p>The KSK is in the process of being deleted.</p> </dd> <dt>ACTION_NEEDED</dt> <dd> <p>There is a problem with the KSK that requires you to take action to resolve. For example, the customer managed key might have been deleted, or the permissions for the customer managed key might have been changed.</p> </dd> <dt>INTERNAL_FAILURE</dt> <dd> <p>There was an error during a request. Before you can continue to work with DNSSEC signing, including actions that involve this KSK, you must correct the problem. For example, you may need to activate or deactivate the KSK.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    StatusMessage: SigningKeyStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status message provided for the following key-signing key (KSK) statuses: <code>ACTION_NEEDED</code> or <code>INTERNAL_FAILURE</code>. The status message includes information about what the problem might be and steps that you can take to correct the issue.',
        }),
    ).exactOptional(),
    CreatedDate: TimeStampSchema.and(
      z.any().openapi({ description: 'The date when the key-signing key (KSK) was created.' }),
    ).exactOptional(),
    LastModifiedDate: TimeStampSchema.and(
      z.any().openapi({ description: 'The last time that the key-signing key (KSK) was changed.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A key-signing key (KSK) is a complex type that represents a public/private key pair. The private key is used to generate a digital signature for the zone signing key (ZSK). The public key is stored in the DNS and is used to authenticate the ZSK. A KSK is always associated with a hosted zone; it cannot exist by itself.',
    required: [],
  })
  .openapi('KeySigningKey')

const CreateKeySigningKeyResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema,
    KeySigningKey: KeySigningKeySchema.and(
      z.any().openapi({ description: 'The key-signing key (KSK) that the request creates.' }),
    ),
  })
  .openapi({ required: ['ChangeInfo', 'KeySigningKey'] })
  .openapi('CreateKeySigningKeyResponse')

const InvalidArgumentSchema = z.any().openapi('InvalidArgument')

const InvalidKeySigningKeyNameSchema = z.any().openapi('InvalidKeySigningKeyName')

const KeySigningKeyAlreadyExistsSchema = z.any().openapi('KeySigningKeyAlreadyExists')

const TooManyKeySigningKeysSchema = z.any().openapi('TooManyKeySigningKeys')

const QueryLoggingConfigIdSchema = z.string().min(1).max(36).openapi('QueryLoggingConfigId')

const CloudWatchLogsLogGroupArnSchema = z.string().openapi('CloudWatchLogsLogGroupArn')

const QueryLoggingConfigSchema = z
  .object({
    Id: QueryLoggingConfigIdSchema.and(
      z.any().openapi({ description: 'The ID for a configuration for DNS query logging.' }),
    ),
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the hosted zone that CloudWatch Logs is logging queries for. ',
        }),
    ),
    CloudWatchLogsLogGroupArn: CloudWatchLogsLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'HostedZoneId', 'CloudWatchLogsLogGroupArn'],
    description:
      'A complex type that contains information about a configuration for DNS query logging.',
  })
  .openapi('QueryLoggingConfig')

const CreateQueryLoggingConfigResponseSchema = z
  .object({
    QueryLoggingConfig: QueryLoggingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the ID for a query logging configuration, the ID of the hosted zone that you want to log queries for, and the ARN for the log group that you want Amazon Route 53 to send query logs to.',
        }),
    ),
  })
  .openapi({ required: ['QueryLoggingConfig'] })
  .openapi('CreateQueryLoggingConfigResponse')

const NoSuchCloudWatchLogsLogGroupSchema = z.any().openapi('NoSuchCloudWatchLogsLogGroup')

const QueryLoggingConfigAlreadyExistsSchema = z.any().openapi('QueryLoggingConfigAlreadyExists')

const InsufficientCloudWatchLogsResourcePolicySchema = z
  .any()
  .openapi('InsufficientCloudWatchLogsResourcePolicy')

const CreateReusableDelegationSetResponseSchema = z
  .object({
    DelegationSet: DelegationSetSchema.and(
      z.any().openapi({ description: 'A complex type that contains name server information.' }),
    ),
  })
  .openapi({ required: ['DelegationSet'] })
  .openapi('CreateReusableDelegationSetResponse')

const DelegationSetAlreadyCreatedSchema = z.any().openapi('DelegationSetAlreadyCreated')

const HostedZoneNotFoundSchema = z.any().openapi('HostedZoneNotFound')

const DelegationSetAlreadyReusableSchema = z.any().openapi('DelegationSetAlreadyReusable')

const TrafficPolicyIdSchema = z.string().min(1).max(36).openapi('TrafficPolicyId')

const TrafficPolicyVersionSchema = z.int().min(1).max(1000).openapi('TrafficPolicyVersion')

const TrafficPolicyNameSchema = z.string().max(512).openapi('TrafficPolicyName')

const TrafficPolicyDocumentSchema = z.string().max(102400).openapi('TrafficPolicyDocument')

const TrafficPolicyCommentSchema = z.string().max(1024).openapi('TrafficPolicyComment')

const TrafficPolicySchema = z
  .object({
    Id: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that Amazon Route 53 assigned to a traffic policy when you created it.',
        }),
    ),
    Version: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy, the value of <code>Version</code> is always 1.',
        }),
    ),
    Name: TrafficPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you specified when you created the traffic policy.',
        }),
    ),
    Type: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.',
        }),
    ),
    Document: TrafficPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of a traffic policy in JSON format. You specify the JSON document to use for a new traffic policy in the <code>CreateTrafficPolicy</code> request. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.',
        }),
    ),
    Comment: TrafficPolicyCommentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The comment that you specify in the <code>CreateTrafficPolicy</code> request, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Version', 'Name', 'Type', 'Document'],
    description: 'A complex type that contains settings for a traffic policy.',
  })
  .openapi('TrafficPolicy')

const CreateTrafficPolicyResponseSchema = z
  .object({
    TrafficPolicy: TrafficPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains settings for the new traffic policy.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicy'],
    description:
      'A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.',
  })
  .openapi('CreateTrafficPolicyResponse')

const TooManyTrafficPoliciesSchema = z.any().openapi('TooManyTrafficPolicies')

const TrafficPolicyAlreadyExistsSchema = z.any().openapi('TrafficPolicyAlreadyExists')

const InvalidTrafficPolicyDocumentSchema = z.any().openapi('InvalidTrafficPolicyDocument')

const TrafficPolicyInstanceStateSchema = z.string().openapi('TrafficPolicyInstanceState')

const MessageSchema = z.string().max(1024).openapi('Message')

const TrafficPolicyInstanceSchema = z
  .object({
    Id: TrafficPolicyInstanceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that Amazon Route 53 assigned to the new traffic policy instance.',
        }),
    ),
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the hosted zone that Amazon Route 53 created resource record sets in.',
        }),
    ),
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance. ',
        }),
    ),
    TTL: TTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.',
        }),
    ),
    State: TrafficPolicyInstanceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>State</code> is one of the following values:</p> <dl> <dt>Applied</dt> <dd> <p>Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations.</p> </dd> <dt>Creating</dt> <dd> <p>Route 53 is creating the resource record sets. Use <code>GetTrafficPolicyInstance</code> to confirm that the <code>CreateTrafficPolicyInstance</code> request completed successfully.</p> </dd> <dt>Failed</dt> <dd> <p>Route 53 wasn't able to create or update the resource record sets. When the value of <code>State</code> is <code>Failed</code>, see <code>Message</code> for an explanation of what caused the request to fail.</p> </dd> </dl>",
        }),
    ),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>State</code> is <code>Failed</code>, an explanation of the reason for the failure. If <code>State</code> is another value, <code>Message</code> is empty.',
        }),
    ),
    TrafficPolicyId: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.',
        }),
    ),
    TrafficPolicyVersion: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.',
        }),
    ),
    TrafficPolicyType: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. ',
        }),
    ),
  })
  .openapi({
    required: [
      'Id',
      'HostedZoneId',
      'Name',
      'TTL',
      'State',
      'Message',
      'TrafficPolicyId',
      'TrafficPolicyVersion',
      'TrafficPolicyType',
    ],
    description: 'A complex type that contains settings for the new traffic policy instance.',
  })
  .openapi('TrafficPolicyInstance')

const CreateTrafficPolicyInstanceResponseSchema = z
  .object({
    TrafficPolicyInstance: TrafficPolicyInstanceSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains settings for the new traffic policy instance.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstance'],
    description:
      'A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.',
  })
  .openapi('CreateTrafficPolicyInstanceResponse')

const TooManyTrafficPolicyInstancesSchema = z.any().openapi('TooManyTrafficPolicyInstances')

const NoSuchTrafficPolicySchema = z.any().openapi('NoSuchTrafficPolicy')

const TrafficPolicyInstanceAlreadyExistsSchema = z
  .any()
  .openapi('TrafficPolicyInstanceAlreadyExists')

const CreateTrafficPolicyVersionResponseSchema = z
  .object({
    TrafficPolicy: TrafficPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for the new version of the traffic policy.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicy'],
    description:
      'A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.',
  })
  .openapi('CreateTrafficPolicyVersionResponse')

const TooManyTrafficPolicyVersionsForCurrentPolicySchema = z
  .any()
  .openapi('TooManyTrafficPolicyVersionsForCurrentPolicy')

const CreateVPCAssociationAuthorizationResponseSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the hosted zone that you authorized associating a VPC with.',
        }),
    ),
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({ description: 'The VPC that you authorized associating with a hosted zone.' }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'VPC'],
    description:
      'A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.',
  })
  .openapi('CreateVPCAssociationAuthorizationResponse')

const TooManyVPCAssociationAuthorizationsSchema = z
  .any()
  .openapi('TooManyVPCAssociationAuthorizations')

const DeactivateKeySigningKeyResponseSchema = z
  .object({ ChangeInfo: ChangeInfoSchema })
  .openapi({ required: ['ChangeInfo'] })
  .openapi('DeactivateKeySigningKeyResponse')

const KeySigningKeyInUseSchema = z.any().openapi('KeySigningKeyInUse')

const KeySigningKeyInParentDSRecordSchema = z.any().openapi('KeySigningKeyInParentDSRecord')

const DeleteCidrCollectionResponseSchema = z.object({}).openapi('DeleteCidrCollectionResponse')

const CidrCollectionInUseExceptionSchema = z.any().openapi('CidrCollectionInUseException')

const DeleteHealthCheckResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element.' })
  .openapi('DeleteHealthCheckResponse')

const HealthCheckInUseSchema = z.any().openapi('HealthCheckInUse')

const DeleteHostedZoneResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the ID, the status, and the date and time of a request to delete a hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['ChangeInfo'],
    description:
      'A complex type that contains the response to a <code>DeleteHostedZone</code> request.',
  })
  .openapi('DeleteHostedZoneResponse')

const HostedZoneNotEmptySchema = z.any().openapi('HostedZoneNotEmpty')

const DeleteKeySigningKeyResponseSchema = z
  .object({ ChangeInfo: ChangeInfoSchema })
  .openapi({ required: ['ChangeInfo'] })
  .openapi('DeleteKeySigningKeyResponse')

const DeleteQueryLoggingConfigResponseSchema = z
  .object({})
  .openapi('DeleteQueryLoggingConfigResponse')

const NoSuchQueryLoggingConfigSchema = z.any().openapi('NoSuchQueryLoggingConfig')

const DeleteReusableDelegationSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element.' })
  .openapi('DeleteReusableDelegationSetResponse')

const DelegationSetInUseSchema = z.any().openapi('DelegationSetInUse')

const DeleteTrafficPolicyResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element.' })
  .openapi('DeleteTrafficPolicyResponse')

const TrafficPolicyInUseSchema = z.any().openapi('TrafficPolicyInUse')

const DeleteTrafficPolicyInstanceResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element.' })
  .openapi('DeleteTrafficPolicyInstanceResponse')

const NoSuchTrafficPolicyInstanceSchema = z.any().openapi('NoSuchTrafficPolicyInstance')

const DeleteVPCAssociationAuthorizationResponseSchema = z
  .object({})
  .openapi({ description: 'Empty response for the request.' })
  .openapi('DeleteVPCAssociationAuthorizationResponse')

const VPCAssociationAuthorizationNotFoundSchema = z
  .any()
  .openapi('VPCAssociationAuthorizationNotFound')

const DisableHostedZoneDNSSECResponseSchema = z
  .object({ ChangeInfo: ChangeInfoSchema })
  .openapi({ required: ['ChangeInfo'] })
  .openapi('DisableHostedZoneDNSSECResponse')

const DNSSECNotFoundSchema = z.any().openapi('DNSSECNotFound')

const DisassociateVPCFromHostedZoneResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that describes the changes made to the specified private hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['ChangeInfo'],
    description:
      'A complex type that contains the response information for the disassociate request.',
  })
  .openapi('DisassociateVPCFromHostedZoneResponse')

const VPCAssociationNotFoundSchema = z.any().openapi('VPCAssociationNotFound')

const LastVPCAssociationSchema = z.any().openapi('LastVPCAssociation')

const EnableHostedZoneDNSSECResponseSchema = z
  .object({ ChangeInfo: ChangeInfoSchema })
  .openapi({ required: ['ChangeInfo'] })
  .openapi('EnableHostedZoneDNSSECResponse')

const KeySigningKeyWithActiveStatusNotFoundSchema = z
  .any()
  .openapi('KeySigningKeyWithActiveStatusNotFound')

const HostedZonePartiallyDelegatedSchema = z.any().openapi('HostedZonePartiallyDelegated')

const AccountLimitTypeSchema = z
  .enum([
    'MAX_HEALTH_CHECKS_BY_OWNER',
    'MAX_HOSTED_ZONES_BY_OWNER',
    'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER',
    'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER',
    'MAX_TRAFFIC_POLICIES_BY_OWNER',
  ])
  .openapi('AccountLimitType')

const LimitValueSchema = z.int().min(1).openapi('LimitValue')

const AccountLimitSchema = z
  .object({
    Type: AccountLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The limit that you requested. Valid values include the following:</p> <ul> <li> <p> <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create using the current account.</p> </li> <li> <p> <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create using the current account.</p> </li> <li> <p> <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</p> </li> </ul>',
        }),
    ),
    Value: LimitValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current value for the limit that is specified by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AccountLimit.html#Route53-Type-AccountLimit-Type">Type</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      'A complex type that contains the type of limit that you specified in the request and the current value for that limit.',
  })
  .openapi('AccountLimit')

const UsageCountSchema = z.int().min(0).openapi('UsageCount')

const GetAccountLimitResponseSchema = z
  .object({
    Limit: AccountLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current setting for the specified limit. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of health checks that you can create using the current account.',
        }),
    ),
    Count: UsageCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of entities that you have created of the specified type. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Count</code> is the current number of health checks that you have created using the current account.',
        }),
    ),
  })
  .openapi({
    required: ['Limit', 'Count'],
    description: 'A complex type that contains the requested limit. ',
  })
  .openapi('GetAccountLimitResponse')

const GetChangeResponseSchema = z
  .object({
    ChangeInfo: ChangeInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the specified change batch.',
        }),
    ),
  })
  .openapi({
    required: ['ChangeInfo'],
    description: 'A complex type that contains the <code>ChangeInfo</code> element.',
  })
  .openapi('GetChangeResponse')

const NoSuchChangeSchema = z.any().openapi('NoSuchChange')

const IPAddressCidrSchema = z.string().openapi('IPAddressCidr')

const CheckerIpRangesSchema = z.array(IPAddressCidrSchema).openapi('CheckerIpRanges')

const GetCheckerIpRangesResponseSchema = z
  .object({
    CheckerIpRanges: CheckerIpRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health checkers.',
        }),
    ),
  })
  .openapi({
    required: ['CheckerIpRanges'],
    description: 'A complex type that contains the <code>CheckerIpRanges</code> element.',
  })
  .openapi('GetCheckerIpRangesResponse')

const ServeSignatureSchema = z.string().min(1).max(1024).openapi('ServeSignature')

const DNSSECStatusSchema = z
  .object({
    ServeSignature: ServeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that represents the current hosted zone signing status.</p> <p>Status can have one of the following values:</p> <dl> <dt>SIGNING</dt> <dd> <p>DNSSEC signing is enabled for the hosted zone.</p> </dd> <dt>NOT_SIGNING</dt> <dd> <p>DNSSEC signing is not enabled for the hosted zone.</p> </dd> <dt>DELETING</dt> <dd> <p>DNSSEC signing is in the process of being removed for the hosted zone.</p> </dd> <dt>ACTION_NEEDED</dt> <dd> <p>There is a problem with signing in the hosted zone that requires you to take action to resolve. For example, the customer managed key might have been deleted, or the permissions for the customer managed key might have been changed.</p> </dd> <dt>INTERNAL_FAILURE</dt> <dd> <p>There was an error during a request. Before you can continue to work with DNSSEC signing, including with key-signing keys (KSKs), you must correct the problem by enabling or disabling DNSSEC signing for the hosted zone.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    StatusMessage: SigningKeyStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status message provided for the following DNSSEC signing status: <code>INTERNAL_FAILURE</code>. The status message includes information about what the problem might be and steps that you can take to correct the issue.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A string repesenting the status of DNSSEC signing.', required: [] })
  .openapi('DNSSECStatus')

const KeySigningKeysSchema = z.array(KeySigningKeySchema).openapi('KeySigningKeys')

const GetDNSSECResponseSchema = z
  .object({
    Status: DNSSECStatusSchema.and(
      z.any().openapi({ description: 'A string repesenting the status of DNSSEC.' }),
    ),
    KeySigningKeys: KeySigningKeysSchema.and(
      z.any().openapi({ description: 'The key-signing keys (KSKs) in your account.' }),
    ),
  })
  .openapi({ required: ['Status', 'KeySigningKeys'] })
  .openapi('GetDNSSECResponse')

const GeoLocationContinentNameSchema = z.string().min(1).max(32).openapi('GeoLocationContinentName')

const GeoLocationCountryNameSchema = z.string().min(1).max(64).openapi('GeoLocationCountryName')

const GeoLocationSubdivisionNameSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi('GeoLocationSubdivisionName')

const GeoLocationDetailsSchema = z
  .object({
    ContinentCode: GeoLocationContinentCodeSchema.and(
      z.any().openapi({ description: 'The two-letter code for the continent.' }),
    ).exactOptional(),
    ContinentName: GeoLocationContinentNameSchema.and(
      z.any().openapi({ description: 'The full name of the continent.' }),
    ).exactOptional(),
    CountryCode: GeoLocationCountryCodeSchema.and(
      z.any().openapi({ description: 'The two-letter code for the country.' }),
    ).exactOptional(),
    CountryName: GeoLocationCountryNameSchema.and(
      z.any().openapi({ description: 'The name of the country.' }),
    ).exactOptional(),
    SubdivisionCode: GeoLocationSubdivisionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a> on the United States Postal Service website. For a list of all supported subdivision codes, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html">ListGeoLocations</a> API.',
        }),
    ).exactOptional(),
    SubdivisionName: GeoLocationSubdivisionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full name of the subdivision. Route 53 currently supports only states in the United States.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.',
    required: [],
  })
  .openapi('GeoLocationDetails')

const GetGeoLocationResponseSchema = z
  .object({
    GeoLocationDetails: GeoLocationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.',
        }),
    ),
  })
  .openapi({
    required: ['GeoLocationDetails'],
    description:
      'A complex type that contains the response information for the specified geolocation code.',
  })
  .openapi('GetGeoLocationResponse')

const NoSuchGeoLocationSchema = z.any().openapi('NoSuchGeoLocation')

const GetHealthCheckResponseSchema = z
  .object({
    HealthCheck: HealthCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about one health check that is associated with the current Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheck'],
    description:
      'A complex type that contains the response to a <code>GetHealthCheck</code> request.',
  })
  .openapi('GetHealthCheckResponse')

const IncompatibleVersionSchema = z.any().openapi('IncompatibleVersion')

const HealthCheckCountSchema = z.int().openapi('HealthCheckCount')

const GetHealthCheckCountResponseSchema = z
  .object({
    HealthCheckCount: HealthCheckCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of health checks associated with the current Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheckCount'],
    description:
      'A complex type that contains the response to a <code>GetHealthCheckCount</code> request.',
  })
  .openapi('GetHealthCheckCountResponse')

const StatusSchema = z.string().openapi('Status')

const StatusReportSchema = z
  .object({
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.',
        }),
    ).exactOptional(),
    CheckedTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the health checker performed the health check in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.',
    required: [],
  })
  .openapi('StatusReport')

const HealthCheckObservationSchema = z
  .object({
    Region: HealthCheckRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The region of the Amazon Route 53 health checker that provided the status in <code>StatusReport</code>.',
        }),
    ).exactOptional(),
    IPAddress: IPAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the Amazon Route 53 health checker that provided the failure reason in <code>StatusReport</code>.',
        }),
    ).exactOptional(),
    StatusReport: StatusReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.',
    required: [],
  })
  .openapi('HealthCheckObservation')

const HealthCheckObservationsSchema = z
  .array(
    HealthCheckObservationSchema.and(z.any().openapi({ xml: { name: 'HealthCheckObservation' } })),
  )
  .openapi('HealthCheckObservations')

const GetHealthCheckLastFailureReasonResponseSchema = z
  .object({
    HealthCheckObservations: HealthCheckObservationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>Observation</code> element for each Amazon Route 53 health checker that is reporting a last failure reason. ',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheckObservations'],
    description:
      'A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.',
  })
  .openapi('GetHealthCheckLastFailureReasonResponse')

const GetHealthCheckStatusResponseSchema = z
  .object({
    HealthCheckObservations: HealthCheckObservationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>HealthCheckObservation</code> element for each Amazon Route 53 health checker that is reporting a status about the health check endpoint.',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheckObservations'],
    description:
      'A complex type that contains the response to a <code>GetHealthCheck</code> request.',
  })
  .openapi('GetHealthCheckStatusResponse')

const VPCsSchema = z
  .array(VPCSchema.and(z.any().openapi({ xml: { name: 'VPC' } })))
  .min(1)
  .openapi({ description: '(Private hosted zones only) A list of <code>VPC</code> elements.' })
  .openapi('VPCs')

const GetHostedZoneResponseSchema = z
  .object({
    HostedZone: HostedZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains general information about the specified hosted zone.',
        }),
    ),
    DelegationSet: DelegationSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that lists the Amazon Route 53 name servers for the specified hosted zone.',
        }),
    ).exactOptional(),
    VPCs: VPCsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the VPCs that are associated with the specified hosted zone.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HostedZone'],
    example: {
      DelegationSet: {
        NameServers: [
          'ns-2048.awsdns-64.com',
          'ns-2049.awsdns-65.net',
          'ns-2050.awsdns-66.org',
          'ns-2051.awsdns-67.co.uk',
        ],
      },
      HostedZone: {
        CallerReference: 'C741617D-04E4-F8DE-B9D7-0D150FC61C2E',
        Config: { PrivateZone: false },
        Id: '/hostedzone/Z3M3LMPEXAMPLE',
        Name: 'myawsbucket.com.',
        ResourceRecordSetCount: 8,
      },
    },
    description:
      'A complex type that contain the response to a <code>GetHostedZone</code> request.',
  })
  .openapi('GetHostedZoneResponse')

const HostedZoneCountSchema = z.int().openapi('HostedZoneCount')

const GetHostedZoneCountResponseSchema = z
  .object({
    HostedZoneCount: HostedZoneCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of public and private hosted zones that are associated with the current Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneCount'],
    description:
      'A complex type that contains the response to a <code>GetHostedZoneCount</code> request.',
  })
  .openapi('GetHostedZoneCountResponse')

const HostedZoneLimitTypeSchema = z
  .enum(['MAX_RRSETS_BY_ZONE', 'MAX_VPCS_ASSOCIATED_BY_ZONE'])
  .openapi('HostedZoneLimitType')

const HostedZoneLimitSchema = z
  .object({
    Type: HostedZoneLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The limit that you requested. Valid values include the following:</p> <ul> <li> <p> <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create in the specified hosted zone.</p> </li> <li> <p> <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</p> </li> </ul>',
        }),
    ),
    Value: LimitValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The current value for the limit that is specified by <code>Type</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      'A complex type that contains the type of limit that you specified in the request and the current value for that limit.',
  })
  .openapi('HostedZoneLimit')

const GetHostedZoneLimitResponseSchema = z
  .object({
    Limit: HostedZoneLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current setting for the specified limit. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of records that you can create in the specified hosted zone.',
        }),
    ),
    Count: UsageCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of entities that you have created of the specified type. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Count</code> is the current number of records that you have created in the specified hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['Limit', 'Count'],
    description: 'A complex type that contains the requested limit. ',
  })
  .openapi('GetHostedZoneLimitResponse')

const HostedZoneNotPrivateSchema = z.any().openapi('HostedZoneNotPrivate')

const GetQueryLoggingConfigResponseSchema = z
  .object({
    QueryLoggingConfig: QueryLoggingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the query logging configuration that you specified in a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html">GetQueryLoggingConfig</a> request.',
        }),
    ),
  })
  .openapi({ required: ['QueryLoggingConfig'] })
  .openapi('GetQueryLoggingConfigResponse')

const GetReusableDelegationSetResponseSchema = z
  .object({
    DelegationSet: DelegationSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the reusable delegation set.',
        }),
    ),
  })
  .openapi({
    required: ['DelegationSet'],
    description:
      'A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.',
  })
  .openapi('GetReusableDelegationSetResponse')

const ReusableDelegationSetLimitTypeSchema = z
  .literal('MAX_ZONES_BY_REUSABLE_DELEGATION_SET')
  .openapi('ReusableDelegationSetLimitType')

const ReusableDelegationSetLimitSchema = z
  .object({
    Type: ReusableDelegationSetLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The limit that you requested: <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code>, the maximum number of hosted zones that you can associate with the specified reusable delegation set.',
        }),
    ),
    Value: LimitValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current value for the <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> limit.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      'A complex type that contains the type of limit that you specified in the request and the current value for that limit.',
  })
  .openapi('ReusableDelegationSetLimit')

const GetReusableDelegationSetLimitResponseSchema = z
  .object({
    Limit: ReusableDelegationSetLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current setting for the limit on hosted zones that you can associate with the specified reusable delegation set.',
        }),
    ),
    Count: UsageCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of hosted zones that you can associate with the specified reusable delegation set.',
        }),
    ),
  })
  .openapi({
    required: ['Limit', 'Count'],
    description: 'A complex type that contains the requested limit. ',
  })
  .openapi('GetReusableDelegationSetLimitResponse')

const GetTrafficPolicyResponseSchema = z
  .object({
    TrafficPolicy: TrafficPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains settings for the specified traffic policy.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicy'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('GetTrafficPolicyResponse')

const GetTrafficPolicyInstanceResponseSchema = z
  .object({
    TrafficPolicyInstance: TrafficPolicyInstanceSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains settings for the traffic policy instance.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstance'],
    description:
      'A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.',
  })
  .openapi('GetTrafficPolicyInstanceResponse')

const TrafficPolicyInstanceCountSchema = z.int().openapi('TrafficPolicyInstanceCount')

const GetTrafficPolicyInstanceCountResponseSchema = z
  .object({
    TrafficPolicyInstanceCount: TrafficPolicyInstanceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of traffic policy instances that are associated with the current Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstanceCount'],
    description:
      'A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.',
  })
  .openapi('GetTrafficPolicyInstanceCountResponse')

const PaginationTokenSchema = z.string().max(1024).openapi('PaginationToken')

const CidrBlockSummarySchema = z
  .object({
    CidrBlock: CidrSchema.and(
      z.any().openapi({ description: 'Value for the CIDR block.' }),
    ).exactOptional(),
    LocationName: CidrLocationNameDefaultNotAllowedSchema.and(
      z.any().openapi({ description: 'The location name of the CIDR block.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A complex type that lists the CIDR blocks.', required: [] })
  .openapi('CidrBlockSummary')

const CidrBlockSummariesSchema = z.array(CidrBlockSummarySchema).openapi('CidrBlockSummaries')

const ListCidrBlocksResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An opaque pagination token to indicate where the service is to begin enumerating results. </p> <p>If no value is provided, the listing of results starts from the beginning.</p>',
        }),
    ).exactOptional(),
    CidrBlocks: CidrBlockSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the CIDR blocks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCidrBlocksResponse')

const NoSuchCidrLocationExceptionSchema = z.any().openapi('NoSuchCidrLocationException')

const CollectionSummarySchema = z
  .object({
    Arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the collection summary. Can be used to reference the collection in IAM policy or cross-account.',
        }),
    ).exactOptional(),
    Id: UUIDSchema.and(
      z.any().openapi({ description: 'Unique ID for the CIDR collection.' }),
    ).exactOptional(),
    Name: CollectionNameSchema.and(
      z.any().openapi({ description: 'The name of a CIDR collection.' }),
    ).exactOptional(),
    Version: CollectionVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A sequential counter that Route 53 sets to 1 when you create a CIDR collection and increments by 1 each time you update settings for the CIDR collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that is an entry in an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CidrCollection.html">CidrCollection</a> array.',
    required: [],
  })
  .openapi('CollectionSummary')

const CollectionSummariesSchema = z.array(CollectionSummarySchema).openapi('CollectionSummaries')

const ListCidrCollectionsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>',
        }),
    ).exactOptional(),
    CidrCollections: CollectionSummariesSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type with information about the CIDR collection.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCidrCollectionsResponse')

const LocationSummarySchema = z
  .object({
    LocationName: CidrLocationNameDefaultAllowedSchema.and(
      z.any().openapi({ description: 'A string that specifies a location name.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains information about the CIDR location.',
    required: [],
  })
  .openapi('LocationSummary')

const LocationSummariesSchema = z.array(LocationSummarySchema).openapi('LocationSummaries')

const ListCidrLocationsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>',
        }),
    ).exactOptional(),
    CidrLocations: LocationSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the list of CIDR locations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCidrLocationsResponse')

const GeoLocationDetailsListSchema = z
  .array(GeoLocationDetailsSchema.and(z.any().openapi({ xml: { name: 'GeoLocationDetails' } })))
  .openapi('GeoLocationDetailsList')

const PageTruncatedSchema = z.boolean().openapi('PageTruncated')

const PageMaxItemsSchema = z.string().openapi('PageMaxItems')

const ListGeoLocationsResponseSchema = z
  .object({
    GeoLocationDetailsList: GeoLocationDetailsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>GeoLocationDetails</code> element for each location that Amazon Route 53 supports for geolocation.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether more locations remain to be listed after the last location in this response. If so, the value of <code>IsTruncated</code> is <code>true</code>. To get more values, submit another request and include the values of <code>NextContinentCode</code>, <code>NextCountryCode</code>, and <code>NextSubdivisionCode</code> in the <code>startcontinentcode</code>, <code>startcountrycode</code>, and <code>startsubdivisioncode</code>, as applicable.',
        }),
    ),
    NextContinentCode: GeoLocationContinentCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextContinentCode</code> in the <code>startcontinentcode</code> parameter in another <code>ListGeoLocations</code> request.',
        }),
    ).exactOptional(),
    NextCountryCode: GeoLocationCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextCountryCode</code> in the <code>startcountrycode</code> parameter in another <code>ListGeoLocations</code> request.',
        }),
    ).exactOptional(),
    NextSubdivisionCode: GeoLocationSubdivisionCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of <code>NextSubdivisionCode</code> in the <code>startsubdivisioncode</code> parameter in another <code>ListGeoLocations</code> request.',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you specified for <code>MaxItems</code> in the request.',
        }),
    ),
  })
  .openapi({
    required: ['GeoLocationDetailsList', 'IsTruncated', 'MaxItems'],
    description: 'A complex type containing the response information for the request.',
  })
  .openapi('ListGeoLocationsResponse')

const HealthChecksSchema = z
  .array(HealthCheckSchema.and(z.any().openapi({ xml: { name: 'HealthCheck' } })))
  .openapi('HealthChecks')

const PageMarkerSchema = z.string().max(64).openapi('PageMarker')

const ListHealthChecksResponseSchema = z
  .object({
    HealthChecks: HealthChecksSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>HealthCheck</code> element for each health check that is associated with the current Amazon Web Services account.',
        }),
    ),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the second and subsequent calls to <code>ListHealthChecks</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the previous request.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of health checks by submitting another <code>ListHealthChecks</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.',
        }),
    ),
    NextMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first health check that Amazon Route 53 returns if you submit another <code>ListHealthChecks</code> request and specify the value of <code>NextMarker</code> in the <code>marker</code> parameter.',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHealthChecks</code> that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['HealthChecks', 'Marker', 'IsTruncated', 'MaxItems'],
    description:
      'A complex type that contains the response to a <code>ListHealthChecks</code> request.',
  })
  .openapi('ListHealthChecksResponse')

const HostedZonesSchema = z
  .array(HostedZoneSchema.and(z.any().openapi({ xml: { name: 'HostedZone' } })))
  .openapi('HostedZones')

const ListHostedZonesResponseSchema = z
  .object({
    HostedZones: HostedZonesSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains general information about the hosted zone.',
        }),
    ),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the second and subsequent calls to <code>ListHostedZones</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the request that produced the current response.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get more hosted zones by submitting another <code>ListHostedZones</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.',
        }),
    ),
    NextMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first hosted zone in the next group of hosted zones. Submit another <code>ListHostedZones</code> request, and specify the value of <code>NextMarker</code> from the response in the <code>marker</code> parameter.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZones</code> that produced the current response.',
        }),
    ),
  })
  .openapi({ required: ['HostedZones', 'Marker', 'IsTruncated', 'MaxItems'] })
  .openapi('ListHostedZonesResponse')

const ListHostedZonesByNameResponseSchema = z
  .object({
    HostedZones: HostedZonesSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains general information about the hosted zone.',
        }),
    ),
    DNSName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the second and subsequent calls to <code>ListHostedZonesByName</code>, <code>DNSName</code> is the value that you specified for the <code>dnsname</code> parameter in the request that produced the current response.',
        }),
    ).exactOptional(),
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that Amazon Route 53 assigned to the hosted zone when you created it.',
        }),
    ).exactOptional(),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of <code>maxitems</code> hosted zones by calling <code>ListHostedZonesByName</code> again and specifying the values of <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the <code>dnsname</code> and <code>hostedzoneid</code> parameters.',
        }),
    ),
    NextDNSName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>IsTruncated</code> is true, the value of <code>NextDNSName</code> is the name of the first hosted zone in the next group of <code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    NextHostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextHostedZoneId</code> identifies the first hosted zone in the next group of <code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZonesByName</code> that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZones', 'IsTruncated', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListHostedZonesByNameResponse')

const AWSAccountIDSchema = z.string().openapi('AWSAccountID')

const HostedZoneOwningServiceSchema = z.string().max(128).openapi('HostedZoneOwningService')

const HostedZoneOwnerSchema = z
  .object({
    OwningAccount: AWSAccountIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the hosted zone was created by an Amazon Web Services account, or was created by an Amazon Web Services service that creates hosted zones using the current account, <code>OwningAccount</code> contains the account ID of that account. For example, when you use Cloud Map to create a hosted zone, Cloud Map creates the hosted zone using the current Amazon Web Services account. ',
        }),
    ).exactOptional(),
    OwningService: HostedZoneOwningServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an Amazon Web Services service uses its own account to create a hosted zone and associate the specified VPC with that hosted zone, <code>OwningService</code> contains an abbreviation that identifies the service. For example, if Amazon Elastic File System (Amazon EFS) created a hosted zone and associated a VPC with the hosted zone, the value of <code>OwningService</code> is <code>efs.amazonaws.com</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that identifies a hosted zone that a specified Amazon VPC is associated with and the owner of the hosted zone. If there is a value for <code>OwningAccount</code>, there is no value for <code>OwningService</code>, and vice versa. ',
    required: [],
  })
  .openapi('HostedZoneOwner')

const HostedZoneSummarySchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Route 53 hosted zone ID of a private hosted zone that the specified VPC is associated with.',
        }),
    ),
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the private hosted zone, such as <code>example.com</code>.',
        }),
    ),
    Owner: HostedZoneOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of a private hosted zone that the specified VPC is associated with. The owner can be either an Amazon Web Services account or an Amazon Web Services service.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'Name', 'Owner'],
    description:
      'In the response to a <code>ListHostedZonesByVPC</code> request, the <code>HostedZoneSummaries</code> element contains one <code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with. Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.',
  })
  .openapi('HostedZoneSummary')

const HostedZoneSummariesSchema = z
  .array(HostedZoneSummarySchema.and(z.any().openapi({ xml: { name: 'HostedZoneSummary' } })))
  .openapi('HostedZoneSummaries')

const ListHostedZonesByVPCResponseSchema = z
  .object({
    HostedZoneSummaries: HostedZoneSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with. Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for <code>MaxItems</code> in the most recent <code>ListHostedZonesByVPC</code> request.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you will use for <code>NextToken</code> in the next <code>ListHostedZonesByVPC</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HostedZoneSummaries', 'MaxItems'] })
  .openapi('ListHostedZonesByVPCResponse')

const InvalidPaginationTokenSchema = z.any().openapi('InvalidPaginationToken')

const QueryLoggingConfigsSchema = z
  .array(QueryLoggingConfigSchema.and(z.any().openapi({ xml: { name: 'QueryLoggingConfig' } })))
  .openapi('QueryLoggingConfigs')

const ListQueryLoggingConfigsResponseSchema = z
  .object({
    QueryLoggingConfigs: QueryLoggingConfigsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_QueryLoggingConfig.html">QueryLoggingConfig</a> element for each configuration for DNS query logging that is associated with the current Amazon Web Services account.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If a response includes the last of the query logging configurations that are associated with the current Amazon Web Services account, <code>NextToken</code> doesn\'t appear in the response.</p> <p>If a response doesn\'t include the last of the configurations, you can get more configurations by submitting another <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html">ListQueryLoggingConfigs</a> request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in <code>NextToken</code> in the next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryLoggingConfigs'] })
  .openapi('ListQueryLoggingConfigsResponse')

const ResourceRecordSetsSchema = z
  .array(ResourceRecordSetSchema.and(z.any().openapi({ xml: { name: 'ResourceRecordSet' } })))
  .openapi('ResourceRecordSets')

const ListResourceRecordSetsResponseSchema = z
  .object({
    ResourceRecordSets: ResourceRecordSetsSchema.and(
      z.any().openapi({ description: 'Information about multiple resource record sets.' }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a follow-up pagination request by using the <code>NextRecordName</code> element.',
        }),
    ),
    NextRecordName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the results were truncated, the name of the next record in the list.</p> <p>This element is present only if <code>IsTruncated</code> is true. </p>',
        }),
    ).exactOptional(),
    NextRecordType: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the results were truncated, the type of the next record in the list.</p> <p>This element is present only if <code>IsTruncated</code> is true. </p>',
        }),
    ).exactOptional(),
    NextRecordIdentifier: ResourceRecordSetIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type, the value of <code>SetIdentifier</code> for the next resource record set that has the current DNS name and type.</p> <p>For information about routing policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html">Choosing a Routing Policy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z.any().openapi({ description: 'The maximum number of records you requested.' }),
    ),
  })
  .openapi({
    required: ['ResourceRecordSets', 'IsTruncated', 'MaxItems'],
    description: 'A complex type that contains list information for the resource record set.',
  })
  .openapi('ListResourceRecordSetsResponse')

const DelegationSetsSchema = z
  .array(DelegationSetSchema.and(z.any().openapi({ xml: { name: 'DelegationSet' } })))
  .openapi('DelegationSets')

const ListReusableDelegationSetsResponseSchema = z
  .object({
    DelegationSets: DelegationSetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>DelegationSet</code> element for each reusable delegation set that was created by the current Amazon Web Services account.',
        }),
    ),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the second and subsequent calls to <code>ListReusableDelegationSets</code>, <code>Marker</code> is the value that you specified for the <code>marker</code> parameter in the request that produced the current response.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more reusable delegation sets to be listed.',
        }),
    ),
    NextMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the next reusable delegation set that Amazon Route 53 will return if you submit another <code>ListReusableDelegationSets</code> request and specify the value of <code>NextMarker</code> in the <code>marker</code> parameter.',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListReusableDelegationSets</code> that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['DelegationSets', 'Marker', 'IsTruncated', 'MaxItems'],
    description:
      'A complex type that contains information about the reusable delegation sets that are associated with the current Amazon Web Services account.',
  })
  .openapi('ListReusableDelegationSetsResponse')

const TagResourceTypeSchema = z.enum(['healthcheck', 'hostedzone']).openapi('TagResourceType')

const TagResourceIdSchema = z.string().max(64).openapi('TagResourceId')

const TagListSchema = z
  .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .min(1)
  .max(10)
  .openapi('TagList')

const ResourceTagSetSchema = z
  .object({
    ResourceType: TagResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResourceId: TagResourceIdSchema.and(
      z.any().openapi({ description: 'The ID for the specified resource.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the specified resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type containing a resource and its associated tags.',
    required: [],
  })
  .openapi('ResourceTagSet')

const ListTagsForResourceResponseSchema = z
  .object({
    ResourceTagSet: ResourceTagSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ResourceTagSet</code> containing tags associated with the specified resource.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceTagSet'],
    description:
      'A complex type that contains information about the health checks or hosted zones for which you want to list tags.',
  })
  .openapi('ListTagsForResourceResponse')

const ResourceTagSetListSchema = z
  .array(ResourceTagSetSchema.and(z.any().openapi({ xml: { name: 'ResourceTagSet' } })))
  .openapi('ResourceTagSetList')

const ListTagsForResourcesResponseSchema = z
  .object({
    ResourceTagSets: ResourceTagSetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ResourceTagSet</code>s containing tags associated with the specified resources.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceTagSets'],
    description: 'A complex type containing tags for the specified resources.',
  })
  .openapi('ListTagsForResourcesResponse')

const TrafficPolicySummarySchema = z
  .object({
    Id: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID that Amazon Route 53 assigned to the traffic policy when you created it.',
        }),
    ),
    Name: TrafficPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you specified for the traffic policy when you created it.',
        }),
    ),
    Type: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.',
        }),
    ),
    LatestVersion: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version number of the latest version of the traffic policy.',
        }),
    ),
    TrafficPolicyCount: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of traffic policies that are associated with the current Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'Name', 'Type', 'LatestVersion', 'TrafficPolicyCount'],
    description:
      'A complex type that contains information about the latest version of one traffic policy that is associated with the current Amazon Web Services account.',
  })
  .openapi('TrafficPolicySummary')

const TrafficPolicySummariesSchema = z
  .array(TrafficPolicySummarySchema.and(z.any().openapi({ xml: { name: 'TrafficPolicySummary' } })))
  .openapi('TrafficPolicySummaries')

const ListTrafficPoliciesResponseSchema = z
  .object({
    TrafficPolicySummaries: TrafficPolicySummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>TrafficPolicySummary</code> element for each traffic policy that was created by the current Amazon Web Services account.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another <code>ListTrafficPolicies</code> request and specifying the value of <code>TrafficPolicyIdMarker</code> in the <code>TrafficPolicyIdMarker</code> request parameter.',
        }),
    ),
    TrafficPolicyIdMarker: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value of <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy in the next group of <code>MaxItems</code> traffic policies.',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicies</code> request that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicySummaries', 'IsTruncated', 'TrafficPolicyIdMarker', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListTrafficPoliciesResponse')

const TrafficPolicyInstancesSchema = z
  .array(
    TrafficPolicyInstanceSchema.and(z.any().openapi({ xml: { name: 'TrafficPolicyInstance' } })),
  )
  .openapi('TrafficPolicyInstances')

const ListTrafficPolicyInstancesResponseSchema = z
  .object({
    TrafficPolicyInstances: TrafficPolicyInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request.',
        }),
    ),
    HostedZoneIdMarker: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first traffic policy instance that Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. ',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceNameMarker: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy instance that Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. ',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceTypeMarker: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets that are associated with the first traffic policy instance that Amazon Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. ',
        }),
    ).exactOptional(),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get more traffic policy instances by calling <code>ListTrafficPolicyInstances</code> again and specifying the values of the <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> in the corresponding request parameters.',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>MaxItems</code> parameter in the call to <code>ListTrafficPolicyInstances</code> that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListTrafficPolicyInstancesResponse')

const ListTrafficPolicyInstancesByHostedZoneResponseSchema = z
  .object({
    TrafficPolicyInstances: TrafficPolicyInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request. ',
        }),
    ),
    TrafficPolicyInstanceNameMarker: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy instance in the next group of traffic policy instances.',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceTypeMarker: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is true, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of traffic policy instances.',
        }),
    ).exactOptional(),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of traffic policy instances by submitting another <code>ListTrafficPolicyInstancesByHostedZone</code> request and specifying the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> in the corresponding request parameters.',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicyInstancesByHostedZone</code> request that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListTrafficPolicyInstancesByHostedZoneResponse')

const ListTrafficPolicyInstancesByPolicyResponseSchema = z
  .object({
    TrafficPolicyInstances: TrafficPolicyInstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request.',
        }),
    ),
    HostedZoneIdMarker: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first traffic policy instance in the next group of traffic policy instances.',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceNameMarker: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.',
        }),
    ).exactOptional(),
    TrafficPolicyInstanceTypeMarker: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.',
        }),
    ).exactOptional(),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of traffic policy instances by calling <code>ListTrafficPolicyInstancesByPolicy</code> again and specifying the values of the <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> elements in the corresponding request parameters.',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>MaxItems</code> parameter in the call to <code>ListTrafficPolicyInstancesByPolicy</code> that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListTrafficPolicyInstancesByPolicyResponse')

const TrafficPoliciesSchema = z
  .array(TrafficPolicySchema.and(z.any().openapi({ xml: { name: 'TrafficPolicy' } })))
  .openapi('TrafficPolicies')

const TrafficPolicyVersionMarkerSchema = z.string().max(4).openapi('TrafficPolicyVersionMarker')

const ListTrafficPolicyVersionsResponseSchema = z
  .object({
    TrafficPolicies: TrafficPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>TrafficPolicy</code> element for each traffic policy version that is associated with the specified traffic policy.',
        }),
    ),
    IsTruncated: PageTruncatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of traffic policies by submitting another <code>ListTrafficPolicyVersions</code> request and specifying the value of <code>NextMarker</code> in the <code>marker</code> parameter.',
        }),
    ),
    TrafficPolicyVersionMarker: TrafficPolicyVersionMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>TrafficPolicyVersionMarker</code> identifies the first traffic policy that Amazon Route 53 will return if you submit another request. Call <code>ListTrafficPolicyVersions</code> again and specify the value of <code>TrafficPolicyVersionMarker</code> in the <code>TrafficPolicyVersionMarker</code> request parameter.</p> <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>',
        }),
    ),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you specified for the <code>maxitems</code> parameter in the <code>ListTrafficPolicyVersions</code> request that produced the current response.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicies', 'IsTruncated', 'TrafficPolicyVersionMarker', 'MaxItems'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListTrafficPolicyVersionsResponse')

const ListVPCAssociationAuthorizationsResponseSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the hosted zone that you can associate the listed VPCs with.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of VPCs, submit another <code>ListVPCAssociationAuthorizations</code> request, and include the value of the <code>NextToken</code> element from the response in the <code>nexttoken</code> request parameter.',
        }),
    ).exactOptional(),
    VPCs: VPCsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of VPCs that are authorized to be associated with the specified hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'VPCs'],
    description: 'A complex type that contains the response information for the request.',
  })
  .openapi('ListVPCAssociationAuthorizationsResponse')

const NameserverSchema = z.string().min(0).max(255).openapi('Nameserver')

const RecordDataEntrySchema = z
  .string()
  .min(0)
  .max(512)
  .openapi({
    description:
      '<p>A value that Amazon Route 53 returned for this resource record set. A <code>RecordDataEntry</code> element is one of the following:</p> <ul> <li> <p>For non-alias resource record sets, a <code>RecordDataEntry</code> element contains one value in the resource record set. If the resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> <li> <p>For multiple resource record sets that have the same name and type, which includes weighted, latency, geolocation, and failover, a <code>RecordDataEntry</code> element contains the value from the appropriate resource record set based on the request.</p> </li> <li> <p>For alias resource record sets that refer to Amazon Web Services resources other than another resource record set, the <code>RecordDataEntry</code> element contains an IP address or a domain name for the Amazon Web Services resource, depending on the type of resource.</p> </li> <li> <p>For alias resource record sets that refer to other resource record sets, a <code>RecordDataEntry</code> element contains one value from the referenced resource record set. If the referenced resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> </ul>',
  })
  .openapi('RecordDataEntry')

const RecordDataSchema = z
  .array(RecordDataEntrySchema.and(z.any().openapi({ xml: { name: 'RecordDataEntry' } })))
  .openapi('RecordData')

const DNSRCodeSchema = z.string().openapi('DNSRCode')

const TransportProtocolSchema = z.string().openapi('TransportProtocol')

const TestDNSAnswerResponseSchema = z
  .object({
    Nameserver: NameserverSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Route 53 name server used to respond to the request.',
        }),
    ),
    RecordName: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the resource record set that you submitted a request for.',
        }),
    ),
    RecordType: RRTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the resource record set that you submitted a request for.',
        }),
    ),
    RecordData: RecordDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains values that Amazon Route 53 returned for this resource record set.',
        }),
    ),
    ResponseCode: DNSRCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A code that indicates whether the request is valid or not. The most common response code is <code>NOERROR</code>, meaning that the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error. For a list of possible response codes, see <a href="http://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6">DNS RCODES</a> on the IANA website. ',
        }),
    ),
    Protocol: TransportProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that Amazon Route 53 used to respond to the request, either <code>UDP</code> or <code>TCP</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['Nameserver', 'RecordName', 'RecordType', 'RecordData', 'ResponseCode', 'Protocol'],
    description:
      'A complex type that contains the response to a <code>TestDNSAnswer</code> request. ',
  })
  .openapi('TestDNSAnswerResponse')

const UpdateHealthCheckResponseSchema = z
  .object({
    HealthCheck: HealthCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the response to an <code>UpdateHealthCheck</code> request.',
        }),
    ),
  })
  .openapi({
    required: ['HealthCheck'],
    description:
      'A complex type that contains the response to the <code>UpdateHealthCheck</code> request.',
  })
  .openapi('UpdateHealthCheckResponse')

const ResettableElementNameSchema = z
  .enum(['FullyQualifiedDomainName', 'Regions', 'ResourcePath', 'ChildHealthChecks'])
  .openapi('ResettableElementName')

const HealthCheckVersionMismatchSchema = z.any().openapi('HealthCheckVersionMismatch')

const UpdateHostedZoneCommentResponseSchema = z
  .object({
    HostedZone: HostedZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZone'],
    description:
      'A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.',
  })
  .openapi('UpdateHostedZoneCommentResponse')

const UpdateTrafficPolicyCommentResponseSchema = z
  .object({
    TrafficPolicy: TrafficPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains settings for the specified traffic policy.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicy'],
    description: 'A complex type that contains the response information for the traffic policy.',
  })
  .openapi('UpdateTrafficPolicyCommentResponse')

const UpdateTrafficPolicyInstanceResponseSchema = z
  .object({
    TrafficPolicyInstance: TrafficPolicyInstanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for the updated traffic policy instance.',
        }),
    ),
  })
  .openapi({
    required: ['TrafficPolicyInstance'],
    description:
      'A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.',
  })
  .openapi('UpdateTrafficPolicyInstanceResponse')

const ConflictingTypesSchema = z.any().openapi('ConflictingTypes')

const ActivateKeySigningKeyRequestSchema = z
  .object({})
  .openapi({ title: 'ActivateKeySigningKeyRequest' })
  .openapi('ActivateKeySigningKeyRequest')

const AssociateVPCCommentSchema = z.string().openapi('AssociateVPCComment')

const AssociateVPCWithHostedZoneRequestSchema = z
  .object({
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the VPC that you want to associate with a private hosted zone.',
        }),
    ),
    Comment: AssociateVPCCommentSchema.and(
      z
        .any()
        .openapi({ description: ' <i>Optional:</i> A comment about the association request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VPC'],
    title: 'AssociateVPCWithHostedZoneRequest',
    description:
      'A complex type that contains information about the request to associate a VPC with a private hosted zone.',
  })
  .openapi('AssociateVPCWithHostedZoneRequest')

const ChangeBatchSchema = z
  .object({
    Comment: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>Optional:</i> Any comments you want to include about a change batch request.',
        }),
    ).exactOptional(),
    Changes: ChangesSchema.and(
      z.any().openapi({ description: 'Information about the changes to make to the record sets.' }),
    ),
  })
  .openapi({ required: ['Changes'], description: 'The information for a change request.' })
  .openapi('ChangeBatch')

const CidrCollectionChangesSchema = z
  .array(CidrCollectionChangeSchema)
  .min(1)
  .max(1000)
  .openapi('CidrCollectionChanges')

const ChangeCidrCollectionRequestSchema = z
  .object({
    CollectionVersion: CollectionVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A sequential counter that Amazon Route 53 sets to 1 when you create a collection and increments it by 1 each time you update the collection.</p> <p>We recommend that you use <code>ListCidrCollection</code> to get the current value of <code>CollectionVersion</code> for the collection that you want to update, and then include that value with the change request. This prevents Route 53 from overwriting an intervening update: </p> <ul> <li> <p>If the value in the request matches the value of <code>CollectionVersion</code> in the collection, Route 53 updates the collection.</p> </li> <li> <p>If the value of <code>CollectionVersion</code> in the collection is greater than the value in the request, the collection was changed after you got the version number. Route 53 does not update the collection, and it returns a <code>CidrCollectionVersionMismatch</code> error. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Changes: CidrCollectionChangesSchema.and(
      z.any().openapi({ description: ' Information about changes to a CIDR collection.' }),
    ),
  })
  .openapi({ required: ['Changes'], title: 'ChangeCidrCollectionRequest' })
  .openapi('ChangeCidrCollectionRequest')

const ChangeResourceRecordSetsRequestSchema = z
  .object({
    ChangeBatch: ChangeBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains an optional comment and the <code>Changes</code> element.',
        }),
    ),
  })
  .openapi({
    required: ['ChangeBatch'],
    title: 'ChangeResourceRecordSetsRequest',
    description: 'A complex type that contains change information for the resource record set.',
  })
  .openapi('ChangeResourceRecordSetsRequest')

const TagKeyListSchema = z
  .array(TagKeySchema.and(z.any().openapi({ xml: { name: 'Key' } })))
  .min(1)
  .max(10)
  .openapi('TagKeyList')

const ChangeTagsForResourceRequestSchema = z
  .object({
    AddTags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit <code>Value</code> for.</p> <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>',
        }),
    ).exactOptional(),
    RemoveTagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ChangeTagsForResourceRequest',
    description:
      'A complex type that contains information about the tags that you want to add, edit, or delete.',
    required: [],
  })
  .openapi('ChangeTagsForResourceRequest')

const CidrNonceSchema = z
  .string()
  .regex(/\p{ASCII}+/u)
  .min(1)
  .max(64)
  .openapi('CidrNonce')

const CreateCidrCollectionRequestSchema = z
  .object({
    Name: CollectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the account that can be used to reference the collection from other API calls.',
        }),
    ),
    CallerReference: CidrNonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A client-specific token that allows requests to be securely retried so that the intended outcome will only occur once, retries receive a similar response, and there are no additional edge cases to handle.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'CallerReference'], title: 'CreateCidrCollectionRequest' })
  .openapi('CreateCidrCollectionRequest')

const ResourceURISchema = z.string().max(1024).openapi('ResourceURI')

const CreateHealthCheckRequestSchema = z
  .object({
    CallerReference: HealthCheckNonceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and that allows you to retry a failed <code>CreateHealthCheck</code> request without the risk of creating two identical health checks:</p> <ul> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Route 53 returns the settings for the existing health check.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as a deleted health check, regardless of the settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as an existing health check but with different settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with a unique <code>CallerReference</code> but settings identical to an existing health check, Route 53 creates the health check.</p> </li> </ul>",
        }),
    ),
    HealthCheckConfig: HealthCheckConfigSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains settings for a new health check.' }),
    ),
  })
  .openapi({
    required: ['CallerReference', 'HealthCheckConfig'],
    title: 'CreateHealthCheckRequest',
    description: 'A complex type that contains the health check request information.',
  })
  .openapi('CreateHealthCheckRequest')

const CreateHostedZoneRequestSchema = z
  .object({
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats <i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</p> <p>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that <code>CreateHostedZone</code> returns in <code>DelegationSet</code>.</p>",
        }),
    ),
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Private hosted zones only) A complex type that contains information about the Amazon VPC that you\'re associating with this hosted zone.</p> <p>You can specify only one Amazon VPC when you create a private hosted zone. If you are associating a VPC with a hosted zone with this request, the paramaters <code>VPCId</code> and <code>VPCRegion</code> are also required.</p> <p>To associate additional Amazon VPCs with the hosted zone, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html">AssociateVPCWithHostedZone</a> after you create a hosted zone.</p>',
        }),
    ).exactOptional(),
    CallerReference: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.',
        }),
    ),
    HostedZoneConfig: HostedZoneConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Optional) A complex type that contains the following optional values:</p> <ul> <li> <p>For public and private hosted zones, an optional comment</p> </li> <li> <p>For private hosted zones, an optional <code>PrivateZone</code> element</p> </li> </ul> <p>If you don't specify a comment or the <code>PrivateZone</code> element, omit <code>HostedZoneConfig</code> and the other elements.</p>",
        }),
    ).exactOptional(),
    DelegationSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p> <p>If you are using a reusable delegation set to create a public hosted zone for a subdomain, make sure that the parent hosted zone doesn\'t use one or more of the same name servers. If you have overlapping nameservers, the operation will cause a <code>ConflictingDomainsExist</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'CallerReference'],
    title: 'CreateHostedZoneRequest',
    description:
      'A complex type that contains information about the request to create a public or private hosted zone.',
  })
  .openapi('CreateHostedZoneRequest')

const CreateKeySigningKeyRequestSchema = z
  .object({
    CallerReference: NonceSchema.and(
      z.any().openapi({ description: 'A unique string that identifies the request.' }),
    ),
    HostedZoneId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique string (ID) used to identify a hosted zone.' }),
    ),
    KeyManagementServiceArn: SigningKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon resource name (ARN) for a customer managed key in Key Management Service (KMS). The <code>KeyManagementServiceArn</code> must be unique for each key-signing key (KSK) in a single hosted zone. To see an example of <code>KeyManagementServiceArn</code> that grants the correct permissions for DNSSEC, scroll down to <b>Example</b>. </p> <p>You must configure the customer managed customer managed key as follows:</p> <dl> <dt>Status</dt> <dd> <p>Enabled</p> </dd> <dt>Key spec</dt> <dd> <p>ECC_NIST_P256</p> </dd> <dt>Key usage</dt> <dd> <p>Sign and verify</p> </dd> <dt>Key policy</dt> <dd> <p>The key policy must give permission for the following actions:</p> <ul> <li> <p>DescribeKey</p> </li> <li> <p>GetPublicKey</p> </li> <li> <p>Sign</p> </li> </ul> <p>The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:</p> <ul> <li> <p> <code>"Service": "dnssec-route53.amazonaws.com"</code> </p> </li> </ul> </dd> </dl> <p>For more information about working with a customer managed key in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>',
        }),
    ),
    Name: SigningKeyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.',
        }),
    ),
    Status: SigningKeyStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string specifying the initial status of the key-signing key (KSK). You can set the value to <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ),
  })
  .openapi({
    required: ['CallerReference', 'HostedZoneId', 'KeyManagementServiceArn', 'Name', 'Status'],
    title: 'CreateKeySigningKeyRequest',
  })
  .openapi('CreateKeySigningKeyRequest')

const CreateQueryLoggingConfigRequestSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.',
        }),
    ),
    CloudWatchLogsLogGroupArn: CloudWatchLogsLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN:</p> <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i> </p> <p>To get the ARN for a log group, you can use the CloudWatch console, the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action, the <a href="https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command, or the applicable command in one of the Amazon Web Services SDKs.</p>',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'CloudWatchLogsLogGroupArn'],
    title: 'CreateQueryLoggingConfigRequest',
  })
  .openapi('CreateQueryLoggingConfigRequest')

const CreateReusableDelegationSetRequestSchema = z
  .object({
    CallerReference: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request, and that allows you to retry failed <code>CreateReusableDelegationSet</code> requests without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateReusableDelegationSet</code> request. <code>CallerReference</code> can be any unique string, for example a date/time stamp.',
        }),
    ),
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CallerReference'], title: 'CreateReusableDelegationSetRequest' })
  .openapi('CreateReusableDelegationSetRequest')

const CreateTrafficPolicyInstanceRequestSchema = z
  .object({
    HostedZoneId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.',
        }),
    ),
    Name: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.',
        }),
    ),
    TTL: TTLSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.',
        }),
    ),
    TrafficPolicyId: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.',
        }),
    ),
    TrafficPolicyVersion: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['HostedZoneId', 'Name', 'TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'],
    title: 'CreateTrafficPolicyInstanceRequest',
    description:
      'A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.',
  })
  .openapi('CreateTrafficPolicyInstanceRequest')

const CreateTrafficPolicyRequestSchema = z
  .object({
    Name: TrafficPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the traffic policy.' }),
    ),
    Document: TrafficPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of this traffic policy in JSON format. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.',
        }),
    ),
    Comment: TrafficPolicyCommentSchema.and(
      z
        .any()
        .openapi({
          description: '(Optional) Any comments that you want to include about the traffic policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Document'],
    title: 'CreateTrafficPolicyRequest',
    description:
      'A complex type that contains information about the traffic policy that you want to create.',
  })
  .openapi('CreateTrafficPolicyRequest')

const CreateTrafficPolicyVersionRequestSchema = z
  .object({
    Document: TrafficPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code> request. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.',
        }),
    ),
    Comment: TrafficPolicyCommentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Document'],
    title: 'CreateTrafficPolicyVersionRequest',
    description:
      'A complex type that contains information about the traffic policy that you want to create a new version for.',
  })
  .openapi('CreateTrafficPolicyVersionRequest')

const CreateVPCAssociationAuthorizationRequestSchema = z
  .object({
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the VPC ID and region for the VPC that you want to authorize associating with your hosted zone.',
        }),
    ),
  })
  .openapi({
    required: ['VPC'],
    title: 'CreateVPCAssociationAuthorizationRequest',
    description:
      'A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts.',
  })
  .openapi('CreateVPCAssociationAuthorizationRequest')

const DeactivateKeySigningKeyRequestSchema = z
  .object({})
  .openapi({ title: 'DeactivateKeySigningKeyRequest' })
  .openapi('DeactivateKeySigningKeyRequest')

const DeleteCidrCollectionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCidrCollectionRequest' })
  .openapi('DeleteCidrCollectionRequest')

const DeleteHealthCheckRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteHealthCheckRequest',
    description: 'This action deletes a health check.',
  })
  .openapi('DeleteHealthCheckRequest')

const DeleteHostedZoneRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteHostedZoneRequest', description: 'A request to delete a hosted zone.' })
  .openapi('DeleteHostedZoneRequest')

const DeleteKeySigningKeyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteKeySigningKeyRequest' })
  .openapi('DeleteKeySigningKeyRequest')

const DeleteQueryLoggingConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteQueryLoggingConfigRequest' })
  .openapi('DeleteQueryLoggingConfigRequest')

const DeleteReusableDelegationSetRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteReusableDelegationSetRequest',
    description: 'A request to delete a reusable delegation set.',
  })
  .openapi('DeleteReusableDelegationSetRequest')

const DeleteTrafficPolicyInstanceRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteTrafficPolicyInstanceRequest',
    description: 'A request to delete a specified traffic policy instance.',
  })
  .openapi('DeleteTrafficPolicyInstanceRequest')

const DeleteTrafficPolicyRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteTrafficPolicyRequest',
    description: 'A request to delete a specified traffic policy version.',
  })
  .openapi('DeleteTrafficPolicyRequest')

const DeleteVPCAssociationAuthorizationRequestSchema = z
  .object({
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            'When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, a complex type that includes the ID and region of the VPC.',
        }),
    ),
  })
  .openapi({
    required: ['VPC'],
    title: 'DeleteVPCAssociationAuthorizationRequest',
    description:
      'A complex type that contains information about the request to remove authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account. ',
  })
  .openapi('DeleteVPCAssociationAuthorizationRequest')

const DisableHostedZoneDNSSECRequestSchema = z
  .object({})
  .openapi({ title: 'DisableHostedZoneDNSSECRequest' })
  .openapi('DisableHostedZoneDNSSECRequest')

const DisassociateVPCCommentSchema = z.string().openapi('DisassociateVPCComment')

const DisassociateVPCFromHostedZoneRequestSchema = z
  .object({
    VPC: VPCSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that contains information about the VPC that you're disassociating from the specified hosted zone.",
        }),
    ),
    Comment: DisassociateVPCCommentSchema.and(
      z
        .any()
        .openapi({ description: ' <i>Optional:</i> A comment about the disassociation request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VPC'],
    title: 'DisassociateVPCFromHostedZoneRequest',
    description:
      'A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone.',
  })
  .openapi('DisassociateVPCFromHostedZoneRequest')

const EnableHostedZoneDNSSECRequestSchema = z
  .object({})
  .openapi({ title: 'EnableHostedZoneDNSSECRequest' })
  .openapi('EnableHostedZoneDNSSECRequest')

const GetAccountLimitRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAccountLimitRequest',
    description:
      'A complex type that contains information about the request to create a hosted zone.',
  })
  .openapi('GetAccountLimitRequest')

const GetChangeRequestSchema = z
  .object({})
  .openapi({ title: 'GetChangeRequest', description: 'The input for a GetChange request.' })
  .openapi('GetChangeRequest')

const GetCheckerIpRangesRequestSchema = z
  .object({})
  .openapi({ title: 'GetCheckerIpRangesRequest', description: 'Empty request.' })
  .openapi('GetCheckerIpRangesRequest')

const GetDNSSECRequestSchema = z
  .object({})
  .openapi({ title: 'GetDNSSECRequest' })
  .openapi('GetDNSSECRequest')

const GetGeoLocationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetGeoLocationRequest',
    description:
      'A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.',
  })
  .openapi('GetGeoLocationRequest')

const GetHealthCheckCountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHealthCheckCountRequest',
    description:
      'A request for the number of health checks that are associated with the current Amazon Web Services account.',
  })
  .openapi('GetHealthCheckCountRequest')

const GetHealthCheckLastFailureReasonRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHealthCheckLastFailureReasonRequest',
    description: 'A request for the reason that a health check failed most recently.',
  })
  .openapi('GetHealthCheckLastFailureReasonRequest')

const GetHealthCheckRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHealthCheckRequest',
    description: 'A request to get information about a specified health check. ',
  })
  .openapi('GetHealthCheckRequest')

const GetHealthCheckStatusRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHealthCheckStatusRequest',
    description: 'A request to get the status for a health check.',
  })
  .openapi('GetHealthCheckStatusRequest')

const GetHostedZoneCountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHostedZoneCountRequest',
    description:
      'A request to retrieve a count of all the hosted zones that are associated with the current Amazon Web Services account.',
  })
  .openapi('GetHostedZoneCountRequest')

const GetHostedZoneLimitRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHostedZoneLimitRequest',
    description:
      'A complex type that contains information about the request to create a hosted zone.',
  })
  .openapi('GetHostedZoneLimitRequest')

const GetHostedZoneRequestSchema = z
  .object({})
  .openapi({
    title: 'GetHostedZoneRequest',
    description: 'A request to get information about a specified hosted zone. ',
  })
  .openapi('GetHostedZoneRequest')

const GetQueryLoggingConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetQueryLoggingConfigRequest' })
  .openapi('GetQueryLoggingConfigRequest')

const GetReusableDelegationSetLimitRequestSchema = z
  .object({})
  .openapi({
    title: 'GetReusableDelegationSetLimitRequest',
    description:
      'A complex type that contains information about the request to create a hosted zone.',
  })
  .openapi('GetReusableDelegationSetLimitRequest')

const GetReusableDelegationSetRequestSchema = z
  .object({})
  .openapi({
    title: 'GetReusableDelegationSetRequest',
    description: 'A request to get information about a specified reusable delegation set.',
  })
  .openapi('GetReusableDelegationSetRequest')

const GetTrafficPolicyInstanceCountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetTrafficPolicyInstanceCountRequest',
    description:
      'Request to get the number of traffic policy instances that are associated with the current Amazon Web Services account.',
  })
  .openapi('GetTrafficPolicyInstanceCountRequest')

const GetTrafficPolicyInstanceRequestSchema = z
  .object({})
  .openapi({
    title: 'GetTrafficPolicyInstanceRequest',
    description: 'Gets information about a specified traffic policy instance.',
  })
  .openapi('GetTrafficPolicyInstanceRequest')

const GetTrafficPolicyRequestSchema = z
  .object({})
  .openapi({
    title: 'GetTrafficPolicyRequest',
    description: 'Gets information about a specific traffic policy version.',
  })
  .openapi('GetTrafficPolicyRequest')

const MaxResultsSchema = z.string().openapi('MaxResults')

const ListCidrBlocksRequestSchema = z
  .object({})
  .openapi({ title: 'ListCidrBlocksRequest' })
  .openapi('ListCidrBlocksRequest')

const ListCidrCollectionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListCidrCollectionsRequest' })
  .openapi('ListCidrCollectionsRequest')

const ListCidrLocationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListCidrLocationsRequest' })
  .openapi('ListCidrLocationsRequest')

const ListGeoLocationsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListGeoLocationsRequest',
    description:
      'A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets. ',
  })
  .openapi('ListGeoLocationsRequest')

const ListHealthChecksRequestSchema = z
  .object({})
  .openapi({
    title: 'ListHealthChecksRequest',
    description:
      'A request to retrieve a list of the health checks that are associated with the current Amazon Web Services account.',
  })
  .openapi('ListHealthChecksRequest')

const ListHostedZonesByNameRequestSchema = z
  .object({})
  .openapi({
    title: 'ListHostedZonesByNameRequest',
    description:
      'Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account in ASCII order by domain name. ',
  })
  .openapi('ListHostedZonesByNameRequest')

const ListHostedZonesByVPCRequestSchema = z
  .object({})
  .openapi({
    title: 'ListHostedZonesByVPCRequest',
    description:
      'Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account created the hosted zones.',
  })
  .openapi('ListHostedZonesByVPCRequest')

const ListHostedZonesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListHostedZonesRequest',
    description:
      'A request to retrieve a list of the public and private hosted zones that are associated with the current Amazon Web Services account.',
  })
  .openapi('ListHostedZonesRequest')

const ListQueryLoggingConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListQueryLoggingConfigsRequest' })
  .openapi('ListQueryLoggingConfigsRequest')

const ListResourceRecordSetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListResourceRecordSetsRequest',
    description:
      'A request for the resource record sets that are associated with a specified hosted zone.',
  })
  .openapi('ListResourceRecordSetsRequest')

const ListReusableDelegationSetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListReusableDelegationSetsRequest',
    description:
      'A request to get a list of the reusable delegation sets that are associated with the current Amazon Web Services account.',
  })
  .openapi('ListReusableDelegationSetsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description:
      'A complex type containing information about a request for a list of the tags that are associated with an individual resource.',
  })
  .openapi('ListTagsForResourceRequest')

const TagResourceIdListSchema = z
  .array(TagResourceIdSchema.and(z.any().openapi({ xml: { name: 'ResourceId' } })))
  .min(1)
  .max(10)
  .openapi('TagResourceIdList')

const ListTagsForResourcesRequestSchema = z
  .object({
    ResourceIds: TagResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceIds'],
    title: 'ListTagsForResourcesRequest',
    description:
      'A complex type that contains information about the health checks or hosted zones for which you want to list tags.',
  })
  .openapi('ListTagsForResourcesRequest')

const ListTrafficPoliciesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTrafficPoliciesRequest',
    description:
      'A complex type that contains the information about the request to list the traffic policies that are associated with the current Amazon Web Services account.',
  })
  .openapi('ListTrafficPoliciesRequest')

const ListTrafficPolicyInstancesByHostedZoneRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTrafficPolicyInstancesByHostedZoneRequest',
    description:
      'A request for the traffic policy instances that you created in a specified hosted zone.',
  })
  .openapi('ListTrafficPolicyInstancesByHostedZoneRequest')

const ListTrafficPolicyInstancesByPolicyRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTrafficPolicyInstancesByPolicyRequest',
    description:
      'A complex type that contains the information about the request to list your traffic policy instances.',
  })
  .openapi('ListTrafficPolicyInstancesByPolicyRequest')

const ListTrafficPolicyInstancesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTrafficPolicyInstancesRequest',
    description:
      'A request to get information about the traffic policy instances that you created by using the current Amazon Web Services account.',
  })
  .openapi('ListTrafficPolicyInstancesRequest')

const ListTrafficPolicyVersionsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTrafficPolicyVersionsRequest',
    description:
      'A complex type that contains the information about the request to list your traffic policies.',
  })
  .openapi('ListTrafficPolicyVersionsRequest')

const ListVPCAssociationAuthorizationsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListVPCAssociationAuthorizationsRequest',
    description:
      'A complex type that contains information about that can be associated with your hosted zone.',
  })
  .openapi('ListVPCAssociationAuthorizationsRequest')

const ResettableElementNameListSchema = z
  .array(
    ResettableElementNameSchema.and(z.any().openapi({ xml: { name: 'ResettableElementName' } })),
  )
  .max(64)
  .openapi('ResettableElementNameList')

const SubnetMaskSchema = z.string().min(0).max(3).openapi('SubnetMask')

const TestDNSAnswerRequestSchema = z
  .object({})
  .openapi({
    title: 'TestDNSAnswerRequest',
    description:
      'Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. ',
  })
  .openapi('TestDNSAnswerRequest')

const UpdateHealthCheckRequestSchema = z
  .object({
    HealthCheckVersion: HealthCheckVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A sequential counter that Amazon Route 53 sets to <code>1</code> when you create a health check and increments by 1 each time you update settings for the health check.</p> <p>We recommend that you use <code>GetHealthCheck</code> or <code>ListHealthChecks</code> to get the current value of <code>HealthCheckVersion</code> for the health check that you want to update, and that you include that value in your <code>UpdateHealthCheck</code> request. This prevents Route 53 from overwriting an intervening update:</p> <ul> <li> <p>If the value in the <code>UpdateHealthCheck</code> request matches the value of <code>HealthCheckVersion</code> in the health check, Route 53 updates the health check with the new settings.</p> </li> <li> <p>If the value of <code>HealthCheckVersion</code> in the health check is greater, the health check was changed after you got the version number. Route 53 does not update the health check, and it returns a <code>HealthCheckVersionMismatch</code> error.</p> </li> </ul>',
        }),
    ).exactOptional(),
    IPAddress: IPAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don\'t specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:</p> <ul> <li> <p>Linux: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> </p> </li> <li> <p>Windows: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Windows Instances</i> </p> </li> </ul> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can\'t update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can\'t check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can\'t create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>",
        }),
    ).exactOptional(),
    ResourcePath: ResourcePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. </p> <p>Specify this value only if you want to change it.</p>',
        }),
    ).exactOptional(),
    FullyQualifiedDomainName: FullyQualifiedDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <i> <code>FullyQualifiedDomainName</code>:<code>Port</code> </i> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the above cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to the domain that you specify in <code>FullyQualifiedDomainName</code> at the interval you specify in <code>RequestInterval</code>. Using an IPv4 address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a \"DNS resolution failed\" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value of <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>",
        }),
    ).exactOptional(),
    SearchString: SearchStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)",
        }),
    ).exactOptional(),
    FailureThreshold: FailureThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don\'t specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>',
        }),
    ).exactOptional(),
    Inverted: InvertedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.',
        }),
    ).exactOptional(),
    Disabled: DisabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Stops Route 53 from performing health checks. When you disable a health check, here\'s what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>',
        }),
    ).exactOptional(),
    HealthThreshold: HealthThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of child health checks that are associated with a <code>CALCULATED</code> health that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <code>ChildHealthChecks</code> and <code>ChildHealthCheck</code> elements.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ChildHealthChecks: ChildHealthCheckListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.',
        }),
    ).exactOptional(),
    EnableSNI: EnableSNISchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during <code>TLS</code> negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that HTTPS requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be SSL alert <code>handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>",
        }),
    ).exactOptional(),
    Regions: HealthCheckRegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from.',
        }),
    ).exactOptional(),
    AlarmIdentifier: AlarmIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.',
        }),
    ).exactOptional(),
    InsufficientDataHealthStatus: InsufficientDataHealthStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: By default, Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the status for the health check is healthy.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResetElements: ResettableElementNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains one <code>ResettableElementName</code> element for each element that you want to reset to the default value. Valid values for <code>ResettableElementName</code> include the following:</p> <ul> <li> <p> <code>ChildHealthChecks</code>: Amazon Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ChildHealthChecks">ChildHealthChecks</a> to null.</p> </li> <li> <p> <code>FullyQualifiedDomainName</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. to null.</p> </li> <li> <p> <code>Regions</code>: Route 53 resets the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a> list to the default set of regions. </p> </li> <li> <p> <code>ResourcePath</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ResourcePath">ResourcePath</a> to null.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateHealthCheckRequest',
    description:
      'A complex type that contains information about a request to update a health check.',
    required: [],
  })
  .openapi('UpdateHealthCheckRequest')

const UpdateHostedZoneCommentRequestSchema = z
  .object({
    Comment: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the <code>Comment</code> element, if any.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateHostedZoneCommentRequest',
    description: 'A request to update the comment for a hosted zone.',
    required: [],
  })
  .openapi('UpdateHostedZoneCommentRequest')

const UpdateTrafficPolicyCommentRequestSchema = z
  .object({
    Comment: TrafficPolicyCommentSchema.and(
      z
        .any()
        .openapi({ description: 'The new comment for the specified traffic policy and version.' }),
    ),
  })
  .openapi({
    required: ['Comment'],
    title: 'UpdateTrafficPolicyCommentRequest',
    description:
      'A complex type that contains information about the traffic policy that you want to update the comment for.',
  })
  .openapi('UpdateTrafficPolicyCommentRequest')

const UpdateTrafficPolicyInstanceRequestSchema = z
  .object({
    TTL: TTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.',
        }),
    ),
    TrafficPolicyId: TrafficPolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.',
        }),
    ),
    TrafficPolicyVersion: TrafficPolicyVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.',
        }),
    ),
  })
  .openapi({
    required: ['TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'],
    title: 'UpdateTrafficPolicyInstanceRequest',
    description:
      'A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.',
  })
  .openapi('UpdateTrafficPolicyInstanceRequest')

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

export const post20130401KeysigningkeyHostedZoneIdNameActivateRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate',
  description:
    'Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to <code>ACTIVE</code>.',
  operationId: 'ActivateKeySigningKey',
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
      HostedZoneId: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'HostedZoneId',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      Name: z
        .string()
        .min(3)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.',
            schema: { type: 'string', minLength: 3, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ActivateKeySigningKeyResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'NoSuchKeySigningKey',
      content: { 'text/xml': { schema: NoSuchKeySigningKeySchema } },
    },
    482: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    483: {
      description: 'InvalidSigningStatus',
      content: { 'text/xml': { schema: InvalidSigningStatusSchema } },
    },
    484: { description: 'InvalidKMSArn', content: { 'text/xml': { schema: InvalidKMSArnSchema } } },
    485: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401HostedzoneIdAssociatevpcRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/associatevpc',
  description:
    '<p>Associates an Amazon VPC with a private hosted zone. </p> <important> <p>To perform the association, the VPC and the private hosted zone must already exist. You can\'t convert a public hosted zone into a private hosted zone.</p> </important> <note> <p>If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a <code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an <code>AssociateVPCWithHostedZone</code> request.</p> </note> <note> <p>When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'AssociateVPCWithHostedZone',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "<p>The ID of the private hosted zone that you want to associate an Amazon VPC with.</p> <p>Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.</p>",
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              VPC: z
                .object({
                  VPCRegion: VPCRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Private hosted zones only) The region that an Amazon VPC was created in.',
                      }),
                  ).exactOptional(),
                  VPCId: VPCIdSchema.exactOptional(),
                })
                .openapi({
                  description:
                    '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
                  required: [],
                }),
              Comment: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' <i>Optional:</i> A comment about the association request.',
                }),
            })
            .openapi({ required: ['VPC'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AssociateVPCWithHostedZoneResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'text/xml': { schema: NotAuthorizedExceptionSchema } },
    },
    482: { description: 'InvalidVPCId', content: { 'text/xml': { schema: InvalidVPCIdSchema } } },
    483: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    484: {
      description: 'PublicZoneVPCAssociation',
      content: { 'text/xml': { schema: PublicZoneVPCAssociationSchema } },
    },
    485: {
      description: 'ConflictingDomainExists',
      content: { 'text/xml': { schema: ConflictingDomainExistsSchema } },
    },
    486: {
      description: 'LimitsExceeded',
      content: { 'text/xml': { schema: LimitsExceededSchema } },
    },
    487: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
  },
})

export const get20130401CidrcollectionCidrCollectionIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/cidrcollection/{CidrCollectionId}',
  description:
    'Returns a paginated list of CIDR locations for the given collection (metadata only, does not include CIDR blocks).',
  operationId: 'ListCidrLocations',
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
      CidrCollectionId: z
        .string()
        .regex(/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/)
        .openapi({
          param: {
            name: 'CidrCollectionId',
            in: 'path',
            required: true,
            description: 'The CIDR collection ID.',
            schema: { type: 'string', pattern: '[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}' },
          },
        }),
    }),
    query: z.object({
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              '<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      maxresults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxresults',
            in: 'query',
            required: false,
            description:
              'The maximum number of CIDR collection locations to return in the response.',
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
      content: { 'text/xml': { schema: ListCidrLocationsResponseSchema } },
    },
    480: {
      description: 'NoSuchCidrCollectionException',
      content: { 'text/xml': { schema: NoSuchCidrCollectionExceptionSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401CidrcollectionCidrCollectionIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/cidrcollection/{CidrCollectionId}',
  description:
    '<p>Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations.</p> <p>A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime. </p> <p> <b>Limits</b> </p> <p>The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls.</p> <p> <b> PUT and DELETE_IF_EXISTS</b> </p> <p>Use <code>ChangeCidrCollection</code> to perform the following actions:</p> <ul> <li> <p> <code>PUT</code>: Create a CIDR block within the specified collection.</p> </li> <li> <p> <code> DELETE_IF_EXISTS</code>: Delete an existing CIDR block from the collection.</p> </li> </ul>',
  operationId: 'ChangeCidrCollection',
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
      CidrCollectionId: z
        .string()
        .regex(/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/)
        .openapi({
          param: {
            name: 'CidrCollectionId',
            in: 'path',
            required: true,
            description: 'The UUID of the CIDR collection to update.',
            schema: { type: 'string', pattern: '[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              CollectionVersion: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A sequential counter that Amazon Route 53 sets to 1 when you create a collection and increments it by 1 each time you update the collection.</p> <p>We recommend that you use <code>ListCidrCollection</code> to get the current value of <code>CollectionVersion</code> for the collection that you want to update, and then include that value with the change request. This prevents Route 53 from overwriting an intervening update: </p> <ul> <li> <p>If the value in the request matches the value of <code>CollectionVersion</code> in the collection, Route 53 updates the collection.</p> </li> <li> <p>If the value of <code>CollectionVersion</code> in the collection is greater than the value in the request, the collection was changed after you got the version number. Route 53 does not update the collection, and it returns a <code>CidrCollectionVersionMismatch</code> error. </p> </li> </ul>',
                }),
              Changes: z
                .array(CidrCollectionChangeSchema)
                .min(1)
                .max(1000)
                .openapi({ description: ' Information about changes to a CIDR collection.' }),
            })
            .openapi({ required: ['Changes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ChangeCidrCollectionResponseSchema } },
    },
    480: {
      description: 'NoSuchCidrCollectionException',
      content: { 'text/xml': { schema: NoSuchCidrCollectionExceptionSchema } },
    },
    481: {
      description: 'CidrCollectionVersionMismatchException',
      content: { 'text/xml': { schema: CidrCollectionVersionMismatchExceptionSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    483: {
      description: 'CidrBlockInUseException',
      content: { 'text/xml': { schema: CidrBlockInUseExceptionSchema } },
    },
    484: {
      description: 'LimitsExceeded',
      content: { 'text/xml': { schema: LimitsExceededSchema } },
    },
    485: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const delete20130401CidrcollectionCidrCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/cidrcollection/{CidrCollectionId}',
  description:
    'Deletes a CIDR collection in the current Amazon Web Services account. The collection must be empty before it can be deleted.',
  operationId: 'DeleteCidrCollection',
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
      CidrCollectionId: z
        .string()
        .regex(/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/)
        .openapi({
          param: {
            name: 'CidrCollectionId',
            in: 'path',
            required: true,
            description: 'The UUID of the collection to delete.',
            schema: { type: 'string', pattern: '[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteCidrCollectionResponseSchema } },
    },
    480: {
      description: 'NoSuchCidrCollectionException',
      content: { 'text/xml': { schema: NoSuchCidrCollectionExceptionSchema } },
    },
    481: {
      description: 'CidrCollectionInUseException',
      content: { 'text/xml': { schema: CidrCollectionInUseExceptionSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    483: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const post20130401HostedzoneIdRrsetIndexRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/rrset/',
  description:
    '<p>Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use <code>ChangeResourceRecordSets</code> to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.</p> <p> <b>Deleting Resource Record Sets</b> </p> <p>To delete a resource record set, you must specify all the same values that you specified when you created it.</p> <p> <b>Change Batches and Transactional Changes</b> </p> <p>The request body must include a document with a <code>ChangeResourceRecordSetsRequest</code> element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request. This ensures that DNS routing isn\'t adversely affected by partial changes to the resource record sets in a hosted zone. </p> <p>For example, suppose a change batch request contains two changes: it deletes the <code>CNAME</code> resource record set for www.example.com and creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If validation for either the <code>DELETE</code> or the <code>CREATE</code> action fails, then the request is canceled, and the original <code>CNAME</code> record continues to exist.</p> <note> <p>If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an <code>InvalidChangeBatch</code> error.</p> </note> <p> <b>Traffic Flow</b> </p> <p>To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn\'t performing as expected. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route DNS Traffic</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Create, Delete, and Upsert</b> </p> <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following actions:</p> <ul> <li> <p> <code>CREATE</code>: Creates a resource record set that has the specified values.</p> </li> <li> <p> <code>DELETE</code>: Deletes an existing resource record set that has the specified values.</p> </li> <li> <p> <code>UPSERT</code>: If a resource set exists Route 53 updates it with the values in the request. </p> </li> </ul> <p> <b>Syntaxes for Creating, Updating, and Deleting Resource Record Sets</b> </p> <p>The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. </p> <p>For an example for each type of resource record set, see "Examples."</p> <p>Don\'t refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using <code>ChangeResourceRecordSets</code>. </p> <p> <b>Change Propagation to Route 53 DNS Servers</b> </p> <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While your changes are propagating, <code>GetChange</code> returns a status of <code>PENDING</code>. When propagation is complete, <code>GetChange</code> returns a status of <code>INSYNC</code>. Changes generally propagate to all Route 53 name servers managing the hosted zone within 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p> <p> <b>Limits on ChangeResourceRecordSets Requests</b> </p> <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
  operationId: 'ChangeResourceRecordSets',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the hosted zone that contains the resource record sets that you want to change.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ChangeBatch: z
                .object({
                  Comment: ResourceDescriptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <i>Optional:</i> Any comments you want to include about a change batch request.',
                      }),
                  ).exactOptional(),
                  Changes: ChangesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about the changes to make to the record sets.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The information for a change request.', required: [] }),
            })
            .openapi({ required: ['ChangeBatch'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ChangeResourceRecordSetsResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    482: {
      description: 'InvalidChangeBatch',
      content: { 'text/xml': { schema: InvalidChangeBatchSchema } },
    },
    483: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    484: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
  },
})

export const get20130401TagsResourceTypeResourceIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/tags/{ResourceType}/{ResourceId}',
  description:
    '<p>Lists tags for one health check or hosted zone. </p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
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
      ResourceType: z
        .enum(['healthcheck', 'hostedzone'])
        .openapi({
          param: {
            name: 'ResourceType',
            in: 'path',
            required: true,
            description:
              '<p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>',
            schema: { type: 'string', enum: ['healthcheck', 'hostedzone'] },
          },
        }),
      ResourceId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource for which you want to retrieve tags.',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    483: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'text/xml': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20130401TagsResourceTypeResourceIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/tags/{ResourceType}/{ResourceId}',
  description:
    '<p>Adds, edits, or deletes tags for a health check or a hosted zone.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
  operationId: 'ChangeTagsForResource',
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
      ResourceType: z
        .enum(['healthcheck', 'hostedzone'])
        .openapi({
          param: {
            name: 'ResourceType',
            in: 'path',
            required: true,
            description:
              '<p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>',
            schema: { type: 'string', enum: ['healthcheck', 'hostedzone'] },
          },
        }),
      ResourceId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description:
              'The ID of the resource for which you want to add, change, or delete tags.',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              AddTags: z
                .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit <code>Value</code> for.</p> <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>',
                }),
              RemoveTagKeys: z
                .array(TagKeySchema.and(z.any().openapi({ xml: { name: 'Key' } })))
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.',
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
      content: { 'text/xml': { schema: ChangeTagsForResourceResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    483: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'text/xml': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20130401CidrcollectionRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/cidrcollection',
  description:
    'Returns a paginated list of CIDR collections in the Amazon Web Services account (metadata only).',
  operationId: 'ListCidrCollections',
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
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              '<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      maxresults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxresults',
            in: 'query',
            required: false,
            description: 'The maximum number of CIDR collections to return in the response.',
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
      content: { 'text/xml': { schema: ListCidrCollectionsResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401CidrcollectionRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/cidrcollection',
  description: 'Creates a CIDR collection in the current Amazon Web Services account.',
  operationId: 'CreateCidrCollection',
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
        'text/xml': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[0-9A-Za-z_\-]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A unique identifier for the account that can be used to reference the collection from other API calls.',
                }),
              CallerReference: z
                .string()
                .regex(/\p{ASCII}+/u)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A client-specific token that allows requests to be securely retried so that the intended outcome will only occur once, retries receive a similar response, and there are no additional edge cases to handle.',
                }),
            })
            .openapi({ required: ['Name', 'CallerReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCidrCollectionResponseSchema } },
    },
    480: {
      description: 'LimitsExceeded',
      content: { 'text/xml': { schema: LimitsExceededSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'CidrCollectionAlreadyExistsException',
      content: { 'text/xml': { schema: CidrCollectionAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const get20130401HealthcheckRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/healthcheck',
  description:
    'Retrieve a list of the health checks that are associated with the current Amazon Web Services account. ',
  operationId: 'ListHealthChecks',
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
      marker: z
        .string()
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more health checks. To get another group, submit another <code>ListHealthChecks</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more health checks to get.</p>',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of health checks that you want <code>ListHealthChecks</code> to return in response to the current request. Amazon Route 53 returns a maximum of 100 items. If you set <code>MaxItems</code> to a value greater than 100, Route 53 returns only the first 100 health checks. ',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
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
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListHealthChecksResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'IncompatibleVersion',
      content: { 'text/xml': { schema: IncompatibleVersionSchema } },
    },
  },
})

export const post20130401HealthcheckRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/healthcheck',
  description:
    '<p>Creates a new health check.</p> <p>For information about adding health checks to resource record sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a> in <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p> <p> <b>ELB Load Balancers</b> </p> <p>If you\'re registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.</p> <p> <b>Private Hosted Zones</b> </p> <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p> <ul> <li> <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.</p> </li> <li> <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.</p> </li> <li> <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p> </li> </ul>',
  operationId: 'CreateHealthCheck',
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
        'text/xml': {
          schema: z
            .object({
              CallerReference: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    "<p>A unique string that identifies the request and that allows you to retry a failed <code>CreateHealthCheck</code> request without the risk of creating two identical health checks:</p> <ul> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Route 53 returns the settings for the existing health check.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as a deleted health check, regardless of the settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as an existing health check but with different settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with a unique <code>CallerReference</code> but settings identical to an existing health check, Route 53 creates the health check.</p> </li> </ul>",
                }),
              HealthCheckConfig: z
                .object({
                  IPAddress: IPAddressSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on. If you don\'t specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance will never change.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can\'t check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can\'t create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul> <p>When the value of <code>Type</code> is <code>CALCULATED</code> or <code>CLOUDWATCH_METRIC</code>, omit <code>IPAddress</code>.</p>',
                      }),
                  ).exactOptional(),
                  Port: PortSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>",
                      }),
                  ).exactOptional(),
                  Type: HealthCheckTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.</p> <important> <p>You can\'t change the value of <code>Type</code> after you create a health check.</p> </important> <p>You can create the following types of health checks:</p> <ul> <li> <p> <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.</p> </li> <li> <p> <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.</p> <important> <p>If you specify <code>HTTPS</code> for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p> </important> </li> <li> <p> <b>HTTP_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p> </li> <li> <p> <b>HTTPS_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an <code>HTTPS</code> request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p> </li> <li> <p> <b>TCP</b>: Route 53 tries to establish a TCP connection.</p> </li> <li> <p> <b>CLOUDWATCH_METRIC</b>: The health check is associated with a CloudWatch alarm. If the state of the alarm is <code>OK</code>, the health check is considered healthy. If the state is <code>ALARM</code>, the health check is considered unhealthy. If CloudWatch doesn\'t have sufficient data to determine whether the state is <code>OK</code> or <code>ALARM</code>, the health check status depends on the setting for <code>InsufficientDataHealthStatus</code>: <code>Healthy</code>, <code>Unhealthy</code>, or <code>LastKnownStatus</code>. </p> </li> <li> <p> <b>CALCULATED</b>: For health checks that monitor the status of other health checks, Route 53 adds up the number of health checks that Route 53 health checkers consider to be healthy and compares that number with the value of <code>HealthThreshold</code>. </p> </li> <li> <p> <b>RECOVERY_CONTROL</b>: The health check is assocated with a Route53 Application Recovery Controller routing control. If the routing control state is <code>ON</code>, the health check is considered healthy. If the state is <code>OFF</code>, the health check is considered unhealthy. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  ResourcePath: ResourcePathSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. ',
                      }),
                  ).exactOptional(),
                  FullyQualifiedDomainName: FullyQualifiedDomainNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the Host header. </p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <code>FullyQualifiedDomainName:Port</code> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the preceding cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends a DNS request to the domain that you specify for <code>FullyQualifiedDomainName</code> at the interval that you specify for <code>RequestInterval</code>. Using an IPv4 address that DNS returns, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a \"DNS resolution failed\" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if you create a health check for which the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value that you specify for <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>",
                      }),
                  ).exactOptional(),
                  SearchString: SearchStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>If the value of Type is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.</p> <p>Route 53 considers case when searching for <code>SearchString</code> in the response body. </p>',
                      }),
                  ).exactOptional(),
                  RequestInterval: RequestIntervalSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health check request. Each Route 53 health checker makes requests at this interval.</p> <important> <p>You can't change the value of <code>RequestInterval</code> after you create a health check.</p> </important> <p>If you don't specify a value for <code>RequestInterval</code>, the default value is <code>30</code> seconds.</p>",
                      }),
                  ).exactOptional(),
                  FailureThreshold: FailureThresholdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don\'t specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>',
                      }),
                  ).exactOptional(),
                  MeasureLatency: MeasureLatencySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple Amazon Web Services regions and your endpoint, and to display CloudWatch latency graphs on the <b>Health Checks</b> page in the Route 53 console.</p> <important> <p>You can't change the value of <code>MeasureLatency</code> after you create a health check.</p> </important>",
                      }),
                  ).exactOptional(),
                  Inverted: InvertedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.',
                      }),
                  ).exactOptional(),
                  Disabled: DisabledSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Stops Route 53 from performing health checks. When you disable a health check, here\'s what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>',
                      }),
                  ).exactOptional(),
                  HealthThreshold: HealthThresholdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of child health checks that are associated with a <code>CALCULATED</code> health check that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-ChildHealthChecks">ChildHealthChecks</a> element.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  ChildHealthChecks: ChildHealthCheckListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(CALCULATED Health Checks Only) A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.',
                      }),
                  ).exactOptional(),
                  EnableSNI: EnableSNISchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during TLS negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that <code>HTTPS</code> requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be <code>SSL alert handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>",
                      }),
                  ).exactOptional(),
                  Regions: HealthCheckRegionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A complex type that contains one <code>Region</code> element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.</p> <p>If you don't specify any regions, Route 53 health checkers automatically performs checks from all of the regions that are listed under <b>Valid Values</b>.</p> <p>If you update a health check to remove a region that has been performing health checks, Route 53 will briefly continue to perform checks from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with four different regions). </p>",
                      }),
                  ).exactOptional(),
                  AlarmIdentifier: AlarmIdentifierSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.',
                      }),
                  ).exactOptional(),
                  InsufficientDataHealthStatus: InsufficientDataHealthStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: Route 53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  RoutingControlArn: RoutingControlArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control.</p> <p>For more information about Route 53 Application Recovery Controller, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery.html">Route 53 Application Recovery Controller Developer Guide.</a>.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A complex type that contains information about the health check.',
                  required: [],
                }),
            })
            .openapi({ required: ['CallerReference', 'HealthCheckConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateHealthCheckResponseSchema } },
    },
    480: {
      description: 'TooManyHealthChecks',
      content: { 'text/xml': { schema: TooManyHealthChecksSchema } },
    },
    481: {
      description: 'HealthCheckAlreadyExists',
      content: { 'text/xml': { schema: HealthCheckAlreadyExistsSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HostedzoneRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzone',
  description:
    '<p>Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response includes a <code>HostedZones</code> child element for each hosted zone.</p> <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of up to 100.</p>',
  operationId: 'ListHostedZones',
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
      marker: z
        .string()
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more hosted zones. To get more hosted zones, submit another <code>ListHostedZones</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more hosted zones to get.</p>',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than <code>maxitems</code> hosted zones, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>NextMarker</code> is the hosted zone ID of the first hosted zone that Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
      delegationsetid: z
        .string()
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'delegationsetid',
            in: 'query',
            required: false,
            description:
              "If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set. ",
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
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
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListHostedZonesResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchDelegationSet',
      content: { 'text/xml': { schema: NoSuchDelegationSetSchema } },
    },
    482: {
      description: 'DelegationSetNotReusable',
      content: { 'text/xml': { schema: DelegationSetNotReusableSchema } },
    },
  },
})

export const post20130401HostedzoneRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone',
  description:
    '<p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). </p> <important> <p>You can\'t convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.</p> </important> <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following:</p> <ul> <li> <p>You can\'t create a hosted zone for a top-level domain (TLD) such as .com.</p> </li> <li> <p>For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the <code>DelegationSetId</code> element.</p> </li> <li> <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. </p> </li> </ul> <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p> <p>The <code>CreateHostedZone</code> request requires the caller to have an <code>ec2:DescribeVpcs</code> permission.</p> <note> <p>When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'CreateHostedZone',
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
        'text/xml': {
          schema: z
            .object({
              Name: z
                .string()
                .max(1024)
                .openapi({
                  description:
                    "<p>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats <i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</p> <p>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that <code>CreateHostedZone</code> returns in <code>DelegationSet</code>.</p>",
                }),
              VPC: z
                .object({
                  VPCRegion: VPCRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Private hosted zones only) The region that an Amazon VPC was created in.',
                      }),
                  ).exactOptional(),
                  VPCId: VPCIdSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
                  required: [],
                }),
              CallerReference: z
                .string()
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.',
                }),
              HostedZoneConfig: z
                .object({
                  Comment: ResourceDescriptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Any comments that you want to include about the hosted zone.',
                      }),
                  ).exactOptional(),
                  PrivateZone: IsPrivateZoneSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A value that indicates whether this is a private hosted zone.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.",
                  required: [],
                }),
              DelegationSetId: z
                .string()
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    '<p>If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p> <p>If you are using a reusable delegation set to create a public hosted zone for a subdomain, make sure that the parent hosted zone doesn\'t use one or more of the same name servers. If you have overlapping nameservers, the operation will cause a <code>ConflictingDomainsExist</code> error.</p>',
                }),
            })
            .openapi({ required: ['Name', 'CallerReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateHostedZoneResponseSchema } },
    },
    480: {
      description: 'InvalidDomainName',
      content: { 'text/xml': { schema: InvalidDomainNameSchema } },
    },
    481: {
      description: 'HostedZoneAlreadyExists',
      content: { 'text/xml': { schema: HostedZoneAlreadyExistsSchema } },
    },
    482: {
      description: 'TooManyHostedZones',
      content: { 'text/xml': { schema: TooManyHostedZonesSchema } },
    },
    483: { description: 'InvalidVPCId', content: { 'text/xml': { schema: InvalidVPCIdSchema } } },
    484: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    485: {
      description: 'DelegationSetNotAvailable',
      content: { 'text/xml': { schema: DelegationSetNotAvailableSchema } },
    },
    486: {
      description: 'ConflictingDomainExists',
      content: { 'text/xml': { schema: ConflictingDomainExistsSchema } },
    },
    487: {
      description: 'NoSuchDelegationSet',
      content: { 'text/xml': { schema: NoSuchDelegationSetSchema } },
    },
    488: {
      description: 'DelegationSetNotReusable',
      content: { 'text/xml': { schema: DelegationSetNotReusableSchema } },
    },
  },
})

export const post20130401KeysigningkeyRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/keysigningkey',
  description:
    'Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.',
  operationId: 'CreateKeySigningKey',
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
        'text/xml': {
          schema: z
            .object({
              CallerReference: z
                .string()
                .min(1)
                .max(128)
                .openapi({ description: 'A unique string that identifies the request.' }),
              HostedZoneId: z
                .string()
                .max(32)
                .openapi({ description: 'The unique string (ID) used to identify a hosted zone.' }),
              KeyManagementServiceArn: z
                .string()
                .openapi({
                  description:
                    '<p>The Amazon resource name (ARN) for a customer managed key in Key Management Service (KMS). The <code>KeyManagementServiceArn</code> must be unique for each key-signing key (KSK) in a single hosted zone. To see an example of <code>KeyManagementServiceArn</code> that grants the correct permissions for DNSSEC, scroll down to <b>Example</b>. </p> <p>You must configure the customer managed customer managed key as follows:</p> <dl> <dt>Status</dt> <dd> <p>Enabled</p> </dd> <dt>Key spec</dt> <dd> <p>ECC_NIST_P256</p> </dd> <dt>Key usage</dt> <dd> <p>Sign and verify</p> </dd> <dt>Key policy</dt> <dd> <p>The key policy must give permission for the following actions:</p> <ul> <li> <p>DescribeKey</p> </li> <li> <p>GetPublicKey</p> </li> <li> <p>Sign</p> </li> </ul> <p>The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:</p> <ul> <li> <p> <code>"Service": "dnssec-route53.amazonaws.com"</code> </p> </li> </ul> </dd> </dl> <p>For more information about working with a customer managed key in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>',
                }),
              Name: z
                .string()
                .min(3)
                .max(128)
                .openapi({
                  description:
                    'A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.',
                }),
              Status: z
                .string()
                .min(5)
                .max(150)
                .openapi({
                  description:
                    'A string specifying the initial status of the key-signing key (KSK). You can set the value to <code>ACTIVE</code> or <code>INACTIVE</code>.',
                }),
            })
            .openapi({
              required: [
                'CallerReference',
                'HostedZoneId',
                'KeyManagementServiceArn',
                'Name',
                'Status',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateKeySigningKeyResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    483: { description: 'InvalidKMSArn', content: { 'text/xml': { schema: InvalidKMSArnSchema } } },
    484: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    485: {
      description: 'InvalidSigningStatus',
      content: { 'text/xml': { schema: InvalidSigningStatusSchema } },
    },
    486: {
      description: 'InvalidKeySigningKeyName',
      content: { 'text/xml': { schema: InvalidKeySigningKeyNameSchema } },
    },
    487: {
      description: 'KeySigningKeyAlreadyExists',
      content: { 'text/xml': { schema: KeySigningKeyAlreadyExistsSchema } },
    },
    488: {
      description: 'TooManyKeySigningKeys',
      content: { 'text/xml': { schema: TooManyKeySigningKeysSchema } },
    },
    489: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const get20130401QueryloggingconfigRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/queryloggingconfig',
  description:
    '<p>Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration that is associated with a specified hosted zone.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>. Additional information, including the format of DNS query logs, appears in <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
  operationId: 'ListQueryLoggingConfigs',
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
      hostedzoneid: z
        .string()
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'hostedzoneid',
            in: 'query',
            required: false,
            description:
              "<p>(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in <code>HostedZoneId</code>. </p> <p>If you don't specify a hosted zone ID, <code>ListQueryLoggingConfigs</code> returns all of the configurations that are associated with the current Amazon Web Services account.</p>",
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              '<p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> query logging configurations, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>ListQueryLoggingConfigs</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      maxresults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxresults',
            in: 'query',
            required: false,
            description:
              '<p>(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request. If the current Amazon Web Services account has more than <code>MaxResults</code> configurations, use the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html#API_ListQueryLoggingConfigs_RequestSyntax">NextToken</a> in the response to get the next page of results.</p> <p>If you don\'t specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configurations.</p>',
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
      content: { 'text/xml': { schema: ListQueryLoggingConfigsResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'InvalidPaginationToken',
      content: { 'text/xml': { schema: InvalidPaginationTokenSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
  },
})

export const post20130401QueryloggingconfigRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/queryloggingconfig',
  description:
    '<p>Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.</p> <p>DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:</p> <ul> <li> <p>Route 53 edge location that responded to the DNS query</p> </li> <li> <p>Domain or subdomain that was requested</p> </li> <li> <p>DNS record type, such as A or AAAA</p> </li> <li> <p>DNS response code, such as <code>NoError</code> or <code>ServFail</code> </p> </li> </ul> <dl> <dt>Log Group and Resource Policy</dt> <dd> <p>Before you create a query logging configuration, perform the following operations.</p> <note> <p>If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.</p> </note> <ol> <li> <p>Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:</p> <ul> <li> <p>You must create the log group in the us-east-1 region.</p> </li> <li> <p>You must use the same Amazon Web Services account to create the log group and the hosted zone that you want to configure query logging for.</p> </li> <li> <p>When you create log groups for query logging, we recommend that you use a consistent prefix, for example:</p> <p> <code>/aws/route53/<i>hosted zone name</i> </code> </p> <p>In the next step, you\'ll create a resource policy, which controls access to one or more log groups and the associated Amazon Web Services resources, such as Route 53 hosted zones. There\'s a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.</p> </li> </ul> </li> <li> <p>Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. For the value of <code>Resource</code>, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with <code>*</code>, for example:</p> <p> <code>arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*</code> </p> <p>To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values:</p> <ul> <li> <p>For <code>aws:SourceArn</code>, supply the hosted zone ARN used in creating the query logging configuration. For example, <code>aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID</code>.</p> </li> <li> <p>For <code>aws:SourceAccount</code>, supply the account ID for the account that creates the query logging configuration. For example, <code>aws:SourceAccount:111111111111</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html">The confused deputy problem</a> in the <i>Amazon Web Services IAM User Guide</i>.</p> <note> <p>You can\'t use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the Amazon Web Services SDKs, or the CLI.</p> </note> </li> </ol> </dd> <dt>Log Streams and Edge Locations</dt> <dd> <p>When Route 53 finishes creating the configuration for DNS query logging, it does the following:</p> <ul> <li> <p>Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.</p> </li> <li> <p>Begins to send query logs to the applicable log stream.</p> </li> </ul> <p>The name of each log stream is in the following format:</p> <p> <code> <i>hosted zone ID</i>/<i>edge location code</i> </code> </p> <p>The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the <a href="http://aws.amazon.com/route53/details/">Route 53 Product Details</a> page.</p> </dd> <dt>Queries That Are Logged</dt> <dd> <p>Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn\'t forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">Routing Internet Traffic to Your Website or Web Application</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Log File Format</dt> <dd> <p>For a list of the values in each query log and the format of each value, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Pricing</dt> <dd> <p>For information about charges for query logs, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </dd> <dt>How to Stop Logging</dt> <dd> <p>If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html">DeleteQueryLoggingConfig</a>.</p> </dd> </dl>',
  operationId: 'CreateQueryLoggingConfig',
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
        'text/xml': {
          schema: z
            .object({
              HostedZoneId: z
                .string()
                .max(32)
                .openapi({
                  description:
                    'The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.',
                }),
              CloudWatchLogsLogGroupArn: z
                .string()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN:</p> <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i> </p> <p>To get the ARN for a log group, you can use the CloudWatch console, the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action, the <a href="https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command, or the applicable command in one of the Amazon Web Services SDKs.</p>',
                }),
            })
            .openapi({ required: ['HostedZoneId', 'CloudWatchLogsLogGroupArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateQueryLoggingConfigResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    482: {
      description: 'NoSuchCloudWatchLogsLogGroup',
      content: { 'text/xml': { schema: NoSuchCloudWatchLogsLogGroupSchema } },
    },
    483: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    484: {
      description: 'QueryLoggingConfigAlreadyExists',
      content: { 'text/xml': { schema: QueryLoggingConfigAlreadyExistsSchema } },
    },
    485: {
      description: 'InsufficientCloudWatchLogsResourcePolicy',
      content: { 'text/xml': { schema: InsufficientCloudWatchLogsResourcePolicySchema } },
    },
  },
})

export const get20130401DelegationsetRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/delegationset',
  description:
    'Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account.',
  operationId: 'ListReusableDelegationSets',
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
      marker: z
        .string()
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more reusable delegation sets. To get another group, submit another <code>ListReusableDelegationSets</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more reusable delegation sets to get.</p>',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Route 53 returns only the first 100 reusable delegation sets.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListReusableDelegationSetsResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401DelegationsetRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/delegationset',
  description:
    "<p>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account. </p> <p>You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the <code>CreateReusableDelegationSet</code> request.</p> <note> <p>You can't associate a reusable delegation set with a private hosted zone.</p> </note> <p>For information about using a reusable delegation set to configure white label name servers, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html\">Configuring White Label Name Servers</a>.</p> <p>The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps:</p> <ol> <li> <p>Create a reusable delegation set.</p> </li> <li> <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p> </li> <li> <p>Recreate resource record sets in the new hosted zones.</p> </li> <li> <p>Change the registrar's name servers to use the name servers for the new hosted zones.</p> </li> <li> <p>Monitor traffic for the website or application.</p> </li> <li> <p>Change TTLs back to their original values.</p> </li> </ol> <p>If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following:</p> <ul> <li> <p>For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones.</p> </li> <li> <p>For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.</p> </li> <li> <p>For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.</p> </li> </ul>",
  operationId: 'CreateReusableDelegationSet',
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
        'text/xml': {
          schema: z
            .object({
              CallerReference: z
                .string()
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A unique string that identifies the request, and that allows you to retry failed <code>CreateReusableDelegationSet</code> requests without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateReusableDelegationSet</code> request. <code>CallerReference</code> can be any unique string, for example a date/time stamp.',
                }),
              HostedZoneId: z
                .string()
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.',
                }),
            })
            .openapi({ required: ['CallerReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReusableDelegationSetResponseSchema } },
    },
    480: {
      description: 'DelegationSetAlreadyCreated',
      content: { 'text/xml': { schema: DelegationSetAlreadyCreatedSchema } },
    },
    481: {
      description: 'LimitsExceeded',
      content: { 'text/xml': { schema: LimitsExceededSchema } },
    },
    482: {
      description: 'HostedZoneNotFound',
      content: { 'text/xml': { schema: HostedZoneNotFoundSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    485: {
      description: 'DelegationSetNotAvailable',
      content: { 'text/xml': { schema: DelegationSetNotAvailableSchema } },
    },
    486: {
      description: 'DelegationSetAlreadyReusable',
      content: { 'text/xml': { schema: DelegationSetAlreadyReusableSchema } },
    },
  },
})

export const post20130401TrafficpolicyRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/trafficpolicy',
  description:
    'Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).',
  operationId: 'CreateTrafficPolicy',
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
        'text/xml': {
          schema: z
            .object({
              Name: z.string().max(512).openapi({ description: 'The name of the traffic policy.' }),
              Document: z
                .string()
                .max(102400)
                .openapi({
                  description:
                    'The definition of this traffic policy in JSON format. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.',
                }),
              Comment: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '(Optional) Any comments that you want to include about the traffic policy.',
                }),
            })
            .openapi({ required: ['Name', 'Document'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTrafficPolicyResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'TooManyTrafficPolicies',
      content: { 'text/xml': { schema: TooManyTrafficPoliciesSchema } },
    },
    482: {
      description: 'TrafficPolicyAlreadyExists',
      content: { 'text/xml': { schema: TrafficPolicyAlreadyExistsSchema } },
    },
    483: {
      description: 'InvalidTrafficPolicyDocument',
      content: { 'text/xml': { schema: InvalidTrafficPolicyDocumentSchema } },
    },
  },
})

export const post20130401TrafficpolicyinstanceRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/trafficpolicyinstance',
  description:
    'Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that <code>CreateTrafficPolicyInstance</code> created.',
  operationId: 'CreateTrafficPolicyInstance',
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
        'text/xml': {
          schema: z
            .object({
              HostedZoneId: z
                .string()
                .max(32)
                .openapi({
                  description:
                    'The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.',
                }),
              Name: z
                .string()
                .max(1024)
                .openapi({
                  description:
                    'The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.',
                }),
              TTL: z
                .int()
                .min(0)
                .max(2147483647)
                .openapi({
                  description:
                    '(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.',
                }),
              TrafficPolicyId: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description:
                    'The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.',
                }),
              TrafficPolicyVersion: z
                .int()
                .min(1)
                .max(1000)
                .openapi({
                  description:
                    'The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.',
                }),
            })
            .openapi({
              required: ['HostedZoneId', 'Name', 'TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTrafficPolicyInstanceResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'TooManyTrafficPolicyInstances',
      content: { 'text/xml': { schema: TooManyTrafficPolicyInstancesSchema } },
    },
    483: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    484: {
      description: 'TrafficPolicyInstanceAlreadyExists',
      content: { 'text/xml': { schema: TrafficPolicyInstanceAlreadyExistsSchema } },
    },
  },
})

export const post20130401TrafficpolicyIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/trafficpolicy/{Id}',
  description:
    "Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.",
  operationId: 'CreateTrafficPolicyVersion',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the traffic policy for which you want to create a new version.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Document: z
                .string()
                .max(102400)
                .openapi({
                  description:
                    'The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code> request. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.',
                }),
              Comment: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.',
                }),
            })
            .openapi({ required: ['Document'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTrafficPolicyVersionResponseSchema } },
    },
    480: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'TooManyTrafficPolicyVersionsForCurrentPolicy',
      content: { 'text/xml': { schema: TooManyTrafficPolicyVersionsForCurrentPolicySchema } },
    },
    483: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    484: {
      description: 'InvalidTrafficPolicyDocument',
      content: { 'text/xml': { schema: InvalidTrafficPolicyDocumentSchema } },
    },
  },
})

export const get20130401HostedzoneIdAuthorizevpcassociationRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzone/{Id}/authorizevpcassociation',
  description:
    "<p>Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p> <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC that can be associated with the hosted zone.</p>",
  operationId: 'ListVPCAssociationAuthorizations',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              ' <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter in another <code>ListVPCAssociationAuthorizations</code> request.',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      maxresults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxresults',
            in: 'query',
            required: false,
            description:
              " <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListVPCAssociationAuthorizationsResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'InvalidPaginationToken',
      content: { 'text/xml': { schema: InvalidPaginationTokenSchema } },
    },
  },
})

export const post20130401HostedzoneIdAuthorizevpcassociationRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/authorizevpcassociation',
  description:
    '<p>Authorizes the Amazon Web Services account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code> request to associate the VPC with a specified hosted zone that was created by a different account. To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p> <note> <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC.</p> </note>',
  operationId: 'CreateVPCAssociationAuthorization',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the private hosted zone that you want to authorize associating a VPC with.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              VPC: z
                .object({
                  VPCRegion: VPCRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Private hosted zones only) The region that an Amazon VPC was created in.',
                      }),
                  ).exactOptional(),
                  VPCId: VPCIdSchema.exactOptional(),
                })
                .openapi({
                  description:
                    '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['VPC'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateVPCAssociationAuthorizationResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'TooManyVPCAssociationAuthorizations',
      content: { 'text/xml': { schema: TooManyVPCAssociationAuthorizationsSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    483: { description: 'InvalidVPCId', content: { 'text/xml': { schema: InvalidVPCIdSchema } } },
    484: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401KeysigningkeyHostedZoneIdNameDeactivateRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate',
  description:
    'Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the KSK status to <code>INACTIVE</code>.',
  operationId: 'DeactivateKeySigningKey',
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
      HostedZoneId: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'HostedZoneId',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      Name: z
        .string()
        .min(3)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'A string used to identify a key-signing key (KSK).',
            schema: { type: 'string', minLength: 3, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeactivateKeySigningKeyResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'NoSuchKeySigningKey',
      content: { 'text/xml': { schema: NoSuchKeySigningKeySchema } },
    },
    482: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    483: {
      description: 'InvalidSigningStatus',
      content: { 'text/xml': { schema: InvalidSigningStatusSchema } },
    },
    484: {
      description: 'KeySigningKeyInUse',
      content: { 'text/xml': { schema: KeySigningKeyInUseSchema } },
    },
    485: {
      description: 'KeySigningKeyInParentDSRecord',
      content: { 'text/xml': { schema: KeySigningKeyInParentDSRecordSchema } },
    },
    486: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HealthcheckHealthCheckIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/healthcheck/{HealthCheckId}',
  description: 'Gets information about a specified health check.',
  operationId: 'GetHealthCheck',
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
      HealthCheckId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'HealthCheckId',
            in: 'path',
            required: true,
            description:
              'The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHealthCheckResponseSchema } },
    },
    480: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'IncompatibleVersion',
      content: { 'text/xml': { schema: IncompatibleVersionSchema } },
    },
  },
})

export const post20130401HealthcheckHealthCheckIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/healthcheck/{HealthCheckId}',
  description:
    '<p>Updates an existing health check. Note that some values can\'t be updated. </p> <p>For more information about updating health checks, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
  operationId: 'UpdateHealthCheck',
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
      HealthCheckId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'HealthCheckId',
            in: 'path',
            required: true,
            description:
              'The ID for the health check for which you want detailed information. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              HealthCheckVersion: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A sequential counter that Amazon Route 53 sets to <code>1</code> when you create a health check and increments by 1 each time you update settings for the health check.</p> <p>We recommend that you use <code>GetHealthCheck</code> or <code>ListHealthChecks</code> to get the current value of <code>HealthCheckVersion</code> for the health check that you want to update, and that you include that value in your <code>UpdateHealthCheck</code> request. This prevents Route 53 from overwriting an intervening update:</p> <ul> <li> <p>If the value in the <code>UpdateHealthCheck</code> request matches the value of <code>HealthCheckVersion</code> in the health check, Route 53 updates the health check with the new settings.</p> </li> <li> <p>If the value of <code>HealthCheckVersion</code> in the health check is greater, the health check was changed after you got the version number. Route 53 does not update the health check, and it returns a <code>HealthCheckVersionMismatch</code> error.</p> </li> </ul>',
                }),
              IPAddress: z
                .string()
                .regex(
                  /(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)/,
                )
                .max(45)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don\'t specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:</p> <ul> <li> <p>Linux: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> </p> </li> <li> <p>Windows: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Windows Instances</i> </p> </li> </ul> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can\'t update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can\'t check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can\'t create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul>',
                }),
              Port: z
                .int()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>",
                }),
              ResourcePath: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. </p> <p>Specify this value only if you want to change it.</p>',
                }),
              FullyQualifiedDomainName: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <i> <code>FullyQualifiedDomainName</code>:<code>Port</code> </i> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the above cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to the domain that you specify in <code>FullyQualifiedDomainName</code> at the interval you specify in <code>RequestInterval</code>. Using an IPv4 address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a \"DNS resolution failed\" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value of <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>",
                }),
              SearchString: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)",
                }),
              FailureThreshold: z
                .int()
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don\'t specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>',
                }),
              Inverted: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.',
                }),
              Disabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Stops Route 53 from performing health checks. When you disable a health check, here\'s what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>',
                }),
              HealthThreshold: z
                .int()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The number of child health checks that are associated with a <code>CALCULATED</code> health that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <code>ChildHealthChecks</code> and <code>ChildHealthCheck</code> elements.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>',
                }),
              ChildHealthChecks: z
                .array(
                  HealthCheckIdSchema.and(z.any().openapi({ xml: { name: 'ChildHealthCheck' } })),
                )
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.',
                }),
              EnableSNI: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during <code>TLS</code> negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that HTTPS requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be SSL alert <code>handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>",
                }),
              Regions: z
                .array(HealthCheckRegionSchema.and(z.any().openapi({ xml: { name: 'Region' } })))
                .min(3)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from.',
                }),
              AlarmIdentifier: z
                .object({
                  Region: CloudWatchRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.</p> <p>For the current list of CloudWatch regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/cw_region.html">Amazon CloudWatch endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>',
                      }),
                  ).exactOptional(),
                  Name: AlarmNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p> <note> <p>Route 53 supports CloudWatch alarms with the following features:</p> <ul> <li> <p>Standard-resolution metrics. High-resolution metrics aren\'t supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren\'t supported.</p> </li> </ul> </note>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.',
                  required: [],
                }),
              InsufficientDataHealthStatus: z
                .enum(['Healthy', 'Unhealthy', 'LastKnownStatus'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: By default, Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the status for the health check is healthy.</p> </li> </ul>',
                }),
              ResetElements: z
                .array(
                  ResettableElementNameSchema.and(
                    z.any().openapi({ xml: { name: 'ResettableElementName' } }),
                  ),
                )
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A complex type that contains one <code>ResettableElementName</code> element for each element that you want to reset to the default value. Valid values for <code>ResettableElementName</code> include the following:</p> <ul> <li> <p> <code>ChildHealthChecks</code>: Amazon Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ChildHealthChecks">ChildHealthChecks</a> to null.</p> </li> <li> <p> <code>FullyQualifiedDomainName</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. to null.</p> </li> <li> <p> <code>Regions</code>: Route 53 resets the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a> list to the default set of regions. </p> </li> <li> <p> <code>ResourcePath</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ResourcePath">ResourcePath</a> to null.</p> </li> </ul>',
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
      content: { 'text/xml': { schema: UpdateHealthCheckResponseSchema } },
    },
    480: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'HealthCheckVersionMismatch',
      content: { 'text/xml': { schema: HealthCheckVersionMismatchSchema } },
    },
  },
})

export const delete20130401HealthcheckHealthCheckIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/healthcheck/{HealthCheckId}',
  description:
    "<p>Deletes a health check.</p> <important> <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html\">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53. </p>",
  operationId: 'DeleteHealthCheck',
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
      HealthCheckId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'HealthCheckId',
            in: 'path',
            required: true,
            description: 'The ID of the health check that you want to delete.',
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteHealthCheckResponseSchema } },
    },
    480: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    481: {
      description: 'HealthCheckInUse',
      content: { 'text/xml': { schema: HealthCheckInUseSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HostedzoneIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzone/{Id}',
  description:
    'Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.',
  operationId: 'GetHostedZone',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the hosted zone that you want to get information about.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHostedZoneResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401HostedzoneIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}',
  description: 'Updates the comment for a specified hosted zone.',
  operationId: 'UpdateHostedZoneComment',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID for the hosted zone that you want to update the comment for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Comment: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the <code>Comment</code> element, if any.",
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
      content: { 'text/xml': { schema: UpdateHostedZoneCommentResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
  },
})

export const delete20130401HostedzoneIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/hostedzone/{Id}',
  description:
    '<p>Deletes a hosted zone.</p> <p>If the hosted zone was created by another service, such as Cloud Map, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.)</p> <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p> <important> <p>If you delete a hosted zone, you can\'t undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.</p> </important> <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a> for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service."</p> <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a <code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p> <p>To verify that the hosted zone has been deleted, do one of the following:</p> <ul> <li> <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p> </li> <li> <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current Amazon Web Services account.</p> </li> </ul>',
  operationId: 'DeleteHostedZone',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the hosted zone you want to delete.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteHostedZoneResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'HostedZoneNotEmpty',
      content: { 'text/xml': { schema: HostedZoneNotEmptySchema } },
    },
    482: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
    483: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    484: {
      description: 'InvalidDomainName',
      content: { 'text/xml': { schema: InvalidDomainNameSchema } },
    },
  },
})

export const delete20130401KeysigningkeyHostedZoneIdNameRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}',
  description:
    '<p>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing.</p> <p>You can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html">DeactivateKeySigningKey</a> to deactivate the key before you delete it.</p> <p>Use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html">GetDNSSEC</a> to verify that the KSK is in an <code>INACTIVE</code> status.</p>',
  operationId: 'DeleteKeySigningKey',
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
      HostedZoneId: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'HostedZoneId',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      Name: z
        .string()
        .min(3)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'A string used to identify a key-signing key (KSK).',
            schema: { type: 'string', minLength: 3, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteKeySigningKeyResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'NoSuchKeySigningKey',
      content: { 'text/xml': { schema: NoSuchKeySigningKeySchema } },
    },
    482: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    483: {
      description: 'InvalidSigningStatus',
      content: { 'text/xml': { schema: InvalidSigningStatusSchema } },
    },
    484: { description: 'InvalidKMSArn', content: { 'text/xml': { schema: InvalidKMSArnSchema } } },
    485: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401QueryloggingconfigIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/queryloggingconfig/{Id}',
  description:
    '<p>Gets information about a specified configuration for DNS query logging.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>',
  operationId: 'GetQueryLoggingConfig',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the configuration for DNS query logging that you want to get information about.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetQueryLoggingConfigResponseSchema } },
    },
    480: {
      description: 'NoSuchQueryLoggingConfig',
      content: { 'text/xml': { schema: NoSuchQueryLoggingConfigSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const delete20130401QueryloggingconfigIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/queryloggingconfig/{Id}',
  description:
    '<p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn\'t delete any logs that are already in CloudWatch Logs.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>',
  operationId: 'DeleteQueryLoggingConfig',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the configuration that you want to delete. ',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteQueryLoggingConfigResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'NoSuchQueryLoggingConfig',
      content: { 'text/xml': { schema: NoSuchQueryLoggingConfigSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401DelegationsetIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/delegationset/{Id}',
  description:
    'Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.',
  operationId: 'GetReusableDelegationSet',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the reusable delegation set that you want to get a list of name servers for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetReusableDelegationSetResponseSchema } },
    },
    480: {
      description: 'NoSuchDelegationSet',
      content: { 'text/xml': { schema: NoSuchDelegationSetSchema } },
    },
    481: {
      description: 'DelegationSetNotReusable',
      content: { 'text/xml': { schema: DelegationSetNotReusableSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const delete20130401DelegationsetIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/delegationset/{Id}',
  description:
    '<p>Deletes a reusable delegation set.</p> <important> <p>You can delete a reusable delegation set only if it isn\'t associated with any hosted zones.</p> </important> <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable delegation set that you want to delete.</p>',
  operationId: 'DeleteReusableDelegationSet',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the reusable delegation set that you want to delete.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReusableDelegationSetResponseSchema } },
    },
    480: {
      description: 'NoSuchDelegationSet',
      content: { 'text/xml': { schema: NoSuchDelegationSetSchema } },
    },
    481: {
      description: 'DelegationSetInUse',
      content: { 'text/xml': { schema: DelegationSetInUseSchema } },
    },
    482: {
      description: 'DelegationSetNotReusable',
      content: { 'text/xml': { schema: DelegationSetNotReusableSchema } },
    },
    483: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401TrafficpolicyIdVersionRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicy/{Id}/{Version}',
  description:
    '<p>Gets information about a specific traffic policy version.</p> <p>For information about how of deleting a traffic policy affects the response from <code>GetTrafficPolicy</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>',
  operationId: 'GetTrafficPolicy',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the traffic policy that you want to get information about.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
      Version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .openapi({
          param: {
            name: 'Version',
            in: 'path',
            required: true,
            description:
              'The version number of the traffic policy that you want to get information about.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetTrafficPolicyResponseSchema } },
    },
    480: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401TrafficpolicyIdVersionRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/trafficpolicy/{Id}/{Version}',
  description: 'Updates the comment for a specified traffic policy version.',
  operationId: 'UpdateTrafficPolicyComment',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The value of <code>Id</code> for the traffic policy that you want to update the comment for.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
      Version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .openapi({
          param: {
            name: 'Version',
            in: 'path',
            required: true,
            description:
              'The value of <code>Version</code> for the traffic policy that you want to update the comment for.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Comment: z
                .string()
                .max(1024)
                .openapi({
                  description: 'The new comment for the specified traffic policy and version.',
                }),
            })
            .openapi({ required: ['Comment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateTrafficPolicyCommentResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    482: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const delete20130401TrafficpolicyIdVersionRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/trafficpolicy/{Id}/{Version}',
  description:
    '<p>Deletes a traffic policy.</p> <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the following:</p> <ul> <li> <p>Deleted traffic policies aren\'t listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p> </li> <li> <p> There\'s no way to get a list of deleted policies.</p> </li> <li> <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p> </li> </ul>',
  operationId: 'DeleteTrafficPolicy',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the traffic policy that you want to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
      Version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .openapi({
          param: {
            name: 'Version',
            in: 'path',
            required: true,
            description: 'The version number of the traffic policy that you want to delete.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTrafficPolicyResponseSchema } },
    },
    480: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'TrafficPolicyInUse',
      content: { 'text/xml': { schema: TrafficPolicyInUseSchema } },
    },
    483: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
  },
})

export const get20130401TrafficpolicyinstanceIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicyinstance/{Id}',
  description:
    "<p>Gets information about a specified traffic policy instance.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>",
  operationId: 'GetTrafficPolicyInstance',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the traffic policy instance that you want to get information about.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetTrafficPolicyInstanceResponseSchema } },
    },
    480: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401TrafficpolicyinstanceIdRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/trafficpolicyinstance/{Id}',
  description:
    '<p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p> <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p> <ol> <li> <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets. </p> </li> <li> <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.</p> </li> <li> <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p> </li> </ol>',
  operationId: 'UpdateTrafficPolicyInstance',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the traffic policy instance that you want to update.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              TTL: z
                .int()
                .min(0)
                .max(2147483647)
                .openapi({
                  description:
                    'The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.',
                }),
              TrafficPolicyId: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description:
                    'The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.',
                }),
              TrafficPolicyVersion: z
                .int()
                .min(1)
                .max(1000)
                .openapi({
                  description:
                    'The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.',
                }),
            })
            .openapi({ required: ['TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateTrafficPolicyInstanceResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
    482: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
    483: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
    484: {
      description: 'ConflictingTypes',
      content: { 'text/xml': { schema: ConflictingTypesSchema } },
    },
  },
})

export const delete20130401TrafficpolicyinstanceIdRoute = createRoute({
  method: 'delete',
  path: '/2013-04-01/trafficpolicyinstance/{Id}',
  description:
    '<p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>',
  operationId: 'DeleteTrafficPolicyInstance',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the traffic policy instance that you want to delete. </p> <important> <p>When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance.</p> </important>',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTrafficPolicyInstanceResponseSchema } },
    },
    480: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
  },
})

export const post20130401HostedzoneIdDeauthorizevpcassociationRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/deauthorizevpcassociation',
  description:
    "<p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p> <important> <p>Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, <code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p> </important>",
  operationId: 'DeleteVPCAssociationAuthorization',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, the ID of the hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              VPC: z
                .object({
                  VPCRegion: VPCRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Private hosted zones only) The region that an Amazon VPC was created in.',
                      }),
                  ).exactOptional(),
                  VPCId: VPCIdSchema.exactOptional(),
                })
                .openapi({
                  description:
                    '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['VPC'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteVPCAssociationAuthorizationResponseSchema } },
    },
    480: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    481: {
      description: 'VPCAssociationAuthorizationNotFound',
      content: { 'text/xml': { schema: VPCAssociationAuthorizationNotFoundSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    483: { description: 'InvalidVPCId', content: { 'text/xml': { schema: InvalidVPCIdSchema } } },
    484: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401HostedzoneIdDisableDnssecRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/disable-dnssec',
  description:
    'Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone.',
  operationId: 'DisableHostedZoneDNSSEC',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisableHostedZoneDNSSECResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    483: {
      description: 'KeySigningKeyInParentDSRecord',
      content: { 'text/xml': { schema: KeySigningKeyInParentDSRecordSchema } },
    },
    484: {
      description: 'DNSSECNotFound',
      content: { 'text/xml': { schema: DNSSECNotFoundSchema } },
    },
    485: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    486: { description: 'InvalidKMSArn', content: { 'text/xml': { schema: InvalidKMSArnSchema } } },
    487: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401HostedzoneIdDisassociatevpcRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/disassociatevpc',
  description:
    '<p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:</p> <ul> <li> <p>You can\'t disassociate the last Amazon VPC from a private hosted zone.</p> </li> <li> <p>You can\'t convert a private hosted zone into a public hosted zone.</p> </li> <li> <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account that created the hosted zone or the account that created the Amazon VPC.</p> </li> <li> <p>Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.</p> <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>, if the hosted zone has a value for <code>OwningAccount</code>, you can use <code>DisassociateVPCFromHostedZone</code>. If the hosted zone has a value for <code>OwningService</code>, you can\'t use <code>DisassociateVPCFromHostedZone</code>.</p> </li> </ul> <note> <p>When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'DisassociateVPCFromHostedZone',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the private hosted zone that you want to disassociate a VPC from.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              VPC: z
                .object({
                  VPCRegion: VPCRegionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Private hosted zones only) The region that an Amazon VPC was created in.',
                      }),
                  ).exactOptional(),
                  VPCId: VPCIdSchema.exactOptional(),
                })
                .openapi({
                  description:
                    '<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>',
                  required: [],
                }),
              Comment: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' <i>Optional:</i> A comment about the disassociation request.',
                }),
            })
            .openapi({ required: ['VPC'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisassociateVPCFromHostedZoneResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidVPCId', content: { 'text/xml': { schema: InvalidVPCIdSchema } } },
    482: {
      description: 'VPCAssociationNotFound',
      content: { 'text/xml': { schema: VPCAssociationNotFoundSchema } },
    },
    483: {
      description: 'LastVPCAssociation',
      content: { 'text/xml': { schema: LastVPCAssociationSchema } },
    },
    484: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401HostedzoneIdEnableDnssecRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/hostedzone/{Id}/enable-dnssec',
  description: 'Enables DNSSEC signing in a specific hosted zone.',
  operationId: 'EnableHostedZoneDNSSEC',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnableHostedZoneDNSSECResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'ConcurrentModification',
      content: { 'text/xml': { schema: ConcurrentModificationSchema } },
    },
    483: {
      description: 'KeySigningKeyWithActiveStatusNotFound',
      content: { 'text/xml': { schema: KeySigningKeyWithActiveStatusNotFoundSchema } },
    },
    484: { description: 'InvalidKMSArn', content: { 'text/xml': { schema: InvalidKMSArnSchema } } },
    485: {
      description: 'HostedZonePartiallyDelegated',
      content: { 'text/xml': { schema: HostedZonePartiallyDelegatedSchema } },
    },
    486: {
      description: 'DNSSECNotFound',
      content: { 'text/xml': { schema: DNSSECNotFoundSchema } },
    },
    487: {
      description: 'InvalidKeySigningKeyStatus',
      content: { 'text/xml': { schema: InvalidKeySigningKeyStatusSchema } },
    },
    488: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401AccountlimitTypeRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/accountlimit/{Type}',
  description:
    '<p>Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p> <note> <p>You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p> </note>',
  operationId: 'GetAccountLimit',
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
      Type: z
        .enum([
          'MAX_HEALTH_CHECKS_BY_OWNER',
          'MAX_HOSTED_ZONES_BY_OWNER',
          'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER',
          'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER',
          'MAX_TRAFFIC_POLICIES_BY_OWNER',
        ])
        .openapi({
          param: {
            name: 'Type',
            in: 'path',
            required: true,
            description:
              '<p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create using the current account.</p> </li> <li> <p> <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create using the current account.</p> </li> <li> <p> <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</p> </li> </ul>',
            schema: {
              type: 'string',
              enum: [
                'MAX_HEALTH_CHECKS_BY_OWNER',
                'MAX_HOSTED_ZONES_BY_OWNER',
                'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER',
                'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER',
                'MAX_TRAFFIC_POLICIES_BY_OWNER',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccountLimitResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401ChangeIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/change/{Id}',
  description:
    '<p>Returns the current status of a change batch request. The status is one of the following values:</p> <ul> <li> <p> <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests.</p> </li> <li> <p> <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone. </p> </li> </ul>',
  operationId: 'GetChange',
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
      Id: z
        .string()
        .min(1)
        .max(6500)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the change batch request. The value that you specify here is the value that <code>ChangeResourceRecordSets</code> returned in the <code>Id</code> element when you submitted the request.',
            schema: { type: 'string', minLength: 1, maxLength: 6500 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetChangeResponseSchema } } },
    480: { description: 'NoSuchChange', content: { 'text/xml': { schema: NoSuchChangeSchema } } },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401CheckeriprangesRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/checkeripranges',
  description:
    '<p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <important> <p> <code>GetCheckerIpRanges</code> still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important>',
  operationId: 'GetCheckerIpRanges',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCheckerIpRangesResponseSchema } },
    },
  },
})

export const get20130401HostedzoneIdDnssecRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzone/{Id}/dnssec',
  description:
    'Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone.',
  operationId: 'GetDNSSEC',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'A unique string used to identify a hosted zone.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetDNSSECResponseSchema } } },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401GeolocationRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/geolocation',
  description:
    '<p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p> <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <p>Use the following syntax to determine whether a continent is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i> </code> </p> <p>Use the following syntax to determine whether a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i> </code> </p> <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&amp;subdivisioncode=<i>subdivision code</i> </code> </p>',
  operationId: 'GetGeoLocation',
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
      continentcode: z
        .string()
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            name: 'continentcode',
            in: 'query',
            required: false,
            description:
              '<p>For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes:</p> <ul> <li> <p> <b>AF</b>: Africa</p> </li> <li> <p> <b>AN</b>: Antarctica</p> </li> <li> <p> <b>AS</b>: Asia</p> </li> <li> <p> <b>EU</b>: Europe</p> </li> <li> <p> <b>OC</b>: Oceania</p> </li> <li> <p> <b>NA</b>: North America</p> </li> <li> <p> <b>SA</b>: South America</p> </li> </ul>',
            schema: { type: 'string', minLength: 2, maxLength: 2 },
          },
        }),
      countrycode: z
        .string()
        .min(1)
        .max(2)
        .exactOptional()
        .openapi({
          param: {
            name: 'countrycode',
            in: 'query',
            required: false,
            description:
              'Amazon Route 53 uses the two-letter country codes that are specified in <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.',
            schema: { type: 'string', minLength: 1, maxLength: 2 },
          },
        }),
      subdivisioncode: z
        .string()
        .min(1)
        .max(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'subdivisioncode',
            in: 'query',
            required: false,
            description:
              'The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a> on the United States Postal Service website. For a list of all supported subdivision codes, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html">ListGeoLocations</a> API.',
            schema: { type: 'string', minLength: 1, maxLength: 3 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetGeoLocationResponseSchema } },
    },
    480: {
      description: 'NoSuchGeoLocation',
      content: { 'text/xml': { schema: NoSuchGeoLocationSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HealthcheckcountRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/healthcheckcount',
  description:
    'Retrieves the number of health checks that are associated with the current Amazon Web Services account.',
  operationId: 'GetHealthCheckCount',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHealthCheckCountResponseSchema } },
    },
  },
})

export const get20130401HealthcheckHealthCheckIdLastfailurereasonRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason',
  description: 'Gets the reason that a specified health check failed most recently.',
  operationId: 'GetHealthCheckLastFailureReason',
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
      HealthCheckId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'HealthCheckId',
            in: 'path',
            required: true,
            description:
              "<p>The ID for the health check for which you want the last failure reason. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckLastFailureReason</code> for a calculated health check.</p> </note>",
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHealthCheckLastFailureReasonResponseSchema } },
    },
    480: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HealthcheckHealthCheckIdStatusRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/healthcheck/{HealthCheckId}/status',
  description:
    '<p>Gets status of a specified health check. </p> <important> <p>This API is intended for use during development to diagnose behavior. It doesn’t support production use-cases with high query rates that require immediate and actionable responses.</p> </important>',
  operationId: 'GetHealthCheckStatus',
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
      HealthCheckId: z
        .string()
        .max(64)
        .openapi({
          param: {
            name: 'HealthCheckId',
            in: 'path',
            required: true,
            description:
              "<p>The ID for the health check that you want the current status for. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckStatus</code> to get the status of a calculated health check.</p> </note>",
            schema: { type: 'string', maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHealthCheckStatusResponseSchema } },
    },
    480: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HostedzonecountRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzonecount',
  description:
    'Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.',
  operationId: 'GetHostedZoneCount',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHostedZoneCountResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HostedzonelimitIdTypeRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzonelimit/{Id}/{Type}',
  description:
    '<p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. </p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>',
  operationId: 'GetHostedZoneLimit',
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
      Type: z
        .enum(['MAX_RRSETS_BY_ZONE', 'MAX_VPCS_ASSOCIATED_BY_ZONE'])
        .openapi({
          param: {
            name: 'Type',
            in: 'path',
            required: true,
            description:
              '<p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create in the specified hosted zone.</p> </li> <li> <p> <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</p> </li> </ul>',
            schema: { type: 'string', enum: ['MAX_RRSETS_BY_ZONE', 'MAX_VPCS_ASSOCIATED_BY_ZONE'] },
          },
        }),
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the hosted zone that you want to get a limit for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetHostedZoneLimitResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    482: {
      description: 'HostedZoneNotPrivate',
      content: { 'text/xml': { schema: HostedZoneNotPrivateSchema } },
    },
  },
})

export const get20130401ReusabledelegationsetlimitIdTypeRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/reusabledelegationsetlimit/{Id}/{Type}',
  description:
    '<p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>',
  operationId: 'GetReusableDelegationSetLimit',
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
      Type: z
        .literal('MAX_ZONES_BY_REUSABLE_DELEGATION_SET')
        .openapi({
          param: {
            name: 'Type',
            in: 'path',
            required: true,
            description:
              'Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate with the specified reusable delegation set.',
            schema: { type: 'string', enum: ['MAX_ZONES_BY_REUSABLE_DELEGATION_SET'] },
          },
        }),
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the delegation set that you want to get the limit for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetReusableDelegationSetLimitResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchDelegationSet',
      content: { 'text/xml': { schema: NoSuchDelegationSetSchema } },
    },
  },
})

export const get20130401TrafficpolicyinstancecountRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicyinstancecount',
  description:
    'Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.',
  operationId: 'GetTrafficPolicyInstanceCount',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetTrafficPolicyInstanceCountResponseSchema } },
    },
  },
})

export const get20130401CidrcollectionCidrCollectionIdCidrblocksRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/cidrcollection/{CidrCollectionId}/cidrblocks',
  description: 'Returns a paginated list of location objects and their CIDR blocks.',
  operationId: 'ListCidrBlocks',
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
      CidrCollectionId: z
        .string()
        .regex(/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}/)
        .openapi({
          param: {
            name: 'CidrCollectionId',
            in: 'path',
            required: true,
            description: 'The UUID of the CIDR collection.',
            schema: { type: 'string', pattern: '[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}' },
          },
        }),
    }),
    query: z.object({
      location: z
        .string()
        .regex(/[0-9A-Za-z_\-]+/)
        .min(1)
        .max(16)
        .exactOptional()
        .openapi({
          param: {
            name: 'location',
            in: 'query',
            required: false,
            description: 'The name of the CIDR collection location.',
            schema: { type: 'string', pattern: '[0-9A-Za-z_\\-]+', minLength: 1, maxLength: 16 },
          },
        }),
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              'An opaque pagination token to indicate where the service is to begin enumerating results.',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      maxresults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxresults',
            in: 'query',
            required: false,
            description: 'Maximum number of results you want returned.',
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
      content: { 'text/xml': { schema: ListCidrBlocksResponseSchema } },
    },
    480: {
      description: 'NoSuchCidrCollectionException',
      content: { 'text/xml': { schema: NoSuchCidrCollectionExceptionSchema } },
    },
    481: {
      description: 'NoSuchCidrLocationException',
      content: { 'text/xml': { schema: NoSuchCidrLocationExceptionSchema } },
    },
    482: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401GeolocationsRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/geolocations',
  description:
    '<p>Retrieves a list of supported geographic locations.</p> <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p> <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <p>For a list of supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>',
  operationId: 'ListGeoLocations',
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
      startcontinentcode: z
        .string()
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            name: 'startcontinentcode',
            in: 'query',
            required: false,
            description:
              "<p>The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is true, and if <code>NextContinentCode</code> from the previous response has a value, enter that value in <code>startcontinentcode</code> to return the next page of results.</p> <p>Include <code>startcontinentcode</code> only if you want to list continents. Don't include <code>startcontinentcode</code> when you're listing countries or countries with their subdivisions.</p>",
            schema: { type: 'string', minLength: 2, maxLength: 2 },
          },
        }),
      startcountrycode: z
        .string()
        .min(1)
        .max(2)
        .exactOptional()
        .openapi({
          param: {
            name: 'startcountrycode',
            in: 'query',
            required: false,
            description:
              'The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextCountryCode</code> from the previous response has a value, enter that value in <code>startcountrycode</code> to return the next page of results.',
            schema: { type: 'string', minLength: 1, maxLength: 2 },
          },
        }),
      startsubdivisioncode: z
        .string()
        .min(1)
        .max(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'startsubdivisioncode',
            in: 'query',
            required: false,
            description:
              '<p>The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextSubdivisionCode</code> from the previous response has a value, enter that value in <code>startsubdivisioncode</code> to return the next page of results.</p> <p>To list subdivisions (U.S. states), you must include both <code>startcountrycode</code> and <code>startsubdivisioncode</code>.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 3 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of geolocations to be included in the response body for this request. If more than <code>maxitems</code> geolocations remain to be listed, then the value of the <code>IsTruncated</code> element in the response is <code>true</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListGeoLocationsResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401HostedzonesbynameRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzonesbyname',
  description:
    '<p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element for each hosted zone created by the current Amazon Web Services account. </p> <p> <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order in some circumstances.</p> <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p> <p> <code>com.ex\\344mple.</code> </p> <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p> <ul> <li> <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the <code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p> </li> <li> <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code> parameter in the request that produced the current response.</p> </li> <li> <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the current Amazon Web Services account. </p> <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account. The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p> </li> <li> <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> </li> </ul>',
  operationId: 'ListHostedZonesByName',
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
      dnsname: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'dnsname',
            in: 'query',
            required: false,
            description:
              "(Optional) For your first request to <code>ListHostedZonesByName</code>, include the <code>dnsname</code> parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the <code>dnsname</code> parameter, Amazon Route 53 returns all of the hosted zones that were created by the current Amazon Web Services account, in ASCII order. For subsequent requests, include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For <code>dnsname</code>, specify the value of <code>NextDNSName</code> from the previous response.",
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      hostedzoneid: z
        .string()
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'hostedzoneid',
            in: 'query',
            required: false,
            description:
              '<p>(Optional) For your first request to <code>ListHostedZonesByName</code>, do not include the <code>hostedzoneid</code> parameter.</p> <p>If you have more hosted zones than the value of <code>maxitems</code>, <code>ListHostedZonesByName</code> returns only the first <code>maxitems</code> hosted zones. To get the next group of <code>maxitems</code> hosted zones, submit another request to <code>ListHostedZonesByName</code> and include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For the value of <code>hostedzoneid</code>, specify the value of the <code>NextHostedZoneId</code> element from the previous response.</p>',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of hosted zones to be included in the response body for this request. If you have more than <code>maxitems</code> hosted zones, then the value of the <code>IsTruncated</code> element in the response is true, and the values of <code>NextDNSName</code> and <code>NextHostedZoneId</code> specify the first hosted zone in the next group of <code>maxitems</code> hosted zones. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListHostedZonesByNameResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'InvalidDomainName',
      content: { 'text/xml': { schema: InvalidDomainNameSchema } },
    },
  },
})

export const get20130401HostedzonesbyvpcVpcidVpcregionRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion',
  description:
    '<p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the hosted zones. The <code>HostedZoneOwner</code> structure in the response contains one of the following values:</p> <ul> <li> <p>An <code>OwningAccount</code> element, which contains the account number of either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account. </p> </li> <li> <p>An <code>OwningService</code> element, which identifies the Amazon Web Services service that created and owns the hosted zone. For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of <code>Owner</code> is <code>efs.amazonaws.com</code>. </p> </li> </ul> <note> <p>When listing private hosted zones, the hosted zone and the Amazon VPC must belong to the same partition where the hosted zones were created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>',
  operationId: 'ListHostedZonesByVPC',
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
      vpcid: z
        .string()
        .max(1024)
        .openapi({
          param: {
            name: 'vpcid',
            in: 'query',
            required: true,
            description: 'The ID of the Amazon VPC that you want to list hosted zones for.',
            schema: {
              type: 'string',
              description: '(Private hosted zones only) The ID of an Amazon VPC. ',
              maxLength: 1024,
            },
          },
          description: '(Private hosted zones only) The ID of an Amazon VPC. ',
        }),
      vpcregion: z
        .enum([
          'us-east-1',
          'us-east-2',
          'us-west-1',
          'us-west-2',
          'eu-west-1',
          'eu-west-2',
          'eu-west-3',
          'eu-central-1',
          'eu-central-2',
          'ap-east-1',
          'me-south-1',
          'us-gov-west-1',
          'us-gov-east-1',
          'us-iso-east-1',
          'us-iso-west-1',
          'us-isob-east-1',
          'me-central-1',
          'ap-southeast-1',
          'ap-southeast-2',
          'ap-southeast-3',
          'ap-south-1',
          'ap-south-2',
          'ap-northeast-1',
          'ap-northeast-2',
          'ap-northeast-3',
          'eu-north-1',
          'sa-east-1',
          'ca-central-1',
          'cn-north-1',
          'af-south-1',
          'eu-south-1',
          'eu-south-2',
          'ap-southeast-4',
          'il-central-1',
        ])
        .openapi({
          param: {
            name: 'vpcregion',
            in: 'query',
            required: true,
            description:
              'For the Amazon VPC that you specified for <code>VPCId</code>, the Amazon Web Services Region that you created the VPC in. ',
            schema: {
              type: 'string',
              enum: [
                'us-east-1',
                'us-east-2',
                'us-west-1',
                'us-west-2',
                'eu-west-1',
                'eu-west-2',
                'eu-west-3',
                'eu-central-1',
                'eu-central-2',
                'ap-east-1',
                'me-south-1',
                'us-gov-west-1',
                'us-gov-east-1',
                'us-iso-east-1',
                'us-iso-west-1',
                'us-isob-east-1',
                'me-central-1',
                'ap-southeast-1',
                'ap-southeast-2',
                'ap-southeast-3',
                'ap-south-1',
                'ap-south-2',
                'ap-northeast-1',
                'ap-northeast-2',
                'ap-northeast-3',
                'eu-north-1',
                'sa-east-1',
                'ca-central-1',
                'cn-north-1',
                'af-south-1',
                'eu-south-1',
                'eu-south-2',
                'ap-southeast-4',
                'il-central-1',
              ],
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If the specified VPC is associated with more than <code>MaxItems</code> hosted zones, the response includes a <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first hosted zone that Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
      nexttoken: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nexttoken',
            in: 'query',
            required: false,
            description:
              "<p>If the previous response included a <code>NextToken</code> element, the specified VPC is associated with more hosted zones. To get more hosted zones, submit another <code>ListHostedZonesByVPC</code> request. </p> <p>For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more hosted zones to get.</p>",
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListHostedZonesByVPCResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'InvalidPaginationToken',
      content: { 'text/xml': { schema: InvalidPaginationTokenSchema } },
    },
  },
})

export const get20130401HostedzoneIdRrsetRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/hostedzone/{Id}/rrset',
  description:
    "<p>Lists the resource record sets in a specified hosted zone.</p> <p> <code>ListResourceRecordSets</code> returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p> <p> <b>Sort order</b> </p> <p> <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before <code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! \" # $ % &amp; ' ( ) * + , -</code> </p> <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p> <p> <b>Specifying where to start listing records</b> </p> <p>You can use the name and type elements to specify the resource record set that the list begins with:</p> <dl> <dt>If you do not specify Name or Type</dt> <dd> <p>The results begin with the first resource record set that the hosted zone contains.</p> </dd> <dt>If you specify Name but not Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>.</p> </dd> <dt>If you specify Type but not Name</dt> <dd> <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p> </dd> <dt>If you specify both Name and Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p> </dd> </dl> <p> <b>Resource record sets that are PENDING</b> </p> <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>, and that are not yet available on all Route 53 DNS servers.</p> <p> <b>Changing resource record sets</b> </p> <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a <code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.</p> <p> <b>Displaying the next page of results</b> </p> <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code> is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>, and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>",
  operationId: 'ListResourceRecordSets',
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
      Id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of the hosted zone that contains the resource record sets that you want to list.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description:
              "The first name in the lexicographic ordering of resource record sets that you want to list. If the specified record name doesn't exist, the results begin with the first resource record set that has a name greater than the value of <code>name</code>.",
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      type: z
        .enum([
          'SOA',
          'A',
          'TXT',
          'NS',
          'CNAME',
          'MX',
          'NAPTR',
          'PTR',
          'SRV',
          'SPF',
          'AAAA',
          'CAA',
          'DS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              '<p>The type of resource record set to begin the record listing from.</p> <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>NS</code> | <code>PTR</code> | <code>SOA</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <p>Values for alias resource record sets: </p> <ul> <li> <p> <b>API Gateway custom regional API or edge-optimized API</b>: A</p> </li> <li> <p> <b>CloudFront distribution</b>: A or AAAA</p> </li> <li> <p> <b>Elastic Beanstalk environment that has a regionalized subdomain</b>: A</p> </li> <li> <p> <b>Elastic Load Balancing load balancer</b>: A | AAAA</p> </li> <li> <p> <b>S3 bucket</b>: A</p> </li> <li> <p> <b>VPC interface VPC endpoint</b>: A</p> </li> <li> <p> <b>Another resource record set in this hosted zone:</b> The type of the resource record set that the alias references.</p> </li> </ul> <p>Constraint: Specifying <code>type</code> without specifying <code>name</code> returns an <code>InvalidInput</code> error.</p>',
            schema: {
              type: 'string',
              enum: [
                'SOA',
                'A',
                'TXT',
                'NS',
                'CNAME',
                'MX',
                'NAPTR',
                'PTR',
                'SRV',
                'SPF',
                'AAAA',
                'CAA',
                'DS',
              ],
            },
          },
        }),
      identifier: z
        .string()
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            description:
              ' <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type, specify the value of <code>NextRecordIdentifier</code> from the previous response to get the next resource record set that has the current DNS name and type.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than <code>maxitems</code> resource record sets, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of the <code>NextRecordName</code> and <code>NextRecordType</code> elements in the response identify the first resource record set in the next group of <code>maxitems</code> resource record sets.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      StartRecordName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'StartRecordName',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      StartRecordType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'StartRecordType',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      StartRecordIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'StartRecordIdentifier',
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
      content: { 'text/xml': { schema: ListResourceRecordSetsResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const post20130401TagsResourceTypeRoute = createRoute({
  method: 'post',
  path: '/2013-04-01/tags/{ResourceType}',
  description:
    '<p>Lists tags for up to 10 health checks or hosted zones.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>',
  operationId: 'ListTagsForResources',
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
      ResourceType: z
        .enum(['healthcheck', 'hostedzone'])
        .openapi({
          param: {
            name: 'ResourceType',
            in: 'path',
            required: true,
            description:
              '<p>The type of the resources.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>',
            schema: { type: 'string', enum: ['healthcheck', 'hostedzone'] },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ResourceIds: z
                .array(TagResourceIdSchema.and(z.any().openapi({ xml: { name: 'ResourceId' } })))
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.',
                }),
            })
            .openapi({ required: ['ResourceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourcesResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchHealthCheck',
      content: { 'text/xml': { schema: NoSuchHealthCheckSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    483: {
      description: 'PriorRequestNotComplete',
      content: { 'text/xml': { schema: PriorRequestNotCompleteSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'text/xml': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20130401TrafficpoliciesRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicies',
  description:
    '<p>Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account. Policies are listed in the order that they were created in. </p> <p>For information about how of deleting a traffic policy affects the response from <code>ListTrafficPolicies</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>',
  operationId: 'ListTrafficPolicies',
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
      trafficpolicyid: z
        .string()
        .min(1)
        .max(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyid',
            in: 'query',
            required: false,
            description:
              "<p>(Conditional) For your first request to <code>ListTrafficPolicies</code>, don't include the <code>TrafficPolicyIdMarker</code> parameter.</p> <p>If you have more traffic policies than the value of <code>MaxItems</code>, <code>ListTrafficPolicies</code> returns only the first <code>MaxItems</code> traffic policies. To get the next group of policies, submit another request to <code>ListTrafficPolicies</code>. For the value of <code>TrafficPolicyIdMarker</code>, specify the value of <code>TrafficPolicyIdMarker</code> that was returned in the previous response.</p>",
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than <code>MaxItems</code> traffic policies, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy that Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTrafficPoliciesResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})

export const get20130401TrafficpolicyinstancesRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicyinstances',
  description:
    "<p>Gets information about the traffic policy instances that you created by using the current Amazon Web Services account.</p> <note> <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>",
  operationId: 'ListTrafficPolicyInstances',
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
      hostedzoneid: z
        .string()
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'hostedzoneid',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>HostedZoneId</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      trafficpolicyinstancename: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancename',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      trafficpolicyinstancetype: z
        .enum([
          'SOA',
          'A',
          'TXT',
          'NS',
          'CNAME',
          'MX',
          'NAPTR',
          'PTR',
          'SRV',
          'SPF',
          'AAAA',
          'CAA',
          'DS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancetype',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: {
              type: 'string',
              enum: [
                'SOA',
                'A',
                'TXT',
                'NS',
                'CNAME',
                'MX',
                'NAPTR',
                'PTR',
                'SRV',
                'SPF',
                'AAAA',
                'CAA',
                'DS',
              ],
            },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a <code>ListTrafficPolicyInstances</code> request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTrafficPolicyInstancesResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
  },
})

export const get20130401TrafficpolicyinstancesHostedzoneIdRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicyinstances/hostedzone#id',
  description:
    "<p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>",
  operationId: 'ListTrafficPolicyInstancesByHostedZone',
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
      id: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            description:
              'The ID of the hosted zone that you want to list traffic policy instances for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      trafficpolicyinstancename: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancename',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      trafficpolicyinstancetype: z
        .enum([
          'SOA',
          'A',
          'TXT',
          'NS',
          'CNAME',
          'MX',
          'NAPTR',
          'PTR',
          'SRV',
          'SPF',
          'AAAA',
          'CAA',
          'DS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancetype',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: {
              type: 'string',
              enum: [
                'SOA',
                'A',
                'TXT',
                'NS',
                'CNAME',
                'MX',
                'NAPTR',
                'PTR',
                'SRV',
                'SPF',
                'AAAA',
                'CAA',
                'DS',
              ],
            },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTrafficPolicyInstancesByHostedZoneResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
    482: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
  },
})

export const get20130401TrafficpolicyinstancesTrafficpolicyIdVersionRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version',
  description:
    "<p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>",
  operationId: 'ListTrafficPolicyInstancesByPolicy',
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
      id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            description:
              'The ID of the traffic policy for which you want to list traffic policy instances.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description:
              'The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by <code>TrafficPolicyId</code>.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      hostedzoneid: z
        .string()
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'hostedzoneid',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request. </p> <p>For the value of <code>hostedzoneid</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      trafficpolicyinstancename: z
        .string()
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancename',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      trafficpolicyinstancetype: z
        .enum([
          'SOA',
          'A',
          'TXT',
          'NS',
          'CNAME',
          'MX',
          'NAPTR',
          'PTR',
          'SRV',
          'SPF',
          'AAAA',
          'CAA',
          'DS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyinstancetype',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>',
            schema: {
              type: 'string',
              enum: [
                'SOA',
                'A',
                'TXT',
                'NS',
                'CNAME',
                'MX',
                'NAPTR',
                'PTR',
                'SRV',
                'SPF',
                'AAAA',
                'CAA',
                'DS',
              ],
            },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTrafficPolicyInstancesByPolicyResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicyInstance',
      content: { 'text/xml': { schema: NoSuchTrafficPolicyInstanceSchema } },
    },
    482: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
  },
})

export const get20130401TrafficpoliciesIdVersionsRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/trafficpolicies/{Id}/versions',
  description:
    '<p>Gets information about all of the versions for a specified traffic policy.</p> <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>',
  operationId: 'ListTrafficPolicyVersions',
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
      Id: z
        .string()
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'Specify the value of <code>Id</code> of the traffic policy for which you want to list all versions.',
            schema: { type: 'string', minLength: 1, maxLength: 36 },
          },
        }),
    }),
    query: z.object({
      trafficpolicyversion: z
        .string()
        .max(4)
        .exactOptional()
        .openapi({
          param: {
            name: 'trafficpolicyversion',
            in: 'query',
            required: false,
            description:
              "<p>For your first request to <code>ListTrafficPolicyVersions</code>, don't include the <code>TrafficPolicyVersionMarker</code> parameter.</p> <p>If you have more traffic policy versions than the value of <code>MaxItems</code>, <code>ListTrafficPolicyVersions</code> returns only the first group of <code>MaxItems</code> versions. To get more traffic policy versions, submit another <code>ListTrafficPolicyVersions</code> request. For the value of <code>TrafficPolicyVersionMarker</code>, specify the value of <code>TrafficPolicyVersionMarker</code> in the previous response.</p>",
            schema: { type: 'string', maxLength: 4 },
          },
        }),
      maxitems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxitems',
            in: 'query',
            required: false,
            description:
              'The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than <code>MaxItems</code> versions, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of the <code>TrafficPolicyVersionMarker</code> element is the ID of the first version that Route 53 will return if you submit another request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTrafficPolicyVersionsResponseSchema } },
    },
    480: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
    481: {
      description: 'NoSuchTrafficPolicy',
      content: { 'text/xml': { schema: NoSuchTrafficPolicySchema } },
    },
  },
})

export const get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeRoute = createRoute({
  method: 'get',
  path: '/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype',
  description:
    '<p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p> <p>This call only supports querying public hosted zones.</p> <note> <p>The <code>TestDnsAnswer </code> returns information similar to what you would expect from the answer section of the <code>dig</code> command. Therefore, if you query for the name servers of a subdomain that point to the parent name servers, those will not be returned.</p> </note>',
  operationId: 'TestDNSAnswer',
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
      hostedzoneid: z
        .string()
        .max(32)
        .openapi({
          param: {
            name: 'hostedzoneid',
            in: 'query',
            required: true,
            description:
              'The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.',
            schema: { type: 'string', maxLength: 32 },
          },
        }),
      recordname: z
        .string()
        .max(1024)
        .openapi({
          param: {
            name: 'recordname',
            in: 'query',
            required: true,
            description:
              'The name of the resource record set that you want Amazon Route 53 to simulate a query for.',
            schema: { type: 'string', maxLength: 1024 },
          },
        }),
      recordtype: z
        .enum([
          'SOA',
          'A',
          'TXT',
          'NS',
          'CNAME',
          'MX',
          'NAPTR',
          'PTR',
          'SRV',
          'SPF',
          'AAAA',
          'CAA',
          'DS',
        ])
        .openapi({
          param: {
            name: 'recordtype',
            in: 'query',
            required: true,
            description: 'The type of the resource record set.',
            schema: {
              type: 'string',
              enum: [
                'SOA',
                'A',
                'TXT',
                'NS',
                'CNAME',
                'MX',
                'NAPTR',
                'PTR',
                'SRV',
                'SPF',
                'AAAA',
                'CAA',
                'DS',
              ],
            },
          },
        }),
      resolverip: z
        .string()
        .regex(
          /(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)/,
        )
        .max(45)
        .exactOptional()
        .openapi({
          param: {
            name: 'resolverip',
            in: 'query',
            required: false,
            description:
              'If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, <code>TestDnsAnswer</code> uses the IP address of a DNS resolver in the Amazon Web Services US East (N. Virginia) Region (<code>us-east-1</code>).',
            schema: {
              type: 'string',
              pattern:
                '(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)',
              maxLength: 45,
            },
          },
        }),
      edns0clientsubnetip: z
        .string()
        .regex(
          /(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)/,
        )
        .max(45)
        .exactOptional()
        .openapi({
          param: {
            name: 'edns0clientsubnetip',
            in: 'query',
            required: false,
            description:
              'If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, <code>192.0.2.44</code> or <code>2001:db8:85a3::8a2e:370:7334</code>.',
            schema: {
              type: 'string',
              pattern:
                '(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)',
              maxLength: 45,
            },
          },
        }),
      edns0clientsubnetmask: z
        .string()
        .min(0)
        .max(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'edns0clientsubnetmask',
            in: 'query',
            required: false,
            description:
              '<p>If you specify an IP address for <code>edns0clientsubnetip</code>, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify <code>192.0.2.44</code> for <code>edns0clientsubnetip</code> and <code>24</code> for <code>edns0clientsubnetmask</code>, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses.</p> <p>The range of valid values depends on whether <code>edns0clientsubnetip</code> is an IPv4 or an IPv6 address:</p> <ul> <li> <p> <b>IPv4</b>: Specify a value between 0 and 32</p> </li> <li> <p> <b>IPv6</b>: Specify a value between 0 and 128</p> </li> </ul>',
            schema: { type: 'string', minLength: 0, maxLength: 3 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: TestDNSAnswerResponseSchema } },
    },
    480: {
      description: 'NoSuchHostedZone',
      content: { 'text/xml': { schema: NoSuchHostedZoneSchema } },
    },
    481: { description: 'InvalidInput', content: { 'text/xml': { schema: InvalidInputSchema } } },
  },
})
