import { createRoute, z } from '@hono/zod-openapi'

const InvalidArgumentSchema = z.any().openapi('InvalidArgument')

const NoSuchDistributionSchema = z.any().openapi('NoSuchDistribution')

const TooManyDistributionCNAMEsSchema = z.any().openapi('TooManyDistributionCNAMEs')

const IllegalUpdateSchema = z.any().openapi('IllegalUpdate')

const AccessDeniedSchema = z.any().openapi('AccessDenied')

const StringSchema = z.string().openapi('String')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const KeyPairIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'KeyPairId' } })))
  .openapi('KeyPairIdList')

const KeyPairIdsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of key pair identifiers in the list.' }),
    ),
    Items: KeyPairIdListSchema.and(
      z.any().openapi({ description: 'A list of CloudFront key pair identifiers.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Quantity'], description: 'A list of CloudFront key pair identifiers.' })
  .openapi('KeyPairIds')

const SignerSchema = z
  .object({
    AwsAccountNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Web Services account number that contains active CloudFront key pairs that CloudFront can use to verify the signatures of signed URLs and signed cookies. If the Amazon Web Services account that owns the key pairs is the same account that owns the CloudFront distribution, the value of this field is <code>self</code>.',
        }),
    ).exactOptional(),
    KeyPairIds: KeyPairIdsSchema.and(
      z.any().openapi({ description: 'A list of CloudFront key pair identifiers.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
    required: [],
  })
  .openapi('Signer')

const SignerListSchema = z
  .array(SignerSchema.and(z.any().openapi({ xml: { name: 'Signer' } })))
  .openapi('SignerList')

const ActiveTrustedSignersSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of Amazon Web Services accounts in the list.' }),
    ),
    Items: SignerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon Web Services accounts and the identifiers of active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled', 'Quantity'],
    description:
      'A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
  })
  .openapi('ActiveTrustedSigners')

const KGKeyPairIdsSchema = z
  .object({
    KeyGroupId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the key group that contains the public keys.' }),
    ).exactOptional(),
    KeyPairIds: KeyPairIdsSchema.exactOptional(),
  })
  .openapi({
    description:
      'A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
    required: [],
  })
  .openapi('KGKeyPairIds')

const KGKeyPairIdsListSchema = z
  .array(KGKeyPairIdsSchema.and(z.any().openapi({ xml: { name: 'KeyGroup' } })))
  .openapi('KGKeyPairIdsList')

const ActiveTrustedKeyGroupsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field is <code>true</code> if any of the key groups have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of key groups in the list.' }),
    ),
    Items: KGKeyPairIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key groups, including the identifiers of the public keys in each key group that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled', 'Quantity'],
    description:
      'A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.',
  })
  .openapi('ActiveTrustedKeyGroups')

const AliasListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'CNAME' } })))
  .openapi('AliasList')

const AliasesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of CNAME aliases, if any, that you want to associate with this distribution.',
        }),
    ),
    Items: AliasListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.',
  })
  .openapi('Aliases')

const SensitiveStringTypeSchema = z.string().openapi('SensitiveStringType')

const OriginCustomHeaderSchema = z
  .object({
    HeaderName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a header that you want CloudFront to send to your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i> Amazon CloudFront Developer Guide</i>.',
        }),
    ),
    HeaderValue: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the header that you specified in the <code>HeaderName</code> field.',
        }),
    ),
  })
  .openapi({
    required: ['HeaderName', 'HeaderValue'],
    description:
      'A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.',
  })
  .openapi('OriginCustomHeader')

const OriginCustomHeadersListSchema = z
  .array(OriginCustomHeaderSchema.and(z.any().openapi({ xml: { name: 'OriginCustomHeader' } })))
  .openapi('OriginCustomHeadersList')

const CustomHeadersSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of custom headers, if any, for this distribution.' }),
    ),
    Items: OriginCustomHeadersListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Optional</b>: A list that contains one <code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description: 'A complex type that contains the list of Custom Headers for each origin.',
  })
  .openapi('CustomHeaders')

const S3OriginConfigSchema = z
  .object({
    OriginAccessIdentity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can <i>only</i> access objects in an Amazon S3 bucket through CloudFront. The format of the value is:</p> <p>origin-access-identity/cloudfront/<i>ID-of-origin-access-identity</i> </p> <p>where <code> <i>ID-of-origin-access-identity</i> </code> is the value that CloudFront returned in the <code>ID</code> element when you created the origin access identity.</p> <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p> <p>To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.</p> <p>To replace the origin access identity, update the distribution configuration and specify the new origin access identity.</p> <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['OriginAccessIdentity'],
    description:
      'A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead.',
  })
  .openapi('S3OriginConfig')

const OriginProtocolPolicySchema = z
  .enum(['http-only', 'match-viewer', 'https-only'])
  .openapi('OriginProtocolPolicy')

const SslProtocolSchema = z.enum(['SSLv3', 'TLSv1', 'TLSv1.1', 'TLSv1.2']).openapi('SslProtocol')

const SslProtocolsListSchema = z
  .array(SslProtocolSchema.and(z.any().openapi({ xml: { name: 'SslProtocol' } })))
  .openapi('SslProtocolsList')

const OriginSslProtocolsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.',
        }),
    ),
    Items: SslProtocolsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains allowed SSL/TLS protocols for this distribution.',
        }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      'A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.',
  })
  .openapi('OriginSslProtocols')

const CustomOriginConfigSchema = z
  .object({
    HTTPPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.',
        }),
    ),
    HTTPSPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.',
        }),
    ),
    OriginProtocolPolicy: OriginProtocolPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:</p> <ul> <li> <p> <code>http-only</code> – CloudFront always uses HTTP to connect to the origin.</p> </li> <li> <p> <code>match-viewer</code> – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.</p> </li> <li> <p> <code>https-only</code> – CloudFront always uses HTTPS to connect to the origin.</p> </li> </ul>',
        }),
    ),
    OriginSslProtocols: OriginSslProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>, <code>TLSv1.1</code>, and <code>TLSv1.2</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols">Minimum Origin SSL Protocol</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    OriginReadTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don\'t specify otherwise) is 30 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    OriginKeepaliveTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don\'t specify otherwise) is 5 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout">Origin Keep-alive Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HTTPPort', 'HTTPSPort', 'OriginProtocolPolicy'],
    description:
      'A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.',
  })
  .openapi('CustomOriginConfig')

const OriginShieldRegionSchema = z
  .string()
  .regex(/[a-z]{2}-[a-z]+-\d/)
  .min(1)
  .max(32)
  .openapi('OriginShieldRegion')

const OriginShieldSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A flag that specifies whether Origin Shield is enabled.</p> <p>When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.</p>",
        }),
    ),
    OriginShieldRegion: OriginShieldRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services Region for Origin Shield.</p> <p>Specify the Amazon Web Services Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as <code>us-east-2</code>.</p> <p>When you enable CloudFront Origin Shield, you must specify the Amazon Web Services Region for Origin Shield. For the list of Amazon Web Services Regions that you can specify, and for help choosing the best Region for your origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region">Choosing the Amazon Web Services Region for Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      '<p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('OriginShield')

const OriginSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for the origin. This value must be unique within the distribution.</p> <p>Use this value to specify the <code>TargetOriginId</code> in a <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</p>',
        }),
    ),
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain name for the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    OriginPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath">Origin Path</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    CustomHeaders: CustomHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html">Adding Custom Headers to Origin Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    S3OriginConfig: S3OriginConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the <code>CustomOriginConfig</code> type instead.',
        }),
    ).exactOptional(),
    CustomOriginConfig: CustomOriginConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.',
        }),
    ).exactOptional(),
    ConnectionAttempts: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don\'t specify otherwise) is 3.</p> <p>For a custom origin (including an Amazon S3 bucket that\'s configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout">Origin Response Timeout</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts">Origin Connection Attempts</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ConnectionTimeout: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don\'t specify otherwise) is 10 seconds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout">Origin Connection Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    OriginShield: OriginShieldSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    OriginAccessControlId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of an origin access control for this origin.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'DomainName'],
    description:
      '<p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>',
  })
  .openapi('Origin')

const OriginListSchema = z
  .array(OriginSchema.and(z.any().openapi({ xml: { name: 'Origin' } })))
  .min(1)
  .openapi('OriginList')

const OriginsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of origins for this distribution.' }),
    ),
    Items: OriginListSchema.and(z.any().openapi({ description: 'A list of origins.' })),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description: 'Contains information about the origins for this distribution.',
  })
  .openapi('Origins')

const StatusCodeListSchema = z
  .array(IntegerSchema.and(z.any().openapi({ xml: { name: 'StatusCode' } })))
  .min(1)
  .openapi({ description: 'List of status codes for origin failover.' })
  .openapi('StatusCodeList')

const StatusCodesSchema = z
  .object({
    Quantity: IntegerSchema.and(z.any().openapi({ description: 'The number of status codes.' })),
    Items: StatusCodeListSchema.and(
      z.any().openapi({ description: 'The items (status codes) for an origin group.' }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      'A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.',
  })
  .openapi('StatusCodes')

const OriginGroupFailoverCriteriaSchema = z
  .object({
    StatusCodes: StatusCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.',
        }),
    ),
  })
  .openapi({
    required: ['StatusCodes'],
    description:
      'A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.',
  })
  .openapi('OriginGroupFailoverCriteria')

const OriginGroupMemberSchema = z
  .object({
    OriginId: StringSchema.and(
      z.any().openapi({ description: 'The ID for an origin in an origin group.' }),
    ),
  })
  .openapi({ required: ['OriginId'], description: 'An origin in an origin group.' })
  .openapi('OriginGroupMember')

const OriginGroupMemberListSchema = z
  .array(OriginGroupMemberSchema.and(z.any().openapi({ xml: { name: 'OriginGroupMember' } })))
  .length(2)
  .openapi({ description: 'List of origins in an origin group.' })
  .openapi('OriginGroupMemberList')

const OriginGroupMembersSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of origins in an origin group.' }),
    ),
    Items: OriginGroupMemberListSchema.and(
      z.any().openapi({ description: 'Items (origins) in an origin group.' }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description: 'A complex data type for the origins included in an origin group.',
  })
  .openapi('OriginGroupMembers')

const OriginGroupSchema = z
  .object({
    Id: StringSchema.and(z.any().openapi({ description: "The origin group's ID." })),
    FailoverCriteria: OriginGroupFailoverCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the failover criteria for an origin group.',
        }),
    ),
    Members: OriginGroupMembersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the origins in an origin group.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'FailoverCriteria', 'Members'],
    description:
      "An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.",
  })
  .openapi('OriginGroup')

const OriginGroupListSchema = z
  .array(OriginGroupSchema.and(z.any().openapi({ xml: { name: 'OriginGroup' } })))
  .openapi({ description: 'List of origin groups for a distribution.' })
  .openapi('OriginGroupList')

const OriginGroupsSchema = z
  .object({
    Quantity: IntegerSchema.and(z.any().openapi({ description: 'The number of origin groups.' })),
    Items: OriginGroupListSchema.and(
      z.any().openapi({ description: 'The items (origin groups) in a distribution.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description: 'A complex data type for the origin groups specified for a distribution.',
  })
  .openapi('OriginGroups')

const AwsAccountNumberListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AwsAccountNumber' } })))
  .openapi('AwsAccountNumberList')

const TrustedSignersSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field is <code>true</code> if any of the Amazon Web Services accounts in the list are configured as trusted signers. If not, this field is <code>false</code>.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of Amazon Web Services accounts in the list.' }),
    ),
    Items: AwsAccountNumberListSchema.and(
      z.any().openapi({ description: 'A list of Amazon Web Services account identifiers.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled', 'Quantity'],
    description:
      'A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.',
  })
  .openapi('TrustedSigners')

const TrustedKeyGroupIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'KeyGroup' } })))
  .openapi('TrustedKeyGroupIdList')

const TrustedKeyGroupsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field is <code>true</code> if any of the key groups in the list have public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. If not, this field is <code>false</code>.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of key groups in the list.' }),
    ),
    Items: TrustedKeyGroupIdListSchema.and(
      z.any().openapi({ description: 'A list of key groups identifiers.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled', 'Quantity'],
    description:
      'A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.',
  })
  .openapi('TrustedKeyGroups')

const ViewerProtocolPolicySchema = z
  .enum(['allow-all', 'https-only', 'redirect-to-https'])
  .openapi('ViewerProtocolPolicy')

const MethodSchema = z
  .enum(['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE'])
  .openapi('Method')

const MethodsListSchema = z
  .array(MethodSchema.and(z.any().openapi({ xml: { name: 'Method' } })))
  .openapi('MethodsList')

const CachedMethodsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of HTTP methods for which you want CloudFront to cache responses. Valid values are <code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests) and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests).',
        }),
    ),
    Items: MethodsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the HTTP methods that you want CloudFront to cache responses to.',
        }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      '<p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>',
  })
  .openapi('CachedMethods')

const AllowedMethodsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests).',
        }),
    ),
    Items: MethodsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.',
        }),
    ),
    CachedMethods: CachedMethodsSchema.exactOptional(),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      "<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>",
  })
  .openapi('AllowedMethods')

const LambdaFunctionARNSchema = z.string().openapi('LambdaFunctionARN')

const EventTypeSchema = z
  .enum(['viewer-request', 'viewer-response', 'origin-request', 'origin-response'])
  .openapi('EventType')

const LambdaFunctionAssociationSchema = z
  .object({
    LambdaFunctionARN: LambdaFunctionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.",
        }),
    ),
    EventType: EventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</p> <ul> <li> <p> <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.</p> </li> <li> <p> <code>origin-request</code>: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.</p> <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p> </li> </ul>",
        }),
    ),
    IncludeBody: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LambdaFunctionARN', 'EventType'],
    description: 'A complex type that contains a Lambda@Edge function association.',
  })
  .openapi('LambdaFunctionAssociation')

const LambdaFunctionAssociationListSchema = z
  .array(
    LambdaFunctionAssociationSchema.and(
      z.any().openapi({ xml: { name: 'LambdaFunctionAssociation' } }),
    ),
  )
  .openapi('LambdaFunctionAssociationList')

const LambdaFunctionAssociationsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of Lambda@Edge function associations for this cache behavior.',
        }),
    ),
    Items: LambdaFunctionAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      "<p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p>",
  })
  .openapi('LambdaFunctionAssociations')

const FunctionARNSchema = z
  .string()
  .regex(/arn:aws:cloudfront::[0-9]{12}:function\/[a-zA-Z0-9-_]{1,64}$/)
  .max(108)
  .openapi('FunctionARN')

const FunctionAssociationSchema = z
  .object({
    FunctionARN: FunctionARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the function.' }),
    ),
    EventType: EventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event type of the function, either <code>viewer-request</code> or <code>viewer-response</code>. You cannot use origin-facing event types (<code>origin-request</code> and <code>origin-response</code>) with a CloudFront function.',
        }),
    ),
  })
  .openapi({
    required: ['FunctionARN', 'EventType'],
    description:
      'A CloudFront function that is associated with a cache behavior in a CloudFront distribution.',
  })
  .openapi('FunctionAssociation')

const FunctionAssociationListSchema = z
  .array(FunctionAssociationSchema.and(z.any().openapi({ xml: { name: 'FunctionAssociation' } })))
  .openapi('FunctionAssociationList')

const FunctionAssociationsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of CloudFront functions in the list.' }),
    ),
    Items: FunctionAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.',
  })
  .openapi('FunctionAssociations')

const ItemSelectionSchema = z.enum(['none', 'whitelist', 'all']).openapi('ItemSelection')

const CookieNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Name' } })))
  .openapi('CookieNameList')

const CookieNamesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of cookie names in the <code>Items</code> list.' }),
    ),
    Items: CookieNameListSchema.and(
      z.any().openapi({ description: 'A list of cookie names.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Quantity'], description: 'Contains a list of cookie names.' })
  .openapi('CookieNames')

const CookiePreferenceSchema = z
  .object({
    Forward: ItemSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p> <p>Amazon S3 doesn\'t process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the <code>Forward</code> element.</p>',
        }),
    ),
    WhitelistedNames: CookieNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Required if you specify <code>whitelist</code> for the value of <code>Forward</code>. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.</p> <p>If you specify <code>all</code> or <code>none</code> for the value of <code>Forward</code>, omit <code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from <code>whitelist</code> to <code>all</code> or <code>none</code> and you don\'t delete the <code>WhitelistedNames</code> element and its child elements, CloudFront deletes them automatically.</p> <p>For the current limit on the number of cookie names that you can whitelist for each cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront"> CloudFront Limits</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Forward'],
    description:
      '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('CookiePreference')

const HeaderListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Name' } })))
  .openapi('HeaderList')

const HeadersSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of header names in the <code>Items</code> list.' }),
    ),
    Items: HeaderListSchema.and(
      z.any().openapi({ description: 'A list of HTTP header names.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Quantity'], description: 'Contains a list of HTTP header names.' })
  .openapi('Headers')

const QueryStringCacheKeysListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Name' } })))
  .openapi('QueryStringCacheKeysList')

const QueryStringCacheKeysSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of <code>whitelisted</code> query string parameters for a cache behavior.',
        }),
    ),
    Items: QueryStringCacheKeysListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains the query string parameters that you want CloudFront to use as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit <code>Items</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p>',
  })
  .openapi('QueryStringCacheKeys')

const ForwardedValuesSchema = z
  .object({
    QueryString: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of <code>QueryString</code> and on the values that you specify for <code>QueryStringCacheKeys</code>, if any:</p> <p>If you specify true for <code>QueryString</code> and you don\'t specify any values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.</p> <p>If you specify true for <code>QueryString</code> and you specify one or more values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.</p> <p>If you specify false for <code>QueryString</code>, CloudFront doesn\'t forward any query string parameters to the origin, and doesn\'t cache based on query string parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring CloudFront to Cache Based on Query String Parameters</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    Cookies: CookiePreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    Headers: HeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include headers in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    QueryStringCacheKeys: QueryStringCacheKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueryString', 'Cookies'],
    description:
      '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>',
  })
  .openapi('ForwardedValues')

const LongSchema = z.int().openapi('Long')

const DefaultCacheBehaviorSchema = z
  .object({
    TargetOriginId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they use the default cache behavior.',
        }),
    ),
    TrustedSigners: TrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer\'s Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    TrustedKeyGroups: TrustedKeyGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ViewerProtocolPolicy: ViewerProtocolPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects\' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>',
        }),
    ),
    AllowedMethods: AllowedMethodsSchema.exactOptional(),
    SmoothStreaming: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.',
        }),
    ).exactOptional(),
    Compress: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    LambdaFunctionAssociations: LambdaFunctionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.',
        }),
    ).exactOptional(),
    FunctionAssociations: FunctionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.',
        }),
    ).exactOptional(),
    FieldLevelEncryptionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.',
        }),
    ).exactOptional(),
    RealtimeLogConfigArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    CachePolicyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>',
        }),
    ).exactOptional(),
    OriginRequestPolicyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    ResponseHeadersPolicyId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for a response headers policy.' }),
    ).exactOptional(),
    ForwardedValues: ForwardedValuesSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>',
        }),
    ).exactOptional(),
    MinTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>',
        }),
    ).exactOptional(),
    DefaultTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    MaxTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetOriginId', 'ViewerProtocolPolicy'],
    description:
      "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
  })
  .openapi('DefaultCacheBehavior')

const CacheBehaviorSchema = z
  .object({
    PathPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.</p> <note> <p>You can optionally include a slash (<code>/</code>) at the beginning of the path pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without the leading <code>/</code>.</p> </note> <p>The path pattern for the default cache behavior is <code>*</code> and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    TargetOriginId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they match this cache behavior.',
        }),
    ),
    TrustedSigners: TrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <p>A list of Amazon Web Services account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer\'s Amazon Web Services account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    TrustedKeyGroups: TrustedKeyGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</p> <p>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    ViewerProtocolPolicy: ViewerProtocolPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</p> <ul> <li> <p> <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p> </li> <li> <p> <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.</p> </li> <li> <p> <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).</p> </li> </ul> <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects\' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note>',
        }),
    ),
    AllowedMethods: AllowedMethodsSchema.exactOptional(),
    SmoothStreaming: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.',
        }),
    ).exactOptional(),
    Compress: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    LambdaFunctionAssociations: LambdaFunctionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.',
        }),
    ).exactOptional(),
    FunctionAssociations: FunctionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.',
        }),
    ).exactOptional(),
    FieldLevelEncryptionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.',
        }),
    ).exactOptional(),
    RealtimeLogConfigArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    CachePolicyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the cache policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p>',
        }),
    ).exactOptional(),
    OriginRequestPolicyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
    ResponseHeadersPolicyId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for a response headers policy.' }),
    ).exactOptional(),
    ForwardedValues: ForwardedValuesSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>',
        }),
    ).exactOptional(),
    MinTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html"> Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>',
        }),
    ).exactOptional(),
    DefaultTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    MaxTTL: LongSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PathPattern', 'TargetOriginId', 'ViewerProtocolPolicy'],
    description:
      '<p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don\'t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don\'t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('CacheBehavior')

const CacheBehaviorListSchema = z
  .array(CacheBehaviorSchema.and(z.any().openapi({ xml: { name: 'CacheBehavior' } })))
  .openapi('CacheBehaviorList')

const CacheBehaviorsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of cache behaviors for this distribution.' }),
    ),
    Items: CacheBehaviorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional: A complex type that contains cache behaviors for this distribution. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description: 'A complex type that contains zero or more <code>CacheBehavior</code> elements.',
  })
  .openapi('CacheBehaviors')

const CustomErrorResponseSchema = z
  .object({
    ErrorCode: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP status code for which you want to specify a custom error page and/or a caching duration.',
        }),
    ),
    ResponsePagePath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by <code>ErrorCode</code>, for example, <code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:</p> <ul> <li> <p>The value of <code>PathPattern</code> matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, <code>/4xx-errors/*</code>.</p> </li> <li> <p>The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code> element for the origin that contains your custom error pages.</p> </li> </ul> <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a value for <code>ResponseCode</code>.</p> <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.</p>",
        }),
    ).exactOptional(),
    ResponseCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:</p> <ul> <li> <p>Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute <code>200</code>, the response typically won't be intercepted.</p> </li> <li> <p>If you don't care about distinguishing among different client errors or server errors, you can specify <code>400</code> or <code>500</code> as the <code>ResponseCode</code> for all 4xx or 5xx errors.</p> </li> <li> <p>You might want to return a <code>200</code> status code (OK) and static website so your customers don't know that your website is down.</p> </li> </ul> <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value for <code>ResponsePagePath</code>.</p>",
        }),
    ).exactOptional(),
    ErrorCachingMinTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ErrorCode'],
    description:
      '<p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('CustomErrorResponse')

const CustomErrorResponseListSchema = z
  .array(CustomErrorResponseSchema.and(z.any().openapi({ xml: { name: 'CustomErrorResponse' } })))
  .openapi('CustomErrorResponseList')

const CustomErrorResponsesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of HTTP status codes for which you want to specify a custom error page and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.',
        }),
    ),
    Items: CustomErrorResponseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP status code for which you want to specify a custom error page and/or a caching duration. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      '<p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('CustomErrorResponses')

const CommentTypeSchema = z.string().openapi('CommentType')

const LoggingConfigSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty <code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code>, <code>prefix</code>, and <code>IncludeCookies</code>, the values are automatically deleted.",
        }),
    ),
    IncludeCookies: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether you want CloudFront to include cookies in access logs, specify <code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify <code>false</code> for <code>IncludeCookies</code>.",
        }),
    ),
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket to store the access logs in, for example, <code>myawslogbucket.s3.amazonaws.com</code>.',
        }),
    ),
    Prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An optional string that you want CloudFront to prefix to the access log <code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.",
        }),
    ),
  })
  .openapi({
    required: ['Enabled', 'IncludeCookies', 'Bucket', 'Prefix'],
    description:
      'A complex type that controls whether access logs are written for the distribution.',
  })
  .openapi('LoggingConfig')

const PriceClassSchema = z
  .enum(['PriceClass_100', 'PriceClass_200', 'PriceClass_All'])
  .openapi('PriceClass')

const SSLSupportMethodSchema = z.enum(['sni-only', 'vip', 'static-ip']).openapi('SSLSupportMethod')

const MinimumProtocolVersionSchema = z
  .enum([
    'SSLv3',
    'TLSv1',
    'TLSv1_2016',
    'TLSv1.1_2016',
    'TLSv1.2_2018',
    'TLSv1.2_2019',
    'TLSv1.2_2021',
  ])
  .openapi('MinimumProtocolVersion')

const CertificateSourceSchema = z.enum(['cloudfront', 'iam', 'acm']).openapi('CertificateSource')

const ViewerCertificateSchema = z
  .object({
    CloudFrontDefaultCertificate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, set this field to <code>true</code>.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), set this field to <code>false</code> and specify values for the following fields:</p> <ul> <li> <p> <code>ACMCertificateArn</code> or <code>IAMCertificateId</code> (specify a value for one, not both)</p> </li> <li> <p> <code>MinimumProtocolVersion</code> </p> </li> <li> <p> <code>SSLSupportMethod</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    IAMCertificateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>, provide the ID of the IAM certificate.</p> <p>If you specify an IAM certificate ID, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. </p>',
        }),
    ).exactOptional(),
    ACMCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a>, provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (<code>us-east-1</code>).</p> <p>If you specify an ACM certificate ARN, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>.</p>',
        }),
    ).exactOptional(),
    SSLSupportMethod: SSLSupportMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.</p> <ul> <li> <p> <code>sni-only</code> – The distribution accepts HTTPS connections from only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a>. This is recommended. Most browsers and clients support SNI.</p> </li> <li> <p> <code>vip</code> – The distribution accepts HTTPS connections from all viewers including those that don\'t support SNI. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> <li> <p> <code>static-ip</code> - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support Center</a>.</p> </li> </ul> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, don\'t set a value for this field.</p>',
        }),
    ).exactOptional(),
    MinimumProtocolVersion: MinimumProtocolVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:</p> <ul> <li> <p>The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.</p> </li> <li> <p>The ciphers that CloudFront can use to encrypt the content that it returns to viewers.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">Supported Protocols and Ciphers Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <note> <p>On the CloudFront console, this setting is called <b>Security Policy</b>.</p> </note> <p>When you\'re using SNI only (you set <code>SSLSupportMethod</code> to <code>sni-only</code>), you must specify <code>TLSv1</code> or higher.</p> <p>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code> (you set <code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically sets the security policy to <code>TLSv1</code> regardless of the value that you set here.</p>',
        }),
    ).exactOptional(),
    Certificate: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CertificateSource: CertificateSourceSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>This field is deprecated. Use one of the following fields instead:</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> <li> <p> <code>CloudFrontDefaultCertificate</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A complex type that determines the distribution\'s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn\'t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don\'t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don\'t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('ViewerCertificate')

const GeoRestrictionTypeSchema = z
  .enum(['blacklist', 'whitelist', 'none'])
  .openapi('GeoRestrictionType')

const LocationListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Location' } })))
  .openapi('LocationList')

const GeoRestrictionSchema = z
  .object({
    RestrictionType: GeoRestrictionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The method that you want to use to restrict distribution of your content by country:</p> <ul> <li> <p> <code>none</code>: No geo restriction is enabled, meaning access to content is not restricted by client geo location.</p> </li> <li> <p> <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.</p> </li> <li> <p> <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</p> </li> </ul>",
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When geo restriction is <code>enabled</code>, this is the number of countries in your <code>whitelist</code> or <code>blacklist</code>. Otherwise, when it is not enabled, <code>Quantity</code> is <code>0</code>, and you can omit <code>Items</code>.',
        }),
    ),
    Items: LocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that contains a <code>Location</code> element for each country in which you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute your content (<code>blacklist</code>).</p> <p>The <code>Location</code> element is a two-letter, uppercase country code for a country that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one <code>Location</code> element for each country.</p> <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code> code on the <i>International Organization for Standardization</i> website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RestrictionType', 'Quantity'],
    description:
      'A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. ',
  })
  .openapi('GeoRestriction')

const RestrictionsSchema = z
  .object({
    GeoRestriction: GeoRestrictionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.',
        }),
    ),
  })
  .openapi({
    required: ['GeoRestriction'],
    description:
      'A complex type that identifies ways in which you want to restrict distribution of your content.',
  })
  .openapi('Restrictions')

const HttpVersionSchema = z.enum(['http1.1', 'http2', 'http3', 'http2and3']).openapi('HttpVersion')

const DistributionConfigSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
        }),
    ),
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.',
        }),
    ).exactOptional(),
    DefaultRootObject: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The object that you want CloudFront to request from your origin (for example, <code>index.html</code>) when a viewer requests the root URL for your distribution (<code>https://www.example.com</code>) instead of an object in your distribution (<code>https://www.example.com/product-description.html</code>). Specifying a default root object avoids exposing the contents of your distribution.</p> <p>Specify only the object name, for example, <code>index.html</code>. Don\'t add a <code>/</code> before the object name.</p> <p>If you don\'t want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Origins: OriginsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about origins for this distribution.',
        }),
    ),
    OriginGroups: OriginGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about origin groups for this distribution.',
        }),
    ).exactOptional(),
    DefaultCacheBehavior: DefaultCacheBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
        }),
    ),
    CacheBehaviors: CacheBehaviorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains zero or more <code>CacheBehavior</code> elements.',
        }),
    ).exactOptional(),
    CustomErrorResponses: CustomErrorResponsesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Comment: CommentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the distribution. The comment cannot be longer than 128 characters.',
        }),
    ),
    Logging: LoggingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    PriceClass: PriceClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.</p>',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'From this field, you can enable or disable the selected distribution.',
        }),
    ),
    ViewerCertificate: ViewerCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.",
        }),
    ).exactOptional(),
    Restrictions: RestrictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that identifies ways in which you want to restrict distribution of your content.',
        }),
    ).exactOptional(),
    WebACLId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    HttpVersion: HttpVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) Specify the maximum HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don\'t support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).</p> <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>',
        }),
    ).exactOptional(),
    IsIPV6Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.</p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html\">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>",
        }),
    ).exactOptional(),
    ContinuousDeploymentPolicyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.',
        }),
    ).exactOptional(),
    Staging: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CallerReference', 'Origins', 'DefaultCacheBehavior', 'Comment', 'Enabled'],
    description: 'A distribution configuration.',
  })
  .openapi('DistributionConfig')

const ICPRecordalStatusSchema = z
  .enum(['APPROVED', 'SUSPENDED', 'PENDING'])
  .openapi('ICPRecordalStatus')

const AliasICPRecordalSchema = z
  .object({
    CNAME: StringSchema.and(
      z.any().openapi({ description: 'A domain name associated with a distribution.' }),
    ).exactOptional(),
    ICPRecordalStatus: ICPRecordalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to APPROVED for all CNAMEs (aliases) in regions outside of China.</p> <p>The status values returned are the following:</p> <ul> <li> <p> <b>APPROVED</b> indicates that the associated CNAME has a valid ICP recordal number. Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as APPROVED, that is, valid to use with China region, a CNAME must have one ICP recordal number associated with it.</p> </li> <li> <p> <b>SUSPENDED</b> indicates that the associated CNAME does not have a valid ICP recordal number.</p> </li> <li> <p> <b>PENDING</b> indicates that CloudFront can't determine the ICP recordal status of the CNAME associated with the distribution because there was an error in trying to determine the status. You can try again to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they\'ve added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can\'t configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>',
    required: [],
  })
  .openapi('AliasICPRecordal')

const AliasICPRecordalsSchema = z
  .array(AliasICPRecordalSchema.and(z.any().openapi({ xml: { name: 'AliasICPRecordal' } })))
  .openapi('AliasICPRecordals')

const DistributionSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The distribution's identifier. For example: <code>E1U5RQF7T870K0</code>.",
        }),
    ),
    ARN: StringSchema.and(
      z.any().openapi({ description: "The distribution's Amazon Resource Name (ARN)." }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The distribution's status. When the status is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge locations.",
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the distribution was last modified.' }),
    ),
    InProgressInvalidationBatches: IntegerSchema.and(
      z.any().openapi({ description: 'The number of invalidation batches currently in progress.' }),
    ),
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The distribution's CloudFront domain name. For example: <code>d111111abcdef8.cloudfront.net</code>.",
        }),
    ),
    ActiveTrustedSigners: ActiveTrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</p> </important> <p>This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies.</p>',
        }),
    ).exactOptional(),
    ActiveTrustedKeyGroups: ActiveTrustedKeyGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies.',
        }),
    ).exactOptional(),
    DistributionConfig: DistributionConfigSchema.and(
      z.any().openapi({ description: "The distribution's configuration." }),
    ),
    AliasICPRecordals: AliasICPRecordalsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they\'ve added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Id',
      'ARN',
      'Status',
      'LastModifiedTime',
      'InProgressInvalidationBatches',
      'DomainName',
      'DistributionConfig',
    ],
    description:
      'A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.',
  })
  .openapi('Distribution')

const CopyDistributionResultSchema = z
  .object({ Distribution: DistributionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CopyDistributionResult')

const CNAMEAlreadyExistsSchema = z.any().openapi('CNAMEAlreadyExists')

const DistributionAlreadyExistsSchema = z.any().openapi('DistributionAlreadyExists')

const InvalidOriginSchema = z.any().openapi('InvalidOrigin')

const InvalidOriginAccessIdentitySchema = z.any().openapi('InvalidOriginAccessIdentity')

const InvalidOriginAccessControlSchema = z.any().openapi('InvalidOriginAccessControl')

const InvalidIfMatchVersionSchema = z.any().openapi('InvalidIfMatchVersion')

const PreconditionFailedSchema = z.any().openapi('PreconditionFailed')

const TooManyTrustedSignersSchema = z.any().openapi('TooManyTrustedSigners')

const TrustedSignerDoesNotExistSchema = z.any().openapi('TrustedSignerDoesNotExist')

const InvalidViewerCertificateSchema = z.any().openapi('InvalidViewerCertificate')

const InvalidMinimumProtocolVersionSchema = z.any().openapi('InvalidMinimumProtocolVersion')

const MissingBodySchema = z.any().openapi('MissingBody')

const TooManyDistributionsSchema = z.any().openapi('TooManyDistributions')

const InvalidDefaultRootObjectSchema = z.any().openapi('InvalidDefaultRootObject')

const InvalidRelativePathSchema = z.any().openapi('InvalidRelativePath')

const InvalidErrorCodeSchema = z.any().openapi('InvalidErrorCode')

const InvalidResponseCodeSchema = z.any().openapi('InvalidResponseCode')

const InvalidRequiredProtocolSchema = z.any().openapi('InvalidRequiredProtocol')

const NoSuchOriginSchema = z.any().openapi('NoSuchOrigin')

const TooManyOriginsSchema = z.any().openapi('TooManyOrigins')

const TooManyOriginGroupsPerDistributionSchema = z
  .any()
  .openapi('TooManyOriginGroupsPerDistribution')

const TooManyCacheBehaviorsSchema = z.any().openapi('TooManyCacheBehaviors')

const TooManyCookieNamesInWhiteListSchema = z.any().openapi('TooManyCookieNamesInWhiteList')

const InvalidForwardCookiesSchema = z.any().openapi('InvalidForwardCookies')

const TooManyHeadersInForwardedValuesSchema = z.any().openapi('TooManyHeadersInForwardedValues')

const InvalidHeadersForS3OriginSchema = z.any().openapi('InvalidHeadersForS3Origin')

const InconsistentQuantitiesSchema = z.any().openapi('InconsistentQuantities')

const TooManyCertificatesSchema = z.any().openapi('TooManyCertificates')

const InvalidLocationCodeSchema = z.any().openapi('InvalidLocationCode')

const InvalidGeoRestrictionParameterSchema = z.any().openapi('InvalidGeoRestrictionParameter')

const InvalidProtocolSettingsSchema = z.any().openapi('InvalidProtocolSettings')

const InvalidTTLOrderSchema = z.any().openapi('InvalidTTLOrder')

const InvalidWebACLIdSchema = z.any().openapi('InvalidWebACLId')

const TooManyOriginCustomHeadersSchema = z.any().openapi('TooManyOriginCustomHeaders')

const TooManyQueryStringParametersSchema = z.any().openapi('TooManyQueryStringParameters')

const InvalidQueryStringParametersSchema = z.any().openapi('InvalidQueryStringParameters')

const TooManyDistributionsWithLambdaAssociationsSchema = z
  .any()
  .openapi('TooManyDistributionsWithLambdaAssociations')

const TooManyDistributionsWithSingleFunctionARNSchema = z
  .any()
  .openapi('TooManyDistributionsWithSingleFunctionARN')

const TooManyLambdaFunctionAssociationsSchema = z.any().openapi('TooManyLambdaFunctionAssociations')

const InvalidLambdaFunctionAssociationSchema = z.any().openapi('InvalidLambdaFunctionAssociation')

const TooManyDistributionsWithFunctionAssociationsSchema = z
  .any()
  .openapi('TooManyDistributionsWithFunctionAssociations')

const TooManyFunctionAssociationsSchema = z.any().openapi('TooManyFunctionAssociations')

const InvalidFunctionAssociationSchema = z.any().openapi('InvalidFunctionAssociation')

const InvalidOriginReadTimeoutSchema = z.any().openapi('InvalidOriginReadTimeout')

const InvalidOriginKeepaliveTimeoutSchema = z.any().openapi('InvalidOriginKeepaliveTimeout')

const NoSuchFieldLevelEncryptionConfigSchema = z.any().openapi('NoSuchFieldLevelEncryptionConfig')

const IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema = z
  .any()
  .openapi('IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior')

const TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToFieldLevelEncryptionConfig')

const NoSuchCachePolicySchema = z.any().openapi('NoSuchCachePolicy')

const TooManyDistributionsAssociatedToCachePolicySchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToCachePolicy')

const TooManyDistributionsAssociatedToOriginAccessControlSchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToOriginAccessControl')

const NoSuchResponseHeadersPolicySchema = z.any().openapi('NoSuchResponseHeadersPolicy')

const TooManyDistributionsAssociatedToResponseHeadersPolicySchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToResponseHeadersPolicy')

const NoSuchOriginRequestPolicySchema = z.any().openapi('NoSuchOriginRequestPolicy')

const TooManyDistributionsAssociatedToOriginRequestPolicySchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToOriginRequestPolicy')

const TooManyDistributionsAssociatedToKeyGroupSchema = z
  .any()
  .openapi('TooManyDistributionsAssociatedToKeyGroup')

const TooManyKeyGroupsAssociatedToDistributionSchema = z
  .any()
  .openapi('TooManyKeyGroupsAssociatedToDistribution')

const TrustedKeyGroupDoesNotExistSchema = z.any().openapi('TrustedKeyGroupDoesNotExist')

const NoSuchRealtimeLogConfigSchema = z.any().openapi('NoSuchRealtimeLogConfig')

const RealtimeLogConfigOwnerMismatchSchema = z.any().openapi('RealtimeLogConfigOwnerMismatch')

const CachePolicyHeaderBehaviorSchema = z
  .enum(['none', 'whitelist'])
  .openapi('CachePolicyHeaderBehavior')

const CachePolicyHeadersConfigSchema = z
  .object({
    HeaderBehavior: CachePolicyHeaderBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any headers that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the HTTP headers that are listed in the <code>Headers</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>',
        }),
    ),
    Headers: HeadersSchema.exactOptional(),
  })
  .openapi({
    required: ['HeaderBehavior'],
    description:
      'An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.',
  })
  .openapi('CachePolicyHeadersConfig')

const CachePolicyCookieBehaviorSchema = z
  .enum(['none', 'whitelist', 'allExcept', 'all'])
  .openapi('CachePolicyCookieBehavior')

const CachePolicyCookiesConfigSchema = z
  .object({
    CookieBehavior: CachePolicyCookieBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any cookies that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the cookies in viewer requests that are listed in the <code>CookieNames</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those that are listed in the <code>CookieNames</code> type, which are not included.</p> </li> <li> <p> <code>all</code> – All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>',
        }),
    ),
    Cookies: CookieNamesSchema.exactOptional(),
  })
  .openapi({
    required: ['CookieBehavior'],
    description:
      'An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.',
  })
  .openapi('CachePolicyCookiesConfig')

const CachePolicyQueryStringBehaviorSchema = z
  .enum(['none', 'whitelist', 'allExcept', 'all'])
  .openapi('CachePolicyQueryStringBehavior')

const QueryStringNamesListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Name' } })))
  .openapi('QueryStringNamesList')

const QueryStringNamesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of query string names in the <code>Items</code> list.',
        }),
    ),
    Items: QueryStringNamesListSchema.and(
      z.any().openapi({ description: 'A list of query string names.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Quantity'], description: 'Contains a list of query string names.' })
  .openapi('QueryStringNames')

const CachePolicyQueryStringsConfigSchema = z
  .object({
    QueryStringBehavior: CachePolicyQueryStringBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any query strings that are listed in an <code>OriginRequestPolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the query strings in viewer requests that are listed in the <code>QueryStringNames</code> type are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, <i> <b>except</b> </i> those that are listed in the <code>QueryStringNames</code> type, which are not included.</p> </li> <li> <p> <code>all</code> – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.</p> </li> </ul>',
        }),
    ),
    QueryStrings: QueryStringNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the specific query strings in viewer requests that either <i> <b>are</b> </i> or <i> <b>are not</b> </i> included in the cache key and in requests that CloudFront sends to the origin. The behavior depends on whether the <code>QueryStringBehavior</code> field in the <code>CachePolicyQueryStringsConfig</code> type is set to <code>whitelist</code> (the listed query strings <i> <b>are</b> </i> included) or <code>allExcept</code> (the listed query strings <i> <b>are not</b> </i> included, but all other query strings are).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueryStringBehavior'],
    description:
      'An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.',
  })
  .openapi('CachePolicyQueryStringsConfig')

const ParametersInCacheKeyAndForwardedToOriginSchema = z
  .object({
    EnableAcceptEncodingGzip: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</p> <p>This field is related to the <code>EnableAcceptEncodingBrotli</code> field. If one or both of these fields is <code>true</code> <i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p> <ul> <li> <p>Normalizes the value of the viewer's <code>Accept-Encoding</code> header</p> </li> <li> <p>Includes the normalized header in the cache key</p> </li> <li> <p>Includes the normalized header in the request to the origin, if a request is necessary</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects\">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.</p> <p>If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</p>",
        }),
    ),
    EnableAcceptEncodingBrotli: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</p> <p>This field is related to the <code>EnableAcceptEncodingGzip</code> field. If one or both of these fields is <code>true</code> <i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:</p> <ul> <li> <p>Normalizes the value of the viewer's <code>Accept-Encoding</code> header</p> </li> <li> <p>Includes the normalized header in the cache key</p> </li> <li> <p>Includes the normalized header in the request to the origin, if a request is necessary</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects\">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.</p> <p>If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</p>",
        }),
    ).exactOptional(),
    HeadersConfig: CachePolicyHeadersConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.',
        }),
    ),
    CookiesConfig: CachePolicyCookiesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.',
        }),
    ),
    QueryStringsConfig: CachePolicyQueryStringsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.',
        }),
    ),
  })
  .openapi({
    required: ['EnableAcceptEncodingGzip', 'HeadersConfig', 'CookiesConfig', 'QueryStringsConfig'],
    description:
      "<p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>",
  })
  .openapi('ParametersInCacheKeyAndForwardedToOrigin')

const CachePolicyConfigSchema = z
  .object({
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the cache policy. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A unique name to identify the cache policy.' }),
    ),
    DefaultTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object\'s time to live (TTL) only when the origin does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 86400 seconds (one day). If the value of <code>MinTTL</code> is more than 86400 seconds, then the default value for this field is the same as the value of <code>MinTTL</code>.</p>',
        }),
    ).exactOptional(),
    MaxTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 31536000 seconds (one year). If the value of <code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the default value for this field is the same as the value of <code>DefaultTTL</code>.</p>',
        }),
    ).exactOptional(),
    MinTTL: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
    ParametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MinTTL'],
    description:
      "<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>",
  })
  .openapi('CachePolicyConfig')

const CachePolicySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the cache policy.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the cache policy was last modified.' }),
    ),
    CachePolicyConfig: CachePolicyConfigSchema.and(
      z.any().openapi({ description: 'The cache policy configuration.' }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'CachePolicyConfig'],
    description:
      "<p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>",
  })
  .openapi('CachePolicy')

const CreateCachePolicyResultSchema = z
  .object({
    CachePolicy: CachePolicySchema.and(
      z.any().openapi({ description: 'A cache policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCachePolicyResult')

const CachePolicyAlreadyExistsSchema = z.any().openapi('CachePolicyAlreadyExists')

const TooManyCachePoliciesSchema = z.any().openapi('TooManyCachePolicies')

const TooManyHeadersInCachePolicySchema = z.any().openapi('TooManyHeadersInCachePolicy')

const TooManyCookiesInCachePolicySchema = z.any().openapi('TooManyCookiesInCachePolicy')

const TooManyQueryStringsInCachePolicySchema = z.any().openapi('TooManyQueryStringsInCachePolicy')

const CloudFrontOriginAccessIdentityConfigSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is created.</p> <p>If the <code>CallerReference</code> is a value already sent in a previous identity request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical to the original request (ignoring white space), the response includes the same information returned to the original request.</p> <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity, but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>",
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the origin access identity. The comment cannot be longer than 128 characters.',
        }),
    ),
  })
  .openapi({
    required: ['CallerReference', 'Comment'],
    description:
      'Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.',
  })
  .openapi('CloudFrontOriginAccessIdentityConfig')

const CloudFrontOriginAccessIdentitySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the origin access identity, for example, <code>E74FTE3AJFJ256A</code>. ',
        }),
    ),
    S3CanonicalUserId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 canonical user ID for the origin access identity, used when giving the origin access identity read permission to an object in Amazon S3.',
        }),
    ),
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigSchema.and(
      z.any().openapi({ description: 'The current configuration information for the identity.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'S3CanonicalUserId'],
    description: 'CloudFront origin access identity.',
  })
  .openapi('CloudFrontOriginAccessIdentity')

const CreateCloudFrontOriginAccessIdentityResultSchema = z
  .object({
    CloudFrontOriginAccessIdentity: CloudFrontOriginAccessIdentitySchema.and(
      z.any().openapi({ description: "The origin access identity's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateCloudFrontOriginAccessIdentityResult')

const CloudFrontOriginAccessIdentityAlreadyExistsSchema = z
  .any()
  .openapi('CloudFrontOriginAccessIdentityAlreadyExists')

const TooManyCloudFrontOriginAccessIdentitiesSchema = z
  .any()
  .openapi('TooManyCloudFrontOriginAccessIdentities')

const StagingDistributionDnsNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'DnsName' } })))
  .openapi('StagingDistributionDnsNameList')

const StagingDistributionDnsNamesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of CloudFront domain names in your staging distribution.',
        }),
    ),
    Items: StagingDistributionDnsNameListSchema.and(
      z.any().openapi({ description: 'The CloudFront domain name of the staging distribution.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description: 'The CloudFront domain name of the staging distribution.',
  })
  .openapi('StagingDistributionDnsNames')

const FloatSchema = z.float32().openapi('Float')

const SessionStickinessConfigSchema = z
  .object({
    IdleTTL: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).</p> <p>The value must be less than or equal to <code>MaximumTTL</code>.</p>',
        }),
    ),
    MaximumTTL: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).</p> <p>The value must be less than or equal to <code>IdleTTL</code>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['IdleTTL', 'MaximumTTL'],
    description:
      "Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.",
  })
  .openapi('SessionStickinessConfig')

const ContinuousDeploymentSingleWeightConfigSchema = z
  .object({
    Weight: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and .15.',
        }),
    ),
    SessionStickinessConfig: SessionStickinessConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['Weight'],
    description: 'Contains the percentage of traffic to send to a staging distribution.',
  })
  .openapi('ContinuousDeploymentSingleWeightConfig')

const ContinuousDeploymentSingleHeaderConfigSchema = z
  .object({
    Header: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix <code>aws-cf-cd-</code>.',
        }),
    ),
    Value: StringSchema.and(z.any().openapi({ description: 'The request header value.' })),
  })
  .openapi({
    required: ['Header', 'Value'],
    description:
      'This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.',
  })
  .openapi('ContinuousDeploymentSingleHeaderConfig')

const ContinuousDeploymentPolicyTypeSchema = z
  .enum(['SingleWeight', 'SingleHeader'])
  .openapi('ContinuousDeploymentPolicyType')

const TrafficConfigSchema = z
  .object({
    SingleWeightConfig: ContinuousDeploymentSingleWeightConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the percentage of traffic to send to the staging distribution.',
        }),
    ).exactOptional(),
    SingleHeaderConfig: ContinuousDeploymentSingleHeaderConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines which HTTP requests are sent to the staging distribution.',
        }),
    ).exactOptional(),
    Type: ContinuousDeploymentPolicyTypeSchema.and(
      z.any().openapi({ description: 'The type of traffic configuration.' }),
    ),
  })
  .openapi({
    required: ['Type'],
    description: 'The traffic configuration of your continuous deployment.',
  })
  .openapi('TrafficConfig')

const ContinuousDeploymentPolicyConfigSchema = z
  .object({
    StagingDistributionDnsNames: StagingDistributionDnsNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudFront domain name of the staging distribution. For example: <code>d111111abcdef8.cloudfront.net</code>.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is <code>true</code>, this policy is enabled and in effect. When this value is <code>false</code>, this policy is not enabled and has no effect.',
        }),
    ),
    TrafficConfig: TrafficConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the parameters for routing production traffic from your primary to staging distributions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StagingDistributionDnsNames', 'Enabled'],
    description: 'Contains the configuration for a continuous deployment policy.',
  })
  .openapi('ContinuousDeploymentPolicyConfig')

const ContinuousDeploymentPolicySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the continuous deployment policy.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the continuous deployment policy was last modified.',
        }),
    ),
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfigSchema,
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'ContinuousDeploymentPolicyConfig'],
    description: 'A continuous deployment policy.',
  })
  .openapi('ContinuousDeploymentPolicy')

const CreateContinuousDeploymentPolicyResultSchema = z
  .object({
    ContinuousDeploymentPolicy: ContinuousDeploymentPolicySchema.and(
      z.any().openapi({ description: 'A continuous deployment policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContinuousDeploymentPolicyResult')

const ContinuousDeploymentPolicyAlreadyExistsSchema = z
  .any()
  .openapi('ContinuousDeploymentPolicyAlreadyExists')

const TooManyContinuousDeploymentPoliciesSchema = z
  .any()
  .openapi('TooManyContinuousDeploymentPolicies')

const StagingDistributionInUseSchema = z.any().openapi('StagingDistributionInUse')

const CreateDistributionResultSchema = z
  .object({
    Distribution: DistributionSchema.and(
      z.any().openapi({ description: "The distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateDistributionResult')

const IllegalOriginAccessConfigurationSchema = z.any().openapi('IllegalOriginAccessConfiguration')

const ContinuousDeploymentPolicyInUseSchema = z.any().openapi('ContinuousDeploymentPolicyInUse')

const NoSuchContinuousDeploymentPolicySchema = z.any().openapi('NoSuchContinuousDeploymentPolicy')

const InvalidDomainNameForOriginAccessControlSchema = z
  .any()
  .openapi('InvalidDomainNameForOriginAccessControl')

const CreateDistributionWithTagsResultSchema = z
  .object({
    Distribution: DistributionSchema.and(
      z.any().openapi({ description: "The distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateDistributionWithTagsResult')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi({
    description:
      '<p>A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>',
  })
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
            '<p>A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that contains an optional <code>Tag</code> value.</p> <p>The string length should be between 0 and 256 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description: 'A complex type that contains <code>Tag</code> key and <code>Tag</code> value.',
  })
  .openapi('Tag')

const TagListSchema = z
  .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .openapi('TagList')

const TagsSchema = z
  .object({
    Items: TagListSchema.and(
      z.any().openapi({ description: 'A complex type that contains <code>Tag</code> elements.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains zero or more <code>Tag</code> elements.',
    required: [],
  })
  .openapi('Tags')

const InvalidTaggingSchema = z.any().openapi('InvalidTagging')

const QueryArgProfileSchema = z
  .object({
    QueryArg: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Query argument for field-level encryption query argument-profile mapping.',
        }),
    ),
    ProfileId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID of profile to use for field-level encryption query argument-profile mapping',
        }),
    ),
  })
  .openapi({
    required: ['QueryArg', 'ProfileId'],
    description: 'Query argument-profile mapping for field-level encryption.',
  })
  .openapi('QueryArgProfile')

const QueryArgProfileListSchema = z
  .array(QueryArgProfileSchema.and(z.any().openapi({ xml: { name: 'QueryArgProfile' } })))
  .openapi('QueryArgProfileList')

const QueryArgProfilesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of profiles for query argument-profile mapping for field-level encryption.',
        }),
    ),
    Items: QueryArgProfileListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of items for query argument-profile mapping for field-level encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description: 'Query argument-profile mapping for field-level encryption.',
  })
  .openapi('QueryArgProfiles')

const QueryArgProfileConfigSchema = z
  .object({
    ForwardWhenQueryArgProfileIsUnknown: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.',
        }),
    ),
    QueryArgProfiles: QueryArgProfilesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Profiles specified for query argument-profile mapping for field-level encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ForwardWhenQueryArgProfileIsUnknown'],
    description: 'Configuration for query argument-profile mapping for field-level encryption.',
  })
  .openapi('QueryArgProfileConfig')

const FormatSchema = z.literal('URLEncoded').openapi('Format')

const ContentTypeProfileSchema = z
  .object({
    Format: FormatSchema.and(
      z
        .any()
        .openapi({
          description: 'The format for a field-level encryption content type-profile mapping.',
        }),
    ),
    ProfileId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The profile ID for a field-level encryption content type-profile mapping.',
        }),
    ).exactOptional(),
    ContentType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content type for a field-level encryption content type-profile mapping.',
        }),
    ),
  })
  .openapi({
    required: ['Format', 'ContentType'],
    description: 'A field-level encryption content type profile.',
  })
  .openapi('ContentTypeProfile')

const ContentTypeProfileListSchema = z
  .array(ContentTypeProfileSchema.and(z.any().openapi({ xml: { name: 'ContentTypeProfile' } })))
  .openapi('ContentTypeProfileList')

const ContentTypeProfilesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of field-level encryption content type-profile mappings.',
        }),
    ),
    Items: ContentTypeProfileListSchema.and(
      z
        .any()
        .openapi({
          description: 'Items in a field-level encryption content type-profile mapping.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Quantity'], description: 'Field-level encryption content type-profile.' })
  .openapi('ContentTypeProfiles')

const ContentTypeProfileConfigSchema = z
  .object({
    ForwardWhenContentTypeIsUnknown: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting in a field-level encryption content type-profile mapping that specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown.',
        }),
    ),
    ContentTypeProfiles: ContentTypeProfilesSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for a field-level encryption content type-profile.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ForwardWhenContentTypeIsUnknown'],
    description: 'The configuration for a field-level encryption content type-profile mapping.',
  })
  .openapi('ContentTypeProfileConfig')

const FieldLevelEncryptionConfigSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({ description: "A unique number that ensures the request can't be replayed." }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional comment about the configuration. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
    QueryArgProfileConfig: QueryArgProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.",
        }),
    ).exactOptional(),
    ContentTypeProfileConfig: ContentTypeProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CallerReference'],
    description:
      'A complex data type that includes the profile configurations specified for field-level encryption.',
  })
  .openapi('FieldLevelEncryptionConfig')

const FieldLevelEncryptionSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.',
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The last time the field-level encryption configuration was changed.',
        }),
    ),
    FieldLevelEncryptionConfig: FieldLevelEncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex data type that includes the profile configurations specified for field-level encryption.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionConfig'],
    description:
      'A complex data type that includes the profile configurations and other options specified for field-level encryption.',
  })
  .openapi('FieldLevelEncryption')

const CreateFieldLevelEncryptionConfigResultSchema = z
  .object({
    FieldLevelEncryption: FieldLevelEncryptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Returned when you create a new field-level encryption configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFieldLevelEncryptionConfigResult')

const NoSuchFieldLevelEncryptionProfileSchema = z.any().openapi('NoSuchFieldLevelEncryptionProfile')

const FieldLevelEncryptionConfigAlreadyExistsSchema = z
  .any()
  .openapi('FieldLevelEncryptionConfigAlreadyExists')

const TooManyFieldLevelEncryptionConfigsSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionConfigs')

const TooManyFieldLevelEncryptionQueryArgProfilesSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionQueryArgProfiles')

const TooManyFieldLevelEncryptionContentTypeProfilesSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionContentTypeProfiles')

const QueryArgProfileEmptySchema = z.any().openapi('QueryArgProfileEmpty')

const FieldPatternListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'FieldPattern' } })))
  .openapi('FieldPatternList')

const FieldPatternsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of field-level encryption field patterns.' }),
    ),
    Items: FieldPatternListSchema.and(
      z.any().openapi({ description: 'An array of the field-level encryption field patterns.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'A complex data type that includes the field patterns to match for field-level encryption.',
  })
  .openapi('FieldPatterns')

const EncryptionEntitySchema = z
  .object({
    PublicKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns.',
        }),
    ),
    ProviderId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provider associated with the public key being used for encryption. This value must also be provided with the private key for applications to be able to decrypt data.',
        }),
    ),
    FieldPatterns: FieldPatternsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have both ABC* and AB*. Note that field patterns are case-sensitive.",
        }),
    ),
  })
  .openapi({
    required: ['PublicKeyId', 'ProviderId', 'FieldPatterns'],
    description:
      'Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.',
  })
  .openapi('EncryptionEntity')

const EncryptionEntityListSchema = z
  .array(EncryptionEntitySchema.and(z.any().openapi({ xml: { name: 'EncryptionEntity' } })))
  .openapi('EncryptionEntityList')

const EncryptionEntitiesSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of field pattern items in a field-level encryption content type-profile mapping.',
        }),
    ),
    Items: EncryptionEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of field patterns in a field-level encryption content type-profile mapping. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'Complex data type for field-level encryption profiles that includes all of the encryption entities.',
  })
  .openapi('EncryptionEntities')

const FieldLevelEncryptionProfileConfigSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'Profile name for the field-level encryption profile.' }),
    ),
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description: "A unique number that ensures that the request can't be replayed.",
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
    EncryptionEntities: EncryptionEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'CallerReference', 'EncryptionEntities'],
    description: 'A complex data type of profiles for the field-level encryption.',
  })
  .openapi('FieldLevelEncryptionProfileConfig')

const FieldLevelEncryptionProfileSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.',
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The last time the field-level encryption profile was updated.' }),
    ),
    FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionProfileConfig'],
    description: 'A complex data type for field-level encryption profiles.',
  })
  .openapi('FieldLevelEncryptionProfile')

const CreateFieldLevelEncryptionProfileResultSchema = z
  .object({
    FieldLevelEncryptionProfile: FieldLevelEncryptionProfileSchema.and(
      z
        .any()
        .openapi({ description: 'Returned when you create a new field-level encryption profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFieldLevelEncryptionProfileResult')

const NoSuchPublicKeySchema = z.any().openapi('NoSuchPublicKey')

const FieldLevelEncryptionProfileAlreadyExistsSchema = z
  .any()
  .openapi('FieldLevelEncryptionProfileAlreadyExists')

const FieldLevelEncryptionProfileSizeExceededSchema = z
  .any()
  .openapi('FieldLevelEncryptionProfileSizeExceeded')

const TooManyFieldLevelEncryptionProfilesSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionProfiles')

const TooManyFieldLevelEncryptionEncryptionEntitiesSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionEncryptionEntities')

const TooManyFieldLevelEncryptionFieldPatternsSchema = z
  .any()
  .openapi('TooManyFieldLevelEncryptionFieldPatterns')

const FunctionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]{1,64}$/)
  .min(1)
  .max(64)
  .openapi('FunctionName')

const FunctionRuntimeSchema = z
  .enum(['cloudfront-js-1.0', 'cloudfront-js-2.0'])
  .openapi('FunctionRuntime')

const FunctionConfigSchema = z
  .object({
    Comment: StringSchema.and(
      z.any().openapi({ description: 'A comment to describe the function.' }),
    ),
    Runtime: FunctionRuntimeSchema.and(
      z.any().openapi({ description: "The function's runtime environment verion." }),
    ),
  })
  .openapi({
    required: ['Comment', 'Runtime'],
    description: 'Contains configuration information about a CloudFront function.',
  })
  .openapi('FunctionConfig')

const FunctionStageSchema = z.enum(['DEVELOPMENT', 'LIVE']).openapi('FunctionStage')

const FunctionMetadataSchema = z
  .object({
    FunctionARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.',
        }),
    ),
    Stage: FunctionStageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The stage that the function is in, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>When a function is in the <code>DEVELOPMENT</code> stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When a function is in the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>",
        }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the function was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the function was most recently updated.' }),
    ),
  })
  .openapi({
    required: ['FunctionARN', 'LastModifiedTime'],
    description: 'Contains metadata about a CloudFront function.',
  })
  .openapi('FunctionMetadata')

const FunctionSummarySchema = z
  .object({
    Name: FunctionNameSchema.and(
      z.any().openapi({ description: 'The name of the CloudFront function.' }),
    ),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the CloudFront function.' }),
    ).exactOptional(),
    FunctionConfig: FunctionConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains configuration information about a CloudFront function.',
        }),
    ),
    FunctionMetadata: FunctionMetadataSchema.and(
      z.any().openapi({ description: 'Contains metadata about a CloudFront function.' }),
    ),
  })
  .openapi({
    required: ['Name', 'FunctionConfig', 'FunctionMetadata'],
    description: 'Contains configuration information and metadata about a CloudFront function.',
  })
  .openapi('FunctionSummary')

const CreateFunctionResultSchema = z
  .object({
    FunctionSummary: FunctionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains configuration information and metadata about a CloudFront function.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFunctionResult')

const TooManyFunctionsSchema = z.any().openapi('TooManyFunctions')

const FunctionAlreadyExistsSchema = z.any().openapi('FunctionAlreadyExists')

const FunctionSizeLimitExceededSchema = z.any().openapi('FunctionSizeLimitExceeded')

const UnsupportedOperationSchema = z.any().openapi('UnsupportedOperation')

const PathListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Path' } })))
  .openapi('PathList')

const PathsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of invalidation paths specified for the objects that you want to invalidate.',
        }),
    ),
    Items: PathListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains a list of the paths that you want to invalidate.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.',
  })
  .openapi('Paths')

const InvalidationBatchSchema = z
  .object({
    Paths: PathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the value to prevent you from accidentally resubmitting an identical request. Whenever you create a new invalidation request, you must specify a new value for <code>CallerReference</code> and change other values in the request as applicable. One way to ensure that the value of <code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example, <code>20120301090000</code>.</p> <p>If you make a second invalidation request with the same value for <code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't create a new invalidation request. Instead, CloudFront returns information about the invalidation request that you previously created with the same <code>CallerReference</code>.</p> <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation batch request but the content of any <code>Path</code> is different from the original request, CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>",
        }),
    ),
  })
  .openapi({ required: ['Paths', 'CallerReference'], description: 'An invalidation batch.' })
  .openapi('InvalidationBatch')

const InvalidationSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the invalidation request. For example: <code>IDFDVBD632BHDS5</code>.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the invalidation request. When the invalidation batch is finished, the status is <code>Completed</code>.',
        }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time the invalidation request was first made.' }),
    ),
    InvalidationBatch: InvalidationBatchSchema.and(
      z
        .any()
        .openapi({ description: 'The current invalidation information for the batch request.' }),
    ),
  })
  .openapi({
    required: ['Id', 'Status', 'CreateTime', 'InvalidationBatch'],
    description: 'An invalidation.',
  })
  .openapi('Invalidation')

const CreateInvalidationResultSchema = z
  .object({
    Invalidation: InvalidationSchema.and(
      z.any().openapi({ description: "The invalidation's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateInvalidationResult')

const BatchTooLargeSchema = z.any().openapi('BatchTooLarge')

const TooManyInvalidationsInProgressSchema = z.any().openapi('TooManyInvalidationsInProgress')

const PublicKeyIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'PublicKey' } })))
  .openapi('PublicKeyIdList')

const KeyGroupConfigSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'A name to identify the key group.' })),
    Items: PublicKeyIdListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of the identifiers of the public keys in the key group.' }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the key group. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Items'],
    description:
      '<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>',
  })
  .openapi('KeyGroupConfig')

const KeyGroupSchema = z
  .object({
    Id: StringSchema.and(z.any().openapi({ description: 'The identifier for the key group.' })),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the key group was last modified.' }),
    ),
    KeyGroupConfig: KeyGroupConfigSchema.and(
      z.any().openapi({ description: 'The key group configuration.' }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'KeyGroupConfig'],
    description:
      '<p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>',
  })
  .openapi('KeyGroup')

const CreateKeyGroupResultSchema = z
  .object({
    KeyGroup: KeyGroupSchema.and(
      z.any().openapi({ description: 'The key group that was just created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateKeyGroupResult')

const KeyGroupAlreadyExistsSchema = z.any().openapi('KeyGroupAlreadyExists')

const TooManyKeyGroupsSchema = z.any().openapi('TooManyKeyGroups')

const TooManyPublicKeysInKeyGroupSchema = z.any().openapi('TooManyPublicKeysInKeyGroup')

const RealtimeMetricsSubscriptionStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('RealtimeMetricsSubscriptionStatus')

const RealtimeMetricsSubscriptionConfigSchema = z
  .object({
    RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
        }),
    ),
  })
  .openapi({
    required: ['RealtimeMetricsSubscriptionStatus'],
    description: 'A subscription configuration for additional CloudWatch metrics.',
  })
  .openapi('RealtimeMetricsSubscriptionConfig')

const MonitoringSubscriptionSchema = z
  .object({
    RealtimeMetricsSubscriptionConfig: RealtimeMetricsSubscriptionConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A subscription configuration for additional CloudWatch metrics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
    required: [],
  })
  .openapi('MonitoringSubscription')

const CreateMonitoringSubscriptionResultSchema = z
  .object({
    MonitoringSubscription: MonitoringSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMonitoringSubscriptionResult')

const MonitoringSubscriptionAlreadyExistsSchema = z
  .any()
  .openapi('MonitoringSubscriptionAlreadyExists')

const OriginAccessControlSigningProtocolsSchema = z
  .literal('sigv4')
  .openapi('OriginAccessControlSigningProtocols')

const OriginAccessControlSigningBehaviorsSchema = z
  .enum(['never', 'always', 'no-override'])
  .openapi('OriginAccessControlSigningBehaviors')

const OriginAccessControlOriginTypesSchema = z
  .enum(['s3', 'mediastore'])
  .openapi('OriginAccessControlOriginTypes')

const OriginAccessControlConfigSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'A name to identify the origin access control.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the origin access control.' }),
    ).exactOptional(),
    SigningProtocol: OriginAccessControlSigningProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.',
        }),
    ),
    SigningBehavior: OriginAccessControlSigningBehaviorsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which requests CloudFront signs (adds authentication information to). Specify <code>always</code> for the most common use case. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings">origin access control advanced settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>This field can have one of the following values:</p> <ul> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if one exists.</p> </li> <li> <p> <code>never</code> – CloudFront doesn\'t sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn\'t contain the <code>Authorization</code> header, then CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, then CloudFront doesn\'t sign the origin request and instead passes along the <code>Authorization</code> header from the viewer request. <b>WARNING: To pass along the <code>Authorization</code> header from the viewer request, you <i>must</i> add the <code>Authorization</code> header to a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">cache policy</a> for all cache behaviors that use origins associated with this origin access control.</b> </p> </li> </ul>',
        }),
    ),
    OriginAccessControlOriginType: OriginAccessControlOriginTypesSchema.and(
      z
        .any()
        .openapi({ description: 'The type of origin that this origin access control is for.' }),
    ),
  })
  .openapi({
    required: ['Name', 'SigningProtocol', 'SigningBehavior', 'OriginAccessControlOriginType'],
    description: 'A CloudFront origin access control configuration.',
  })
  .openapi('OriginAccessControlConfig')

const OriginAccessControlSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the origin access control.' }),
    ),
    OriginAccessControlConfig: OriginAccessControlConfigSchema.and(
      z.any().openapi({ description: 'The origin access control.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description: 'A CloudFront origin access control, including its unique identifier.',
  })
  .openapi('OriginAccessControl')

const CreateOriginAccessControlResultSchema = z
  .object({
    OriginAccessControl: OriginAccessControlSchema.and(
      z.any().openapi({ description: 'Contains an origin access control.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOriginAccessControlResult')

const OriginAccessControlAlreadyExistsSchema = z.any().openapi('OriginAccessControlAlreadyExists')

const TooManyOriginAccessControlsSchema = z.any().openapi('TooManyOriginAccessControls')

const OriginRequestPolicyHeaderBehaviorSchema = z
  .enum(['none', 'whitelist', 'allViewer', 'allViewerAndWhitelistCloudFront', 'allExcept'])
  .openapi('OriginRequestPolicyHeaderBehavior')

const OriginRequestPolicyHeadersConfigSchema = z
  .object({
    HeaderBehavior: OriginRequestPolicyHeaderBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any headers that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the HTTP headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allViewer</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allViewerAndWhitelistCloudFront</code> – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.</p> </li> <li> <p> <code>allExcept</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>Headers</code> type, which are not included.</p> </li> </ul>',
        }),
    ),
    Headers: HeadersSchema.exactOptional(),
  })
  .openapi({
    required: ['HeaderBehavior'],
    description:
      'An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.',
  })
  .openapi('OriginRequestPolicyHeadersConfig')

const OriginRequestPolicyCookieBehaviorSchema = z
  .enum(['none', 'whitelist', 'all', 'allExcept'])
  .openapi('OriginRequestPolicyCookieBehavior')

const OriginRequestPolicyCookiesConfigSchema = z
  .object({
    CookieBehavior: OriginRequestPolicyCookieBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any cookies that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the cookies in viewer requests that are listed in the <code>CookieNames</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>all</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>CookieNames</code> type, which are not included.</p> </li> </ul>',
        }),
    ),
    Cookies: CookieNamesSchema.exactOptional(),
  })
  .openapi({
    required: ['CookieBehavior'],
    description:
      'An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.',
  })
  .openapi('OriginRequestPolicyCookiesConfig')

const OriginRequestPolicyQueryStringBehaviorSchema = z
  .enum(['none', 'whitelist', 'all', 'allExcept'])
  .openapi('OriginRequestPolicyQueryStringBehavior')

const OriginRequestPolicyQueryStringsConfigSchema = z
  .object({
    QueryStringBehavior: OriginRequestPolicyQueryStringBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</p> <ul> <li> <p> <code>none</code> – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any query strings that are listed in a <code>CachePolicy</code> <i>are</i> included in origin requests.</p> </li> <li> <p> <code>whitelist</code> – Only the query strings in viewer requests that are listed in the <code>QueryStringNames</code> type are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>all</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin.</p> </li> <li> <p> <code>allExcept</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin, <i> <b>except</b> </i> for those listed in the <code>QueryStringNames</code> type, which are not included.</p> </li> </ul>',
        }),
    ),
    QueryStrings: QueryStringNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the specific query strings in viewer requests that either <i> <b>are</b> </i> or <i> <b>are not</b> </i> included in requests that CloudFront sends to the origin. The behavior depends on whether the <code>QueryStringBehavior</code> field in the <code>OriginRequestPolicyQueryStringsConfig</code> type is set to <code>whitelist</code> (the listed query strings <i> <b>are</b> </i> included) or <code>allExcept</code> (the listed query strings <i> <b>are not</b> </i> included, but all other query strings are).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueryStringBehavior'],
    description:
      'An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.',
  })
  .openapi('OriginRequestPolicyQueryStringsConfig')

const OriginRequestPolicyConfigSchema = z
  .object({
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the origin request policy. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A unique name to identify the origin request policy.' }),
    ),
    HeadersConfig: OriginRequestPolicyHeadersConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.',
        }),
    ),
    CookiesConfig: OriginRequestPolicyCookiesConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The cookies from viewer requests to include in origin requests.',
        }),
    ),
    QueryStringsConfig: OriginRequestPolicyQueryStringsConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL query strings from viewer requests to include in origin requests.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'HeadersConfig', 'CookiesConfig', 'QueryStringsConfig'],
    description:
      "<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>",
  })
  .openapi('OriginRequestPolicyConfig')

const OriginRequestPolicySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the origin request policy.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the origin request policy was last modified.',
        }),
    ),
    OriginRequestPolicyConfig: OriginRequestPolicyConfigSchema.and(
      z.any().openapi({ description: 'The origin request policy configuration.' }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'OriginRequestPolicyConfig'],
    description:
      "<p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>",
  })
  .openapi('OriginRequestPolicy')

const CreateOriginRequestPolicyResultSchema = z
  .object({
    OriginRequestPolicy: OriginRequestPolicySchema.and(
      z.any().openapi({ description: 'An origin request policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOriginRequestPolicyResult')

const OriginRequestPolicyAlreadyExistsSchema = z.any().openapi('OriginRequestPolicyAlreadyExists')

const TooManyOriginRequestPoliciesSchema = z.any().openapi('TooManyOriginRequestPolicies')

const TooManyHeadersInOriginRequestPolicySchema = z
  .any()
  .openapi('TooManyHeadersInOriginRequestPolicy')

const TooManyCookiesInOriginRequestPolicySchema = z
  .any()
  .openapi('TooManyCookiesInOriginRequestPolicy')

const TooManyQueryStringsInOriginRequestPolicySchema = z
  .any()
  .openapi('TooManyQueryStringsInOriginRequestPolicy')

const PublicKeyConfigSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A string included in the request to help make sure that the request can't be replayed.",
        }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A name to help identify the public key.' }),
    ),
    EncodedKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the public key. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CallerReference', 'Name', 'EncodedKey'],
    description:
      'Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
  })
  .openapi('PublicKeyConfig')

const PublicKeySchema = z
  .object({
    Id: StringSchema.and(z.any().openapi({ description: 'The identifier of the public key.' })),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the public key was uploaded.' }),
    ),
    PublicKeyConfig: PublicKeyConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'CreatedTime', 'PublicKeyConfig'],
    description:
      'A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
  })
  .openapi('PublicKey')

const CreatePublicKeyResultSchema = z
  .object({
    PublicKey: PublicKeySchema.and(
      z.any().openapi({ description: 'The public key.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePublicKeyResult')

const PublicKeyAlreadyExistsSchema = z.any().openapi('PublicKeyAlreadyExists')

const TooManyPublicKeysSchema = z.any().openapi('TooManyPublicKeys')

const KinesisStreamConfigSchema = z
  .object({
    RoleARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.</p> <p>For more information the IAM role, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role">Real-time log configuration IAM role</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    StreamARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.',
        }),
    ),
  })
  .openapi({
    required: ['RoleARN', 'StreamARN'],
    description:
      'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
  })
  .openapi('KinesisStreamConfig')

const EndPointSchema = z
  .object({
    StreamType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data stream where you are sending real-time log data. The only valid value is <code>Kinesis</code>.',
        }),
    ),
    KinesisStreamConfig: KinesisStreamConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StreamType'],
    description:
      'Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.',
  })
  .openapi('EndPoint')

const EndPointListSchema = z.array(EndPointSchema).openapi('EndPointList')

const FieldListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Field' } })))
  .openapi('FieldList')

const RealtimeLogConfigSchema = z
  .object({
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of this real-time log configuration.',
        }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The unique name of this real-time log configuration.' }),
    ),
    SamplingRate: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.',
        }),
    ),
    EndPoints: EndPointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.',
        }),
    ),
    Fields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ARN', 'Name', 'SamplingRate', 'EndPoints', 'Fields'],
    description: 'A real-time log configuration.',
  })
  .openapi('RealtimeLogConfig')

const CreateRealtimeLogConfigResultSchema = z
  .object({
    RealtimeLogConfig: RealtimeLogConfigSchema.and(
      z.any().openapi({ description: 'A real-time log configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRealtimeLogConfigResult')

const RealtimeLogConfigAlreadyExistsSchema = z.any().openapi('RealtimeLogConfigAlreadyExists')

const TooManyRealtimeLogConfigsSchema = z.any().openapi('TooManyRealtimeLogConfigs')

const AccessControlAllowOriginsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Origin' } })))
  .openapi('AccessControlAllowOriginsList')

const ResponseHeadersPolicyAccessControlAllowOriginsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of origins in the list.' }),
    ),
    Items: AccessControlAllowOriginsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of origins (domain names). You can specify <code>*</code> to allow all origins.',
        }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      '<p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyAccessControlAllowOrigins')

const AccessControlAllowHeadersListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Header' } })))
  .openapi('AccessControlAllowHeadersList')

const ResponseHeadersPolicyAccessControlAllowHeadersSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of HTTP header names in the list.' }),
    ),
    Items: AccessControlAllowHeadersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of HTTP header names. You can specify <code>*</code> to allow all headers.',
        }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      '<p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyAccessControlAllowHeaders')

const ResponseHeadersPolicyAccessControlAllowMethodsValuesSchema = z
  .enum(['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'ALL'])
  .openapi('ResponseHeadersPolicyAccessControlAllowMethodsValues')

const AccessControlAllowMethodsListSchema = z
  .array(
    ResponseHeadersPolicyAccessControlAllowMethodsValuesSchema.and(
      z.any().openapi({ xml: { name: 'Method' } }),
    ),
  )
  .openapi('AccessControlAllowMethodsList')

const ResponseHeadersPolicyAccessControlAllowMethodsSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of HTTP methods in the list.' }),
    ),
    Items: AccessControlAllowMethodsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of HTTP methods. Valid values are:</p> <ul> <li> <p> <code>GET</code> </p> </li> <li> <p> <code>DELETE</code> </p> </li> <li> <p> <code>HEAD</code> </p> </li> <li> <p> <code>OPTIONS</code> </p> </li> <li> <p> <code>PATCH</code> </p> </li> <li> <p> <code>POST</code> </p> </li> <li> <p> <code>PUT</code> </p> </li> <li> <p> <code>ALL</code> </p> </li> </ul> <p> <code>ALL</code> is a special value that includes all of the listed HTTP methods.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Quantity', 'Items'],
    description:
      '<p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyAccessControlAllowMethods')

const AccessControlExposeHeadersListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Header' } })))
  .openapi('AccessControlExposeHeadersList')

const ResponseHeadersPolicyAccessControlExposeHeadersSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of HTTP headers in the list.' }),
    ),
    Items: AccessControlExposeHeadersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of HTTP headers. You can specify <code>*</code> to expose all headers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      '<p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyAccessControlExposeHeaders')

const ResponseHeadersPolicyCorsConfigSchema = z
  .object({
    AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOriginsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>',
        }),
    ),
    AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>',
        }),
    ),
    AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethodsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>',
        }),
    ),
    AccessControlAllowCredentials: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean that CloudFront uses as the value for the <code>Access-Control-Allow-Credentials</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Credentials</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials">Access-Control-Allow-Credentials</a> in the MDN Web Docs.</p>',
        }),
    ),
    AccessControlExposeHeaders: ResponseHeadersPolicyAccessControlExposeHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    AccessControlMaxAgeSec: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A number that CloudFront uses as the value for the <code>Access-Control-Max-Age</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Max-Age</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age">Access-Control-Max-Age</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    OriginOverride: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.',
        }),
    ),
  })
  .openapi({
    required: [
      'AccessControlAllowOrigins',
      'AccessControlAllowHeaders',
      'AccessControlAllowMethods',
      'AccessControlAllowCredentials',
      'OriginOverride',
    ],
    description:
      '<p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyCorsConfig')

const ResponseHeadersPolicyXSSProtectionSchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>X-XSS-Protection</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
    Protection: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean that determines the value of the <code>X-XSS-Protection</code> HTTP response header. When this setting is <code>true</code>, the value of the <code>X-XSS-Protection</code> header is <code>1</code>. When this setting is <code>false</code>, the value of the <code>X-XSS-Protection</code> header is <code>0</code>.</p> <p>For more information about these settings, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>',
        }),
    ),
    ModeBlock: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A Boolean that determines whether CloudFront includes the <code>mode=block</code> directive in the <code>X-XSS-Protection</code> header.</p> <p>For more information about this directive, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    ReportUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A reporting URI, which CloudFront uses as the value of the <code>report</code> directive in the <code>X-XSS-Protection</code> header.</p> <p>You cannot specify a <code>ReportUri</code> when <code>ModeBlock</code> is <code>true</code>.</p> <p>For more information about using a reporting URL, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Override', 'Protection'],
    description:
      '<p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyXSSProtection')

const FrameOptionsListSchema = z.enum(['DENY', 'SAMEORIGIN']).openapi('FrameOptionsList')

const ResponseHeadersPolicyFrameOptionsSchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>X-Frame-Options</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
    FrameOption: FrameOptionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the <code>X-Frame-Options</code> HTTP response header. Valid values are <code>DENY</code> and <code>SAMEORIGIN</code>.</p> <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Override', 'FrameOption'],
    description:
      '<p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyFrameOptions')

const ReferrerPolicyListSchema = z
  .enum([
    'no-referrer',
    'no-referrer-when-downgrade',
    'origin',
    'origin-when-cross-origin',
    'same-origin',
    'strict-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url',
  ])
  .openapi('ReferrerPolicyList')

const ResponseHeadersPolicyReferrerPolicySchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>Referrer-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
    ReferrerPolicy: ReferrerPolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the <code>Referrer-Policy</code> HTTP response header. Valid values are:</p> <ul> <li> <p> <code>no-referrer</code> </p> </li> <li> <p> <code>no-referrer-when-downgrade</code> </p> </li> <li> <p> <code>origin</code> </p> </li> <li> <p> <code>origin-when-cross-origin</code> </p> </li> <li> <p> <code>same-origin</code> </p> </li> <li> <p> <code>strict-origin</code> </p> </li> <li> <p> <code>strict-origin-when-cross-origin</code> </p> </li> <li> <p> <code>unsafe-url</code> </p> </li> </ul> <p>For more information about these values, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Override', 'ReferrerPolicy'],
    description:
      '<p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyReferrerPolicy')

const ResponseHeadersPolicyContentSecurityPolicySchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>Content-Security-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
    ContentSecurityPolicy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.',
        }),
    ),
  })
  .openapi({
    required: ['Override', 'ContentSecurityPolicy'],
    description:
      '<p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyContentSecurityPolicy')

const ResponseHeadersPolicyContentTypeOptionsSchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>X-Content-Type-Options</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
  })
  .openapi({
    required: ['Override'],
    description:
      '<p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyContentTypeOptions')

const ResponseHeadersPolicyStrictTransportSecuritySchema = z
  .object({
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides the <code>Strict-Transport-Security</code> HTTP response header received from the origin with the one specified in this response headers policy.',
        }),
    ),
    IncludeSubdomains: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront includes the <code>includeSubDomains</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.',
        }),
    ).exactOptional(),
    Preload: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront includes the <code>preload</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.',
        }),
    ).exactOptional(),
    AccessControlMaxAgeSec: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number that CloudFront uses as the value for the <code>max-age</code> directive in the <code>Strict-Transport-Security</code> HTTP response header.',
        }),
    ),
  })
  .openapi({
    required: ['Override', 'AccessControlMaxAgeSec'],
    description:
      '<p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>',
  })
  .openapi('ResponseHeadersPolicyStrictTransportSecurity')

const ResponseHeadersPolicySecurityHeadersConfigSchema = z
  .object({
    XSSProtection: ResponseHeadersPolicyXSSProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    FrameOptions: ResponseHeadersPolicyFrameOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    ReferrerPolicy: ResponseHeadersPolicyReferrerPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    ContentSecurityPolicy: ResponseHeadersPolicyContentSecurityPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    ContentTypeOptions: ResponseHeadersPolicyContentTypeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
    StrictTransportSecurity: ResponseHeadersPolicyStrictTransportSecuritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header\'s value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.',
    required: [],
  })
  .openapi('ResponseHeadersPolicySecurityHeadersConfig')

const SamplingRateSchema = z.float64().min(0).max(100).openapi('SamplingRate')

const ResponseHeadersPolicyServerTimingHeadersConfigSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean that determines whether CloudFront adds the <code>Server-Timing</code> header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.",
        }),
    ),
    SamplingRate: SamplingRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the <code>Server-Timing</code> header to. When you set the sampling rate to 100, CloudFront adds the <code>Server-Timing</code> header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      '<p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that\'s associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('ResponseHeadersPolicyServerTimingHeadersConfig')

const ResponseHeadersPolicyCustomHeaderSchema = z
  .object({
    Header: StringSchema.and(z.any().openapi({ description: 'The HTTP response header name.' })),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The value for the HTTP response header.' }),
    ),
    Override: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.',
        }),
    ),
  })
  .openapi({
    required: ['Header', 'Value', 'Override'],
    description:
      "An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.",
  })
  .openapi('ResponseHeadersPolicyCustomHeader')

const ResponseHeadersPolicyCustomHeaderListSchema = z
  .array(
    ResponseHeadersPolicyCustomHeaderSchema.and(
      z.any().openapi({ xml: { name: 'ResponseHeadersPolicyCustomHeader' } }),
    ),
  )
  .openapi('ResponseHeadersPolicyCustomHeaderList')

const ResponseHeadersPolicyCustomHeadersConfigSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of HTTP response headers in the list.' }),
    ),
    Items: ResponseHeadersPolicyCustomHeaderListSchema.and(
      z.any().openapi({ description: 'The list of HTTP response headers and their values.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      "A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.",
  })
  .openapi('ResponseHeadersPolicyCustomHeadersConfig')

const ResponseHeadersPolicyRemoveHeaderSchema = z
  .object({ Header: StringSchema.and(z.any().openapi({ description: 'The HTTP header name.' })) })
  .openapi({
    required: ['Header'],
    description:
      'The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.',
  })
  .openapi('ResponseHeadersPolicyRemoveHeader')

const ResponseHeadersPolicyRemoveHeaderListSchema = z
  .array(
    ResponseHeadersPolicyRemoveHeaderSchema.and(
      z.any().openapi({ xml: { name: 'ResponseHeadersPolicyRemoveHeader' } }),
    ),
  )
  .openapi('ResponseHeadersPolicyRemoveHeaderList')

const ResponseHeadersPolicyRemoveHeadersConfigSchema = z
  .object({
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of HTTP header names in the list.' }),
    ),
    Items: ResponseHeadersPolicyRemoveHeaderListSchema.and(
      z.any().openapi({ description: 'The list of HTTP header names.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Quantity'],
    description:
      'A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.',
  })
  .openapi('ResponseHeadersPolicyRemoveHeadersConfig')

const ResponseHeadersPolicyConfigSchema = z
  .object({
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A comment to describe the response headers policy.</p> <p>The comment cannot be longer than 128 characters.</p>',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A name to identify the response headers policy.</p> <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>',
        }),
    ),
    CorsConfig: ResponseHeadersPolicyCorsConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).',
        }),
    ).exactOptional(),
    SecurityHeadersConfig: ResponseHeadersPolicySecurityHeadersConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A configuration for a set of security-related HTTP response headers.',
        }),
    ).exactOptional(),
    ServerTimingHeadersConfig: ResponseHeadersPolicyServerTimingHeadersConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront.',
        }),
    ).exactOptional(),
    CustomHeadersConfig: ResponseHeadersPolicyCustomHeadersConfigSchema.and(
      z
        .any()
        .openapi({ description: 'A configuration for a set of custom HTTP response headers.' }),
    ).exactOptional(),
    RemoveHeadersConfig: ResponseHeadersPolicyRemoveHeadersConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A configuration for a set of HTTP headers to remove from the HTTP response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>',
  })
  .openapi('ResponseHeadersPolicyConfig')

const ResponseHeadersPolicySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the response headers policy.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the response headers policy was last modified.',
        }),
    ),
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfigSchema.and(
      z.any().openapi({ description: 'A response headers policy configuration.' }),
    ),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'ResponseHeadersPolicyConfig'],
    description:
      '<p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it\'s attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('ResponseHeadersPolicy')

const CreateResponseHeadersPolicyResultSchema = z
  .object({
    ResponseHeadersPolicy: ResponseHeadersPolicySchema.and(
      z.any().openapi({ description: 'Contains a response headers policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResponseHeadersPolicyResult')

const ResponseHeadersPolicyAlreadyExistsSchema = z
  .any()
  .openapi('ResponseHeadersPolicyAlreadyExists')

const TooManyResponseHeadersPoliciesSchema = z.any().openapi('TooManyResponseHeadersPolicies')

const TooManyCustomHeadersInResponseHeadersPolicySchema = z
  .any()
  .openapi('TooManyCustomHeadersInResponseHeadersPolicy')

const TooLongCSPInResponseHeadersPolicySchema = z.any().openapi('TooLongCSPInResponseHeadersPolicy')

const TooManyRemoveHeadersInResponseHeadersPolicySchema = z
  .any()
  .openapi('TooManyRemoveHeadersInResponseHeadersPolicy')

const S3OriginSchema = z
  .object({
    DomainName: StringSchema.and(
      z.any().openapi({ description: 'The DNS name of the Amazon S3 origin.' }),
    ),
    OriginAccessIdentity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The CloudFront origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an Amazon S3 bucket through CloudFront.</p> <p>If you want end users to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p> <p>To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.</p> <p>To replace the origin access identity, update the distribution configuration and specify the new origin access identity.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'OriginAccessIdentity'],
    description:
      'A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.',
  })
  .openapi('S3Origin')

const StreamingLoggingConfigSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't want to enable logging when you create a streaming distribution or if you want to disable logging for an existing streaming distribution, specify <code>false</code> for <code>Enabled</code>, and specify <code>empty Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values for <code>Bucket</code> and <code>Prefix</code>, the values are automatically deleted.",
        }),
    ),
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket to store the access logs in, for example, <code>myawslogbucket.s3.amazonaws.com</code>.',
        }),
    ),
    Prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element.",
        }),
    ),
  })
  .openapi({
    required: ['Enabled', 'Bucket', 'Prefix'],
    description:
      'A complex type that controls whether access logs are written for this streaming distribution.',
  })
  .openapi('StreamingLoggingConfig')

const StreamingDistributionConfigSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
        }),
    ),
    S3Origin: S3OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.',
        }),
    ),
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.',
        }),
    ).exactOptional(),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Any comments you want to include about the streaming distribution.',
        }),
    ),
    Logging: StreamingLoggingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that controls whether access logs are written for the streaming distribution.',
        }),
    ).exactOptional(),
    TrustedSigners: TrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
    PriceClass: PriceClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about price class for this streaming distribution.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the streaming distribution is enabled to accept user requests for content.',
        }),
    ),
  })
  .openapi({
    required: ['CallerReference', 'S3Origin', 'Comment', 'TrustedSigners', 'Enabled'],
    description: "The RTMP distribution's configuration information.",
  })
  .openapi('StreamingDistributionConfig')

const StreamingDistributionSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the RTMP distribution. For example: <code>EGTXBD79EXAMPLE</code>.',
        }),
    ),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the RTMP distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.",
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the distribution was last modified.' }),
    ).exactOptional(),
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name that corresponds to the streaming distribution, for example, <code>s5c39gqb8ow64r.cloudfront.net</code>.',
        }),
    ),
    ActiveTrustedSigners: ActiveTrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that lists the Amazon Web Services accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the Amazon Web Services account number of the trusted signer or <code>self</code> if the signer is the Amazon Web Services account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer\'s Amazon Web Services account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can\'t create signed URLs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The current configuration information for the RTMP distribution.',
        }),
    ),
  })
  .openapi({
    required: [
      'Id',
      'ARN',
      'Status',
      'DomainName',
      'ActiveTrustedSigners',
      'StreamingDistributionConfig',
    ],
    description:
      'A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.',
  })
  .openapi('StreamingDistribution')

const CreateStreamingDistributionResultSchema = z
  .object({
    StreamingDistribution: StreamingDistributionSchema.and(
      z.any().openapi({ description: "The streaming distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateStreamingDistributionResult')

const StreamingDistributionAlreadyExistsSchema = z
  .any()
  .openapi('StreamingDistributionAlreadyExists')

const TooManyStreamingDistributionCNAMEsSchema = z
  .any()
  .openapi('TooManyStreamingDistributionCNAMEs')

const TooManyStreamingDistributionsSchema = z.any().openapi('TooManyStreamingDistributions')

const CreateStreamingDistributionWithTagsResultSchema = z
  .object({
    StreamingDistribution: StreamingDistributionSchema.and(
      z.any().openapi({ description: "The streaming distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('CreateStreamingDistributionWithTagsResult')

const IllegalDeleteSchema = z.any().openapi('IllegalDelete')

const CachePolicyInUseSchema = z.any().openapi('CachePolicyInUse')

const NoSuchCloudFrontOriginAccessIdentitySchema = z
  .any()
  .openapi('NoSuchCloudFrontOriginAccessIdentity')

const CloudFrontOriginAccessIdentityInUseSchema = z
  .any()
  .openapi('CloudFrontOriginAccessIdentityInUse')

const DistributionNotDisabledSchema = z.any().openapi('DistributionNotDisabled')

const FieldLevelEncryptionConfigInUseSchema = z.any().openapi('FieldLevelEncryptionConfigInUse')

const FieldLevelEncryptionProfileInUseSchema = z.any().openapi('FieldLevelEncryptionProfileInUse')

const NoSuchFunctionExistsSchema = z.any().openapi('NoSuchFunctionExists')

const FunctionInUseSchema = z.any().openapi('FunctionInUse')

const NoSuchResourceSchema = z.any().openapi('NoSuchResource')

const ResourceInUseSchema = z.any().openapi('ResourceInUse')

const DeleteMonitoringSubscriptionResultSchema = z
  .object({})
  .openapi('DeleteMonitoringSubscriptionResult')

const NoSuchMonitoringSubscriptionSchema = z.any().openapi('NoSuchMonitoringSubscription')

const NoSuchOriginAccessControlSchema = z.any().openapi('NoSuchOriginAccessControl')

const OriginAccessControlInUseSchema = z.any().openapi('OriginAccessControlInUse')

const OriginRequestPolicyInUseSchema = z.any().openapi('OriginRequestPolicyInUse')

const PublicKeyInUseSchema = z.any().openapi('PublicKeyInUse')

const RealtimeLogConfigInUseSchema = z.any().openapi('RealtimeLogConfigInUse')

const ResponseHeadersPolicyInUseSchema = z.any().openapi('ResponseHeadersPolicyInUse')

const StreamingDistributionNotDisabledSchema = z.any().openapi('StreamingDistributionNotDisabled')

const NoSuchStreamingDistributionSchema = z.any().openapi('NoSuchStreamingDistribution')

const DescribeFunctionResultSchema = z
  .object({
    FunctionSummary: FunctionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains configuration information and metadata about a CloudFront function.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFunctionResult')

const GetCachePolicyResultSchema = z
  .object({
    CachePolicy: CachePolicySchema.and(
      z.any().openapi({ description: 'The cache policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCachePolicyResult')

const GetCachePolicyConfigResultSchema = z
  .object({
    CachePolicyConfig: CachePolicyConfigSchema.and(
      z.any().openapi({ description: 'The cache policy configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCachePolicyConfigResult')

const GetCloudFrontOriginAccessIdentityResultSchema = z
  .object({
    CloudFrontOriginAccessIdentity: CloudFrontOriginAccessIdentitySchema.and(
      z.any().openapi({ description: "The origin access identity's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetCloudFrontOriginAccessIdentityResult')

const GetCloudFrontOriginAccessIdentityConfigResultSchema = z
  .object({
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigSchema.and(
      z.any().openapi({ description: "The origin access identity's configuration information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetCloudFrontOriginAccessIdentityConfigResult')

const GetContinuousDeploymentPolicyResultSchema = z
  .object({
    ContinuousDeploymentPolicy: ContinuousDeploymentPolicySchema.and(
      z.any().openapi({ description: 'A continuous deployment policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContinuousDeploymentPolicyResult')

const GetContinuousDeploymentPolicyConfigResultSchema = z
  .object({
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContinuousDeploymentPolicyConfigResult')

const GetDistributionResultSchema = z
  .object({
    Distribution: DistributionSchema.and(
      z.any().openapi({ description: "The distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetDistributionResult')

const GetDistributionConfigResultSchema = z
  .object({
    DistributionConfig: DistributionConfigSchema.and(
      z.any().openapi({ description: "The distribution's configuration information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetDistributionConfigResult')

const GetFieldLevelEncryptionResultSchema = z
  .object({
    FieldLevelEncryption: FieldLevelEncryptionSchema.and(
      z
        .any()
        .openapi({ description: 'Return the field-level encryption configuration information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFieldLevelEncryptionResult')

const GetFieldLevelEncryptionConfigResultSchema = z
  .object({
    FieldLevelEncryptionConfig: FieldLevelEncryptionConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Return the field-level encryption configuration information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFieldLevelEncryptionConfigResult')

const GetFieldLevelEncryptionProfileResultSchema = z
  .object({
    FieldLevelEncryptionProfile: FieldLevelEncryptionProfileSchema.and(
      z.any().openapi({ description: 'Return the field-level encryption profile information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFieldLevelEncryptionProfileResult')

const GetFieldLevelEncryptionProfileConfigResultSchema = z
  .object({
    FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Return the field-level encryption profile configuration information.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFieldLevelEncryptionProfileConfigResult')

const FunctionBlobSchema = z.string().min(1).max(40960).openapi('FunctionBlob')

const GetFunctionResultSchema = z
  .object({
    FunctionCode: FunctionBlobSchema.and(
      z.any().openapi({ description: 'The function code of a CloudFront function.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFunctionResult')

const GetInvalidationResultSchema = z
  .object({
    Invalidation: InvalidationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The invalidation\'s information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation Complex Type</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetInvalidationResult')

const NoSuchInvalidationSchema = z.any().openapi('NoSuchInvalidation')

const GetKeyGroupResultSchema = z
  .object({
    KeyGroup: KeyGroupSchema.and(
      z.any().openapi({ description: 'The key group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetKeyGroupResult')

const GetKeyGroupConfigResultSchema = z
  .object({
    KeyGroupConfig: KeyGroupConfigSchema.and(
      z.any().openapi({ description: 'The key group configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetKeyGroupConfigResult')

const GetMonitoringSubscriptionResultSchema = z
  .object({
    MonitoringSubscription: MonitoringSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMonitoringSubscriptionResult')

const GetOriginAccessControlResultSchema = z
  .object({
    OriginAccessControl: OriginAccessControlSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains an origin access control, including its unique identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOriginAccessControlResult')

const GetOriginAccessControlConfigResultSchema = z
  .object({
    OriginAccessControlConfig: OriginAccessControlConfigSchema.and(
      z.any().openapi({ description: 'Contains an origin access control configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOriginAccessControlConfigResult')

const GetOriginRequestPolicyResultSchema = z
  .object({
    OriginRequestPolicy: OriginRequestPolicySchema.and(
      z.any().openapi({ description: 'The origin request policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOriginRequestPolicyResult')

const GetOriginRequestPolicyConfigResultSchema = z
  .object({
    OriginRequestPolicyConfig: OriginRequestPolicyConfigSchema.and(
      z.any().openapi({ description: 'The origin request policy configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOriginRequestPolicyConfigResult')

const GetPublicKeyResultSchema = z
  .object({
    PublicKey: PublicKeySchema.and(
      z.any().openapi({ description: 'The public key.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPublicKeyResult')

const GetPublicKeyConfigResultSchema = z
  .object({
    PublicKeyConfig: PublicKeyConfigSchema.and(
      z.any().openapi({ description: 'A public key configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPublicKeyConfigResult')

const GetRealtimeLogConfigResultSchema = z
  .object({
    RealtimeLogConfig: RealtimeLogConfigSchema.and(
      z.any().openapi({ description: 'A real-time log configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRealtimeLogConfigResult')

const GetResponseHeadersPolicyResultSchema = z
  .object({
    ResponseHeadersPolicy: ResponseHeadersPolicySchema.and(
      z.any().openapi({ description: 'Contains a response headers policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResponseHeadersPolicyResult')

const GetResponseHeadersPolicyConfigResultSchema = z
  .object({
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfigSchema.and(
      z.any().openapi({ description: 'Contains a response headers policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResponseHeadersPolicyConfigResult')

const GetStreamingDistributionResultSchema = z
  .object({
    StreamingDistribution: StreamingDistributionSchema.and(
      z.any().openapi({ description: "The streaming distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetStreamingDistributionResult')

const GetStreamingDistributionConfigResultSchema = z
  .object({
    StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
      z.any().openapi({ description: "The streaming distribution's configuration information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('GetStreamingDistributionConfigResult')

const CachePolicyTypeSchema = z.enum(['managed', 'custom']).openapi('CachePolicyType')

const CachePolicySummarySchema = z
  .object({
    Type: CachePolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of cache policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).',
        }),
    ),
    CachePolicy: CachePolicySchema.and(z.any().openapi({ description: 'The cache policy.' })),
  })
  .openapi({ required: ['Type', 'CachePolicy'], description: 'Contains a cache policy.' })
  .openapi('CachePolicySummary')

const CachePolicySummaryListSchema = z
  .array(CachePolicySummarySchema.and(z.any().openapi({ xml: { name: 'CachePolicySummary' } })))
  .openapi('CachePolicySummaryList')

const CachePolicyListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing cache policies where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of cache policies requested.' }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of cache policies returned in the response.' }),
    ),
    Items: CachePolicySummaryListSchema.and(
      z.any().openapi({ description: 'Contains the cache policies in the list.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MaxItems', 'Quantity'], description: 'A list of cache policies.' })
  .openapi('CachePolicyList')

const ListCachePoliciesResultSchema = z
  .object({
    CachePolicyList: CachePolicyListSchema.and(
      z.any().openapi({ description: 'A list of cache policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCachePoliciesResult')

const CloudFrontOriginAccessIdentitySummarySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the origin access identity. For example: <code>E74FTE3AJFJ256A</code>.',
        }),
    ),
    S3CanonicalUserId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The comment for this origin access identity, as originally specified when created.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'S3CanonicalUserId', 'Comment'],
    description: 'Summary of the information about a CloudFront origin access identity.',
  })
  .openapi('CloudFrontOriginAccessIdentitySummary')

const CloudFrontOriginAccessIdentitySummaryListSchema = z
  .array(
    CloudFrontOriginAccessIdentitySummarySchema.and(
      z.any().openapi({ xml: { name: 'CloudFrontOriginAccessIdentitySummary' } }),
    ),
  )
  .openapi('CloudFrontOriginAccessIdentitySummaryList')

const CloudFrontOriginAccessIdentityListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).",
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your origin access identities where they left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of origin access identities you want in the response body.',
        }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more items in the list.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of CloudFront origin access identities that were created by the current Amazon Web Services account.',
        }),
    ),
    Items: CloudFrontOriginAccessIdentitySummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code> element for each origin access identity that was created by the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description:
      'Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.',
  })
  .openapi('CloudFrontOriginAccessIdentityList')

const ListCloudFrontOriginAccessIdentitiesResultSchema = z
  .object({
    CloudFrontOriginAccessIdentityList: CloudFrontOriginAccessIdentityListSchema.and(
      z.any().openapi({ description: 'The <code>CloudFrontOriginAccessIdentityList</code> type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('ListCloudFrontOriginAccessIdentitiesResult')

const ConflictingAliasSchema = z
  .object({
    Alias: StringSchema.and(
      z.any().openapi({ description: 'An alias (also called a CNAME).' }),
    ).exactOptional(),
    DistributionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The (partially hidden) ID of the CloudFront distribution associated with the alias.',
        }),
    ).exactOptional(),
    AccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The (partially hidden) ID of the Amazon Web Services account that owns the distribution that's associated with the alias.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it's associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.",
    required: [],
  })
  .openapi('ConflictingAlias')

const ConflictingAliasesSchema = z
  .array(ConflictingAliasSchema.and(z.any().openapi({ xml: { name: 'ConflictingAlias' } })))
  .openapi('ConflictingAliases')

const ConflictingAliasesListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing conflicting aliases where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of conflicting aliases requested.' }),
    ).exactOptional(),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of conflicting aliases returned in the response.' }),
    ).exactOptional(),
    Items: ConflictingAliasesSchema.and(
      z.any().openapi({ description: 'Contains the conflicting aliases in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.",
    required: [],
  })
  .openapi('ConflictingAliasesList')

const ListConflictingAliasesResultSchema = z
  .object({
    ConflictingAliasesList: ConflictingAliasesListSchema.and(
      z.any().openapi({ description: 'A list of conflicting aliases.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConflictingAliasesResult')

const ContinuousDeploymentPolicySummarySchema = z
  .object({
    ContinuousDeploymentPolicy: ContinuousDeploymentPolicySchema.and(
      z.any().openapi({ description: 'The continuous deployment policy.' }),
    ),
  })
  .openapi({
    required: ['ContinuousDeploymentPolicy'],
    description: 'A summary of the information about your continuous deployment policies.',
  })
  .openapi('ContinuousDeploymentPolicySummary')

const ContinuousDeploymentPolicySummaryListSchema = z
  .array(
    ContinuousDeploymentPolicySummarySchema.and(
      z.any().openapi({ xml: { name: 'ContinuousDeploymentPolicySummary' } }),
    ),
  )
  .openapi('ContinuousDeploymentPolicySummaryList')

const ContinuousDeploymentPolicyListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the next page of continuous deployment policies. To get the next page of the list, use this value in the <code>Marker</code> field of your request.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of continuous deployment policies that were specified in your request.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of continuous deployment policies in your Amazon Web Services account, regardless of the <code>MaxItems</code> value.',
        }),
    ),
    Items: ContinuousDeploymentPolicySummaryListSchema.and(
      z.any().openapi({ description: 'A list of continuous deployment policy items.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description: 'Contains a list of continuous deployment policies.',
  })
  .openapi('ContinuousDeploymentPolicyList')

const ListContinuousDeploymentPoliciesResultSchema = z
  .object({
    ContinuousDeploymentPolicyList: ContinuousDeploymentPolicyListSchema.and(
      z.any().openapi({ description: 'A list of continuous deployment policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListContinuousDeploymentPoliciesResult')

const DistributionSummarySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.',
        }),
    ),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.",
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the distribution was last modified.' }),
    ),
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.',
        }),
    ),
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.',
        }),
    ),
    Origins: OriginsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about origins for this distribution.',
        }),
    ),
    OriginGroups: OriginGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about origin groups for this distribution.',
        }),
    ).exactOptional(),
    DefaultCacheBehavior: DefaultCacheBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
        }),
    ),
    CacheBehaviors: CacheBehaviorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains zero or more <code>CacheBehavior</code> elements.',
        }),
    ),
    CustomErrorResponses: CustomErrorResponsesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains zero or more <code>CustomErrorResponses</code> elements.',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The comment originally specified when this distribution was created.',
        }),
    ),
    PriceClass: PriceClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about price class for this streaming distribution.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the distribution is enabled to accept user requests for content.',
        }),
    ),
    ViewerCertificate: ViewerCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.",
        }),
    ),
    Restrictions: RestrictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that identifies ways in which you want to restrict distribution of your content.',
        }),
    ),
    WebACLId: StringSchema.and(
      z.any().openapi({ description: 'The Web ACL Id (if any) associated with the distribution.' }),
    ),
    HttpVersion: HttpVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support <code>HTTP/2</code> will automatically use an earlier version.",
        }),
    ),
    IsIPV6Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.',
        }),
    ),
    AliasICPRecordals: AliasICPRecordalsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they\'ve added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>',
        }),
    ).exactOptional(),
    Staging: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the primary distribution has a staging distribution enabled.',
        }),
    ),
  })
  .openapi({
    required: [
      'Id',
      'ARN',
      'Status',
      'LastModifiedTime',
      'DomainName',
      'Aliases',
      'Origins',
      'DefaultCacheBehavior',
      'CacheBehaviors',
      'CustomErrorResponses',
      'Comment',
      'PriceClass',
      'Enabled',
      'ViewerCertificate',
      'Restrictions',
      'WebACLId',
      'HttpVersion',
      'IsIPV6Enabled',
      'Staging',
    ],
    description: 'A summary of the information about a CloudFront distribution.',
  })
  .openapi('DistributionSummary')

const DistributionSummaryListSchema = z
  .array(DistributionSummarySchema.and(z.any().openapi({ xml: { name: 'DistributionSummary' } })))
  .openapi('DistributionSummaryList')

const DistributionListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value you provided for the <code>Marker</code> request parameter.',
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your distributions where they left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The value you provided for the <code>MaxItems</code> request parameter.',
        }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of distributions that were created by the current Amazon Web Services account.',
        }),
    ),
    Items: DistributionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description: 'A distribution list.',
  })
  .openapi('DistributionList')

const ListDistributionsResultSchema = z
  .object({
    DistributionList: DistributionListSchema.and(
      z.any().openapi({ description: 'The <code>DistributionList</code> type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('ListDistributionsResult')

const DistributionIdListSummarySchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'DistributionId' } })))
  .openapi('DistributionIdListSummary')

const DistributionIdListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The value provided in the <code>Marker</code> request field.' }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing distribution IDs where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of distribution IDs requested.' }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the <code>Marker</code> request field to retrieve more distribution IDs in the list.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of distribution IDs returned in the response.' }),
    ),
    Items: DistributionIdListSummarySchema.and(
      z.any().openapi({ description: 'Contains the distribution IDs in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description: 'A list of distribution IDs.',
  })
  .openapi('DistributionIdList')

const ListDistributionsByCachePolicyIdResultSchema = z
  .object({
    DistributionIdList: DistributionIdListSchema.and(
      z.any().openapi({ description: 'A list of distribution IDs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDistributionsByCachePolicyIdResult')

const ListDistributionsByKeyGroupResultSchema = z
  .object({ DistributionIdList: DistributionIdListSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ListDistributionsByKeyGroupResult')

const ListDistributionsByOriginRequestPolicyIdResultSchema = z
  .object({
    DistributionIdList: DistributionIdListSchema.and(
      z.any().openapi({ description: 'A list of distribution IDs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDistributionsByOriginRequestPolicyIdResult')

const ListDistributionsByRealtimeLogConfigResultSchema = z
  .object({ DistributionList: DistributionListSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ListDistributionsByRealtimeLogConfigResult')

const ListDistributionsByResponseHeadersPolicyIdResultSchema = z
  .object({ DistributionIdList: DistributionIdListSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ListDistributionsByResponseHeadersPolicyIdResult')

const ListDistributionsByWebACLIdResultSchema = z
  .object({
    DistributionList: DistributionListSchema.and(
      z.any().openapi({ description: 'The <code>DistributionList</code> type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response to a request to list the distributions that are associated with a specified WAF web ACL.',
    required: [],
  })
  .openapi('ListDistributionsByWebACLIdResult')

const FieldLevelEncryptionSummarySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of a field-level encryption item.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time that the summary of field-level encryption items was modified.',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional comment about the field-level encryption item. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
    QueryArgProfileConfig: QueryArgProfileConfigSchema.and(
      z.any().openapi({ description: 'A summary of a query argument-profile mapping.' }),
    ).exactOptional(),
    ContentTypeProfileConfig: ContentTypeProfileConfigSchema.and(
      z.any().openapi({ description: 'A summary of a content type-profile mapping.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime'],
    description: 'A summary of a field-level encryption item.',
  })
  .openapi('FieldLevelEncryptionSummary')

const FieldLevelEncryptionSummaryListSchema = z
  .array(
    FieldLevelEncryptionSummarySchema.and(
      z.any().openapi({ xml: { name: 'FieldLevelEncryptionSummary' } }),
    ),
  )
  .openapi('FieldLevelEncryptionSummaryList')

const FieldLevelEncryptionListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your configurations where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of elements you want in the response body.' }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of field-level encryption items.' }),
    ),
    Items: FieldLevelEncryptionSummaryListSchema.and(
      z.any().openapi({ description: 'An array of field-level encryption items.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description: 'List of field-level encrpytion configurations.',
  })
  .openapi('FieldLevelEncryptionList')

const ListFieldLevelEncryptionConfigsResultSchema = z
  .object({
    FieldLevelEncryptionList: FieldLevelEncryptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFieldLevelEncryptionConfigsResult')

const FieldLevelEncryptionProfileSummarySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'ID for the field-level encryption profile summary.' }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the the field-level encryption profile summary was last updated.',
        }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ description: 'Name for the field-level encryption profile summary.' }),
    ),
    EncryptionEntities: EncryptionEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional comment for the field-level encryption profile summary. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'LastModifiedTime', 'Name', 'EncryptionEntities'],
    description: 'The field-level encryption profile summary.',
  })
  .openapi('FieldLevelEncryptionProfileSummary')

const FieldLevelEncryptionProfileSummaryListSchema = z
  .array(
    FieldLevelEncryptionProfileSummarySchema.and(
      z.any().openapi({ xml: { name: 'FieldLevelEncryptionProfileSummary' } }),
    ),
  )
  .openapi('FieldLevelEncryptionProfileSummaryList')

const FieldLevelEncryptionProfileListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your profiles where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of field-level encryption profiles you want in the response body. ',
        }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of field-level encryption profiles.' }),
    ),
    Items: FieldLevelEncryptionProfileSummaryListSchema.and(
      z.any().openapi({ description: 'The field-level encryption profile items.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description: 'List of field-level encryption profiles.',
  })
  .openapi('FieldLevelEncryptionProfileList')

const ListFieldLevelEncryptionProfilesResultSchema = z
  .object({
    FieldLevelEncryptionProfileList: FieldLevelEncryptionProfileListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFieldLevelEncryptionProfilesResult')

const FunctionSummaryListSchema = z
  .array(FunctionSummarySchema.and(z.any().openapi({ xml: { name: 'FunctionSummary' } })))
  .openapi('FunctionSummaryList')

const FunctionListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing functions where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of functions requested.' }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of functions returned in the response.' }),
    ),
    Items: FunctionSummaryListSchema.and(
      z.any().openapi({ description: 'Contains the functions in the list.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MaxItems', 'Quantity'], description: 'A list of CloudFront functions.' })
  .openapi('FunctionList')

const ListFunctionsResultSchema = z
  .object({
    FunctionList: FunctionListSchema.and(
      z.any().openapi({ description: 'A list of CloudFront functions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionsResult')

const InvalidationSummarySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique ID for an invalidation request.' }),
    ),
    CreateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that an invalidation request was created.' }),
    ),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of an invalidation request.' }),
    ),
  })
  .openapi({
    required: ['Id', 'CreateTime', 'Status'],
    description: 'A summary of an invalidation request.',
  })
  .openapi('InvalidationSummary')

const InvalidationSummaryListSchema = z
  .array(InvalidationSummarySchema.and(z.any().openapi({ xml: { name: 'InvalidationSummary' } })))
  .openapi('InvalidationSummaryList')

const InvalidationListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you provided for the <code>Marker</code> request parameter.',
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your invalidation batches where they left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you provided for the <code>MaxItems</code> request parameter.',
        }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more invalidation batches in the list.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of invalidation batches that were created by the current Amazon Web Services account. ',
        }),
    ),
    Items: InvalidationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>InvalidationSummary</code> element for each invalidation batch created by the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description:
      'The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.',
  })
  .openapi('InvalidationList')

const ListInvalidationsResultSchema = z
  .object({
    InvalidationList: InvalidationListSchema.and(
      z.any().openapi({ description: 'Information about invalidation batches.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('ListInvalidationsResult')

const KeyGroupSummarySchema = z
  .object({ KeyGroup: KeyGroupSchema.and(z.any().openapi({ description: 'A key group.' })) })
  .openapi({ required: ['KeyGroup'], description: 'Contains information about a key group.' })
  .openapi('KeyGroupSummary')

const KeyGroupSummaryListSchema = z
  .array(KeyGroupSummarySchema.and(z.any().openapi({ xml: { name: 'KeyGroupSummary' } })))
  .openapi('KeyGroupSummaryList')

const KeyGroupListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing key groups.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of key groups requested.' }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of key groups returned in the response.' }),
    ),
    Items: KeyGroupSummaryListSchema.and(
      z.any().openapi({ description: 'A list of key groups.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MaxItems', 'Quantity'], description: 'A list of key groups.' })
  .openapi('KeyGroupList')

const ListKeyGroupsResultSchema = z
  .object({
    KeyGroupList: KeyGroupListSchema.and(
      z.any().openapi({ description: 'A list of key groups.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListKeyGroupsResult')

const OriginAccessControlSummarySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the origin access control.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the origin access control.' }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A unique name that identifies the origin access control.' }),
    ),
    SigningProtocol: OriginAccessControlSigningProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The signing protocol of the origin access control. The signing protocol determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.',
        }),
    ),
    SigningBehavior: OriginAccessControlSigningBehaviorsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that specifies which requests CloudFront signs (adds authentication information to). This field can have one of the following values:</p> <ul> <li> <p> <code>never</code> – CloudFront doesn't sign any origin requests.</p> </li> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if necessary.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn't contain the <code>Authorization</code> header, CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, CloudFront doesn't sign the origin request, but instead passes along the <code>Authorization</code> header that it received in the viewer request.</p> </li> </ul>",
        }),
    ),
    OriginAccessControlOriginType: OriginAccessControlOriginTypesSchema.and(
      z
        .any()
        .openapi({ description: 'The type of origin that this origin access control is for.' }),
    ),
  })
  .openapi({
    required: [
      'Id',
      'Description',
      'Name',
      'SigningProtocol',
      'SigningBehavior',
      'OriginAccessControlOriginType',
    ],
    description: 'A CloudFront origin access control.',
  })
  .openapi('OriginAccessControlSummary')

const OriginAccessControlSummaryListSchema = z
  .array(
    OriginAccessControlSummarySchema.and(
      z.any().openapi({ xml: { name: 'OriginAccessControlSummary' } }),
    ),
  )
  .openapi('OriginAccessControlSummaryList')

const OriginAccessControlListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the <code>Marker</code> field that was provided in the request.',
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value to use in the <code>Marker</code> field of another request to continue listing origin access controls.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of origin access controls requested.' }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this value is <code>true</code>.',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of origin access controls returned in the response.' }),
    ),
    Items: OriginAccessControlSummaryListSchema.and(
      z.any().openapi({ description: 'Contains the origin access controls in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description: 'A list of CloudFront origin access controls.',
  })
  .openapi('OriginAccessControlList')

const ListOriginAccessControlsResultSchema = z
  .object({
    OriginAccessControlList: OriginAccessControlListSchema.and(
      z.any().openapi({ description: 'A list of origin access controls.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOriginAccessControlsResult')

const OriginRequestPolicyTypeSchema = z
  .enum(['managed', 'custom'])
  .openapi('OriginRequestPolicyType')

const OriginRequestPolicySummarySchema = z
  .object({
    Type: OriginRequestPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of origin request policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).',
        }),
    ),
    OriginRequestPolicy: OriginRequestPolicySchema.and(
      z.any().openapi({ description: 'The origin request policy.' }),
    ),
  })
  .openapi({
    required: ['Type', 'OriginRequestPolicy'],
    description: 'Contains an origin request policy.',
  })
  .openapi('OriginRequestPolicySummary')

const OriginRequestPolicySummaryListSchema = z
  .array(
    OriginRequestPolicySummarySchema.and(
      z.any().openapi({ xml: { name: 'OriginRequestPolicySummary' } }),
    ),
  )
  .openapi('OriginRequestPolicySummaryList')

const OriginRequestPolicyListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing origin request policies where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of origin request policies requested.' }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of origin request policies returned in the response.',
        }),
    ),
    Items: OriginRequestPolicySummaryListSchema.and(
      z.any().openapi({ description: 'Contains the origin request policies in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description: 'A list of origin request policies.',
  })
  .openapi('OriginRequestPolicyList')

const ListOriginRequestPoliciesResultSchema = z
  .object({
    OriginRequestPolicyList: OriginRequestPolicyListSchema.and(
      z.any().openapi({ description: 'A list of origin request policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOriginRequestPoliciesResult')

const PublicKeySummarySchema = z
  .object({
    Id: StringSchema.and(z.any().openapi({ description: 'The identifier of the public key.' })),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A name to help identify the public key.' }),
    ),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the public key was uploaded.' }),
    ),
    EncodedKey: StringSchema.and(z.any().openapi({ description: 'The public key.' })),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comment to describe the public key. The comment cannot be longer than 128 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Name', 'CreatedTime', 'EncodedKey'],
    description: 'Contains information about a public key.',
  })
  .openapi('PublicKeySummary')

const PublicKeySummaryListSchema = z
  .array(PublicKeySummarySchema.and(z.any().openapi({ xml: { name: 'PublicKeySummary' } })))
  .openapi('PublicKeySummaryList')

const PublicKeyListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your public keys where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of public keys you want in the response.' }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of public keys in the list.' }),
    ),
    Items: PublicKeySummaryListSchema.and(
      z.any().openapi({ description: 'A list of public keys.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description:
      'A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
  })
  .openapi('PublicKeyList')

const ListPublicKeysResultSchema = z
  .object({
    PublicKeyList: PublicKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of all public keys that have been added to CloudFront for this account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPublicKeysResult')

const RealtimeLogConfigListSchema = z
  .array(RealtimeLogConfigSchema)
  .openapi('RealtimeLogConfigList')

const RealtimeLogConfigsSchema = z
  .object({
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of real-time log configurations requested.' }),
    ),
    Items: RealtimeLogConfigListSchema.and(
      z.any().openapi({ description: 'Contains the list of real-time log configurations.' }),
    ).exactOptional(),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether there are more real-time log configurations than are contained in this list.',
        }),
    ),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter indicates where this list of real-time log configurations begins. This list includes real-time log configurations that occur after the marker.',
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing real-time log configurations where you left off. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'IsTruncated', 'Marker'],
    description: 'A list of real-time log configurations.',
  })
  .openapi('RealtimeLogConfigs')

const ListRealtimeLogConfigsResultSchema = z
  .object({
    RealtimeLogConfigs: RealtimeLogConfigsSchema.and(
      z.any().openapi({ description: 'A list of real-time log configurations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRealtimeLogConfigsResult')

const ResponseHeadersPolicyTypeSchema = z
  .enum(['managed', 'custom'])
  .openapi('ResponseHeadersPolicyType')

const ResponseHeadersPolicySummarySchema = z
  .object({
    Type: ResponseHeadersPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of response headers policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).',
        }),
    ),
    ResponseHeadersPolicy: ResponseHeadersPolicySchema.and(
      z.any().openapi({ description: 'The response headers policy.' }),
    ),
  })
  .openapi({
    required: ['Type', 'ResponseHeadersPolicy'],
    description: 'Contains a response headers policy.',
  })
  .openapi('ResponseHeadersPolicySummary')

const ResponseHeadersPolicySummaryListSchema = z
  .array(
    ResponseHeadersPolicySummarySchema.and(
      z.any().openapi({ xml: { name: 'ResponseHeadersPolicySummary' } }),
    ),
  )
  .openapi('ResponseHeadersPolicySummaryList')

const ResponseHeadersPolicyListSchema = z
  .object({
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing response headers policies where you left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of response headers policies requested.' }),
    ),
    Quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of response headers policies returned.' }),
    ),
    Items: ResponseHeadersPolicySummaryListSchema.and(
      z.any().openapi({ description: 'The response headers policies in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxItems', 'Quantity'],
    description: 'A list of response headers policies.',
  })
  .openapi('ResponseHeadersPolicyList')

const ListResponseHeadersPoliciesResultSchema = z
  .object({
    ResponseHeadersPolicyList: ResponseHeadersPolicyListSchema.and(
      z.any().openapi({ description: 'A list of response headers policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResponseHeadersPoliciesResult')

const StreamingDistributionSummarySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.',
        }),
    ),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) for the streaming distribution. For example: <code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates the current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is fully propagated throughout the Amazon CloudFront system.",
        }),
    ),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the distribution was last modified.' }),
    ),
    DomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.',
        }),
    ),
    S3Origin: S3OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.',
        }),
    ),
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.',
        }),
    ),
    TrustedSigners: TrustedSignersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A complex type that specifies the Amazon Web Services accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>.If you don\'t want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>. To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it\'s currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    Comment: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The comment originally specified when this distribution was created.',
        }),
    ),
    PriceClass: PriceClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about price class for this streaming distribution.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the distribution is enabled to accept end user requests for content.',
        }),
    ),
  })
  .openapi({
    required: [
      'Id',
      'ARN',
      'Status',
      'LastModifiedTime',
      'DomainName',
      'S3Origin',
      'Aliases',
      'TrustedSigners',
      'Comment',
      'PriceClass',
      'Enabled',
    ],
    description: 'A summary of the information for a CloudFront streaming distribution.',
  })
  .openapi('StreamingDistributionSummary')

const StreamingDistributionSummaryListSchema = z
  .array(
    StreamingDistributionSummarySchema.and(
      z.any().openapi({ xml: { name: 'StreamingDistributionSummary' } }),
    ),
  )
  .openapi('StreamingDistributionSummaryList')

const StreamingDistributionListSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value you provided for the <code>Marker</code> request parameter.',
        }),
    ),
    NextMarker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your RTMP distributions where they left off.',
        }),
    ).exactOptional(),
    MaxItems: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The value you provided for the <code>MaxItems</code> request parameter.',
        }),
    ),
    IsTruncated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list. ',
        }),
    ),
    Quantity: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of streaming distributions that were created by the current Amazon Web Services account. ',
        }),
    ),
    Items: StreamingDistributionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains one <code>StreamingDistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
    description: 'A streaming distribution list.',
  })
  .openapi('StreamingDistributionList')

const ListStreamingDistributionsResultSchema = z
  .object({
    StreamingDistributionList: StreamingDistributionListSchema.and(
      z.any().openapi({ description: 'The <code>StreamingDistributionList</code> type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('ListStreamingDistributionsResult')

const ListTagsForResourceResultSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains zero or more <code>Tag</code> elements.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], description: 'The returned result of the corresponding request.' })
  .openapi('ListTagsForResourceResult')

const PublishFunctionResultSchema = z
  .object({
    FunctionSummary: FunctionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains configuration information and metadata about a CloudFront function.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishFunctionResult')

const FunctionExecutionLogListSchema = z.array(StringSchema).openapi('FunctionExecutionLogList')

const TestResultSchema = z
  .object({
    FunctionSummary: FunctionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains configuration information and metadata about the CloudFront function that was tested.',
        }),
    ).exactOptional(),
    ComputeUtilization: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that the function took to run as a percentage of the maximum allowed time. For example, a compute utilization of 35 means that the function completed in 35% of the maximum allowed time.',
        }),
    ).exactOptional(),
    FunctionExecutionLogs: FunctionExecutionLogListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the log lines that the function wrote (if any) when running the test.',
        }),
    ).exactOptional(),
    FunctionErrorMessage: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of testing the function was an error, this field contains the error message.',
        }),
    ).exactOptional(),
    FunctionOutput: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event object returned by the function. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html">Event object structure</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the result of testing a CloudFront function with <code>TestFunction</code>.',
    required: [],
  })
  .openapi('TestResult')

const TestFunctionResultSchema = z
  .object({
    TestResult: TestResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the result of running the function with the provided event object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestFunctionResult')

const TestFunctionFailedSchema = z.any().openapi('TestFunctionFailed')

const TagKeyListSchema = z
  .array(TagKeySchema.and(z.any().openapi({ xml: { name: 'Key' } })))
  .openapi('TagKeyList')

const UpdateCachePolicyResultSchema = z
  .object({
    CachePolicy: CachePolicySchema.and(
      z.any().openapi({ description: 'A cache policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCachePolicyResult')

const UpdateCloudFrontOriginAccessIdentityResultSchema = z
  .object({
    CloudFrontOriginAccessIdentity: CloudFrontOriginAccessIdentitySchema.and(
      z.any().openapi({ description: "The origin access identity's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('UpdateCloudFrontOriginAccessIdentityResult')

const UpdateContinuousDeploymentPolicyResultSchema = z
  .object({
    ContinuousDeploymentPolicy: ContinuousDeploymentPolicySchema.and(
      z.any().openapi({ description: 'A continuous deployment policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateContinuousDeploymentPolicyResult')

const UpdateDistributionResultSchema = z
  .object({
    Distribution: DistributionSchema.and(
      z.any().openapi({ description: "The distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('UpdateDistributionResult')

const UpdateDistributionWithStagingConfigResultSchema = z
  .object({ Distribution: DistributionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateDistributionWithStagingConfigResult')

const UpdateFieldLevelEncryptionConfigResultSchema = z
  .object({
    FieldLevelEncryption: FieldLevelEncryptionSchema.and(
      z.any().openapi({ description: 'Return the results of updating the configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFieldLevelEncryptionConfigResult')

const UpdateFieldLevelEncryptionProfileResultSchema = z
  .object({
    FieldLevelEncryptionProfile: FieldLevelEncryptionProfileSchema.and(
      z.any().openapi({ description: 'Return the results of updating the profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFieldLevelEncryptionProfileResult')

const UpdateFunctionResultSchema = z
  .object({
    FunctionSummary: FunctionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains configuration information and metadata about a CloudFront function.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFunctionResult')

const UpdateKeyGroupResultSchema = z
  .object({
    KeyGroup: KeyGroupSchema.and(
      z.any().openapi({ description: 'The key group that was just updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateKeyGroupResult')

const UpdateOriginAccessControlResultSchema = z
  .object({
    OriginAccessControl: OriginAccessControlSchema.and(
      z.any().openapi({ description: 'The origin access control after it has been updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateOriginAccessControlResult')

const UpdateOriginRequestPolicyResultSchema = z
  .object({
    OriginRequestPolicy: OriginRequestPolicySchema.and(
      z.any().openapi({ description: 'An origin request policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateOriginRequestPolicyResult')

const UpdatePublicKeyResultSchema = z
  .object({
    PublicKey: PublicKeySchema.and(
      z.any().openapi({ description: 'The public key.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePublicKeyResult')

const CannotChangeImmutablePublicKeyFieldsSchema = z
  .any()
  .openapi('CannotChangeImmutablePublicKeyFields')

const UpdateRealtimeLogConfigResultSchema = z
  .object({
    RealtimeLogConfig: RealtimeLogConfigSchema.and(
      z.any().openapi({ description: 'A real-time log configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRealtimeLogConfigResult')

const UpdateResponseHeadersPolicyResultSchema = z
  .object({
    ResponseHeadersPolicy: ResponseHeadersPolicySchema.and(
      z.any().openapi({ description: 'A response headers policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResponseHeadersPolicyResult')

const UpdateStreamingDistributionResultSchema = z
  .object({
    StreamingDistribution: StreamingDistributionSchema.and(
      z.any().openapi({ description: "The streaming distribution's information." }),
    ).exactOptional(),
  })
  .openapi({ description: 'The returned result of the corresponding request.', required: [] })
  .openapi('UpdateStreamingDistributionResult')

const AssociateAliasRequestSchema = z
  .object({})
  .openapi({ title: 'AssociateAliasRequest' })
  .openapi('AssociateAliasRequest')

const CopyDistributionRequestSchema = z
  .object({
    CallerReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.',
        }),
    ),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A Boolean flag to specify the state of the staging distribution when it's created. When you set this value to <code>True</code>, the staging distribution is enabled. When you set this value to <code>False</code>, the staging distribution is disabled.</p> <p>If you omit this field, the default value is <code>True</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CallerReference'], title: 'CopyDistributionRequest' })
  .openapi('CopyDistributionRequest')

const CreateCachePolicyRequestSchema = z
  .object({
    CachePolicyConfig: CachePolicyConfigSchema.and(
      z.any().openapi({ description: 'A cache policy configuration.' }),
    ),
  })
  .openapi({
    required: ['CachePolicyConfig'],
    title: 'CreateCachePolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateCachePolicyRequest')

const CreateCloudFrontOriginAccessIdentityRequestSchema = z
  .object({
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigSchema.and(
      z.any().openapi({ description: 'The current configuration information for the identity.' }),
    ),
  })
  .openapi({
    required: ['CloudFrontOriginAccessIdentityConfig'],
    title: 'CreateCloudFrontOriginAccessIdentityRequest',
    description:
      'The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateCloudFrontOriginAccessIdentityRequest')

const CreateContinuousDeploymentPolicyRequestSchema = z
  .object({
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration for a continuous deployment policy.' }),
    ),
  })
  .openapi({
    required: ['ContinuousDeploymentPolicyConfig'],
    title: 'CreateContinuousDeploymentPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateContinuousDeploymentPolicyRequest')

const CreateDistributionRequestSchema = z
  .object({
    DistributionConfig: DistributionConfigSchema.and(
      z.any().openapi({ description: "The distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['DistributionConfig'],
    title: 'CreateDistributionRequest',
    description: 'The request to create a new distribution.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateDistributionRequest')

const DistributionConfigWithTagsSchema = z
  .object({
    DistributionConfig: DistributionConfigSchema.and(
      z.any().openapi({ description: 'A distribution configuration.' }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains zero or more <code>Tag</code> elements.',
        }),
    ),
  })
  .openapi({
    required: ['DistributionConfig', 'Tags'],
    description:
      'A distribution Configuration and a list of tags to be associated with the distribution.',
  })
  .openapi('DistributionConfigWithTags')

const CreateDistributionWithTagsRequestSchema = z
  .object({
    DistributionConfigWithTags: DistributionConfigWithTagsSchema.and(
      z.any().openapi({ description: "The distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['DistributionConfigWithTags'],
    title: 'CreateDistributionWithTagsRequest',
    description: 'The request to create a new distribution with tags.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateDistributionWithTagsRequest')

const CreateFieldLevelEncryptionConfigRequestSchema = z
  .object({
    FieldLevelEncryptionConfig: FieldLevelEncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The request to create a new field-level encryption configuration.',
        }),
    ),
  })
  .openapi({
    required: ['FieldLevelEncryptionConfig'],
    title: 'CreateFieldLevelEncryptionConfigRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateFieldLevelEncryptionConfigRequest')

const CreateFieldLevelEncryptionProfileRequestSchema = z
  .object({
    FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfigSchema.and(
      z.any().openapi({ description: 'The request to create a field-level encryption profile.' }),
    ),
  })
  .openapi({
    required: ['FieldLevelEncryptionProfileConfig'],
    title: 'CreateFieldLevelEncryptionProfileRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateFieldLevelEncryptionProfileRequest')

const CreateFunctionRequestSchema = z
  .object({
    Name: FunctionNameSchema.and(
      z.any().openapi({ description: 'A name to identify the function.' }),
    ),
    FunctionConfig: FunctionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Configuration information about the function, including an optional comment and the function's runtime.",
        }),
    ),
    FunctionCode: FunctionBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'FunctionConfig', 'FunctionCode'], title: 'CreateFunctionRequest' })
  .openapi('CreateFunctionRequest')

const CreateInvalidationRequestSchema = z
  .object({
    InvalidationBatch: InvalidationBatchSchema.and(
      z.any().openapi({ description: 'The batch information for the invalidation.' }),
    ),
  })
  .openapi({
    required: ['InvalidationBatch'],
    title: 'CreateInvalidationRequest',
    description: 'The request to create an invalidation.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateInvalidationRequest')

const CreateKeyGroupRequestSchema = z
  .object({
    KeyGroupConfig: KeyGroupConfigSchema.and(
      z.any().openapi({ description: 'A key group configuration.' }),
    ),
  })
  .openapi({
    required: ['KeyGroupConfig'],
    title: 'CreateKeyGroupRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateKeyGroupRequest')

const CreateMonitoringSubscriptionRequestSchema = z
  .object({
    MonitoringSubscription: MonitoringSubscriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
        }),
    ),
  })
  .openapi({
    required: ['MonitoringSubscription'],
    title: 'CreateMonitoringSubscriptionRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateMonitoringSubscriptionRequest')

const CreateOriginAccessControlRequestSchema = z
  .object({
    OriginAccessControlConfig: OriginAccessControlConfigSchema.and(
      z.any().openapi({ description: 'Contains the origin access control.' }),
    ),
  })
  .openapi({
    required: ['OriginAccessControlConfig'],
    title: 'CreateOriginAccessControlRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateOriginAccessControlRequest')

const CreateOriginRequestPolicyRequestSchema = z
  .object({
    OriginRequestPolicyConfig: OriginRequestPolicyConfigSchema.and(
      z.any().openapi({ description: 'An origin request policy configuration.' }),
    ),
  })
  .openapi({
    required: ['OriginRequestPolicyConfig'],
    title: 'CreateOriginRequestPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateOriginRequestPolicyRequest')

const CreatePublicKeyRequestSchema = z
  .object({
    PublicKeyConfig: PublicKeyConfigSchema.and(
      z.any().openapi({ description: 'A CloudFront public key configuration.' }),
    ),
  })
  .openapi({
    required: ['PublicKeyConfig'],
    title: 'CreatePublicKeyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreatePublicKeyRequest')

const CreateRealtimeLogConfigRequestSchema = z
  .object({
    EndPoints: EndPointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
        }),
    ),
    Fields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique name to identify this real-time log configuration.' }),
    ),
    SamplingRate: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.',
        }),
    ),
  })
  .openapi({
    required: ['EndPoints', 'Fields', 'Name', 'SamplingRate'],
    title: 'CreateRealtimeLogConfigRequest',
  })
  .openapi('CreateRealtimeLogConfigRequest')

const CreateResponseHeadersPolicyRequestSchema = z
  .object({
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains metadata about the response headers policy, and a set of configurations that specify the HTTP headers.',
        }),
    ),
  })
  .openapi({
    required: ['ResponseHeadersPolicyConfig'],
    title: 'CreateResponseHeadersPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateResponseHeadersPolicyRequest')

const CreateStreamingDistributionRequestSchema = z
  .object({
    StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
      z.any().openapi({ description: "The streaming distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['StreamingDistributionConfig'],
    title: 'CreateStreamingDistributionRequest',
    description: 'The request to create a new streaming distribution.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateStreamingDistributionRequest')

const StreamingDistributionConfigWithTagsSchema = z
  .object({
    StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
      z.any().openapi({ description: 'A streaming distribution Configuration.' }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains zero or more <code>Tag</code> elements.',
        }),
    ),
  })
  .openapi({
    required: ['StreamingDistributionConfig', 'Tags'],
    description:
      'A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.',
  })
  .openapi('StreamingDistributionConfigWithTags')

const CreateStreamingDistributionWithTagsRequestSchema = z
  .object({
    StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTagsSchema.and(
      z.any().openapi({ description: "The streaming distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['StreamingDistributionConfigWithTags'],
    title: 'CreateStreamingDistributionWithTagsRequest',
    description: 'The request to create a new streaming distribution with tags.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('CreateStreamingDistributionWithTagsRequest')

const DeleteCachePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCachePolicyRequest' })
  .openapi('DeleteCachePolicyRequest')

const DeleteCloudFrontOriginAccessIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteCloudFrontOriginAccessIdentityRequest',
    description: 'Deletes a origin access identity.',
  })
  .openapi('DeleteCloudFrontOriginAccessIdentityRequest')

const DeleteContinuousDeploymentPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteContinuousDeploymentPolicyRequest' })
  .openapi('DeleteContinuousDeploymentPolicyRequest')

const DeleteDistributionRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDistributionRequest',
    description:
      '<p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution</p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  })
  .openapi('DeleteDistributionRequest')

const DeleteFieldLevelEncryptionConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFieldLevelEncryptionConfigRequest' })
  .openapi('DeleteFieldLevelEncryptionConfigRequest')

const DeleteFieldLevelEncryptionProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFieldLevelEncryptionProfileRequest' })
  .openapi('DeleteFieldLevelEncryptionProfileRequest')

const DeleteFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFunctionRequest' })
  .openapi('DeleteFunctionRequest')

const DeleteKeyGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteKeyGroupRequest' })
  .openapi('DeleteKeyGroupRequest')

const DeleteMonitoringSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMonitoringSubscriptionRequest' })
  .openapi('DeleteMonitoringSubscriptionRequest')

const DeleteOriginAccessControlRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteOriginAccessControlRequest' })
  .openapi('DeleteOriginAccessControlRequest')

const DeleteOriginRequestPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteOriginRequestPolicyRequest' })
  .openapi('DeleteOriginRequestPolicyRequest')

const DeletePublicKeyRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePublicKeyRequest' })
  .openapi('DeletePublicKeyRequest')

const DeleteRealtimeLogConfigRequestSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the real-time log configuration to delete.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the real-time log configuration to delete.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteRealtimeLogConfigRequest', required: [] })
  .openapi('DeleteRealtimeLogConfigRequest')

const DeleteResponseHeadersPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResponseHeadersPolicyRequest' })
  .openapi('DeleteResponseHeadersPolicyRequest')

const DeleteStreamingDistributionRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteStreamingDistributionRequest',
    description: 'The request to delete a streaming distribution.',
  })
  .openapi('DeleteStreamingDistributionRequest')

const DescribeFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFunctionRequest' })
  .openapi('DescribeFunctionRequest')

const FunctionEventObjectSchema = z.string().max(40960).openapi('FunctionEventObject')

const GetCachePolicyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetCachePolicyConfigRequest' })
  .openapi('GetCachePolicyConfigRequest')

const GetCachePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetCachePolicyRequest' })
  .openapi('GetCachePolicyRequest')

const GetCloudFrontOriginAccessIdentityConfigRequestSchema = z
  .object({})
  .openapi({
    title: 'GetCloudFrontOriginAccessIdentityConfigRequest',
    description:
      'The origin access identity\'s configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.',
  })
  .openapi('GetCloudFrontOriginAccessIdentityConfigRequest')

const GetCloudFrontOriginAccessIdentityRequestSchema = z
  .object({})
  .openapi({
    title: 'GetCloudFrontOriginAccessIdentityRequest',
    description: "The request to get an origin access identity's information.",
  })
  .openapi('GetCloudFrontOriginAccessIdentityRequest')

const GetContinuousDeploymentPolicyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetContinuousDeploymentPolicyConfigRequest' })
  .openapi('GetContinuousDeploymentPolicyConfigRequest')

const GetContinuousDeploymentPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetContinuousDeploymentPolicyRequest' })
  .openapi('GetContinuousDeploymentPolicyRequest')

const GetDistributionConfigRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDistributionConfigRequest',
    description: 'The request to get a distribution configuration.',
  })
  .openapi('GetDistributionConfigRequest')

const GetDistributionRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDistributionRequest',
    description: "The request to get a distribution's information.",
  })
  .openapi('GetDistributionRequest')

const GetFieldLevelEncryptionConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetFieldLevelEncryptionConfigRequest' })
  .openapi('GetFieldLevelEncryptionConfigRequest')

const GetFieldLevelEncryptionProfileConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetFieldLevelEncryptionProfileConfigRequest' })
  .openapi('GetFieldLevelEncryptionProfileConfigRequest')

const GetFieldLevelEncryptionProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetFieldLevelEncryptionProfileRequest' })
  .openapi('GetFieldLevelEncryptionProfileRequest')

const GetFieldLevelEncryptionRequestSchema = z
  .object({})
  .openapi({ title: 'GetFieldLevelEncryptionRequest' })
  .openapi('GetFieldLevelEncryptionRequest')

const GetFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'GetFunctionRequest' })
  .openapi('GetFunctionRequest')

const GetInvalidationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetInvalidationRequest',
    description: "The request to get an invalidation's information.",
  })
  .openapi('GetInvalidationRequest')

const GetKeyGroupConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetKeyGroupConfigRequest' })
  .openapi('GetKeyGroupConfigRequest')

const GetKeyGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetKeyGroupRequest' })
  .openapi('GetKeyGroupRequest')

const GetMonitoringSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'GetMonitoringSubscriptionRequest' })
  .openapi('GetMonitoringSubscriptionRequest')

const GetOriginAccessControlConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetOriginAccessControlConfigRequest' })
  .openapi('GetOriginAccessControlConfigRequest')

const GetOriginAccessControlRequestSchema = z
  .object({})
  .openapi({ title: 'GetOriginAccessControlRequest' })
  .openapi('GetOriginAccessControlRequest')

const GetOriginRequestPolicyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetOriginRequestPolicyConfigRequest' })
  .openapi('GetOriginRequestPolicyConfigRequest')

const GetOriginRequestPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetOriginRequestPolicyRequest' })
  .openapi('GetOriginRequestPolicyRequest')

const GetPublicKeyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetPublicKeyConfigRequest' })
  .openapi('GetPublicKeyConfigRequest')

const GetPublicKeyRequestSchema = z
  .object({})
  .openapi({ title: 'GetPublicKeyRequest' })
  .openapi('GetPublicKeyRequest')

const GetRealtimeLogConfigRequestSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the real-time log configuration to get.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the real-time log configuration to get.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRealtimeLogConfigRequest', required: [] })
  .openapi('GetRealtimeLogConfigRequest')

const GetResponseHeadersPolicyConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetResponseHeadersPolicyConfigRequest' })
  .openapi('GetResponseHeadersPolicyConfigRequest')

const GetResponseHeadersPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetResponseHeadersPolicyRequest' })
  .openapi('GetResponseHeadersPolicyRequest')

const GetStreamingDistributionConfigRequestSchema = z
  .object({})
  .openapi({
    title: 'GetStreamingDistributionConfigRequest',
    description: 'To request to get a streaming distribution configuration.',
  })
  .openapi('GetStreamingDistributionConfigRequest')

const GetStreamingDistributionRequestSchema = z
  .object({})
  .openapi({
    title: 'GetStreamingDistributionRequest',
    description: "The request to get a streaming distribution's information.",
  })
  .openapi('GetStreamingDistributionRequest')

const ListCachePoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListCachePoliciesRequest' })
  .openapi('ListCachePoliciesRequest')

const ListCloudFrontOriginAccessIdentitiesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListCloudFrontOriginAccessIdentitiesRequest',
    description: 'The request to list origin access identities.',
  })
  .openapi('ListCloudFrontOriginAccessIdentitiesRequest')

const DistributionIdStringSchema = z.string().max(25).openapi('DistributionIdString')

const AliasStringSchema = z.string().max(253).openapi('AliasString')

const ListConflictingAliasesMaxItemsIntegerSchema = z
  .int()
  .max(100)
  .openapi('ListConflictingAliasesMaxItemsInteger')

const ListConflictingAliasesRequestSchema = z
  .object({})
  .openapi({ title: 'ListConflictingAliasesRequest' })
  .openapi('ListConflictingAliasesRequest')

const ListContinuousDeploymentPoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListContinuousDeploymentPoliciesRequest' })
  .openapi('ListContinuousDeploymentPoliciesRequest')

const ListDistributionsByCachePolicyIdRequestSchema = z
  .object({})
  .openapi({ title: 'ListDistributionsByCachePolicyIdRequest' })
  .openapi('ListDistributionsByCachePolicyIdRequest')

const ListDistributionsByKeyGroupRequestSchema = z
  .object({})
  .openapi({ title: 'ListDistributionsByKeyGroupRequest' })
  .openapi('ListDistributionsByKeyGroupRequest')

const ListDistributionsByOriginRequestPolicyIdRequestSchema = z
  .object({})
  .openapi({ title: 'ListDistributionsByOriginRequestPolicyIdRequest' })
  .openapi('ListDistributionsByOriginRequestPolicyIdRequest')

const ListDistributionsByRealtimeLogConfigRequestSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
        }),
    ).exactOptional(),
    MaxItems: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of distributions that you want in the response.',
        }),
    ).exactOptional(),
    RealtimeLogConfigName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the real-time log configuration whose associated distributions you want to list.',
        }),
    ).exactOptional(),
    RealtimeLogConfigArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDistributionsByRealtimeLogConfigRequest', required: [] })
  .openapi('ListDistributionsByRealtimeLogConfigRequest')

const ListDistributionsByResponseHeadersPolicyIdRequestSchema = z
  .object({})
  .openapi({ title: 'ListDistributionsByResponseHeadersPolicyIdRequest' })
  .openapi('ListDistributionsByResponseHeadersPolicyIdRequest')

const ListDistributionsByWebACLIdRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDistributionsByWebACLIdRequest',
    description:
      'The request to list distributions that are associated with a specified WAF web ACL.',
  })
  .openapi('ListDistributionsByWebACLIdRequest')

const ListDistributionsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDistributionsRequest',
    description: 'The request to list your distributions.',
  })
  .openapi('ListDistributionsRequest')

const ListFieldLevelEncryptionConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFieldLevelEncryptionConfigsRequest' })
  .openapi('ListFieldLevelEncryptionConfigsRequest')

const ListFieldLevelEncryptionProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListFieldLevelEncryptionProfilesRequest' })
  .openapi('ListFieldLevelEncryptionProfilesRequest')

const ListFunctionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFunctionsRequest' })
  .openapi('ListFunctionsRequest')

const ListInvalidationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListInvalidationsRequest', description: 'The request to list invalidations.' })
  .openapi('ListInvalidationsRequest')

const ListKeyGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListKeyGroupsRequest' })
  .openapi('ListKeyGroupsRequest')

const ListOriginAccessControlsRequestSchema = z
  .object({})
  .openapi({ title: 'ListOriginAccessControlsRequest' })
  .openapi('ListOriginAccessControlsRequest')

const ListOriginRequestPoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListOriginRequestPoliciesRequest' })
  .openapi('ListOriginRequestPoliciesRequest')

const ListPublicKeysRequestSchema = z
  .object({})
  .openapi({ title: 'ListPublicKeysRequest' })
  .openapi('ListPublicKeysRequest')

const ListRealtimeLogConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRealtimeLogConfigsRequest' })
  .openapi('ListRealtimeLogConfigsRequest')

const ListResponseHeadersPoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListResponseHeadersPoliciesRequest' })
  .openapi('ListResponseHeadersPoliciesRequest')

const ListStreamingDistributionsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListStreamingDistributionsRequest',
    description: 'The request to list your streaming distributions.',
  })
  .openapi('ListStreamingDistributionsRequest')

const ResourceARNSchema = z
  .string()
  .regex(/arn:aws(-cn)?:cloudfront::[0-9]+:.*/)
  .openapi('ResourceARN')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description: 'The request to list tags for a CloudFront resource.',
  })
  .openapi('ListTagsForResourceRequest')

const PublishFunctionRequestSchema = z
  .object({})
  .openapi({ title: 'PublishFunctionRequest' })
  .openapi('PublishFunctionRequest')

const TagKeysSchema = z
  .object({
    Items: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'A complex type that contains <code>Tag</code> key elements.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type that contains zero or more <code>Tag</code> elements.',
    required: [],
  })
  .openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains zero or more <code>Tag</code> elements.',
        }),
    ),
  })
  .openapi({
    required: ['Tags'],
    title: 'TagResourceRequest',
    description: 'The request to add tags to a CloudFront resource.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('TagResourceRequest')

const TestFunctionRequestSchema = z
  .object({
    Stage: FunctionStageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.',
        }),
    ).exactOptional(),
    EventObject: FunctionEventObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['EventObject'], title: 'TestFunctionRequest' })
  .openapi('TestFunctionRequest')

const UntagResourceRequestSchema = z
  .object({
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains zero or more <code>Tag</code> key elements.',
        }),
    ),
  })
  .openapi({
    required: ['TagKeys'],
    title: 'UntagResourceRequest',
    description: 'The request to remove tags from a CloudFront resource.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UntagResourceRequest')

const UpdateCachePolicyRequestSchema = z
  .object({
    CachePolicyConfig: CachePolicyConfigSchema.and(
      z.any().openapi({ description: 'A cache policy configuration.' }),
    ),
  })
  .openapi({
    required: ['CachePolicyConfig'],
    title: 'UpdateCachePolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateCachePolicyRequest')

const UpdateCloudFrontOriginAccessIdentityRequestSchema = z
  .object({
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigSchema.and(
      z.any().openapi({ description: "The identity's configuration information." }),
    ),
  })
  .openapi({
    required: ['CloudFrontOriginAccessIdentityConfig'],
    title: 'UpdateCloudFrontOriginAccessIdentityRequest',
    description: 'The request to update an origin access identity.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateCloudFrontOriginAccessIdentityRequest')

const UpdateContinuousDeploymentPolicyRequestSchema = z
  .object({
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfigSchema.and(
      z.any().openapi({ description: 'The continuous deployment policy configuration.' }),
    ),
  })
  .openapi({
    required: ['ContinuousDeploymentPolicyConfig'],
    title: 'UpdateContinuousDeploymentPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateContinuousDeploymentPolicyRequest')

const UpdateDistributionRequestSchema = z
  .object({
    DistributionConfig: DistributionConfigSchema.and(
      z.any().openapi({ description: "The distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['DistributionConfig'],
    title: 'UpdateDistributionRequest',
    description: 'The request to update a distribution.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateDistributionRequest')

const UpdateDistributionWithStagingConfigRequestSchema = z
  .object({})
  .openapi({ title: 'UpdateDistributionWithStagingConfigRequest' })
  .openapi('UpdateDistributionWithStagingConfigRequest')

const UpdateFieldLevelEncryptionConfigRequestSchema = z
  .object({
    FieldLevelEncryptionConfig: FieldLevelEncryptionConfigSchema.and(
      z.any().openapi({ description: 'Request to update a field-level encryption configuration.' }),
    ),
  })
  .openapi({
    required: ['FieldLevelEncryptionConfig'],
    title: 'UpdateFieldLevelEncryptionConfigRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateFieldLevelEncryptionConfigRequest')

const UpdateFieldLevelEncryptionProfileRequestSchema = z
  .object({
    FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfigSchema.and(
      z.any().openapi({ description: 'Request to update a field-level encryption profile.' }),
    ),
  })
  .openapi({
    required: ['FieldLevelEncryptionProfileConfig'],
    title: 'UpdateFieldLevelEncryptionProfileRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateFieldLevelEncryptionProfileRequest')

const UpdateFunctionRequestSchema = z
  .object({
    FunctionConfig: FunctionConfigSchema.and(
      z.any().openapi({ description: 'Configuration information about the function.' }),
    ),
    FunctionCode: FunctionBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['FunctionConfig', 'FunctionCode'], title: 'UpdateFunctionRequest' })
  .openapi('UpdateFunctionRequest')

const UpdateKeyGroupRequestSchema = z
  .object({
    KeyGroupConfig: KeyGroupConfigSchema.and(
      z.any().openapi({ description: 'The key group configuration.' }),
    ),
  })
  .openapi({
    required: ['KeyGroupConfig'],
    title: 'UpdateKeyGroupRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateKeyGroupRequest')

const UpdateOriginAccessControlRequestSchema = z
  .object({
    OriginAccessControlConfig: OriginAccessControlConfigSchema.and(
      z.any().openapi({ description: 'An origin access control.' }),
    ),
  })
  .openapi({
    required: ['OriginAccessControlConfig'],
    title: 'UpdateOriginAccessControlRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateOriginAccessControlRequest')

const UpdateOriginRequestPolicyRequestSchema = z
  .object({
    OriginRequestPolicyConfig: OriginRequestPolicyConfigSchema.and(
      z.any().openapi({ description: 'An origin request policy configuration.' }),
    ),
  })
  .openapi({
    required: ['OriginRequestPolicyConfig'],
    title: 'UpdateOriginRequestPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateOriginRequestPolicyRequest')

const UpdatePublicKeyRequestSchema = z
  .object({
    PublicKeyConfig: PublicKeyConfigSchema.and(
      z.any().openapi({ description: 'A public key configuration.' }),
    ),
  })
  .openapi({
    required: ['PublicKeyConfig'],
    title: 'UpdatePublicKeyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdatePublicKeyRequest')

const UpdateRealtimeLogConfigRequestSchema = z
  .object({
    EndPoints: EndPointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
        }),
    ).exactOptional(),
    Fields: FieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name for this real-time log configuration.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for this real-time log configuration.',
        }),
    ).exactOptional(),
    SamplingRate: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRealtimeLogConfigRequest', required: [] })
  .openapi('UpdateRealtimeLogConfigRequest')

const UpdateResponseHeadersPolicyRequestSchema = z
  .object({
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfigSchema.and(
      z.any().openapi({ description: 'A response headers policy configuration.' }),
    ),
  })
  .openapi({
    required: ['ResponseHeadersPolicyConfig'],
    title: 'UpdateResponseHeadersPolicyRequest',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateResponseHeadersPolicyRequest')

const UpdateStreamingDistributionRequestSchema = z
  .object({
    StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
      z.any().openapi({ description: "The streaming distribution's configuration information." }),
    ),
  })
  .openapi({
    required: ['StreamingDistributionConfig'],
    title: 'UpdateStreamingDistributionRequest',
    description: 'The request to update a streaming distribution.',
    xml: { namespace: 'http://cloudfront.amazonaws.com/doc/2020-05-31/' },
  })
  .openapi('UpdateStreamingDistributionRequest')

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

export const put20200531DistributionTargetDistributionIdAssociateAliasAliasRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias',
  description:
    '<p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that\'s already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'AssociateAlias2020_05_31',
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
      TargetDistributionId: z
        .string()
        .openapi({
          param: {
            name: 'TargetDistributionId',
            in: 'path',
            required: true,
            description: "The ID of the distribution that you're associating the alias with.",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Alias: z
        .string()
        .openapi({
          param: {
            name: 'Alias',
            in: 'query',
            required: true,
            description: 'The alias (also known as a CNAME) to add to the target distribution.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    482: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    483: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    484: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const post20200531DistributionPrimaryDistributionIdCopyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distribution/{PrimaryDistributionId}/copy',
  description:
    '<p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution\'s configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html">CreateDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html">CopyDistribution</a> </p> </li> </ul>',
  operationId: 'CopyDistribution2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Staging: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Staging',
            in: 'header',
            required: false,
            description:
              'The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.',
            schema: { type: 'boolean' },
          },
        }),
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      PrimaryDistributionId: z
        .string()
        .openapi({
          param: {
            name: 'PrimaryDistributionId',
            in: 'path',
            required: true,
            description:
              'The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              CallerReference: z
                .string()
                .openapi({
                  description:
                    'A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.',
                }),
              Enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A Boolean flag to specify the state of the staging distribution when it's created. When you set this value to <code>True</code>, the staging distribution is enabled. When you set this value to <code>False</code>, the staging distribution is disabled.</p> <p>If you omit this field, the default value is <code>True</code>.</p>",
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
      content: { 'text/xml': { schema: CopyDistributionResultSchema } },
    },
    480: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    481: {
      description: 'DistributionAlreadyExists',
      content: { 'text/xml': { schema: DistributionAlreadyExistsSchema } },
    },
    482: { description: 'InvalidOrigin', content: { 'text/xml': { schema: InvalidOriginSchema } } },
    483: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    484: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    485: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    486: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    487: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    488: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    489: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    490: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    491: {
      description: 'InvalidViewerCertificate',
      content: { 'text/xml': { schema: InvalidViewerCertificateSchema } },
    },
    492: {
      description: 'InvalidMinimumProtocolVersion',
      content: { 'text/xml': { schema: InvalidMinimumProtocolVersionSchema } },
    },
    493: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    494: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    495: {
      description: 'TooManyDistributions',
      content: { 'text/xml': { schema: TooManyDistributionsSchema } },
    },
    496: {
      description: 'InvalidDefaultRootObject',
      content: { 'text/xml': { schema: InvalidDefaultRootObjectSchema } },
    },
    497: {
      description: 'InvalidRelativePath',
      content: { 'text/xml': { schema: InvalidRelativePathSchema } },
    },
    498: {
      description: 'InvalidErrorCode',
      content: { 'text/xml': { schema: InvalidErrorCodeSchema } },
    },
    499: {
      description: 'InvalidResponseCode',
      content: { 'text/xml': { schema: InvalidResponseCodeSchema } },
    },
    500: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    501: {
      description: 'InvalidRequiredProtocol',
      content: { 'text/xml': { schema: InvalidRequiredProtocolSchema } },
    },
    502: { description: 'NoSuchOrigin', content: { 'text/xml': { schema: NoSuchOriginSchema } } },
    503: {
      description: 'TooManyOrigins',
      content: { 'text/xml': { schema: TooManyOriginsSchema } },
    },
    504: {
      description: 'TooManyOriginGroupsPerDistribution',
      content: { 'text/xml': { schema: TooManyOriginGroupsPerDistributionSchema } },
    },
    505: {
      description: 'TooManyCacheBehaviors',
      content: { 'text/xml': { schema: TooManyCacheBehaviorsSchema } },
    },
    506: {
      description: 'TooManyCookieNamesInWhiteList',
      content: { 'text/xml': { schema: TooManyCookieNamesInWhiteListSchema } },
    },
    507: {
      description: 'InvalidForwardCookies',
      content: { 'text/xml': { schema: InvalidForwardCookiesSchema } },
    },
    508: {
      description: 'TooManyHeadersInForwardedValues',
      content: { 'text/xml': { schema: TooManyHeadersInForwardedValuesSchema } },
    },
    509: {
      description: 'InvalidHeadersForS3Origin',
      content: { 'text/xml': { schema: InvalidHeadersForS3OriginSchema } },
    },
    510: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    511: {
      description: 'TooManyCertificates',
      content: { 'text/xml': { schema: TooManyCertificatesSchema } },
    },
    512: {
      description: 'InvalidLocationCode',
      content: { 'text/xml': { schema: InvalidLocationCodeSchema } },
    },
    513: {
      description: 'InvalidGeoRestrictionParameter',
      content: { 'text/xml': { schema: InvalidGeoRestrictionParameterSchema } },
    },
    514: {
      description: 'InvalidProtocolSettings',
      content: { 'text/xml': { schema: InvalidProtocolSettingsSchema } },
    },
    515: {
      description: 'InvalidTTLOrder',
      content: { 'text/xml': { schema: InvalidTTLOrderSchema } },
    },
    516: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
    517: {
      description: 'TooManyOriginCustomHeaders',
      content: { 'text/xml': { schema: TooManyOriginCustomHeadersSchema } },
    },
    518: {
      description: 'TooManyQueryStringParameters',
      content: { 'text/xml': { schema: TooManyQueryStringParametersSchema } },
    },
    519: {
      description: 'InvalidQueryStringParameters',
      content: { 'text/xml': { schema: InvalidQueryStringParametersSchema } },
    },
    520: {
      description: 'TooManyDistributionsWithLambdaAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithLambdaAssociationsSchema } },
    },
    521: {
      description: 'TooManyDistributionsWithSingleFunctionARN',
      content: { 'text/xml': { schema: TooManyDistributionsWithSingleFunctionARNSchema } },
    },
    522: {
      description: 'TooManyLambdaFunctionAssociations',
      content: { 'text/xml': { schema: TooManyLambdaFunctionAssociationsSchema } },
    },
    523: {
      description: 'InvalidLambdaFunctionAssociation',
      content: { 'text/xml': { schema: InvalidLambdaFunctionAssociationSchema } },
    },
    524: {
      description: 'TooManyDistributionsWithFunctionAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithFunctionAssociationsSchema } },
    },
    525: {
      description: 'TooManyFunctionAssociations',
      content: { 'text/xml': { schema: TooManyFunctionAssociationsSchema } },
    },
    526: {
      description: 'InvalidFunctionAssociation',
      content: { 'text/xml': { schema: InvalidFunctionAssociationSchema } },
    },
    527: {
      description: 'InvalidOriginReadTimeout',
      content: { 'text/xml': { schema: InvalidOriginReadTimeoutSchema } },
    },
    528: {
      description: 'InvalidOriginKeepaliveTimeout',
      content: { 'text/xml': { schema: InvalidOriginKeepaliveTimeoutSchema } },
    },
    529: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    530: {
      description: 'IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior',
      content: {
        'text/xml': { schema: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema },
      },
    },
    531: {
      description: 'TooManyDistributionsAssociatedToFieldLevelEncryptionConfig',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema },
      },
    },
    532: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    533: {
      description: 'TooManyDistributionsAssociatedToCachePolicy',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToCachePolicySchema } },
    },
    534: {
      description: 'TooManyDistributionsAssociatedToOriginAccessControl',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginAccessControlSchema },
      },
    },
    535: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    536: {
      description: 'TooManyDistributionsAssociatedToResponseHeadersPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToResponseHeadersPolicySchema },
      },
    },
    537: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    538: {
      description: 'TooManyDistributionsAssociatedToOriginRequestPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginRequestPolicySchema },
      },
    },
    539: {
      description: 'TooManyDistributionsAssociatedToKeyGroup',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToKeyGroupSchema } },
    },
    540: {
      description: 'TooManyKeyGroupsAssociatedToDistribution',
      content: { 'text/xml': { schema: TooManyKeyGroupsAssociatedToDistributionSchema } },
    },
    541: {
      description: 'TrustedKeyGroupDoesNotExist',
      content: { 'text/xml': { schema: TrustedKeyGroupDoesNotExistSchema } },
    },
    542: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    543: {
      description: 'RealtimeLogConfigOwnerMismatch',
      content: { 'text/xml': { schema: RealtimeLogConfigOwnerMismatchSchema } },
    },
  },
})

export const get20200531CachePolicyRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/cache-policy',
  description:
    '<p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListCachePolicies2020_05_31',
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
      Type: z
        .enum(['managed', 'custom'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Type',
            in: 'query',
            required: false,
            description:
              '<p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>',
            schema: { type: 'string', enum: ['managed', 'custom'] },
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
              "Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description: 'The maximum number of cache policies that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListCachePoliciesResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531CachePolicyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/cache-policy',
  description:
    "<p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html\">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
  operationId: 'CreateCachePolicy2020_05_31',
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
              CachePolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the cache policy. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A unique name to identify the cache policy.' }),
                  ).exactOptional(),
                  DefaultTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object\'s time to live (TTL) only when the origin does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 86400 seconds (one day). If the value of <code>MinTTL</code> is more than 86400 seconds, then the default value for this field is the same as the value of <code>MinTTL</code>.</p>',
                      }),
                  ).exactOptional(),
                  MaxTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 31536000 seconds (one year). If the value of <code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the default value for this field is the same as the value of <code>DefaultTTL</code>.</p>',
                      }),
                  ).exactOptional(),
                  MinTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  ParametersInCacheKeyAndForwardedToOrigin:
                    ParametersInCacheKeyAndForwardedToOriginSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.',
                        }),
                    ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>",
                  required: [],
                }),
            })
            .openapi({ required: ['CachePolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCachePolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: {
      description: 'CachePolicyAlreadyExists',
      content: { 'text/xml': { schema: CachePolicyAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyCachePolicies',
      content: { 'text/xml': { schema: TooManyCachePoliciesSchema } },
    },
    485: {
      description: 'TooManyHeadersInCachePolicy',
      content: { 'text/xml': { schema: TooManyHeadersInCachePolicySchema } },
    },
    486: {
      description: 'TooManyCookiesInCachePolicy',
      content: { 'text/xml': { schema: TooManyCookiesInCachePolicySchema } },
    },
    487: {
      description: 'TooManyQueryStringsInCachePolicy',
      content: { 'text/xml': { schema: TooManyQueryStringsInCachePolicySchema } },
    },
  },
})

export const get20200531OriginAccessIdentityCloudfrontRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-identity/cloudfront',
  description: 'Lists origin access identities.',
  operationId: 'ListCloudFrontOriginAccessIdentities2020_05_31',
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
              "Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).",
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
            required: false,
            description:
              'The maximum number of origin access identities you want in the response body.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListCloudFrontOriginAccessIdentitiesResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531OriginAccessIdentityCloudfrontRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/origin-access-identity/cloudfront',
  description:
    'Creates a new origin access identity. If you\'re using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.',
  operationId: 'CreateCloudFrontOriginAccessIdentity2020_05_31',
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
              CloudFrontOriginAccessIdentityConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is created.</p> <p>If the <code>CallerReference</code> is a value already sent in a previous identity request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical to the original request (ignoring white space), the response includes the same information returned to the original request.</p> <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity, but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the origin access identity. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.',
                  required: [],
                }),
            })
            .openapi({ required: ['CloudFrontOriginAccessIdentityConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCloudFrontOriginAccessIdentityResultSchema } },
    },
    480: {
      description: 'CloudFrontOriginAccessIdentityAlreadyExists',
      content: { 'text/xml': { schema: CloudFrontOriginAccessIdentityAlreadyExistsSchema } },
    },
    481: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    482: {
      description: 'TooManyCloudFrontOriginAccessIdentities',
      content: { 'text/xml': { schema: TooManyCloudFrontOriginAccessIdentitiesSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
  },
})

export const get20200531ContinuousDeploymentPolicyRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/continuous-deployment-policy',
  description:
    '<p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListContinuousDeploymentPolicies2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description:
              'The maximum number of continuous deployment policies that you want returned in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListContinuousDeploymentPoliciesResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    482: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
  },
})

export const post20200531ContinuousDeploymentPolicyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/continuous-deployment-policy',
  description:
    "<p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>",
  operationId: 'CreateContinuousDeploymentPolicy2020_05_31',
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
              ContinuousDeploymentPolicyConfig: z
                .object({
                  StagingDistributionDnsNames: StagingDistributionDnsNamesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The CloudFront domain name of the staging distribution. For example: <code>d111111abcdef8.cloudfront.net</code>.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is <code>true</code>, this policy is enabled and in effect. When this value is <code>false</code>, this policy is not enabled and has no effect.',
                      }),
                  ).exactOptional(),
                  TrafficConfig: TrafficConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the parameters for routing production traffic from your primary to staging distributions.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains the configuration for a continuous deployment policy.',
                  required: [],
                }),
            })
            .openapi({ required: ['ContinuousDeploymentPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateContinuousDeploymentPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    483: {
      description: 'ContinuousDeploymentPolicyAlreadyExists',
      content: { 'text/xml': { schema: ContinuousDeploymentPolicyAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyContinuousDeploymentPolicies',
      content: { 'text/xml': { schema: TooManyContinuousDeploymentPoliciesSchema } },
    },
    485: {
      description: 'StagingDistributionInUse',
      content: { 'text/xml': { schema: StagingDistributionInUseSchema } },
    },
  },
})

export const get20200531DistributionRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distribution',
  description: 'List CloudFront distributions.',
  operationId: 'ListDistributions2020_05_31',
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
              "Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).",
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
            required: false,
            description: 'The maximum number of distributions you want in the response body.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDistributionsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531DistributionRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distribution',
  description: 'Creates a CloudFront distribution.',
  operationId: 'CreateDistribution2020_05_31',
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
              DistributionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
                      }),
                  ).exactOptional(),
                  Aliases: AliasesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.',
                      }),
                  ).exactOptional(),
                  DefaultRootObject: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The object that you want CloudFront to request from your origin (for example, <code>index.html</code>) when a viewer requests the root URL for your distribution (<code>https://www.example.com</code>) instead of an object in your distribution (<code>https://www.example.com/product-description.html</code>). Specifying a default root object avoids exposing the contents of your distribution.</p> <p>Specify only the object name, for example, <code>index.html</code>. Don\'t add a <code>/</code> before the object name.</p> <p>If you don\'t want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  Origins: OriginsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about origins for this distribution.',
                      }),
                  ).exactOptional(),
                  OriginGroups: OriginGroupsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about origin groups for this distribution.',
                      }),
                  ).exactOptional(),
                  DefaultCacheBehavior: DefaultCacheBehaviorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
                      }),
                  ).exactOptional(),
                  CacheBehaviors: CacheBehaviorsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains zero or more <code>CacheBehavior</code> elements.',
                      }),
                  ).exactOptional(),
                  CustomErrorResponses: CustomErrorResponsesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  Comment: CommentTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the distribution. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Logging: LoggingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  PriceClass: PriceClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.</p>',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'From this field, you can enable or disable the selected distribution.',
                      }),
                  ).exactOptional(),
                  ViewerCertificate: ViewerCertificateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.",
                      }),
                  ).exactOptional(),
                  Restrictions: RestrictionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that identifies ways in which you want to restrict distribution of your content.',
                      }),
                  ).exactOptional(),
                  WebACLId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>',
                      }),
                  ).exactOptional(),
                  HttpVersion: HttpVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>(Optional) Specify the maximum HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don\'t support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).</p> <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>',
                      }),
                  ).exactOptional(),
                  IsIPV6Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.</p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html\">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>",
                      }),
                  ).exactOptional(),
                  ContinuousDeploymentPolicyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.',
                      }),
                  ).exactOptional(),
                  Staging: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A distribution configuration.', required: [] }),
            })
            .openapi({ required: ['DistributionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDistributionResultSchema } },
    },
    480: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    481: {
      description: 'DistributionAlreadyExists',
      content: { 'text/xml': { schema: DistributionAlreadyExistsSchema } },
    },
    482: { description: 'InvalidOrigin', content: { 'text/xml': { schema: InvalidOriginSchema } } },
    483: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    484: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    485: {
      description: 'IllegalOriginAccessConfiguration',
      content: { 'text/xml': { schema: IllegalOriginAccessConfigurationSchema } },
    },
    486: {
      description: 'TooManyDistributionsAssociatedToOriginAccessControl',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginAccessControlSchema },
      },
    },
    487: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    488: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    489: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    490: {
      description: 'InvalidViewerCertificate',
      content: { 'text/xml': { schema: InvalidViewerCertificateSchema } },
    },
    491: {
      description: 'InvalidMinimumProtocolVersion',
      content: { 'text/xml': { schema: InvalidMinimumProtocolVersionSchema } },
    },
    492: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    493: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    494: {
      description: 'TooManyDistributions',
      content: { 'text/xml': { schema: TooManyDistributionsSchema } },
    },
    495: {
      description: 'InvalidDefaultRootObject',
      content: { 'text/xml': { schema: InvalidDefaultRootObjectSchema } },
    },
    496: {
      description: 'InvalidRelativePath',
      content: { 'text/xml': { schema: InvalidRelativePathSchema } },
    },
    497: {
      description: 'InvalidErrorCode',
      content: { 'text/xml': { schema: InvalidErrorCodeSchema } },
    },
    498: {
      description: 'InvalidResponseCode',
      content: { 'text/xml': { schema: InvalidResponseCodeSchema } },
    },
    499: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    500: {
      description: 'InvalidRequiredProtocol',
      content: { 'text/xml': { schema: InvalidRequiredProtocolSchema } },
    },
    501: { description: 'NoSuchOrigin', content: { 'text/xml': { schema: NoSuchOriginSchema } } },
    502: {
      description: 'TooManyOrigins',
      content: { 'text/xml': { schema: TooManyOriginsSchema } },
    },
    503: {
      description: 'TooManyOriginGroupsPerDistribution',
      content: { 'text/xml': { schema: TooManyOriginGroupsPerDistributionSchema } },
    },
    504: {
      description: 'TooManyCacheBehaviors',
      content: { 'text/xml': { schema: TooManyCacheBehaviorsSchema } },
    },
    505: {
      description: 'TooManyCookieNamesInWhiteList',
      content: { 'text/xml': { schema: TooManyCookieNamesInWhiteListSchema } },
    },
    506: {
      description: 'InvalidForwardCookies',
      content: { 'text/xml': { schema: InvalidForwardCookiesSchema } },
    },
    507: {
      description: 'TooManyHeadersInForwardedValues',
      content: { 'text/xml': { schema: TooManyHeadersInForwardedValuesSchema } },
    },
    508: {
      description: 'InvalidHeadersForS3Origin',
      content: { 'text/xml': { schema: InvalidHeadersForS3OriginSchema } },
    },
    509: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    510: {
      description: 'TooManyCertificates',
      content: { 'text/xml': { schema: TooManyCertificatesSchema } },
    },
    511: {
      description: 'InvalidLocationCode',
      content: { 'text/xml': { schema: InvalidLocationCodeSchema } },
    },
    512: {
      description: 'InvalidGeoRestrictionParameter',
      content: { 'text/xml': { schema: InvalidGeoRestrictionParameterSchema } },
    },
    513: {
      description: 'InvalidProtocolSettings',
      content: { 'text/xml': { schema: InvalidProtocolSettingsSchema } },
    },
    514: {
      description: 'InvalidTTLOrder',
      content: { 'text/xml': { schema: InvalidTTLOrderSchema } },
    },
    515: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
    516: {
      description: 'TooManyOriginCustomHeaders',
      content: { 'text/xml': { schema: TooManyOriginCustomHeadersSchema } },
    },
    517: {
      description: 'TooManyQueryStringParameters',
      content: { 'text/xml': { schema: TooManyQueryStringParametersSchema } },
    },
    518: {
      description: 'InvalidQueryStringParameters',
      content: { 'text/xml': { schema: InvalidQueryStringParametersSchema } },
    },
    519: {
      description: 'TooManyDistributionsWithLambdaAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithLambdaAssociationsSchema } },
    },
    520: {
      description: 'TooManyDistributionsWithSingleFunctionARN',
      content: { 'text/xml': { schema: TooManyDistributionsWithSingleFunctionARNSchema } },
    },
    521: {
      description: 'TooManyLambdaFunctionAssociations',
      content: { 'text/xml': { schema: TooManyLambdaFunctionAssociationsSchema } },
    },
    522: {
      description: 'InvalidLambdaFunctionAssociation',
      content: { 'text/xml': { schema: InvalidLambdaFunctionAssociationSchema } },
    },
    523: {
      description: 'TooManyDistributionsWithFunctionAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithFunctionAssociationsSchema } },
    },
    524: {
      description: 'TooManyFunctionAssociations',
      content: { 'text/xml': { schema: TooManyFunctionAssociationsSchema } },
    },
    525: {
      description: 'InvalidFunctionAssociation',
      content: { 'text/xml': { schema: InvalidFunctionAssociationSchema } },
    },
    526: {
      description: 'InvalidOriginReadTimeout',
      content: { 'text/xml': { schema: InvalidOriginReadTimeoutSchema } },
    },
    527: {
      description: 'InvalidOriginKeepaliveTimeout',
      content: { 'text/xml': { schema: InvalidOriginKeepaliveTimeoutSchema } },
    },
    528: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    529: {
      description: 'IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior',
      content: {
        'text/xml': { schema: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema },
      },
    },
    530: {
      description: 'TooManyDistributionsAssociatedToFieldLevelEncryptionConfig',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema },
      },
    },
    531: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    532: {
      description: 'TooManyDistributionsAssociatedToCachePolicy',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToCachePolicySchema } },
    },
    533: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    534: {
      description: 'TooManyDistributionsAssociatedToResponseHeadersPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToResponseHeadersPolicySchema },
      },
    },
    535: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    536: {
      description: 'TooManyDistributionsAssociatedToOriginRequestPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginRequestPolicySchema },
      },
    },
    537: {
      description: 'TooManyDistributionsAssociatedToKeyGroup',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToKeyGroupSchema } },
    },
    538: {
      description: 'TooManyKeyGroupsAssociatedToDistribution',
      content: { 'text/xml': { schema: TooManyKeyGroupsAssociatedToDistributionSchema } },
    },
    539: {
      description: 'TrustedKeyGroupDoesNotExist',
      content: { 'text/xml': { schema: TrustedKeyGroupDoesNotExistSchema } },
    },
    540: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    541: {
      description: 'RealtimeLogConfigOwnerMismatch',
      content: { 'text/xml': { schema: RealtimeLogConfigOwnerMismatchSchema } },
    },
    542: {
      description: 'ContinuousDeploymentPolicyInUse',
      content: { 'text/xml': { schema: ContinuousDeploymentPolicyInUseSchema } },
    },
    543: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
    544: {
      description: 'InvalidDomainNameForOriginAccessControl',
      content: { 'text/xml': { schema: InvalidDomainNameForOriginAccessControlSchema } },
    },
  },
})

export const post20200531DistributionWithTagsRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distribution#WithTags',
  description:
    '<p>Create a new distribution with tags. This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html">CreateDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html">TagResource</a> </p> </li> </ul>',
  operationId: 'CreateDistributionWithTags2020_05_31',
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
      WithTags: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().pipe(z.literal(true)))
        .openapi({
          param: {
            name: 'WithTags',
            in: 'query',
            required: true,
            schema: { type: 'boolean', enum: [true] },
            allowEmptyValue: true,
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              DistributionConfigWithTags: z
                .object({
                  DistributionConfig: DistributionConfigSchema.and(
                    z.any().openapi({ description: 'A distribution configuration.' }),
                  ).exactOptional(),
                  Tags: TagsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains zero or more <code>Tag</code> elements.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A distribution Configuration and a list of tags to be associated with the distribution.',
                  required: [],
                }),
            })
            .openapi({ required: ['DistributionConfigWithTags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDistributionWithTagsResultSchema } },
    },
    480: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    481: {
      description: 'DistributionAlreadyExists',
      content: { 'text/xml': { schema: DistributionAlreadyExistsSchema } },
    },
    482: { description: 'InvalidOrigin', content: { 'text/xml': { schema: InvalidOriginSchema } } },
    483: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    484: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    485: {
      description: 'IllegalOriginAccessConfiguration',
      content: { 'text/xml': { schema: IllegalOriginAccessConfigurationSchema } },
    },
    486: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    487: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    488: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    489: {
      description: 'InvalidViewerCertificate',
      content: { 'text/xml': { schema: InvalidViewerCertificateSchema } },
    },
    490: {
      description: 'InvalidMinimumProtocolVersion',
      content: { 'text/xml': { schema: InvalidMinimumProtocolVersionSchema } },
    },
    491: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    492: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    493: {
      description: 'TooManyDistributions',
      content: { 'text/xml': { schema: TooManyDistributionsSchema } },
    },
    494: {
      description: 'InvalidDefaultRootObject',
      content: { 'text/xml': { schema: InvalidDefaultRootObjectSchema } },
    },
    495: {
      description: 'InvalidRelativePath',
      content: { 'text/xml': { schema: InvalidRelativePathSchema } },
    },
    496: {
      description: 'InvalidErrorCode',
      content: { 'text/xml': { schema: InvalidErrorCodeSchema } },
    },
    497: {
      description: 'InvalidResponseCode',
      content: { 'text/xml': { schema: InvalidResponseCodeSchema } },
    },
    498: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    499: {
      description: 'InvalidRequiredProtocol',
      content: { 'text/xml': { schema: InvalidRequiredProtocolSchema } },
    },
    500: { description: 'NoSuchOrigin', content: { 'text/xml': { schema: NoSuchOriginSchema } } },
    501: {
      description: 'TooManyOrigins',
      content: { 'text/xml': { schema: TooManyOriginsSchema } },
    },
    502: {
      description: 'TooManyOriginGroupsPerDistribution',
      content: { 'text/xml': { schema: TooManyOriginGroupsPerDistributionSchema } },
    },
    503: {
      description: 'TooManyCacheBehaviors',
      content: { 'text/xml': { schema: TooManyCacheBehaviorsSchema } },
    },
    504: {
      description: 'TooManyCookieNamesInWhiteList',
      content: { 'text/xml': { schema: TooManyCookieNamesInWhiteListSchema } },
    },
    505: {
      description: 'InvalidForwardCookies',
      content: { 'text/xml': { schema: InvalidForwardCookiesSchema } },
    },
    506: {
      description: 'TooManyHeadersInForwardedValues',
      content: { 'text/xml': { schema: TooManyHeadersInForwardedValuesSchema } },
    },
    507: {
      description: 'InvalidHeadersForS3Origin',
      content: { 'text/xml': { schema: InvalidHeadersForS3OriginSchema } },
    },
    508: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    509: {
      description: 'TooManyCertificates',
      content: { 'text/xml': { schema: TooManyCertificatesSchema } },
    },
    510: {
      description: 'InvalidLocationCode',
      content: { 'text/xml': { schema: InvalidLocationCodeSchema } },
    },
    511: {
      description: 'InvalidGeoRestrictionParameter',
      content: { 'text/xml': { schema: InvalidGeoRestrictionParameterSchema } },
    },
    512: {
      description: 'InvalidProtocolSettings',
      content: { 'text/xml': { schema: InvalidProtocolSettingsSchema } },
    },
    513: {
      description: 'InvalidTTLOrder',
      content: { 'text/xml': { schema: InvalidTTLOrderSchema } },
    },
    514: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
    515: {
      description: 'TooManyOriginCustomHeaders',
      content: { 'text/xml': { schema: TooManyOriginCustomHeadersSchema } },
    },
    516: {
      description: 'InvalidTagging',
      content: { 'text/xml': { schema: InvalidTaggingSchema } },
    },
    517: {
      description: 'TooManyQueryStringParameters',
      content: { 'text/xml': { schema: TooManyQueryStringParametersSchema } },
    },
    518: {
      description: 'InvalidQueryStringParameters',
      content: { 'text/xml': { schema: InvalidQueryStringParametersSchema } },
    },
    519: {
      description: 'TooManyDistributionsWithLambdaAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithLambdaAssociationsSchema } },
    },
    520: {
      description: 'TooManyDistributionsWithSingleFunctionARN',
      content: { 'text/xml': { schema: TooManyDistributionsWithSingleFunctionARNSchema } },
    },
    521: {
      description: 'TooManyLambdaFunctionAssociations',
      content: { 'text/xml': { schema: TooManyLambdaFunctionAssociationsSchema } },
    },
    522: {
      description: 'InvalidLambdaFunctionAssociation',
      content: { 'text/xml': { schema: InvalidLambdaFunctionAssociationSchema } },
    },
    523: {
      description: 'TooManyDistributionsWithFunctionAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithFunctionAssociationsSchema } },
    },
    524: {
      description: 'TooManyFunctionAssociations',
      content: { 'text/xml': { schema: TooManyFunctionAssociationsSchema } },
    },
    525: {
      description: 'InvalidFunctionAssociation',
      content: { 'text/xml': { schema: InvalidFunctionAssociationSchema } },
    },
    526: {
      description: 'InvalidOriginReadTimeout',
      content: { 'text/xml': { schema: InvalidOriginReadTimeoutSchema } },
    },
    527: {
      description: 'InvalidOriginKeepaliveTimeout',
      content: { 'text/xml': { schema: InvalidOriginKeepaliveTimeoutSchema } },
    },
    528: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    529: {
      description: 'IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior',
      content: {
        'text/xml': { schema: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema },
      },
    },
    530: {
      description: 'TooManyDistributionsAssociatedToFieldLevelEncryptionConfig',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema },
      },
    },
    531: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    532: {
      description: 'TooManyDistributionsAssociatedToCachePolicy',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToCachePolicySchema } },
    },
    533: {
      description: 'TooManyDistributionsAssociatedToOriginAccessControl',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginAccessControlSchema },
      },
    },
    534: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    535: {
      description: 'TooManyDistributionsAssociatedToResponseHeadersPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToResponseHeadersPolicySchema },
      },
    },
    536: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    537: {
      description: 'TooManyDistributionsAssociatedToOriginRequestPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginRequestPolicySchema },
      },
    },
    538: {
      description: 'TooManyDistributionsAssociatedToKeyGroup',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToKeyGroupSchema } },
    },
    539: {
      description: 'TooManyKeyGroupsAssociatedToDistribution',
      content: { 'text/xml': { schema: TooManyKeyGroupsAssociatedToDistributionSchema } },
    },
    540: {
      description: 'TrustedKeyGroupDoesNotExist',
      content: { 'text/xml': { schema: TrustedKeyGroupDoesNotExistSchema } },
    },
    541: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    542: {
      description: 'RealtimeLogConfigOwnerMismatch',
      content: { 'text/xml': { schema: RealtimeLogConfigOwnerMismatchSchema } },
    },
    543: {
      description: 'ContinuousDeploymentPolicyInUse',
      content: { 'text/xml': { schema: ContinuousDeploymentPolicyInUseSchema } },
    },
    544: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
    545: {
      description: 'InvalidDomainNameForOriginAccessControl',
      content: { 'text/xml': { schema: InvalidDomainNameForOriginAccessControlSchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption',
  description:
    'List all field-level encryption configurations that have been created in CloudFront for this account.',
  operationId: 'ListFieldLevelEncryptionConfigs2020_05_31',
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
              "Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).",
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
            required: false,
            description:
              'The maximum number of field-level encryption configurations you want in the response body.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListFieldLevelEncryptionConfigsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531FieldLevelEncryptionRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/field-level-encryption',
  description: 'Create a new field-level encryption configuration.',
  operationId: 'CreateFieldLevelEncryptionConfig2020_05_31',
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
              FieldLevelEncryptionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "A unique number that ensures the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An optional comment about the configuration. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  QueryArgProfileConfig: QueryArgProfileConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.",
                      }),
                  ).exactOptional(),
                  ContentTypeProfileConfig: ContentTypeProfileConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex data type that includes the profile configurations specified for field-level encryption.',
                  required: [],
                }),
            })
            .openapi({ required: ['FieldLevelEncryptionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateFieldLevelEncryptionConfigResultSchema } },
    },
    480: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
    483: {
      description: 'FieldLevelEncryptionConfigAlreadyExists',
      content: { 'text/xml': { schema: FieldLevelEncryptionConfigAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyFieldLevelEncryptionConfigs',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionConfigsSchema } },
    },
    485: {
      description: 'TooManyFieldLevelEncryptionQueryArgProfiles',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionQueryArgProfilesSchema } },
    },
    486: {
      description: 'TooManyFieldLevelEncryptionContentTypeProfiles',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionContentTypeProfilesSchema } },
    },
    487: {
      description: 'QueryArgProfileEmpty',
      content: { 'text/xml': { schema: QueryArgProfileEmptySchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionProfileRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption-profile',
  description:
    'Request a list of field-level encryption profiles that have been created in CloudFront for this account.',
  operationId: 'ListFieldLevelEncryptionProfiles2020_05_31',
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
              "Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).",
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
            required: false,
            description:
              'The maximum number of field-level encryption profiles you want in the response body. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListFieldLevelEncryptionProfilesResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531FieldLevelEncryptionProfileRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/field-level-encryption-profile',
  description: 'Create a field-level encryption profile.',
  operationId: 'CreateFieldLevelEncryptionProfile2020_05_31',
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
              FieldLevelEncryptionProfileConfig: z
                .object({
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Profile name for the field-level encryption profile.',
                      }),
                  ).exactOptional(),
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A unique number that ensures that the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  EncryptionEntities: EncryptionEntitiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A complex data type of profiles for the field-level encryption.',
                  required: [],
                }),
            })
            .openapi({ required: ['FieldLevelEncryptionProfileConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateFieldLevelEncryptionProfileResultSchema } },
    },
    480: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
    483: {
      description: 'FieldLevelEncryptionProfileAlreadyExists',
      content: { 'text/xml': { schema: FieldLevelEncryptionProfileAlreadyExistsSchema } },
    },
    484: {
      description: 'FieldLevelEncryptionProfileSizeExceeded',
      content: { 'text/xml': { schema: FieldLevelEncryptionProfileSizeExceededSchema } },
    },
    485: {
      description: 'TooManyFieldLevelEncryptionProfiles',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionProfilesSchema } },
    },
    486: {
      description: 'TooManyFieldLevelEncryptionEncryptionEntities',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionEncryptionEntitiesSchema } },
    },
    487: {
      description: 'TooManyFieldLevelEncryptionFieldPatterns',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionFieldPatternsSchema } },
    },
  },
})

export const get20200531FunctionRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/function',
  description:
    '<p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListFunctions2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description: 'The maximum number of functions that you want in the response.',
            schema: { type: 'string' },
          },
        }),
      Stage: z
        .enum(['DEVELOPMENT', 'LIVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Stage',
            in: 'query',
            required: false,
            description:
              'An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.',
            schema: { type: 'string', enum: ['DEVELOPMENT', 'LIVE'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListFunctionsResultSchema } } },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const post20200531FunctionRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/function',
  description:
    "<p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>",
  operationId: 'CreateFunction2020_05_31',
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
                .regex(/^[a-zA-Z0-9-_]{1,64}$/)
                .min(1)
                .max(64)
                .openapi({ description: 'A name to identify the function.' }),
              FunctionConfig: z
                .object({
                  Comment: StringSchema.and(
                    z.any().openapi({ description: 'A comment to describe the function.' }),
                  ).exactOptional(),
                  Runtime: FunctionRuntimeSchema.and(
                    z.any().openapi({ description: "The function's runtime environment verion." }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains configuration information about a CloudFront function.',
                  required: [],
                }),
              FunctionCode: z
                .string()
                .min(1)
                .max(40960)
                .openapi({
                  description:
                    'The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                }),
            })
            .openapi({ required: ['Name', 'FunctionConfig', 'FunctionCode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateFunctionResultSchema } },
    },
    480: {
      description: 'TooManyFunctions',
      content: { 'text/xml': { schema: TooManyFunctionsSchema } },
    },
    481: {
      description: 'FunctionAlreadyExists',
      content: { 'text/xml': { schema: FunctionAlreadyExistsSchema } },
    },
    482: {
      description: 'FunctionSizeLimitExceeded',
      content: { 'text/xml': { schema: FunctionSizeLimitExceededSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const get20200531DistributionDistributionIdInvalidationRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distribution/{DistributionId}/invalidation',
  description: 'Lists invalidation batches.',
  operationId: 'ListInvalidations2020_05_31',
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
      DistributionId: z
        .string()
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'path',
            required: true,
            description: "The distribution's ID.",
            schema: { type: 'string' },
          },
        }),
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
              "Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.",
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
            required: false,
            description:
              'The maximum number of invalidation batches that you want in the response body.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListInvalidationsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const post20200531DistributionDistributionIdInvalidationRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distribution/{DistributionId}/invalidation',
  description: 'Create a new invalidation.',
  operationId: 'CreateInvalidation2020_05_31',
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
      DistributionId: z
        .string()
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'path',
            required: true,
            description: "The distribution's id.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              InvalidationBatch: z
                .object({
                  Paths: PathsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the value to prevent you from accidentally resubmitting an identical request. Whenever you create a new invalidation request, you must specify a new value for <code>CallerReference</code> and change other values in the request as applicable. One way to ensure that the value of <code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example, <code>20120301090000</code>.</p> <p>If you make a second invalidation request with the same value for <code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't create a new invalidation request. Instead, CloudFront returns information about the invalidation request that you previously created with the same <code>CallerReference</code>.</p> <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation batch request but the content of any <code>Path</code> is different from the original request, CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>",
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'An invalidation batch.', required: [] }),
            })
            .openapi({ required: ['InvalidationBatch'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateInvalidationResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    484: { description: 'BatchTooLarge', content: { 'text/xml': { schema: BatchTooLargeSchema } } },
    485: {
      description: 'TooManyInvalidationsInProgress',
      content: { 'text/xml': { schema: TooManyInvalidationsInProgressSchema } },
    },
    486: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
  },
})

export const get20200531KeyGroupRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/key-group',
  description:
    '<p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListKeyGroups2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description: 'The maximum number of key groups that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListKeyGroupsResultSchema } } },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531KeyGroupRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/key-group',
  description:
    '<p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateKeyGroup2020_05_31',
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
              KeyGroupConfig: z
                .object({
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A name to identify the key group.' }),
                  ).exactOptional(),
                  Items: PublicKeyIdListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of the identifiers of the public keys in the key group.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the key group. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['KeyGroupConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateKeyGroupResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'KeyGroupAlreadyExists',
      content: { 'text/xml': { schema: KeyGroupAlreadyExistsSchema } },
    },
    482: {
      description: 'TooManyKeyGroups',
      content: { 'text/xml': { schema: TooManyKeyGroupsSchema } },
    },
    483: {
      description: 'TooManyPublicKeysInKeyGroup',
      content: { 'text/xml': { schema: TooManyPublicKeysInKeyGroupSchema } },
    },
  },
})

export const get20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/',
  description:
    'Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.',
  operationId: 'GetMonitoringSubscription2020_05_31',
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
      DistributionId: z
        .string()
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'path',
            required: true,
            description: 'The ID of the distribution that you are getting metrics information for.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetMonitoringSubscriptionResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    482: {
      description: 'NoSuchMonitoringSubscription',
      content: { 'text/xml': { schema: NoSuchMonitoringSubscriptionSchema } },
    },
    483: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const post20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/',
  description:
    '<p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateMonitoringSubscription2020_05_31',
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
      DistributionId: z
        .string()
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'path',
            required: true,
            description: 'The ID of the distribution that you are enabling metrics for.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              MonitoringSubscription: z
                .object({
                  RealtimeMetricsSubscriptionConfig: RealtimeMetricsSubscriptionConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A subscription configuration for additional CloudWatch metrics.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.',
                  required: [],
                }),
            })
            .openapi({ required: ['MonitoringSubscription'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateMonitoringSubscriptionResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    482: {
      description: 'MonitoringSubscriptionAlreadyExists',
      content: { 'text/xml': { schema: MonitoringSubscriptionAlreadyExistsSchema } },
    },
    483: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const delete20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute =
  createRoute({
    method: 'delete',
    path: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/',
    description:
      'Disables additional CloudWatch metrics for the specified CloudFront distribution.',
    operationId: 'DeleteMonitoringSubscription2020_05_31',
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
        DistributionId: z
          .string()
          .openapi({
            param: {
              name: 'DistributionId',
              in: 'path',
              required: true,
              description: 'The ID of the distribution that you are disabling metrics for.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/xml': { schema: DeleteMonitoringSubscriptionResultSchema } },
      },
      480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
      481: {
        description: 'NoSuchDistribution',
        content: { 'text/xml': { schema: NoSuchDistributionSchema } },
      },
      482: {
        description: 'NoSuchMonitoringSubscription',
        content: { 'text/xml': { schema: NoSuchMonitoringSubscriptionSchema } },
      },
      483: {
        description: 'UnsupportedOperation',
        content: { 'text/xml': { schema: UnsupportedOperationSchema } },
      },
    },
  })

export const get20200531OriginAccessControlRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-control',
  description:
    '<p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>',
  operationId: 'ListOriginAccessControls2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description:
              'The maximum number of origin access controls that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListOriginAccessControlsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531OriginAccessControlRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/origin-access-control',
  description:
    '<p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin\'s content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateOriginAccessControl2020_05_31',
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
              OriginAccessControlConfig: z
                .object({
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A name to identify the origin access control.' }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z.any().openapi({ description: 'A description of the origin access control.' }),
                  ).exactOptional(),
                  SigningProtocol: OriginAccessControlSigningProtocolsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.',
                      }),
                  ).exactOptional(),
                  SigningBehavior: OriginAccessControlSigningBehaviorsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies which requests CloudFront signs (adds authentication information to). Specify <code>always</code> for the most common use case. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings">origin access control advanced settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>This field can have one of the following values:</p> <ul> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if one exists.</p> </li> <li> <p> <code>never</code> – CloudFront doesn\'t sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn\'t contain the <code>Authorization</code> header, then CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, then CloudFront doesn\'t sign the origin request and instead passes along the <code>Authorization</code> header from the viewer request. <b>WARNING: To pass along the <code>Authorization</code> header from the viewer request, you <i>must</i> add the <code>Authorization</code> header to a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">cache policy</a> for all cache behaviors that use origins associated with this origin access control.</b> </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  OriginAccessControlOriginType: OriginAccessControlOriginTypesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The type of origin that this origin access control is for.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A CloudFront origin access control configuration.',
                  required: [],
                }),
            })
            .openapi({ required: ['OriginAccessControlConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateOriginAccessControlResultSchema } },
    },
    480: {
      description: 'OriginAccessControlAlreadyExists',
      content: { 'text/xml': { schema: OriginAccessControlAlreadyExistsSchema } },
    },
    481: {
      description: 'TooManyOriginAccessControls',
      content: { 'text/xml': { schema: TooManyOriginAccessControlsSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const get20200531OriginRequestPolicyRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-request-policy',
  description:
    '<p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListOriginRequestPolicies2020_05_31',
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
      Type: z
        .enum(['managed', 'custom'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Type',
            in: 'query',
            required: false,
            description:
              '<p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>',
            schema: { type: 'string', enum: ['managed', 'custom'] },
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
              "Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description:
              'The maximum number of origin request policies that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListOriginRequestPoliciesResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531OriginRequestPolicyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/origin-request-policy',
  description:
    '<p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it\'s attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can\'t find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateOriginRequestPolicy2020_05_31',
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
              OriginRequestPolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the origin request policy. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique name to identify the origin request policy.',
                      }),
                  ).exactOptional(),
                  HeadersConfig: OriginRequestPolicyHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.',
                      }),
                  ).exactOptional(),
                  CookiesConfig: OriginRequestPolicyCookiesConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The cookies from viewer requests to include in origin requests.',
                      }),
                  ).exactOptional(),
                  QueryStringsConfig: OriginRequestPolicyQueryStringsConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The URL query strings from viewer requests to include in origin requests.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>",
                  required: [],
                }),
            })
            .openapi({ required: ['OriginRequestPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateOriginRequestPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: {
      description: 'OriginRequestPolicyAlreadyExists',
      content: { 'text/xml': { schema: OriginRequestPolicyAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyOriginRequestPolicies',
      content: { 'text/xml': { schema: TooManyOriginRequestPoliciesSchema } },
    },
    485: {
      description: 'TooManyHeadersInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyHeadersInOriginRequestPolicySchema } },
    },
    486: {
      description: 'TooManyCookiesInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyCookiesInOriginRequestPolicySchema } },
    },
    487: {
      description: 'TooManyQueryStringsInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyQueryStringsInOriginRequestPolicySchema } },
    },
  },
})

export const get20200531PublicKeyRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/public-key',
  description: 'List all public keys that have been added to CloudFront for this account.',
  operationId: 'ListPublicKeys2020_05_31',
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
              "Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).",
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
            required: false,
            description: 'The maximum number of public keys you want in the response body.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPublicKeysResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531PublicKeyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/public-key',
  description:
    'Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
  operationId: 'CreatePublicKey2020_05_31',
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
              PublicKeyConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A string included in the request to help make sure that the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A name to help identify the public key.' }),
                  ).exactOptional(),
                  EncodedKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the public key. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['PublicKeyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreatePublicKeyResultSchema } },
    },
    480: {
      description: 'PublicKeyAlreadyExists',
      content: { 'text/xml': { schema: PublicKeyAlreadyExistsSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'TooManyPublicKeys',
      content: { 'text/xml': { schema: TooManyPublicKeysSchema } },
    },
  },
})

export const get20200531RealtimeLogConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/realtime-log-config',
  description:
    '<p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListRealtimeLogConfigs2020_05_31',
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
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of real-time log configurations that you want in the response.',
            schema: { type: 'string' },
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
              "Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListRealtimeLogConfigsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    482: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
  },
})

export const post20200531RealtimeLogConfigRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/realtime-log-config',
  description:
    '<p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateRealtimeLogConfig2020_05_31',
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
              EndPoints: z
                .array(EndPointSchema)
                .openapi({
                  description:
                    'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
                }),
              Fields: z
                .array(StringSchema.and(z.any().openapi({ xml: { name: 'Field' } })))
                .openapi({
                  description:
                    '<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                }),
              Name: z
                .string()
                .openapi({
                  description: 'A unique name to identify this real-time log configuration.',
                }),
              SamplingRate: z
                .int()
                .openapi({
                  description:
                    'The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.',
                }),
            })
            .openapi({ required: ['EndPoints', 'Fields', 'Name', 'SamplingRate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateRealtimeLogConfigResultSchema } },
    },
    480: {
      description: 'RealtimeLogConfigAlreadyExists',
      content: { 'text/xml': { schema: RealtimeLogConfigAlreadyExistsSchema } },
    },
    481: {
      description: 'TooManyRealtimeLogConfigs',
      content: { 'text/xml': { schema: TooManyRealtimeLogConfigsSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const get20200531ResponseHeadersPolicyRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/response-headers-policy',
  description:
    '<p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListResponseHeadersPolicies2020_05_31',
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
      Type: z
        .enum(['managed', 'custom'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Type',
            in: 'query',
            required: false,
            description:
              '<p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>',
            schema: { type: 'string', enum: ['managed', 'custom'] },
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
              "Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description:
              'The maximum number of response headers policies that you want to get in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListResponseHeadersPoliciesResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531ResponseHeadersPolicyRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/response-headers-policy',
  description:
    '<p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it\'s attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'CreateResponseHeadersPolicy2020_05_31',
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
              ResponseHeadersPolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A comment to describe the response headers policy.</p> <p>The comment cannot be longer than 128 characters.</p>',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A name to identify the response headers policy.</p> <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>',
                      }),
                  ).exactOptional(),
                  CorsConfig: ResponseHeadersPolicyCorsConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).',
                      }),
                  ).exactOptional(),
                  SecurityHeadersConfig: ResponseHeadersPolicySecurityHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of security-related HTTP response headers.',
                      }),
                  ).exactOptional(),
                  ServerTimingHeadersConfig:
                    ResponseHeadersPolicyServerTimingHeadersConfigSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront.',
                        }),
                    ).exactOptional(),
                  CustomHeadersConfig: ResponseHeadersPolicyCustomHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A configuration for a set of custom HTTP response headers.',
                      }),
                  ).exactOptional(),
                  RemoveHeadersConfig: ResponseHeadersPolicyRemoveHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of HTTP headers to remove from the HTTP response.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['ResponseHeadersPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateResponseHeadersPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: {
      description: 'ResponseHeadersPolicyAlreadyExists',
      content: { 'text/xml': { schema: ResponseHeadersPolicyAlreadyExistsSchema } },
    },
    484: {
      description: 'TooManyResponseHeadersPolicies',
      content: { 'text/xml': { schema: TooManyResponseHeadersPoliciesSchema } },
    },
    485: {
      description: 'TooManyCustomHeadersInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooManyCustomHeadersInResponseHeadersPolicySchema } },
    },
    486: {
      description: 'TooLongCSPInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooLongCSPInResponseHeadersPolicySchema } },
    },
    487: {
      description: 'TooManyRemoveHeadersInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooManyRemoveHeadersInResponseHeadersPolicySchema } },
    },
  },
})

export const get20200531StreamingDistributionRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/streaming-distribution',
  description: 'List streaming distributions.',
  operationId: 'ListStreamingDistributions2020_05_31',
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
              'The value that you provided for the <code>Marker</code> request parameter.',
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
            required: false,
            description:
              'The value that you provided for the <code>MaxItems</code> request parameter.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListStreamingDistributionsResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const post20200531StreamingDistributionRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/streaming-distribution',
  description:
    'This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.',
  operationId: 'CreateStreamingDistribution2020_05_31',
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
              StreamingDistributionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
                      }),
                  ).exactOptional(),
                  S3Origin: S3OriginSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.',
                      }),
                  ).exactOptional(),
                  Aliases: AliasesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Any comments you want to include about the streaming distribution.',
                      }),
                  ).exactOptional(),
                  Logging: StreamingLoggingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that controls whether access logs are written for the streaming distribution.',
                      }),
                  ).exactOptional(),
                  TrustedSigners: TrustedSignersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  PriceClass: PriceClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about price class for this streaming distribution.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Whether the streaming distribution is enabled to accept user requests for content.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "The RTMP distribution's configuration information.",
                  required: [],
                }),
            })
            .openapi({ required: ['StreamingDistributionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateStreamingDistributionResultSchema } },
    },
    480: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    481: {
      description: 'StreamingDistributionAlreadyExists',
      content: { 'text/xml': { schema: StreamingDistributionAlreadyExistsSchema } },
    },
    482: { description: 'InvalidOrigin', content: { 'text/xml': { schema: InvalidOriginSchema } } },
    483: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    484: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    485: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    486: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    487: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    488: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    489: {
      description: 'TooManyStreamingDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyStreamingDistributionCNAMEsSchema } },
    },
    490: {
      description: 'TooManyStreamingDistributions',
      content: { 'text/xml': { schema: TooManyStreamingDistributionsSchema } },
    },
    491: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    492: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
  },
})

export const post20200531StreamingDistributionWithTagsRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/streaming-distribution#WithTags',
  description:
    'This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.',
  operationId: 'CreateStreamingDistributionWithTags2020_05_31',
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
      WithTags: z
        .preprocess((val) => (val === '' ? undefined : val), z.stringbool().pipe(z.literal(true)))
        .openapi({
          param: {
            name: 'WithTags',
            in: 'query',
            required: true,
            schema: { type: 'boolean', enum: [true] },
            allowEmptyValue: true,
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              StreamingDistributionConfigWithTags: z
                .object({
                  StreamingDistributionConfig: StreamingDistributionConfigSchema.and(
                    z.any().openapi({ description: 'A streaming distribution Configuration.' }),
                  ).exactOptional(),
                  Tags: TagsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains zero or more <code>Tag</code> elements.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.',
                  required: [],
                }),
            })
            .openapi({ required: ['StreamingDistributionConfigWithTags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateStreamingDistributionWithTagsResultSchema } },
    },
    480: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    481: {
      description: 'StreamingDistributionAlreadyExists',
      content: { 'text/xml': { schema: StreamingDistributionAlreadyExistsSchema } },
    },
    482: { description: 'InvalidOrigin', content: { 'text/xml': { schema: InvalidOriginSchema } } },
    483: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    484: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    485: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    486: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    487: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    488: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    489: {
      description: 'TooManyStreamingDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyStreamingDistributionCNAMEsSchema } },
    },
    490: {
      description: 'TooManyStreamingDistributions',
      content: { 'text/xml': { schema: TooManyStreamingDistributionsSchema } },
    },
    491: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    492: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    493: {
      description: 'InvalidTagging',
      content: { 'text/xml': { schema: InvalidTaggingSchema } },
    },
  },
})

export const get20200531CachePolicyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/cache-policy/{Id}',
  description:
    "<p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>",
  operationId: 'GetCachePolicy2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCachePolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
  },
})

export const put20200531CachePolicyIdRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/cache-policy/{Id}',
  description:
    "<p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
  operationId: 'UpdateCachePolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              CachePolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the cache policy. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A unique name to identify the cache policy.' }),
                  ).exactOptional(),
                  DefaultTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object\'s time to live (TTL) only when the origin does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 86400 seconds (one day). If the value of <code>MinTTL</code> is more than 86400 seconds, then the default value for this field is the same as the value of <code>MinTTL</code>.</p>',
                      }),
                  ).exactOptional(),
                  MaxTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>The default value for this field is 31536000 seconds (one year). If the value of <code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the default value for this field is the same as the value of <code>DefaultTTL</code>.</p>',
                      }),
                  ).exactOptional(),
                  MinTTL: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  ParametersInCacheKeyAndForwardedToOrigin:
                    ParametersInCacheKeyAndForwardedToOriginSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.',
                        }),
                    ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>",
                  required: [],
                }),
            })
            .openapi({ required: ['CachePolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateCachePolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    485: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'CachePolicyAlreadyExists',
      content: { 'text/xml': { schema: CachePolicyAlreadyExistsSchema } },
    },
    488: {
      description: 'TooManyHeadersInCachePolicy',
      content: { 'text/xml': { schema: TooManyHeadersInCachePolicySchema } },
    },
    489: {
      description: 'TooManyCookiesInCachePolicy',
      content: { 'text/xml': { schema: TooManyCookiesInCachePolicySchema } },
    },
    490: {
      description: 'TooManyQueryStringsInCachePolicy',
      content: { 'text/xml': { schema: TooManyQueryStringsInCachePolicySchema } },
    },
  },
})

export const delete20200531CachePolicyIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/cache-policy/{Id}',
  description:
    "<p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>",
  operationId: 'DeleteCachePolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the cache policy that you are deleting. The version is the cache policy's <code>ETag</code> value, which you can get using <code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or <code>GetCachePolicyConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: { description: 'IllegalDelete', content: { 'text/xml': { schema: IllegalDeleteSchema } } },
    485: {
      description: 'CachePolicyInUse',
      content: { 'text/xml': { schema: CachePolicyInUseSchema } },
    },
  },
})

export const get20200531OriginAccessIdentityCloudfrontIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-identity/cloudfront/{Id}',
  description: 'Get the information about an origin access identity.',
  operationId: 'GetCloudFrontOriginAccessIdentity2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The identity's ID.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCloudFrontOriginAccessIdentityResultSchema } },
    },
    480: {
      description: 'NoSuchCloudFrontOriginAccessIdentity',
      content: { 'text/xml': { schema: NoSuchCloudFrontOriginAccessIdentitySchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const delete20200531OriginAccessIdentityCloudfrontIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/origin-access-identity/cloudfront/{Id}',
  description: 'Delete an origin access identity.',
  operationId: 'DeleteCloudFrontOriginAccessIdentity2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The origin access identity's ID.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchCloudFrontOriginAccessIdentity',
      content: { 'text/xml': { schema: NoSuchCloudFrontOriginAccessIdentitySchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'CloudFrontOriginAccessIdentityInUse',
      content: { 'text/xml': { schema: CloudFrontOriginAccessIdentityInUseSchema } },
    },
  },
})

export const get20200531ContinuousDeploymentPolicyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/continuous-deployment-policy/{Id}',
  description:
    "Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).",
  operationId: 'GetContinuousDeploymentPolicy2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the continuous deployment policy that you are getting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetContinuousDeploymentPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
  },
})

export const put20200531ContinuousDeploymentPolicyIdRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/continuous-deployment-policy/{Id}',
  description:
    "<p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
  operationId: 'UpdateContinuousDeploymentPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the continuous deployment policy that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ContinuousDeploymentPolicyConfig: z
                .object({
                  StagingDistributionDnsNames: StagingDistributionDnsNamesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The CloudFront domain name of the staging distribution. For example: <code>d111111abcdef8.cloudfront.net</code>.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is <code>true</code>, this policy is enabled and in effect. When this value is <code>false</code>, this policy is not enabled and has no effect.',
                      }),
                  ).exactOptional(),
                  TrafficConfig: TrafficConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the parameters for routing production traffic from your primary to staging distributions.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains the configuration for a continuous deployment policy.',
                  required: [],
                }),
            })
            .openapi({ required: ['ContinuousDeploymentPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateContinuousDeploymentPolicyResultSchema } },
    },
    480: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    483: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    484: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    485: {
      description: 'StagingDistributionInUse',
      content: { 'text/xml': { schema: StagingDistributionInUseSchema } },
    },
    486: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
  },
})

export const delete20200531ContinuousDeploymentPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/continuous-deployment-policy/{Id}',
  description:
    "<p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>",
  operationId: 'DeleteContinuousDeploymentPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the continuous deployment policy that you are deleting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'ContinuousDeploymentPolicyInUse',
      content: { 'text/xml': { schema: ContinuousDeploymentPolicyInUseSchema } },
    },
    485: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
  },
})

export const get20200531DistributionIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distribution/{Id}',
  description: 'Get the information about a distribution.',
  operationId: 'GetDistribution2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The distribution's ID. If the ID is empty, an empty distribution configuration is returned.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetDistributionResultSchema } },
    },
    480: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const delete20200531DistributionIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/distribution/{Id}',
  description: 'Delete a distribution.',
  operationId: 'DeleteDistribution2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when you disabled the distribution. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The distribution ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'DistributionNotDisabled',
      content: { 'text/xml': { schema: DistributionNotDisabledSchema } },
    },
    482: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    483: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    484: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption/{Id}',
  description: 'Get the field-level encryption configuration information.',
  operationId: 'GetFieldLevelEncryption2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'Request the ID for the field-level encryption configuration information.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetFieldLevelEncryptionResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
  },
})

export const delete20200531FieldLevelEncryptionIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/field-level-encryption/{Id}',
  description: 'Remove a field-level encryption configuration.',
  operationId: 'DeleteFieldLevelEncryptionConfig2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the configuration you want to delete from CloudFront.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'FieldLevelEncryptionConfigInUse',
      content: { 'text/xml': { schema: FieldLevelEncryptionConfigInUseSchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionProfileIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption-profile/{Id}',
  description: 'Get the field-level encryption profile information.',
  operationId: 'GetFieldLevelEncryptionProfile2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'Get the ID for the field-level encryption profile information.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetFieldLevelEncryptionProfileResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
  },
})

export const delete20200531FieldLevelEncryptionProfileIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/field-level-encryption-profile/{Id}',
  description: 'Remove a field-level encryption profile.',
  operationId: 'DeleteFieldLevelEncryptionProfile2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'Request the ID of the profile you want to delete from CloudFront.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'FieldLevelEncryptionProfileInUse',
      content: { 'text/xml': { schema: FieldLevelEncryptionProfileInUseSchema } },
    },
  },
})

export const put20200531FunctionNameIfMatchRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/function/{Name}#If-Match',
  description:
    "<p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
  operationId: 'UpdateFunction2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: true,
            description:
              'The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              FunctionConfig: z
                .object({
                  Comment: StringSchema.and(
                    z.any().openapi({ description: 'A comment to describe the function.' }),
                  ).exactOptional(),
                  Runtime: FunctionRuntimeSchema.and(
                    z.any().openapi({ description: "The function's runtime environment verion." }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains configuration information about a CloudFront function.',
                  required: [],
                }),
              FunctionCode: z
                .string()
                .min(1)
                .max(40960)
                .openapi({
                  description:
                    'The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                }),
            })
            .openapi({ required: ['FunctionConfig', 'FunctionCode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateFunctionResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'FunctionSizeLimitExceeded',
      content: { 'text/xml': { schema: FunctionSizeLimitExceededSchema } },
    },
    485: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const delete20200531FunctionNameIfMatchRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/function/{Name}#If-Match',
  description:
    "<p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
  operationId: 'DeleteFunction2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: true,
            description:
              'The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function that you are deleting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    481: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    482: { description: 'FunctionInUse', content: { 'text/xml': { schema: FunctionInUseSchema } } },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const get20200531KeyGroupIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/key-group/{Id}',
  description:
    "<p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>",
  operationId: 'GetKeyGroup2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetKeyGroupResultSchema } } },
    480: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
  },
})

export const put20200531KeyGroupIdRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/key-group/{Id}',
  description:
    "<p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>",
  operationId: 'UpdateKeyGroup2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the key group that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              KeyGroupConfig: z
                .object({
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A name to identify the key group.' }),
                  ).exactOptional(),
                  Items: PublicKeyIdListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of the identifiers of the public keys in the key group.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the key group. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['KeyGroupConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateKeyGroupResultSchema } },
    },
    480: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    481: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
    482: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    483: {
      description: 'KeyGroupAlreadyExists',
      content: { 'text/xml': { schema: KeyGroupAlreadyExistsSchema } },
    },
    484: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    485: {
      description: 'TooManyPublicKeysInKeyGroup',
      content: { 'text/xml': { schema: TooManyPublicKeysInKeyGroupSchema } },
    },
  },
})

export const delete20200531KeyGroupIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/key-group/{Id}',
  description:
    "<p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>",
  operationId: 'DeleteKeyGroup2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the key group that you are deleting. The version is the key group's <code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    481: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
    482: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    483: { description: 'ResourceInUse', content: { 'text/xml': { schema: ResourceInUseSchema } } },
  },
})

export const get20200531OriginAccessControlIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-control/{Id}',
  description: 'Gets a CloudFront origin access control, including its unique identifier.',
  operationId: 'GetOriginAccessControl2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The unique identifier of the origin access control.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetOriginAccessControlResultSchema } },
    },
    480: {
      description: 'NoSuchOriginAccessControl',
      content: { 'text/xml': { schema: NoSuchOriginAccessControlSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const delete20200531OriginAccessControlIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/origin-access-control/{Id}',
  description:
    "<p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>",
  operationId: 'DeleteOriginAccessControl2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The current version (<code>ETag</code> value) of the origin access control that you are deleting.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the origin access control that you are deleting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchOriginAccessControl',
      content: { 'text/xml': { schema: NoSuchOriginAccessControlSchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'OriginAccessControlInUse',
      content: { 'text/xml': { schema: OriginAccessControlInUseSchema } },
    },
  },
})

export const get20200531OriginRequestPolicyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-request-policy/{Id}',
  description:
    "<p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>",
  operationId: 'GetOriginRequestPolicy2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetOriginRequestPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
  },
})

export const put20200531OriginRequestPolicyIdRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/origin-request-policy/{Id}',
  description:
    "<p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
  operationId: 'UpdateOriginRequestPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              OriginRequestPolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the origin request policy. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A unique name to identify the origin request policy.',
                      }),
                  ).exactOptional(),
                  HeadersConfig: OriginRequestPolicyHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.',
                      }),
                  ).exactOptional(),
                  CookiesConfig: OriginRequestPolicyCookiesConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The cookies from viewer requests to include in origin requests.',
                      }),
                  ).exactOptional(),
                  QueryStringsConfig: OriginRequestPolicyQueryStringsConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The URL query strings from viewer requests to include in origin requests.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>",
                  required: [],
                }),
            })
            .openapi({ required: ['OriginRequestPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateOriginRequestPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    485: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'OriginRequestPolicyAlreadyExists',
      content: { 'text/xml': { schema: OriginRequestPolicyAlreadyExistsSchema } },
    },
    488: {
      description: 'TooManyHeadersInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyHeadersInOriginRequestPolicySchema } },
    },
    489: {
      description: 'TooManyCookiesInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyCookiesInOriginRequestPolicySchema } },
    },
    490: {
      description: 'TooManyQueryStringsInOriginRequestPolicy',
      content: { 'text/xml': { schema: TooManyQueryStringsInOriginRequestPolicySchema } },
    },
  },
})

export const delete20200531OriginRequestPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/origin-request-policy/{Id}',
  description:
    "<p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>",
  operationId: 'DeleteOriginRequestPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The version of the origin request policy that you are deleting. The version is the origin request policy's <code>ETag</code> value, which you can get using <code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or <code>GetOriginRequestPolicyConfig</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: { description: 'IllegalDelete', content: { 'text/xml': { schema: IllegalDeleteSchema } } },
    485: {
      description: 'OriginRequestPolicyInUse',
      content: { 'text/xml': { schema: OriginRequestPolicyInUseSchema } },
    },
  },
})

export const get20200531PublicKeyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/public-key/{Id}',
  description: 'Gets a public key.',
  operationId: 'GetPublicKey2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the public key you are getting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetPublicKeyResultSchema } } },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
  },
})

export const delete20200531PublicKeyIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/public-key/{Id}',
  description: 'Remove a public key you previously added to CloudFront.',
  operationId: 'DeletePublicKey2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the public key you want to remove from CloudFront.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'PublicKeyInUse',
      content: { 'text/xml': { schema: PublicKeyInUseSchema } },
    },
    482: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    483: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
    484: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
  },
})

export const post20200531DeleteRealtimeLogConfigIndexRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/delete-realtime-log-config/',
  description:
    "<p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>",
  operationId: 'DeleteRealtimeLogConfig2020_05_31',
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
                .exactOptional()
                .openapi({ description: 'The name of the real-time log configuration to delete.' }),
              ARN: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the real-time log configuration to delete.',
                }),
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
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    481: {
      description: 'RealtimeLogConfigInUse',
      content: { 'text/xml': { schema: RealtimeLogConfigInUseSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const get20200531ResponseHeadersPolicyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/response-headers-policy/{Id}',
  description:
    "<p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
  operationId: 'GetResponseHeadersPolicy2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetResponseHeadersPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
  },
})

export const put20200531ResponseHeadersPolicyIdRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/response-headers-policy/{Id}',
  description:
    "<p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
  operationId: 'UpdateResponseHeadersPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "<p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier for the response headers policy that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              ResponseHeadersPolicyConfig: z
                .object({
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A comment to describe the response headers policy.</p> <p>The comment cannot be longer than 128 characters.</p>',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A name to identify the response headers policy.</p> <p>The name must be unique for response headers policies in this Amazon Web Services account.</p>',
                      }),
                  ).exactOptional(),
                  CorsConfig: ResponseHeadersPolicyCorsConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).',
                      }),
                  ).exactOptional(),
                  SecurityHeadersConfig: ResponseHeadersPolicySecurityHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of security-related HTTP response headers.',
                      }),
                  ).exactOptional(),
                  ServerTimingHeadersConfig:
                    ResponseHeadersPolicyServerTimingHeadersConfigSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront.',
                        }),
                    ).exactOptional(),
                  CustomHeadersConfig: ResponseHeadersPolicyCustomHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A configuration for a set of custom HTTP response headers.',
                      }),
                  ).exactOptional(),
                  RemoveHeadersConfig: ResponseHeadersPolicyRemoveHeadersConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A configuration for a set of HTTP headers to remove from the HTTP response.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['ResponseHeadersPolicyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateResponseHeadersPolicyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    485: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'ResponseHeadersPolicyAlreadyExists',
      content: { 'text/xml': { schema: ResponseHeadersPolicyAlreadyExistsSchema } },
    },
    488: {
      description: 'TooManyCustomHeadersInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooManyCustomHeadersInResponseHeadersPolicySchema } },
    },
    489: {
      description: 'TooLongCSPInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooLongCSPInResponseHeadersPolicySchema } },
    },
    490: {
      description: 'TooManyRemoveHeadersInResponseHeadersPolicy',
      content: { 'text/xml': { schema: TooManyRemoveHeadersInResponseHeadersPolicySchema } },
    },
  },
})

export const delete20200531ResponseHeadersPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/response-headers-policy/{Id}',
  description:
    "<p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>",
  operationId: 'DeleteResponseHeadersPolicy2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "<p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              '<p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: { description: 'IllegalDelete', content: { 'text/xml': { schema: IllegalDeleteSchema } } },
    485: {
      description: 'ResponseHeadersPolicyInUse',
      content: { 'text/xml': { schema: ResponseHeadersPolicyInUseSchema } },
    },
  },
})

export const get20200531StreamingDistributionIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/streaming-distribution/{Id}',
  description:
    'Gets information about a specified RTMP distribution, including the distribution configuration.',
  operationId: 'GetStreamingDistribution2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The streaming distribution's ID.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetStreamingDistributionResultSchema } },
    },
    480: {
      description: 'NoSuchStreamingDistribution',
      content: { 'text/xml': { schema: NoSuchStreamingDistributionSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const delete20200531StreamingDistributionIdRoute = createRoute({
  method: 'delete',
  path: '/2020-05-31/streaming-distribution/{Id}',
  description:
    '<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
  operationId: 'DeleteStreamingDistribution2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when you disabled the streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The distribution ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'StreamingDistributionNotDisabled',
      content: { 'text/xml': { schema: StreamingDistributionNotDisabledSchema } },
    },
    482: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    483: {
      description: 'NoSuchStreamingDistribution',
      content: { 'text/xml': { schema: NoSuchStreamingDistributionSchema } },
    },
    484: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
  },
})

export const get20200531FunctionNameDescribeRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/function/{Name}/describe',
  description:
    "<p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>",
  operationId: 'DescribeFunction2020_05_31',
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
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function that you are getting information about.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Stage: z
        .enum(['DEVELOPMENT', 'LIVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Stage',
            in: 'query',
            required: false,
            description:
              "The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.",
            schema: { type: 'string', enum: ['DEVELOPMENT', 'LIVE'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeFunctionResultSchema } },
    },
    480: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const get20200531CachePolicyIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/cache-policy/{Id}/config',
  description:
    "<p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>",
  operationId: 'GetCachePolicyConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCachePolicyConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
  },
})

export const get20200531OriginAccessIdentityCloudfrontIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-identity/cloudfront/{Id}/config',
  description: 'Get the configuration information about an origin access identity.',
  operationId: 'GetCloudFrontOriginAccessIdentityConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The identity's ID.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCloudFrontOriginAccessIdentityConfigResultSchema } },
    },
    480: {
      description: 'NoSuchCloudFrontOriginAccessIdentity',
      content: { 'text/xml': { schema: NoSuchCloudFrontOriginAccessIdentitySchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const put20200531OriginAccessIdentityCloudfrontIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/origin-access-identity/cloudfront/{Id}/config',
  description: 'Update an origin access identity.',
  operationId: 'UpdateCloudFrontOriginAccessIdentity2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The identity's id.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              CloudFrontOriginAccessIdentityConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is created.</p> <p>If the <code>CallerReference</code> is a value already sent in a previous identity request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical to the original request (ignoring white space), the response includes the same information returned to the original request.</p> <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity, but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the origin access identity. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.',
                  required: [],
                }),
            })
            .openapi({ required: ['CloudFrontOriginAccessIdentityConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateCloudFrontOriginAccessIdentityResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    483: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    484: {
      description: 'NoSuchCloudFrontOriginAccessIdentity',
      content: { 'text/xml': { schema: NoSuchCloudFrontOriginAccessIdentitySchema } },
    },
    485: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    486: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    487: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
  },
})

export const get20200531ContinuousDeploymentPolicyIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/continuous-deployment-policy/{Id}/config',
  description: 'Gets configuration information about a continuous deployment policy.',
  operationId: 'GetContinuousDeploymentPolicyConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the continuous deployment policy whose configuration you are getting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetContinuousDeploymentPolicyConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
  },
})

export const get20200531DistributionIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distribution/{Id}/config',
  description: 'Get the configuration information about a distribution.',
  operationId: 'GetDistributionConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The distribution's ID. If the ID is empty, an empty distribution configuration is returned.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetDistributionConfigResultSchema } },
    },
    480: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const put20200531DistributionIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/distribution/{Id}/config',
  description:
    "<p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>",
  operationId: 'UpdateDistribution2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The distribution's id.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              DistributionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
                      }),
                  ).exactOptional(),
                  Aliases: AliasesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.',
                      }),
                  ).exactOptional(),
                  DefaultRootObject: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The object that you want CloudFront to request from your origin (for example, <code>index.html</code>) when a viewer requests the root URL for your distribution (<code>https://www.example.com</code>) instead of an object in your distribution (<code>https://www.example.com/product-description.html</code>). Specifying a default root object avoids exposing the contents of your distribution.</p> <p>Specify only the object name, for example, <code>index.html</code>. Don\'t add a <code>/</code> before the object name.</p> <p>If you don\'t want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  Origins: OriginsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about origins for this distribution.',
                      }),
                  ).exactOptional(),
                  OriginGroups: OriginGroupsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about origin groups for this distribution.',
                      }),
                  ).exactOptional(),
                  DefaultCacheBehavior: DefaultCacheBehaviorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
                      }),
                  ).exactOptional(),
                  CacheBehaviors: CacheBehaviorsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains zero or more <code>CacheBehavior</code> elements.',
                      }),
                  ).exactOptional(),
                  CustomErrorResponses: CustomErrorResponsesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  Comment: CommentTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the distribution. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  Logging: LoggingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  PriceClass: PriceClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.</p>',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'From this field, you can enable or disable the selected distribution.',
                      }),
                  ).exactOptional(),
                  ViewerCertificate: ViewerCertificateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.",
                      }),
                  ).exactOptional(),
                  Restrictions: RestrictionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that identifies ways in which you want to restrict distribution of your content.',
                      }),
                  ).exactOptional(),
                  WebACLId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p>',
                      }),
                  ).exactOptional(),
                  HttpVersion: HttpVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>(Optional) Specify the maximum HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don\'t support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).</p> <p>For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href="https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html">Supported protocols and ciphers between viewers and CloudFront</a>.</p>',
                      }),
                  ).exactOptional(),
                  IsIPV6Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.</p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html\">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Route 53 Amazon Web Services Integration Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>",
                      }),
                  ).exactOptional(),
                  ContinuousDeploymentPolicyId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.',
                      }),
                  ).exactOptional(),
                  Staging: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A distribution configuration.', required: [] }),
            })
            .openapi({ required: ['DistributionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateDistributionResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    482: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    483: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    484: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    485: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    488: {
      description: 'InvalidDefaultRootObject',
      content: { 'text/xml': { schema: InvalidDefaultRootObjectSchema } },
    },
    489: {
      description: 'InvalidRelativePath',
      content: { 'text/xml': { schema: InvalidRelativePathSchema } },
    },
    490: {
      description: 'InvalidErrorCode',
      content: { 'text/xml': { schema: InvalidErrorCodeSchema } },
    },
    491: {
      description: 'InvalidResponseCode',
      content: { 'text/xml': { schema: InvalidResponseCodeSchema } },
    },
    492: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    493: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    494: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    495: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    496: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    497: {
      description: 'InvalidViewerCertificate',
      content: { 'text/xml': { schema: InvalidViewerCertificateSchema } },
    },
    498: {
      description: 'InvalidMinimumProtocolVersion',
      content: { 'text/xml': { schema: InvalidMinimumProtocolVersionSchema } },
    },
    499: {
      description: 'InvalidRequiredProtocol',
      content: { 'text/xml': { schema: InvalidRequiredProtocolSchema } },
    },
    500: { description: 'NoSuchOrigin', content: { 'text/xml': { schema: NoSuchOriginSchema } } },
    501: {
      description: 'TooManyOrigins',
      content: { 'text/xml': { schema: TooManyOriginsSchema } },
    },
    502: {
      description: 'TooManyOriginGroupsPerDistribution',
      content: { 'text/xml': { schema: TooManyOriginGroupsPerDistributionSchema } },
    },
    503: {
      description: 'TooManyCacheBehaviors',
      content: { 'text/xml': { schema: TooManyCacheBehaviorsSchema } },
    },
    504: {
      description: 'TooManyCookieNamesInWhiteList',
      content: { 'text/xml': { schema: TooManyCookieNamesInWhiteListSchema } },
    },
    505: {
      description: 'InvalidForwardCookies',
      content: { 'text/xml': { schema: InvalidForwardCookiesSchema } },
    },
    506: {
      description: 'TooManyHeadersInForwardedValues',
      content: { 'text/xml': { schema: TooManyHeadersInForwardedValuesSchema } },
    },
    507: {
      description: 'InvalidHeadersForS3Origin',
      content: { 'text/xml': { schema: InvalidHeadersForS3OriginSchema } },
    },
    508: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    509: {
      description: 'TooManyCertificates',
      content: { 'text/xml': { schema: TooManyCertificatesSchema } },
    },
    510: {
      description: 'InvalidLocationCode',
      content: { 'text/xml': { schema: InvalidLocationCodeSchema } },
    },
    511: {
      description: 'InvalidGeoRestrictionParameter',
      content: { 'text/xml': { schema: InvalidGeoRestrictionParameterSchema } },
    },
    512: {
      description: 'InvalidTTLOrder',
      content: { 'text/xml': { schema: InvalidTTLOrderSchema } },
    },
    513: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
    514: {
      description: 'TooManyOriginCustomHeaders',
      content: { 'text/xml': { schema: TooManyOriginCustomHeadersSchema } },
    },
    515: {
      description: 'TooManyQueryStringParameters',
      content: { 'text/xml': { schema: TooManyQueryStringParametersSchema } },
    },
    516: {
      description: 'InvalidQueryStringParameters',
      content: { 'text/xml': { schema: InvalidQueryStringParametersSchema } },
    },
    517: {
      description: 'TooManyDistributionsWithLambdaAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithLambdaAssociationsSchema } },
    },
    518: {
      description: 'TooManyDistributionsWithSingleFunctionARN',
      content: { 'text/xml': { schema: TooManyDistributionsWithSingleFunctionARNSchema } },
    },
    519: {
      description: 'TooManyLambdaFunctionAssociations',
      content: { 'text/xml': { schema: TooManyLambdaFunctionAssociationsSchema } },
    },
    520: {
      description: 'InvalidLambdaFunctionAssociation',
      content: { 'text/xml': { schema: InvalidLambdaFunctionAssociationSchema } },
    },
    521: {
      description: 'TooManyDistributionsWithFunctionAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithFunctionAssociationsSchema } },
    },
    522: {
      description: 'TooManyFunctionAssociations',
      content: { 'text/xml': { schema: TooManyFunctionAssociationsSchema } },
    },
    523: {
      description: 'InvalidFunctionAssociation',
      content: { 'text/xml': { schema: InvalidFunctionAssociationSchema } },
    },
    524: {
      description: 'InvalidOriginReadTimeout',
      content: { 'text/xml': { schema: InvalidOriginReadTimeoutSchema } },
    },
    525: {
      description: 'InvalidOriginKeepaliveTimeout',
      content: { 'text/xml': { schema: InvalidOriginKeepaliveTimeoutSchema } },
    },
    526: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    527: {
      description: 'IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior',
      content: {
        'text/xml': { schema: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema },
      },
    },
    528: {
      description: 'TooManyDistributionsAssociatedToFieldLevelEncryptionConfig',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema },
      },
    },
    529: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    530: {
      description: 'TooManyDistributionsAssociatedToCachePolicy',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToCachePolicySchema } },
    },
    531: {
      description: 'TooManyDistributionsAssociatedToOriginAccessControl',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginAccessControlSchema },
      },
    },
    532: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    533: {
      description: 'TooManyDistributionsAssociatedToResponseHeadersPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToResponseHeadersPolicySchema },
      },
    },
    534: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    535: {
      description: 'TooManyDistributionsAssociatedToOriginRequestPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginRequestPolicySchema },
      },
    },
    536: {
      description: 'TooManyDistributionsAssociatedToKeyGroup',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToKeyGroupSchema } },
    },
    537: {
      description: 'TooManyKeyGroupsAssociatedToDistribution',
      content: { 'text/xml': { schema: TooManyKeyGroupsAssociatedToDistributionSchema } },
    },
    538: {
      description: 'TrustedKeyGroupDoesNotExist',
      content: { 'text/xml': { schema: TrustedKeyGroupDoesNotExistSchema } },
    },
    539: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    540: {
      description: 'RealtimeLogConfigOwnerMismatch',
      content: { 'text/xml': { schema: RealtimeLogConfigOwnerMismatchSchema } },
    },
    541: {
      description: 'ContinuousDeploymentPolicyInUse',
      content: { 'text/xml': { schema: ContinuousDeploymentPolicyInUseSchema } },
    },
    542: {
      description: 'NoSuchContinuousDeploymentPolicy',
      content: { 'text/xml': { schema: NoSuchContinuousDeploymentPolicySchema } },
    },
    543: {
      description: 'StagingDistributionInUse',
      content: { 'text/xml': { schema: StagingDistributionInUseSchema } },
    },
    544: {
      description: 'IllegalOriginAccessConfiguration',
      content: { 'text/xml': { schema: IllegalOriginAccessConfigurationSchema } },
    },
    545: {
      description: 'InvalidDomainNameForOriginAccessControl',
      content: { 'text/xml': { schema: InvalidDomainNameForOriginAccessControlSchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption/{Id}/config',
  description: 'Get the field-level encryption configuration information.',
  operationId: 'GetFieldLevelEncryptionConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'Request the ID for the field-level encryption configuration information.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetFieldLevelEncryptionConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
  },
})

export const put20200531FieldLevelEncryptionIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/field-level-encryption/{Id}/config',
  description: 'Update a field-level encryption configuration.',
  operationId: 'UpdateFieldLevelEncryptionConfig2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the configuration you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              FieldLevelEncryptionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "A unique number that ensures the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An optional comment about the configuration. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  QueryArgProfileConfig: QueryArgProfileConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.",
                      }),
                  ).exactOptional(),
                  ContentTypeProfileConfig: ContentTypeProfileConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex data type that includes the profile configurations specified for field-level encryption.',
                  required: [],
                }),
            })
            .openapi({ required: ['FieldLevelEncryptionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateFieldLevelEncryptionConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    483: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    484: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    485: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
    486: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    487: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    488: {
      description: 'TooManyFieldLevelEncryptionQueryArgProfiles',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionQueryArgProfilesSchema } },
    },
    489: {
      description: 'TooManyFieldLevelEncryptionContentTypeProfiles',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionContentTypeProfilesSchema } },
    },
    490: {
      description: 'QueryArgProfileEmpty',
      content: { 'text/xml': { schema: QueryArgProfileEmptySchema } },
    },
  },
})

export const get20200531FieldLevelEncryptionProfileIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/field-level-encryption-profile/{Id}/config',
  description: 'Get the field-level encryption profile configuration information.',
  operationId: 'GetFieldLevelEncryptionProfileConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'Get the ID for the field-level encryption profile configuration information.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetFieldLevelEncryptionProfileConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
  },
})

export const put20200531FieldLevelEncryptionProfileIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/field-level-encryption-profile/{Id}/config',
  description: 'Update a field-level encryption profile.',
  operationId: 'UpdateFieldLevelEncryptionProfile2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the field-level encryption profile request.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              FieldLevelEncryptionProfileConfig: z
                .object({
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Profile name for the field-level encryption profile.',
                      }),
                  ).exactOptional(),
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A unique number that ensures that the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                  EncryptionEntities: EncryptionEntitiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A complex data type of profiles for the field-level encryption.',
                  required: [],
                }),
            })
            .openapi({ required: ['FieldLevelEncryptionProfileConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateFieldLevelEncryptionProfileResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'FieldLevelEncryptionProfileAlreadyExists',
      content: { 'text/xml': { schema: FieldLevelEncryptionProfileAlreadyExistsSchema } },
    },
    482: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    483: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    484: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    485: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    486: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
    487: {
      description: 'NoSuchFieldLevelEncryptionProfile',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionProfileSchema } },
    },
    488: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    489: {
      description: 'FieldLevelEncryptionProfileSizeExceeded',
      content: { 'text/xml': { schema: FieldLevelEncryptionProfileSizeExceededSchema } },
    },
    490: {
      description: 'TooManyFieldLevelEncryptionEncryptionEntities',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionEncryptionEntitiesSchema } },
    },
    491: {
      description: 'TooManyFieldLevelEncryptionFieldPatterns',
      content: { 'text/xml': { schema: TooManyFieldLevelEncryptionFieldPatternsSchema } },
    },
  },
})

export const get20200531FunctionNameRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/function/{Name}',
  description:
    "<p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>",
  operationId: 'GetFunction2020_05_31',
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
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function whose code you are getting.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      Stage: z
        .enum(['DEVELOPMENT', 'LIVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Stage',
            in: 'query',
            required: false,
            description:
              "The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.",
            schema: { type: 'string', enum: ['DEVELOPMENT', 'LIVE'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetFunctionResultSchema } } },
    480: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const get20200531DistributionDistributionIdInvalidationIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distribution/{DistributionId}/invalidation/{Id}',
  description: 'Get the information about an invalidation.',
  operationId: 'GetInvalidation2020_05_31',
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
      DistributionId: z
        .string()
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'path',
            required: true,
            description: "The distribution's ID.",
            schema: { type: 'string' },
          },
        }),
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetInvalidationResultSchema } },
    },
    480: {
      description: 'NoSuchInvalidation',
      content: { 'text/xml': { schema: NoSuchInvalidationSchema } },
    },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const get20200531KeyGroupIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/key-group/{Id}/config',
  description:
    "<p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>",
  operationId: 'GetKeyGroupConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetKeyGroupConfigResultSchema } },
    },
    480: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
  },
})

export const get20200531OriginAccessControlIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-access-control/{Id}/config',
  description: 'Gets a CloudFront origin access control configuration.',
  operationId: 'GetOriginAccessControlConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The unique identifier of the origin access control.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetOriginAccessControlConfigResultSchema } },
    },
    480: {
      description: 'NoSuchOriginAccessControl',
      content: { 'text/xml': { schema: NoSuchOriginAccessControlSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const put20200531OriginAccessControlIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/origin-access-control/{Id}/config',
  description: 'Updates a CloudFront origin access control.',
  operationId: 'UpdateOriginAccessControl2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The current version (<code>ETag</code> value) of the origin access control that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the origin access control that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              OriginAccessControlConfig: z
                .object({
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'A name to identify the origin access control.' }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z.any().openapi({ description: 'A description of the origin access control.' }),
                  ).exactOptional(),
                  SigningProtocol: OriginAccessControlSigningProtocolsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.',
                      }),
                  ).exactOptional(),
                  SigningBehavior: OriginAccessControlSigningBehaviorsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies which requests CloudFront signs (adds authentication information to). Specify <code>always</code> for the most common use case. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings">origin access control advanced settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>This field can have one of the following values:</p> <ul> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if one exists.</p> </li> <li> <p> <code>never</code> – CloudFront doesn\'t sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn\'t contain the <code>Authorization</code> header, then CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, then CloudFront doesn\'t sign the origin request and instead passes along the <code>Authorization</code> header from the viewer request. <b>WARNING: To pass along the <code>Authorization</code> header from the viewer request, you <i>must</i> add the <code>Authorization</code> header to a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">cache policy</a> for all cache behaviors that use origins associated with this origin access control.</b> </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  OriginAccessControlOriginType: OriginAccessControlOriginTypesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The type of origin that this origin access control is for.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'A CloudFront origin access control configuration.',
                  required: [],
                }),
            })
            .openapi({ required: ['OriginAccessControlConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateOriginAccessControlResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    482: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    483: {
      description: 'OriginAccessControlAlreadyExists',
      content: { 'text/xml': { schema: OriginAccessControlAlreadyExistsSchema } },
    },
    484: {
      description: 'NoSuchOriginAccessControl',
      content: { 'text/xml': { schema: NoSuchOriginAccessControlSchema } },
    },
    485: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    486: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const get20200531OriginRequestPolicyIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/origin-request-policy/{Id}/config',
  description:
    "<p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>",
  operationId: 'GetOriginRequestPolicyConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetOriginRequestPolicyConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
  },
})

export const get20200531PublicKeyIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/public-key/{Id}/config',
  description: 'Gets a public key configuration.',
  operationId: 'GetPublicKeyConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the public key whose configuration you are getting.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetPublicKeyConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
  },
})

export const put20200531PublicKeyIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/public-key/{Id}/config',
  description:
    'Update public key information. Note that the only value you can change is the comment.',
  operationId: 'UpdatePublicKey2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              'The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the public key that you are updating.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              PublicKeyConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A string included in the request to help make sure that the request can't be replayed.",
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z.any().openapi({ description: 'A name to help identify the public key.' }),
                  ).exactOptional(),
                  EncodedKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comment to describe the public key. The comment cannot be longer than 128 characters.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['PublicKeyConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdatePublicKeyResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'CannotChangeImmutablePublicKeyFields',
      content: { 'text/xml': { schema: CannotChangeImmutablePublicKeyFieldsSchema } },
    },
    482: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    483: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    484: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    485: {
      description: 'NoSuchPublicKey',
      content: { 'text/xml': { schema: NoSuchPublicKeySchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
  },
})

export const post20200531GetRealtimeLogConfigIndexRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/get-realtime-log-config/',
  description:
    "<p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>",
  operationId: 'GetRealtimeLogConfig2020_05_31',
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
                .exactOptional()
                .openapi({ description: 'The name of the real-time log configuration to get.' }),
              ARN: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the real-time log configuration to get.',
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
      content: { 'text/xml': { schema: GetRealtimeLogConfigResultSchema } },
    },
    480: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const get20200531ResponseHeadersPolicyIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/response-headers-policy/{Id}/config',
  description:
    "<p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
  operationId: 'GetResponseHeadersPolicyConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetResponseHeadersPolicyConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
  },
})

export const get20200531StreamingDistributionIdConfigRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/streaming-distribution/{Id}/config',
  description: 'Get the configuration information about a streaming distribution.',
  operationId: 'GetStreamingDistributionConfig2020_05_31',
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
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The streaming distribution's ID.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetStreamingDistributionConfigResultSchema } },
    },
    480: {
      description: 'NoSuchStreamingDistribution',
      content: { 'text/xml': { schema: NoSuchStreamingDistributionSchema } },
    },
    481: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const put20200531StreamingDistributionIdConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/streaming-distribution/{Id}/config',
  description: 'Update a streaming distribution.',
  operationId: 'UpdateStreamingDistribution2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              "The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: "The streaming distribution's id.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              StreamingDistributionConfig: z
                .object({
                  CallerReference: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>",
                      }),
                  ).exactOptional(),
                  S3Origin: S3OriginSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.',
                      }),
                  ).exactOptional(),
                  Aliases: AliasesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.',
                      }),
                  ).exactOptional(),
                  Comment: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Any comments you want to include about the streaming distribution.',
                      }),
                  ).exactOptional(),
                  Logging: StreamingLoggingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that controls whether access logs are written for the streaming distribution.',
                      }),
                  ).exactOptional(),
                  TrustedSigners: TrustedSignersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that specifies any Amazon Web Services accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                  PriceClass: PriceClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A complex type that contains information about price class for this streaming distribution.',
                      }),
                  ).exactOptional(),
                  Enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Whether the streaming distribution is enabled to accept user requests for content.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "The RTMP distribution's configuration information.",
                  required: [],
                }),
            })
            .openapi({ required: ['StreamingDistributionConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateStreamingDistributionResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    482: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    483: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    484: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    485: {
      description: 'NoSuchStreamingDistribution',
      content: { 'text/xml': { schema: NoSuchStreamingDistributionSchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'TooManyStreamingDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyStreamingDistributionCNAMEsSchema } },
    },
    488: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    489: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    490: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    491: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    492: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    493: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
  },
})

export const get20200531ConflictingAliasDistributionIdAliasRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/conflicting-alias#DistributionId&Alias',
  description:
    '<p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don\'t own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListConflictingAliases2020_05_31',
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
      DistributionId: z
        .string()
        .max(25)
        .openapi({
          param: {
            name: 'DistributionId',
            in: 'query',
            required: true,
            description:
              'The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.',
            schema: { type: 'string', maxLength: 25 },
          },
        }),
      Alias: z
        .string()
        .max(253)
        .openapi({
          param: {
            name: 'Alias',
            in: 'query',
            required: true,
            description: 'The alias (also called a CNAME) to search for conflicting aliases.',
            schema: { type: 'string', maxLength: 253 },
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
              "Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The maximum number of conflicting aliases that you want in the response.',
            schema: { type: 'integer', maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListConflictingAliasesResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
  },
})

export const get20200531DistributionsByCachePolicyIdCachePolicyIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}',
  description:
    "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
  operationId: 'ListDistributionsByCachePolicyId2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description: 'The maximum number of distribution IDs that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      CachePolicyId: z
        .string()
        .openapi({
          param: {
            name: 'CachePolicyId',
            in: 'path',
            required: true,
            description:
              'The ID of the cache policy whose associated distribution IDs you want to list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDistributionsByCachePolicyIdResultSchema } },
    },
    480: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})

export const get20200531DistributionsByKeyGroupIdKeyGroupIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}',
  description:
    '<p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>',
  operationId: 'ListDistributionsByKeyGroup2020_05_31',
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
              "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
            required: false,
            description: 'The maximum number of distribution IDs that you want in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      KeyGroupId: z
        .string()
        .openapi({
          param: {
            name: 'KeyGroupId',
            in: 'path',
            required: true,
            description:
              'The ID of the key group whose associated distribution IDs you are listing.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDistributionsByKeyGroupResultSchema } },
    },
    480: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdRoute =
  createRoute({
    method: 'get',
    path: '/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}',
    description:
      "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
    operationId: 'ListDistributionsByOriginRequestPolicyId2020_05_31',
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
                "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
              required: false,
              description: 'The maximum number of distribution IDs that you want in the response.',
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        OriginRequestPolicyId: z
          .string()
          .openapi({
            param: {
              name: 'OriginRequestPolicyId',
              in: 'path',
              required: true,
              description:
                'The ID of the origin request policy whose associated distribution IDs you want to list.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/xml': { schema: ListDistributionsByOriginRequestPolicyIdResultSchema } },
      },
      480: {
        description: 'NoSuchOriginRequestPolicy',
        content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
      },
      481: {
        description: 'InvalidArgument',
        content: { 'text/xml': { schema: InvalidArgumentSchema } },
      },
      482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    },
  })

export const post20200531DistributionsByRealtimeLogConfigIndexRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/distributionsByRealtimeLogConfig/',
  description:
    "<p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
  operationId: 'ListDistributionsByRealtimeLogConfig2020_05_31',
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
              Marker: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
                }),
              MaxItems: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of distributions that you want in the response.',
                }),
              RealtimeLogConfigName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the real-time log configuration whose associated distributions you want to list.',
                }),
              RealtimeLogConfigArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.',
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
      content: { 'text/xml': { schema: ListDistributionsByRealtimeLogConfigResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
  },
})

export const get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdRoute =
  createRoute({
    method: 'get',
    path: '/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}',
    description:
      "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
    operationId: 'ListDistributionsByResponseHeadersPolicyId2020_05_31',
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
                "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
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
              required: false,
              description:
                'The maximum number of distribution IDs that you want to get in the response.',
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        ResponseHeadersPolicyId: z
          .string()
          .openapi({
            param: {
              name: 'ResponseHeadersPolicyId',
              in: 'path',
              required: true,
              description:
                'The ID of the response headers policy whose associated distribution IDs you want to list.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'text/xml': { schema: ListDistributionsByResponseHeadersPolicyIdResultSchema } },
      },
      480: {
        description: 'NoSuchResponseHeadersPolicy',
        content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
      },
      481: {
        description: 'InvalidArgument',
        content: { 'text/xml': { schema: InvalidArgumentSchema } },
      },
      482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    },
  })

export const get20200531DistributionsByWebACLIdWebACLIdRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/distributionsByWebACLId/{WebACLId}',
  description: 'List the distributions that are associated with a specified WAF web ACL.',
  operationId: 'ListDistributionsByWebACLId2020_05_31',
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
              'Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)',
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
            required: false,
            description:
              'The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      WebACLId: z
        .string()
        .openapi({
          param: {
            name: 'WebACLId',
            in: 'path',
            required: true,
            description:
              'The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren\'t associated with a web ACL.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListDistributionsByWebACLIdResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
  },
})

export const get20200531TaggingResourceRoute = createRoute({
  method: 'get',
  path: '/2020-05-31/tagging#Resource',
  description: 'List tags for a CloudFront resource.',
  operationId: 'ListTagsForResource2020_05_31',
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
      Resource: z
        .string()
        .regex(/arn:aws(-cn)?:cloudfront::[0-9]+:.*/)
        .openapi({
          param: {
            name: 'Resource',
            in: 'query',
            required: true,
            description: 'An ARN of a CloudFront resource.',
            schema: { type: 'string', pattern: 'arn:aws(-cn)?:cloudfront::[0-9]+:.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'InvalidTagging',
      content: { 'text/xml': { schema: InvalidTaggingSchema } },
    },
    483: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
  },
})

export const post20200531FunctionNamePublishIfMatchRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/function/{Name}/publish#If-Match',
  description:
    "<p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
  operationId: 'PublishFunction2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: true,
            description:
              'The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function that you are publishing.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PublishFunctionResultSchema } },
    },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    483: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    484: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const post20200531TaggingOperationTagResourceRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/tagging#Operation=Tag&Resource',
  description: 'Add tags to a CloudFront resource.',
  operationId: 'TagResource2020_05_31',
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
      Resource: z
        .string()
        .regex(/arn:aws(-cn)?:cloudfront::[0-9]+:.*/)
        .openapi({
          param: {
            name: 'Resource',
            in: 'query',
            required: true,
            description: 'An ARN of a CloudFront resource.',
            schema: { type: 'string', pattern: 'arn:aws(-cn)?:cloudfront::[0-9]+:.*' },
          },
        }),
      Operation: z
        .literal('Tag')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Tag'] },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Tags: z
                .object({
                  Items: TagListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A complex type that contains <code>Tag</code> elements.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex type that contains zero or more <code>Tag</code> elements.',
                  required: [],
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'InvalidTagging',
      content: { 'text/xml': { schema: InvalidTaggingSchema } },
    },
    483: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
  },
})

export const post20200531FunctionNameTestIfMatchRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/function/{Name}/test#If-Match',
  description:
    "<p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function\">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
  operationId: 'TestFunction2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: true,
            description:
              'The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the function that you are testing.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              Stage: z
                .enum(['DEVELOPMENT', 'LIVE'])
                .exactOptional()
                .openapi({
                  description:
                    'The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.',
                }),
              EventObject: z
                .string()
                .max(40960)
                .openapi({
                  description:
                    'The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.',
                }),
            })
            .openapi({ required: ['EventObject'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TestFunctionResultSchema } } },
    480: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    481: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    482: {
      description: 'NoSuchFunctionExists',
      content: { 'text/xml': { schema: NoSuchFunctionExistsSchema } },
    },
    483: {
      description: 'TestFunctionFailed',
      content: { 'text/xml': { schema: TestFunctionFailedSchema } },
    },
    484: {
      description: 'UnsupportedOperation',
      content: { 'text/xml': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const post20200531TaggingOperationUntagResourceRoute = createRoute({
  method: 'post',
  path: '/2020-05-31/tagging#Operation=Untag&Resource',
  description: 'Remove tags from a CloudFront resource.',
  operationId: 'UntagResource2020_05_31',
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
      Resource: z
        .string()
        .regex(/arn:aws(-cn)?:cloudfront::[0-9]+:.*/)
        .openapi({
          param: {
            name: 'Resource',
            in: 'query',
            required: true,
            description: 'An ARN of a CloudFront resource.',
            schema: { type: 'string', pattern: 'arn:aws(-cn)?:cloudfront::[0-9]+:.*' },
          },
        }),
      Operation: z
        .literal('Untag')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Untag'] },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': {
          schema: z
            .object({
              TagKeys: z
                .object({
                  Items: TagKeyListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A complex type that contains <code>Tag</code> key elements.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex type that contains zero or more <code>Tag</code> elements.',
                  required: [],
                }),
            })
            .openapi({ required: ['TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: {
      description: 'InvalidTagging',
      content: { 'text/xml': { schema: InvalidTaggingSchema } },
    },
    483: {
      description: 'NoSuchResource',
      content: { 'text/xml': { schema: NoSuchResourceSchema } },
    },
  },
})

export const put20200531DistributionIdPromoteStagingConfigRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/distribution/{Id}/promote-staging-config',
  description:
    '<p>Copies the staging distribution\'s configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name\'s traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution\'s configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain\'s traffic back to the primary distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> </p> </li> </ul>',
  operationId: 'UpdateDistributionWithStagingConfig2020_05_31',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            description:
              '<p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      Id: z
        .string()
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              "The identifier of the primary distribution to which you are copying a staging distribution's configuration.",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      StagingDistributionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'StagingDistributionId',
            in: 'query',
            required: false,
            description:
              'The identifier of the staging distribution whose configuration you are copying to the primary distribution.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateDistributionWithStagingConfigResultSchema } },
    },
    480: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
    481: {
      description: 'CNAMEAlreadyExists',
      content: { 'text/xml': { schema: CNAMEAlreadyExistsSchema } },
    },
    482: { description: 'IllegalUpdate', content: { 'text/xml': { schema: IllegalUpdateSchema } } },
    483: {
      description: 'InvalidIfMatchVersion',
      content: { 'text/xml': { schema: InvalidIfMatchVersionSchema } },
    },
    484: { description: 'MissingBody', content: { 'text/xml': { schema: MissingBodySchema } } },
    485: {
      description: 'NoSuchDistribution',
      content: { 'text/xml': { schema: NoSuchDistributionSchema } },
    },
    486: {
      description: 'PreconditionFailed',
      content: { 'text/xml': { schema: PreconditionFailedSchema } },
    },
    487: {
      description: 'TooManyDistributionCNAMEs',
      content: { 'text/xml': { schema: TooManyDistributionCNAMEsSchema } },
    },
    488: {
      description: 'InvalidDefaultRootObject',
      content: { 'text/xml': { schema: InvalidDefaultRootObjectSchema } },
    },
    489: {
      description: 'InvalidRelativePath',
      content: { 'text/xml': { schema: InvalidRelativePathSchema } },
    },
    490: {
      description: 'InvalidErrorCode',
      content: { 'text/xml': { schema: InvalidErrorCodeSchema } },
    },
    491: {
      description: 'InvalidResponseCode',
      content: { 'text/xml': { schema: InvalidResponseCodeSchema } },
    },
    492: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    493: {
      description: 'InvalidOriginAccessIdentity',
      content: { 'text/xml': { schema: InvalidOriginAccessIdentitySchema } },
    },
    494: {
      description: 'InvalidOriginAccessControl',
      content: { 'text/xml': { schema: InvalidOriginAccessControlSchema } },
    },
    495: {
      description: 'TooManyTrustedSigners',
      content: { 'text/xml': { schema: TooManyTrustedSignersSchema } },
    },
    496: {
      description: 'TrustedSignerDoesNotExist',
      content: { 'text/xml': { schema: TrustedSignerDoesNotExistSchema } },
    },
    497: {
      description: 'InvalidViewerCertificate',
      content: { 'text/xml': { schema: InvalidViewerCertificateSchema } },
    },
    498: {
      description: 'InvalidMinimumProtocolVersion',
      content: { 'text/xml': { schema: InvalidMinimumProtocolVersionSchema } },
    },
    499: {
      description: 'InvalidRequiredProtocol',
      content: { 'text/xml': { schema: InvalidRequiredProtocolSchema } },
    },
    500: { description: 'NoSuchOrigin', content: { 'text/xml': { schema: NoSuchOriginSchema } } },
    501: {
      description: 'TooManyOrigins',
      content: { 'text/xml': { schema: TooManyOriginsSchema } },
    },
    502: {
      description: 'TooManyOriginGroupsPerDistribution',
      content: { 'text/xml': { schema: TooManyOriginGroupsPerDistributionSchema } },
    },
    503: {
      description: 'TooManyCacheBehaviors',
      content: { 'text/xml': { schema: TooManyCacheBehaviorsSchema } },
    },
    504: {
      description: 'TooManyCookieNamesInWhiteList',
      content: { 'text/xml': { schema: TooManyCookieNamesInWhiteListSchema } },
    },
    505: {
      description: 'InvalidForwardCookies',
      content: { 'text/xml': { schema: InvalidForwardCookiesSchema } },
    },
    506: {
      description: 'TooManyHeadersInForwardedValues',
      content: { 'text/xml': { schema: TooManyHeadersInForwardedValuesSchema } },
    },
    507: {
      description: 'InvalidHeadersForS3Origin',
      content: { 'text/xml': { schema: InvalidHeadersForS3OriginSchema } },
    },
    508: {
      description: 'InconsistentQuantities',
      content: { 'text/xml': { schema: InconsistentQuantitiesSchema } },
    },
    509: {
      description: 'TooManyCertificates',
      content: { 'text/xml': { schema: TooManyCertificatesSchema } },
    },
    510: {
      description: 'InvalidLocationCode',
      content: { 'text/xml': { schema: InvalidLocationCodeSchema } },
    },
    511: {
      description: 'InvalidGeoRestrictionParameter',
      content: { 'text/xml': { schema: InvalidGeoRestrictionParameterSchema } },
    },
    512: {
      description: 'InvalidTTLOrder',
      content: { 'text/xml': { schema: InvalidTTLOrderSchema } },
    },
    513: {
      description: 'InvalidWebACLId',
      content: { 'text/xml': { schema: InvalidWebACLIdSchema } },
    },
    514: {
      description: 'TooManyOriginCustomHeaders',
      content: { 'text/xml': { schema: TooManyOriginCustomHeadersSchema } },
    },
    515: {
      description: 'TooManyQueryStringParameters',
      content: { 'text/xml': { schema: TooManyQueryStringParametersSchema } },
    },
    516: {
      description: 'InvalidQueryStringParameters',
      content: { 'text/xml': { schema: InvalidQueryStringParametersSchema } },
    },
    517: {
      description: 'TooManyDistributionsWithLambdaAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithLambdaAssociationsSchema } },
    },
    518: {
      description: 'TooManyDistributionsWithSingleFunctionARN',
      content: { 'text/xml': { schema: TooManyDistributionsWithSingleFunctionARNSchema } },
    },
    519: {
      description: 'TooManyLambdaFunctionAssociations',
      content: { 'text/xml': { schema: TooManyLambdaFunctionAssociationsSchema } },
    },
    520: {
      description: 'InvalidLambdaFunctionAssociation',
      content: { 'text/xml': { schema: InvalidLambdaFunctionAssociationSchema } },
    },
    521: {
      description: 'TooManyDistributionsWithFunctionAssociations',
      content: { 'text/xml': { schema: TooManyDistributionsWithFunctionAssociationsSchema } },
    },
    522: {
      description: 'TooManyFunctionAssociations',
      content: { 'text/xml': { schema: TooManyFunctionAssociationsSchema } },
    },
    523: {
      description: 'InvalidFunctionAssociation',
      content: { 'text/xml': { schema: InvalidFunctionAssociationSchema } },
    },
    524: {
      description: 'InvalidOriginReadTimeout',
      content: { 'text/xml': { schema: InvalidOriginReadTimeoutSchema } },
    },
    525: {
      description: 'InvalidOriginKeepaliveTimeout',
      content: { 'text/xml': { schema: InvalidOriginKeepaliveTimeoutSchema } },
    },
    526: {
      description: 'NoSuchFieldLevelEncryptionConfig',
      content: { 'text/xml': { schema: NoSuchFieldLevelEncryptionConfigSchema } },
    },
    527: {
      description: 'IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior',
      content: {
        'text/xml': { schema: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorSchema },
      },
    },
    528: {
      description: 'TooManyDistributionsAssociatedToFieldLevelEncryptionConfig',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToFieldLevelEncryptionConfigSchema },
      },
    },
    529: {
      description: 'NoSuchCachePolicy',
      content: { 'text/xml': { schema: NoSuchCachePolicySchema } },
    },
    530: {
      description: 'TooManyDistributionsAssociatedToCachePolicy',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToCachePolicySchema } },
    },
    531: {
      description: 'TooManyDistributionsAssociatedToOriginAccessControl',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginAccessControlSchema },
      },
    },
    532: {
      description: 'NoSuchResponseHeadersPolicy',
      content: { 'text/xml': { schema: NoSuchResponseHeadersPolicySchema } },
    },
    533: {
      description: 'TooManyDistributionsAssociatedToResponseHeadersPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToResponseHeadersPolicySchema },
      },
    },
    534: {
      description: 'NoSuchOriginRequestPolicy',
      content: { 'text/xml': { schema: NoSuchOriginRequestPolicySchema } },
    },
    535: {
      description: 'TooManyDistributionsAssociatedToOriginRequestPolicy',
      content: {
        'text/xml': { schema: TooManyDistributionsAssociatedToOriginRequestPolicySchema },
      },
    },
    536: {
      description: 'TooManyDistributionsAssociatedToKeyGroup',
      content: { 'text/xml': { schema: TooManyDistributionsAssociatedToKeyGroupSchema } },
    },
    537: {
      description: 'TooManyKeyGroupsAssociatedToDistribution',
      content: { 'text/xml': { schema: TooManyKeyGroupsAssociatedToDistributionSchema } },
    },
    538: {
      description: 'TrustedKeyGroupDoesNotExist',
      content: { 'text/xml': { schema: TrustedKeyGroupDoesNotExistSchema } },
    },
    539: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    540: {
      description: 'RealtimeLogConfigOwnerMismatch',
      content: { 'text/xml': { schema: RealtimeLogConfigOwnerMismatchSchema } },
    },
  },
})

export const put20200531RealtimeLogConfigIndexRoute = createRoute({
  method: 'put',
  path: '/2020-05-31/realtime-log-config/',
  description:
    "<p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>",
  operationId: 'UpdateRealtimeLogConfig2020_05_31',
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
              EndPoints: z
                .array(EndPointSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the Amazon Kinesis data stream where you are sending real-time log data.',
                }),
              Fields: z
                .array(StringSchema.and(z.any().openapi({ xml: { name: 'Field' } })))
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>',
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name for this real-time log configuration.' }),
              ARN: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) for this real-time log configuration.',
                }),
              SamplingRate: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.',
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
      content: { 'text/xml': { schema: UpdateRealtimeLogConfigResultSchema } },
    },
    480: {
      description: 'NoSuchRealtimeLogConfig',
      content: { 'text/xml': { schema: NoSuchRealtimeLogConfigSchema } },
    },
    481: {
      description: 'InvalidArgument',
      content: { 'text/xml': { schema: InvalidArgumentSchema } },
    },
    482: { description: 'AccessDenied', content: { 'text/xml': { schema: AccessDeniedSchema } } },
  },
})
