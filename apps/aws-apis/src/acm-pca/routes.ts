import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z
  .string()
  .regex(/arn:[\w+=\/,.@-]+:[\w+=\/,.@-]+:[\w+=\/,.@-]*:[0-9]*:[\w+=,.@-]+(\/[\w+=,.@-]+)*/)
  .min(5)
  .max(200)
  .openapi('Arn')

const CreateCertificateAuthorityResponseSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCertificateAuthorityResponse')

const KeyAlgorithmSchema = z
  .enum(['RSA_2048', 'RSA_4096', 'EC_prime256v1', 'EC_secp384r1'])
  .openapi('KeyAlgorithm')

const SigningAlgorithmSchema = z
  .enum([
    'SHA256WITHECDSA',
    'SHA384WITHECDSA',
    'SHA512WITHECDSA',
    'SHA256WITHRSA',
    'SHA384WITHRSA',
    'SHA512WITHRSA',
  ])
  .openapi('SigningAlgorithm')

const CountryCodeStringSchema = z
  .string()
  .regex(/[A-Za-z]{2}/)
  .length(2)
  .openapi('CountryCodeString')

const String64Schema = z.string().min(0).max(64).openapi('String64')

const ASN1PrintableString64Schema = z
  .string()
  .regex(/[a-zA-Z0-9'()+-.?:\/= ]*/)
  .min(0)
  .max(64)
  .openapi('ASN1PrintableString64')

const String128Schema = z.string().min(0).max(128).openapi('String128')

const String40Schema = z.string().min(0).max(40).openapi('String40')

const String16Schema = z.string().min(0).max(16).openapi('String16')

const String5Schema = z.string().min(0).max(5).openapi('String5')

const String3Schema = z.string().min(0).max(3).openapi('String3')

const CustomObjectIdentifierSchema = z
  .string()
  .regex(/^([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})$/)
  .min(0)
  .max(64)
  .openapi('CustomObjectIdentifier')

const String1To256Schema = z.string().min(1).max(256).openapi('String1To256')

const CustomAttributeSchema = z
  .object({
    ObjectIdentifier: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).',
        }),
    ),
    Value: String1To256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p/> <p>Specifies the attribute value of relative distinguished name (RDN).</p>',
        }),
    ),
  })
  .openapi({
    required: ['ObjectIdentifier', 'Value'],
    description: 'Defines the X.500 relative distinguished name (RDN).',
  })
  .openapi('CustomAttribute')

const CustomAttributeListSchema = z
  .array(CustomAttributeSchema)
  .min(1)
  .max(30)
  .openapi('CustomAttributeList')

const ASN1SubjectSchema = z
  .object({
    Country: CountryCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Two-digit code that specifies the country in which the certificate subject located.',
        }),
    ).exactOptional(),
    Organization: String64Schema.and(
      z
        .any()
        .openapi({
          description:
            'Legal name of the organization with which the certificate subject is affiliated. ',
        }),
    ).exactOptional(),
    OrganizationalUnit: String64Schema.and(
      z
        .any()
        .openapi({
          description:
            'A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.',
        }),
    ).exactOptional(),
    DistinguishedNameQualifier: ASN1PrintableString64Schema.and(
      z.any().openapi({ description: 'Disambiguating information for the certificate subject.' }),
    ).exactOptional(),
    State: String128Schema.and(
      z.any().openapi({ description: 'State in which the subject of the certificate is located.' }),
    ).exactOptional(),
    CommonName: String64Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. </p> <p>Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.</p>',
        }),
    ).exactOptional(),
    SerialNumber: ASN1PrintableString64Schema.and(
      z.any().openapi({ description: 'The certificate serial number.' }),
    ).exactOptional(),
    Locality: String128Schema.and(
      z
        .any()
        .openapi({
          description:
            'The locality (such as a city or town) in which the certificate subject is located.',
        }),
    ).exactOptional(),
    Title: String64Schema.and(
      z
        .any()
        .openapi({
          description:
            'A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.',
        }),
    ).exactOptional(),
    Surname: String40Schema.and(
      z
        .any()
        .openapi({
          description:
            'Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.',
        }),
    ).exactOptional(),
    GivenName: String16Schema.and(z.any().openapi({ description: 'First name.' })).exactOptional(),
    Initials: String5Schema.and(
      z
        .any()
        .openapi({
          description:
            'Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the first letter of the <b>Surname</b>.',
        }),
    ).exactOptional(),
    Pseudonym: String128Schema.and(
      z
        .any()
        .openapi({
          description:
            'Typically a shortened version of a longer <b>GivenName</b>. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.',
        }),
    ).exactOptional(),
    GenerationQualifier: String3Schema.and(
      z
        .any()
        .openapi({
          description:
            'Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.',
        }),
    ).exactOptional(),
    CustomAttributes: CustomAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p/> <p>Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p> <note> <p>Custom attributes cannot be used in combination with standard attributes.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.',
    required: [],
  })
  .openapi('ASN1Subject')

const BooleanSchema = z.boolean().openapi('Boolean')

const KeyUsageSchema = z
  .object({
    DigitalSignature: BooleanSchema.and(
      z.any().openapi({ description: ' Key can be used for digital signing.' }),
    ).exactOptional(),
    NonRepudiation: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used for non-repudiation.' }),
    ).exactOptional(),
    KeyEncipherment: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used to encipher data.' }),
    ).exactOptional(),
    DataEncipherment: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used to decipher data.' }),
    ).exactOptional(),
    KeyAgreement: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used in a key-agreement protocol.' }),
    ).exactOptional(),
    KeyCertSign: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used to sign certificates.' }),
    ).exactOptional(),
    CRLSign: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used to sign CRLs.' }),
    ).exactOptional(),
    EncipherOnly: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used only to encipher data.' }),
    ).exactOptional(),
    DecipherOnly: BooleanSchema.and(
      z.any().openapi({ description: 'Key can be used only to decipher data.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.',
    required: [],
  })
  .openapi('KeyUsage')

const AccessMethodTypeSchema = z
  .enum(['CA_REPOSITORY', 'RESOURCE_PKI_MANIFEST', 'RESOURCE_PKI_NOTIFY'])
  .openapi('AccessMethodType')

const AccessMethodSchema = z
  .object({
    CustomObjectIdentifier: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object identifier (OID) specifying the <code>AccessMethod</code>. The OID must satisfy the regular expression shown below. For more information, see NIST\'s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.',
        }),
    ).exactOptional(),
    AccessMethodType: AccessMethodTypeSchema.and(
      z.any().openapi({ description: 'Specifies the <code>AccessMethod</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.',
    required: [],
  })
  .openapi('AccessMethod')

const String256Schema = z.string().min(0).max(256).openapi('String256')

const OtherNameSchema = z
  .object({
    TypeId: CustomObjectIdentifierSchema.and(
      z.any().openapi({ description: 'Specifies an OID. ' }),
    ),
    Value: String256Schema.and(z.any().openapi({ description: 'Specifies an OID value.' })),
  })
  .openapi({
    required: ['TypeId', 'Value'],
    description:
      'Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST\'s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.',
  })
  .openapi('OtherName')

const String253Schema = z.string().min(0).max(253).openapi('String253')

const EdiPartyNameSchema = z
  .object({
    PartyName: String256Schema.and(z.any().openapi({ description: 'Specifies the party name.' })),
    NameAssigner: String256Schema.and(
      z.any().openapi({ description: 'Specifies the name assigner.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PartyName'],
    description:
      'Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280.',
  })
  .openapi('EdiPartyName')

const String39Schema = z.string().min(0).max(39).openapi('String39')

const GeneralNameSchema = z
  .object({
    OtherName: OtherNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents <code>GeneralName</code> using an <code>OtherName</code> object.',
        }),
    ).exactOptional(),
    Rfc822Name: String256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Represents <code>GeneralName</code> as an <a href="https://datatracker.ietf.org/doc/html/rfc822">RFC 822</a> email address.',
        }),
    ).exactOptional(),
    DnsName: String253Schema.and(
      z.any().openapi({ description: 'Represents <code>GeneralName</code> as a DNS name.' }),
    ).exactOptional(),
    DirectoryName: ASN1SubjectSchema.exactOptional(),
    EdiPartyName: EdiPartyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents <code>GeneralName</code> as an <code>EdiPartyName</code> object.',
        }),
    ).exactOptional(),
    UniformResourceIdentifier: String253Schema.and(
      z.any().openapi({ description: 'Represents <code>GeneralName</code> as a URI.' }),
    ).exactOptional(),
    IpAddress: String39Schema.and(
      z
        .any()
        .openapi({
          description: 'Represents <code>GeneralName</code> as an IPv4 or IPv6 address.',
        }),
    ).exactOptional(),
    RegisteredId: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: ' Represents <code>GeneralName</code> as an object identifier (OID).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.',
    required: [],
  })
  .openapi('GeneralName')

const AccessDescriptionSchema = z
  .object({
    AccessMethod: AccessMethodSchema.and(
      z
        .any()
        .openapi({
          description: 'The type and format of <code>AccessDescription</code> information.',
        }),
    ),
    AccessLocation: GeneralNameSchema.and(
      z
        .any()
        .openapi({ description: 'The location of <code>AccessDescription</code> information.' }),
    ),
  })
  .openapi({
    required: ['AccessMethod', 'AccessLocation'],
    description:
      'Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>.',
  })
  .openapi('AccessDescription')

const AccessDescriptionListSchema = z
  .array(AccessDescriptionSchema)
  .openapi('AccessDescriptionList')

const CsrExtensionsSchema = z
  .object({
    KeyUsage: KeyUsageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the purpose of the certificate and of the key contained in the certificate.',
        }),
    ).exactOptional(),
    SubjectInformationAccess: AccessDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2">Subject Information Access</a> in RFC 5280.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the certificate extensions to be added to the certificate signing request (CSR).',
    required: [],
  })
  .openapi('CsrExtensions')

const CertificateAuthorityConfigurationSchema = z
  .object({
    KeyAlgorithm: KeyAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.',
        }),
    ),
    SigningAlgorithm: SigningAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name of the algorithm your private CA uses to sign certificate requests.</p> <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter used to sign certificates when they are issued.</p>',
        }),
    ),
    Subject: ASN1SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Structure that contains X.500 distinguished name information for your private CA.',
        }),
    ),
    CsrExtensions: CsrExtensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information to be added to the extension section of the certificate signing request (CSR).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['KeyAlgorithm', 'SigningAlgorithm', 'Subject'],
    description:
      'Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. ',
  })
  .openapi('CertificateAuthorityConfiguration')

const Integer1To5000Schema = z.int().min(1).max(5000).openapi('Integer1To5000')

const CnameStringSchema = z
  .string()
  .regex(/^[-a-zA-Z0-9;\/?:@&=+$,%_.!~*()']*$/)
  .min(0)
  .max(253)
  .openapi('CnameString')

const S3BucketName3To255Schema = z
  .string()
  .regex(/^[-a-zA-Z0-9._\/]+$/)
  .min(3)
  .max(255)
  .openapi('S3BucketName3To255')

const S3ObjectAclSchema = z
  .enum(['PUBLIC_READ', 'BUCKET_OWNER_FULL_CONTROL'])
  .openapi('S3ObjectAcl')

const CrlConfigurationSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action or for an existing CA when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. ',
        }),
    ),
    ExpirationInDays: Integer1To5000Schema.and(
      z.any().openapi({ description: 'Validity period of the CRL in days.' }),
    ).exactOptional(),
    CustomCname: CnameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name inserted into the certificate <b>CRL Distribution Points</b> extension that enables the use of an alias for the CRL distribution point. Use this value if you don\'t want the name of your S3 bucket to be public.</p> <note> <p>The content of a Canonical Name (CNAME) record must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".</p> </note>',
        }),
    ).exactOptional(),
    S3BucketName: S3BucketName3To255Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name of the S3 bucket that contains the CRL. If you do not provide a value for the <b>CustomCname</b> argument, the name of your S3 bucket is placed into the <b>CRL Distribution Points</b> extension of the issued certificate. You can change the name of your bucket by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> operation. You must specify a <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-policies">bucket policy</a> that allows Amazon Web Services Private CA to write the CRL to your bucket.</p> <note> <p>The <code>S3BucketName</code> parameter must conform to the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">S3 bucket naming rules</a>.</p> </note>',
        }),
    ).exactOptional(),
    S3ObjectAcl: S3ObjectAclSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. If you choose PUBLIC_READ, the CRL will be accessible over the public internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access. </p> <p>If no value is specified, the default is <code>PUBLIC_READ</code>.</p> <p> <i>Note:</i> This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as <code>BUCKET_OWNER_FULL_CONTROL</code>, and not doing so results in an error. If you have disabled BPA in S3, then you can specify either <code>BUCKET_OWNER_FULL_CONTROL</code> or <code>PUBLIC_READ</code> as the value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-bpa">Blocking public access to the S3 bucket</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      '<p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. </p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed prior to a certificate\'s expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i> </p>',
  })
  .openapi('CrlConfiguration')

const OcspConfigurationSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.',
        }),
    ),
    OcspCustomCname: CnameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>By default, Amazon Web Services Private CA injects an Amazon Web Services domain into certificates being validated by the Online Certificate Status Protocol (OCSP). A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.</p> <note> <p>The content of a Canonical Name (CNAME) record must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/ocsp-customize.html">Customizing Online Certificate Status Protocol (OCSP) </a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      '<p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>',
  })
  .openapi('OcspConfiguration')

const RevocationConfigurationSchema = z
  .object({
    CrlConfiguration: CrlConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the certificate revocation list (CRL), if any, maintained by your private CA. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.',
        }),
    ).exactOptional(),
    OcspConfiguration: OcspConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA. When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Certificate revocation information used by the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.',
    required: [],
  })
  .openapi('RevocationConfiguration')

const CertificateAuthorityTypeSchema = z
  .enum(['ROOT', 'SUBORDINATE'])
  .openapi('CertificateAuthorityType')

const IdempotencyTokenSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]*/)
  .min(1)
  .max(36)
  .openapi('IdempotencyToken')

const KeyStorageSecurityStandardSchema = z
  .enum(['FIPS_140_2_LEVEL_2_OR_HIGHER', 'FIPS_140_2_LEVEL_3_OR_HIGHER'])
  .openapi('KeyStorageSecurityStandard')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'Key (name) of the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'Value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const CertificateAuthorityUsageModeSchema = z
  .enum(['GENERAL_PURPOSE', 'SHORT_LIVED_CERTIFICATE'])
  .openapi('CertificateAuthorityUsageMode')

const CreateCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityConfiguration: CertificateAuthorityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.',
        }),
    ),
    RevocationConfiguration: RevocationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains information to enable Online Certificate Status Protocol (OCSP) support, to enable a certificate revocation list (CRL), to enable both, or to enable neither. The default is for both certificate validation mechanisms to be disabled. </p> <note> <p>The following requirements apply to revocation configurations.</p> <ul> <li> <p>A configuration disabling CRLs or OCSP must contain only the <code>Enabled=False</code> parameter, and will fail if other parameters such as <code>CustomCname</code> or <code>ExpirationInDays</code> are included.</p> </li> <li> <p>In a CRL configuration, the <code>S3BucketName</code> parameter must conform to <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3 bucket naming rules</a>.</p> </li> <li> <p>A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in a CNAME. </p> </li> <li> <p>In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".</p> </li> </ul> </note> <p> For more information, see the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p>',
        }),
    ).exactOptional(),
    CertificateAuthorityType: CertificateAuthorityTypeSchema.and(
      z.any().openapi({ description: 'The type of the certificate authority.' }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom string that can be used to distinguish between calls to the <b>CreateCertificateAuthority</b> action. Idempotency tokens for <b>CreateCertificateAuthority</b> time out after five minutes. Therefore, if you call <b>CreateCertificateAuthority</b> multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only certificate authority and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificate authorities.',
        }),
    ).exactOptional(),
    KeyStorageSecurityStandard: KeyStorageSecurityStandardSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a cryptographic key management compliance standard used for handling CA keys.</p> <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p> <p> <i>Note:</i> <code>FIPS_140_2_LEVEL_3_OR_HIGHER</code> is not supported in the following Regions:</p> <ul> <li> <p>ap-northeast-3</p> </li> <li> <p>ap-southeast-3</p> </li> </ul> <p>When creating a CA in these Regions, you must provide <code>FIPS_140_2_LEVEL_2_OR_HIGHER</code> as the argument for <code>KeyStorageSecurityStandard</code>. Failure to do this results in an <code>InvalidArgsException</code> with the message, "A certificate authority cannot be created in this region with the specified security standard."</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.',
        }),
    ).exactOptional(),
    UsageMode: CertificateAuthorityUsageModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.</p> <p>The default value is GENERAL_PURPOSE.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CertificateAuthorityConfiguration', 'CertificateAuthorityType'],
    title: 'CreateCertificateAuthorityRequest',
  })
  .openapi('CreateCertificateAuthorityRequest')

const InvalidArgsExceptionSchema = z.any().openapi('InvalidArgsException')

const InvalidPolicyExceptionSchema = z.any().openapi('InvalidPolicyException')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AuditReportIdSchema = z
  .string()
  .regex(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)
  .length(36)
  .openapi('AuditReportId')

const S3KeySchema = z.string().max(1024).openapi('S3Key')

const CreateCertificateAuthorityAuditReportResponseSchema = z
  .object({
    AuditReportId: AuditReportIdSchema.and(
      z.any().openapi({ description: 'An alphanumeric string that contains a report identifier.' }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description: 'The <b>key</b> that uniquely identifies the report file in your S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCertificateAuthorityAuditReportResponse')

const S3BucketNameSchema = z.string().min(3).max(63).openapi('S3BucketName')

const AuditReportResponseFormatSchema = z.enum(['JSON', 'CSV']).openapi('AuditReportResponseFormat')

const CreateCertificateAuthorityAuditReportRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>.</p>',
        }),
    ),
    S3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket that will contain the audit report.' }),
    ),
    AuditReportResponseFormat: AuditReportResponseFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.',
        }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'S3BucketName', 'AuditReportResponseFormat'],
    title: 'CreateCertificateAuthorityAuditReportRequest',
  })
  .openapi('CreateCertificateAuthorityAuditReportRequest')

const RequestInProgressExceptionSchema = z.any().openapi('RequestInProgressException')

const RequestFailedExceptionSchema = z.any().openapi('RequestFailedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidArnExceptionSchema = z.any().openapi('InvalidArnException')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const PrincipalSchema = z
  .string()
  .regex(/^[^*]+$/)
  .min(0)
  .max(128)
  .openapi('Principal')

const AccountIdSchema = z
  .string()
  .regex(/[0-9]+/)
  .length(12)
  .openapi('AccountId')

const ActionTypeSchema = z
  .enum(['IssueCertificate', 'GetCertificate', 'ListPermissions'])
  .openapi('ActionType')

const ActionListSchema = z.array(ActionTypeSchema).min(1).max(3).openapi('ActionList')

const CreatePermissionRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
    Principal: PrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service or identity that receives the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.',
        }),
    ),
    SourceAccount: AccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the calling account.' }),
    ).exactOptional(),
    Actions: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that the specified Amazon Web Services service principal can use. These include <code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>.',
        }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'Principal', 'Actions'],
    title: 'CreatePermissionRequest',
  })
  .openapi('CreatePermissionRequest')

const PermissionAlreadyExistsExceptionSchema = z.any().openapi('PermissionAlreadyExistsException')

const PermanentDeletionTimeInDaysSchema = z
  .int()
  .min(7)
  .max(30)
  .openapi('PermanentDeletionTimeInDays')

const DeleteCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
    PermanentDeletionTimeInDays: PermanentDeletionTimeInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'DeleteCertificateAuthorityRequest' })
  .openapi('DeleteCertificateAuthorityRequest')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const DeletePermissionRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Number (ARN) of the private CA that issued the permissions. You can find the CA\'s ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
    Principal: PrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service or identity that will have its CA permissions revoked. At this time, the only valid service principal is <code>acm.amazonaws.com</code> ',
        }),
    ),
    SourceAccount: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account that calls this action.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateAuthorityArn', 'Principal'], title: 'DeletePermissionRequest' })
  .openapi('DeletePermissionRequest')

const DeletePolicyRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the private CA that will have its policy deleted. You can find the CA\'s ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. The ARN value must have the form <code>arn:aws:acm-pca:region:account:certificate-authority/01234567-89ab-cdef-0123-0123456789ab</code>. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeletePolicyRequest' })
  .openapi('DeletePolicyRequest')

const LockoutPreventedExceptionSchema = z.any().openapi('LockoutPreventedException')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const StringSchema = z.string().openapi('String')

const CertificateAuthorityStatusSchema = z
  .enum(['CREATING', 'PENDING_CERTIFICATE', 'ACTIVE', 'DELETED', 'DISABLED', 'EXPIRED', 'FAILED'])
  .openapi('CertificateAuthorityStatus')

const FailureReasonSchema = z
  .enum(['REQUEST_TIMED_OUT', 'UNSUPPORTED_ALGORITHM', 'OTHER'])
  .openapi('FailureReason')

const CertificateAuthoritySchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) for your private certificate authority (CA). The format is <code> <i>12345678-1234-1234-1234-123456789012</i> </code>.',
        }),
    ).exactOptional(),
    OwnerAccount: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID that owns the certificate authority.',
        }),
    ).exactOptional(),
    CreatedAt: TStampSchema.and(
      z.any().openapi({ description: 'Date and time at which your private CA was created.' }),
    ).exactOptional(),
    LastStateChangeAt: TStampSchema.and(
      z.any().openapi({ description: 'Date and time at which your private CA was last updated.' }),
    ).exactOptional(),
    Type: CertificateAuthorityTypeSchema.and(
      z.any().openapi({ description: 'Type of your private CA.' }),
    ).exactOptional(),
    Serial: StringSchema.and(
      z.any().openapi({ description: 'Serial number of your private CA.' }),
    ).exactOptional(),
    Status: CertificateAuthorityStatusSchema.and(
      z.any().openapi({ description: 'Status of your private CA.' }),
    ).exactOptional(),
    NotBefore: TStampSchema.and(
      z
        .any()
        .openapi({
          description: 'Date and time before which your private CA certificate is not valid.',
        }),
    ).exactOptional(),
    NotAfter: TStampSchema.and(
      z
        .any()
        .openapi({
          description: 'Date and time after which your private CA certificate is not valid.',
        }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z.any().openapi({ description: 'Reason the request to create your private CA failed.' }),
    ).exactOptional(),
    CertificateAuthorityConfiguration: CertificateAuthorityConfigurationSchema.and(
      z.any().openapi({ description: 'Your private CA configuration.' }),
    ).exactOptional(),
    RevocationConfiguration: RevocationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA. ',
        }),
    ).exactOptional(),
    RestorableUntil: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period during which a deleted CA can be restored. For more information, see the <code>PermanentDeletionTimeInDays</code> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthorityRequest.html">DeleteCertificateAuthorityRequest</a> action. ',
        }),
    ).exactOptional(),
    KeyStorageSecurityStandard: KeyStorageSecurityStandardSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines a cryptographic key management compliance standard used for handling CA keys. </p> <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p> <p>Note: Amazon Web Services Region ap-northeast-3 supports only FIPS_140_2_LEVEL_2_OR_HIGHER. You must explicitly specify this parameter and value when creating a CA in that Region. Specifying a different value (or no value) results in an <code>InvalidArgsException</code> with the message "A certificate authority cannot be created in this region with the specified security standard."</p>',
        }),
    ).exactOptional(),
    UsageMode: CertificateAuthorityUsageModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.</p> <p>The default value is GENERAL_PURPOSE.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into Certificate Manager (ACM). ',
    required: [],
  })
  .openapi('CertificateAuthority')

const DescribeCertificateAuthorityResponseSchema = z
  .object({
    CertificateAuthority: CertificateAuthoritySchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthority.html">CertificateAuthority</a> structure that contains information about your private CA.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCertificateAuthorityResponse')

const DescribeCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'DescribeCertificateAuthorityRequest' })
  .openapi('DescribeCertificateAuthorityRequest')

const AuditReportStatusSchema = z
  .enum(['CREATING', 'SUCCESS', 'FAILED'])
  .openapi('AuditReportStatus')

const DescribeCertificateAuthorityAuditReportResponseSchema = z
  .object({
    AuditReportStatus: AuditReportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether report creation is in progress, has succeeded, or has failed.',
        }),
    ).exactOptional(),
    S3BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'Name of the S3 bucket that contains the report.' }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description: 'S3 <b>key</b> that uniquely identifies the report file in your S3 bucket.',
        }),
    ).exactOptional(),
    CreatedAt: TStampSchema.and(
      z.any().openapi({ description: 'The date and time at which the report was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCertificateAuthorityAuditReportResponse')

const DescribeCertificateAuthorityAuditReportRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the private CA. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
    AuditReportId: AuditReportIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The report ID returned by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action.',
        }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'AuditReportId'],
    title: 'DescribeCertificateAuthorityAuditReportRequest',
  })
  .openapi('DescribeCertificateAuthorityAuditReportRequest')

const CertificateBodySchema = z.string().openapi('CertificateBody')

const CertificateChainSchema = z.string().openapi('CertificateChain')

const GetCertificateResponseSchema = z
  .object({
    Certificate: CertificateBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64 PEM-encoded certificate specified by the <code>CertificateArn</code> parameter.',
        }),
    ).exactOptional(),
    CertificateChain: CertificateChainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCertificateResponse')

const GetCertificateRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'CertificateArn'],
    title: 'GetCertificateRequest',
  })
  .openapi('GetCertificateRequest')

const GetCertificateAuthorityCertificateResponseSchema = z
  .object({
    Certificate: CertificateBodySchema.and(
      z.any().openapi({ description: 'Base64-encoded certificate authority (CA) certificate.' }),
    ).exactOptional(),
    CertificateChain: CertificateChainSchema.and(
      z
        .any()
        .openapi({
          description:
            'Base64-encoded certificate chain that includes any intermediate certificates and chains up to root certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. If this is a root CA, the value will be null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCertificateAuthorityCertificateResponse')

const GetCertificateAuthorityCertificateRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of your private CA. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn'],
    title: 'GetCertificateAuthorityCertificateRequest',
  })
  .openapi('GetCertificateAuthorityCertificateRequest')

const CsrBodySchema = z.string().openapi('CsrBody')

const GetCertificateAuthorityCsrResponseSchema = z
  .object({
    Csr: CsrBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCertificateAuthorityCsrResponse')

const GetCertificateAuthorityCsrRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'GetCertificateAuthorityCsrRequest' })
  .openapi('GetCertificateAuthorityCsrRequest')

const AWSPolicySchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(20480)
  .openapi('AWSPolicy')

const GetPolicyResponseSchema = z
  .object({
    Policy: AWSPolicySchema.and(
      z.any().openapi({ description: 'The policy attached to the private CA as a JSON document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPolicyResponse')

const GetPolicyRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Number (ARN) of the private CA that will have its policy retrieved. You can find the CA's ARN by calling the ListCertificateAuthorities action. ",
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetPolicyRequest' })
  .openapi('GetPolicyRequest')

const CertificateBodyBlobSchema = z.string().min(1).max(32768).openapi('CertificateBodyBlob')

const CertificateChainBlobSchema = z.string().min(0).max(2097152).openapi('CertificateChainBlob')

const ImportCertificateAuthorityCertificateRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    Certificate: CertificateBodyBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the case of a root CA, or it may be signed by another CA that you control.',
        }),
    ),
    CertificateChain: CertificateChainBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your Amazon Web Services Private CA-hosted or on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding. </p> <p>This parameter must be supplied when you import a subordinate CA. When you import a root CA, there is no chain.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'Certificate'],
    title: 'ImportCertificateAuthorityCertificateRequest',
  })
  .openapi('ImportCertificateAuthorityCertificateRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const MalformedCertificateExceptionSchema = z.any().openapi('MalformedCertificateException')

const CertificateMismatchExceptionSchema = z.any().openapi('CertificateMismatchException')

const IssueCertificateResponseSchema = z
  .object({
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IssueCertificateResponse')

const PolicyQualifierIdSchema = z.literal('CPS').openapi('PolicyQualifierId')

const QualifierSchema = z
  .object({
    CpsUri: String256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a pointer to a certification practice statement (CPS) published by the CA.',
        }),
    ),
  })
  .openapi({
    required: ['CpsUri'],
    description:
      'Defines a <code>PolicyInformation</code> qualifier. Amazon Web Services Private CA supports the <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280. ',
  })
  .openapi('Qualifier')

const PolicyQualifierInfoSchema = z
  .object({
    PolicyQualifierId: PolicyQualifierIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the qualifier modifying a <code>CertPolicyId</code>.',
        }),
    ),
    Qualifier: QualifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the qualifier type. Amazon Web Services Private CA supports the use of a URI for a CPS qualifier in this field.',
        }),
    ),
  })
  .openapi({
    required: ['PolicyQualifierId', 'Qualifier'],
    description:
      'Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.',
  })
  .openapi('PolicyQualifierInfo')

const PolicyQualifierInfoListSchema = z
  .array(PolicyQualifierInfoSchema)
  .min(1)
  .max(20)
  .openapi('PolicyQualifierInfoList')

const PolicyInformationSchema = z
  .object({
    CertPolicyId: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST\'s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.',
        }),
    ),
    PolicyQualifiers: PolicyQualifierInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Modifies the given <code>CertPolicyId</code> with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CertPolicyId'],
    description: 'Defines the X.509 <code>CertificatePolicies</code> extension.',
  })
  .openapi('PolicyInformation')

const CertificatePolicyListSchema = z
  .array(PolicyInformationSchema)
  .min(1)
  .max(20)
  .openapi('CertificatePolicyList')

const ExtendedKeyUsageTypeSchema = z
  .enum([
    'SERVER_AUTH',
    'CLIENT_AUTH',
    'CODE_SIGNING',
    'EMAIL_PROTECTION',
    'TIME_STAMPING',
    'OCSP_SIGNING',
    'SMART_CARD_LOGIN',
    'DOCUMENT_SIGNING',
    'CERTIFICATE_TRANSPARENCY',
  ])
  .openapi('ExtendedKeyUsageType')

const ExtendedKeyUsageSchema = z
  .object({
    ExtendedKeyUsageType: ExtendedKeyUsageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a standard <code>ExtendedKeyUsage</code> as defined as in <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12">RFC 5280</a>.',
        }),
    ).exactOptional(),
    ExtendedKeyUsageObjectIdentifier: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a custom <code>ExtendedKeyUsage</code> with an object identifier (OID).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.',
    required: [],
  })
  .openapi('ExtendedKeyUsage')

const ExtendedKeyUsageListSchema = z
  .array(ExtendedKeyUsageSchema)
  .min(1)
  .max(20)
  .openapi('ExtendedKeyUsageList')

const GeneralNameListSchema = z.array(GeneralNameSchema).min(1).max(20).openapi('GeneralNameList')

const Base64String1To4096Schema = z
  .string()
  .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
  .min(1)
  .max(4096)
  .openapi('Base64String1To4096')

const CustomExtensionSchema = z
  .object({
    ObjectIdentifier: CustomObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p/> <p>Specifies the object identifier (OID) of the X.509 extension. For more information, see the <a href="https://oidref.com/2.5.29">Global OID reference database.</a> </p>',
        }),
    ),
    Value: Base64String1To4096Schema.and(
      z
        .any()
        .openapi({
          description: '<p/> <p>Specifies the base64-encoded value of the X.509 extension.</p>',
        }),
    ),
    Critical: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: '<p/> <p>Specifies the critical flag of the X.509 extension.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectIdentifier', 'Value'],
    description:
      '<p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p>',
  })
  .openapi('CustomExtension')

const CustomExtensionListSchema = z
  .array(CustomExtensionSchema)
  .min(1)
  .max(20)
  .openapi('CustomExtensionList')

const ExtensionsSchema = z
  .object({
    CertificatePolicies: CertificatePolicyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST\'s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p> <p>In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.</p>',
        }),
    ).exactOptional(),
    ExtendedKeyUsage: ExtendedKeyUsageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.',
        }),
    ).exactOptional(),
    KeyUsage: KeyUsageSchema.exactOptional(),
    SubjectAlternativeNames: GeneralNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.',
        }),
    ).exactOptional(),
    CustomExtensions: CustomExtensionListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p/> <p>Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the <a href="https://oidref.com/2.5.29">Global OID reference database.</a> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains X.509 extension information for a certificate.', required: [] })
  .openapi('Extensions')

const ApiPassthroughSchema = z
  .object({
    Extensions: ExtensionsSchema.and(
      z.any().openapi({ description: 'Specifies X.509 extension information for a certificate.' }),
    ).exactOptional(),
    Subject: ASN1SubjectSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>',
    required: [],
  })
  .openapi('ApiPassthrough')

const CsrBlobSchema = z.string().min(1).max(32768).openapi('CsrBlob')

const PositiveLongSchema = z.int().min(1).openapi('PositiveLong')

const ValidityPeriodTypeSchema = z
  .enum(['END_DATE', 'ABSOLUTE', 'DAYS', 'MONTHS', 'YEARS'])
  .openapi('ValidityPeriodType')

const ValiditySchema = z
  .object({
    Value: PositiveLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'A long integer interpreted according to the value of <code>Type</code>, below.',
        }),
    ),
    Type: ValidityPeriodTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how <i>Amazon Web Services Private CA</i> interprets the <code>Value</code> parameter, an integer. Supported validity types include those listed below. Type definitions with values include a sample input value and the resulting output. </p> <p> <code>END_DATE</code>: The specific date and time when the certificate will expire, expressed using UTCTime (YYMMDDHHMMSS) or GeneralizedTime (YYYYMMDDHHMMSS) format. When UTCTime is used, if the year field (YY) is greater than or equal to 50, the year is interpreted as 19YY. If the year field is less than 50, the year is interpreted as 20YY.</p> <ul> <li> <p>Sample input value: 491231235959 (UTCTime format)</p> </li> <li> <p>Output expiration date/time: 12/31/2049 23:59:59</p> </li> </ul> <p> <code>ABSOLUTE</code>: The specific date and time when the validity of a certificate will start or expire, expressed in seconds since the Unix Epoch. </p> <ul> <li> <p>Sample input value: 2524608000</p> </li> <li> <p>Output expiration date/time: 01/01/2050 00:00:00</p> </li> </ul> <p> <code>DAYS</code>, <code>MONTHS</code>, <code>YEARS</code>: The relative time from the moment of issuance until the certificate will expire, expressed in days, months, or years. </p> <p>Example if <code>DAYS</code>, issued on 10/12/2020 at 12:34:54 UTC:</p> <ul> <li> <p>Sample input value: 90</p> </li> <li> <p>Output expiration date: 01/10/2020 12:34:54 UTC</p> </li> </ul> <p>The minimum validity duration for a certificate using relative time (<code>DAYS</code>) is one day. The minimum validity for a certificate using absolute time (<code>ABSOLUTE</code> or <code>END_DATE</code>) is one second.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Value', 'Type'],
    description:
      '<p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>Amazon Web Services Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate\'s validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>',
  })
  .openapi('Validity')

const IssueCertificateRequestSchema = z
  .object({
    ApiPassthrough: ApiPassthroughSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies X.509 certificate information to be included in the issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. For more information about using these templates, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html">Understanding Certificate Templates</a>.</p> <p>If conflicting or duplicate certificate information is supplied during certificate issuance, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>',
        }),
    ).exactOptional(),
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    Csr: CsrBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The certificate signing request (CSR) for the certificate you want to issue. As an example, you can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key. </p> <p> <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>If you have a configuration file, you can then use the following OpenSSL command. The <code>usr_cert</code> block in the configuration file contains your X509 version 3 extensions. </p> <p> <code>openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>Note: A CSR must provide either a <i>subject name</i> or a <i>subject alternative name</i> or the request will be rejected. </p>',
        }),
    ),
    SigningAlgorithm: SigningAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the algorithm that will be used to sign the certificate to be issued. </p> <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter used to sign a CSR in the <code>CreateCertificateAuthority</code> action.</p> <note> <p>The specified signing algorithm family (RSA or ECDSA) much match the algorithm family of the CA's secret key.</p> </note>",
        }),
    ),
    TemplateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, Amazon Web Services Private CA defaults to the <code>EndEntityCertificate/V1</code> template. For CA certificates, you should choose the shortest path length that meets your needs. The path length is indicated by the PathLen<i>N</i> portion of the ARN, where <i>N</i> is the <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaTerms.html#terms-cadepth">CA depth</a>.</p> <p>Note: The CA depth configured on a subordinate CA certificate must not exceed the limit set by its parents in the CA hierarchy.</p> <p>For a list of <code>TemplateArn</code> values supported by Amazon Web Services Private CA, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html">Understanding Certificate Templates</a>.</p>',
        }),
    ).exactOptional(),
    Validity: ValiditySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate.</p> <p>Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280. </p> <p>This value is unaffected when <code>ValidityNotBefore</code> is also specified. For example, if <code>Validity</code> is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the <code>ValidityNotBefore</code> value.</p> <p>The end of the validity period configured on a certificate must not exceed the limit set on its parents in the CA hierarchy.</p>',
        }),
    ),
    ValidityNotBefore: ValiditySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.</p> <p>By default, when issuing a certificate, Amazon Web Services Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The <code>ValidityNotBefore</code> parameter can be used to customize the “Not Before” value. </p> <p>Unlike the <code>Validity</code> parameter, the <code>ValidityNotBefore</code> parameter is optional.</p> <p>The <code>ValidityNotBefore</code> value is expressed as an explicit date and time, using the <code>Validity</code> type value <code>ABSOLUTE</code>. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_Validity.html">Validity</a> in this API reference and <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Alphanumeric string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens for <b>IssueCertificate</b> time out after one minute. Therefore, if you call <b>IssueCertificate</b> multiple times with the same idempotency token within one minute, Amazon Web Services Private CA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'Csr', 'SigningAlgorithm', 'Validity'],
    title: 'IssueCertificateRequest',
  })
  .openapi('IssueCertificateRequest')

const MalformedCSRExceptionSchema = z.any().openapi('MalformedCSRException')

const CertificateAuthoritiesSchema = z
  .array(CertificateAuthoritySchema)
  .openapi('CertificateAuthorities')

const NextTokenSchema = z.string().min(1).max(500).openapi('NextToken')

const ListCertificateAuthoritiesResponseSchema = z
  .object({
    CertificateAuthorities: CertificateAuthoritiesSchema.and(
      z
        .any()
        .openapi({
          description: 'Summary information about each certificate authority you have created.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the list is truncated, this value is present and should be used for the <code>NextToken</code> parameter in a subsequent pagination request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCertificateAuthoritiesResponse')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ResourceOwnerSchema = z.enum(['SELF', 'OTHER_ACCOUNTS']).openapi('ResourceOwner')

const ListCertificateAuthoritiesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the <code>NextToken</code> parameter from the response you just received.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.',
        }),
    ).exactOptional(),
    ResourceOwner: ResourceOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to filter the returned set of certificate authorities based on their owner. The default is SELF.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCertificateAuthoritiesRequest', required: [] })
  .openapi('ListCertificateAuthoritiesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const PermissionSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the private CA from which the permission was issued.',
        }),
    ).exactOptional(),
    CreatedAt: TStampSchema.and(
      z.any().openapi({ description: 'The time at which the permission was created.' }),
    ).exactOptional(),
    Principal: PrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services service or entity that holds the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.',
        }),
    ).exactOptional(),
    SourceAccount: AccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the account that assigned the permission.' }),
    ).exactOptional(),
    Actions: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private CA actions that can be performed by the designated Amazon Web Services service.',
        }),
    ).exactOptional(),
    Policy: AWSPolicySchema.and(
      z
        .any()
        .openapi({ description: 'The name of the policy that is associated with the permission.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.',
    required: [],
  })
  .openapi('Permission')

const PermissionListSchema = z.array(PermissionSchema).min(0).openapi('PermissionList')

const ListPermissionsResponseSchema = z
  .object({
    Permissions: PermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information about each permission assigned by the specified private CA, including the action enabled, the policy provided, and the time of creation.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionsResponse')

const ListPermissionsRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must be of the form: <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> You can get a private CA\'s ARN by running the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When paginating results, use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'When paginating results, use this parameter to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'ListPermissionsRequest' })
  .openapi('ListPermissionsRequest')

const ListTagsResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with your private CA.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsResponse')

const ListTagsRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const PutPolicyRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Number (ARN) of the private CA to associate with the policy. The ARN of the CA can be found by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p> <p/>',
        }),
    ),
    Policy: AWSPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The path and file name of a JSON-formatted IAM policy to attach to the specified private CA resource. If this policy does not contain all required statements or if it includes any statement that is not allowed, the <code>PutPolicy</code> action returns an <code>InvalidPolicyException</code>. For information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Policy'], title: 'PutPolicyRequest' })
  .openapi('PutPolicyRequest')

const RestoreCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'RestoreCertificateAuthorityRequest' })
  .openapi('RestoreCertificateAuthorityRequest')

const RevocationReasonSchema = z
  .enum([
    'UNSPECIFIED',
    'KEY_COMPROMISE',
    'CERTIFICATE_AUTHORITY_COMPROMISE',
    'AFFILIATION_CHANGED',
    'SUPERSEDED',
    'CESSATION_OF_OPERATION',
    'PRIVILEGE_WITHDRAWN',
    'A_A_COMPROMISE',
  ])
  .openapi('RevocationReason')

const RevokeCertificateRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    CertificateSerial: String128Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The <b>GetCertificate</b> action retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number. </p> <p> <code>openssl x509 -in <i>file_path</i> -text -noout</code> </p> <p>You can also copy the serial number from the console or use the <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a> action in the <i>Certificate Manager API Reference</i>. </p>',
        }),
    ),
    RevocationReason: RevocationReasonSchema.and(
      z.any().openapi({ description: 'Specifies why you revoked the certificate.' }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'CertificateSerial', 'RevocationReason'],
    title: 'RevokeCertificateRequest',
  })
  .openapi('RevokeCertificateRequest')

const RequestAlreadyProcessedExceptionSchema = z.any().openapi('RequestAlreadyProcessedException')

const TagCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'List of tags to be associated with the CA.' }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'Tags'],
    title: 'TagCertificateAuthorityRequest',
  })
  .openapi('TagCertificateAuthorityRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'List of tags to be removed from the CA.' }),
    ),
  })
  .openapi({
    required: ['CertificateAuthorityArn', 'Tags'],
    title: 'UntagCertificateAuthorityRequest',
  })
  .openapi('UntagCertificateAuthorityRequest')

const UpdateCertificateAuthorityRequestSchema = z
  .object({
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>',
        }),
    ),
    RevocationConfiguration: RevocationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains information to enable Online Certificate Status Protocol (OCSP) support, to enable a certificate revocation list (CRL), to enable both, or to enable neither. If this parameter is not supplied, existing capibilites remain unchanged. For more information, see the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p> <note> <p>The following requirements apply to revocation configurations.</p> <ul> <li> <p>A configuration disabling CRLs or OCSP must contain only the <code>Enabled=False</code> parameter, and will fail if other parameters such as <code>CustomCname</code> or <code>ExpirationInDays</code> are included.</p> </li> <li> <p>In a CRL configuration, the <code>S3BucketName</code> parameter must conform to <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3 bucket naming rules</a>.</p> </li> <li> <p>A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in a CNAME. </p> </li> <li> <p>In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".</p> </li> </ul> </note>',
        }),
    ).exactOptional(),
    Status: CertificateAuthorityStatusSchema.and(
      z.any().openapi({ description: 'Status of your private CA.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateAuthorityArn'], title: 'UpdateCertificateAuthorityRequest' })
  .openapi('UpdateCertificateAuthorityRequest')

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

export const postXAmzTargetACMPrivateCACreateCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthority',
  description:
    '<p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>',
  operationId: 'CreateCertificateAuthority',
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
        .literal('ACMPrivateCA.CreateCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.CreateCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCertificateAuthorityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCertificateAuthorityResponseSchema } },
    },
    480: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    481: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
    482: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.CreateCertificateAuthorityAuditReport',
  description:
    '<p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>',
  operationId: 'CreateCertificateAuthorityAuditReport',
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
        .literal('ACMPrivateCA.CreateCertificateAuthorityAuditReport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ACMPrivateCA.CreateCertificateAuthorityAuditReport'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: CreateCertificateAuthorityAuditReportRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateCertificateAuthorityAuditReportResponseSchema },
      },
    },
    480: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    481: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    484: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    485: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCACreatePermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.CreatePermission',
  description:
    '<p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>',
  operationId: 'CreatePermission',
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
        .literal('ACMPrivateCA.CreatePermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.CreatePermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePermissionRequestSchema } },
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
      description: 'PermissionAlreadyExistsException',
      content: { 'application/json': { schema: PermissionAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    485: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCADeleteCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.DeleteCertificateAuthority',
  description:
    '<p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven\'t yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA\'s status changes to <code>DELETED</code>. However, the CA won\'t be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>',
  operationId: 'DeleteCertificateAuthority',
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
        .literal('ACMPrivateCA.DeleteCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.DeleteCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCertificateAuthorityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCADeletePermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.DeletePermission',
  description:
    '<p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>',
  operationId: 'DeletePermission',
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
        .literal('ACMPrivateCA.DeletePermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.DeletePermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePermissionRequestSchema } },
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
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCADeletePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.DeletePolicy',
  description:
    '<p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>',
  operationId: 'DeletePolicy',
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
        .literal('ACMPrivateCA.DeletePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.DeletePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'LockoutPreventedException',
      content: { 'application/json': { schema: LockoutPreventedExceptionSchema } },
    },
    484: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCADescribeCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthority',
  description:
    "<p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>",
  operationId: 'DescribeCertificateAuthority',
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
        .literal('ACMPrivateCA.DescribeCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.DescribeCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCertificateAuthorityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCertificateAuthorityResponseSchema } },
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

export const postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.DescribeCertificateAuthorityAuditReport',
  description:
    'Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. ',
  operationId: 'DescribeCertificateAuthorityAuditReport',
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
        .literal('ACMPrivateCA.DescribeCertificateAuthorityAuditReport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ACMPrivateCA.DescribeCertificateAuthorityAuditReport'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DescribeCertificateAuthorityAuditReportRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeCertificateAuthorityAuditReportResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAGetCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.GetCertificate',
  description:
    'Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. ',
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
        .literal('ACMPrivateCA.GetCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.GetCertificate'] },
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
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    481: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    484: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAGetCertificateAuthorityCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCertificate',
  description:
    'Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. ',
  operationId: 'GetCertificateAuthorityCertificate',
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
        .literal('ACMPrivateCA.GetCertificateAuthorityCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.GetCertificateAuthorityCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCertificateAuthorityCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCertificateAuthorityCertificateResponseSchema } },
    },
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
  },
})

export const postXAmzTargetACMPrivateCAGetCertificateAuthorityCsrRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.GetCertificateAuthorityCsr',
  description:
    'Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. ',
  operationId: 'GetCertificateAuthorityCsr',
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
        .literal('ACMPrivateCA.GetCertificateAuthorityCsr')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.GetCertificateAuthorityCsr'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCertificateAuthorityCsrRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCertificateAuthorityCsrResponseSchema } },
    },
    480: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    481: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    484: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAGetPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.GetPolicy',
  description:
    '<p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>',
  operationId: 'GetPolicy',
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
        .literal('ACMPrivateCA.GetPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.GetPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetPolicyRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    481: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    482: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAImportCertificateAuthorityCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.ImportCertificateAuthorityCertificate',
  description:
    '<p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>',
  operationId: 'ImportCertificateAuthorityCertificate',
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
        .literal('ACMPrivateCA.ImportCertificateAuthorityCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ACMPrivateCA.ImportCertificateAuthorityCertificate'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ImportCertificateAuthorityCertificateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    482: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    487: {
      description: 'MalformedCertificateException',
      content: { 'application/json': { schema: MalformedCertificateExceptionSchema } },
    },
    488: {
      description: 'CertificateMismatchException',
      content: { 'application/json': { schema: CertificateMismatchExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAIssueCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.IssueCertificate',
  description:
    '<p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>',
  operationId: 'IssueCertificate',
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
        .literal('ACMPrivateCA.IssueCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.IssueCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IssueCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IssueCertificateResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    484: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    485: {
      description: 'MalformedCSRException',
      content: { 'application/json': { schema: MalformedCSRExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAListCertificateAuthoritiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.ListCertificateAuthorities',
  description:
    'Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.',
  operationId: 'ListCertificateAuthorities',
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
        .literal('ACMPrivateCA.ListCertificateAuthorities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.ListCertificateAuthorities'] },
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
      content: { 'application/json': { schema: ListCertificateAuthoritiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCertificateAuthoritiesResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAListPermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.ListPermissions',
  description:
    '<p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>',
  operationId: 'ListPermissions',
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
        .literal('ACMPrivateCA.ListPermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.ListPermissions'] },
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
      content: { 'application/json': { schema: ListPermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    484: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAListTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.ListTags',
  description:
    'Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. ',
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
      'X-Amz-Target': z
        .literal('ACMPrivateCA.ListTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.ListTags'] },
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
    body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAPutPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.PutPolicy',
  description:
    '<p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>',
  operationId: 'PutPolicy',
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
        .literal('ACMPrivateCA.PutPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.PutPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutPolicyRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
    484: {
      description: 'LockoutPreventedException',
      content: { 'application/json': { schema: LockoutPreventedExceptionSchema } },
    },
    485: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCARestoreCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.RestoreCertificateAuthority',
  description:
    'Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.',
  operationId: 'RestoreCertificateAuthority',
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
        .literal('ACMPrivateCA.RestoreCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.RestoreCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreCertificateAuthorityRequestSchema } },
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
  },
})

export const postXAmzTargetACMPrivateCARevokeCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.RevokeCertificate',
  description:
    '<p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>',
  operationId: 'RevokeCertificate',
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
        .literal('ACMPrivateCA.RevokeCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.RevokeCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RevokeCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'RequestAlreadyProcessedException',
      content: { 'application/json': { schema: RequestAlreadyProcessedExceptionSchema } },
    },
    487: {
      description: 'RequestInProgressException',
      content: { 'application/json': { schema: RequestInProgressExceptionSchema } },
    },
    488: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCATagCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.TagCertificateAuthority',
  description:
    '<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>',
  operationId: 'TagCertificateAuthority',
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
        .literal('ACMPrivateCA.TagCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.TagCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TagCertificateAuthorityRequestSchema } },
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
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAUntagCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.UntagCertificateAuthority',
  description:
    'Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. ',
  operationId: 'UntagCertificateAuthority',
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
        .literal('ACMPrivateCA.UntagCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.UntagCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagCertificateAuthorityRequestSchema } },
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
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetACMPrivateCAUpdateCertificateAuthorityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ACMPrivateCA.UpdateCertificateAuthority',
  description:
    '<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>',
  operationId: 'UpdateCertificateAuthority',
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
        .literal('ACMPrivateCA.UpdateCertificateAuthority')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ACMPrivateCA.UpdateCertificateAuthority'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCertificateAuthorityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArgsException',
      content: { 'application/json': { schema: InvalidArgsExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    484: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    485: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
  },
})
