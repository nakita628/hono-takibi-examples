import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ description: 'The id of the account' }),
    identifier: z.string().exactOptional().openapi({ description: 'Identifier for the account' }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The servicepack id that defines the account.' }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const AddonSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ description: 'The id of the addon' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the addon' }),
  })
  .openapi({ description: 'Addon information', required: [] })
  .openapi('Addon')

const ServicepackSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ description: 'The id of the service pack' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the service pack' }),
  })
  .openapi({ description: 'Servicepack information.', required: [] })
  .openapi('Servicepack')

const AccountDetailSchema = z
  .strictObject({
    addons: z
      .array(AddonSchema)
      .exactOptional()
      .openapi({ description: 'A list of addons applied to the account.' }),
    id: z.int32().exactOptional().openapi({ description: 'The id of the account' }),
    identifier: z.string().exactOptional().openapi({ description: 'Identifier for the account' }),
    servicepack: ServicepackSchema.exactOptional(),
  })
  .openapi({ description: 'A detailed representation of an account.', required: [] })
  .openapi('AccountDetail')

const AddHostHeaderRequestSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Host header domain name (e.g. alias.be or alias.site.be).' }),
  })
  .openapi({ required: [] })
  .openapi('AddHostHeaderRequest')

const AddSshKeyRequestSchema = z
  .strictObject({ public_key: z.string().exactOptional().openapi({ description: 'Public key' }) })
  .openapi({ required: [] })
  .openapi('AddSshKeyRequest')

const AddSubsiteRequestSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subsite domain name (e.g. alias.be or subsite.site.be).' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br />\r\nThe path MUST pre-exist on the server. It WILL NOT be created automatically.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AddSubsiteRequest')

const AdditionalValidationAttributeSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional validation attribute field name.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional validation attribute field value.' }),
  })
  .openapi({ required: [] })
  .openapi('AdditionalValidationAttribute')

const AliasSchema = z
  .strictObject({
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The alias destination e-mail addresses' }),
    email_address: z.string().exactOptional().openapi({ description: 'The alias e-mail address' }),
  })
  .openapi({ required: [] })
  .openapi('Alias')

const AntiSpamTypesSchema = z
  .enum(['none', 'advanced', 'basic'])
  .openapi({ description: 'Types of anti-spam scanning' })
  .openapi('AntiSpamTypes')

const AntiSpamSchema = z
  .strictObject({
    allowed_types: z
      .array(AntiSpamTypesSchema)
      .exactOptional()
      .openapi({ description: 'Allowed types of anti-spam scanning for this mail zone' }),
    type: AntiSpamTypesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AntiSpam')

const ApplicationPoolSchema = z
  .strictObject({
    installed_net_core_runtimes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The installed .NET Core runtimes for the hosting account.' }),
    pipeline_mode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active pipeline mode for the hosting account.' }),
    runtime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active runtime for the hosting account.' }),
  })
  .openapi({ description: 'The application pool for the hosting account.', required: [] })
  .openapi('ApplicationPool')

const AssetTypeSchema = z
  .enum(['domain', 'linux_hosting', 'mysql', 'dns', 'mailbox', 'windows_hosting'])
  .openapi({ description: 'Asset types' })
  .openapi('AssetType')

const AutoForwardSchema = z
  .strictObject({
    copy_to_myself: z.boolean().exactOptional().openapi({ description: 'Copy to myself' }),
    email_addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'E-mail addresses to which e-mails are forwarded' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: [] })
  .openapi('AutoForward')

const AutoRedirectConfigSchema = z
  .strictObject({ enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }) })
  .openapi({ required: [] })
  .openapi('AutoRedirectConfig')

const AutoReplySchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }),
    message: z.string().exactOptional().openapi({ description: 'Message' }),
    subject: z.string().exactOptional().openapi({ description: 'Subject' }),
  })
  .openapi({ required: [] })
  .openapi('AutoReply')

const ValidationErrorMessageSchema = z
  .strictObject({ error_code: z.string().exactOptional(), error_text: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ValidationErrorMessage')

const BadRequestResponseSchema = z
  .strictObject({
    validation_errors: z
      .array(ValidationErrorMessageSchema)
      .exactOptional()
      .openapi({
        description: 'A list of validation errors that occurred when processing the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BadRequestResponse')

const CatchAllSchema = z
  .strictObject({
    email_addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'E-mail addresses to which all e-mails are sent to inexistent mailboxes or aliases',
      }),
  })
  .openapi({ required: [] })
  .openapi('CatchAll')

const CompletionEstimationSchema = z
  .strictObject({
    estimate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The estimated time when the job should be finished.<br />\r\nUnexpected delays can always occur.<br />\r\nThe value is subject to change during the provisioning.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CompletionEstimation')

const CreateAccountSchema = z
  .strictObject({
    ftp_password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ftp password for the account.<br />\r\nApplies only if the servicepack contains hosting.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for the account.<br />\r\nShould be a domain name for hosting accounts.',
      }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The servicepack id that defines the account.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateAccount')

const CreateAliasRequestSchema = z
  .strictObject({
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The alias destination e-mail addresses' }),
    email_address: z.string().exactOptional().openapi({ description: 'The alias e-mail' }),
  })
  .openapi({ required: [] })
  .openapi('CreateAliasRequest')

const CreateCatchAllRequestSchema = z
  .strictObject({
    email_address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'E-mail address to which all e-mails are sent to inexistent mailboxes or aliases',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateCatchAllRequest')

const CreateMailboxRequestSchema = z
  .strictObject({
    account_id: z.int32().exactOptional().openapi({ description: 'Mail zone account id' }),
    email_address: z.string().exactOptional().openapi({ description: 'E-mail address' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password for the mailbox.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateMailboxRequest')

const CreateMySqlDatabaseSchema = z
  .strictObject({
    account_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The id of the account on which to create the database.' }),
    database_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name for the database. This will be prefixed during provisioning.\r\nThe provided name during creation will be different from the provisioned database name.',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password for the database user.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateMySqlDatabase')

const CreateMySqlUserSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User name<br />\r\nUser names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password for the database user.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateMySqlUser')

const CreateSmtpDomainRequestSchema = z
  .strictObject({
    hostname: z.string().exactOptional().openapi({ description: 'The smtp domain name' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSmtpDomainRequest')

const SslCertificateTypeSchema = z
  .enum(['standard', 'multi_domain', 'wildcard'])
  .openapi({
    description:
      'The type of the certificate:\r\n<ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>',
  })
  .openapi('SslCertificateType')

const SslCertificateValidationLevelSchema = z
  .enum(['domain_validated', 'organization_validated', 'extended_validated'])
  .openapi({
    description:
      'The validation level of the certificate:\r\n<ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>',
  })
  .openapi('SslCertificateValidationLevel')

const CreateSslCertificateRequestSchema = z
  .strictObject({
    additional_validation_attributes: z
      .array(AdditionalValidationAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'List of additional validation attributes for the certificate when choosing organization or extended validation.\r\n<table><tr><th>Name</th><th>Info</th><th>Required</th></tr><tr><td>Firstname</td><td>Firstname of the technical contact</td><td>Yes</td></tr><tr><td>Lastname</td><td>Lastname of the technical contact</td><td>Yes</td></tr><tr><td>Phone</td><td>Phone of the technical contact</td><td>Yes</td></tr><tr><td>EmailAddress</td><td>Email address of the technical contact</td><td>Yes</td></tr><tr><td>Street</td><td>Address street of the organization</td><td>Yes</td></tr><tr><td>Number</td><td>Address house number of the organization</td><td>Yes</td></tr><tr><td>PostalCode</td><td>Address postal code of the organization</td><td>Yes</td></tr><tr><td>VatCountryCode</td><td>VAT country code of the organization, ISO 3166-1 alpha-2 country code</td><td>Yes</td></tr><tr><td>OrganizationNumber</td><td>Business number of the organization</td><td>No</td></tr></table>',
      }),
    certificate_type: SslCertificateTypeSchema.exactOptional(),
    csr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The certificate signing request data.<br />\r\nThe certificate signing request subject should contain following attributes:<br /><table><tr><th>Name</th><th>Code</th><th>Format</th></tr><tr><td>CommonName</td><td>CN</td><td>Valid domain name, for example site.be, alias.site.be or *.site.be</td></tr><tr><td>Country</td><td>C</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>State</td><td>ST</td><td></td></tr><tr><td>Locality</td><td>L</td><td></td></tr><tr><td>Organization</td><td>O</td><td></td></tr><tr><td>EmailAddress</td><td>E</td><td>Valid email address</td></tr></table>\r\nThe certificate signing request should also contain all the additional aliases and domains (SAN's) for the certificate.",
      }),
    validation_level: SslCertificateValidationLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSslCertificateRequest')

const DnsRecordSchema = z
  .strictObject({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Variable data depending on the record type.\r\n<ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".\r\n        <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"\r\n        <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the record\r\nThis value is ignored for creation of new records.',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The port for SRV records.<br />\r\nThe value MUST be a positive integer.<br />\r\nEditing the value is not possible. You should add a new SRV record and delete the existing record.',
      }),
    priority: z
      .int32()
      .default(10)
      .exactOptional()
      .openapi({
        description:
          'The priority for MX or SRV records.<br />\r\nA lower value means more preferred.<br />\r\nThe value MUST be a positive integer less or equal to 9999.',
      }),
    protocol: z
      .string()
      .default('TCP')
      .exactOptional()
      .openapi({
        description:
          'Used for the creation of SRV records. Possible options: TCP, UDP, ...<br />\r\nEditing the value is not possible. You should add a new SRV record and delete the existing record.',
      }),
    record_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the record.<br />\r\nThis is the host name, alias defined by the record.<br />\r\nAn empty record or '@' is equal to the domain name.<br />\r\nApplies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br />\r\nWhen type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br />\r\nDoes not apply for SRV records.",
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbolic name of the desired service for SRV records.<br />\r\nEditing the value is not possible. You should add a new SRV record and can delete the existing record.',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical hostname of the machine providing the service for SRV records.<br />\r\nEditing the value is not possible. You should add a new SRV record and delete the existing record.',
      }),
    ttl: z
      .int32()
      .default(3600)
      .exactOptional()
      .openapi({
        description:
          'Time to live of the record in seconds.<br />\r\nIt defines the time frame that clients can cache the information.<br />\r\nThe value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA).',
      }),
    weight: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The weight for SRV records with the same priority.<br />\r\nA higher value means more preferred.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DnsRecord')

const DomainSchema = z
  .strictObject({
    domain_name: z.string().exactOptional().openapi({ description: 'The domain name' }),
    expiration_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration date of the domain' }),
    will_renew: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indication of renewal.<br />\r\nNo value indicates that the renewal state could not be determined at the moment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const NameServerSchema = z
  .strictObject({
    ip: z.string().exactOptional().openapi({ description: 'Nameserver ip' }),
    name: z.string().exactOptional().openapi({ description: 'Nameserver name' }),
  })
  .openapi({ required: [] })
  .openapi('NameServer')

const RegistrantSchema = z
  .strictObject({
    address: z.string().exactOptional().openapi({ description: 'Address of the registrant.' }),
    city: z.string().exactOptional().openapi({ description: 'City of the registrant.' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Company name of the registrant.<br />\r\nThe registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.',
      }),
    country_code: z
      .string()
      .exactOptional()
      .openapi({ description: "Country code of the registrant.\r\nSyntax: 'BE', 'NL, 'FR', ..." }),
    email: z.string().exactOptional().openapi({ description: 'Email of the registrant.' }),
    enterprise_number: z
      .string()
      .exactOptional()
      .openapi({
        description: "Enterprise number of the registrant.<br />\r\nSyntax: 'BE0123456789'",
      }),
    fax: z
      .string()
      .exactOptional()
      .openapi({ description: "Fax of the registrant.\r\nSyntax: '+32.123456789'" }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the registrant.' }),
    language_code: z
      .string()
      .exactOptional()
      .openapi({
        description: "Language code of the registrant.\r\nSyntax: 'nl', 'fr', 'en', 'de', ...",
      }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name of the registrant.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "Phone of the registrant.<br />\r\nSyntax: '+32.123456789'" }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code of the registrant.' }),
  })
  .openapi({ required: [] })
  .openapi('Registrant')

const DomainDetailSchema = z
  .strictObject({
    can_toggle_renew: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indication if the domain renew state can be changed.' }),
    domain_name: z.string().exactOptional().openapi({ description: 'The domain name' }),
    expiration_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration date of the domain' }),
    name_servers: z
      .array(NameServerSchema)
      .exactOptional()
      .openapi({ description: 'Nameservers of the domain' }),
    registrant: RegistrantSchema.exactOptional(),
    will_renew: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indication of renewal.<br />\r\nNo value indicates that the renewal state could not be determined at the moment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DomainDetail')

const EditDomainWillRenewRequestSchema = z
  .strictObject({
    will_renew: z.boolean().exactOptional().openapi({ description: 'Indication of renewal.' }),
  })
  .openapi({ required: [] })
  .openapi('EditDomainWillRenewRequest')

const EditNameServersSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain name to register.' }),
    name_servers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of name servers.' }),
  })
  .openapi({ required: [] })
  .openapi('EditNameServers')

const ExtraFieldSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ description: 'Registrant extra field name.' }),
    value: z.string().exactOptional().openapi({ description: 'Registrant extra field value.' }),
  })
  .openapi({ required: [] })
  .openapi('ExtraField')

const FtpConfigurationSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enable or disable FTP.' }),
  })
  .openapi({ required: [] })
  .openapi('FtpConfiguration')

const GzipConfigSchema = z
  .strictObject({ enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }) })
  .openapi({ required: [] })
  .openapi('GzipConfig')

const HostHeaderSchema = z
  .strictObject({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the host header is applied on the web server.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the host header.' }),
  })
  .openapi({ description: 'A host header identifies a web domain.', required: [] })
  .openapi('HostHeader')

const Http2ConfigurationSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enable or disable HTTP/2.' }),
  })
  .openapi({ required: [] })
  .openapi('Http2Configuration')

const LetsEncryptConfigSchema = z
  .strictObject({ enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }) })
  .openapi({ required: [] })
  .openapi('LetsEncryptConfig')

const LinuxHostingSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name for the Linux hosting account.' }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of Linux hosting service package.' }),
  })
  .openapi({ required: [] })
  .openapi('LinuxHosting')

const LinuxIpTypeSchema = z
  .enum(['dedicated', 'shared'])
  .openapi({ description: 'Type of the hosting IP address (dedicated or shared)' })
  .openapi('LinuxIpType')

const LinuxSiteSchema = z
  .strictObject({
    host_headers: z
      .array(HostHeaderSchema)
      .exactOptional()
      .openapi({ description: 'Host headers for the website.' }),
    http2_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether http/2 protocol is enabled for the website.' }),
    https_redirect_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether automatic https redirection is enabled for the website.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the website.' }),
    path: z.string().exactOptional().openapi({ description: 'The path of the website.' }),
    ssl_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether ssl is enabled for the website.' }),
  })
  .openapi({ required: [] })
  .openapi('LinuxSite')

const LinuxHostingDetailSchema = z
  .strictObject({
    actual_size: z.int32().exactOptional().openapi({ description: 'Used webspace size in MB' }),
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name for the Linux hosting account.' }),
    ftp_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether ftp is enabled for the hosting account.' }),
    ftp_username: z.string().exactOptional().openapi({ description: 'Ftp username' }),
    ip: z.string().exactOptional().openapi({ description: 'Linux hosting IP address' }),
    ip_type: LinuxIpTypeSchema.exactOptional(),
    max_size: z.int32().exactOptional().openapi({ description: 'Maximum webspace size in MB' }),
    max_webspace_size: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Maximum webspace size in MB<br />\r\nUse max_size instead.',
      }),
    mysql_database_names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of mysql databases linked to the hosting account.<br />\r\nDetails of the database can be read using the mysql database detail.',
      }),
    php_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The active php version for the hosting account.' }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of Linux hosting service package.' }),
    sites: z
      .array(LinuxSiteSchema)
      .exactOptional()
      .openapi({ description: 'A list of websites on the hosting account.' }),
    ssh_host: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ssh host of the linux hosting account' }),
    ssh_username: z.string().exactOptional().openapi({ description: 'Ssh username' }),
    webspace_usage: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Used webspace size in MB<br />\r\nUse actual_size instead.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LinuxHostingDetail')

const MailZoneAccountSchema = z
  .strictObject({
    account_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Mail zone account id, use this value to create a mailbox' }),
    size: z.int32().exactOptional().openapi({ description: 'Size of mailbox(es) in MB' }),
  })
  .openapi({ required: [] })
  .openapi('MailZoneAccount')

const SmtpDomainSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }),
    hostname: z.string().exactOptional().openapi({ description: 'The smtp domain name' }),
  })
  .openapi({ required: [] })
  .openapi('SmtpDomain')

const MailZoneSchema = z
  .strictObject({
    aliases: z
      .array(AliasSchema)
      .exactOptional()
      .openapi({
        description:
          'List of aliases on the mail zone<br />\r\nAn alias is an e-mail address (alias) that automatically forwards received e-mails to another e-mail address (destination).',
      }),
    anti_spam: AntiSpamSchema.exactOptional(),
    available_accounts: z
      .array(MailZoneAccountSchema)
      .exactOptional()
      .openapi({ description: 'List of mail zone accounts with their mailbox size.' }),
    catch_all: CatchAllSchema.exactOptional(),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the mail zone is enabled.' }),
    name: z.string().exactOptional(),
    smtp_domains: z
      .array(SmtpDomainSchema)
      .exactOptional()
      .openapi({
        description:
          'List of extra smtp domains on the mail zone<br />\r\nSMTP domain names allow you to link multiple domain names to a single e-mail address.<br />\r\nE-mails sent to an SMTP domain will be caught by the respective e-mail address on the main domain name.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MailZone')

const MailboxSchema = z
  .strictObject({
    actual_size: z.int32().exactOptional().openapi({ description: 'Used size in MB' }),
    max_size: z.int32().exactOptional().openapi({ description: 'Maximum size in MB' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Mailbox')

const MailboxDetailSchema = z
  .strictObject({
    actual_size: z.int32().exactOptional().openapi({ description: 'Used size in MB' }),
    auto_forward: AutoForwardSchema.exactOptional(),
    auto_reply: AutoReplySchema.exactOptional(),
    login: z.string().exactOptional().openapi({ description: 'Login to connect with the mailbox' }),
    max_size: z.int32().exactOptional().openapi({ description: 'Maximum size in MB' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MailboxDetail')

const MySqlDatabaseSchema = z
  .strictObject({
    account_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The account id for the database.' }),
    actual_size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The actual size in MB for the database.' }),
    hostname: z.string().exactOptional().openapi({ description: 'Hostname' }),
    max_size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximim size in MB for the database.' }),
    name: z.string().exactOptional().openapi({ description: 'Database name' }),
    user_count: z.int32().exactOptional().openapi({ description: 'The number of users.' }),
  })
  .openapi({ required: [] })
  .openapi('MySqlDatabase')

const UserRightsSchema = z
  .enum(['read_and_write', 'read_only'])
  .openapi({ description: 'User rights' })
  .openapi('UserRights')

const MySqlUserSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'User status' }),
    name: z.string().exactOptional().openapi({ description: 'User name' }),
    rights: UserRightsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MySqlUser')

const PhpVersionSchema = z
  .strictObject({ version: z.string().exactOptional().openapi({ description: 'Php version' }) })
  .openapi({ required: [] })
  .openapi('PhpVersion')

const ProvisioningJobCompletionSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'The id of the job.' }),
    resource_links: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Links to the created resource(s).' }),
  })
  .openapi({ required: [] })
  .openapi('ProvisioningJobCompletion')

const ProvisioningJobStatusSchema = z
  .enum(['ongoing', 'cancelled', 'failed', 'finished'])
  .openapi({ description: 'Current job status' })
  .openapi('ProvisioningJobStatus')

const ProvisioningJobInfoSchema = z
  .strictObject({
    completion: CompletionEstimationSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The id of the job.' }),
    status: ProvisioningJobStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProvisioningJobInfo')

const RegistrantInputSchema = z
  .strictObject({
    address: z.string().exactOptional().openapi({ description: 'Address of the registrant.' }),
    city: z.string().exactOptional().openapi({ description: 'City of the registrant.' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Company name of the registrant.<br />\r\nThe registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.',
      }),
    country_code: z
      .string()
      .exactOptional()
      .openapi({ description: "Country code of the registrant.\r\nSyntax: 'BE', 'NL, 'FR', ..." }),
    email: z.string().exactOptional().openapi({ description: 'Email of the registrant.' }),
    enterprise_number: z
      .string()
      .exactOptional()
      .openapi({
        description: "Enterprise number of the registrant.<br />\r\nSyntax: 'BE0123456789'",
      }),
    extra_fields: z
      .array(ExtraFieldSchema)
      .exactOptional()
      .openapi({
        description:
          "List of registrant extra fields for the domain name.\r\n<table><tr><th>Extension</th><th>Registrant specifics</th><th>Required extra field(s)</th></tr><tr><td>.dk</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.fr</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.it</td><td>is an individual and has country code 'IT'</td><td>CodiceFiscal</td></tr><tr><td>.it</td><td>is an individual and has not country code 'IT'</td><td>PassportNumber</td></tr><tr><td>.nu</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.nu</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.se</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.se</td><td>is an individual</td><td>PassportNumber</td></tr></table>",
      }),
    fax: z
      .string()
      .exactOptional()
      .openapi({ description: "Fax of the registrant.\r\nSyntax: '+32.123456789'" }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the registrant.' }),
    language_code: z
      .string()
      .exactOptional()
      .openapi({
        description: "Language code of the registrant.\r\nSyntax: 'nl', 'fr', 'en', 'de', ...",
      }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name of the registrant.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "Phone of the registrant.<br />\r\nSyntax: '+32.123456789'" }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code of the registrant.' }),
  })
  .openapi({ required: [] })
  .openapi('RegistrantInput')

const RegisterDomainSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The domain name to register.<br />\r\nOnly pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>',
      }),
    name_servers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of name servers. When empty, the registation will be done on default name servers.',
      }),
    registrant: RegistrantInputSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterDomain')

const ScheduledTaskSchema = z
  .strictObject({
    cron_expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cron expression of scheduled task.<br />\r\n5-digit expressions (*/5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also */5, */10, */15 and */30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>',
      }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Enabled.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the scheduled task.<br />\r\nThis value is ignored for creation of new scheduled tasks.',
      }),
    script_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute path from this linux hosting to execute.' }),
  })
  .openapi({ required: [] })
  .openapi('ScheduledTask')

const SiteBindingSchema = z
  .strictObject({
    cert_thumbprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The certificate thumbprint of the site binding.' }),
    host_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The host name of the site binding.' }),
    ip_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address of the site binding.' }),
    port: z.int32().exactOptional().openapi({ description: 'The port of the site binding.' }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The protocol of the site binding.' }),
    ssl_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether ssl is enabled for the binding.' }),
  })
  .openapi({ description: 'A site binding identifies a web domain.', required: [] })
  .openapi('SiteBinding')

const SshConfigurationSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enable or disable SSH.' }),
  })
  .openapi({ required: [] })
  .openapi('SshConfiguration')

const SshKeySchema = z
  .strictObject({
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the public key.<br />\r\nThis value is ignored for creation of new SSH keys.',
      }),
    public_key: z.string().exactOptional().openapi({ description: 'Public key' }),
  })
  .openapi({ required: [] })
  .openapi('SshKey')

const SshKeyDetailSchema = z
  .strictObject({
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the public key.<br />\r\nThis value is ignored for creation of new SSH keys.',
      }),
    linux_hostings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of Linux hostings where SSH key is attached' }),
    public_key: z.string().exactOptional().openapi({ description: 'Public key' }),
  })
  .openapi({ required: [] })
  .openapi('SshKeyDetail')

const SslCertificateSchema = z
  .strictObject({
    common_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name (e.g. domain.com) of the certificate.' }),
    expires_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The exact time the certificate will expire.' }),
    sha1_fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SHA-1 fingerprint of the certificate.<br />\r\nThe fingerprint is a cryptographic hash which is a short unique identification of the certificate.',
      }),
    type: SslCertificateTypeSchema.exactOptional(),
    validation_level: SslCertificateValidationLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SslCertificate')

const SslSubjectAltNameTypeSchema = z
  .enum(['dns', 'ip'])
  .openapi({ description: 'The type of the alt name:\r\n<ul><li>Dns</li><li>Ip</li></ul>' })
  .openapi('SslSubjectAltNameType')

const SslSubjectAltNameSchema = z
  .strictObject({
    type: SslSubjectAltNameTypeSchema.exactOptional(),
    value: z.string().exactOptional().openapi({ description: 'The value of the alt name.' }),
  })
  .openapi({ required: [] })
  .openapi('SslSubjectAltName')

const SslCertificateDetailSchema = z
  .strictObject({
    common_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name (e.g. domain.com) of the certificate.' }),
    expires_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The exact time the certificate will expire.' }),
    sha1_fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SHA-1 fingerprint of the certificate.<br />\r\nThe fingerprint is a cryptographic hash which is a short unique identification of the certificate.',
      }),
    subject_alt_names: z
      .array(SslSubjectAltNameSchema)
      .exactOptional()
      .openapi({ description: 'The list of all supported dns names in the certificate.' }),
    type: SslCertificateTypeSchema.exactOptional(),
    validation_level: SslCertificateValidationLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SslCertificateDetail')

const SslCertificateFileFormatSchema = z
  .literal('pfx')
  .openapi({
    description:
      'The file format of the returned file stream:\r\n<ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>',
  })
  .openapi('SslCertificateFileFormat')

const SslCertificateVendorSchema = z
  .literal('sectigo')
  .openapi({ description: 'The vendor of the certificate.' })
  .openapi('SslCertificateVendor')

const SslCertificateRequestSchema = z
  .strictObject({
    certificate_type: SslCertificateTypeSchema.exactOptional(),
    common_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name of the certificate request.' }),
    id: z.int32().exactOptional().openapi({ description: 'The id of the certificate request.' }),
    order_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order code of the certificate request.' }),
    validation_level: SslCertificateValidationLevelSchema.exactOptional(),
    vendor: SslCertificateVendorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SslCertificateRequest')

const SslCertificateRequestValidationTypeSchema = z
  .enum(['dns', 'file', 'email'])
  .openapi({ description: 'The domain validation verification type.' })
  .openapi('SslCertificateRequestValidationType')

const SslCertificateRequestValidationSchema = z
  .strictObject({
    auto_validated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns true if no user interaction is required and the domain validation will be verified automatic.',
      }),
    cname_validation_content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value-part (Point To) of the CNAME-record that must be created as part of domain verification.',
      }),
    cname_validation_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The host-part (Name) of the CNAME-record that must be created as part of domain verification.',
      }),
    dns_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A domain name of the certificate.' }),
    email_addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of eligible domain verification email addresses.' }),
    file_validation_content: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The content your verification file must contain, consisting of three lines of plain-text.',
      }),
    file_validation_url_http: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL (http format) your verification file must be uploaded to as part of domain verification.',
      }),
    file_validation_url_https: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL (https format) your verification file must be uploaded to as part of domain verification.',
      }),
    type: SslCertificateRequestValidationTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SslCertificateRequestValidation')

const SslCertificateRequestDetailSchema = z
  .strictObject({
    certificate_type: SslCertificateTypeSchema.exactOptional(),
    common_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name of the certificate request.' }),
    id: z.int32().exactOptional().openapi({ description: 'The id of the certificate request.' }),
    order_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order code of the certificate request.' }),
    subject_alt_names: z
      .array(SslSubjectAltNameSchema)
      .exactOptional()
      .openapi({ description: 'The list of all supported domains in the certificate.' }),
    validation_level: SslCertificateValidationLevelSchema.exactOptional(),
    validations: z
      .array(SslCertificateRequestValidationSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of dns names to be validated with the information related to domain verification.',
      }),
    vendor: SslCertificateVendorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SslCertificateRequestDetail')

const TransferDomainSchema = z
  .strictObject({
    auth_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization code which allows the transfer to execute.' }),
    domain_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The domain name to transfer.<br />\r\nOnly pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>',
      }),
    name_servers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of name servers. When empty, the transfer will be done on default name servers.',
      }),
    registrant: RegistrantInputSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransferDomain')

const UpdateAliasRequestSchema = z
  .strictObject({
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The alias destination e-mail addresses' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAliasRequest')

const UpdateAntiSpamRequestSchema = z
  .strictObject({ type: AntiSpamTypesSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateAntiSpamRequest')

const UpdateMailboxPasswordRequestSchema = z
  .strictObject({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password for the database user.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateMailboxPasswordRequest')

const UpdatePhpAPcuRequestSchema = z
  .strictObject({
    apcu_size: z.int32().exactOptional().openapi({ description: 'The APcu size.' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Enables or disables APC.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePhpAPcuRequest')

const UpdatePhpMemoryLimitRequestSchema = z
  .strictObject({
    memory_limit: z.int32().exactOptional().openapi({ description: 'The php memory limit' }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePhpMemoryLimitRequest')

const UpdateSmtpDomainRequestSchema = z
  .strictObject({ enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }) })
  .openapi({ required: [] })
  .openapi('UpdateSmtpDomainRequest')

const UpdateUserPasswordRequestSchema = z
  .strictObject({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password for the database user.<br />\r\nPasswords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { \' " \\ </li></ul>',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserPasswordRequest')

const UpdateUserStatusRequestSchema = z
  .strictObject({ enabled: z.boolean().exactOptional().openapi({ description: 'Enabled' }) })
  .openapi({ required: [] })
  .openapi('UpdateUserStatusRequest')

const WindowsHostingSchema = z
  .strictObject({
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name for the Windows hosting account.' }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of Windows hosting service package.' }),
  })
  .openapi({ required: [] })
  .openapi('WindowsHosting')

const WindowsIpTypeSchema = z
  .enum(['dedicated', 'shared'])
  .openapi({ description: 'Type of the hosting IP address (dedicated or shared)' })
  .openapi('WindowsIpType')

const WindowsSiteSchema = z
  .strictObject({
    bindings: z
      .array(SiteBindingSchema)
      .exactOptional()
      .openapi({ description: 'The bindings for the website.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the website.' }),
    path: z.string().exactOptional().openapi({ description: 'The path of the website.' }),
  })
  .openapi({ required: [] })
  .openapi('WindowsSite')

const WindowsHostingDetailSchema = z
  .strictObject({
    actual_size: z.int32().exactOptional().openapi({ description: 'Used webspace size in MB' }),
    application_pool: ApplicationPoolSchema.exactOptional(),
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name for the Windows hosting account.' }),
    ftp_username: z.string().exactOptional().openapi({ description: 'Ftp username' }),
    ip: z.string().exactOptional().openapi({ description: 'Windows hosting IP address' }),
    ip_type: WindowsIpTypeSchema.exactOptional(),
    max_size: z.int32().exactOptional().openapi({ description: 'Maximum webspace size in MB' }),
    mssql_database_names: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of mssql databases linked to the hosting account.<br />' }),
    servicepack_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of Windows hosting service package.' }),
    sites: z
      .array(WindowsSiteSchema)
      .exactOptional()
      .openapi({ description: 'A list of websites on the hosting account.' }),
  })
  .openapi({ required: [] })
  .openapi('WindowsHostingDetail')

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Overview of accounts',
  operationId: 'GetAccounts',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
      asset_type: AssetTypeSchema.openapi({
        param: {
          description:
            'Filters the list, returning only accounts containing the specified asset type.',
          in: 'query',
          name: 'asset_type',
          schema: { $ref: '#/components/schemas/AssetType' },
          required: false,
        },
      }).exactOptional(),
      identifier: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only accounts, matching the specified identifier.',
            in: 'query',
            name: 'identifier',
            schema: {
              description: 'Return only accounts, matching the specified identifier.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Return only accounts, matching the specified identifier.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Create a new account',
  description:
    'The creation of an account requires some background processing. There is no instant feedback of the creation status.',
  operationId: 'CreateAccount',
  request: {
    body: { description: '', content: { 'application/json': { schema: CreateAccountSchema } } },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  tags: ['Accounts'],
  summary: 'Get a specific account',
  operationId: 'GetAccount',
  request: {
    query: z.object({
      account_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the account.',
            in: 'query',
            name: 'account_id',
            required: true,
            schema: { description: 'The id of the account.', format: 'int32', type: 'integer' },
          },
          description: 'The id of the account.',
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AccountDetailSchema } },
    },
  },
})

export const getDnsDomainNameRecordsRoute = createRoute({
  method: 'get',
  path: '/dns/{domainName}/records',
  tags: ['DNS records'],
  summary: 'Get records',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name.', type: 'string' },
          },
          description: 'The domain name.',
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
      type: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters records matching the type. Most other filters only apply when this filter is specified.',
            in: 'query',
            name: 'type',
            schema: {
              description:
                'Filters records matching the type. Most other filters only apply when this filter is specified.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters records matching the type. Most other filters only apply when this filter is specified.',
        }),
      record_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.',
            in: 'query',
            name: 'record_name',
            schema: {
              description:
                'Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.',
        }),
      service: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters records for the service. This filter only applies to lookups of SRV records.',
            in: 'query',
            name: 'service',
            schema: {
              description:
                'Filters records for the service. This filter only applies to lookups of SRV records.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters records for the service. This filter only applies to lookups of SRV records.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DnsRecordSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postDnsDomainNameRecordsRoute = createRoute({
  method: 'post',
  path: '/dns/{domainName}/records',
  tags: ['DNS records'],
  summary: 'Create a record',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name.', type: 'string' },
          },
          description: 'The domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The record to create',
      content: { 'application/json': { schema: DnsRecordSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getDnsDomainNameRecordsRecordIdRoute = createRoute({
  method: 'get',
  path: '/dns/{domainName}/records/{recordId}',
  tags: ['DNS records'],
  summary: 'Get specific record',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name.', type: 'string' },
          },
          description: 'The domain name.',
        }),
      record_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the record.',
            in: 'query',
            name: 'record_id',
            required: true,
            schema: { description: 'The id of the record.', type: 'string' },
          },
          description: 'The id of the record.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recordId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DnsRecordSchema } } },
  },
})

export const putDnsDomainNameRecordsRecordIdRoute = createRoute({
  method: 'put',
  path: '/dns/{domainName}/records/{recordId}',
  tags: ['DNS records'],
  summary: 'Edit a record',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name.', type: 'string' },
          },
          description: 'The domain name.',
        }),
      record_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the record.',
            in: 'query',
            name: 'record_id',
            required: true,
            schema: { description: 'The id of the record.', type: 'string' },
          },
          description: 'The id of the record.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recordId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The record with updated values.',
      content: { 'application/json': { schema: DnsRecordSchema } },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteDnsDomainNameRecordsRecordIdRoute = createRoute({
  method: 'delete',
  path: '/dns/{domainName}/records/{recordId}',
  tags: ['DNS records'],
  summary: 'Delete a record',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name.', type: 'string' },
          },
          description: 'The domain name.',
        }),
      record_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the record.',
            in: 'query',
            name: 'record_id',
            required: true,
            schema: { description: 'The id of the record.', type: 'string' },
          },
          description: 'The id of the record.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recordId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Overviews of domains',
  operationId: 'GetDomains',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(DomainSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postDomainsRegistrationsRoute = createRoute({
  method: 'post',
  path: '/domains/registrations',
  tags: ['Domains'],
  summary: 'Register a domain',
  description:
    "Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.",
  operationId: 'Register',
  request: {
    body: { description: '', content: { 'application/json': { schema: RegisterDomainSchema } } },
  },
  responses: { 202: { description: 'Success' } },
})

export const postDomainsTransfersRoute = createRoute({
  method: 'post',
  path: '/domains/transfers',
  tags: ['Domains'],
  summary: 'Transfer a domain',
  description:
    "Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.",
  operationId: 'Transfer',
  request: {
    body: { description: '', content: { 'application/json': { schema: TransferDomainSchema } } },
  },
  responses: { 202: { description: 'Success' } },
})

export const getDomainsDomainNameRoute = createRoute({
  method: 'get',
  path: '/domains/{domainName}',
  tags: ['Domains'],
  summary: 'Details of a domain',
  operationId: 'GetDomain',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name', type: 'string' },
          },
          description: 'The domain name',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DomainDetailSchema } },
    },
  },
})

export const putDomainsDomainNameNameserversRoute = createRoute({
  method: 'put',
  path: '/domains/{domainName}/nameservers',
  tags: ['Domains'],
  summary: 'Edit domain name servers',
  operationId: 'EditNameServers',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name', type: 'string' },
          },
          description: 'The domain name',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: EditNameServersSchema } } },
  },
  responses: { 204: { description: 'Success' } },
})

export const putDomainsDomainNameRenewRoute = createRoute({
  method: 'put',
  path: '/domains/{domainName}/renew',
  tags: ['Domains'],
  summary: 'Edit domain name renew state',
  description:
    "Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>\r\nAllowed if the requesting user has the finance role.",
  operationId: 'ConfigureDomain',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The domain name',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The domain name', type: 'string' },
          },
          description: 'The domain name',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the domain renew information',
      content: { 'application/json': { schema: EditDomainWillRenewRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getLinuxhostingsRoute = createRoute({
  method: 'get',
  path: '/linuxhostings',
  tags: ['Linux hostings'],
  summary: 'Overview of linux hostings',
  operationId: 'GetLinuxHostings',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(LinuxHostingSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getLinuxhostingsDomainNameRoute = createRoute({
  method: 'get',
  path: '/linuxhostings/{domainName}',
  tags: ['Linux hostings'],
  summary: 'Linux hosting detail',
  operationId: 'GetLinuxHosting',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The Linux hosting domain name.', type: 'string' },
          },
          description: 'The Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LinuxHostingDetailSchema } },
    },
  },
})

export const putLinuxhostingsDomainNameFtpConfigurationRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/ftp/configuration',
  tags: ['Linux hostings'],
  summary: 'Configure FTP',
  operationId: 'ConfigureFtp',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: FtpConfigurationSchema } } },
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putLinuxhostingsDomainNamePhpsettingsApcuRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/phpsettings/apcu',
  tags: ['Linux hostings'],
  summary: 'Configure PHP APCu setting',
  operationId: 'ChangeApcu',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name', type: 'string' },
          },
          description: 'Linux hosting domain name',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Php APcu config',
      content: { 'application/json': { schema: UpdatePhpAPcuRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getLinuxhostingsDomainNamePhpsettingsAvailableversionsRoute = createRoute({
  method: 'get',
  path: '/linuxhostings/{domainName}/phpsettings/availableversions',
  tags: ['Linux hostings'],
  summary: 'Get the available PHP versions.',
  operationId: 'GetAvailablePhpVersions',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(PhpVersionSchema) } },
    },
  },
})

export const putLinuxhostingsDomainNamePhpsettingsMemorylimitRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/phpsettings/memorylimit',
  tags: ['Linux hostings'],
  summary: 'Configure PHP memory limit',
  operationId: 'ChangePhpMemoryLimit',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Memory limit config',
      content: { 'application/json': { schema: UpdatePhpMemoryLimitRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putLinuxhostingsDomainNamePhpsettingsVersionRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/phpsettings/version',
  tags: ['Linux hostings'],
  summary: 'Change the Linux hosting PHP version.',
  operationId: 'ChangePhpVersion',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new PHP version.',
      content: { 'application/json': { schema: PhpVersionSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getLinuxhostingsDomainNameScheduledtasksRoute = createRoute({
  method: 'get',
  path: '/linuxhostings/{domainName}/scheduledtasks',
  tags: ['Linux hostings'],
  summary: 'Overview of scheduled tasks',
  description: 'Manage scheduled tasks which are also manageable via the control panel.',
  operationId: 'GetScheduledTasks',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ScheduledTaskSchema) } },
    },
  },
})

export const postLinuxhostingsDomainNameScheduledtasksRoute = createRoute({
  method: 'post',
  path: '/linuxhostings/{domainName}/scheduledtasks',
  tags: ['Linux hostings'],
  summary: 'Add a scheduled task',
  operationId: 'AddScheduledTasks',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: ScheduledTaskSchema } } },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute = createRoute({
  method: 'get',
  path: '/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}',
  tags: ['Linux hostings'],
  summary: 'Get scheduled task detail',
  operationId: 'GetScheduledTask',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      scheduled_task_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the scheduled task.',
            in: 'query',
            name: 'scheduled_task_id',
            required: true,
            schema: { description: 'Id of the scheduled task.', type: 'string' },
          },
          description: 'Id of the scheduled task.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduledTaskId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'scheduledTaskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduledTaskSchema } },
    },
  },
})

export const putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}',
  tags: ['Linux hostings'],
  summary: 'Configure a scheduled task',
  operationId: 'ConfigureScheduledTask',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      scheduled_task_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the scheduled task.',
            in: 'query',
            name: 'scheduled_task_id',
            required: true,
            schema: { description: 'Id of the scheduled task.', type: 'string' },
          },
          description: 'Id of the scheduled task.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduledTaskId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'scheduledTaskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: ScheduledTaskSchema } } },
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute = createRoute({
  method: 'delete',
  path: '/linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}',
  tags: ['Linux hostings'],
  summary: 'Delete a scheduled task',
  operationId: 'DeleteScheduledTask',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      scheduled_task_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the scheduled task.',
            in: 'query',
            name: 'scheduled_task_id',
            required: true,
            schema: { description: 'Id of the scheduled task.', type: 'string' },
          },
          description: 'Id of the scheduled task.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduledTaskId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'scheduledTaskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putLinuxhostingsDomainNameSettingsGzipcompressionRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/settings/gzipcompression',
  tags: ['Linux hostings'],
  summary: 'Enable/disable GZIP compression',
  operationId: 'ChangeGzipCompression',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name', type: 'string' },
          },
          description: 'Linux hosting domain name',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Whether GZIP compression is enabled or not.',
      content: { 'application/json': { schema: GzipConfigSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postLinuxhostingsDomainNameSitesSiteNameHostheadersRoute = createRoute({
  method: 'post',
  path: '/linuxhostings/{domainName}/sites/{siteName}/hostheaders',
  tags: ['Linux hostings'],
  summary: 'Create a host header',
  operationId: 'CreateHostHeader',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      site_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the site on the linux hosting.',
            in: 'query',
            name: 'site_name',
            required: true,
            schema: { description: 'Name of the site on the linux hosting.', type: 'string' },
          },
          description: 'Name of the site on the linux hosting.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      siteName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'siteName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Add host header request',
      content: { 'application/json': { schema: AddHostHeaderRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/sites/{siteName}/http2/configuration',
  tags: ['Linux hostings'],
  summary: 'Configure HTTP/2',
  operationId: 'ConfigureHttp2',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      site_name: z
        .string()
        .openapi({
          param: {
            description:
              'Site name where HTTP/2 should be configured.<br />\r\nFor HTTP/2 to work correctly, the site must have ssl enabled.',
            in: 'query',
            name: 'site_name',
            required: true,
            schema: {
              description:
                'Site name where HTTP/2 should be configured.<br />\r\nFor HTTP/2 to work correctly, the site must have ssl enabled.',
              type: 'string',
            },
          },
          description:
            'Site name where HTTP/2 should be configured.<br />\r\nFor HTTP/2 to work correctly, the site must have ssl enabled.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      siteName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'siteName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: Http2ConfigurationSchema } },
    },
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putLinuxhostingsDomainNameSshConfigurationRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/ssh/configuration',
  tags: ['Linux hostings'],
  summary: 'Configure SSH',
  operationId: 'ConfigureSsh',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: SshConfigurationSchema } } },
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const getLinuxhostingsDomainNameSshKeysRoute = createRoute({
  method: 'get',
  path: '/linuxhostings/{domainName}/ssh/keys',
  tags: ['Linux hostings'],
  summary: 'Overview of SSH keys',
  operationId: 'GetSshKeys',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SshKeySchema) } },
    },
  },
})

export const postLinuxhostingsDomainNameSshKeysRoute = createRoute({
  method: 'post',
  path: '/linuxhostings/{domainName}/ssh/keys',
  tags: ['Linux hostings'],
  summary: 'Add a SSH key',
  operationId: 'AddSshKey',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'SSH key public key.',
      content: { 'application/json': { schema: AddSshKeyRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteLinuxhostingsDomainNameSshKeysFingerprintRoute = createRoute({
  method: 'delete',
  path: '/linuxhostings/{domainName}/ssh/keys/{fingerprint}',
  tags: ['Linux hostings'],
  summary: 'Delete a SSH key',
  operationId: 'DeleteSshKey',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      fingerprint: z
        .string()
        .openapi({
          param: {
            description: 'Fingerprint of public key.',
            in: 'path',
            name: 'fingerprint',
            required: true,
            schema: { description: 'Fingerprint of public key.', type: 'string' },
          },
          description: 'Fingerprint of public key.',
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/sslsettings/{hostname}/autoredirect',
  tags: ['Linux hostings'],
  summary: 'Configure auto redirect',
  operationId: 'ChangeAutoRedirect',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      hostname: z
        .string()
        .openapi({
          param: {
            description: 'Specific hostname.',
            in: 'path',
            name: 'hostname',
            required: true,
            schema: { description: 'Specific hostname.', type: 'string' },
          },
          description: 'Specific hostname.',
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Auto redirect config.',
      content: { 'application/json': { schema: AutoRedirectConfigSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRoute = createRoute({
  method: 'put',
  path: '/linuxhostings/{domainName}/sslsettings/{hostname}/letsencrypt',
  tags: ['Linux hostings'],
  summary: "Configure let's encrypt",
  operationId: 'ChangeLetsEncrypt',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      hostname: z
        .string()
        .openapi({
          param: {
            description: 'Specific hostname.',
            in: 'path',
            name: 'hostname',
            required: true,
            schema: { description: 'Specific hostname.', type: 'string' },
          },
          description: 'Specific hostname.',
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "Let's encrypt config.",
      content: { 'application/json': { schema: LetsEncryptConfigSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postLinuxhostingsDomainNameSubsitesRoute = createRoute({
  method: 'post',
  path: '/linuxhostings/{domainName}/subsites',
  tags: ['Linux hostings'],
  summary: 'Create a subsite',
  operationId: 'CreateSubsite',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Add subsite request',
      content: { 'application/json': { schema: AddSubsiteRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteLinuxhostingsDomainNameSubsitesSiteNameRoute = createRoute({
  method: 'delete',
  path: '/linuxhostings/{domainName}/subsites/{siteName}',
  tags: ['Linux hostings'],
  summary: 'Delete a subsite',
  operationId: 'DeleteSubsite',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Linux hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Linux hosting domain name.', type: 'string' },
          },
          description: 'Linux hosting domain name.',
        }),
      site_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the site on the linux hosting.',
            in: 'query',
            name: 'site_name',
            required: true,
            schema: { description: 'Name of the site on the linux hosting.', type: 'string' },
          },
          description: 'Name of the site on the linux hosting.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      siteName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'siteName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const getMailboxesRoute = createRoute({
  method: 'get',
  path: '/mailboxes',
  tags: ['Mailboxes'],
  summary: 'Gets your mailboxes.',
  description: 'Currently only supports getting the mailboxes filtered by domain name.',
  operationId: 'GetMailboxes',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Obligated domain name for getting mailboxes.',
            in: 'query',
            name: 'domain_name',
            schema: {
              description: 'Obligated domain name for getting mailboxes.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Obligated domain name for getting mailboxes.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MailboxSchema) } },
    },
  },
})

export const postMailboxesRoute = createRoute({
  method: 'post',
  path: '/mailboxes',
  tags: ['Mailboxes'],
  summary: 'Create a new mailbox.',
  operationId: 'CreateMailbox',
  request: {
    body: {
      description: 'The add mailbox request.',
      content: { 'application/json': { schema: CreateMailboxRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getMailboxesMailboxNameRoute = createRoute({
  method: 'get',
  path: '/mailboxes/{mailboxName}',
  tags: ['Mailboxes'],
  summary: 'Get a specific mailbox',
  operationId: 'GetMailbox',
  request: {
    query: z.object({
      mailbox_name: z
        .string()
        .openapi({
          param: {
            description: 'Mailbox name.',
            in: 'query',
            name: 'mailbox_name',
            required: true,
            schema: { description: 'Mailbox name.', type: 'string' },
          },
          description: 'Mailbox name.',
        }),
    }),
    params: z.object({
      mailboxName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'mailboxName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MailboxDetailSchema } },
    },
  },
})

export const deleteMailboxesMailboxNameRoute = createRoute({
  method: 'delete',
  path: '/mailboxes/{mailboxName}',
  tags: ['Mailboxes'],
  summary: 'Delete a mailbox',
  operationId: 'DeleteMailbox',
  request: {
    query: z.object({
      mailbox_name: z
        .string()
        .openapi({
          param: {
            description: 'Mailbox name.',
            in: 'query',
            name: 'mailbox_name',
            required: true,
            schema: { description: 'Mailbox name.', type: 'string' },
          },
          description: 'Mailbox name.',
        }),
    }),
    params: z.object({
      mailboxName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'mailboxName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putMailboxesMailboxNameAutoforwardRoute = createRoute({
  method: 'put',
  path: '/mailboxes/{mailboxName}/autoforward',
  tags: ['Mailboxes'],
  summary: 'Configure auto-forward for mailbox',
  operationId: 'ConfigureMailboxAutoForward',
  request: {
    query: z.object({
      mailbox_name: z
        .string()
        .openapi({
          param: {
            description: 'Mailbox name.',
            in: 'query',
            name: 'mailbox_name',
            required: true,
            schema: { description: 'Mailbox name.', type: 'string' },
          },
          description: 'Mailbox name.',
        }),
    }),
    params: z.object({
      mailboxName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'mailboxName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the auto-forward information.',
      content: { 'application/json': { schema: AutoForwardSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putMailboxesMailboxNameAutoreplyRoute = createRoute({
  method: 'put',
  path: '/mailboxes/{mailboxName}/autoreply',
  tags: ['Mailboxes'],
  summary: 'Configure auto-reply for mailbox',
  operationId: 'ConfigureMailboxAutoReply',
  request: {
    query: z.object({
      mailbox_name: z
        .string()
        .openapi({
          param: {
            description: 'Mailbox name.',
            in: 'query',
            name: 'mailbox_name',
            required: true,
            schema: { description: 'Mailbox name.', type: 'string' },
          },
          description: 'Mailbox name.',
        }),
    }),
    params: z.object({
      mailboxName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'mailboxName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the auto-reply information.',
      content: { 'application/json': { schema: AutoReplySchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putMailboxesMailboxNamePasswordRoute = createRoute({
  method: 'put',
  path: '/mailboxes/{mailboxName}/password',
  tags: ['Mailboxes'],
  summary: 'Change password for mailbox',
  operationId: 'ChangeMailboxPassword',
  request: {
    query: z.object({
      mailbox_name: z
        .string()
        .openapi({
          param: {
            description: 'Mailbox name.',
            in: 'query',
            name: 'mailbox_name',
            required: true,
            schema: { description: 'Mailbox name.', type: 'string' },
          },
          description: 'Mailbox name.',
        }),
    }),
    params: z.object({
      mailboxName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'mailboxName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the new password.',
      content: { 'application/json': { schema: UpdateMailboxPasswordRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getMailzonesDomainNameRoute = createRoute({
  method: 'get',
  path: '/mailzones/{domainName}',
  tags: ['Mail zones'],
  summary: 'Get the mail zone.',
  operationId: 'GetMailZone',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MailZoneSchema } } },
  },
})

export const postMailzonesDomainNameAliasesRoute = createRoute({
  method: 'post',
  path: '/mailzones/{domainName}/aliases',
  tags: ['Mail zones'],
  summary: 'Create a new alias',
  operationId: 'CreateAlias',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the alias information.',
      content: { 'application/json': { schema: CreateAliasRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const putMailzonesDomainNameAliasesEmailAddressRoute = createRoute({
  method: 'put',
  path: '/mailzones/{domainName}/aliases/{emailAddress}',
  tags: ['Mail zones'],
  summary: 'Configure a alias',
  operationId: 'ConfigureAlias',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
      email_address: z
        .string()
        .openapi({
          param: {
            description: 'Alias e-mail address.',
            in: 'query',
            name: 'email_address',
            required: true,
            schema: { description: 'Alias e-mail address.', type: 'string' },
          },
          description: 'Alias e-mail address.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the alias information.',
      content: { 'application/json': { schema: UpdateAliasRequestSchema } },
    },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const deleteMailzonesDomainNameAliasesEmailAddressRoute = createRoute({
  method: 'delete',
  path: '/mailzones/{domainName}/aliases/{emailAddress}',
  tags: ['Mail zones'],
  summary: 'Delete a alias',
  operationId: 'DeleteAlias',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
      email_address: z
        .string()
        .openapi({
          param: {
            description: 'Alias e-mail address.',
            in: 'query',
            name: 'email_address',
            required: true,
            schema: { description: 'Alias e-mail address.', type: 'string' },
          },
          description: 'Alias e-mail address.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putMailzonesDomainNameAntispamRoute = createRoute({
  method: 'put',
  path: '/mailzones/{domainName}/antispam',
  tags: ['Mail zones'],
  summary: 'Configure anti-spam for mail zone',
  operationId: 'ConfigureAntiSpam',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the anti-spam information.',
      content: { 'application/json': { schema: UpdateAntiSpamRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postMailzonesDomainNameCatchallRoute = createRoute({
  method: 'post',
  path: '/mailzones/{domainName}/catchall',
  tags: ['Mail zones'],
  summary: 'Create a catch-all on the mail zone',
  operationId: 'CreateCatchAll',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the catch-all information.',
      content: { 'application/json': { schema: CreateCatchAllRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteMailzonesDomainNameCatchallEmailAddressRoute = createRoute({
  method: 'delete',
  path: '/mailzones/{domainName}/catchall/{emailAddress}',
  tags: ['Mail zones'],
  summary: 'Delete a catch-all on the mail zone',
  operationId: 'DeleteCatchAll',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
      email_address: z
        .string()
        .openapi({
          param: {
            description:
              'E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.',
            in: 'query',
            name: 'email_address',
            required: true,
            schema: {
              description:
                'E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.',
              type: 'string',
            },
          },
          description:
            'E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postMailzonesDomainNameSmtpdomainsRoute = createRoute({
  method: 'post',
  path: '/mailzones/{domainName}/smtpdomains',
  tags: ['Mail zones'],
  summary: 'Create an extra smtp domain',
  operationId: 'CreateSmtpDomain',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the smtp domain information.',
      content: { 'application/json': { schema: CreateSmtpDomainRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const putMailzonesDomainNameSmtpdomainsHostnameRoute = createRoute({
  method: 'put',
  path: '/mailzones/{domainName}/smtpdomains/{hostname}',
  tags: ['Mail zones'],
  summary: 'Configure an extra smtp domain',
  operationId: 'ConfigureSmtpDomain',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      hostname: z
        .string()
        .openapi({
          param: {
            description: 'Smtp domain name.',
            in: 'path',
            name: 'hostname',
            required: true,
            schema: { description: 'Smtp domain name.', type: 'string' },
          },
          description: 'Smtp domain name.',
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the smtp domain information.',
      content: { 'application/json': { schema: UpdateSmtpDomainRequestSchema } },
    },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const deleteMailzonesDomainNameSmtpdomainsHostnameRoute = createRoute({
  method: 'delete',
  path: '/mailzones/{domainName}/smtpdomains/{hostname}',
  tags: ['Mail zones'],
  summary: 'Delete an extra smtp domain',
  operationId: 'DeleteSmtpDomain',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'Mail zone domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'Mail zone domain name.', type: 'string' },
          },
          description: 'Mail zone domain name.',
        }),
    }),
    params: z.object({
      hostname: z
        .string()
        .openapi({
          param: {
            description: 'Smtp domain name.',
            in: 'path',
            name: 'hostname',
            required: true,
            schema: { description: 'Smtp domain name.', type: 'string' },
          },
          description: 'Smtp domain name.',
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const getMysqldatabasesRoute = createRoute({
  method: 'get',
  path: '/mysqldatabases',
  tags: ['MySql databases'],
  summary: 'Overview of mysql databases',
  operationId: 'GetMySqlDatabases',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MySqlDatabaseSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMysqldatabasesRoute = createRoute({
  method: 'post',
  path: '/mysqldatabases',
  tags: ['MySql databases'],
  summary: 'Create a new mysql database',
  operationId: 'CreateMySqlDatabase',
  request: {
    body: {
      description: '',
      content: { 'application/json': { schema: CreateMySqlDatabaseSchema } },
    },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getMysqldatabasesDatabaseNameRoute = createRoute({
  method: 'get',
  path: '/mysqldatabases/{databaseName}',
  tags: ['MySql databases'],
  summary: 'Get a specific database',
  operationId: 'GetMySqlDatabase',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: { in: 'query', name: 'database_name', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MySqlDatabaseSchema } },
    },
  },
})

export const deleteMysqldatabasesDatabaseNameRoute = createRoute({
  method: 'delete',
  path: '/mysqldatabases/{databaseName}',
  tags: ['MySql databases'],
  summary: 'Delete a mysql database',
  operationId: 'DeleteDatabase',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const getMysqldatabasesDatabaseNameUsersRoute = createRoute({
  method: 'get',
  path: '/mysqldatabases/{databaseName}/users',
  tags: ['MySql databases'],
  summary: 'Overview of mysql users',
  operationId: 'GetDatabaseUsers',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MySqlUserSchema) } },
    },
  },
})

export const postMysqldatabasesDatabaseNameUsersRoute = createRoute({
  method: 'post',
  path: '/mysqldatabases/{databaseName}/users',
  tags: ['MySql databases'],
  summary: 'Create a new mysql user',
  description: 'The creation of a new mysql user will result in a user with read_only rights.',
  operationId: 'CreateMySqlUser',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: CreateMySqlUserSchema } } },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const deleteMysqldatabasesDatabaseNameUsersUserNameRoute = createRoute({
  method: 'delete',
  path: '/mysqldatabases/{databaseName}/users/{userName}',
  tags: ['MySql databases'],
  summary: 'Delete a mysql user',
  description: 'The deletion of a mysql user is allowed for users with read_only rights.',
  operationId: 'DeleteDatabaseUser',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
      user_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the user.',
            in: 'query',
            name: 'user_name',
            required: true,
            schema: { description: 'Name of the user.', type: 'string' },
          },
          description: 'Name of the user.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 400: { description: 'Bad Request' } },
})

export const putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute = createRoute({
  method: 'put',
  path: '/mysqldatabases/{databaseName}/users/{userName}/password',
  tags: ['MySql databases'],
  summary: 'Change password for mysql user',
  operationId: 'ChangeDatabaseUserPassword',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
      user_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the user.',
            in: 'query',
            name: 'user_name',
            required: true,
            schema: { description: 'Name of the user.', type: 'string' },
          },
          description: 'Name of the user.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Contains the new password.',
      content: { 'application/json': { schema: UpdateUserPasswordRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putMysqldatabasesDatabaseNameUsersUserNameStatusRoute = createRoute({
  method: 'put',
  path: '/mysqldatabases/{databaseName}/users/{userName}/status',
  tags: ['MySql databases'],
  summary: 'Enable/disable mysql user',
  operationId: 'ChangeDatabaseUserStatus',
  request: {
    query: z.object({
      database_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database.',
            in: 'query',
            name: 'database_name',
            required: true,
            schema: { description: 'Name of the database.', type: 'string' },
          },
          description: 'Name of the database.',
        }),
      user_name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the user.',
            in: 'query',
            name: 'user_name',
            required: true,
            schema: { description: 'Name of the user.', type: 'string' },
          },
          description: 'Name of the user.',
        }),
    }),
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Whether the user is enabled or not.',
      content: { 'application/json': { schema: UpdateUserStatusRequestSchema } },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getProvisioningjobsJobIdRoute = createRoute({
  method: 'get',
  path: '/provisioningjobs/{jobId}',
  tags: ['Provisioning jobs'],
  summary: 'Detail of a provisioning job',
  description:
    'Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />\r\nDo NOT retry provisioning until the job reports finished or cancelled.',
  request: {
    query: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            in: 'query',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProvisioningJobInfoSchema } },
    },
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ProvisioningJobCompletionSchema } },
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getServicepacksRoute = createRoute({
  method: 'get',
  path: '/servicepacks',
  tags: ['Servicepacks'],
  summary: 'Overview of service packs',
  operationId: 'Servicepacks',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ServicepackSchema) } },
    },
  },
})

export const getSshRoute = createRoute({
  method: 'get',
  path: '/ssh',
  tags: ['SSH'],
  summary: 'Overview of SSH keys',
  operationId: 'GetAllSshKeys',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SshKeyDetailSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSslcertificaterequestsRoute = createRoute({
  method: 'get',
  path: '/sslcertificaterequests',
  tags: ['SSL certificate requests'],
  summary: 'Overview of SSL certificate requests',
  operationId: 'GetSslCertificateRequests',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SslCertificateRequestSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postSslcertificaterequestsRoute = createRoute({
  method: 'post',
  path: '/sslcertificaterequests',
  tags: ['SSL certificate requests'],
  summary: 'Add a SSL certificate request',
  description:
    'Executing this method causes the purchase of a paying product.<br />\r\nLog on to our website to see your current (renewal) prices or contact our Sales department.<br />\r\nPlease note that promotional pricing does not apply for purchases made through our API.',
  operationId: 'AddSslCertificateRequest',
  request: {
    body: {
      description: '',
      content: { 'application/json': { schema: CreateSslCertificateRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'The location of the created resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The location of the created resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSslcertificaterequestsIdRoute = createRoute({
  method: 'get',
  path: '/sslcertificaterequests/{id}',
  tags: ['SSL certificate requests'],
  summary: 'Detail of a SSL certificate request',
  operationId: 'GetSslCertificateRequest',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the certificate request.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The id of the certificate request.',
              format: 'int32',
              type: 'integer',
            },
          },
          description: 'The id of the certificate request.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SslCertificateRequestDetailSchema } },
    },
    303: {
      description: 'Redirect',
      headers: z.object({
        Location: {
          description: 'The location referring to a resource that replaced the original resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The location referring to a resource that replaced the original resource.',
              param: { required: false },
            }),
        },
      }),
    },
    410: { description: 'The resource existed in the past, but is no longer available.' },
  },
})

export const putSslcertificaterequestsIdRoute = createRoute({
  method: 'put',
  path: '/sslcertificaterequests/{id}',
  tags: ['SSL certificate requests'],
  summary: 'Verify the SSL certificate request domain validations',
  operationId: 'VerifySslCertificateRequestDomainValidations',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the certificate request.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The id of the certificate request.',
              format: 'int32',
              type: 'integer',
            },
          },
          description: 'The id of the certificate request.',
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    303: {
      description: 'Redirect',
      headers: z.object({
        Location: {
          description: 'The location referring to a resource that replaced the original resource.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The location referring to a resource that replaced the original resource.',
              param: { required: false },
            }),
        },
      }),
    },
    410: { description: 'The resource existed in the past, but is no longer available.' },
  },
})

export const getSslcertificatesRoute = createRoute({
  method: 'get',
  path: '/sslcertificates',
  tags: ['SSL certificates'],
  summary: 'Overview of SSL certificates',
  operationId: 'GetSslCertificates',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SslCertificateSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSslcertificatesSha1FingerprintRoute = createRoute({
  method: 'get',
  path: '/sslcertificates/{sha1Fingerprint}',
  tags: ['SSL certificates'],
  summary: 'Detail of a SSL certificate',
  operationId: 'GetSslCertificate',
  request: {
    query: z.object({
      sha1_fingerprint: z
        .string()
        .openapi({
          param: {
            description: 'The SHA-1 fingerprint of the certificate.',
            in: 'query',
            name: 'sha1_fingerprint',
            required: true,
            schema: { description: 'The SHA-1 fingerprint of the certificate.', type: 'string' },
          },
          description: 'The SHA-1 fingerprint of the certificate.',
        }),
    }),
    params: z.object({
      sha1Fingerprint: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'sha1Fingerprint',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SslCertificateDetailSchema } },
    },
  },
})

export const getSslcertificatesSha1FingerprintDownloadRoute = createRoute({
  method: 'get',
  path: '/sslcertificates/{sha1Fingerprint}/download',
  tags: ['SSL certificates'],
  summary: 'Download a SSL certificate',
  description:
    'Returns the certifcate as binary data with the content-type and the filename information in the response headers.',
  operationId: 'DownloadCertificate',
  request: {
    query: z.object({
      sha1_fingerprint: z
        .string()
        .openapi({
          param: {
            description: 'The SHA-1 fingerprint of the certificate.',
            in: 'query',
            name: 'sha1_fingerprint',
            required: true,
            schema: { description: 'The SHA-1 fingerprint of the certificate.', type: 'string' },
          },
          description: 'The SHA-1 fingerprint of the certificate.',
        }),
      file_format: SslCertificateFileFormatSchema.openapi({
        param: {
          description:
            'The file format of the returned file stream:\r\n<ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>',
          in: 'query',
          name: 'file_format',
          required: true,
          schema: { $ref: '#/components/schemas/SslCertificateFileFormat' },
        },
      }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'The password used to protect the certificate file.<br />',
            in: 'query',
            name: 'password',
            required: true,
            schema: {
              description: 'The password used to protect the certificate file.<br />',
              type: 'string',
            },
          },
          description: 'The password used to protect the certificate file.<br />',
        }),
    }),
    params: z.object({
      sha1Fingerprint: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'sha1Fingerprint',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: { description: 'Invalid file_format or invalid password' },
  },
})

export const getWindowshostingsRoute = createRoute({
  method: 'get',
  path: '/windowshostings',
  tags: ['Windows hostings'],
  summary: 'Overview of windows hostings',
  operationId: 'GetWindowsHostings',
  request: {
    query: z.object({
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip in the resultset.',
            in: 'query',
            name: 'skip',
            schema: {
              description: 'The number of items to skip in the resultset.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of items to skip in the resultset.',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to return in the resultset. The returned count can be equal or less than this number.',
            in: 'query',
            name: 'take',
            schema: {
              description:
                'The number of items to return in the resultset. The returned count can be equal or less than this number.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The number of items to return in the resultset. The returned count can be equal or less than this number.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(WindowsHostingSchema) } },
      headers: z.object({
        'X-Paging-Skipped': {
          description: 'The number of results that have been skipped.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of results that have been skipped.',
              param: { required: false },
            }),
        },
        'X-Paging-Take': {
          description:
            'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.',
              param: { required: false },
            }),
        },
        'X-Paging-TotalResults': {
          description: 'The total number of results regardless of paging.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The total number of results regardless of paging.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getWindowshostingsDomainNameRoute = createRoute({
  method: 'get',
  path: '/windowshostings/{domainName}',
  tags: ['Windows hostings'],
  summary: 'Windows hosting detail',
  operationId: 'GetWindowsHosting',
  request: {
    query: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            description: 'The Windows hosting domain name.',
            in: 'query',
            name: 'domain_name',
            required: true,
            schema: { description: 'The Windows hosting domain name.', type: 'string' },
          },
          description: 'The Windows hosting domain name.',
        }),
    }),
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WindowsHostingDetailSchema } },
    },
  },
})
