import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z
  .string()
  .regex(/arn:[\w+=\/,.@-]+:acm:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*/)
  .min(20)
  .max(2048)
  .openapi('Arn')

const TagKeySchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
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
  .openapi({
    required: ['Key'],
    description: 'A key-value pair that identifies or specifies metadata about an ACM resource.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const AddTagsToCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The key-value pair that defines the tag. The tag value is optional.',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn', 'Tags'], title: 'AddTagsToCertificateRequest' })
  .openapi('AddTagsToCertificateRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidArnExceptionSchema = z.any().openapi('InvalidArnException')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const TagPolicyExceptionSchema = z.any().openapi('TagPolicyException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const DeleteCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the ACM certificate to be deleted. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'DeleteCertificateRequest' })
  .openapi('DeleteCertificateRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const DomainNameStringSchema = z
  .string()
  .regex(/^(\*\.)?(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$/)
  .min(1)
  .max(253)
  .openapi('DomainNameString')

const DomainListSchema = z.array(DomainNameStringSchema).min(1).max(100).openapi('DomainList')

const StringSchema = z.string().openapi('String')

const ValidationEmailListSchema = z.array(StringSchema).openapi('ValidationEmailList')

const DomainStatusSchema = z
  .enum(['PENDING_VALIDATION', 'SUCCESS', 'FAILED'])
  .openapi('DomainStatus')

const RecordTypeSchema = z.literal('CNAME').openapi('RecordType')

const ResourceRecordSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the DNS record to create in your domain. This is supplied by ACM.',
        }),
    ),
    Type: RecordTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of DNS record. Currently this can be <code>CNAME</code>.',
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the CNAME record to add to your DNS database. This is supplied by ACM.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Type', 'Value'],
    description:
      'Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. ',
  })
  .openapi('ResourceRecord')

const ValidationMethodSchema = z.enum(['EMAIL', 'DNS']).openapi('ValidationMethod')

const DomainValidationSchema = z
  .object({
    DomainName: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A fully qualified domain name (FQDN) in the certificate. For example, <code>www.example.com</code> or <code>example.com</code>. ',
        }),
    ),
    ValidationEmails: ValidationEmailListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of email addresses that ACM used to send domain validation emails.',
        }),
    ).exactOptional(),
    ValidationDomain: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name that ACM used to send domain validation emails.',
        }),
    ).exactOptional(),
    ValidationStatus: DomainStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The validation status of the domain name. This can be one of the following values:</p> <ul> <li> <p> <code>PENDING_VALIDATION</code> </p> </li> <li> <p> <code/>SUCCESS</p> </li> <li> <p> <code/>FAILED</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResourceRecord: ResourceRecordSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the CNAME record that you add to your DNS database for domain validation. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p> <p>Note: The CNAME information that you need does not include the name of your domain. If you include&#x2028; your domain name in the DNS database CNAME record, validation fails.&#x2028; For example, if the name is "_a79865eb4cd1a6ab990a45779b4e0b96.yourdomain.com", only "_a79865eb4cd1a6ab990a45779b4e0b96" must be used.</p>',
        }),
    ).exactOptional(),
    ValidationMethod: ValidationMethodSchema.and(
      z.any().openapi({ description: 'Specifies the domain validation method.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    description:
      'Contains information about the validation of each domain name in the certificate.',
  })
  .openapi('DomainValidation')

const DomainValidationListSchema = z
  .array(DomainValidationSchema)
  .min(1)
  .max(1000)
  .openapi('DomainValidationList')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const CertificateStatusSchema = z
  .enum([
    'PENDING_VALIDATION',
    'ISSUED',
    'INACTIVE',
    'EXPIRED',
    'VALIDATION_TIMED_OUT',
    'REVOKED',
    'FAILED',
  ])
  .openapi('CertificateStatus')

const RevocationReasonSchema = z
  .enum([
    'UNSPECIFIED',
    'KEY_COMPROMISE',
    'CA_COMPROMISE',
    'AFFILIATION_CHANGED',
    'SUPERCEDED',
    'CESSATION_OF_OPERATION',
    'CERTIFICATE_HOLD',
    'REMOVE_FROM_CRL',
    'PRIVILEGE_WITHDRAWN',
    'A_A_COMPROMISE',
  ])
  .openapi('RevocationReason')

const KeyAlgorithmSchema = z
  .enum([
    'RSA_1024',
    'RSA_2048',
    'RSA_3072',
    'RSA_4096',
    'EC_prime256v1',
    'EC_secp384r1',
    'EC_secp521r1',
  ])
  .openapi('KeyAlgorithm')

const InUseListSchema = z.array(StringSchema).openapi('InUseList')

const FailureReasonSchema = z
  .enum([
    'NO_AVAILABLE_CONTACTS',
    'ADDITIONAL_VERIFICATION_REQUIRED',
    'DOMAIN_NOT_ALLOWED',
    'INVALID_PUBLIC_DOMAIN',
    'DOMAIN_VALIDATION_DENIED',
    'CAA_ERROR',
    'PCA_LIMIT_EXCEEDED',
    'PCA_INVALID_ARN',
    'PCA_INVALID_STATE',
    'PCA_REQUEST_FAILED',
    'PCA_NAME_CONSTRAINTS_VALIDATION',
    'PCA_RESOURCE_NOT_FOUND',
    'PCA_INVALID_ARGS',
    'PCA_INVALID_DURATION',
    'PCA_ACCESS_DENIED',
    'SLR_NOT_FOUND',
    'OTHER',
  ])
  .openapi('FailureReason')

const CertificateTypeSchema = z
  .enum(['IMPORTED', 'AMAZON_ISSUED', 'PRIVATE'])
  .openapi('CertificateType')

const RenewalStatusSchema = z
  .enum(['PENDING_AUTO_RENEWAL', 'PENDING_VALIDATION', 'SUCCESS', 'FAILED'])
  .openapi('RenewalStatus')

const RenewalSummarySchema = z
  .object({
    RenewalStatus: RenewalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of ACM\'s <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.',
        }),
    ),
    DomainValidationOptions: DomainValidationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the validation of each domain name in the certificate, as it pertains to ACM\'s <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a>. This is different from the initial validation that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.',
        }),
    ),
    RenewalStatusReason: FailureReasonSchema.and(
      z.any().openapi({ description: 'The reason that a renewal request was unsuccessful.' }),
    ).exactOptional(),
    UpdatedAt: TStampSchema.and(
      z.any().openapi({ description: 'The time at which the renewal summary was last updated.' }),
    ),
  })
  .openapi({
    required: ['RenewalStatus', 'DomainValidationOptions', 'UpdatedAt'],
    description:
      'Contains information about the status of ACM\'s <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.',
  })
  .openapi('RenewalSummary')

const KeyUsageNameSchema = z
  .enum([
    'DIGITAL_SIGNATURE',
    'NON_REPUDIATION',
    'KEY_ENCIPHERMENT',
    'DATA_ENCIPHERMENT',
    'KEY_AGREEMENT',
    'CERTIFICATE_SIGNING',
    'CRL_SIGNING',
    'ENCIPHER_ONLY',
    'DECIPHER_ONLY',
    'ANY',
    'CUSTOM',
  ])
  .openapi('KeyUsageName')

const KeyUsageSchema = z
  .object({
    Name: KeyUsageNameSchema.and(
      z.any().openapi({ description: 'A string value that contains a Key Usage extension name.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.',
    required: [],
  })
  .openapi('KeyUsage')

const KeyUsageListSchema = z.array(KeyUsageSchema).openapi('KeyUsageList')

const ExtendedKeyUsageNameSchema = z
  .enum([
    'TLS_WEB_SERVER_AUTHENTICATION',
    'TLS_WEB_CLIENT_AUTHENTICATION',
    'CODE_SIGNING',
    'EMAIL_PROTECTION',
    'TIME_STAMPING',
    'OCSP_SIGNING',
    'IPSEC_END_SYSTEM',
    'IPSEC_TUNNEL',
    'IPSEC_USER',
    'ANY',
    'NONE',
    'CUSTOM',
  ])
  .openapi('ExtendedKeyUsageName')

const ExtendedKeyUsageSchema = z
  .object({
    Name: ExtendedKeyUsageNameSchema.and(
      z.any().openapi({ description: 'The name of an Extended Key Usage value.' }),
    ).exactOptional(),
    OID: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p> <ul> <li> <p> <code>1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.3 (CODE_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.8 (TIME_STAMPING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.7 (IPSEC_USER)</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. ',
    required: [],
  })
  .openapi('ExtendedKeyUsage')

const ExtendedKeyUsageListSchema = z.array(ExtendedKeyUsageSchema).openapi('ExtendedKeyUsageList')

const RenewalEligibilitySchema = z.enum(['ELIGIBLE', 'INELIGIBLE']).openapi('RenewalEligibility')

const CertificateTransparencyLoggingPreferenceSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('CertificateTransparencyLoggingPreference')

const CertificateOptionsSchema = z
  .object({
    CertificateTransparencyLoggingPreference: CertificateTransparencyLoggingPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can opt out of certificate transparency logging by specifying the <code>DISABLED</code> option. Opt in by specifying <code>ENABLED</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. ',
    required: [],
  })
  .openapi('CertificateOptions')

const CertificateDetailSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    DomainName: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name for the certificate, such as www.example.com or example.com.',
        }),
    ).exactOptional(),
    SubjectAlternativeNames: DomainListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. ',
        }),
    ).exactOptional(),
    DomainValidationOptions: DomainValidationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the initial validation of each domain name that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>. ',
        }),
    ).exactOptional(),
    Serial: StringSchema.and(
      z.any().openapi({ description: 'The serial number of the certificate.' }),
    ).exactOptional(),
    Subject: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the entity that is associated with the public key contained in the certificate.',
        }),
    ).exactOptional(),
    Issuer: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the certificate authority that issued and signed the certificate.',
        }),
    ).exactOptional(),
    CreatedAt: TStampSchema.and(
      z.any().openapi({ description: 'The time at which the certificate was requested.' }),
    ).exactOptional(),
    IssuedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. ',
        }),
    ).exactOptional(),
    ImportedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. ',
        }),
    ).exactOptional(),
    Status: CertificateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>',
        }),
    ).exactOptional(),
    RevokedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. ',
        }),
    ).exactOptional(),
    RevocationReason: RevocationReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. ',
        }),
    ).exactOptional(),
    NotBefore: TStampSchema.and(
      z.any().openapi({ description: 'The time before which the certificate is not valid.' }),
    ).exactOptional(),
    NotAfter: TStampSchema.and(
      z.any().openapi({ description: 'The time after which the certificate is not valid.' }),
    ).exactOptional(),
    KeyAlgorithm: KeyAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description: 'The algorithm that was used to generate the public-private key pair.',
        }),
    ).exactOptional(),
    SignatureAlgorithm: StringSchema.and(
      z.any().openapi({ description: 'The algorithm that was used to sign the certificate.' }),
    ).exactOptional(),
    InUseBy: InUseListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by multiple Amazon Web Services resources. ',
        }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the certificate request failed. This value exists only when the certificate status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request Failed</a> in the <i>Certificate Manager User Guide</i>. ',
        }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. ',
        }),
    ).exactOptional(),
    RenewalSummary: RenewalSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the status of ACM\'s <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.',
        }),
    ).exactOptional(),
    KeyUsages: KeyUsageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.',
        }),
    ).exactOptional(),
    ExtendedKeyUsages: ExtendedKeyUsageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). ',
        }),
    ).exactOptional(),
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has the following format: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
    RenewalEligibility: RenewalEligibilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.',
        }),
    ).exactOptional(),
    Options: CertificateOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value that specifies whether to add the certificate to a transparency log. Certificate transparency makes it possible to detect SSL certificates that have been mistakenly or maliciously issued. A browser might respond to certificate that has not been logged by showing an error message. The logs are cryptographically secure. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. ',
    required: [],
  })
  .openapi('CertificateDetail')

const DescribeCertificateResponseSchema = z
  .object({
    Certificate: CertificateDetailSchema.and(
      z.any().openapi({ description: 'Metadata about an ACM certificate.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCertificateResponse')

const DescribeCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'DescribeCertificateRequest' })
  .openapi('DescribeCertificateRequest')

const CertificateBodySchema = z
  .string()
  .regex(
    /-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
  )
  .min(1)
  .max(32768)
  .openapi('CertificateBody')

const CertificateChainSchema = z
  .string()
  .regex(
    /(-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
  )
  .min(1)
  .max(2097152)
  .openapi('CertificateChain')

const PrivateKeySchema = z
  .string()
  .regex(
    /-{5}BEGIN PRIVATE KEY-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END PRIVATE KEY-{5}(\u000D?\u000A)?/,
  )
  .min(1)
  .max(524288)
  .openapi('PrivateKey')

const ExportCertificateResponseSchema = z
  .object({
    Certificate: CertificateBodySchema.and(
      z.any().openapi({ description: 'The base64 PEM-encoded certificate.' }),
    ).exactOptional(),
    CertificateChain: CertificateChainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.',
        }),
    ).exactOptional(),
    PrivateKey: PrivateKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format and is base64 PEM-encoded. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportCertificateResponse')

const PassphraseBlobSchema = z.string().min(4).max(128).openapi('PassphraseBlob')

const ExportCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ),
    Passphrase: PassphraseBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Passphrase to associate with the encrypted exported private key. </p> <note> <p>When creating your passphrase, you can use any ASCII character except #, $, or %.</p> </note> <p>If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the passphrase.</p> <p> <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn', 'Passphrase'], title: 'ExportCertificateRequest' })
  .openapi('ExportCertificateRequest')

const RequestInProgressExceptionSchema = z.any().openapi('RequestInProgressException')

const PositiveIntegerSchema = z.int().min(1).openapi('PositiveInteger')

const ExpiryEventsConfigurationSchema = z
  .object({
    DaysBeforeExpiry: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object containing expiration events options associated with an Amazon Web Services account.',
    required: [],
  })
  .openapi('ExpiryEventsConfiguration')

const GetAccountConfigurationResponseSchema = z
  .object({
    ExpiryEvents: ExpiryEventsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Expiration events configuration options associated with the Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountConfigurationResponse')

const GetCertificateResponseSchema = z
  .object({
    Certificate: CertificateBodySchema.and(
      z
        .any()
        .openapi({
          description: 'The ACM-issued certificate corresponding to the ARN specified as input.',
        }),
    ).exactOptional(),
    CertificateChain: CertificateChainSchema.and(
      z
        .any()
        .openapi({
          description:
            "Certificates forming the requested certificate's chain of trust. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCertificateResponse')

const GetCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains a certificate ARN in the following format:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'GetCertificateRequest' })
  .openapi('GetCertificateRequest')

const ImportCertificateResponseSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportCertificateResponse')

const CertificateBodyBlobSchema = z.string().min(1).max(32768).openapi('CertificateBodyBlob')

const PrivateKeyBlobSchema = z.string().min(1).max(5120).openapi('PrivateKeyBlob')

const CertificateChainBlobSchema = z.string().min(1).max(2097152).openapi('CertificateChainBlob')

const ImportCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this field. ',
        }),
    ).exactOptional(),
    Certificate: CertificateBodyBlobSchema.and(
      z.any().openapi({ description: 'The certificate to import.' }),
    ),
    PrivateKey: PrivateKeyBlobSchema.and(
      z
        .any()
        .openapi({
          description: 'The private key that matches the public key in the certificate.',
        }),
    ),
    CertificateChain: CertificateChainBlobSchema.and(
      z.any().openapi({ description: 'The PEM encoded certificate chain.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more resource tags to associate with the imported certificate. </p> <p>Note: You cannot apply tags when reimporting a certificate.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Certificate', 'PrivateKey'], title: 'ImportCertificateRequest' })
  .openapi('ImportCertificateRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const NextTokenSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]*/)
  .min(1)
  .max(10000)
  .openapi('NextToken')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const KeyUsageNamesSchema = z.array(KeyUsageNameSchema).openapi('KeyUsageNames')

const ExtendedKeyUsageNamesSchema = z
  .array(ExtendedKeyUsageNameSchema)
  .openapi('ExtendedKeyUsageNames')

const CertificateSummarySchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ).exactOptional(),
    DomainName: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.',
        }),
    ).exactOptional(),
    SubjectAlternativeNameSummaries: DomainListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p> <p>When called by <a href="https://docs.aws.amazon.com/acm/latestAPIReference/API_ListCertificates.html">ListCertificates</a>, this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latestAPIReference/API_DescribeCertificate.html">DescribeCertificate</a>.</p>',
        }),
    ).exactOptional(),
    HasAdditionalSubjectAlternativeNames: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When called by <a href="https://docs.aws.amazon.com/acm/latestAPIReference/API_ListCertificates.html">ListCertificates</a>, indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latestAPIReference/API_DescribeCertificate.html">DescribeCertificate</a>.',
        }),
    ).exactOptional(),
    Status: CertificateStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>',
        }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. ',
        }),
    ).exactOptional(),
    KeyAlgorithm: KeyAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description: 'The algorithm that was used to generate the public-private key pair.',
        }),
    ).exactOptional(),
    KeyUsages: KeyUsageNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.',
        }),
    ).exactOptional(),
    ExtendedKeyUsages: ExtendedKeyUsageNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). ',
        }),
    ).exactOptional(),
    InUse: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the certificate is currently in use by any Amazon Web Services resources.',
        }),
    ).exactOptional(),
    Exported: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the certificate has been exported. This value exists only when the certificate type is <code>PRIVATE</code>.',
        }),
    ).exactOptional(),
    RenewalEligibility: RenewalEligibilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.',
        }),
    ).exactOptional(),
    NotBefore: TStampSchema.and(
      z.any().openapi({ description: 'The time before which the certificate is not valid.' }),
    ).exactOptional(),
    NotAfter: TStampSchema.and(
      z.any().openapi({ description: 'The time after which the certificate is not valid.' }),
    ).exactOptional(),
    CreatedAt: TStampSchema.and(
      z.any().openapi({ description: 'The time at which the certificate was requested.' }),
    ).exactOptional(),
    IssuedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. ',
        }),
    ).exactOptional(),
    ImportedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. ',
        }),
    ).exactOptional(),
    RevokedAt: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure is returned in the response object of <a>ListCertificates</a> action. ',
    required: [],
  })
  .openapi('CertificateSummary')

const CertificateSummaryListSchema = z
  .array(CertificateSummarySchema)
  .openapi('CertificateSummaryList')

const ListCertificatesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the list is truncated, this value is present and contains the value to use for the <code>NextToken</code> parameter in a subsequent pagination request.',
        }),
    ).exactOptional(),
    CertificateSummaryList: CertificateSummaryListSchema.and(
      z.any().openapi({ description: 'A list of ACM certificates.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCertificatesResponse')

const CertificateStatusesSchema = z.array(CertificateStatusSchema).openapi('CertificateStatuses')

const ExtendedKeyUsageFilterListSchema = z
  .array(ExtendedKeyUsageNameSchema)
  .openapi('ExtendedKeyUsageFilterList')

const KeyUsageFilterListSchema = z.array(KeyUsageNameSchema).openapi('KeyUsageFilterList')

const KeyAlgorithmListSchema = z.array(KeyAlgorithmSchema).openapi('KeyAlgorithmList')

const FiltersSchema = z
  .object({
    extendedKeyUsage: ExtendedKeyUsageFilterListSchema.and(
      z
        .any()
        .openapi({ description: 'Specify one or more <a>ExtendedKeyUsage</a> extension values.' }),
    ).exactOptional(),
    keyUsage: KeyUsageFilterListSchema.and(
      z.any().openapi({ description: 'Specify one or more <a>KeyUsage</a> extension values.' }),
    ).exactOptional(),
    keyTypes: KeyAlgorithmListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one or more algorithms that can be used to generate key pairs.</p> <p>Default filtering returns only <code>RSA_1024</code> and <code>RSA_2048</code> certificates that have at least one domain. To return other certificate types, provide the desired type signatures in a comma-separated list. For example, <code>"keyTypes": ["RSA_2048","RSA_4096"]</code> returns both <code>RSA_2048</code> and <code>RSA_4096</code> certificates.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. ',
    required: [],
  })
  .openapi('Filters')

const MaxItemsSchema = z.int().min(1).max(1000).openapi('MaxItems')

const SortBySchema = z.literal('CREATED_AT').openapi('SortBy')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListCertificatesRequestSchema = z
  .object({
    CertificateStatuses: CertificateStatusesSchema.and(
      z.any().openapi({ description: 'Filter the certificate list by status value.' }),
    ).exactOptional(),
    Includes: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter the certificate list. For more information, see the <a>Filters</a> structure.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the response you just received.',
        }),
    ).exactOptional(),
    MaxItems: MaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.',
        }),
    ).exactOptional(),
    SortBy: SortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the field to sort results by. If you specify <code>SortBy</code>, you must also specify <code>SortOrder</code>.',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the order of sorted results. If you specify <code>SortOrder</code>, you must also specify <code>SortBy</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCertificatesRequest', required: [] })
  .openapi('ListCertificatesRequest')

const InvalidArgsExceptionSchema = z.any().openapi('InvalidArgsException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ListTagsForCertificateResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The key-value pairs that define the applied tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForCertificateResponse')

const ListTagsForCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'ListTagsForCertificateRequest' })
  .openapi('ListTagsForCertificateRequest')

const IdempotencyTokenSchema = z.string().regex(/\w+/).min(1).max(32).openapi('IdempotencyToken')

const PutAccountConfigurationRequestSchema = z
  .object({
    ExpiryEvents: ExpiryEventsConfigurationSchema.and(
      z.any().openapi({ description: 'Specifies expiration events associated with an account.' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customer-chosen string used to distinguish between calls to <code>PutAccountConfiguration</code>. Idempotency tokens time out after one hour. If you call <code>PutAccountConfiguration</code> multiple times with the same unexpired idempotency token, ACM treats it as the same request and returns the original result. If you change the idempotency token for each call, ACM treats each call as a new request.',
        }),
    ),
  })
  .openapi({ required: ['IdempotencyToken'], title: 'PutAccountConfigurationRequest' })
  .openapi('PutAccountConfigurationRequest')

const RemoveTagsFromCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The key-value pair that defines the tag to remove.' }),
    ),
  })
  .openapi({ required: ['CertificateArn', 'Tags'], title: 'RemoveTagsFromCertificateRequest' })
  .openapi('RemoveTagsFromCertificateRequest')

const RenewCertificateRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the ACM certificate to be renewed. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn'], title: 'RenewCertificateRequest' })
  .openapi('RenewCertificateRequest')

const RequestCertificateResponseSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestCertificateResponse')

const DomainValidationOptionSchema = z
  .object({
    DomainName: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A fully qualified domain name (FQDN) in the certificate request.',
        }),
    ),
    ValidationDomain: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the <code>DomainName</code> value or a superdomain of the <code>DomainName</code> value. For example, if you request a certificate for <code>testing.example.com</code>, you can specify <code>example.com</code> for this value. In that case, ACM sends domain validation emails to the following five addresses:</p> <ul> <li> <p>admin@example.com</p> </li> <li> <p>administrator@example.com</p> </li> <li> <p>hostmaster@example.com</p> </li> <li> <p>postmaster@example.com</p> </li> <li> <p>webmaster@example.com</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'ValidationDomain'],
    description:
      'Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.',
  })
  .openapi('DomainValidationOption')

const DomainValidationOptionListSchema = z
  .array(DomainValidationOptionSchema)
  .min(1)
  .max(100)
  .openapi('DomainValidationOptionList')

const PcaArnSchema = z
  .string()
  .regex(/arn:[\w+=\/,.@-]+:acm-pca:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*/)
  .min(20)
  .max(2048)
  .openapi('PcaArn')

const RequestCertificateRequestSchema = z
  .object({
    DomainName: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. </p> <p>In compliance with <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>, the length of the domain name (technically, the Common Name) that you provide cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative Name field, which supports names up to 253 octets in length. </p>',
        }),
    ),
    ValidationMethod: ValidationMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">validate with DNS</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">validate with email</a>. We recommend that you use DNS validation. ',
        }),
    ).exactOptional(),
    SubjectAlternativeNames: DomainListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the <code>DomainName</code> field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial quota is 10 domain names. If you need more than 10 names, you must request a quota increase. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Quotas</a>.</p> <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples: </p> <ul> <li> <p> <code>(63 octets).(63 octets).(63 octets).(61 octets)</code> is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.</p> </li> <li> <p> <code>(64 octets).(63 octets).(63 octets).(61 octets)</code> is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.</p> </li> <li> <p> <code>(63 octets).(63 octets).(63 octets).(62 octets)</code> is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.</p> </li> </ul>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customer chosen string that can be used to distinguish between calls to <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>RequestCertificate</code> multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.',
        }),
    ).exactOptional(),
    DomainValidationOptions: DomainValidationOptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name that you want ACM to use to send you emails so that you can validate domain ownership.',
        }),
    ).exactOptional(),
    Options: CertificateOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Currently, you can use this parameter to specify whether to add the certificate to a certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency">Opting Out of Certificate Transparency Logging</a>.',
        }),
    ).exactOptional(),
    CertificateAuthorityArn: PcaArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html">Amazon Web Services Private Certificate Authority</a> user guide. The ARN must have the following form: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more resource tags to associate with the certificate.' }),
    ).exactOptional(),
    KeyAlgorithm: KeyAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some AWS services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the AWS service where you plan to deploy your certificate.</p> <p>Default: RSA_2048</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName'], title: 'RequestCertificateRequest' })
  .openapi('RequestCertificateRequest')

const InvalidDomainValidationOptionsExceptionSchema = z
  .any()
  .openapi('InvalidDomainValidationOptionsException')

const ResendValidationEmailRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the <a>RequestCertificate</a> action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form: </p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>',
        }),
    ),
    Domain: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name (FQDN) of the certificate that needs to be validated.',
        }),
    ),
    ValidationDomain: DomainNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the <code>Domain</code> value or a superdomain of the <code>Domain</code> value. For example, if you requested a certificate for <code>site.subdomain.example.com</code> and specify a <b>ValidationDomain</b> of <code>subdomain.example.com</code>, ACM sends email to the domain registrant, technical contact, and administrative contact in WHOIS and the following five addresses:</p> <ul> <li> <p>admin@subdomain.example.com</p> </li> <li> <p>administrator@subdomain.example.com</p> </li> <li> <p>hostmaster@subdomain.example.com</p> </li> <li> <p>postmaster@subdomain.example.com</p> </li> <li> <p>webmaster@subdomain.example.com</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['CertificateArn', 'Domain', 'ValidationDomain'],
    title: 'ResendValidationEmailRequest',
  })
  .openapi('ResendValidationEmailRequest')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const UpdateCertificateOptionsRequestSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ARN of the requested certificate to update. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    Options: CertificateOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use to update the options for your certificate. Currently, you can specify whether to add your certificate to a transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. ',
        }),
    ),
  })
  .openapi({ required: ['CertificateArn', 'Options'], title: 'UpdateCertificateOptionsRequest' })
  .openapi('UpdateCertificateOptionsRequest')

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

export const postXAmzTargetCertificateManagerAddTagsToCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.AddTagsToCertificate',
  description:
    '<p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>',
  operationId: 'AddTagsToCertificate',
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
        .literal('CertificateManager.AddTagsToCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.AddTagsToCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerDeleteCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.DeleteCertificate',
  description:
    '<p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>',
  operationId: 'DeleteCertificate',
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
        .literal('CertificateManager.DeleteCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.DeleteCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerDescribeCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.DescribeCertificate',
  description:
    '<p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>',
  operationId: 'DescribeCertificate',
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
        .literal('CertificateManager.DescribeCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.DescribeCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerExportCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.ExportCertificate',
  description:
    '<p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>',
  operationId: 'ExportCertificate',
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
        .literal('CertificateManager.ExportCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.ExportCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExportCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerGetAccountConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.GetAccountConfiguration',
  description:
    'Returns the account configuration options associated with an Amazon Web Services account.',
  operationId: 'GetAccountConfiguration',
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
        .literal('CertificateManager.GetAccountConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.GetAccountConfiguration'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountConfigurationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerGetCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.GetCertificate',
  description:
    'Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.',
  operationId: 'GetCertificate',
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
        .literal('CertificateManager.GetCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.GetCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerImportCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.ImportCertificate',
  description:
    '<p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\\temp</code> folder as <code>fileb://C:\\temp\\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you\'re using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>',
  operationId: 'ImportCertificate',
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
        .literal('CertificateManager.ImportCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.ImportCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerListCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.ListCertificates',
  description:
    'Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.',
  operationId: 'ListCertificates',
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
        .literal('CertificateManager.ListCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.ListCertificates'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListCertificatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCertificatesResponseSchema } },
    },
    480: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerListTagsForCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.ListTagsForCertificate',
  description:
    "Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. ",
  operationId: 'ListTagsForCertificate',
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
        .literal('CertificateManager.ListTagsForCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.ListTagsForCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForCertificateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerPutAccountConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.PutAccountConfiguration',
  description:
    '<p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>',
  operationId: 'PutAccountConfiguration',
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
        .literal('CertificateManager.PutAccountConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.PutAccountConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAccountConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate',
  description:
    '<p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>',
  operationId: 'RemoveTagsFromCertificate',
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
        .literal('CertificateManager.RemoveTagsFromCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.RemoveTagsFromCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    483: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerRenewCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.RenewCertificate',
  description:
    'Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.',
  operationId: 'RenewCertificate',
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
        .literal('CertificateManager.RenewCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.RenewCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RenewCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerRequestCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.RequestCertificate',
  description:
    '<p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>',
  operationId: 'RequestCertificate',
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
        .literal('CertificateManager.RequestCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.RequestCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestCertificateResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidDomainValidationOptionsException',
      content: { 'application/json': { schema: InvalidDomainValidationOptionsExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    485: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerResendValidationEmailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.ResendValidationEmail',
  description:
    'Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. ',
  operationId: 'ResendValidationEmail',
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
        .literal('CertificateManager.ResendValidationEmail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.ResendValidationEmail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResendValidationEmailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    483: {
      description: 'InvalidDomainValidationOptionsException',
      content: { 'application/json': { schema: InvalidDomainValidationOptionsExceptionSchema } },
    },
  },
})

export const postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CertificateManager.UpdateCertificateOptions',
  description:
    'Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. ',
  operationId: 'UpdateCertificateOptions',
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
        .literal('CertificateManager.UpdateCertificateOptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CertificateManager.UpdateCertificateOptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCertificateOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})
